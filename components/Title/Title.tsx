import styles from './Title.module.css';

interface TitleProps {
  text: string;
}

export default function Title(props:TitleProps) {

  const { text } = props;

  return(
    <h1 className={styles.title}>{text}</h1>
  );
}