import React, {Component} from 'react';
import Todo from "../services/Todo";
import {getTodos} from "../services/todoService";
import {Button, Space} from 'antd';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

interface TodoListState {
  todos: Todo[];
  loading: boolean;
}
class TodoList extends Component<any, TodoListState> {

  state = {
    todos: [],
    loading: true
  }

  async componentDidMount() {
    let todos = await getTodos();
    this.setState({todos, loading: false});
  }

  render() {
        return (
            <div>
              <h2>This is a todo list</h2>
                { this.state.loading ?(
                    <h3>TodoList is loading</h3>
                    ) : (
                        <>
                            <TodoForm />
                            <Space direction="vertical" style={{width:300}}>
                            {this.state.todos.map((todo: Todo) =>
                                    <TodoItem key={todo.id} todo={todo}/>
                            )}
                            </Space>
                        </>
                    )}
            </div>
        );
    }
}

export default TodoList;