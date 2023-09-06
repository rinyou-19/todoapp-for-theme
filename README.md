# Todoアプリ
1.基本仕様
 - Todoを一覧表示する
 - 未完了のTodoのみを一覧表示する
 - 完了済みのTodoを一覧表示する
 - Todoが予定日を過ぎている場合、協調表示する
 - Todoを追加する
 - Todoに予定日を設定できること
 - Todoに100文字以内で内容を設定できること
 - Todoを更新する
 - Todoに完了日時を設定できること
 - Todoの内容を100文字以内で変更できること
 - Todoを削除する
  
2.設計/実装方針
 - TodoについてはDBに格納する
 - コーディング規約については、「一般的なC#のコード規則」に準拠すること
 - バックエンドとフロントエンドは分離し、バックエンドはバックエンドでしかできないことをWeb APIで提供すること
 - データに変更を加えるときは確認メッセージを表示すること
 - コードが冗長になるためCSSフレームワークは使用しない

3.技術スタック
 - バックエンド:C#(Web API)
 - フレームワーク: .Net 7
 - フロントエンド: React, TypeScript, CSS Modules
 - DB: PostgreSQL

4.開発環境
 - エディター:Visual Studio Code
  
5.作業メモ
 - .Netのバージョンを確認する、『dotnet --version』
 - Node.jsのバージョン確認、『node -v』
 - 14だったので18にアップグレードして、もう1回上のコマンドでバージョン確認
 - テンプレートプロジェクトの作成、『dotnet new react -n todo-app』
 - 不要ファイルを削除
 - 型定義ファイルのインストール、『npm install -D @types/react @types/react-dom』
 - .tsの設定ファイル作成、『.\node_modules\.bin\tsc --init』
 - PostgreSQL 15.4をインストール
 - モデルの型定義について、DateTime型のまま扱ていくかは要検討
 - 必要なパッケージをインストール、『dotnet tool install --global dotnet-ef』、  
   『dotnet add package Microsoft.EntityFrameworkCore.Design』、『dotnet add package Microsoft.EntityFrameworkCore.Tools』  
   『dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL』
 - マイグレーション実行、『』
   
99.保留/調査事項
 - Azureで使用するサービスについて
 - システムの全体構成図について
