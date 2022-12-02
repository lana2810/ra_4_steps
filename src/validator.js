function validator({ date, distance }) {
  const errors = {};
  if (isNaN(Date.parse(date))) {
    errors.date = "Некорректная дата";
  }
  if (isNaN(distance)) {
    errors.distance = "Некорректное значение дистанции";
  }
  return errors;
}

export default validator;
