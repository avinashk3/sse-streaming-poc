const Koa = require('koa');
const app = new Koa();
const fs = require("fs")
const http = require("http")
app.use(async (ctx) => {
    if (ctx.request.url === '/measurements.json') {
        ctx.response.set('content-type', 'application/json');
        // This is where the magic happens: set a stream as the response body
        ctx.body = fs.createReadStream('./measurements.json');
    }
});

http.createServer(app.callback()).listen(3000);