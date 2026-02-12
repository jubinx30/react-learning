import styles from "./Netflix.module.css";
import styled from 'styled-components';

const Btn_style = styled.button`
 padding: 1.2rem 2.4rem;
  border: none;
  font-size:1.6rem;
  background-color : var(--btn-hover-bg-color);
  color:white;
  font-weight:bold;
  position: relative;
  left:50%;
  transform: translate(-50%);
  marginTop: 1rem;
  borderRadius: 10px;
  cursor: pointer;
  `;

const Rating = styled.h4`
font-size: 1.6rem;
color:white;
`

const SeriesCard = (props) =>{
  
  console.log(props)
  let {data} = props
  let {name,id,img_url,rating,description,cast,genre,watch_url}=data;
  const rating_class = rating >= 8.5 ? styles.super_hit : styles.average;
  return (
    <li key={id} className={styles.card}  >
              <div>
              <img
                src={img_url}
                alt={name}
                
              />
              </div>

              <div className={styles["card-content"]}>
              <h2>{name}</h2>
              <Rating>
              <b>Rating</b> : <span className = {`${styles.rating} ${rating_class}`}>{rating}</span> 
              </Rating>
              
              <p>{description}</p>
              
              <p>
                <b>Genre: </b> {genre}
              </p>
              <p>
                <b>Starring: </b>
                {cast}
              </p>
              <a href={watch_url} target="_blank">
                <Btn_style>Watch Now</Btn_style>
              </a>
              </div>
          
            </li>
            
          );
}

export default SeriesCard;
  