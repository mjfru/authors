import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { Paper, FormControl, InputLabel, OutlinedInput} from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';



const DisplayAll = () => {
  const [ authors, setAuthors ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/allAuthors')
      .then((res) => {
        const sortedAuthors = res.data.sort((nameA, nameB) => nameA.authorName.localeCompare(nameB.authorName))
        setAuthors(sortedAuthors)
        // setAuthors(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const removeFromDom = (id) => {
    const updatedAuthorList = authors.filter((author) => author._id !== id);
    setAuthors(updatedAuthorList)
  }

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8000/api/deleteAuthor/${id}`)
      .then((res) => {
        console.log(res)
        removeFromDom(id)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div id="navbar" className='d-flex align-items-center justify-content-around mt-3'>
        <h1>Your Favorite Authors</h1>
        <Button variant="contained" size="medium" color="success" startIcon={<AddCircleOutlinedIcon/>}>
          <Link to='/authorForm' className='buttonLink'>Add An Author</Link>
        </Button>
      </div>
      <div style={{ height: '5px', borderBottom: '4px solid black' }}></div>
      
      <div className='w-50 mx-auto'>
        <h3 className='text-center m-3'>We Have Works & Quotes By:</h3>
        <table className='text-center table table-primary table-striped table-hover'>
          <thead>
            <tr>
              <th>Author</th>
              <th>User Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              authors.map((author) => (
                <tr key={author._id}>
                  <td className="accentedAuthorInfo">{author.authorName}</td>
                  <td>
                    <Button variant="outlined" size="small" color="primary" endIcon={<InfoOutlinedIcon/>}>
                      <Link to={`/oneAuthor/${author._id}`} className='buttonLink'>View</Link>
                    </Button>
                    <Button variant="outlined" size="small" color="secondary" endIcon={<EditOutlinedIcon/>} className='mx-2'>
                      <Link to={`/updateAuthor/${author._id}`} className='buttonLink'>Edit</Link>
                    </Button>
                    <Button variant="outlined" size="small" color="error" endIcon={<DeleteIcon/>} onClick={() => deleteHandler(author._id)} className='buttonLink'>Delete</Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      
      </div>
    </>
  )

}
export default DisplayAll