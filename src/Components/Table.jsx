import React from "react";
import formatDate from "../formateDate";

function Table({ items, onDelete, onEdit }) {
  console.log(items);
  return (
    <table className="table">
      <thead className="table-head">
        <tr>
          <th>Дата (ДД.ММ.ГГ.)</th>
          <th>Пройдено км</th>
          <th colSpan={2}>Действия</th>
        </tr>
      </thead>
      <tbody>
        {items.map((it) => (
          <tr key={it.id}>
            <td datatype="dd-mm-yyyy">{formatDate(it.date)}</td>
            <td>{it.distance}</td>
            <td className="icon" onClick={() => onEdit(it.id)}>
              {String.fromCodePoint(9998)}
            </td>
            <td className="icon" onClick={() => onDelete(it.id)}>
              {String.fromCodePoint(10006)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
