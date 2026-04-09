import "./Navbar.css";

function Navbar(){
    return (
        <nav className="navbar">
            <ul>
                <li>Product</li>
                <li>MarketPlace</li>
                <li>Learn</li>
                <li>Resources</li>
                <li>Login</li>
                <li>Contact Sales</li>
            </ul>
            <button className="primary-btn">Get started - it's free</button>
        </nav>
    );
}

export default Navbar;