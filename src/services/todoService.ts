import Todo from "./Todo";
import axios from 'axios';

const base_url = 'https://im-bad-at-titles.herokuapp.com/api/todos';

export const getTodos = async () => {
    try {
        let response = await axios.get(base_url);
        console.log("Response: ", response);
        console.log("Data: ", response.data);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getTodoById = (id: number) => {

}

export const postTodo = (todo: Todo) => {

}

export const updateById = (todo: Todo) => {

}

export const deleteById = (id: number) => {

}