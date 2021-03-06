import react from "react";
import { Card, CardDeck } from "react-bootstrap";
import styles from "./PackageCard.module.css";
// get our fontawesome imports
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PackageCard = (props) => {
  return (
    <CardDeck>
      <Card className={styles.card__container}>
        <div className={styles.card__imageContainer}>
          <Card.Img
            variant="top"
            src={props.imageSrc}
            className={styles.card__img}
          />
          <div className={styles.card__imageOverlay}></div>
          <p className={styles.card__caption}>
            <span className={styles.card__captionIcon}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span> 
            {props.cardLocation} | {props.durationDays}D/{props.durationNights}N
          </p>
        </div>
        <Card.Body className={styles.card__body}>
          <span className={styles.card__duration}>
            {props.tripDuration} Days Tour
          </span>
          <Card.Title className={styles.card__title}>
            {props.cardTitle}
          </Card.Title>
          <p className={styles.card__price}>
            <FontAwesomeIcon icon={faRupeeSign} /> 2,100
          </p>
          <p className={styles.card__star}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default PackageCard;
