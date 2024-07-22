import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Home from "./pages/BeforeLoginHome";
import Signup from "./pages/HomeB/Signup";
import SignupChild from "./pages/HomeB/SignupChild";
import SignupKey from "./pages/HomeB/SignupKey";
import Login from "./pages/HomeB/Login";
import HealthCare from "./pages/HomeA/HealthCare";
import Medicine from "./pages/HomeA/Medicine";
import OneDayCheck from "./pages/HomeA/OneDayCheck";

import Parents from "./pages/Parents";

function App() {
	return (
		<Router>
			<Nav />
			<div className='App'>
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
					<Route path='/Medicine' element={<Medicine />} />
					<Route
						path='/OneDayCheck'
						element={<OneDayCheck />}
					/>
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
