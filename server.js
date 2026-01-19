const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

/* PRODUCTS */
app.get("/api/products",(req,res)=>{
  db.query("SELECT * FROM products",(err,result)=>{
    res.json(result);
  });
});

/* ADD TO CART */
app.post("/api/cart",(req,res)=>{
  const {product_id} = req.body;
  db.query(
    "INSERT INTO cart(product_id) VALUES(?)",
    [product_id],
    ()=>res.json({msg:"Added"})
  );
});

/* VIEW CART */
app.get("/api/cart",(req,res)=>{
  db.query(`
   SELECT p.title,p.price
   FROM cart c JOIN products p
   ON c.product_id=p.id
  `,(err,result)=>{
    res.json(result);
  });
});

app.listen(3000,()=>{
  console.log("🚀 Backend running at http://localhost:3000");
});
