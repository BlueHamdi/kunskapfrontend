import axios from "axios";
import React, { useState, useEffect } from "react";
import './Scorefetching.css';

function Scorefetching() {
  const [posts, setPosts] = useState([]);

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
    <div className="container-wrap">
      <section id="leaderboard">
        <nav className="ladder-nav">
          <div className="ladder-title">
            <h1>Standings</h1>
          </div>
        </nav>
        <table id="rankings" className="leaderboard-results" width="100%">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {top10.map((post, index) => (
              <tr key={post.UserId}>
                <td>{index + 1}</td>
                <td>{post.Username}</td>
                <td>{post.UserScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Scorefetching;