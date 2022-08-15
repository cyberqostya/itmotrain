import Main from "../../components/Main/Main";
import { useSelector } from 'react-redux';
import Link from "next/link";
import styles from './news.module.css';
import { useEffect, useState } from "react";
import { RootState } from "../../store/store";
import getData from "../../utils/getData";

export default function OneNews({ news }) {
  
  const lang = useSelector((state:RootState) => state.lang.value.payload);
  const [onenews, setOnenews] = useState(news[lang]);
  useEffect(() => {
    setOnenews(news[lang]);
  }, [lang]);

  return(

      <Main title={onenews !== null ? onenews.title : "Unfortunately, this news is not available in your chosen language"}>

        {onenews !== null ? 
          <>
            <img src={onenews.image_big} alt="image" className={styles.image} />
            <p className={styles.date}>{onenews.date}</p>
            <p className={styles.text} dangerouslySetInnerHTML={{ __html: onenews.lead}}></p>
          </>
          : ''
        }
        <Link href={"/"}><a className={styles.goback}>{lang === 'rus' ? 'Ко всем новостям' : 'Go back'}</a></Link>
      </Main>
  );
}

export async function getServerSideProps({ params }) {
  const data = await getData();
  const onenewsrus = data.rus.news.find(i => i.id == params.id) || null;
  const onenewseng = data.eng.news.find(i => i.id == params.id) || null;
  return {
    props: { news: { rus: onenewsrus, eng: onenewseng } },
  }
}
