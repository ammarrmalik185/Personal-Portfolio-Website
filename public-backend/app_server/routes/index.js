const router = require('express').Router();

// const authRouter = require('./auth.route');
const blogRouter = require('./blog.router');
const projectRouter = require('./project.router');
const portfolioRouter = require('./portfolio.router');

const defaultRoutes = [
    {
        path: '/blog',
        route: blogRouter,
    },
    {
        path: '/project',
        route: projectRouter,
    },
    {
        path: '/portfolio',
        route: portfolioRouter,
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
