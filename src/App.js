import React, {useState} from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import HomeB from "./pages/HomeB";
import HomeA from "./pages/HomeA";
import HomeANav from "../src/component/HomeANav";
import HomeBNav from "../src/component/HomeBNav";
import Signup from "./component/HomeB/Signup";
import SignupChild from "./component/HomeB/SignupChild";
import SignupKey from "./component/HomeB/SignupKey";
import Login from "./component/HomeB/Login";
import HealthCare from "./component/HomeA/HealthCare";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<Router>
			<div className='App'>
				{isLoggedIn ? <HomeANav /> : <HomeBNav />}
				<Routes>
					<Route path='/' element={<HomeB />} />
					<Route
						path='/home'
						isLoggedIn={isLoggedIn}
						element={
							isLoggedIn ? (
								<HomeA />
							) : (
								<Navigate to='/homeB' />
							)
						}
					/>
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
