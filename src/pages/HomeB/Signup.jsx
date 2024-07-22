/* eslint-disable react/jsx-pascal-case */
import React, {useState} from "react";
import SignupAgree from "./SignupAgree";
import SignupInfo from "./SignupInfo";

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
