import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/signup'
import { Blog } from './pages/blog'
import { Signin } from './pages/signin'
import { Blogs } from './pages/blogs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/blog/:id' element={<Blog />}></Route>
          <Route path='/blogs/' element={<Blogs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
