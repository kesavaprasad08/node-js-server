const path= require('path');

const rootDir = require('../util/path');

exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','contactus.html'));
  };
  exports.getSuccess =(req, res, next) => {
    res.sendFile(path.join(rootDir,'views','success.html'));
  }; 