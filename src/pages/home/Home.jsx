import { useEffect, useState} from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import "./Home.scss";
import axios from "axios";
import { useLocation } from 'react-router-dom';

export default function Home() {
	const [posts,setPosts] = useState([]);
	const {search} = useLocation();

	useEffect(() => {
		const fetchPosts = async ()=>{
		  const res = await	axios.get("https://lifa-blog-927oefldc-devilman66.vercel.app/API/posts" + search);
		  setPosts(res.data);
		}
		fetchPosts();
	}, [search])

  return (
	<>
	<Header/>
	<div className='home'>
		<Posts posts={posts}/>
		<Sidebar/>
	</div>
	</>
  )
}
