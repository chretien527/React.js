import "./Header.css";

function Header(){
    return (
        <header className="Header">
            <h1>Disover inspiring websites built by the community</h1>
            <p>Browse, clone, and customise thousands of websites.</p>
            <input type="text" placeholder="Search websites..."/>
        </header>
    );
}

export default Header;