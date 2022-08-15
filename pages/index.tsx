import Main from "../components/Main/Main";
import NewsList from "../components/NewsList/NewsList";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import getData from "../utils/getData";
import { RootState } from "../store/store";

export default function Index(data) {
  
  const [allNews, setAllNews] = useState({});
  const [news, setNews] = useState([]);
  const lang = useSelector((state:RootState) => state.lang.value.payload);

  useEffect(() => {
    async function loadDataOnFront() {
      const frontData = await getData();
      setAllNews(frontData);
      setNews(frontData[lang].news);
    }

    if (data.isFront) { // Front
      loadDataOnFront();
    } else {
      setAllNews(data);
      setNews(data[lang].news);
    }
  }, []);

  useEffect(() => {
    if(Object.keys(allNews).length > 0) setNews(allNews[lang].news); 
  }, [lang]);


  return (
    <Main title={"Новости и события"} >
      <NewsList news={ news.length > 0 ? news : ''} />
    </Main>
  );
}

Index.getInitialProps = async (ctx) => {
  const data = await getData();

  if(ctx.req) { // Server
    return data;
  } else { // Front
    return { isFront: true };
  }

}