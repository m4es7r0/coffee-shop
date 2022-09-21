import { Routes, Route } from 'react-router-dom';

import { Main } from '../src/pages/main/Main'
import { Shop } from './pages/shop/Shop';
import { Coffee } from './components/coffe-item-about/Coffee';

import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<Coffee />} />
      </Routes>
    </>
  )
}

export default App