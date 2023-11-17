import express from "express"
import mysql from "mysql2"
import cors from "cors";
const app =express()
app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"gupta123",
    database:"products"
})
app.get("/", (req, res) => {
    res.json("hello");
  });
  app.get("/data1", (req, res) => {
    const q = "SELECT * FROM data1";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });
  app.post("/data1", (req, res) => {
    //console.dir(req)
     const id = req.body.id;
      const name =req.body.name
    const price=  req.body.price;
    const processor =   req.body.processor;
      const ram =req.body.ram;
      const os =req.body.os;
     const storage =  req.body.storage;
      const display = req.body.display;
     const ratings=  req.body.rating;
     const no_of_ratings=  req.body.no_of_ratings;
     const reviews = req.body.no_of_reviews;
  
    db.query('INSERT INTO data1 (`id`, `name`, `price`, `processor`, `ram`, `os`, `storage`, `display`, `rating`, `no_of_ratings`, `no_of_reviews`) VALUES (?,?,?,?,?,?,?,?,?,?,?)', [id,name,price,processor,ram,os,storage,display,ratings,no_of_ratings,reviews], (err, data) => {
      if (err) {
        console.log(err); 
        return res.status(500).json(err); 
      }
      return res.status(200).json("Laptop has been added successfully"); 
    });
  });
  app.delete("/data1/:id",(req,res)=>{
    const laptopId=req.params.id;
    const q="DELETE FROM data1 where id=?"
    db.query(q, [laptopId], (err, data) => {
      if (err) {
        console.log(err); 
        return res.status(500).json(err); 
      }
      return res.status(200).json("Laptop has been deleted successfully"); 
    });
  })

  // Fetch all data from data2
  app.get("/data2", (req, res) => {
    const q = "SELECT * FROM data2";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      return res.status(200).json(data);
    });
  });
  app.post("/data2", (req, res) => {
    const id = req.body.id;
    const Company = req.body.Company;
    const Rating = req.body.Rating;
    const No_of_ratings = req.body.No_of_ratings;
    const Review = req.body.Review;
    const Size = req.body.Size;
    const Processor = req.body.Processor;
    const RAM = req.body.RAM;
    const Memory = req.body.Memory;
    const OpSys = req.body.OpSys;
    const Price = req.body.Price;
    const MRP= req.body.MRP;
    db.query('INSERT INTO data2 (`id`, `Company`, `Rating`,`No_of_ratings`,`Review`,`Size`,`Processor`,`RAM`,`Memory`,`OpSys`,`Price`,`MRP`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [id, Company, Rating ,No_of_ratings,Review,Size,Processor,RAM,Memory,OpSys,Price,MRP], (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      return res.status(200).json("Data2 entry has been added successfully");
    });
  });
  app.delete("/data2/:id", (req, res) => {
    const laptopId = req.params.id;
    const q = "DELETE FROM data2 WHERE id=?";
    db.query(q, [laptopId], (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      return res.status(200).json("Laptop has been deleted successfully from data2");
    });
  });
app.listen(8800,()=>{
    console.log("Connected to backend")
})

