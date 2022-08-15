export default function dateFormatter(date:string) {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'оетября', 'ноября', 'декабря'];

  const year = date.match(/\d+/)[0];
  const month = months[ Number(date.match(/(?<=-)\d+/)[0]) ];
  const day = Number( date.match(/(?<=-)\d+(?=\s)/)[0] );

  return `${day} ${month} ${year}`;
}