const rootElem = document.body;

let toDoItems = [
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


renderApp(toDoItems);

function renderApp(data) {
	rootElem.innerHTML = App(data);

	document.querySelector("form")
		.addEventListener("submit",(event)=>handleTodoFormAdd(event,data));
}


function App(props) {
	return `
		<div class="col-12 header">
			<h1>Todo list</h1>
		</div>
		${Task(props)}
		${TaskInitializer()}

	`;
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
	listElements.join("");
	return `
	<ul class="task__list">
		${listElements}
		<button>Change</button>
		<button>Delete</button>
	</ul>
	`;
}

function TaskInitializer() {
	return `
	<div class="col-12 fixed__wrapper">
		<div class="col-10 col-md-8 task__initializer">
			<form>
				<input class="task__initializer--input" type="text" placeholder="Add item">
				<button class="task__initializer--submit" type="submit">Add</button>
			</form>
		</div>
	</div>
	`;
}



//from https://stackoverflow.com/a/2117523
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function handleTodoFormAdd(event,data) {
	event.preventDefault();
	const updatedData = {
		"id": uuidv4(),
		"listItems": [
			{
				"data": event.target.elements[0].value,
				"status":""
			}
		]
	};
	//oppdater toDoItems
	data.push(updatedData);
	renderApp(data);
}
