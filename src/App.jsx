import { BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import './App.scss'

function App() {
  return (
<BrowserRouter>
    <div className='App'>
      <Navbar/>
      <Home/>
    </div>
</BrowserRouter>
  )
}

export default App;
