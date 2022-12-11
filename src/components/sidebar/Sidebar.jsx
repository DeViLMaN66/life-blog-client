import {useEffect, useState} from "react";
import axios from "axios";
import "./sidebar.scss";
import { Link } from "react-router-dom";

export default function Sidebar() {
	const [cats,setCats] = useState([]);

	useEffect(() =>{
		const getCats = async () => {
			const res = await axios.get("https://lifa-blog-927oefldc-devilman66.vercel.app/API/categories");
			setCats(res.data);
		};
		getCats();
	}, []);
  return (
	<div className='sidebar'>
		<div className="sidebarItem">
			<span className="sidebarTitle">About Me</span>
			<img 
			src="https://bugaga.ru/uploads/posts/2012-04/1333368715_pic-1.jpg" 
			alt="" 
			className="sidebarImg"
			/>
			<p className="sidebarP">
				Создано для ознакомление с теорией React
			</p>
		</div>
		<div className="sidebarItem">
			<span className="sidebarTitle">Categories</span>
			<ul className="sidebarList">
				{cats.map((c) => (
					<Link to={`/?cat=${c.name}`} className="link">
					  <li className="sidebarListItem">{c.name}</li>
					</Link>
				))}
			</ul>
		</div>
		<div className="sidebarItem">
		<span className="sidebarTitle">Follow Us</span>
		<div className="sidebarSocial">
		<i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        <i className="sidebarIcon fa-brands fa-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
		</div>
		</div>
	</div>
  );
}
