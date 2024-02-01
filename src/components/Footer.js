function Footer() {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour <= closeHour && hour >= openHour;

  return (
    <div className="footer">
      {isOpen
        ? `We are open. Order online!`
        : `We are closed now. We will be open between ${
            openHour < 10 ? `0${openHour}:00` : `${openHour}:00`
          } and ${closeHour < 10 ? `0${closeHour}:00` : `${closeHour}:00`}`}
    </div>
  );
}
export default Footer;
