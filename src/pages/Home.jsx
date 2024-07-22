import React, {useEffect, useState} from "react";
import Nav from "../component/Nav";
import Section from "../component/HomeB/HomeBSection";
import HealthCare from "../component/HomeA/HealthCare";

export default function HomeB() {
	const [page, setPage] = useState("default");
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

	const componentMap = {
		HealthCare: <HealthCare />,
		default: (
			<Section
				handleLogin={handleLogin}
				input={input}
				setPage={setPage}
			/>
		),
	};

	const componentToShow = componentMap[page];

	useEffect(() => {
		console.log("input: ", input);
	}, [input]);
	return (
		<>
			<div className='Home'>
				<Nav setPage={setPage} />
				{componentToShow}
			</div>
		</>
	);
}
