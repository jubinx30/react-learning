import seriesData from "../api/seriesdata.json";
import SeriesCard from "./SeriesCard";
const NetflixSeries = () => {
  return (
    
      <ul>
        {seriesData.map((currentElement) => 
            <SeriesCard key={currentElement.id} data = {currentElement}/>
        )}
      </ul>
      );
};

export default NetflixSeries;
