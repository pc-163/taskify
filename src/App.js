//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Layouts/Header/header";
import Signup from "./Pages/SignUp/signup";
import Login from './Pages/Login/login';
//import './App.css';
import { Container } from 'react-bootstrap';

import {
  Routes, Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
        <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
