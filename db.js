let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://fvvtqimd:GE_3Y1ctl59q1YVHrHUg4m5NcVCrO69M@kesavan.db.elephantsql.com/fvvtqimd" 
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect }