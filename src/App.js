// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import Cart from './components/Cart';
import Products from './components/Products';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>
    </Router>
  );
}

export default App;

































// import './App.css';
// import Header from './common/Header';


// import Products from './components/Products';

// function App() {
//   return (
//     <>
//       <Header/>
//       <Products />
//     </>
//   );
// }

// export default App;
