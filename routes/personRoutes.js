//export express
let express = require('express');
//make a router
let router = express.Router();
//import person model schema
const person = require('../model/person');

//make all end points with Router

//post method person
router.post('/', async (req, res) => {
  try {
    
    //data comes
    const data = req.body;
    
    //create new person 
    const newPerson = new person(data);
    
    //save
    const response = await newPerson.save();
   console.log("data saved successfully");
   res.status(200).json(response);
   
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json(err);
  }
});

//get method person

router.get('/', async (req, res) => {
  try {
    //fetching data
    
    const data = await person.find();
    console.log("data fetched successfully");
   res.status(200).json(data);
   
  } catch (err) {
    
    console.error('Error:', err);
    res.status(500).json(err);
  }
});

//parameterized api for person on 

router.get('/:work', async (req, res) => {
  try {
    //extracting work
    const worktype = req.params.work;
    //check work
    if (worktype == "cook" || worktype == "clerk"|| worktype == "waiter") {
      const response = await person.find({work: worktype});
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

//update person
router.put('/:id', async (req, res) => {
  
  try {
    //gettting person id
    const id  = req.params.id;
    //getting person data for update
    const updatePersonData = req.body
    //updation
    const response = await person.findByIdAndUpdate(id,updatePersonData,{
      new:true,//send new data
      runValidators:true//check validation
    })
    
    if (!response) {
    return res.status(404).json('Error: page not found');
    }
    
    console.log("data updated");
   res.status(200).json(response);
    
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json(err);
  }
  
});

module.exports = router;