import React, {useState, useEffect} from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./pages/About";
import SignupAgree from "./pages/Signup/SignupAgree";
import SignupInfo from "./pages/Signup/SignupInfo";
import Login from "./pages/Login";
import Parents from "./component/Parents/Parents";
import ChildInfo from "./component/Parents/Child/ChildInfo";
import ChildKey from "./component/Parents/Child/ChildKey";
import Mypage from "./component/Mypage/Mypage";
import BMI from "./component/Mypage/BMI";
import BMIChart from "./component/Mypage/BMIChart";
import MyProfile from "./component/Mypage/MyProfile";
import FitHealth from "./component/FitHealth/FitHealth";
import LowerBody from "./component/FitHealth/LowerBody";
import UpperBody from "./component/FitHealth/UpperBody";
import Muscle from "./component/FitHealth/Muscle";
import OneDayCheck from "./component/Onedaycheck/OneDayCheck";
import Medicine from "./component/Medicine/Medicine";

function App() {
	//둘 다 기본상태는 false임
	const [isChildLoggedIn, setIsChildLoggedIn] =
		useState(false);
	const [isParentLoggedIn, setIsParentLoggedIn] =
		useState(false);

	useEffect(() => {
		const token = localStorage.getItem("jwtToken");
		if (token) {
			// 토큰 유효성 검사 후 상태 설정 (예시로 true 설정)
			setIsChildLoggedIn(true);
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("jwtToken");
		setIsChildLoggedIn(false);
		setIsParentLoggedIn(false);
	};

	return (
		<Router>
			<Navbar
				isChildLoggedIn={isChildLoggedIn}
				isParentLoggedIn={isParentLoggedIn}
				handleLogout={handleLogout}
			/>
			<div className='App'>
				<Routes>
					{/* 로그인, 회원가입, about */}
					<Route path='/' element={<About />} />
					<Route
						path='/SignupAgree'
						element={<SignupAgree />}
					/>
					<Route
						path='/SignupInfo'
						element={<SignupInfo />}
					/>
					<Route path='/Login' element={<Login />} />
					{/* 보호자 페이지 */}
					<Route path='/Parents' element={<Parents />} />
					<Route
						path='/ChildInfo'
						element={<ChildInfo />}
					/>
					<Route path='/ChildKey' element={<ChildKey />} />
					{/* Mypage: 마이페이지 */}
					<Route path='/Mypage' element={<Mypage />} />
					<Route path='/BMI' element={<BMI />} />
					<Route path='/BMIChart' element={<BMIChart />} />
					<Route
						path='/MyProfile'
						element={<MyProfile />}
					/>
					{/* Fithealth : 맞춤운동 */}
					<Route
						path='/FitHealth'
						element={<FitHealth />}
					/>
					<Route
						path='/LowerBody'
						element={<LowerBody />}
					/>
					<Route
						path='/UpperBody'
						element={<UpperBody />}
					/>
					<Route path='/Muscle' element={<Muscle />} />
					{/* Onedaycheck 하루체크 */}
					<Route
						path='/OneDayCheck'
						element={<OneDayCheck />}
					/>
					{/* Medicine 약 체크 */}
					<Route path='/Medicine' element={<Medicine />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
