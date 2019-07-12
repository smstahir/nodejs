const url=require('url');

const myurl=new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

//serialized url
console.log(myurl.href);
console.log(myurl.hostname);
console.log(myurl.pathname);
console.log(myurl.search);