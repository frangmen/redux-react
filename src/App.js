import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<ItemListContainer />} />
                </Routes>
                <p>
                    <code>Programming</code> Fran
                </p>
            </BrowserRouter>
        </div>
    );
}

export default App;
