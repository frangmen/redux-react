import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Categoria1 from "./components/Categorias/Categoria1";
function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category1' element={<Categoria1 />} />
                </Routes>
                <p>
                    <code>Programming</code> Fran @2023
                </p>
            </BrowserRouter>
        </div>
    );
}

export default App;
