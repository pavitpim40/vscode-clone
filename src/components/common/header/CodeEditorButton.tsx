import {Button} from '@mui/material'
import {styled} from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import paths from '../../../routes/paths'

const CodeEditorStyledButton = styled(Button)(({theme}) => ({
	color : theme.commonColors.white,
}))
const CodeEditorButton = () => {
	const navigate = useNavigate()
	const onClick = ()	=> {
		navigate(paths.codeEditor)
	}

	return <CodeEditorStyledButton onClick={onClick}>Code Editor</CodeEditorStyledButton>
}

export default CodeEditorButton