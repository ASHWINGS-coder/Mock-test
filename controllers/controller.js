const Product = require("../model/products");

// to get products 
module.exports.getprod = async (req,res) => {
    try{
        const prod = await Product.find();
        res.json(prod);
    }catch(err){
        res.json({message : err});
    }
}

// to add products
module.exports.addprod =  async (req,res) => {
          let prod = new Product({
              id: req.body.id,
              name : req.body.name,
              quantity:req.body.quantity
          });
          try{
            const savedProd = await prod.save();
            res.json({
                data:{
                product:savedProd
            },
            message : "prod added"
        });
          }catch(err){
            res.json({message:error})
          }
         
    };

    // to delete products
module.exports.delprod = async (req,res) => {

    try{
        let delPro = await Product.findById(req.params.id);
        delPro.remove();
        res.json({message :"Product deleted"})
    }catch(err){
   res.json({message : "product cannot be deleted"})
    }
}

// to update products

module.exports.updprod = async (req,res) => {
    try{
let updated = await Product.updateOne({ _id : req.params.id} ,{
    $set:{quantity : req.body.quantity}});
    res.json({
        data:{
            product:updated
        },
        message : "Quantity Updated"
    })
    }catch(err){
        res.json({message:"error in updating quantity of products"})
    }
}
    