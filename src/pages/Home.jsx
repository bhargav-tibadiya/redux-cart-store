import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const API_URL = `https://fakestoreapi.com/products`;

const Home = () => {

  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  async function fetchProductData() {
    setLoading(true)
    try {
      const res = await fetch(API_URL)
      const data = res.json()

      console.log('Data', data)

      setPosts(data)
    } catch (error) {
      console.error("Error:", error)
      setPosts([])
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [])


  return (
    <div className="home_container">
      {
        loading ? (<Spinner />) : posts.length > 0 ?
            (<div className="home_box">
              {
                posts.map((post) => (
                  <Product key={post.id} post={post}/>
                ))
              }
            </div>) :
            (<p>No Data Found</p>)

      }
    </div>
  )
}

export default Home