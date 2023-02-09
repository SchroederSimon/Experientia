import '../../pages/Navbar/Navbar.css'


function Navbar() {

    return (
        <div className="containerNavbar">
            <div className="navbar">
                <div className="logo">
                    <h1>Experientia</h1>
                </div>
                <div className="navLinks">
                    <ul>
                        <li>HOME</li>
                        <li>NEWS</li>
                        <li>COURSES</li>
                        <li>ABOUT</li>
                    </ul>
                </div>
                <div className="buttonLogin">
                    <button>LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
