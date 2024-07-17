import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Products from './components/products/Products';

function App() {

  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={< Cart />} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App
