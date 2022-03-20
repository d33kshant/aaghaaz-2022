import '../styles/NavBar.css'

const NavBar = () => {
	return (
		<nav className="navbar-container">
			<img className='navbar-logo' src="https://matsuniversity.ac.in/wp-content/uploads/2022/03/MATS-logo-440x168.png" alt="MATS Logo" />
			<div className="navbar-links">
				<a href="#register" className="navbar-link">Register</a>
				<a href="#events" className="navbar-link">Events</a>
				<a href="#contact" className="navbar-link">Contact</a>
			</div>
		</nav>
	)
}

export default NavBar