import './App.css'
import { Route, Routes } from 'react-router-dom'
import DisplayAll from './components/DisplayAll'
import AuthorForm from './components/AuthorForm'
import UpdateAuthor from './components/UpdateAuthor'
import OneAuthor from './components/OneAuthor'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<DisplayAll/>}/>
        <Route path='/authorForm' element={<AuthorForm/>}/>
        <Route path='/updateAuthor/:id' element={<UpdateAuthor/>}/>
        <Route path='/oneAuthor/:id' element={<OneAuthor/>}/>
      </Routes>
    </>
  )
}

export default App
