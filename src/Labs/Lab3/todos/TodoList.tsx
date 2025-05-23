import TodoItem from "./TodoItem";
import todos from "./todos.json";
import { ListGroup } from "react-bootstrap";

export default function TodoList() {
 return(
   <div id="wd-todo-list">
        <h3>Todo List</h3>
        <ListGroup>
            {todos.map(todo => {
                return (<TodoItem todo={todo}/>)
            })}
        </ListGroup><hr/>
   </div>
);}
