import { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
	const [userData, setUserData] = useState([]);

	const getData = (name, email, password) => {
		setUserData((prevUserData) => {
			return [
				...prevUserData,
				{ name: name, email: email, password: password },
			];
		});
	};

	return (
		<div>
			<AddUser getData={getData}></AddUser>
			<UserList list={userData}></UserList>
		</div>
	);
}

export default App;
