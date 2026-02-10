
const btn_style = {
  padding: "1.2rem 2.4rem",
  border: "none",
  fontSize:"1.6rem",
  backgroundColor : "var(--btn-hover-bg-color)",
  color:"var(--bg-color)",
  position: "relative",
  left:"50%",
  transform: "translate(-50%)",
  marginTop: "1rem",
  borderRadius: "10px"
};

const SeriesCard = (props) =>{
  console.log(props)
  let {data} = props
  let {name,id,img_url,rating,description,cast,genre,watch_url}=data;
  return (
    <li key={id} className="card" style ={{postion:"absolute"}} >
              
            
              <div>
              <img
                src={img_url}
                alt={name}
                
              />
              </div>

              <div className="card-content">
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
                <button className="watch-now-button" style={btn_style}>Watch Now</button>
              </a>
              </div>
          
            </li>
            
          );
}

export default SeriesCard;