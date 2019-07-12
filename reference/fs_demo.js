const fs = require('fs');
const path = require('path');
const folderName = 'test';
const fileName = 'test.txt';
// create a folder
// fs.mkdir(path.join(__dirname, '/' + folderName), {}, err => {
//     if (err) throw err;
//     console.log('folder <' + folderName + '> has been created');
// });

// create and write to file
// fs.writeFile(path.join(__dirname, '/' + folderName, fileName), 'hello world', err => {
//     if (err) throw err;
//     console.log('file <' + fileName + '> has been created and written to');
//     //modify file
//     fs.appendFile(path.join(__dirname, '/' + folderName, fileName), 'i love nodejs', err => {
//         if (err) throw err;
//         console.log('file <' + fileName + '> has been created and written to');
//     });
// });


// read file
// fs.readFile(path.join(__dirname, '/' + folderName, fileName), 'utf-8', (err,data) => {
//     if (err) throw err;
//     console.log(data);
// });


// rename file name
fs.rename(path.join(__dirname, '/' + folderName, fileName), path.join(__dirname, '/' + folderName, 'newTest.txt'), err => {
    if (err) throw err;
    console.log('filename has been changed'); 
});
