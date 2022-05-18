type TodoType = {
  userId: number;
  title: string;
  completed?: boolean;
};

//propsに型を定義
export const Todo = (props: TodoType) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "【完】" : "【未】";
  return <p>{`${completedMark}${title}(ユーザー；${userId})`}</p>;
};
