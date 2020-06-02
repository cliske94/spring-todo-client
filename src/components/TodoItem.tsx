import React, {Component} from 'react';
import {Button, Card, Checkbox, Col, Modal} from 'antd';
import Todo from "../services/Todo";
import styles from './styles.module.css';
import {deleteTodoById} from "../services/todoService";

interface TodoProp {
    todo: Todo;
    reload(): void;
}

interface TodoState {
    modalVisible: boolean;
}

export default class TodoItem extends Component<TodoProp, TodoState> {

    constructor(props: TodoProp) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }

    showModal = () => {
        this.setState( {
            modalVisible: true
        });
    };

    handleOk = () => {
        this.setState( {
            modalVisible: false,
        });
    };

    handleCancel = () => {
        this.setState( {
            modalVisible: false,
        });
    };

    deleteTodo = () => {
        if (this.props.todo.id != null && this.props.todo.complete)
            deleteTodoById(this.props.todo.id).then(r => this.props.reload());
        else this.setState({modalVisible: true});
    }



    render() {
        return (
            <Col className="gutter-ro" span={6}>
                <Card title={this.props.todo.title} className={styles.todoCard}>
                    <p>Description</p>
                    <p>{this.props.todo.description}</p>
                    <p>Complete: <Checkbox defaultChecked={this.props.todo.complete} disabled /></p>
                    <Button type="primary" danger onClick={this.deleteTodo}>
                        Delete
                    </Button>
                    <Modal
                        title="Delete Todo"
                        visible={this.state.modalVisible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        >
                        <p className={styles.dangerDeleteTodo}>In order to delete a todo, it MUST be completed!</p>
                    </Modal>
                </Card>
            </Col>
        );
    }
}
