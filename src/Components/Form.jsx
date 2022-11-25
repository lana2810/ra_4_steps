import React from "react";

function Form({ form, onChange, onSubmit }) {
  return (
    <form className="form-block" onSubmit={onSubmit}>
      <div className="input-block">
        <label htmlFor="date">Дата (ДД.ММ.ГГ.)</label>
        <input
          id="date"
          name="date"
          type="date"
          value={form.date}
          onChange={onChange}
        ></input>
      </div>
      <div className="input-block">
        <label htmlFor="distance">Пройдено км</label>
        <input
          id="distance"
          name="distance"
          type="text"
          value={form.distance}
          onChange={onChange}
        ></input>
      </div>
      <button type="submit">ОК</button>
    </form>
  );
}

export default Form;
