const  fs = require('fs');
const http= require ('http');
const url= require ('url');
const fetch = require ('node-fetch')

fetch('http://jsonplaceholder.typicode.com/posts' ).then(res=>res.text())
.then(text=>fs.writeFile('./result/posts.txt',text, 'utf-8', err=>{  
     console.log('your files have been fetched and written')}))
