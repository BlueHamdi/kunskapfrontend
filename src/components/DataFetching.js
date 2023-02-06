import axios from "axios";
import React, { useState, useEffect } from "react";

function Datafetching() {
  const [posts, setPosts] = useState([]);
  const [showTop10, setShowTop10] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user")
      .then(response => {
        console.log(response.data.User);
        setPosts(response.data.User);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const top10 = posts
    .sort((a, b) => b.UserScore - a.UserScore)
    .slice(0, 10);

  return (
    <div className="Datafetching">
      <button onClick={() => setShowTop10(!showTop10)}>
        {showTop10 ? "Hide" : "Show"} Top 10
      </button>
      {showTop10 && (
        <ul>
          {top10.map(post => (
            <li key={post.UserId}>
              {post.Username}: {post.UserScore}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Datafetching;