import "../assets/css/stickyButton.css";

function StickyButton({ onClick }) {
  return (
    <div className="sticky-btn" onClick={onClick}>
      Book Site Visit
    </div>
  );
}

export default StickyButton;