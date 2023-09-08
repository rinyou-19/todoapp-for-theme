import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useState, useEffect, ChangeEvent } from "react";

export const SelectItem = () => {

  // DB登録用の変数を管理するstate
  const [todo, setTodo] = useState({
    content: '',
    expectedEndDate: '',
    endDate: '',
  });

  // Todoの型宣言
  type TodoType = {
    todoId?: number;
    content: string;
    expectedEndDate: Date;
    endDate: Date;
  };

  // Todoの作成
  const createTodo = () => {
    // 必須入力項目チェック
    let errorMessage = requiredInputCheck();
    if (errorMessage !== "") {
      // 入力されていない必須項目がある場合
      alert(errorMessage);
      return;
    }
    console.log("★")
    console.log(todo)
    // Todoの作成
    axios.post("/api/todo", todo)
    .then((res: AxiosResponse<TodoType[]>) => {
      console.log(res)
      // レスポンスを表示データとして設定
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
        <label className="input-label" htmlFor="content">内容</label>
        <textarea className="contents-style" id="content" name="content" onChange={contentOnChange} ></textarea>
        <label className="input-label" htmlFor="expected-end-date">完了予定日</label>
        <input type="date" id="expected-end-date" name="expected-end-date" onChange={expectedEndDateOnChange} />
        <label className="input-label" htmlFor="end-date">完了日</label>
        <input type="date" id="end-date" name="end-date"  onChange={endDateOnChange} />
        <button className="button-style" onClick={createTodo}>作成</button>
      </div>
    </>
  )  
}
