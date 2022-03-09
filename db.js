let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://erqjocyu:NuyTHR9qWJTYtVdv-nYF4-9b2Lv31yfT@kesavan.db.elephantsql.com/erqjocyu" 
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect }