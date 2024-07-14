import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";
import HomeB from "./pages/HomeB";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./component/Footer";
import SignupChild from "./component/HomeBefore/SignupChild";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomeB />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/Signup' element={<Signup />} />

					<Route
						path='/SignupChild'
						element={<SignupChild />}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
