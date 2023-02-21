function api(req, res, next) {
    const apiData = require("../../../package.json");
    res.status(200).json({
        name: apiData.name,
        version: apiData.version,
        status: "started",
        environment: process.env.NODE_ENV
    });
}

module.exports = { api };
