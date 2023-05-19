import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import About from './components/About'
import LoginComponent from'./components/loginComponent'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginComponent/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
