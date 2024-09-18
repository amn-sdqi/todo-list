import { useEffect, useCallback } from "react";
import Create from "./create";
import TodoList from "./todo-list";
import useFetch from "./useFetch"; // Import the custom hook

const Home = () => {
	useEffect(() => {
		const {
			data: todos,
			setData,
			loading,
			error,
		} = useFetch("http://localhost:2000/todos");
	}, [deleteTodo]);

	// Toggle the status of a todo item
	const statusComplete = (todoId) => {
		setData((todos) =>
			todos.map((todo) =>
				todo._id === todoId
					? { ...todo, status: todo.status === "pending" ? "done" : "pending" }
					: todo
			)
		);
	};

	// Memoize the pending and done todo lists
	const pending = todos.filter((todo) => todo.status === "pending");
	const done = todos.filter((todo) => todo.status === "done");

	//deleteTodo
	const deleteTodo = useCallback(async (todoId) => {
		await fetch("http://localhost:2000/todos", {
			method: "DELETE",
			body: { _id: todoId },
			headers: {
				"Content-Type": "application/json",
			},
		});
	})[useEffect];

	// Handle loading and error states
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!todos || !todos.length) return <div>No todos available.</div>;

	return (
		<div className="home">
			<Create setData={setData} />

			<TodoList
				title={"Pending Tasks"}
				todos={pending}
				statusComplete={statusComplete}
				deleteTodo={deleteTodo}
			/>
			<TodoList
				title={"Completed"}
				todos={done}
				statusComplete={statusComplete}
				deleteTodo={deleteTodo}
			/>
		</div>
	);
};

export default Home;
