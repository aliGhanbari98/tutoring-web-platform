import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { iconLogout, iconAdmin, iconLogo } from '../../icons.js'

function NavigationBar(props) {
	return (
		<Navbar bg='dark' variant='dark'>
			{props.admin ? (
				<Link to='/admin/list'>
					<Navbar.Brand>{iconAdmin} Admin panel</Navbar.Brand>
				</Link>
			) : null}
			<Link to={'/'} className='mx-auto'>
				<Navbar.Brand>{iconLogo} Studygroup Manager</Navbar.Brand>
			</Link>
			{props.logged ? (
				<Link to={'/'} onClick={props.logout}>
					<Navbar.Brand>Logout {iconLogout}</Navbar.Brand>
				</Link>
			) : null}
		</Navbar>
	)
}

export default NavigationBar
