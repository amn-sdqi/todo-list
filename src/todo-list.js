const todoList = ({ todos, title, statusComplete, deleteTodo }) => {
	// console.log(props, todos);

	return (
		<div className="todo-list">
			<h4>{title}</h4>
			{todos.map((todo) => (
				<div className="todo-prev" key={todo._id}>
					{/* <h6>{todo._id}</h6> */}
					<button onClick={() => statusComplete(todo._id)}>
						{todo.status}
					</button>
					<p>{todo.text}</p>
					<div onClick={deleteTodo(todo._id)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="20px"
							viewBox="0 -960 960 960"
							width="20px"
							fill="#000000">
							<path d="M340-164q-33.45 0-55.73-22.27Q262-208.55 262-242v-458h-38q-9.25 0-16.12-6.82-6.88-6.83-6.88-16 0-9.18 6.88-16.18 6.87-7 16.12-7h158v-12q0-12.3 9.65-22.15Q401.3-790 414-790h134q12.7 0 22.35 9.65Q580-770.7 580-758v12h158q9.25 0 16.13 6.82 6.87 6.83 6.87 16 0 9.18-6.87 16.18-6.88 7-16.13 7h-38v457.57q0 34.18-22.28 56.3Q655.45-164 622-164H340Zm314-536H308v458q0 14 9 23t23 9h282q14 0 23-9t9-23v-458ZM427.82-283q9.18 0 16.18-6.88 7-6.87 7-16.12v-298q0-9.25-6.82-16.13-6.83-6.87-16-6.87-9.18 0-16.18 6.87-7 6.88-7 16.13v298q0 9.25 6.82 16.12 6.83 6.88 16 6.88Zm106 0q9.18 0 16.18-6.88 7-6.87 7-16.12v-298q0-9.25-6.82-16.13-6.83-6.87-16-6.87-9.18 0-16.18 6.87-7 6.88-7 16.13v298q0 9.25 6.82 16.12 6.83 6.88 16 6.88ZM308-700v490-490Z" />
						</svg>
					</div>
				</div>
			))}
		</div>
	);
};

export default todoList;
