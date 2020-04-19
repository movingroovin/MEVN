import axios from 'axios'

const url = 'api/products/'

class ProductsController {
  // Get products
  static getProducts() {
    return new Promise((resolve, reject) => {
      axios.get(url).then((res) => {
        resolve(res.data)
      }).catch((err)=> {
        reject(err)
      })
    })
  }
  
  // Create product
  static insertProduct(text) {
    return axios.post(url, {
      text
    })
  }

  // Delete product
  static deleteProduct(id) {
    return axios.delete(`${url}${id}`)
  }
}

export default ProductsController