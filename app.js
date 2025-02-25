const express = require("express");
const Song = require("./models/songs");
var cors = require("cors");

const app = express();
app.use(cors());

const cors = require('cors');
app.use(cors());

app.use(express.json());

const router = express.Router();

router.get("/songs", async (req, res) => {
  try {
    const songs = await Song.find({});
    res.json(songs);
    console.log(songs);
  } catch (err) {
    console.error("Error fetching songs:", err);
    res.status(500).json({ error: "Failed to fetch songs" });
  }
});

router.get("/songs/:id", async (req,res) => {
  try{
    const song = await Song.findById(req.params.id)
    res.json(song)
  }
  catch{
    res.status(400).send(err)
  }
})

router.post("/songs", async (req, res) => {
  try {
    const song = await new Song(req.body)
    await song.save()
    res.status(201).json(song)
    console.log(song)
  } 
  catch (err) {
    res.status(400).send(err)
  }
})

router.put("/songs/:id", async(req,res) =>{
  try{
    const song = req.body
    await Song.updateOne({_id: req.params.id},song)
    console.log(song)
    res.sendStatus(204)
  }
  catch(err){
      res.status(400).send(err)
  }
})

app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server is up and running on http://localhost:${PORT}`)
);
