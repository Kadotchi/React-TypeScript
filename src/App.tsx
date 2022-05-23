import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "かどっち",
  email: "12345@aaa.com",
  address: "ABCDEFG"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
