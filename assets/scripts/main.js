(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./_src/scripts/main.js":[function(require,module,exports){
"use strict";function loadHandler(){request.status>=200&&request.status<400?(data=JSON.parse(request.responseText),dataHandler(data)):console.log("Server error.",request.responseText)}function errorHandler(){console.log("Connection problem.",request.responseText)}function dataHandler(e){console.log(e)}var key="On1e8GCuPWAcEcbvrSoNUGDIzsHWvVYCOUqohI0NBTF1nPBaxq",url="//api.tumblr.com/v2/blog/unsplash.tumblr.com/posts/photo?api_key="+key,data=null,request=new XMLHttpRequest;request.open("GET",url,!0),request.onload=loadHandler,request.onerror=errorHandler,request.send();var url="https://unsplash.imgix.net/reserve/unsplash_52d8277ccad75_1.JPG?q=75&fm=jpg&auto=format&s=6f89bc9c4262ae2aed247bdae6f7b388";document.body.style.backgroundImage="url('"+url+"')";
},{}]},{},["./_src/scripts/main.js"]);
