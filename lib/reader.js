'use strict';

const fs = require('fs');
const reader = module.exports = {};

reader.read = function(path, callback) {
  let filepath = [`${__dirname}/../assets/tolkien.txt`, `${__dirname}/../assets/dnd.txt`, `${__dirname}/../assets/wow.txt`];
  let filedata = [];

  if(!path || typeof path !== 'object') return null;

  fs.readFile(filepath[0], (err, data) => {
    if(err) return callback(err);
    filedata.push(data.toString('utf-8', 0, 32));

    fs.readFile(filepath[1], (err, data) => {
      if(err) return callback(err);
      filedata.push(data.toString('utf-8', 0, 32));

      fs.readFile(filepath[2], (err, data) => {
        if(err) return callback(err);
        filedata.push(data.toString('utf-8', 0, 32));
        return callback(null, filedata);
      });
    });
  });
};