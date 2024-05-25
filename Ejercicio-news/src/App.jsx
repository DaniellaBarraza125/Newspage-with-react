import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ListNews from './components/ListNews/ListNews'
import WhisperForm from './components/WhisperForm/WhisperForm'
import { GlobalProvider } from './context/GlobalState'




function App() {


  return (
<div>
  <GlobalProvider>
  <Header/>
  <WhisperForm/>
  <Footer/>
  <Home/>
    <ListNews/>
  </GlobalProvider>
</div>
  )
}

export default App
