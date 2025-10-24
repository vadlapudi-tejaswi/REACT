import { imgHostUrl } from "../utils";

const ResCard = (props) => {
  let { cloudinaryImageId, name, locality, costForTwo, areaName, cuisines } =
    props.resObj.info;
  
  return (
    <div className="card">
      <img
        className="poster"
        src={imgHostUrl + cloudinaryImageId}
        height="200"
        width="100"
      />
      <div className="meta">
        <strong>{name}</strong>
        <p>{locality}</p>
        <p>{costForTwo}</p>
        <p>{areaName}</p>
        <p>{cuisines.join(",")}</p>
      </div>
      <div className="rating">★ {props.resObj.info.avgRating}</div>
    </div>
  );
};

export default ResCard;
