import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import Home from "./component/HomeB/BeforeLoginHome";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Signup from "./component/HomeB/Signup";
import SignupChild from "./component/HomeB/SignupChild";
import SignupKey from "./component/HomeB/SignupKey";
import Login from "./component/HomeB/Login";
import HealthCare from "./component/HomeA/HealthCare";
import Parents from "./pages/Parents";

function App() {
	return (
		<Router>
			<Nav />
			<div className='App w-full h-screen'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Signup' element={<Signup />} />
					<Route
						path='/SignupChild'
						element={<SignupChild />}
					/>
					<Route
						path='/SignupKey'
						element={<SignupKey />}
					/>
					<Route path='/Login' element={<Login />} />
					<Route
						path='/HealthCare'
						element={<HealthCare />}
					/>
					<Route path='/Parents' element={<Parents />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
