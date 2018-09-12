const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Language = require('./models/Language');

router.get('/', function (req, res) {
  Language.find({}, 'id name', (err, languages) => res.json(languages));
});

router.get('/create', function (req, res) {
  console.log('request: ' + req.query.id);
});

router.post('/create', function (req, res) {
  let language = new Language({
    id: '3',
    name: 'sikejült'
  });
  language.save()
    .then()
    .catch((err) => console.log(err));
});

router.get('/edit', function (req, res) {
  Language.findOne({
    id: req.query.id
  }, (err, language) => {
    if (err) {
      return res.json(err);
    }
    if (!language) {
      return res.status(404).send();
    }

    return res.json(language);
  });
});

// router.patch('/edit', function (req, res) {
//   Partner.findOneAndUpdate({
//     id: req.body.params.id
//   }, {
//     corrZip: req.body.params.corrZip,
//     corrCountry: req.body.params.corrCountry,
//     corrCity: req.body.params.corrCity,
//     corrStreet: req.body.params.corrStreet,
//     corrPObox: req.body.params.corrPObox
//   }, {
//     new: true
//   }, (err, model) => err ? console.log(err) : null);

//   return res.json();
// });

module.exports = router;
