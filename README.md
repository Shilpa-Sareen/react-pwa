# react-pwa
This is a demo for react app which will respond when offline. 
There are two apis used in this example: 
The first api is :  https://jsonplaceholder.typicode.com/users and when clicking on Refresh button it will hit: https://jsonplaceholder.typicode.com/comments 
Both will be cached by the Service-worker.js 


Steps to run this Demo:

Preqeuisite: Make sure node is installed at you system. If it is not then follow the link to install it: https://nodejs.org/en/download/
Then follow the below steps: 

1. npm install or npm i
2. npm run build 
3. cd build and npm i express.js
4. node server.js (The server get started at localhost:5000)
