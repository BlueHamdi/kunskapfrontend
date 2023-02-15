
import React, { useState, useEffect } from "react";
import './Contact.css';
import axios from "axios";


function Contact() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/contact")
        .then(response => {
          console.log(response.data.Contact);
          setPosts(response.data.Contact);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
  
    return (
        <div>
          <h1>Contact Us</h1>
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <p>{post.Address}</p>
                <p>{post.Email}</p>
                <p>{post.PhoneNumber}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    
  
export default Contact;