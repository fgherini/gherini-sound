import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/index.';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/gherini-sound' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="gherini-sound/about" element={<About />} />
          <Route path="gherini-sound/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
