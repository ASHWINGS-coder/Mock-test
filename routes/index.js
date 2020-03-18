const express = require('express');

const router = express.Router();

const Product = require( '../model/products');
// gets all prods
router.get('/', async (req,res) => {
   try{
    const prods = await Product.find();
    res.json(prods);
   }catch(err){
    res.json({message:error})
  }
});
// submits prods
router.post('/', async (req,res) => {
      const prod = new Product({
          id: req.body.id,
          name : req.body.name,
          quantity:req.body.quantity
      });
      try{
        const savedProd = await prod.save();
        res.json(savedProd);
      }catch(err){
        res.json({message:error})
      }
     
});

// specific prod 
router.get('/:id', async (req,res) => {
   const fp = await  Product.findById(req.params.id);
    try{
        res.json(fp);
    }catch(err){
        res.json({message:error})
      }
 
})

// delete prod

router.delete('/:id', async (req,res) => {
    try{
        const remProd = await Product.remove({_id : req.params.id});
        res.json({message: "product Deleted"})
    }catch(err){
        res.json({message:error})
      }
   
});

// update post 
router.patch('/:id', async (req,res) => {
    try{
      const updatedProd = await Product.updateOne({_id: req.params.id} , 
        {$set:{quantity : req.body.quantity}});
      res.json(updatedProd);
      res.json({message:"updated successfully"});
    }catch(err){
        res.json({message:error})
      }
    
})

module.exports= router;