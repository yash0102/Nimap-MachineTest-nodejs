var db = require('./dbConnect');
module.exports = {
	count: function(data){
		var sql = "Select count(*) as counter from product_master";
		db.query(sql, function (err, result, fields) {
			if(err) throw err;
			if(result.length > 0)
				data(result[0].counter);
			else
				data(0);
		});
	},
	list: function(page,data) {
		var offset = page*10-10;
		var sql = "Select product_master.id,product_master.name,product_master.description,catagory_master.catagory from product_master LEFT JOIN catagory_master ON product_master.catagory = catagory_master.id LIMIT 10 OFFSET "+offset;
		db.query(sql, function (err, result, fields) {
			if(err) throw err;
			if(result.length > 0)
				data(result);
			else
				data(0);
		});
    },
    get: function(id,data){
        var sql = "Select product_master.id,product_master.name,product_master.catagory as catagoryID,product_master.description,catagory_master.catagory from product_master LEFT JOIN catagory_master ON product_master.catagory = catagory_master.id WHERE product_master.id ='"+id+"'";
		db.query(sql, function (err, result, fields) {
			if(err) throw err;
			if(result.length > 0)
				data(result[0]);
			else
				data(0);
		});
	},
	add: function(name,catagory,description,data) {
		var sql = "insert into product_master (`name`,`catagory`,`description`) values('"+name+"','"+catagory+"','"+description+"')";
        db.query(sql, function (err, result) {
			if (err) throw err;
			data(result.insertId);
        });
	},
	edit:function(id,name,catagory,description,data){
		var sql = "update `product_master` set `name`='"+name+"',`catagory`='"+catagory+"',`description`='"+description+"' where id = " + id;
		db.query(sql, function(err, result) {
			if (err) throw err;
			data(result);
		});
	},
	delete:function(id,data){
		var sql = "delete from product_master where id = " + id;
		db.query(sql, function(err, result) {
			if (err) throw err;
			data(result.affectedRows);
		});
	},
};

