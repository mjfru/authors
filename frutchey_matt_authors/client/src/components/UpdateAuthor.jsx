import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';

const UpdateAuthor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ author, setAuthor ] = useState({
    authorName: '',
    famousWork: '',
    quote: ''
  })

  const [ errors, setErrors ] = useState({})

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

  const handleAuthor = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/updateAuthor/${id}`, author)
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
        setErrors(err.response.data.errors)
      })
  }

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
        <h3>Edit {author.authorName}:</h3>
        <form onSubmit={submitHandler}>
          
          <div>
            <label htmlFor="authorName">Name of Author: </label><br/>
            <input type="text" name="authorName" value={author.authorName} onChange={handleAuthor}/>
            {
              errors.authorName ?
              <p style={{color: "red"}}>{errors.authorName.message}</p> :
              null
            }
          </div>

          <div>
            <label htmlFor="famousWork" className="mt-2">Your Favorite Work by this Author:</label><br/>
            <input type="text" name="famousWork" value={author.famousWork} onChange={handleAuthor} />
          </div>
          {
            errors.famousWork ?
            <p style={{color: "red"}}>{errors.famousWork.message}</p> :
            null
          }

          <div>
            <label htmlFor='quote' className="mt-2">A Quote from this Author: (Optional)</label><br/>
            <textarea name='quote' rows="2" cols="40" value={author.quote} onChange={handleAuthor}></textarea>
          </div>
          {
            errors.quote ?
            <p style={{color: "red"}}>{errors.quote.message}</p> :
            null
          }
          <Button variant="contained" color="success" type="submit" startIcon={<EditIcon/>}  className='mt-2'>Update Author</Button>
        </form>
      </div>
    </>
  )
}

export default UpdateAuthor