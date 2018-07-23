import Server from './server/server';
import router from './router/router';
import express = require('express');
import path = require('path');

const server = Server.init(8080);

server.app.use(express.static(path.join(__dirname, 'public')));

server.app.use(router);

server.start(() => console.log("Server started"));
