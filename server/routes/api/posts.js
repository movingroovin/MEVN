const express = require('express')
// const mongodb = require('mongodb')

const router = express.Router()

const Post = require('../../models/Post')

// Get Posts
router.get('/', async (req, res) => {
  // const posts = await loadPostsCollections()
  // res.send(await posts.find({}).toArray())
  const posts = await Post.find()
  res.send(posts)
})

// Add Post
router.post('/', async (req, res) => {
  // const posts = await loadPostsCollections()
  // await posts.insertOne({
  //   text: req.body.text,
  //   createTime: new Date()
  // })
  // res.status(201).send('Add successfully');
  const post = new Post({
    text: req.body.text,
    createTime: new Date()
  })
  try {
    const newPost = await post.save()
    res.status(201).send(newPost)
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

// Delete Post
router.delete('/:id', getPost, async (req, res) => {
  try {
    await res.post.remove()
    res.status(200).send('Deleted');
  } catch {
    res.status(500).send({
      message: err.message
    })
  }
  // const posts = await loadPostsCollections()
  // await posts.deleteOne({
  //   _id: new mongodb.ObjectID(req.params.id)
  // })
  // res.status(200).send('Deleted');
})

async function getPost (req, res, next) {
  let post
  try {
    post = await Post.findById(req.params.id)
    if (!post) {
      return res.status(404).send({
        message: 'caonnot find post'
      })
    }
  } catch {
    return res.status(500).send({
      message: err.message
    })
  }
  res.post = post
  next()
}

// ==== refactored ====
// connection to mongodb
// async function loadPostsCollections () {
//   const client = await mongodb.MongoClient.connect(
//     'mongodb://wei:wei820801@ds045632.mlab.com:45632/mevn', {
//       useNewUrlParser: true
//     }
//   )
//   return client.db('mevn').collection('posts')
// }

module.exports = router