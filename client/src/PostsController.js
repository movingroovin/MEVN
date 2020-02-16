import axios from 'axios'

const url = 'http://localhost:5000/api/posts/'

class PostsController {
  // Get posts
  static getPosts() {
    return new Promise((resolve, reject) => {
      axios.get(url).then((res) => {
        resolve(res.data)
        // const data = res.data
        // resolve(
        //     data.map(post => ({
        //         ...post,
        //         createTime: new Date(post.createTime)
        //     }))
        // )
      }).catch((err)=> {
        reject(err)
      })
    })
  }
  
  // Create Post
  static insertPost(text) {
    return axios.post(url, {
      text
    })
  }

  // Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`)
  }
}

export default PostsController