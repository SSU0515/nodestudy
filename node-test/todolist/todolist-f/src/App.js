import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoBoard from "./components/TodoBoard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import api from "./utils/api";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const getTasks = async () => {
    const response = await api.get("/tasks");
    console.log("rrr", response);
    setTodoList(response.data.data);
  };
  const addTask = async () => {
    try {
      const response = await api.post("/tasks", {
        task: todoValue,
        isComplete: false,
      });
      if (response.status === 200) {
        console.log("success");
        //입력한 값 사라지지않음
        setTodoValue("");
        //추가한 값이 안보임
        getTasks();
      } else {
        throw new Error("error");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <Container>
      <Row className="add-item-row">
        <Col xs={12} sm={10}>
          <input
            type="text"
            placeholder="할일을 입력하세요"
            className="input-box"
            value={todoValue}
            onChange={(event) => setTodoValue(event.target.value)}
          />
        </Col>
        <Col xs={12} sm={2}>
          <button className="button-add" onClick={addTask}>
            추가
          </button>
        </Col>
      </Row>

      <TodoBoard todoList={todoList} />
    </Container>
  );
}

export default App;
