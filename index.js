// const Person=require('./person');
// const person=new Person('shah',26);

// person.greeting();

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called listener:', data));

// logger.log('shah');
// logger.log('Qasim');
// logger.log('Zulfuqar');


const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //static path not good
    // if (req.url === '/') {
    //     // res.writeHead(200,{'Content-Type':'text/html'})
    //     // res.end('<h1>Home</h1>');
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(content);
    //     })
    // } else if (req.url === '/about') {

    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.end(content);
    //     })
    // } else if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'shah', age: 26 },
    //         { name: 'zulfi', age:10 }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify(users));

    // }

    /**
     * build file path dynamic
     */
    let filePath = path.join(__dirname, 'public', req.url === '/' ?
        'index.html' : req.url);
    //extension of the file
    let extName = path.extname(filePath);

    //initial content type
    let contentType = 'text/html';

    //check ext and select content type
    switch (extName) {
        case '.js': contentType = 'text/javascript';
            break;
        case '.css': contentType = 'text/css';
            break;
        case '.json': contentType = 'application/json';
            break;
        case '.png': contentType = 'image/png';
            break;
        case '.jpg': contentType = 'image/jpg';
            break;
    }
    // Check if contentType is text/html but no .html file extension
    if (contentType == "text/html" && extName == "") filePath += ".html";

    // log the filePath
    console.log(filePath);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    if (err) return err;
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                })
            } else {
                //some server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            //success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }

    })
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));