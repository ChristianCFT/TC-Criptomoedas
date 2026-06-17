import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import "../styles/layoutGrid.css"


function LayoutGrid(){

    return(

        <div className="layout">

            <Navbar/>

            <div className="content">

                <Outlet />

            </div>

            <Footer/>

        </div>

    );

}

export default LayoutGrid;