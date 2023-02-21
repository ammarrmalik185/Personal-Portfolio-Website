const next = require('next')
const { expressApp } = require('./app')
const http = require("http");

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {

        expressApp.get('/api/todolist', (req, res) => {
            return res.send({ list: []})
        })

        expressApp.get('*', (req, res) => {
            return handle(req, res)
        })

        const server = http.createServer(expressApp);
        server.listen(process.env.PORT);

    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
