import React, {useState} from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import HomeB from "./pages/HomeB";
import HomeA from "./pages/HomeA";
import Signup from "./component/HomeB/Signup";
import SignupChild from "./component/HomeB/SignupChild";
import SignupKey from "./component/HomeB/SignupKey";
import Login from "./component/HomeB/Login";
import HealthCare from "./component/HomeA/HealthCare";
import Medicine from "./component/HomeA/Medicine";
import OneDayCheck from "./component/HomeA/OneDayCheck";
import Donut from "./component/HomeA/Donut";


function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	return (
		<Router>
			<div className='App'>
				<OneDayCheck/>
				<Medicine/>
				<Routes>
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
				
					
				</Routes>
			</div>
		</Router>
	);
}

export default App;
