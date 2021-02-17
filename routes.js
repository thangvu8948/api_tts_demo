const { json } = require("express");
var express = require("express");
let router = express.Router();

module.exports = function(app) {
    let controller = require('./controllers/controller');
  
    // todoList Routes
    app.route('/')
    .get((req, res) => res.json("Hello world"))

    app.route('/getLink')
      .get(controller.get)

  };