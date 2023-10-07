import Card from "../Card/Card";
import "../User/AddUser.css";
import Button from "../Button/Button";
import { useState } from "react";

const AddUSer = (props) => {
	const [userName, setUserName] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [userEmail, setUserEmail] = useState("");

	const addUserHandler = (event) => {
		event.preventDefault();
		if (
			userName.trim().lenght === 0 ||
			userPassword.trim().lenght === 0 ||
			userEmail.trim().lenght === 1
		) {
			return;
		}
		console.log(userName,userEmail)
		props.getData(userName, userEmail, userPassword);
		setUserEmail("");
		setUserName("");
		setUserPassword("");
	};

	const addUserName = (event) => {
		event.preventDefault();
		setUserName(event.target.value);
	};

	const addPasswordHandler = (event) => {
		event.preventDefault();
		setUserPassword(event.target.value);
	};
	const addEmailHandler = (event) => {
		event.preventDefault();
		setUserEmail(event.target.value);
	};

	return (
		<Card className="input">
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					value={userName}
					type="text"
					onChange={addUserName}></input>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					value={userEmail}
					type="email"
					onChange={addEmailHandler}></input>
				<label htmlFor="password">Password</label>
				<input
					value={userPassword}
					id="password"
					type="password"
					onChange={addPasswordHandler}></input>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	);
};
export default AddUSer;
