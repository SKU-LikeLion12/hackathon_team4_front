/* eslint-disable react/jsx-pascal-case */
import React, {useState} from "react";
import Signup_Agree from "../component/HomeA/Signup_Agree";
import Signup_Info from "../component/HomeA/Signup_Info";

export default function Signup() {
	const [state, setState] = useState(1);
	return (
		<>
			{state === 1 ? (
				<Signup_Agree setState={setState} />
			) : (
				<Signup_Info />
			)}
		</>
	);
}
