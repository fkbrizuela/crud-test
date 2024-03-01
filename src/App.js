import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ShowProductsCopy from './components/ShowProductsCopy'
import CreateProducts from './components/CreateProducts';
import EditProducts from './components/EditProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowProductsCopy/>}></Route>
          <Route path='/create' element={<CreateProducts/>}></Route>
          <Route path='/edit/:id' element={<EditProducts/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
