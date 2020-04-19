<template>
<div class="container">
    <div class="row">
        <div class="col-md-6" v-for="(item, key) in products" :key="key">
            <div class="card">
            <img :src="item.imgUrl" class="card-img-top" :alt="item.description">
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <p class="card-text">價格：${{item.price}}</p>
                <p class="card-text">重量：{{item.weight}} {{item.unit}}</p>
                <p class="card-text">商品描述：{{item.description}}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        </div>
    </div>
    <hr>
    <div>
        <h4>商品上架</h4>
        <table>
            <tr>
                <td>name</td>
                <td>
                    <input type="text" v-model="product.name">
                </td>
            </tr>
            <tr>
                <td>price</td>
                <td>
                    <input type="text" v-model="product.price">
                </td>
            </tr>
            <tr>
                <td>weight</td>
                <td>
                    <input type="text" v-model="product.weight">
                </td>
            </tr>
            <tr>
                <td>unit</td>
                <td>
                    <input type="text" v-model="product.unit">
                </td>
            </tr>
            <tr>
                <td>imgUrl</td>
                <td>
                    <input type="text" v-model="product.imgUrl">
                </td>
            </tr>
            <tr>
                <td>description</td>
                <td>
                    <input type="text" v-model="product.description">
                </td>
            </tr>
        </table>
        <button type="button" class="btn btn-outline-primary" @click="createProduct">Submit</button>
    </div>
</div>
</template>

<script>
import ProductsController from '../../assets/ajax/ProductsController'

export default {
  name: 'Products',
  data() {
    return {
      products: [],
      product: {
          name: null,
          price: null,
          weight: null,
          unit: null,
          pic: null,
          description: null
      },
      error: '',
      text: ''
    }
  },
  created() {
    try {
      ProductsController.getProducts().then(data => {
        this.products = data
      })
    } catch (err) {
      this.error = err.message
    }
  },
  methods: {
    async createProduct() {
      await ProductsController.insertProduct(this.product)
      this.products = await ProductsController.getProducts()
    },
    async deleteProduct(id) {
      await ProductsController.deleteProduct(id)
      this.products = await ProductsController.getProducts()
    }
  }
}
</script>

<style>

</style>