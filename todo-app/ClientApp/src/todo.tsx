import { SelectItem } from './components/SelectItem';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useEffect, useState } from "react";

// Todoの型宣言
type TodoType = {
  todoId?: number;
  content: string;
  dateOfEnd: Date;
};

export const Todo = () => {
  // Todoを管理するstate
  //const [todos, setTodos] = useState<TodoType[]>([]);

  // 初期表示(初期表示のみなので、第2引数は配列)
  useEffect(() => {
    // Todoを取得する関数
    const fetchTodoData = async () => {
      axios.get("/api/todo")
        .then((res: AxiosResponse<TodoType[]>) => {
          // レスポンスを表示データとして設定
        })
        .catch((err: AxiosError<{ error: string }>) => {
          // データを取得できなかった場合
          alert(err.message);
        })
    }
    // データ取得
    fetchTodoData();
  }, []);
  return (
    <>
      <SelectItem />
      <p>todo一覧</p>
    </>
  )
}