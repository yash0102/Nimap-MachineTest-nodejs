var db = require('./dbConnect');
module.exports = {
	List: function(data) {
        var sql = "Select * from catagory_master ";
		db.query(sql, function (err, result, fields) {			  
			if(err) throw err;
			if(result.length > 0)
				data(result);
			else
				data(0);
		});
	},
    get: function(id,data){
        var sql = "Select * from catagory_master  where id ="+id; 
		db.query(sql, function (err, result, fields) {			  
			if(err) throw err;
			if(result.length > 0)
				data(result[0]);
			else
				data(0);
		});
	},
	add: function(catagory,data) {
		var sql = "insert into catagory_master  (`catagory`) values('"+catagory+"')";
        db.query(sql, function (err, result) {
			if (err) throw err;
			data(result.insertId);
        });
	},
	edit:function(id,catagory,data){
		var sql = "update `catagory_master` set `catagory`='" + catagory + "' where id = " + id;
		db.query(sql, function(err, result) {
			if (err) throw err;
			data(result);
		});
	},
	delete:function(id,data){
		var sql = "delete from catagory_master where id = " + id;
		db.query(sql, function(err, result) {
			if (err) throw err;
			data(result);
		});
	},
};

