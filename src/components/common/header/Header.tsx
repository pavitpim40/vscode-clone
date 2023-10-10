import { AppBar,Toolbar,Typography } from '@mui/material'
import {styled} from '@mui/material/styles'
import {Link} from 'react-router-dom'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'
import CodeEditorButton from './CodeEditorButton'
import { useAuth0 } from '@auth0/auth0-react'
import DarkModeSwitch from './DarkModeSwitch'


const StyledLink = styled(Link)(({theme}) => ({
	textDecoration : 'none',
	color : theme.commonColors.white,
}))

function Header() {
	const {isAuthenticated} = useAuth0()
	return (
		<AppBar position='relative'>
			<Toolbar>
				<Typography variant='h6' sx={{flex:1}}>
					<StyledLink to='/'>Stella SandBox</StyledLink>
				</Typography>
				<DarkModeSwitch/>
				{isAuthenticated ? <AuthenticatedButtons/> : <UnauthenticatedButtons/>}
			</Toolbar>
		</AppBar>
	)
}

const UnauthenticatedButtons = () => {
	return <div><SignInButton/></div>
}

const AuthenticatedButtons = () => {
	return <div>
		<CodeEditorButton/>
		<SignOutButton/>
		</div>
}
export default Header