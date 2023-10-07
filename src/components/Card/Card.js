import "../Card/Card.css";

const Card = (props) => {
	const customStyles = {
		...props.className,
	};

	return (
		<div className="userCard">
			{props.children}
		</div>
	);
};
export default Card;
