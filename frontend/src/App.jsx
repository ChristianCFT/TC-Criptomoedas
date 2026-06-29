import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import Carteira from "./pages/Carteira/Carteira";
import Inicial from "./pages/Inicial/Inicial";
import LayoutGrid from "./components/LayoutGrid/LayoutGrid";
import Criptoativos from "./pages/Criptoativos/Criptoativos";




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

                    <Route
                    path="/criptoativos"
                    element={<Criptoativos />}
                    />

                </Route>

                <Route
                    path="/mercado"
                    element={<Criptoativos />}
                
                />

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