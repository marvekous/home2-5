import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from './Posts.module.css'

const Posts = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setError("");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return <div>Error: {error} </div>;
  }

  const textBody = (string, leto) => {
    if (string.length > leto) {
      const getValue = string.substring(0, leto);
      return <>{getValue}...</>;
    }
    return string;
  };


  return (
    <div className={style.vv}>
      {loading || !users.length
        ? "loading..."
        : users?.map((el) => {
            return (
              <div key={el.id} className={style.content}>
                <div className={style.bb}>
                <h1>{el.id} <br /> {el.title}</h1>
               <button className={style.btn} onClick={() => navigate(`/users/${el.id}`)}>Details</button></div>
                <div className={style.ded}>
                <div> {textBody(`${el.body}`, 15)}</div>
                <Link to={`/users/${el.id}`} className={style.num}> More...  </Link> <br />
               </div>
              </div>
        
            );
          })}
    </div>
  );
};

export default Posts;
