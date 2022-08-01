import { Outlet, Link } from 'react-router-dom';
const Nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link class="active" to="/">Home</Link></li>
                    <li><Link to="/edit">Edit</Link></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
export default Nav;