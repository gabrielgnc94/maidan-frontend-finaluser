import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import axios from 'axios';

// import jwtDecode from 'jwt-decode';


//Styling Area
// import './App.css';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeObject from './util/newTheme';

// Novo jeito
import { MuiThemeProvider } from '@material-ui/core/styles';



//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
// import { SET_AUTHENTICATED } from './redux/types';
// import { logoutUser, getUserData } from './redux/actions/userActions';


//Components
// import AuthRoute from './util/AuthRoute';



// Pages
import Home from './pages/Home';
// import SignIn from './pages/SignIn';
// import signup from './pages/signup';





const theme = createMuiTheme(themeObject);

// const token = localStorage.FBIdToken;

// if(token){
// 	const decodedToken = jwtDecode(token);
// 	console.log(decodedToken);
// 	if(decodedToken.exp * 1000 < Date.now()){
// 		store.dispatch(logoutUser());
// 		window.location.href = '/login';
// 	} else {
// 		store.dispatch({ type: SET_AUTHENTICATED });
// 		axios.defaults.headers.common['Authorization'] = token;
// 		store.dispatch(getUserData());
// 	}
// }

function App() {
  return (
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<Router>
						<Switch>
							<Route 
							exact 
							path="/" 
							component={Home}
							/>
							{/* <AuthRoute 
								exact 
								path="/login" 
								component={SignIn} 
							/> */}
							{/* <AuthRoute 
								exact 
								path="/signup"
								component={signup} 
							/> */}
							
						</Switch>
			</Router>
		</Provider>
	</MuiThemeProvider>
  );
}

export default App;
