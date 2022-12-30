const express = require('express')
const body = require('body-parser')

const router = express.Router();

const Model = require('../models/model');
const { $where } = require('../models/model');

module.exports = router;


//POST Method
router.post('/post', async (req, res) => {
    // res.send('Post API')
    const data = new Model ({
        name : req.body.name,
        age: req.body.age
    })
    console.log(req.body)
    try{
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res . status(400).json({message : error. message})
    }
})

//Get All Method
router.get('/getAll', async (req, res)=>{
    // res.send('Get All API')
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res)=>{
    // res.send('Get by ID API')
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Update by ID Method
router.patch('/update/:id', async (req, res) => {
    // res.send('Update by ID API')
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = {new: true};

        const result = await Model.findByIdAndUpdate(
            id, updateData, options
        )
        res.send(result)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}) 

// Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    // res.send('Delete by ID API')
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send('Document with'. $(data.name) +'has been delete..')
    }
    catch(error){
        res.status(400).json({ message: error.message })
    }
})