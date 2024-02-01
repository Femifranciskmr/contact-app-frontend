
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import Contactpage from './Components/Contactpage';
import Add from './Components/Add';
import View from './Components/View';
import Edit from './Components/Edit';
import Pagenotfound from './Components/Pagenotfound';

function App() {
  return (
    <div className="App">

      <header>
        <Header/>
      </header>
      <section>
          <Routes>
            <Route  path='/' element={<Homepage/>}/>
            <Route  path='/contact' element={<Contactpage/>}/>
            <Route  path='/add' element={<Add/>}/>
            <Route  path='/view/:id' element={<View/>}/>
            <Route  path='/edit/:id' element={<Edit/>}/>
            <Route  path='*' element={<Pagenotfound/>}/>
          </Routes>
      </section>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
