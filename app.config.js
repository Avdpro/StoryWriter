import pathLib from "/@path";
let url=import.meta.url;
let dir=pathLib.dirname(url);
//This is your app meta:
export default {
	type:"app",
	name:"Dev. App",
	caption:"Dev. App",
	main:`${dir}/app.html`,
	package:"",
	catalog:["My Applications"],
	icon:`${dir}/app.svg`,
	iconApp:null,
	appFrame:{
		main:`${dir}/app.html`,
		group:`${dir}/app.html`,
		title:"Dev. App",
		icon:`${dir}/app.svg`,
		multiFrame:true,
		width:360,height:600,
		maxable:false,
	}
};
