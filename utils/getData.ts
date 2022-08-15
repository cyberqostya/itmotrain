export default async function getData() {
  const resrus = await fetch(`https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9&language_id=1`);
  const reseng = await fetch(`https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9&language_id=2`);
  const datarus = await resrus.json();
  const dataeng = await reseng.json();

  return { rus: datarus, eng: dataeng }
}