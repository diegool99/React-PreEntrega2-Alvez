import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const greeting = 'Tienda';

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={greeting}/>}/>
        <Route path='/category/:name' element={<ItemListContainer greeting={greeting}/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer greeting={greeting}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;