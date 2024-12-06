import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Allproducts from './Allproducts'

function App() {
  let component
 switch (window.location.pathname) {
  case "/":
    component = <Home />
    break
  case "/allproducts":
    component = <Allproducts />
    break
 }
 return (
  <div className='app'>
    <Navbar />
    <div className='content'>
      {component}
    </div>
  </div>
)

}

export default App
