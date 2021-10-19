function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const path = require("path");
const express = require('express');
const app = express();
app.use(requireHTTPS);
app.use(express.static('./dist/primeng-issue-template'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: './dist/primeng-issue-template'}
  );
  });

  const multer = require("multer");
  const upload = multer({ storage: multer.memoryStorage() });
  const fs = require("fs");
  
  const pathToStaticFolder = path.resolve(__dirname, "./audio");
  // Добавление Img
  app.post("/api/upload", upload.array('audio', 2), (req, res) => {
    const file_img = req.files;
    console.log(file_img);
    //if (file_img.mimetype == 'image/jpeg') {
        //fs.createWriteStream(path.join(pathToStaticFolder, file_img.originalname)).write(file_img.buffer);
        //return res.json('данные загружены');}
    fs.createWriteStream(path.join(pathToStaticFolder, file_img.originalname)).write(file_img.buffer);
    return res.json('данные загружены');
  });

app.listen(process.env.PORT || 8080);
