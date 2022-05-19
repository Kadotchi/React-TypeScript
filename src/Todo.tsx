import { TodoType } from "./Types/todo";

//propsに型を定義
export const Todo = (
  //Pickの場合は選択
  // props: Pick<TodoType, "userId" | "title" | "userId" | "completed">
  //Omitの場合は省略
  props: Omit<TodoType, "id">
) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "【完】" : "【未】";
  return <p>{`${completedMark}${title}(ユーザー；${userId})`}</p>;
};
