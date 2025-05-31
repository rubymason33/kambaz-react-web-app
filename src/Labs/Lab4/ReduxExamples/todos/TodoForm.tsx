import { Button, FormControl, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(){
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        // <ListGroup.Item>
        //   <Button onClick={() => addTodo(todo)}
        //           id="wd-add-todo-click"> Add </Button>
        //   <Button onClick={() => updateTodo(todo)}
        //           id="wd-update-todo-click"> Update </Button>
        //   <FormControl value={todo.title}
        //     onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }/>
        // </ListGroup.Item>
        <ListGroup.Item className="d-flex flex-grow align-items-center">
            <FormControl className="mb-2 flex-grow-1 me-5" value={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
            <Button onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click" variant="success" className="me-2 mb-2"> Add </Button>
            <Button onClick={() => dispatch(updateTodo(todo))}
                    id="wd-update-todo-click" variant="warning" className="me-2 mb-2"> Update </Button>
        </ListGroup.Item >
);}
