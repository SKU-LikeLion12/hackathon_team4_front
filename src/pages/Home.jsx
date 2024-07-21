import React, {useEffect, useState} from "react";
import HomeBNav from "../component/Nav";
import Section from "../component/HomeB/HomeBSection";

export default function HomeB() {
	const [input, setInput] = useState({
		id: "",
		pwd: "",
		uniqueKey: "",
	});

	const handleLogin = (sort, value) => {
		setInput((prev) => ({
			...prev,
			[sort]: value,
		}));
	};

	useEffect(() => {
		console.log("input: ", input);
	}, [input]);
	return (
		<>
			<div className='Home'>
				<HomeBNav />
				<Section handleLogin={handleLogin} input={input} />
			</div>
		</>
	);
}
