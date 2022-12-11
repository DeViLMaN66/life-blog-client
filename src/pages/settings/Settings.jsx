import axios from 'axios';
import { useContext, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../context/Context';
import "./settings.css";

export default function Settings() {
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);

	const {user, dispatch} = useContext(Context);
	const PF = "https://lifa-blog-927oefldc-devilman66.vercel.app/images/"

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({type:"UPDATE_START"})
		const updateUser = {
		  userId: user._id,
		  username,
		  email,
		  password,
		};
		if (file) {
		  const data =new FormData();
		  const filename = Date.now() + file.name;
		  data.append("name", filename);
		  data.append("file", file);
		  updateUser.profilePic = filename;
		  try {
			await axios.post("https://lifa-blog-927oefldc-devilman66.vercel.app/API/upload", data);
		  } catch (err) {}
		}
		try {
		  const res = await axios.put("https://lifa-blog-927oefldc-devilman66.vercel.app/API/users/" + user._id, updateUser);
		  setSuccess(true);
		  dispatch({type:"UPDATE_SUCCESS", payload: res.data});
		} catch (err) {
			dispatch({type:"UPDATE_FAILURE"});
		}
	  };
  return (
	<div className='settings'>
		<div className="settingsWrapper">
			<div className="settingsTitle">
				<span className="settingsUpdateTitle">Update Your Account</span>
				<span className="settingsDeleteTitle">Delete Account</span>
			</div>
			<form className="settingsForm" onSubmit={handleSubmit}>
				<label>Profile Picture</label>
				<div className="settingsPP">
					<img 
					src={file ? URL.createObjectURL(file) : PF + user.profilePic}
					alt="" 
					/>
					<label htmlFor="fileInput">
					<i className="settingsPPIcon fa-regular fa-circle-user"></i>
					</label>
					<input 
					  type="file" 
					  id='fileInput' 
					  style={{display:"none"}}
					  onChange={(e) => setFile(e.target.files[0])}
					/>
				</div>
				<label>Username</label>
				<input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)}/>
				<label>Email</label>
				<input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)}/>
				<label>Password</label>
				<input type="password" onChange={e => setPassword(e.target.value)}/>
				<button className="settingsSubmit" type='submit'>Update</button>
				{success && (
				  <span style={{color: "green", textAlign: "center", marginTop: "20px"}}>Profile has been updated...</span>
				)}
			</form>
		</div>
		<Sidebar/>
	</div>
  )
}
