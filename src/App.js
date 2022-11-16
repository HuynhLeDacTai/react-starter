import "./App.css";
import { UserList } from "./user/user-list";
import { UserCard } from "./user/user-card";
import { user } from "./users-data";
import { UserForm } from "./user/user-form";
import { UserModule } from "./user/user-module";

function App() {
  return (
    <>
      <UserModule initialUsers={user} />
    </>
  );
}

export default App;
