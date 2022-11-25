export default function formatDateToDisplay(n) {
  const date = new Date(n);
  const year = date.getFullYear();
  const month =
    date.getMonth() > 8 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;

  return `${year}-${month}-${day}`;
}
