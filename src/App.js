import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import Busket from "./components/Busket";
import Header from "./components/Header";

function App() {
  return (
    <>
        <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/bus' element={<Busket/>}/>
      </Routes>
    </>
  );
}

export default App;
