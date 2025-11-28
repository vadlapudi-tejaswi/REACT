import AppIcon from "./AppIcon";
import { TitleComponenet, TitleTagLine } from "./TitleComponenet";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <div className="title-row">
          
          {/* LEFT SIDE — IMAGE */}
          <AppIcon />

          {/* RIGHT SIDE — TITLE + TAGLINE */}
          <div className="text-block">
            <TitleComponenet />
            <TitleTagLine />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;


