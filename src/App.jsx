import { Routes, Route } from 'react-router-dom';
import Footer from './pages/footer';
import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<>
          <About />
          <Footer />
        </>
      } />
      </Routes>
    </>
  );
}
export default App;