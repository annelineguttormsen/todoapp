function Task(props) {
	return `
	<div class="task">
		<ul class="task__list">
			${TaskListElement(props)}
		</ul>
		<button>Change</button>
		<button>Delete</button>
	</div>
	`;
}
//TODO: legg til forløkke i li

function TaskListElement(props) {
	return `
	<li class="task__list__element">
		<input type="checkbox" ${props.status}>
		${props.description}
	</li>
	`;
}