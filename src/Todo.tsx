import { VFC } from "react";
import { TodoType } from "./Types/todo";

//propsに型を定義
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "【完】" : "【未】";
  return <p>{`${completedMark}${title}(ユーザー；${userId})`}</p>;
};
