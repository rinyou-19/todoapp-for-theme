import { SelectItem } from './components/SelectItem';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useEffect, useState, ChangeEvent } from "react";

// Todoの型宣言
type TodoType = {
  todoId?: string;
  content: string;
  expectedEndDate: string;
  endDate: string;
};

export const Todo = () => {
  // Todoを管理するstate
  const [todos, setTodos] = useState<TodoType[]>([]);
  // 編集用のTodoを管理するstate
  const [selectedTodo, setSelectedTodo] = useState({});

  // 初期表示(初期表示のみなので、第2引数は配列)
  useEffect(() => {
    // Todoを取得する関数
    const fetchTodoData = async () => {
      console.log("あ")
      axios.get("/api/todo")
        .then((res: AxiosResponse<TodoType[]>) => {
          // レスポンスを表示データとして設定
          setTodos(res.data);
        })
        .catch((err: AxiosError<{ error: string }>) => {
          // データを取得できなかった場合
          console.log("あ")
          alert(err.message);
        })
    }
    // データ取得
    fetchTodoData();
  }, []);

  // Todoの選択変更イベント
  const selectedTodoChanged = (e: ChangeEvent<HTMLInputElement>) => {
    // 選択した要素のidを取得
    let todoId = Number(e.target.getAttribute('id'));
    setSelectedTodo(todos[todoId])
    // 選択した要素を設定
    console.log("select")
    console.log(selectedTodo)
  }

  return (
    <>
      <SelectItem selectedItem={selectedTodo} />
      <h3 className="header-title">Todo一覧</h3>
      <div>
        <form>
          {/* Todoを一覧表示 */}
          {todos.map((todo) => (
            <div>
              <input type="radio" name="test" id={todo.todoId} onChange={selectedTodoChanged} />
              <span>ID:{todo.todoId}</span>
              <span>内容:{todo.content}</span>
              <span>終了予定日付:{todo.expectedEndDate}</span>
              <span>終了日付:{todo.endDate}</span>
            </div>
          ))} 
        </form>   
      </div>
    </>
  )
}