import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutGrid from "./components/LayoutGrid";

import Inicial from "./pages/Inicial";
import Carteira from "./pages/Carteira";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";


function App(){

    return (

        <BrowserRouter>

            <Routes>

                {/* páginas com navbar e footer */}
                <Route element={<LayoutGrid />}>

                    <Route 
                        path="/" 
                        element={<Inicial />}
                    />

                    <Route 
                        path="/carteira" 
                        element={<Carteira />}
                    />

                </Route>


                {/* páginas sem layout */}
                <Route 
                    path="/login" 
                    element={<Login />}
                />

                <Route 
                    path="/cadastro" 
                    element={<Cadastro />}
                />


            </Routes>

        </BrowserRouter>

    )

}

export default App;