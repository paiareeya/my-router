import { Link, NavLink } from "react-router-dom"

const StyleNavbar = () => {
    return (
        <nav className="navbar">
            <NavLink to='/' className={({ isActive }) =>
                isActive ? 'link active' : 'link'
            }>Home</NavLink>&nbsp;
            <NavLink to='/about' className={({ isActive }) =>
                isActive ? 'link active' : 'link'
            }>About</NavLink>&nbsp;
            <NavLink to='/product' className={({ isActive }) =>
                isActive ? 'link active' : 'link'
            }>Product</NavLink>&nbsp;
            <NavLink to='/login' className={({ isActive }) =>
                isActive ? 'link active' : 'link'
            }>Login</NavLink>
        </nav>
    )
}

export default StyleNavbar;