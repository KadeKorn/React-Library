import Discounted from './components/Discounted.jsx';
import Featured from './components/Featured.jsx';
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
   </div>
  );
}

export default App;
