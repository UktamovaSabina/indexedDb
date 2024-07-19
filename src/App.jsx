import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Products from './components/products/Products';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={< Cart />} />
        </Routes>
        <ToastContainer left={true} className='toaster-position' />
      </BrowserRouter>
    </section>
  )
}

export default App
