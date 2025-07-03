//export express
let express = require('express');
//make a router
let router = express.Router();
//import person menu schema
const MenuItem = require('../model/menu');

//Menu 
router.post('/', async (req, res) => {
  try {
    
    //data comes
    const data = req.body;
    
    //create new person 
    const newMenu = new MenuItem(data);
    
    //save
    const response = await newMenu.save();
   console.log("data saved successfully");
   res.status(200).json(response);
   
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json(err);
  }
});


//get MenuItem

router.get('/', async (req, res) => {
  try {
    //fetching data
    
    const data = await MenuItem.find();
    console.log("data fetched successfully");
   res.status(200).json(data);
   
  } catch (err) {
    
    console.error('Error:', err);
    res.status(500).json(err);
  }
});

//parameterized api for menu on basis of taste

router.get('/:taste', async (req, res) => {
  try {
    //extracting work
    const tasteType = req.params.taste;
    //check work
    if (tasteType == "sweet" || tasteType == "sour"|| tasteType == "spicy") {
      const response = await MenuItem.find({taste: tasteType});
      console.log("data fetched successfully");
   res.status(200).json(response);
    }else{
      console.error('Error: page not found');
    res.status(404).json('Error: page not found');
    }
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json(err);
  }
});

//delete MenuItem

router.delete('/:id', async (req, res) => {
  
  try {
    //gettting menu id
    const menuId  = req.params.id;
    //deletion
    const response = await MenuItem.findByIdAndDelete(menuId);
    
    if (!response) {
    return res.status(404).json('Error: page not found');
    }
    
    console.log("data deleted successfully");
   res.status(200).json(response);
    
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json(err);
  }
  
});


module.exports = router;