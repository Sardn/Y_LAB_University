import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404page';
import Login from './pages/Login';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
