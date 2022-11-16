import { useEffect, useState } from "react";
import "./user-form.css";

export const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const onFirstNameChange = (event) => setFirstName(event.target.value);

  const [lastName, setLastName] = useState("");
  const onLastNameChange = (event) => setLastName(event.target.value);

  const [workAt, setWorkAt] = useState("");
  const onWorkAtChange = (event) => setWorkAt(event.target.value);

  const [school, setSchool] = useState("");
  const onSchoolChange = (event) => setSchool(event.target.value);

  const [address, setAddress] = useState("");
  const onAddressChange = (event) => setAddress(event.target.value);

  const [city, setCity] = useState("");
  const onCityChange = (event) => setCity(event.target.value);

  const [country, setCountry] = useState("");
  const onCountryChange = (event) => setCountry(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    let id = Math.ceil(Math.random() * 100);
    if (props.updatingUser) {
      id = props.updatingUser.id;
    }
    props.onSubmit({
      id,
      firstName: firstName || undefined,
      lastName: lastName || undefined,
      workAt: workAt || undefined,
      school: school || undefined,
      address: address || undefined,
      city: city || undefined,
      country: country || undefined,
    });

    setFirstName("");
    setLastName("");
    setWorkAt("");
    setSchool("");
    setAddress("");
    setCity("");
    setCountry("");
  };

  const onCancel = (event) => {
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setWorkAt("");
    setSchool("");
    setAddress("");
    setCity("");
    setCountry("");

    props.onCancel();
  };

  useEffect(() => {
    if (props.updatingUser) {
      setFirstName(props.updatingUser.firstName ?? "");
      setLastName(props.updatingUser.lastName ?? "");
      setWorkAt(props.updatingUser.workAt ?? "");
      setSchool(props.updatingUser.school ?? "");
      setAddress(props.updatingUser.address ?? "");
      setCity(props.updatingUser.city ?? "");
      setCountry(props.updatingUser.country ?? "");
    }
  }, [props.updatingUser]);
  return (
    <form className="user-form">
      <h2>Product form</h2>
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={onFirstNameChange}
      />

      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={lastName}
        onChange={onLastNameChange}
      />

      <label htmlFor="workAt">Work at</label>
      <input
        type="text"
        name="workAt"
        id="workAt"
        value={workAt}
        onChange={onWorkAtChange}
      />

      <label htmlFor="school">School</label>
      <input
        type="text"
        name="school"
        id="school"
        value={school}
        onChange={onSchoolChange}
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        id="address"
        value={address}
        onChange={onAddressChange}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={onCityChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        name="country"
        id="country"
        value={country}
        onChange={onCountryChange}
      />

      <button onClick={onSubmit} type="submit">
        Submit
      </button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};
