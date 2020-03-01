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

// Add Posts
// router.post('/', async (req, res) => {
//   const posts = await loadPostsCollections()
//   await posts.insertOne({
//     text: req.body.text,
//     createTime: new Date()
//   })
//   res.status(201).send('Add successfully');
// })

// Delete Posts
// router.delete('/:id', async (req, res) => {
//   const posts = await loadPostsCollections()
//   await posts.deleteOne({
//     _id: new mongodb.ObjectID(req.params.id)
//   })
//   res.status(200).send('Deleted');
// })

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