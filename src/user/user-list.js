import { UserCard } from "./user-card";
import "./user-list.css";
export const UserList = (props) => {
  return (
    <>
      <h2>Users list</h2>
      <div className="list">
        {props.data.map((user) => (
          <div className="item">
            <UserCard
              key={user.id}
              {...user}
              onUpdate={props.onUpdate}
              onDelete={props.onDelete}
            />
          </div>
        ))}
      </div>
    </>
  );
};
