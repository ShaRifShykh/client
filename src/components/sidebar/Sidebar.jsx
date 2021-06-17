import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';
import axios from 'axios';

export default function Sidebar () {
  const [category, setCategory] = useState ([]);

  useEffect (() => {
    const getCategories = async () => {
      const res = await axios.get ('/categories');
      setCategory (res.data);
    };

    getCategories ();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">

          {category.map (c => (
            <li className="sidebarListItem">
              <Link className="link" to={`/posts?category=${c.name}`}>
                {c.name}
              </Link>
            </li>
          ))}

        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square" />
          <i className="sidebarIcon fab fa-instagram-square" />
          <i className="sidebarIcon fab fa-pinterest-square" />
          <i className="sidebarIcon fab fa-twitter-square" />
        </div>
      </div>
    </div>
  );
}
