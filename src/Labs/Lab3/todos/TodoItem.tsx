import { ListGroup } from 'react-bootstrap';

const TodoItem = ( { todo = { done: true, title: 'Buy milk', status: 'COMPLETED' } }) => {
    return (
        <div id='wd-todo-item'>
            <ListGroup.Item>
                <input type="checkbox" className="me-2" defaultChecked={todo.done}/>
                {todo.title} ({todo.status})
            </ListGroup.Item>
        </div>
    );
}

export default TodoItem;