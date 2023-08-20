import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

const OneAuthor = () => {
  const { id } = useParams();
  console.log(id)
  const [ author, setAuthor ] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/api/oneAuthor/${id}`)
      .then((res) => {
        console.log(res.data)
        setAuthor(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div id="navbar" className='d-flex align-items-center justify-content-around mt-3'>
        <h1>Your Favorite Authors</h1>
        <Button variant="contained" startIcon={<HomeIcon/>}>
          <Link to='/' className='buttonLink'>Home</Link>
        </Button>
      </div>
      <div style={{ height: '5px', borderBottom: '4px solid black' }}></div>
      
      <div className='text-center mt-2'>
        <h3>Viewing {author.authorName}</h3>
        <h5 className="accentedAuthorInfo m-4">Famous Work: {author.famousWork}</h5>
        <h5 className="accentedAuthorInfo">Quote (if available):</h5>
        <h5 className="quoteAccent mt-3">{author.quote}</h5>
      </div>
    </>
  )
}

export default OneAuthor