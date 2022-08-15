import styles from './NewsList.module.css';
import NewsCard from '../NewsCard/NewsCard';
import dateFormatter from '../../utils/dateFormatter';
import CardPlug from '../CardPlug/CardPlug';

export default function NewsList({ news }) {
  const plugs = [];
  for (let i=0; i<9; i++) {
    plugs.push(i);
  }

  return(
    <div className={styles.newslist}>
      {news ? news.map(i => 
        <NewsCard 
          key={i.id} 
          id={i.id}
          imagesrc={i.image_small} 
          date={dateFormatter(i.date)} 
          text={i.lead.replaceAll(/<\/?.+?>/g, '')} 
        />
        ) 
        : 
        plugs.map((i, index) => <CardPlug key={index} />)
      }
    </div>
  );
}