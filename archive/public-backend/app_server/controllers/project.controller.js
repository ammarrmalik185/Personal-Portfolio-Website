const { firebase } = require("../services");
const projectCollectionName = "project";

function createProject(req, res, next) {
    firebase.firestore.collection(projectCollectionName).add(req.body)
        .then(project => res.status(201).json({
            status: 'success',
            data: project,
        }))
        .catch(next);
}

function updateProject(req, res, next){
    firebase.firestore.collection(projectCollectionName).doc(req.params.id).set(req.body)
        .then(project => res.status(201).json({
            status: 'success',
            data: project,
        }))
        .catch(next);
}

function getAllProjects(req, res, next) {
    firebase.firestore.collection(projectCollectionName).get()
        .then(querySnapshot => {
            let projects = [];
            querySnapshot.forEach((project) => {
                projects.push({...project.data(), id: project.id});
            });
            res.status(200).json({
                status: 'success',
                data: projects,
            })
        })
        .catch(next);
}

function getProject(req, res, next) {
    firebase.firestore.collection(projectCollectionName).doc(req.params.id).get()
        .then(project => {
            if (project.exists)
                res.status(200).json({
                    status: 'success',
                    data: {...project.data(), id: project.id},
                })
            else
                res.status(404).json({
                    status: 'fail',
                    message: 'Project not found',
                })
        })
        .catch(next);
}

module.exports = {
    createProject,
    updateProject,
    getAllProjects,
    getProject,
};
