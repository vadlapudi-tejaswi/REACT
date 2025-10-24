import { resObj } from "../utils";
import ResCard from "./ResCard";
import { useState } from "react";

const Body = () => {
  const allRestaurants =
    resObj.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  const [listOfRestaurants, setListOfRestraunts] = useState(allRestaurants);

  
  const [searchText, setSearchText] = useState("");

 
  const handleSearch = () => {
    const filteredList = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setListOfRestraunts(filteredList);
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="movies-grid">
        {listOfRestaurants.length > 0 ? (
          listOfRestaurants.map((res) => (
            <ResCard key={res.info.id} resObj={res} />
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </>
  );
};

export default Body;