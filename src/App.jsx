import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HealthCare from "./component/Healthcare/HealthCare";
import Parents from "./pages/Parents";
import Mypage from "./component/Mypage/Mypage";
import BMI from "./component/Mypage/BMI";
import BMIChart from "./component/Mypage/BMIChart";
import MyProfile from "./component/Mypage/MyProfile";

function App() {
	return (
		<Router>
			<Nav />
			<div className='App'>
				<Routes>
					{/* 로그인 */}
					<Route path='/Login' element={<Login />} />
					{/* 회원가입 */}
					<Route path='/Signup' element={<Signup />} />
					{/* 로그인 전 메인페이지 / 서비스 ABOUT */}
					<Route path='/' element={<About />} />
					{/* 건강관리 */}
					<Route
						path='/HealthCare'
						element={<HealthCare />}
					/>
					{/* 마이페이지 */}
					<Route path='Mypage' element={<Mypage />} />
					<Route path='BMI' element={<BMI />} />
					<Route path='BMIChart' element={<BMIChart />} />
					<Route path='MyProfile' element={<MyProfile />} />
					{/* 보호자 모니터링 서비스 */}
					<Route path='/Parents' element={<Parents />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
