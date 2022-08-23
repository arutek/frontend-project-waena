import NavigationBar from '@/components/commons/NavigationBar'
import HeaderBar from '@/components/commons/HeaderBar'
import { Routes, Route } from '@solidjs/router'
import Home from '@/pages/Home'
import auth from '@/libraries/auth'
import { onMount } from 'solid-js'

export default () => {
  onMount (async () => {
    await auth.middleware()
  })
  return (
    <main>
      <NavigationBar />
      <HeaderBar />
      <Routes>
        <Route path="" component={Home} />
      </Routes>
    </main>
  )
}