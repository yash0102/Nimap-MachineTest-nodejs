var express = require('express');
var router = express.Router();
var Catagory = require('../model/catagory');

router.get('/', function(req, res, next) {
  Catagory.List(data=>{
    res.render('category/list',{
      title:'Category List',
      category: data
    });
  });
});
router.get('/create', function(req, res, next) {
  res.render('category/create',{
    title:'Create Category'
  });
});

router.get('/update/:Id', function(req, res, next) {
  Catagory.get(req.params.Id,data=>{
    res.render('category/update',{
      title:'category update',
      Category:data
    })
  });
});
router.get('/view/:Id', function(req, res, next) {
  Catagory.get(req.params.Id,data=>{
    res.render('category/view',{
      title:'category view',
      Category:data
    })
  });
});
router.post('/add', function(req, res, next) {
  Catagory.add(req.body.name,data=>{
    res.redirect('/category');
  })
});
router.post('/edit/:Id', function(req, res, next) {
  Catagory.edit(req.params.Id,req.body.name,data=>{
    res.redirect('/category');
  });
});
router.get('/delete/:Id', function(req, res, next) {
  Catagory.delete(req.params.Id,data=>{
    res.redirect('/category');
  });
});
module.exports = router;
