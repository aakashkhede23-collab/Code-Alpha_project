const router = require("express").Router();
const db = require("../db");

router.get("/",(req,res)=>{
  db.query("SELECT * FROM reels",(err,result)=>{
    res.json(result);
  });
});

router.post("/like/:id",(req,res)=>{
  db.query(
    "UPDATE reels SET likes = likes + 1 WHERE id=?",
    [req.params.id]
  );
  res.json({ok:true});
});

module.exports = router;
