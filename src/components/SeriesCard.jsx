const SeriesCard = (props) =>{
  console.log(props)
  let {data} = props
  let {name,id,img_url,rating,description,cast,genre,watch_url}=data;
  return (
    <li key={id}>
              <img
                src={img_url}
                alt={name}
                height="20%"
                width="20%"
              />
              <h2>{name}</h2>
              <h4>
                <b>Rating</b>: {rating}
              </h4>
              <p>{description}</p>
              <p>
                <b>Genre: </b> {genre}
              </p>
              <p>
                <b>Starring: </b>
                {cast}
              </p>
              <a href={watch_url} target="_blank">
                <button className="watch-now-button">Watch Now</button>
              </a>
            </li>
          );
}

export default SeriesCard;