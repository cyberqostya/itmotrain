import Image from "next/image";
import arrow from '../../public/arrow.svg';

import styles from './Lang.module.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../store/langSlice";
import { RootState } from '../../store/store';


interface lang {
  image: string;
  title: string;
  urlPart: string;
}
type langArr = [
  string,
  lang
]


export default function Lang() {

  const [isSelectActive, setIsSelectActive] = useState(false);
  const dispatch = useDispatch();
  const lang = useSelector((state:RootState) => state.lang.value.payload);
  const langs = useSelector((state:RootState) => state.lang.choose);

  function changeLanguage(e) {
    dispatch(update(e.currentTarget.dataset.code));
  }

  function changeSelectActivity() {
    setIsSelectActive(!isSelectActive);
  }

  return(
    <div className={styles.lang} onClick={changeSelectActivity}>
      <Image src={langs[lang].image} />
      <span>{langs[lang].title}</span>
      <Image src={arrow} />

      <div className={styles.lang__select} style={isSelectActive ? {display: 'block'} : {display: 'none'}} >

        {Object.entries(langs).map((i:langArr) => 
          <div className={styles.lang__selectitem} key={i[0]} data-code={i[0]} onClick={changeLanguage}>
            <Image src={i[1].image} />
            <span>{i[1].title}</span>
          </div>
        )}

      </div>
      
    </div>
  );
}