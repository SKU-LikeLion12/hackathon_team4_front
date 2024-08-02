import React, {useState} from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import LoginNavbar from "./component/LoginNavbar";
import Footer from "./component/Footer";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Parents from "./component/Parents/Parents";
import Mypage from "./component/Mypage/Mypage";
import BMI from "./component/Mypage/BMI";
import BMIChart from "./component/Mypage/BMIChart";
import MyProfile from "./component/Mypage/MyProfile";
import FitHealth from "./component/FitHealth/FitHealth";
import LowerBody from "./component/FitHealth/LowerBody";
import UpperBody from "./component/FitHealth/UpperBody";
import Muscle from "./component/FitHealth/Muscle";

function App() {
	const [page, setPage] = useState("");
	return (
		<Router>
			<Navbar setPage={setPage} />
			<LoginNavbar />
			<div className='App'>
				<Routes>
					{/* 로그인 */}
					<Route path='/Login' element={<Login />} />
					{/* 회원가입 */}
					<Route path='/Signup' element={<Signup />} />
					{/* 로그인 전 메인페이지 / 서비스 ABOUT */}
					<Route path='/' element={<About />} />
					{/* 마이페이지 */}
					<Route path='Mypage' element={<Mypage />} />
					<Route path='BMI' element={<BMI />} />
					<Route path='BMIChart' element={<BMIChart />} />
					<Route path='MyProfile' element={<MyProfile />} />
					{/* 보호자 모니터링 서비스 */}
					<Route path='/Parents' element={<Parents />} />
					{/* 맞춤운동 */}
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
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
