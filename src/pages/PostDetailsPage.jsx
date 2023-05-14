import { useState, useEffect } from "react";
import { useParams,  } from "react-router-dom";

const PostDetailsPage = () => {
    const params= useParams();
    console.log(params);


const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

useEffect(()=> {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`) 
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
    setError('')
})
.catch((err) => setError(err.message))
.finally(() => setLoading(false)); 
}, []);

if (error) {
  return <div>Error:{error}</div>;
}

  return (
    <div>
      {loading || !user
      ?"loading..."
    :<div> <h2>{user.id} <br />{user.title} </h2><br />{user.body}
  
    </div>
    }
   </div>
  );
};

export default PostDetailsPage;