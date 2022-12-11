import React from 'react';
import "./post.scss";
import {Link} from "react-router-dom";

export default function Post({post}) {
	const PF = "https://lifa-blog-927oefldc-devilman66.vercel.app/images/";
  return (
	<div className='post'>
		{post.photo &&
			<img 
			className="postImg" 
			src={PF + post.photo}
			alt="" 
			/>
		}
		<div className="postInfo">
			<div className="postCats">
			    {post.categories.map((c) => (
					<span className="postCat">{c.name}</span>
				))}
			</div>
			<Link to={`post/${post._id}`} className="link">
			<span className="postTitle">{post.title}</span>
			</Link>
			<hr/>
			<span className="postDate">{new Date(post.createdAt).toDateString()}</span>
		</div>
		<div className='postDesc'>
			{post.desc}
		</div>
	</div>
  );
}
