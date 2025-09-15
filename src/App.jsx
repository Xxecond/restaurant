import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';
import Footer from './pages/footer';
import Contact from './pages/contact';

import Navbar from './components/navbar';
import Sticky from './components/stickyHeader';

function App() {
  return (
    <>
      <Navbar />
      <Sticky />
      <main>
        <Home />
        <Menu />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
