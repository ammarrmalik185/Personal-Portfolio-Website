const { firebase } = require("../services");
const blogCollectionName = "blogs";

function createBlog(req, res, next) {
    firebase.firestore.collection(blogCollectionName).add(req.body)
    .then(blog => res.status(201).json({
      status: 'success',
      data: blog,
    }))
    .catch(next);
}

function updateBlog(req, res, next){
    firebase.firestore.collection(blogCollectionName).doc(req.params.id).set(req.body)
        .then(blog => res.status(201).json({
            status: 'success',
            data: blog,
        }))
        .catch(next);
}

function getAllBlogs(req, res, next) {
    firebase.firestore.collection(blogCollectionName).get()
        .then(querySnapshot => {
            let blogs = [];
            querySnapshot.forEach((blog) => {
                blogs.push({...blog.data(), id: blog.id});
            });
            res.status(200).json({
                status: 'success',
                data: blogs,
            })
        })
        .catch(next);
}

function getBlog(req, res, next) {
    firebase.firestore.collection(blogCollectionName).doc(req.params.id).get()
        .then(blog => {
            if (blog.exists)
                res.status(200).json({
                    status: 'success',
                    data: {...blog.data(), id: blog.id},
                })
            else
                res.status(404).json({
                    status: 'fail',
                    message: 'Blog not found',
                })
        })
        .catch(next);
}

module.exports = {
    createBlog,
    updateBlog,
    getAllBlogs,
    getBlog,
};
