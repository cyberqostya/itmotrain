import Header from "../Header/Header";
import Title from "../Title/Title";
import styles from "./Main.module.css";

interface Main {
  title: string;
  children?: React.ReactNode;
}

export default function Main({ title, children }:Main) {

  return(
    <>
      <Header />
      <main className={styles.main}>
        <Title text={title} />
        {children}
      </main>
    </>
  );
}