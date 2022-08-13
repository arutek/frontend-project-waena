import { Routes, Route } from '@solidjs/router'
import Home from './pages/Home'
import Login from './pages/Login'

export default () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Routes>
  )
}