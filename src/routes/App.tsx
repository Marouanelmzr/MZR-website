import './App.css'
import Navbar from '../Navbar'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Footer from '../Components/Footer/Footer'
import { Container } from 'react-bootstrap'

function App() {
  let component
 switch (window.location.pathname) {
  case "/":
    component = <Home />
    break
  case "/allproducts":
    component = <Shop />
    break
 }
 return (
  <Container className='app'>
    <Navbar />
    <div className='content'>
      {component}
    </div>
    <Footer/>
  </Container>
)

}

export default App
