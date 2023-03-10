import { ChangeEventHandler, FC } from "react";
import { useTodos, useView } from "../../utils/hooks";
import { ITodo } from "../../utils/interfaces";
import "./Todo.scss";

interface IProps {
  todo: ITodo;
}

const Todo: FC<IProps> = ({ todo }) => {
  const { theme } = useView();
  const { changeCheckedStatus, deleteTodo } = useTodos();

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    changeCheckedStatus(todo.id, e.target.checked);
  };
  const clickHandler = () => {
    changeCheckedStatus(todo.id, !todo.checked);
  };
  const deleteHandler = () => {
    deleteTodo(todo.id);
  };

  return (
    <section className={`todo ${todo.checked ? "completed" : ""} ${theme}`}>
      <div className="body">
        <input
          className="custom-checkbox"
          type="checkbox"
          checked={todo.checked}
          id={`checkbox-${todo.id}`}
          value="complete"
          onChange={changeHandler}
        />
        <label htmlFor={`checkbox-${todo.id}`}></label>
        <p onClick={clickHandler}>{todo.title}</p>
      </div>
      <div className="closing" onClick={deleteHandler}>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </section>
  );
};

export default Todo;
