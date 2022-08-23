import { Routes, Route } from '@solidjs/router'
import Main from './Main'
import Signin from '@/pages/Signin'

export default () => {
  return (
    <Routes>
      <Route path="/signin" component={Signin} />
      <Route path="/" component={Main} />
    </Routes>
  )
}