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


  return (
    <div >
      {loading || !users.length
        ? "loading..."
        : users?.map((el) => {
            return (
              <div key={el.id} className={style.content}>
                <h1>{el.id} <br /> {el.title}</h1>

                <div className={style.ded}>
                <div className={style.bb}>{el.body}</div>
                <Link to={`/users/${el.id}`} className={style.num}> More...  </Link> <br />
               <button className={style.btn} onClick={() => navigate(`/users/${el.id}`)}>Details</button>
               </div>
              </div>
        
            );
          })}
    </div>
  );
};

export default Posts;
