import { useFlagEmojiToPng } from "../hooks/useFlagEmojiToPng";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const flagPng = useFlagEmojiToPng(country.emoji);

  return (
    <li className={styles.countryItem}>
      {country.emoji && <img src={flagPng} alt={`${country.country} flag`} />}
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
