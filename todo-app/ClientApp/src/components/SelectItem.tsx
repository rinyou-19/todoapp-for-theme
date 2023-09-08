import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useState, useEffect, ChangeEvent } from "react";

// Todoの型宣言
type TodoType = {
  todoId?: number;
  content: string;
  expectedEndDate: Date;
  endDate: Date;
};

export const SelectItem = (props: any) => {

  // DB登録用の変数を管理するstate
  const [todo, setTodo] = useState({
    todoId: 0,
    content: '',
    expectedEndDate: '',
    endDate: '',
  });

  // Todoの作成
  const createTodo = () => {
    // 必須入力項目チェック
    let errorMessage = requiredInputCheck();
    if (errorMessage !== "") {
      // 入力されていない必須項目がある場合
      alert(errorMessage);
      return;
    }
    // Todoの作成
    axios.post("/api/todo", todo)
    .then((res: AxiosResponse<TodoType[]>) => {
      // 入力項目を初期化
      // テキストボックスの文字列をstateにセット
      setTodo({ ...todo, content: "" });
      setTodo({ ...todo, expectedEndDate: "" });
      setTodo({ ...todo, endDate: "" });
      console.log("初期化の確認")
      console.log("Todo")
      alert("データを登録しました")
    })
    .catch((err: AxiosError<{ error: string }>) => {
      // データを取得できなかった場合
      alert(err.message);
    })
  }

  // 必須入力項目のチェック
  const requiredInputCheck = () => {
    if (todo.content === "") {
      return "内容が入力されていません";
    }
    if (todo.expectedEndDate === "") {
      return "終了予定日が入力されていません";
    }
    return "";
  }

  // 入力項目変更時のイベント定義
  // 内容
  const contentOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // テキストボックスの文字列をstateにセット
    setTodo({ ...todo, content: e.target.value });
  };

  // 終了予定日
  const expectedEndDateOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // テキストボックスの文字列をstateにセット
    setTodo({ ...todo, expectedEndDate: e.target.value });
  };

  // 終了予定日
  const endDateOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // テキストボックスの文字列をstateにセット
    setTodo({ ...todo, endDate: e.target.value });
  };

  return (
    <>
      <h2 className="header-title">Todoリスト</h2>
      <div className="edit-area">
        <label className="input-label" htmlFor="todo-id">ID</label>
        <input type="number" className="todo-id" id="todo-id" name="todo-id" readOnly value={todo.todoId} />
        <label className="input-label" htmlFor="content">内容</label>
        <textarea className="contents-style" id="content" name="content" onChange={contentOnChange} value={todo.content} ></textarea>
        <label className="input-label" htmlFor="expected-end-date">完了予定日</label>
        <input type="date" id="expected-end-date" name="expected-end-date" onChange={expectedEndDateOnChange} value={todo.expectedEndDate} />
        <label className="input-label" htmlFor="end-date">完了日</label>
        <input type="date" id="end-date" name="end-date"  onChange={endDateOnChange} value={todo.endDate} />
        <button className="button-style" onClick={createTodo}>作成</button>
      </div>
    </>
  )  
}
