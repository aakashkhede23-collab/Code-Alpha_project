const router = require("express").Router();
const db = require("../db");

router.post("/login",(req,res)=>{
  const {username,password} = req.body;

  db.query(
    "SELECT * FROM users WHERE username=? AND password=?",
    [username,password],
    (err,result)=>{
      if(result.length>0){
        res.json({success:true,username});
      }else{
        res.json({success:false});
      }
    }
  );
});

module.exports = router;
