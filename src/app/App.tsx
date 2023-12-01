import { createSignal } from 'solid-js'
import solidLogo from '../assets/solid.svg'
import viteLogo from '/vite.svg'
import { createTheme, ThemeProvider } from "@suid/material/styles";
import './App.css'

import { purple } from "@suid/material/colors";
import { TextRead } from '../components/TextRead';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <TextRead />    
    </ThemeProvider>
  )
}

export { App }


// function App() {
//   const [count, setCount] = createSignal(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} class="logo" alt="Vite logo" />
//         </a>
//         <a href="https://solidjs.com" target="_blank">
//           <img src={solidLogo} class="logo solid" alt="Solid logo" />
//         </a>
//       </div>
//       <h1>Vite + Solid</h1>
//       <div class="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count()}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p class="read-the-docs">
//         Click on the Vite and Solid logos to learn more
//       </p>
//     </>
//   )
// }

// export default App