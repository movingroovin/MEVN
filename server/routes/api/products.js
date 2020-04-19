const express = require('express')

const router = express.Router()

const Product = require('../../models/Product')

// Get Products
router.get('/', async (req, res) => {
  const products = await Product.find()
  res.send(products)
})

// Add Product
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.text.name,
    price: req.body.text.price,
    weight: req.body.text.weight,
    unit: req.body.text.unit,
    imgUrl: req.body.text.imgUrl,
    description: req.body.text.description,
    createTime: new Date()
  })
  try {
    const newProduct = await product.save()
    res.status(201).send(newProduct)
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

// Delete Product
router.delete('/:id', getProduct, async (req, res) => {
  try {
    await res.product.remove()
    res.status(200).send('Deleted');
  } catch {
    res.status(500).send({
      message: err.message
    })
  }
})

async function getProduct (req, res, next) {
  let product
  try {
    product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).send({
        message: 'caonnot find product'
      })
    }
  } catch {
    return res.status(500).send({
      message: err.message
    })
  }
  res.product = product
  next()
}

module.exports = router