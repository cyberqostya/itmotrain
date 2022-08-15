import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsCard.module.css';

interface Card {
  key: number;
  id: number;
  imagesrc: string;
  date: string;
  text: string;
}

export default function NewsCard(props:Card) {

  const { id, imagesrc, date, text } = props;

  return(
    <Link href={`/news/${id}`}>
      <a style={{textDecoration: 'none'}}>
        <div className={styles.newscard}>
          <Image src={imagesrc} className={styles.newscard__image} width={382} height={224} />
          <div className={styles.newscard__textblock}>
            <p className={styles.newscard__date}>{date}</p>
            <p className={styles.newscard__text}>{text}</p> 
          </div>
        </div>
      </a>
    </Link>
  );
}