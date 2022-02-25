import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { enums } from "../../constant/enum";
import Select from "react-select";
import "./add-contact.scss";

const SELECT_VALUE_KEY = "MySelectValue";

const AddContact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selected, setSelected] = useState([]);
  const [mode, setMode] = React.useState("day");

  const [checked, setChecked] = useState(false);
  const handleChange = (s) => {
    localStorage.setItem(SELECT_VALUE_KEY, JSON.stringify(s));
    setSelected(s);
  };
  console.log(SELECT_VALUE_KEY);
  const handleSubmit = (e) => {
    e.preventDefault();
    //localStorage.setItem(key, value);
    localStorage.setItem("Name", name);
    localStorage.setItem("Phone", phone);
    setName("");
    setPhone("");
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        {/* <select onChange={(e) => setMode(e.target.value)}>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select> */}
        <Select
          value={selected}
          onChange={handleChange}
          options={enums}
          isMulti
        />

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Whtsapp"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </Form.Group>

        <Button type="submit" className="add-button">
          ADD CONTACT
        </Button>
      </Form>
    </div>
  );
};

export default AddContact;
