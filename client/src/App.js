import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';
import HomePage from './components/home';
import AddNewBook from './components/newbook';
import BookInfo from './components/bookinfo';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/home' element={<HomePage/>}></Route>
    <Route path='newbook' element={<AddNewBook/>}></Route>
    <Route path='/book-info' element={<BookInfo />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
