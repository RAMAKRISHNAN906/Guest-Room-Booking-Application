const express = require('express');
const multer = require('multer');
const cors = require('cors');
const RegisterModels = require('./models/RegisterModels');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/logincredentials')
    .then(() => console.log("connected to db s2"))
    .catch((err) => console.log("failed to connect to db"));

app.use(cors());
app.use(express.json());

const uploadDir = path.join(__dirname, 'public', 'images');

(async () => {
    try {
        await fs.promises.access(uploadDir);
    } catch (err) {
        await fs.promises.mkdir(uploadDir, { recursive: true });
    }
})();

app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.post('/registerhome', upload.single('file'), async (req, res) => {
    const { name, price, description } = req.body;
    const file = req.file;
    if (!name || !price || !description || !file) {
        return res.status(400).json({ error: "All fields need to be filled" });
    }
    try {
        const newHome = {
            name: name,
            price: price,
            description: description,
            image: file.filename // Save the filename instead of the file object
        };
        const savedHome = await RegisterModels.create(newHome);
        res.json(savedHome);
    } catch (error) {
        console.error("Error while posting data", error);
        res.status(400).json({ error: error.message });
    }
});

app.get('/loaddata',async(req,res)=>{
    try{
        const datas= await RegisterModels.find({});
        res.json(datas)
    }
    catch(err){
      console.error("error while fetching users:",err);
      res.status(500).json({error:err.message})
    }
})

app.get('/loaddata/:id',async(req,res)=>{
    try{
        const {id}=req.params
        console.log(id)
        const user= await RegisterModels.findById(id)
        res.status(200).send(user)
    }
    catch(err){
        res.status(200).send({message:err.message})
        console.log("errrrrrr")
    }
})

app.listen(3001, () => {
    console.log("server2 running on 3001");
});