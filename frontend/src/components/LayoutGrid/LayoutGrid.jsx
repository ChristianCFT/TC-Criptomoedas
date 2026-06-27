import { Outlet } from "react-router-dom";
import "./layoutGrid.css"
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar"


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