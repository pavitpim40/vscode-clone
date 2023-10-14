import React from 'react'
import {styled} from '@mui/material/styles'	
import { UserFile } from 'types/Files'
import CustomEditor from '../custom-editor/CustomEditor'


type CustomTabPanelProps = {
	activeFile: UserFile
	editorActiveFileId: string | null
}

const CustomTabPanel = (props:CustomTabPanelProps) => {
	// console.log("CustomTabPanel")
	const {activeFile, editorActiveFileId} = props

	return (
		<CustomTabLabelContainer role="tabpanel" hidden={editorActiveFileId !== activeFile.id}>
    <CustomEditor  activeFile={activeFile}/>
	</CustomTabLabelContainer>
	)
}
const CustomTabLabelContainer = styled('div')({
  height: '100vh',
});




export default CustomTabPanel