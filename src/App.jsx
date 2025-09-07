import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';
import Footer from './pages/footer';
import Navbar from './components/navbar';
import Sticky from './components/stickyHeader';
function App() {
  return (
    <>
    <Navbar />
    <Sticky />
    <section id="home"><Home /></section>
    <section id="menu"><Menu /></section>
    <section id="about"><About /></section>
    <section id="foot"><Footer /></section>
    </>
  );
}

export default App;
