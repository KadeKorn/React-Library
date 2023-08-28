import Discounted from './components/Discounted.jsx';
import Explore from './components/Explore.jsx';
import Featured from './components/Featured.jsx';
import Footer from './components/Footer.jsx';
import Highlights from './components/Highlights.jsx';
import Landing from './components/Landing.jsx';
import Nav from './components/Nav.jsx'


function App() {
  return (
   <div>
    <Nav />
    <Landing />
    <Highlights />
    <Featured />
    <Discounted />
    <Explore />
    <Footer />
   </div>
  );
}

export default App;
