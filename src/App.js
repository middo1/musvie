import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './routes/Landing';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Main from './routes/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />} />
    </Routes>)
}

export default App;
