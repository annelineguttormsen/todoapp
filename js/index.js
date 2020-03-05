//const rootElem = document.getElementById("root");
//rootElem.innerHTML = App();

let toDoItems = new Array();

toDoItems = [
	{"id":0,
	"content":"Denne oppgaven er ferdig og derfor checked",
	"status":"checked"},
	{"id":1,
	"content":"Denne oppgaven er ferdig og derfor checked",
	"status":""}
];

function Task(props) {
	return `
	<div class="task">
		<ul class="task__list">
			${
				props.map(function (i) {
					return TaskListElement(i);
				})
			}
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
		${props.content}
	</li>
	`;
}
