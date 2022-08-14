/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import './assets/styles/index.scss'
import './assets/styles/input.scss'
import './assets/styles/button.scss'
import './assets/icons/aru-icon.scss'
import App from './Routes'

render(() => (
  <Router>
    <App />
  </Router>
), document.getElementById('root') as HTMLElement)
