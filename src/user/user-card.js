import "./user-card.css";

export const UserCard = (props) => {
  const getUser = () => {
    return {
      id: props.id,
      firstName: props.firstName,
      lastName: props.lastName,
      workAt: props.workAt,
      school: props.school,
      address: props.address,
      city: props.city,
      country: props.country,
    };
  };

  const onUpdate = () => {
    props.onUpdate(getUser());
  };

  const onDelete = () => {
    props.onDelete(getUser().id);
  };
  return (
    <>
      <div className="user-container">
        <div lastName="user-box">
          <div className="user-info">
            <div className="user-info-left">
              <span className="user-id">Id: {props.id}</span>
              <span className="user-firstName">
                First name: {props.firstName || "unknown"}
              </span>
              <span className="user-lastName">
                Last name: {props.lastName || "unknown"}
              </span>
              <span className="user-workAt">
                Work at: {props.workAt || "unknown"}
              </span>
            </div>
            <div className="user-info-right">
              <span className="user-school">
                School: {props.school || "unknown"}
              </span>
              <span className="user-address">
                Address: {props.address || "unknown"}
              </span>
              <span className="user-city">City: {props.city || "unknown"}</span>
              <span className="user-country">
                Country: {props.country || "unknown"}
              </span>
            </div>
            <button onClick={onUpdate}>Update</button>
            <button onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};
