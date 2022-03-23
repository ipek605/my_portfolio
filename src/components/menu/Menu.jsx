import "./menu.scss";
import MenuOpen from "../menuOpen/MenuOpen";

function Menu({ menuOpen, setMenuOpen }) {
const list = ["Home","Portfolio","Works","Testimonials","Contact"]
    
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        {list.map((menuItem,index) => {
          return <MenuOpen key = {index} menuItem={menuItem} setMenuOpen={setMenuOpen}/>

        })}
        
      </ul>
    </div>
  );
}

export default Menu