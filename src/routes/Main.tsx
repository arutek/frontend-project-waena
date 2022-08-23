import { Routes, Route } from '@solidjs/router'
import Home from '@/pages/Home'
import auth from '@/libraries/auth'
import { onMount } from 'solid-js'

export default () => {
  onMount (async () => {
    await auth.middleware()
  })
  return (
    <Routes>
      <Route path="" component={Home} />
    </Routes>
  )
}