/* eslint-disable react/jsx-pascal-case */
import React, {useState} from "react";
import SignupAgree from "../component/HomeBefore/SignupAgree";
import SignupInfo from "../component/HomeBefore/SignupInfo";

export default function Signup() {
	const [state, setState] = useState(1);

	return (
		<>
			{state === 1 ? (
				<SignupAgree setState={setState} />
			) : (
				<SignupInfo />
			)}
		</>
	);
}
