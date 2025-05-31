import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todosReducer);

    return (
        <div className="container container mt-4">
            <h2 className="mb-3">Todo List</h2>
            <ListGroup>
                <TodoForm />
                {todos.map((todo: any) => (
                <TodoItem todo={todo} />
                ))}
            </ListGroup>
            <hr/>
        </div>
    );
}

