import AppIcon from "./AppIcon";
import { TitleComponenet, TitleTagLine } from "./TitleComponenet";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <div className="title-row">
          <AppIcon />
          <TitleComponenet />
        </div>
        <TitleTagLine />
      </div>
    </div>
  );
};

export default Header;
