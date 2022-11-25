import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import { nanoid } from "nanoid";
import formatDate from "../formateDate";
import formatDateToDisplay from "../formatDateToDisplay";

function Container() {
  const initialStateForm = {
    date: "",
    distance: "",
  };
  const [form, setForm] = useState(initialStateForm);
  const [items, setItems] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const indexSameDate = items.findIndex(
      (it) => formatDate(it.date) === formatDate(form.date)
    );

    if (indexSameDate === -1) {
      setItems((prevItems) =>
        [
          ...prevItems,
          {
            distance: Number(form.distance),
            date: new Date(form.date),
            id: nanoid(),
          },
        ].sort((a, b) => (a.date > b.date ? 1 : -1))
      );
    } else {
      const tmp = items[indexSameDate].distance;
      setItems((prevItems) => {
        // prevItems[indexSameDate].distance += Number(form.distance);
        prevItems[indexSameDate].distance = tmp + Number(form.distance);
        return [...prevItems];
      });
    }
    setForm(initialStateForm);
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((it) => it.id !== id));
  };

  const handleEdit = (id) => {
    const indexEditItem = items.findIndex((it) => it.id === id);
    setForm({
      date: formatDateToDisplay(items[indexEditItem].date),
      distance: items[indexEditItem].distance,
    });
    setItems((prevItems) => prevItems.filter((it) => it.id !== id));
  };

  return (
    <div className="container">
      <Form form={form} onChange={handleChange} onSubmit={handleSubmit}></Form>
      <Table items={items} onDelete={handleDelete} onEdit={handleEdit}></Table>
    </div>
  );
}

export default Container;
