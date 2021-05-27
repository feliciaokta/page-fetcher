// implement code which should take a URL as a command-line argument,
// as well as a local file path and download the resource to the specified path.

// use the request library to make the HTTP request
// use Node's fs module to write the file
// use the callback based approach we've been learning so far
// do NOT use the pipe function
// do NOT use synchronous functions

const request = require('request');
const fs = require("fs");

const fetchPage = function () {
  const URL = "http://www.example.edu";
  request(URL, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the homepage.
  })
};

// fs.writeFile(filename, data, [encoding], [callback])
fs.writeFile('pageFetcher.txt', fetchPage, function (err) {
  if (err) return console.log(err);
  console.log('Downloaded and saved pageFetcher.txt');
});