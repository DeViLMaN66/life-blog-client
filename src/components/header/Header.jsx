import React from 'react'
import "./header.css"

export default function Header() {
  return (
	<div className='header'>
		<div className="headerTitles">
			<span className='headerTitleSm'>React & Node</span>
			<span className='headerTitleLg'>Blog</span>
		</div>
		<img 
		className='headerImg' 
		src="https://cs11.pikabu.ru/post_img/big/2020/03/30/10/158558521118638931.jpg" 
		alt="" 
		/>
	</div>
  )
}
