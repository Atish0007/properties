import "../assets/css/stickyButton.css";
import { SlCalender } from "react-icons/sl";

function StickyButton({ onClick }) {
  return (
    <div className="sticky-btn" onClick={onClick}>
      Book Site Visit &nbsp;<SlCalender style={{transform: "translateY(-5%) rotate(90deg)"}}/>
    </div>
  );
}

export default StickyButton;