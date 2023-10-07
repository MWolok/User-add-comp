import { useState } from "react";
import "../User/AddUser.css";
import Card from "../Card/Card";

const UserList = (props) => {
	const [passwordVisibility, setPasswordVisibility] = useState({});

	const togglePasswordVisibility = (userName) => {
		setPasswordVisibility((prevState) => ({
			...prevState,
			[userName]: !prevState[userName] || false,
		}));
	};

	return (
		<Card className="users">
			<ul>
				{props.list.map((user) => (
					<li key={user.name}>
						<div className="userInfom">
							<p>Name: {user.name}</p>
							<p>Email: {user.email}</p>
						</div>

						<button onClick={() => togglePasswordVisibility(user.name)}>
							{passwordVisibility[user.name] ? "HidePassword" : "ShowPassword"}
						</button>
						{passwordVisibility[user.name] && <span>{user.password}</span>}
					</li>
				))}
			</ul>
		</Card>
	);
};
export default UserList;
