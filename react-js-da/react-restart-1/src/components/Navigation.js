function Navigation() {
  const navStyle = {
    color: "blue",
    fontWeight: 300,
  };

  return (
    <>
      <ul style={navStyle}>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Search</li>
      </ul>
    </>
  );
}

export default Navigation;
