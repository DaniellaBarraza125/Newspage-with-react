import { BrowserRouter as Router, Route, Routes, RouterProvider } from "react-router-dom";
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ListNews from './components/ListNews/ListNews'
import WhisperForm from './components/WhisperForm/WhisperForm'
import { GlobalProvider } from './context/GlobalState'




function App() {


  return (
  <Router>
  <Header/>
  <GlobalProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/writeUs" element={<WhisperForm/>}/>
      <Route path="/articles" element={<ListNews/>}/>
 
    </Routes>
  </GlobalProvider>
  <Footer/>
    
  </Router>
  )
}

export default App
