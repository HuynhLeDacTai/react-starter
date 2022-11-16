import { useState } from "react";
import { UserForm } from "./user-form";
import { UserList } from "./user-list";
import "./user-module.css";

export const UserModule = (props) => {
  const [users, setUsers] = useState(props.initialUsers ?? []);
  const [updatingUser, setUpdatingUser] = useState(null);

  const onUpdatingUserClick = (user) => {
    console.log(user);
    setUpdatingUser(user);
  };

  const onDeletingUserClick = (userId) => {
    console.log(userId);
    const deleteUsers = users.filter((user) => {
      return user.id !== userId;
    });
    setUsers(deleteUsers);
  };

  const onUserSubmit = (user) => {
    console.log(user);
    if (updatingUser) {
      setUsers(
        users.map((u) => {
          if (u.id === user.id) {
            return { ...u, ...user };
          }
          return u;
        })
      );
      setUpdatingUser(null);
    } else {
      setUsers([user, ...users]);
    }
  };

  return (
    <div className="container">
      <div className="user-list">
        <UserList
          data={users}
          onUpdate={onUpdatingUserClick}
          onDelete={onDeletingUserClick}
        />
      </div>
      <UserForm
        className="user-form"
        onSubmit={onUserSubmit}
        updatingUser={updatingUser}
      />
    </div>
  );
};
