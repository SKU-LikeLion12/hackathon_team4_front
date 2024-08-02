// src/App.js
import React, {useState, useEffect} from "react";
import axios from "axios";
import BMIChart from "./BMIChart";

function App() {
	// Assuming these values are fetched from the user's profile after login
	const [userInfo, setUserInfo] = useState({
		weight: 70, // Default weight
		height: 175, // Default height
		age: 25, // Default age
	});
	const [bmi, setBMI] = useState(null);
	const [error, setError] = useState("");

	useEffect(() => {
		// Function to fetch user info could go here
		// setUserInfo({ weight: fetchedWeight, height: fetchedHeight, age: fetchedAge });
	}, []);

	const handleCalculateBMI = async () => {
		try {
			const {weight, height} = userInfo;
			const response = await axios.get(
				"https://your-backend-api.com/calculate-bmi",
				{
					params: {weight, height},
				}
			);

			setBMI(response.data.bmi);
			setError("");
		} catch (error) {
			setError(
				"Failed to calculate BMI. Please try again."
			);
			console.error(error);
		}
	};

	return (
		<div>
			<h1>BMI Calculator</h1>
			<div>
				<p>Weight: {userInfo.weight} kg</p>
				<p>Height: {userInfo.height} cm</p>
				<p>Age: {userInfo.age} years</p>
				<button onClick={handleCalculateBMI}>
					Calculate BMI
				</button>
			</div>
			{error && <p style={{color: "red"}}>{error}</p>}
			{bmi && <BMIChart bmi={bmi} />}
		</div>
	);
}

export default App;
