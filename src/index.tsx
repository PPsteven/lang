/* @refresh reload */
import { render } from 'solid-js/web'
import 'solid-devtools'
// import { Router } from '@solidjs/Router'

import './index.css'
import { App } from './app/App'

const root = document.getElementById('root')

render(
    () => (
        // <Router>
            <App />
        // </Router>
    ), root!
)
