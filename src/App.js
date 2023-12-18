import './App.css';
import Routing from './route/route';
import Footer from './components/footer.js';
import Header from './components/header.js';
function App() {
  return (
 <div className="App">
      <Header/> 
      <Routing/>
      <Footer/>
    </div>
  );
}
export default App;
