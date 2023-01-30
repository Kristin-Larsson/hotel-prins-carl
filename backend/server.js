

import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/hotel-prins-carl"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

const GuestBookSchema = new mongoose.Schema({
  message: {
    type: String,
    minlength: 2,
    maxlength: 140,
    required: true,
    trim: true
  },
    country: {
    type: String,
    minlength: 2,
    maxlength: 140,
    required: true,
    trim: true
  },
  likes: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  }
})

const GuestBook = mongoose.model("GuestBook", GuestBookSchema)

app.get('/', (_, res) => {
  res.send('GuestBook API')
})

app.get("/guestbook", async (req, res) => {
  try {
    const guestbookToReturn = await GuestBook.find().sort({ createdAt: -1 }).limit(20)
    res.status(200).json(guestbookToReturn)
  } catch (error) {
    res.status(400).json({
      success: false,
      body: { 
        message: error 
      }
    })
  }
})

app.post("/guestbook", async (req, res) => {
  const {message, name, country } = req.body
  try {
    const newGuestBook = await new GuestBook({ message, name, country }).save()
    res.status(201).json({success: true, res: newGuestBook})
  } catch (e) {
    res.status(400).json({ success: false, response: e })
  }
})

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id
  try {
    const guestbookToDelete = await GuestBook.deleteOne({ _id: id })
    res.status(200).json(guestbookToDelete)
  } catch (error) {
    res.status(400).json({
      success: false,
      body: { 
        message: error 
      }
    })
  }
})


app.post('/guestbook/:guestbookId/like', async (req, res) => {
  // Find the id of the guestbook message we want to like
  const guestbookId = req.params.guestbookId

  // Use that id to get the message
  let guestbookToLike
  try { 
    const filter = {_id: guestbookId}
    const update = { $inc : {'likes': 1} }

    guestbookToLike = await GuestBook.findOneAndUpdate(filter, update, {
      returnOriginal: false
    })

    if (!guestbookToLike) {
      res.json({
        success: false,
        error: 'Like failed. No such thought ID in the database. Try /thoughts to list available thoughts'
      })
      return
    }
  
    // Send message back in the response
    res.json(guestbookToLike)
  } catch (error) {

    res.json({
      success: false,
      error: error
    })
  }
})
