import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useFlagEmojiToPng } from "../hooks/useFlagEmojiToPng";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, emoji, date, id, position, country } = city;
  const { currentCity, deleteCity } = useCities();

  const flagPng = useFlagEmojiToPng(emoji);

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id)
  }

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`${styles.cityItem} ${
          id == currentCity.id ? styles["cityItem--active"] : ""
        }`}
      >
        {emoji && (
          <img className={styles.emoji} src={flagPng} alt={`${country} flag`} />
        )}
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleDelete}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
