let toDoItems = new Array();

//TODO: gjør om content til array

toDoItems = [
	{
		id:0,
		listItems:[
			{
				data:"Denne oppgaven er ferdig",
				status:"checked"
			},
			{
				data:"Denne oppgaven er ferdig",
				status:"checked"
			},
		]
	},
	{
		id:1,
		listItems:[
			{
				data:"Denne oppgaven er ikke ferdig",
				status:""
			}
		]
	}
];


function App() {
	return Task(toDoItems);
}

function Task(props) {
	return `
		${
			props.map(function (i) {
				return TaskList(i);
			}).join("")
		}
	`;
}


function TaskList(props) {
	let listElements = new Array;
	for (let i = 0;i<props.listItems.length;i++) {
		listElements.push(`
			<li class="task__list__element">
				<input type="checkbox" ${props.listItems[i].status}>
				${props.listItems[i].data}
			</li>
			
		`
		);
	}
	console.log(listElements);
	return `
	<ul class="task__list">
		${listElements}
		<button>Change</button>
		<button>Delete</button>
	</ul>
	`;
}


const taskDiv = document.querySelector(".task");
taskDiv.innerHTML = App();

document.querySelector(".task__initializer--submit").addEventListener("submit",(event)=>handleTodoFormAdd(event,data));

function handleTodoFormAdd(event,data) {
	event.preventDefault();
	console.log("form");
}