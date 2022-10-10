/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  FormEvent, memo, useEffect, useRef,
} from 'react';
import cn from 'classnames';
import { Todo } from '../types/Todo';

interface Props {
  todos: Todo[];
  todoTitle: string;
  handleTogleAll: () => void;
  handleAddTodo: (event: FormEvent) => void;
  setTodoTitle: (todoTitle: string) => void;
}

export const Header: React.FC<Props> = memo((props) => {
  const {
    todos, todoTitle, handleTogleAll, handleAddTodo, setTodoTitle,
  } = props;
  const newTodoField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (newTodoField.current) {
      newTodoField.current.focus();
    }
  }, []);

  return (
    <header className="todoapp__header">
      <button
        data-cy="ToggleAllButton"
        type="button"
        className={cn(
          'todoapp__toggle-all',
          {
            active: todos.every(todo => todo.completed),
          },
        )}
        onClick={() => handleTogleAll()}
      />

      <form onSubmit={(event) => handleAddTodo(event)}>
        <input
          data-cy="NewTodoField"
          type="text"
          ref={newTodoField}
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
        />
      </form>
    </header>
  );
});
