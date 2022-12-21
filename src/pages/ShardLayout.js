import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyleNavbar from "../components/StyleNavbar";

const ShardLayout = () => {
    return (
        <>
            <StyleNavbar />
            <Outlet />
        </>
    );
};

export default ShardLayout;