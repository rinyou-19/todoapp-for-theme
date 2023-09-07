import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { useState, useEffect, ChangeEvent } from "react";

export const SelectItem = () => {

  // Todoの型宣言
  type TodoType = {
    todoId?: number;
    content: string;
    expectedEndDate: Date;
    endDate: Date;
  };
  // Todoの作成
  const createTodo = () => {
    alert("☆");
  }

  // 必須入力項目のチェック
  const requiredInputCheck = () => {
    const contentElement = <T extends HTMLInputElement>document.getElementById('content');
    if (contentElement.value == "") {
      return false;
    }
  }

  return (
    <>
      <h2 className="header-title">Todoリスト</h2>
      <div className="edit-area">
        <label className="input-label" htmlFor="content">内容</label>
        <textarea className="contents-style" id="content" name="content"></textarea>
        <label className="input-label" htmlFor="expected-end-date">完了予定日</label>
        <input type="date" id="expected-end-date" name="expected-end-date"/>
        <label className="input-label" htmlFor="end-date">完了日</label>
        <input type="date" id="end-date" name="end-date"/>
        <button className="button-style" onClick={createTodo}>作成</button>
      </div>
    </>
  )  
}
