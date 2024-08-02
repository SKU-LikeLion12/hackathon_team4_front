/* eslint-disable react/jsx-pascal-case */
import React, {useState} from "react";
import SignupAgree from "../component/Signup/SignupAgree";
import SignupInfo from "../component/Signup/SignupInfo";
import SignupChild from "../component/Signup/SignupChild";
import SignupKey from "./../component/Signup/SignupKey";

export default function Signup() {
	const [state, setState] = useState(1);

	const pageSwitch = () => {
		switch (state) {
			case 1:
				return <SignupAgree setState={setState} />;
			case 2:
				return <SignupInfo setState={setState} />;
			case 3:
				return <SignupChild setState={setState} />;
			case 4:
				return <SignupKey setState={setState} />;
			default:
				return <SignupAgree setState={setState} />;
		}
	};

	return <>{pageSwitch()}</>;
}
