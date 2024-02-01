import logo from "../pizzalogo.png";

function Header({ data }) {
  return (
    <div className="header">
      <div className="header-head">
        <img src={logo} alt="logo" />
        <h1>Best Of Town Co.</h1>
      </div>
      <h2>Our {data.menuname} Menu</h2>
      <p>{data.text}</p>
    </div>
  );
}
export default Header;
