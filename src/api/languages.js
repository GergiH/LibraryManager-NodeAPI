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

// router.post('/create', function (req, res) {
//   let language = new Language({
//     id: '3',
//     name: 'sikejült'
//   });
//   language.save()
//     .then()
//     .catch((err) => console.log(err));
// });

router.get('/:id', function (req, res) {
  Language.findOne({
    id: req.params.id
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

router.patch('/:id', function (req, res) {
  Language.findOneAndUpdate({
    _id: req.body._id
  }, {
    id: req.body.id,
    name: req.body.name,
  }, {
    new: true
  }, (err, model) => err ? console.log(err + ' - ' + model) : null);

  return res.status(200);
});

module.exports = router;
