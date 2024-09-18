import { useState } from "react";

const Create = ({ setData }) => {
	const [todoText, setTodo] = useState("");

	const addNewTodo = (e) => {
		e.preventDefault(); // prevents default form submision behaviour

		if (todoText.trim()) {
			const saveToDatabase = async () => {
				try {
					const response = await fetch("http://localhost:2000/todos", {
						method: "POST",
						body: JSON.stringify({
							text: todoText,
							status: "pending",
						}),
						headers: {
							"Content-Type": "application/json",
						},
					});

					if (!response.ok) {
						throw new Error(response.statusText);
					}

					const newTodo = await response.json;

					setData((todos) => [...todos, newTodo]);
					setTodo("");
				} catch (error) {
					console.log(error);
				}
			};
			// console.log("NewTodo:", todo);
			saveToDatabase();
		}
	};

	return (
		<form onSubmit={addNewTodo}>
			<div className="addNew">
				<input
					type="text"
					value={todoText}
					onChange={(e) => setTodo(e.target.value)} // Update state on input change
					placeholder="New Task..."
				/>
				<button type="button">Add</button>
			</div>
		</form>
	);
};

export default Create;
