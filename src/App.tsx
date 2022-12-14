import React, { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { AuthContext } from './hooks/AuthContext'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Layout from './components/layout/Layout'
import { useAppDispatch } from './hooks/useAppDispatch'
import { getPosts } from './store/posts/postsSlice'

const App = () => {
  const { isAuth, setIsAuth, user, setUser } = useContext(AuthContext)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth, navigate])

  return (
    <div>
      <Layout setIsAuth={setIsAuth} login={user?.login}>
        <Routes>
          <Route path="/login" element={<Login setIsAuth={setIsAuth} setUser={setUser} />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
