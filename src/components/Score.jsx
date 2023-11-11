export default function Score(props) {
	return (
		<div className="scoreboard">
			<li>Current Score = {props.currentScore}</li>
			<li>Best Score = {props.bestScore}</li>
		</div>
	);
}
