const router = require('express').Router();

// const authRouter = require('./auth.route');
// const userRouter = require('./user.router');
const blogRouter = require('./blog.router');

const defaultRoutes = [
    {
        path: '/blog',
        route: blogRouter,
    },
];

const devRoutes = [

];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

if (process.env.NODE_ENV === 'development') {
    devRoutes.forEach((route) => {
        router.use(route.path, route.route);
    });
}

module.exports = router;
