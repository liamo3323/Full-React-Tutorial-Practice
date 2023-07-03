import './App.css'
import Navbar from './Navbar';
import Home from './Home'

function App() {
  return (  // functions always need to return something usually JSX template
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App; // we always want to export component so that they can be used on the DOM I think
