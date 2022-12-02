import React from "react";

function Form({ form, onChange, onSubmit, err }) {
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
          className={err.date && "error-form"}
        />
        {err.date && <div className="error-form-div">{err.date}</div>}
      </div>
      <div className="input-block">
        <label htmlFor="distance">Пройдено км</label>
        <input
          id="distance"
          name="distance"
          type="text"
          value={form.distance}
          onChange={onChange}
          className={err.distance && "error-form"}
          required
        />
        {err.distance && <div className="error-form-div">{err.distance}</div>}
      </div>
      <button
        type="submit"
        className={(err.distance || err.date) && "flex-center"}
      >
        ОК
      </button>
    </form>
  );
}

export default Form;
