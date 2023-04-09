import React, {useState} from 'react';

//include images into your bundle

const Home = () => {
	const [todo, setTodo] = useState("");
	const [list, setList] = useState([]);

	return (
		<div className="container">
			<h1>New Task</h1>
			<Task
				todo={todo}
				setTodo={setTodo}
				list={list}
				setList={setList}
			/>
			<h2>Lista de tareas</h2>
			<ToDoList list={list} setList={setList} />
		</div>
	);
};

const ToDoList = (props) => {
	return (
		<div>
			<div>
				{props.list.map(function (valor, id) {
					return <li key={id}>{valor}</li>;
				})}
			</div>
		</div>
	);
};


const ToDo = (props) => {
	const clean = (e) => {
		props.setTodo("");
	};

	return (
		<div>
			<input
				type="text"
				value={props.todo}
				onChange={(e) => props.setTodo(e.target.value)}
				placeholder="What to Do"
			/>
			<button
				className="btn btn-success col"
				onClick={() => {
					props.setList([...props.list, props.todo]);
					console.log(props.todo);
					clean();
				}}>
				Save
			</button>
			<br />
			<p>{props.todo}</p>
		</div>
	);
};

export default Home;






