
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Components/Pages/Product'
import Homepage from './Components/Pages/Homepage'
import Checkout from './Components/Pages/Checkout'

const App = () => {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path='/' element ={<Homepage/>}/>
  <Route path='/product/:id' element ={<Product/>}/>
  <Route path='/cart' element ={<Checkout/>}/>
</Routes>
</BrowserRouter>

     
    </div>
  )
}

export default App