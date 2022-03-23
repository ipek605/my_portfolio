function MenuOpen({ menuItem, setMenuOpen }) {
  console.log(menuItem);
let link;
if (menuItem === "Home") {
  link = "#intro";
} else {
  link = `#${menuItem.toLowerCase()}`;
}
return (
  <div>

      <li onClick={() => setMenuOpen(false)}>
        <a href={link}>{menuItem}</a>
      </li>
    
  </div>
);
}


export default MenuOpen