import { Link, useLocation, useNavigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    label: "Main",
    id: 1,
  },

  {
    path: "/about",
    label: "About",
    id: 2,
  },

  {
    path: "/posts",
    label: "Posts",
    id: 3,
  },

];

const NavbarMenu = () => {
  const location =  useLocation();
  const navigate = useNavigate();
 
   return (
    <>
    <div>
      {routes.map((el) => (
        <Link 
        style={{marginLeft: "30px"}}
        state = {{ from: location.pathname }}
         to={el.path}
          key={`${el.id}-${el.label}`}
          >
          {el.label}
        </Link>
      ))}
    </div>
    <br/>
    <button onClick={() => navigate(location.state?.from || "/posts")}>Back</button>
    
    </> 
  );
};

export default NavbarMenu;
