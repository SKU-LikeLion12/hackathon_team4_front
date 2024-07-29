/* eslint-disable react/jsx-pascal-case */
import React, {useState} from "react";
import SignupAgree from "../component/Signup/SignupAgree";
import SignupInfo from "../component/Signup/SignupInfo";
// import SignupChild from "../component/Signup/SignupChild";
// import SignupChild from "../../component/Signup/SignupChild";
// import SignupKey from "./../../component/Signup/SignupKey";

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
