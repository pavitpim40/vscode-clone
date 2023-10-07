import React from 'react'
import {Routes,Route} from 'react-router-dom'
import paths from './paths'
import ProtectedRoute from 'auth/ProtectedRoute';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from 'components/common/loading/Loading';

const Home = React.lazy(() => import('../pages/hone/Home'));
const CodeEditor = React.lazy(() => import('../pages/code-editor/CodeEditor'));

const Router = () => {
	const {isLoading} = useAuth0()

	if(isLoading) return <Loading/>
	return (
		<Routes>
			<Route path={paths.home} element={<Home/>}/>
			<Route path={paths.codeEditor} element={<ProtectedRoute component={CodeEditor}/>}/>
		</Routes>
	)
}

export default Router