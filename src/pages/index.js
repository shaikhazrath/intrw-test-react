// Use API - [GET] https://dummyapi.online/api/movies
import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "@/components/Movie";
export default function Home() {
  const [movies, setMovies] = useState({})
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState({})
  const getMovies = async () => {
    try {
      const res = await axios.get('https://dummyapi.online/api/movies')
      setMovies(res.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    getMovies()
  })
  const addToselected = (data) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  if (loading) {
    return <h1>loading...</h1>
  }
  return (
    <>
      {
        movies.map((data) => (

          <Movie data={data} select={addToselected} />
        ))
      }
    </>
  );
}
