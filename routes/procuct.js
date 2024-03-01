var express = require('express');
var router = express.Router();
var Product = require('../model/product');
var Category = require('../model/catagory');

router.get('/', function(req, res, next) {
  res.redirect('/product/page/1');
});
router.get('/page/:Page', function(req, res, next) {
  Product.count(productCount=>{
    Product.list(req.params.Page,data=>{
      res.render('product/list',{
        title:'Product List',
        page : req.params.Page,
        products:data,
        total:productCount/10
      });
    });
  });
});
router.get('/view/:Id', function(req, res, next) {
  Product.get(req.params.Id,data=>{
    console.log(data);
    res.render('product/view',{
      title: 'Product view',
      product: data
    });
  });
});
router.get('/update/:Id', function(req, res, next) {
  Product.get(req.params.Id,data=>{
    Category.List(result=>{
      res.render('product/update',{
        title: 'Product Edit',
        product: data,
        category:result
      });
    });
  });
});
router.get('/create', function(req, res, next) {
  Category.List(data=>{
    res.render('product/create',{
      title:'create Product',
      category: data
    });
  });
});
router.post('/add', function(req, res, next) {
  Product.add(req.body.name,req.body.category,req.body.Description,data=>{
    res.redirect('/product');
  })
});
router.post('/edit/:Id', function(req, res, next) {
  Product.edit(req.params.Id,req.body.name,req.body.category,req.body.Description,data=>{
    res.redirect('/product');
  });
});
router.get('/delete/:Id', function(req, res, next) {
  Product.delete(req.params.Id,data=>{
    res.redirect('/product');
  });
});

module.exports = router;