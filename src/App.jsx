import { useEffect, useState } from 'react'
import LoadingPage from './pages/loadingPage'
import HomePage from './pages/homePage'

const Screen = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout (() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  },[])
  
  return (
    <div>
      {loading ? <LoadingPage/> : <HomePage/>}
    </div>
  )
}

export default Screen
