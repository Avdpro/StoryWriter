//Auto genterated by Cody
import {$P,VFACT,callAfter,sleep} from "/@vfact";
import inherits from "/@inherits";
import {appCfg} from "../cfg/appCfg.js";
import {BoxTokenGas} from "/@aichat/ui/BoxTokenGas.js";
import {UIChat} from "/@aichat/ui/UIChat.js";
import {TxtMarkdown} from "/@StdUI/ui/TxtMarkdown.js";
import {BtnIcon} from "/@StdUI/ui/BtnIcon.js";
/*#{1GGJKM84D0StartDoc*/
import pathLib from "/@path";
/*}#1GGJKM84D0StartDoc*/
const $ln=appCfg.lanCode||VFACT.lanCode||"EN";
//----------------------------------------------------------------------------
let MainUI=function(app,appFrame){
	let cfgColor,cfgSize,txtSize,state;
	let cssVO,self;
	const $ln=appCfg.lanCode||VFACT.lanCode||"EN";
	let boxHeader,boxAIChat;
	
	cfgColor=appCfg.color;
	cfgSize=appCfg.size;
	txtSize=appCfg.txtSize;
	
	
	/*#{1GGJKM84D1LocalVals*/
	let isMobile=false;
	/*}#1GGJKM84D1LocalVals*/
	
	/*#{1GGJKM84D1PreState*/
	/*}#1GGJKM84D1PreState*/
	state={
		"counter":0,
		/*#{1GGJKM84D6ExState*/
		/*}#1GGJKM84D6ExState*/
	};
	state=VFACT.flexState(state);
	/*#{1GGJKM84D1PostState*/
	/*}#1GGJKM84D1PostState*/
	cssVO={
		"hash":"1GGJKM84D1",nameHost:true,
		"type":"view","x":0,"y":0,"w":"100%","h":"100%","minW":"","minH":"","maxW":"","maxH":"","styleClass":"","contentLayout":"flex-y",
		children:[
			{
				"hash":"1HHAM34NF0",
				"type":BoxTokenGas(30,cfgColor["secondary"],cfgColor["fontSecondary"],24,16,true),"id":"BoxHeader","position":"relative","x":0,"y":0,"caption":(($ln==="CN")?("故事写手"):("Story Writer")),
				/*#{1HHAM34NF0Codes*/
				OnMenu(sender){
					self.showMenu(sender);
				}
				/*}#1HHAM34NF0Codes*/
			},
			{
				"hash":"1HDBT1RJN0",
				"type":"hud","position":"relative","x":0,"y":0,"w":"100%","h":">calc(100% - 30px)","minW":"","minH":"","maxW":"","maxH":"","styleClass":"",
				children:[
					{
						"hash":"1HDBT34IS0",
						"type":UIChat({"bubble":false,"ai":{"blkColor":[0,0,0,0],"bgColor":cfgColor["success"],"icon":appCfg.sharedAssets+"/faces.svg","pic":"","textColor":cfgColor["fontBody"],"iconColor":cfgColor["fontSuccess"],"side":"left"},"user":{"blkColor":[0,0,0,0],"bgColor":cfgColor.primary,"icon":appCfg.sharedAssets+"/user.svg","pic":"","textColor":cfgColor["fontBody"],"iconColor":cfgColor["fontPrimary"],"side":"right"},"wait":{"blkColor":[0,0,0,0],"bgColor":cfgColor["secondary"],"icon":appCfg.sharedAssets+"/faces.svg","pic":"","textColor":cfgColor["fontBody"],"iconColor":cfgColor["fontSecondary"],"side":"left"},"event":{"blkColor":[0,0,0,0],"bgColor":cfgColor["warning"],"icon":appCfg.sharedAssets+"/event.svg","pic":"","textColor":cfgColor["fontBody"],"iconColor":cfgColor["fontWarning"],"side":"left"},"error":{"blkColor":[0,0,0,0],"bgColor":cfgColor["error"],"icon":appCfg.sharedAssets+"/fat_right.svg","pic":"","textColor":[155,0,0,1],"iconColor":cfgColor["fontError"],"side":"left"},"ask":{"blkColor":[0,0,0,0],"bgColor":cfgColor["success"],"icon":appCfg.sharedAssets+"/help.svg","pic":"","textColor":cfgColor["fontBody"],"iconColor":cfgColor["fontSuccess"],"side":"left"}}),
						"id":"BoxAIChat","x":0,"y":0,"w":">calc(100% - 360px)",
					},
					{
						"hash":"1HI9IL4SO0",
						"type":"box","id":"BoxView","x":">calc(100% - 360px)","y":0,"w":360,"h":"100%","overflow":"auto-y","minW":"","minH":"","maxW":"","maxH":"","styleClass":"",
						"background":[255,255,255,1],"border":[0,0,0,1],
						children:[
							{
								"hash":"1HI9INFAA0",
								"type":TxtMarkdown("",15),"id":"MDStory","x":0,"y":0,"w":"100%","h":"",
							}
						],
					},
					{
						"hash":"1HI9JAFJU0",
						"type":"box","id":"BoxViewBtn","x":">calc(100% - 50px)","y":10,"w":40,"h":40,"display":0,"minW":"","minH":"","maxW":"","maxH":"","styleClass":"",
						"background":[255,255,255,1],"border":1,"corner":6,"shadow":true,
						children:[
							{
								"hash":"1HI9JBU7N0",
								"type":BtnIcon("front",32,0,appCfg.sharedAssets+"/yulan.svg",null),"id":"BtnViewStory","x":"50%","y":"50%","anchorX":1,"anchorY":1,
								"OnClick":function(event){
									self.doViewStory(this,event);
								},
							}
						],
					},
					{
						"hash":"1HI9P4UQ30",
						"type":"box","id":"BoxCloseBtn","x":">calc(100% - 50px)","y":10,"w":40,"h":40,"display":0,"minW":"","minH":"","maxW":"","maxH":"","styleClass":"",
						"background":[255,255,255,1],"border":1,"corner":6,"shadow":true,
						children:[
							{
								"hash":"1HI9P4UQ40",
								"type":BtnIcon("front",32,0,appCfg.sharedAssets+"/close.svg",null),"id":"BtnCloseView","x":"50%","y":"50%","anchorX":1,"anchorY":1,
								"OnClick":function(event){
									self.doCloseView(this,event);
								},
							}
						],
					}
				],
			}
		],
		/*#{1GGJKM84D1ExtraCSS*/
		/*}#1GGJKM84D1ExtraCSS*/
		faces:{
			"desktop":{
				/*BoxAIChat*/"#1HDBT34IS0":{
					"w":">calc(100% - 360px)"
				},
				/*BoxView*/"#1HI9IL4SO0":{
					"x":">calc(100% - 360px)","w":360
				},
				/*BoxViewBtn*/"#1HI9JAFJU0":{
					"display":0
				},
				/*BoxCloseBtn*/"#1HI9P4UQ30":{
					"display":0
				},
				/*#{1HI9IM0KV0Code*/
				$(){
					isMobile=false;
				}
				/*}#1HI9IM0KV0Code*/
			},"mobile":{
				/*BoxAIChat*/"#1HDBT34IS0":{
					"w":"100%"
				},
				/*BoxView*/"#1HI9IL4SO0":{
					"display":0,"x":0,"w":"100%","border":0
				},
				/*BoxViewBtn*/"#1HI9JAFJU0":{
					"display":1
				},
				/*BoxCloseBtn*/"#1HI9P4UQ30":{
					"display":0
				},
				/*#{1HI9IM0KV2Code*/
				$(){
					isMobile=true;
				}
				/*}#1HI9IM0KV2Code*/
			},"view":{
				/*BoxAIChat*/"#1HDBT34IS0":{
					"display":0
				},
				/*BoxView*/"#1HI9IL4SO0":{
					"display":1
				},
				/*BoxViewBtn*/"#1HI9JAFJU0":{
					"display":0
				},
				/*BoxCloseBtn*/"#1HI9P4UQ30":{
					"display":1
				}
			},"chat":{
				/*BoxAIChat*/"#1HDBT34IS0":{
					"display":1
				},
				/*BoxView*/"#1HI9IL4SO0":{
					"display":0
				},
				/*BoxViewBtn*/"#1HI9JAFJU0":{
					"display":1
				},
				/*BoxCloseBtn*/"#1HI9P4UQ30":{
					"display":0
				}
			}
		},
		OnCreate:function(){
			self=this;
			boxHeader=self.BoxHeader;boxAIChat=self.BoxAIChat;
			/*#{1GGJKM84D1Create*/
			boxHeader.BtnMenu.enable=false;
			self.openChatFile("ai/agent.js");
			if(window.innerWidth<800){
				self.showFace("mobile");
			}
			app.on("StoryReady",(story)=>{
				let mode;
				app.story=story;
				boxHeader.BtnMenu.enable=true;
				self.updateTitle();
			});
			app.on("StoryUpdate",(story)=>{
				let content;
				let segs=story.StorySegs;
				segs=segs.map((item)=>{
					if(item.image){
						return `![pic](${item.image})  \n\n${item.text}`;
					}
					return "  "+item.text;
				});
				content=segs.join("\n\n");
				content=`## ${story.StoryTitle}\n${content}`;
				if(story.StoryCover){
					content=`![cover](${story.StoryCover})\n${content}`;
				}
				self.MDStory.markdown=content;
			});
			app.on("ShowStory",(story)=>{
				self.doViewStory();
			});
			
			/*}#1GGJKM84D1Create*/
		},
		/*#{1GGJKM84D1EndCSS*/
		/*}#1GGJKM84D1EndCSS*/
	};
	//------------------------------------------------------------------------
	cssVO.doViewStory=async function(sender,event){
		/*#{1HI9PMO650Start*/
		/*}#1HI9PMO650Start*/
		self.showFace("view");
	};
	//------------------------------------------------------------------------
	cssVO.doCloseView=async function(sender,event){
		/*#{1HI9PPH4H0Start*/
		/*}#1HI9PPH4H0Start*/
		self.showFace("chat");
	};
	//------------------------------------------------------------------------
	cssVO.showMenu=async function(sender){
		/*#{1HIFTEQTD0Start*/
		/*}#1HIFTEQTD0Start*/
		{
			let $items,$item;
			$items=[
				{id:"View",text:"查看文章"},
				{id:"GPT3",text:"使用ChatGPT-3.5"},
				{id:"GPT4T",text:"使用ChatGPT4 Turbo"}
			];
			/*#{1HIFTOFRK0Items*/
			if(app.story){
				if(app.story.LLMMode==="gpt-3.5-turbo"){
					$items[1].check=true;
				}else{
					$items[2].check=true;
				}
			}
			/*}#1HIFTOFRK0Items*/
			$item=await VFACT.app.modalDlg("/@StdUI/ui/DlgMenu.js",{hud:sender,items:$items});
			if($item){
				if($item.id==="View"){
					/*#{1HIFTOFRC0*/
					self.doViewStory();
					/*}#1HIFTOFRC0*/
				}else if($item.id==="GPT3"){
					/*#{1HIFTOFRC1*/
					app.story.LLMMode="gpt-3.5-turbo-1106";
					self.updateTitle();
					/*}#1HIFTOFRC1*/
				}else if($item.id==="GPT4T"){
					/*#{1HIFTOFRC2*/
					app.story.LLMMode="gpt-4-1106-preview";
					self.updateTitle();
					/*}#1HIFTOFRC2*/
				}
			}
			/*#{1HIFTOFRK0Post*/
			/*}#1HIFTOFRK0Post*/
		}
	};
	//------------------------------------------------------------------------
	cssVO.updateTitle=async function(){
		/*#{1HIG05I200Start*/
		let mode;
		if(app.story){
			if(app.story.LLMMode==="gpt-3.5-turbo-1106"){
				mode="ChatGPT 3.5";
			}else{
				mode="ChatGPT 4";
			}
			boxHeader.caption=(($ln==="CN")?(`故事写手 (${mode})`):(`Story Writer (${mode})`));
		}
		/*}#1HIG05I200Start*/
	};
	/*#{1GGJKM84D1PostCSSVO*/
	//------------------------------------------------------------------------
	cssVO.openChatFile=async function(path){
		let ext;
		//Convert file system path to URL:
		self.showFace("init");
		ext=pathLib.extname(path);
		if(ext===".js"){
			//Fix URL if needed:
			if(path[0]==="/" && path[1]!=="/" && path[1]!=="~"){
				path="/~"+path;
			}
			if(path[0]!=="/" && (!path.startsWith("http://")) &&(!path.startsWith("https://"))){
				path=app.path2AppURL(path);
			}
			await boxAIChat.initChat({url:path});
		}else if(ext===".aichat"){
			if(path[0]==="/" && path[1]!=="/" && path[1]!=="~"){
				path="/~"+path;
			}
			if(path[0]!=="/" && (!path.startsWith("http://")) &&(!path.startsWith("https://"))){
				path=pathLib.join(app.appDir,path);
			}
			await boxAIChat.initChat({bot:path});
		}else{
			return;
		}
	};
	
	/*}#1GGJKM84D1PostCSSVO*/
	return cssVO;
};
/*#{1GGJKM84D1ExCodes*/
/*}#1GGJKM84D1ExCodes*/


export default MainUI;
export{MainUI};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "UIView",
//	"jaxId": "1GGJKM84D0",
//	"editVersion": 49,
//	"attrs": {
//		"editEnv": {
//			"type": "object",
//			"jaxId": "1GGJKM84D2",
//			"editVersion": 48,
//			"attrs": {
//				"device": "Custom Size",
//				"screenW": "800",
//				"screenH": "600",
//				"bgColor": "#cfgColor.body",
//				"bgChecker": "false"
//			}
//		},
//		"editObjs": {
//			"type": "object",
//			"jaxId": "1GGJKM84D3",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"model": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1H90TKKV70",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"createArgs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1GGJKM84D4",
//			"editVersion": 16,
//			"attrs": {
//				"app": {
//					"type": "auto",
//					"valText": "null"
//				},
//				"appFrame": {
//					"type": "auto",
//					"valText": "null"
//				}
//			}
//		},
//		"localVars": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1GGJKM84D5",
//			"editVersion": 18,
//			"attrs": {}
//		},
//		"oneHud": "false",
//		"state": {
//			"type": "object",
//			"def": "StateObj",
//			"jaxId": "1GGJKM84D6",
//			"editVersion": 4,
//			"attrs": {
//				"counter": {
//					"type": "int",
//					"valText": "0"
//				}
//			}
//		},
//		"segs": {
//			"type": "array",
//			"attrs": [
//				{
//					"type": "flowseg",
//					"def": "Entry",
//					"jaxId": "1HI9PMO650",
//					"editVersion": 42,
//					"attrs": {
//						"id": "doViewStory",
//						"label": "New AI Seg",
//						"x": "100",
//						"y": "50",
//						"desc": "",
//						"codes": "false",
//						"args": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9PP4430",
//							"editVersion": 4,
//							"attrs": {
//								"sender": {
//									"valText": "null"
//								},
//								"event": {
//									"valText": ""
//								}
//							}
//						},
//						"async": "true",
//						"localVars": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9PP4431",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"segs": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "flowseg",
//									"def": "SetFace",
//									"jaxId": "1HI9PP4432",
//									"editVersion": 28,
//									"attrs": {
//										"id": "",
//										"label": "New AI Seg",
//										"x": "320",
//										"y": "50",
//										"desc": "",
//										"codes": "false",
//										"component": "self",
//										"face": "view",
//										"outlet": {
//											"type": "aioutlet",
//											"def": "AISegOutlet",
//											"jaxId": "1HI9PP4433",
//											"editVersion": 4,
//											"attrs": {
//												"id": "Next",
//												"desc": "输出节点。"
//											}
//										}
//									}
//								}
//							]
//						},
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9PP4434",
//							"editVersion": 4,
//							"attrs": {
//								"id": "Next",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9PP4432"
//						}
//					}
//				},
//				{
//					"type": "flowseg",
//					"def": "Entry",
//					"jaxId": "1HI9PPH4H0",
//					"editVersion": 36,
//					"attrs": {
//						"id": "doCloseView",
//						"label": "New AI Seg",
//						"x": "100",
//						"y": "150",
//						"desc": "",
//						"codes": "false",
//						"args": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9PQ3SM0",
//							"editVersion": 4,
//							"attrs": {
//								"sender": {
//									"valText": "null"
//								},
//								"event": {
//									"valText": ""
//								}
//							}
//						},
//						"async": "true",
//						"localVars": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9PQ3SM1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"segs": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "flowseg",
//									"def": "SetFace",
//									"jaxId": "1HI9PQ3SM2",
//									"editVersion": 28,
//									"attrs": {
//										"id": "",
//										"label": "New AI Seg",
//										"x": "320",
//										"y": "150",
//										"desc": "",
//										"codes": "false",
//										"component": "self",
//										"face": "chat",
//										"outlet": {
//											"type": "aioutlet",
//											"def": "AISegOutlet",
//											"jaxId": "1HI9PQ3SM3",
//											"editVersion": 4,
//											"attrs": {
//												"id": "Next",
//												"desc": "输出节点。"
//											}
//										}
//									}
//								}
//							]
//						},
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9PQ3SM4",
//							"editVersion": 4,
//							"attrs": {
//								"id": "Next",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9PQ3SM2"
//						}
//					}
//				},
//				{
//					"type": "flowseg",
//					"def": "Entry",
//					"jaxId": "1HIFTEQTD0",
//					"editVersion": 44,
//					"attrs": {
//						"id": "showMenu",
//						"label": "New AI Seg",
//						"x": "100",
//						"y": "270",
//						"desc": "",
//						"codes": "false",
//						"args": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIFTEQTK0",
//							"editVersion": 8,
//							"attrs": {
//								"sender": {
//									"type": "auto",
//									"valText": "null"
//								}
//							}
//						},
//						"async": "true",
//						"localVars": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIFTEQTK1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"segs": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "flowseg",
//									"def": "Menu",
//									"jaxId": "1HIFTOFRK0",
//									"editVersion": 38,
//									"attrs": {
//										"id": "Menu",
//										"label": "New AI Seg",
//										"x": "310",
//										"y": "270",
//										"desc": "",
//										"codes": "true",
//										"launcher": "sender",
//										"outlets": {
//											"type": "array",
//											"attrs": [
//												{
//													"type": "aioutlet",
//													"def": "MenuItem",
//													"jaxId": "1HIFTOFRK1",
//													"editVersion": 24,
//													"attrs": {
//														"id": "View",
//														"text": "查看文章",
//														"desc": ""
//													},
//													"linkedSeg": "1HIFTOFRC0"
//												},
//												{
//													"type": "aioutlet",
//													"def": "MenuItem",
//													"jaxId": "1HIFTFEO60",
//													"editVersion": 26,
//													"attrs": {
//														"id": "GPT3",
//														"text": "使用ChatGPT-3.5",
//														"desc": ""
//													},
//													"linkedSeg": "1HIFTOFRC1"
//												},
//												{
//													"type": "aioutlet",
//													"def": "MenuItem",
//													"jaxId": "1HIFTFEO61",
//													"editVersion": 30,
//													"attrs": {
//														"id": "GPT4T",
//														"text": "使用ChatGPT4 Turbo",
//														"desc": ""
//													},
//													"linkedSeg": "1HIFTOFRC2"
//												}
//											]
//										},
//										"outlet": {
//											"type": "aioutlet",
//											"def": "AISegOutlet",
//											"jaxId": "1HIFTOFRK2",
//											"editVersion": 4,
//											"attrs": {
//												"id": "Next",
//												"desc": "输出节点。"
//											}
//										}
//									}
//								},
//								{
//									"type": "flowseg",
//									"def": "Code",
//									"jaxId": "1HIFTOFRC1",
//									"editVersion": 44,
//									"attrs": {
//										"id": "SetGPT3",
//										"label": "New AI Seg",
//										"x": "520",
//										"y": "240",
//										"desc": "",
//										"codes": "false",
//										"outlet": {
//											"type": "aioutlet",
//											"def": "AISegOutlet",
//											"jaxId": "1HIFTOFRK3",
//											"editVersion": 4,
//											"attrs": {
//												"id": "Next",
//												"desc": "输出节点。"
//											}
//										}
//									}
//								},
//								{
//									"type": "flowseg",
//									"def": "Code",
//									"jaxId": "1HIFTOFRC2",
//									"editVersion": 44,
//									"attrs": {
//										"id": "SetGPT4",
//										"label": "New AI Seg",
//										"x": "520",
//										"y": "300",
//										"desc": "",
//										"codes": "false",
//										"outlet": {
//											"type": "aioutlet",
//											"def": "AISegOutlet",
//											"jaxId": "1HIFTOFRK4",
//											"editVersion": 4,
//											"attrs": {
//												"id": "Next",
//												"desc": "输出节点。"
//											}
//										}
//									}
//								},
//								{
//									"type": "flowseg",
//									"def": "Code",
//									"jaxId": "1HIFTOFRC0",
//									"editVersion": 32,
//									"attrs": {
//										"id": "ViewStory",
//										"label": "New AI Seg",
//										"x": "520",
//										"y": "180",
//										"desc": "",
//										"codes": "false",
//										"outlet": {
//											"type": "aioutlet",
//											"def": "AISegOutlet",
//											"jaxId": "1HIFTOFRK5",
//											"editVersion": 4,
//											"attrs": {
//												"id": "Next",
//												"desc": "输出节点。"
//											}
//										}
//									}
//								}
//							]
//						},
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIFTEQTK2",
//							"editVersion": 4,
//							"attrs": {
//								"id": "Next",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIFTOFRK0"
//						}
//					}
//				},
//				{
//					"type": "flowseg",
//					"def": "Entry",
//					"jaxId": "1HIG05I200",
//					"editVersion": 36,
//					"attrs": {
//						"id": "updateTitle",
//						"label": "New AI Seg",
//						"x": "100",
//						"y": "410",
//						"desc": "",
//						"codes": "false",
//						"args": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIG05I260",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"async": "true",
//						"localVars": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIG05I261",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"segs": {
//							"type": "array",
//							"attrs": []
//						},
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIG05I262",
//							"editVersion": 4,
//							"attrs": {
//								"id": "Next",
//								"desc": "输出节点。"
//							}
//						}
//					}
//				}
//			]
//		},
//		"exportTarget": "VFACT document",
//		"gearName": "",
//		"gearIcon": "gears.svg",
//		"gearW": "100",
//		"gearH": "100",
//		"gearCatalog": "",
//		"description": "",
//		"fixPose": "false",
//		"previewImg": "",
//		"faceTags": {
//			"type": "object",
//			"def": "FaceTags",
//			"jaxId": "1GGJKM84D7",
//			"editVersion": 8,
//			"attrs": {
//				"desktop": {
//					"type": "facetag",
//					"def": "FaceTag",
//					"jaxId": "1HI9IM0KV0",
//					"editVersion": 18,
//					"attrs": {
//						"mockup": "false",
//						"previewEntry": "false",
//						"mockupNext": "",
//						"description": "",
//						"preFunc": "false",
//						"faceFunc": "true",
//						"delay": "0",
//						"faceTimes": {
//							"type": "object",
//							"jaxId": "1HI9IM0KV1",
//							"editVersion": 0,
//							"attrs": {}
//						}
//					}
//				},
//				"mobile": {
//					"type": "facetag",
//					"def": "FaceTag",
//					"jaxId": "1HI9IM0KV2",
//					"editVersion": 18,
//					"attrs": {
//						"mockup": "false",
//						"previewEntry": "false",
//						"mockupNext": "",
//						"description": "",
//						"preFunc": "false",
//						"faceFunc": "true",
//						"delay": "0",
//						"faceTimes": {
//							"type": "object",
//							"jaxId": "1HI9IM0KV3",
//							"editVersion": 0,
//							"attrs": {}
//						}
//					}
//				},
//				"view": {
//					"type": "facetag",
//					"def": "FaceTag",
//					"jaxId": "1HI9J7T480",
//					"editVersion": 16,
//					"attrs": {
//						"mockup": "false",
//						"previewEntry": "false",
//						"mockupNext": "",
//						"description": "",
//						"preFunc": "false",
//						"faceFunc": "false",
//						"delay": "0",
//						"faceTimes": {
//							"type": "object",
//							"jaxId": "1HI9P2NVT0",
//							"editVersion": 0,
//							"attrs": {}
//						}
//					}
//				},
//				"chat": {
//					"type": "facetag",
//					"def": "FaceTag",
//					"jaxId": "1HI9J8OKB0",
//					"editVersion": 16,
//					"attrs": {
//						"mockup": "false",
//						"previewEntry": "false",
//						"mockupNext": "",
//						"description": "",
//						"preFunc": "false",
//						"faceFunc": "false",
//						"delay": "0",
//						"faceTimes": {
//							"type": "object",
//							"jaxId": "1HI9P2NVT1",
//							"editVersion": 0,
//							"attrs": {}
//						}
//					}
//				}
//			}
//		},
//		"mockupStates": {
//			"type": "object",
//			"def": "MockupObj",
//			"jaxId": "1HDBOJDB10",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"hud": {
//			"type": "hudobj",
//			"def": "view",
//			"jaxId": "1GGJKM84D1",
//			"editVersion": 16,
//			"attrs": {
//				"properties": {
//					"type": "object",
//					"jaxId": "1GGJKM84D8",
//					"editVersion": 80,
//					"attrs": {
//						"type": "view",
//						"id": "",
//						"position": "Absolute",
//						"x": "0",
//						"y": "0",
//						"w": "100%",
//						"h": "100%",
//						"anchorH": "Left",
//						"anchorV": "Top",
//						"autoLayout": "false",
//						"display": "On",
//						"clip": "Off",
//						"uiEvent": "On",
//						"alpha": "1",
//						"rotate": "0",
//						"scale": "",
//						"filter": "",
//						"cursor": "",
//						"zIndex": "0",
//						"margin": "",
//						"padding": "",
//						"minW": "",
//						"minH": "",
//						"maxW": "",
//						"maxH": "",
//						"face": "",
//						"styleClass": "",
//						"contentLayout": "Flex Y"
//					}
//				},
//				"subHuds": {
//					"type": "array",
//					"attrs": [
//						{
//							"type": "hudobj",
//							"def": "Gear/@aichat/ui/BoxTokenGas.js",
//							"jaxId": "1HHAM34NF0",
//							"editVersion": 40,
//							"attrs": {
//								"createArgs": {
//									"type": "object",
//									"def": "gearCrateArgs",
//									"jaxId": "1HHAM41550",
//									"editVersion": 10,
//									"attrs": {
//										"h": "30",
//										"bgColor": "#cfgColor[\"secondary\"]",
//										"textColor": "#cfgColor[\"fontSecondary\"]",
//										"iconSize": "24",
//										"fontSize": "16",
//										"menu": "true"
//									}
//								},
//								"properties": {
//									"type": "object",
//									"jaxId": "1HHAM41551",
//									"editVersion": 42,
//									"attrs": {
//										"type": "#null#>BoxTokenGas(30,cfgColor[\"secondary\"],cfgColor[\"fontSecondary\"],24,16,true)",
//										"id": "BoxHeader",
//										"position": "relative",
//										"x": "0",
//										"y": "0",
//										"display": "On",
//										"face": "",
//										"caption": {
//											"type": "string",
//											"valText": "Story Writer",
//											"localize": {
//												"EN": "Story Writer",
//												"CN": "故事写手"
//											},
//											"localizable": true
//										}
//									}
//								},
//								"subHuds": {
//									"type": "array",
//									"attrs": []
//								},
//								"faces": {
//									"type": "object",
//									"jaxId": "1HHAM41552",
//									"editVersion": 50,
//									"attrs": {
//										"1HI9IM0KV0": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HI9J7BVL0",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HI9J7BVL1",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HI9IM0KV0",
//											"faceTagName": "desktop"
//										},
//										"1HI9J7T480": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HI9P2NVT4",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HI9P2NVT5",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HI9J7T480",
//											"faceTagName": "view"
//										},
//										"1HI9IM0KV2": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HI9PA69F2",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HI9PA69F3",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HI9IM0KV2",
//											"faceTagName": "mobile"
//										}
//									}
//								},
//								"functions": {
//									"type": "object",
//									"jaxId": "1HHAM41553",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"extraPpts": {
//									"type": "object",
//									"def": "Object",
//									"jaxId": "1HHAM41554",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"mockup": "false",
//								"codes": "true",
//								"locked": "false",
//								"container": "false",
//								"nameVal": "true",
//								"containerSlots": {
//									"type": "object",
//									"jaxId": "1HHAM41555",
//									"editVersion": 0,
//									"attrs": {}
//								}
//							}
//						},
//						{
//							"type": "hudobj",
//							"def": "hud",
//							"jaxId": "1HDBT1RJN0",
//							"editVersion": 22,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1HDBT8BEP8",
//									"editVersion": 90,
//									"attrs": {
//										"type": "hud",
//										"id": "",
//										"position": "Relative",
//										"x": "0",
//										"y": "0",
//										"w": "100%",
//										"h": "100%-30",
//										"anchorH": "Left",
//										"anchorV": "Top",
//										"autoLayout": "false",
//										"display": "On",
//										"clip": "Off",
//										"uiEvent": "On",
//										"alpha": "1",
//										"rotate": "0",
//										"scale": "",
//										"filter": "",
//										"cursor": "",
//										"zIndex": "0",
//										"margin": "",
//										"padding": "",
//										"minW": "",
//										"minH": "",
//										"maxW": "",
//										"maxH": "",
//										"face": "",
//										"styleClass": ""
//									}
//								},
//								"subHuds": {
//									"type": "array",
//									"attrs": [
//										{
//											"type": "hudobj",
//											"def": "Gear/@aichat/ui/UIChat.js",
//											"jaxId": "1HDBT34IS0",
//											"editVersion": 67,
//											"attrs": {
//												"createArgs": {
//													"type": "object",
//													"def": "gearCrateArgs",
//													"jaxId": "1HDBT8BEP9",
//													"editVersion": 2,
//													"attrs": {
//														"opts": {
//															"type": "object",
//															"jaxId": "1HDBT8BEP10",
//															"editVersion": 14,
//															"attrs": {
//																"bubble": "false",
//																"ai": {
//																	"type": "object",
//																	"jaxId": "1HDBT8BEP11",
//																	"editVersion": 14,
//																	"attrs": {
//																		"blkColor": "[0,0,0,0.00]",
//																		"bgColor": "#cfgColor[\"success\"]",
//																		"icon": "#appCfg.sharedAssets+\"/faces.svg\"",
//																		"pic": "",
//																		"textColor": "#cfgColor[\"fontBody\"]",
//																		"iconColor": "#cfgColor[\"fontSuccess\"]",
//																		"side": "left"
//																	}
//																},
//																"user": {
//																	"type": "object",
//																	"jaxId": "1HDBT8BEP12",
//																	"editVersion": 14,
//																	"attrs": {
//																		"blkColor": "[0,0,0,0.00]",
//																		"bgColor": "#cfgColor.primary",
//																		"icon": "#appCfg.sharedAssets+\"/user.svg\"",
//																		"pic": "",
//																		"textColor": "#cfgColor[\"fontBody\"]",
//																		"iconColor": "#cfgColor[\"fontPrimary\"]",
//																		"side": "right"
//																	}
//																},
//																"wait": {
//																	"type": "object",
//																	"jaxId": "1HDBT8BEP13",
//																	"editVersion": 14,
//																	"attrs": {
//																		"blkColor": "[0,0,0,0.00]",
//																		"bgColor": "#cfgColor[\"secondary\"]",
//																		"icon": "#appCfg.sharedAssets+\"/faces.svg\"",
//																		"pic": "",
//																		"textColor": "#cfgColor[\"fontBody\"]",
//																		"iconColor": "#cfgColor[\"fontSecondary\"]",
//																		"side": "left"
//																	}
//																},
//																"event": {
//																	"type": "object",
//																	"jaxId": "1HDBT8BEP14",
//																	"editVersion": 14,
//																	"attrs": {
//																		"blkColor": "[0,0,0,0.00]",
//																		"bgColor": "#cfgColor[\"warning\"]",
//																		"icon": "#appCfg.sharedAssets+\"/event.svg\"",
//																		"pic": "",
//																		"textColor": "#cfgColor[\"fontBody\"]",
//																		"iconColor": "#cfgColor[\"fontWarning\"]",
//																		"side": "left"
//																	}
//																},
//																"error": {
//																	"type": "object",
//																	"jaxId": "1HDBT8BEP15",
//																	"editVersion": 14,
//																	"attrs": {
//																		"blkColor": "[0,0,0,0.00]",
//																		"bgColor": "#cfgColor[\"error\"]",
//																		"icon": "#appCfg.sharedAssets+\"/fat_right.svg\"",
//																		"pic": "",
//																		"textColor": "[155,0,0,1.00]",
//																		"iconColor": "#cfgColor[\"fontError\"]",
//																		"side": "left"
//																	}
//																},
//																"ask": {
//																	"type": "object",
//																	"jaxId": "1HDBT8BEP16",
//																	"editVersion": 14,
//																	"attrs": {
//																		"blkColor": "[0,0,0,0.00]",
//																		"bgColor": "#cfgColor[\"success\"]",
//																		"icon": "#appCfg.sharedAssets+\"/help.svg\"",
//																		"pic": "",
//																		"textColor": "#cfgColor[\"fontBody\"]",
//																		"iconColor": "#cfgColor[\"fontSuccess\"]",
//																		"side": "left"
//																	}
//																}
//															}
//														}
//													}
//												},
//												"properties": {
//													"type": "object",
//													"jaxId": "1HDBT8BEP17",
//													"editVersion": 61,
//													"attrs": {
//														"type": "#null#>UIChat({\"bubble\":false,\"ai\":{\"blkColor\":[0,0,0,0],\"bgColor\":cfgColor[\"success\"],\"icon\":appCfg.sharedAssets+\"/faces.svg\",\"pic\":\"\",\"textColor\":cfgColor[\"fontBody\"],\"iconColor\":cfgColor[\"fontSuccess\"],\"side\":\"left\"},\"user\":{\"blkColor\":[0,0,0,0],\"bgColor\":cfgColor.primary,\"icon\":appCfg.sharedAssets+\"/user.svg\",\"pic\":\"\",\"textColor\":cfgColor[\"fontBody\"],\"iconColor\":cfgColor[\"fontPrimary\"],\"side\":\"right\"},\"wait\":{\"blkColor\":[0,0,0,0],\"bgColor\":cfgColor[\"secondary\"],\"icon\":appCfg.sharedAssets+\"/faces.svg\",\"pic\":\"\",\"textColor\":cfgColor[\"fontBody\"],\"iconColor\":cfgColor[\"fontSecondary\"],\"side\":\"left\"},\"event\":{\"blkColor\":[0,0,0,0],\"bgColor\":cfgColor[\"warning\"],\"icon\":appCfg.sharedAssets+\"/event.svg\",\"pic\":\"\",\"textColor\":cfgColor[\"fontBody\"],\"iconColor\":cfgColor[\"fontWarning\"],\"side\":\"left\"},\"error\":{\"blkColor\":[0,0,0,0],\"bgColor\":cfgColor[\"error\"],\"icon\":appCfg.sharedAssets+\"/fat_right.svg\",\"pic\":\"\",\"textColor\":[155,0,0,1],\"iconColor\":cfgColor[\"fontError\"],\"side\":\"left\"},\"ask\":{\"blkColor\":[0,0,0,0],\"bgColor\":cfgColor[\"success\"],\"icon\":appCfg.sharedAssets+\"/help.svg\",\"pic\":\"\",\"textColor\":cfgColor[\"fontBody\"],\"iconColor\":cfgColor[\"fontSuccess\"],\"side\":\"left\"}})",
//														"id": "BoxAIChat",
//														"position": "Absolute",
//														"x": "0",
//														"y": "0",
//														"display": "On",
//														"face": "",
//														"w": "100%-360"
//													}
//												},
//												"subHuds": {
//													"type": "array",
//													"attrs": []
//												},
//												"faces": {
//													"type": "object",
//													"jaxId": "1HDBT8BEP18",
//													"editVersion": 8,
//													"attrs": {
//														"1HI9IM0KV0": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9IQ7PN0",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9IQ7PN1",
//																	"editVersion": 4,
//																	"attrs": {
//																		"w": {
//																			"type": "length",
//																			"valText": "100%-360"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9IM0KV0",
//															"faceTagName": "desktop"
//														},
//														"1HI9IM0KV2": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9J2OE50",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9J2OE51",
//																	"editVersion": 8,
//																	"attrs": {
//																		"w": {
//																			"type": "length",
//																			"valText": "100%"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9IM0KV2",
//															"faceTagName": "mobile"
//														},
//														"1HI9J7T480": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9P2NVT6",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9P2NVT7",
//																	"editVersion": 4,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "Off"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9J7T480",
//															"faceTagName": "view"
//														},
//														"1HI9J8OKB0": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9P2NVT8",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9P2NVT9",
//																	"editVersion": 4,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "On"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9J8OKB0",
//															"faceTagName": "chat"
//														}
//													}
//												},
//												"functions": {
//													"type": "object",
//													"jaxId": "1HDBT8BEP19",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"extraPpts": {
//													"type": "object",
//													"def": "Object",
//													"jaxId": "1HDBT8BEP20",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"mockup": "false",
//												"codes": "false",
//												"locked": "true",
//												"container": "false",
//												"nameVal": "true",
//												"containerSlots": {
//													"type": "object",
//													"jaxId": "1HDBT8BEP21",
//													"editVersion": 0,
//													"attrs": {}
//												}
//											}
//										},
//										{
//											"type": "hudobj",
//											"def": "box",
//											"jaxId": "1HI9IL4SO0",
//											"editVersion": 42,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HI9IM0KV4",
//													"editVersion": 116,
//													"attrs": {
//														"type": "box",
//														"id": "BoxView",
//														"position": "Absolute",
//														"x": "100%-360",
//														"y": "0",
//														"w": "360",
//														"h": "100%",
//														"anchorH": "Left",
//														"anchorV": "Top",
//														"autoLayout": "false",
//														"display": "On",
//														"clip": "Auto Scroll Y",
//														"uiEvent": "On",
//														"alpha": "1",
//														"rotate": "0",
//														"scale": "",
//														"filter": "",
//														"cursor": "",
//														"zIndex": "0",
//														"margin": "",
//														"padding": "",
//														"minW": "",
//														"minH": "",
//														"maxW": "",
//														"maxH": "",
//														"face": "",
//														"styleClass": "",
//														"background": "[255,255,255,1.00]",
//														"border": "[0,0,0,1]",
//														"borderStyle": "Solid",
//														"borderColor": "[0,0,0,1.00]",
//														"corner": "0",
//														"shadow": "false",
//														"shadowX": "2",
//														"shadowY": "2",
//														"shadowBlur": "3",
//														"shadowSpread": "0",
//														"shadowColor": "[0,0,0,0.50]"
//													}
//												},
//												"subHuds": {
//													"type": "array",
//													"attrs": [
//														{
//															"type": "hudobj",
//															"def": "Gear/@StdUI/ui/TxtMarkdown.js",
//															"jaxId": "1HI9INFAA0",
//															"editVersion": 40,
//															"attrs": {
//																"createArgs": {
//																	"type": "object",
//																	"def": "gearCrateArgs",
//																	"jaxId": "1HI9IO6U00",
//																	"editVersion": 12,
//																	"attrs": {
//																		"markdown": "",
//																		"baseFontSize": "15"
//																	}
//																},
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9IO6U01",
//																	"editVersion": 66,
//																	"attrs": {
//																		"type": "#null#>TxtMarkdown(\"\",15)",
//																		"id": "MDStory",
//																		"position": "Absolute",
//																		"x": "0",
//																		"y": "0",
//																		"display": "On",
//																		"face": "",
//																		"w": "100%",
//																		"h": ""
//																	}
//																},
//																"subHuds": {
//																	"type": "array",
//																	"attrs": []
//																},
//																"faces": {
//																	"type": "object",
//																	"jaxId": "1HI9IO6U02",
//																	"editVersion": 50,
//																	"attrs": {
//																		"1HI9IM0KV0": {
//																			"type": "hudface",
//																			"def": "HudFace",
//																			"jaxId": "1HI9J7BVL2",
//																			"editVersion": 4,
//																			"attrs": {
//																				"properties": {
//																					"type": "object",
//																					"jaxId": "1HI9J7BVL3",
//																					"editVersion": 0,
//																					"attrs": {}
//																				},
//																				"anis": {
//																					"type": "array",
//																					"def": "Array",
//																					"attrs": []
//																				}
//																			},
//																			"faceTagId": "1HI9IM0KV0",
//																			"faceTagName": "desktop"
//																		},
//																		"1HI9J7T480": {
//																			"type": "hudface",
//																			"def": "HudFace",
//																			"jaxId": "1HI9P2NVT12",
//																			"editVersion": 4,
//																			"attrs": {
//																				"properties": {
//																					"type": "object",
//																					"jaxId": "1HI9P2NVT13",
//																					"editVersion": 0,
//																					"attrs": {}
//																				},
//																				"anis": {
//																					"type": "array",
//																					"def": "Array",
//																					"attrs": []
//																				}
//																			},
//																			"faceTagId": "1HI9J7T480",
//																			"faceTagName": "view"
//																		},
//																		"1HI9IM0KV2": {
//																			"type": "hudface",
//																			"def": "HudFace",
//																			"jaxId": "1HI9PA69F6",
//																			"editVersion": 4,
//																			"attrs": {
//																				"properties": {
//																					"type": "object",
//																					"jaxId": "1HI9PA69F7",
//																					"editVersion": 0,
//																					"attrs": {}
//																				},
//																				"anis": {
//																					"type": "array",
//																					"def": "Array",
//																					"attrs": []
//																				}
//																			},
//																			"faceTagId": "1HI9IM0KV2",
//																			"faceTagName": "mobile"
//																		}
//																	}
//																},
//																"functions": {
//																	"type": "object",
//																	"jaxId": "1HI9IO6U03",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"extraPpts": {
//																	"type": "object",
//																	"def": "Object",
//																	"jaxId": "1HI9IO6U04",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"mockup": "false",
//																"codes": "false",
//																"locked": "false",
//																"container": "false",
//																"nameVal": "false",
//																"containerSlots": {
//																	"type": "object",
//																	"jaxId": "1HI9IO6U05",
//																	"editVersion": 0,
//																	"attrs": {}
//																}
//															}
//														}
//													]
//												},
//												"faces": {
//													"type": "object",
//													"jaxId": "1HI9IM0KV5",
//													"editVersion": 8,
//													"attrs": {
//														"1HI9IM0KV0": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9IQ7PN4",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9IQ7PN5",
//																	"editVersion": 8,
//																	"attrs": {
//																		"x": {
//																			"type": "length",
//																			"valText": "100%-360"
//																		},
//																		"w": {
//																			"type": "length",
//																			"valText": "360"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9IM0KV0",
//															"faceTagName": "desktop"
//														},
//														"1HI9IM0KV2": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9J2OE52",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9J2OE53",
//																	"editVersion": 34,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "Off"
//																		},
//																		"x": {
//																			"type": "length",
//																			"valText": "0"
//																		},
//																		"w": {
//																			"type": "length",
//																			"valText": "100%"
//																		},
//																		"border": {
//																			"type": "auto",
//																			"valText": "0",
//																			"editMode": "edges"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9IM0KV2",
//															"faceTagName": "mobile"
//														},
//														"1HI9J7T480": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9P2NVT14",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9P2NVT15",
//																	"editVersion": 4,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "On"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9J7T480",
//															"faceTagName": "view"
//														},
//														"1HI9J8OKB0": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9P2NVT16",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9P2NVT17",
//																	"editVersion": 4,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "Off"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9J8OKB0",
//															"faceTagName": "chat"
//														}
//													}
//												},
//												"functions": {
//													"type": "object",
//													"jaxId": "1HI9IM0KV6",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"extraPpts": {
//													"type": "object",
//													"def": "Object",
//													"jaxId": "1HI9IM0KV7",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"mockup": "false",
//												"codes": "false",
//												"locked": "false",
//												"container": "true",
//												"nameVal": "false"
//											}
//										},
//										{
//											"type": "hudobj",
//											"def": "box",
//											"jaxId": "1HI9JAFJU0",
//											"editVersion": 30,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HI9P2NVT18",
//													"editVersion": 122,
//													"attrs": {
//														"type": "box",
//														"id": "BoxViewBtn",
//														"position": "Absolute",
//														"x": "100%-50",
//														"y": "10",
//														"w": "40",
//														"h": "40",
//														"anchorH": "Left",
//														"anchorV": "Top",
//														"autoLayout": "false",
//														"display": "Off",
//														"clip": "Off",
//														"uiEvent": "On",
//														"alpha": "1",
//														"rotate": "0",
//														"scale": "",
//														"filter": "",
//														"cursor": "",
//														"zIndex": "0",
//														"margin": "",
//														"padding": "",
//														"minW": "",
//														"minH": "",
//														"maxW": "",
//														"maxH": "",
//														"face": "",
//														"styleClass": "",
//														"background": "[255,255,255,1.00]",
//														"border": "1",
//														"borderStyle": "Solid",
//														"borderColor": "[0,0,0,1.00]",
//														"corner": "6",
//														"shadow": "true",
//														"shadowX": "2",
//														"shadowY": "2",
//														"shadowBlur": "3",
//														"shadowSpread": "0",
//														"shadowColor": "[0,0,0,0.50]"
//													}
//												},
//												"subHuds": {
//													"type": "array",
//													"attrs": [
//														{
//															"type": "hudobj",
//															"def": "Gear/@StdUI/ui/BtnIcon.js",
//															"jaxId": "1HI9JBU7N0",
//															"editVersion": 41,
//															"attrs": {
//																"createArgs": {
//																	"type": "object",
//																	"def": "gearCrateArgs",
//																	"jaxId": "1HI9P2NVT19",
//																	"editVersion": 40,
//																	"attrs": {
//																		"style": "\"front\"",
//																		"w": "32",
//																		"h": "0",
//																		"icon": "#appCfg.sharedAssets+\"/yulan.svg\"",
//																		"colorBG": "null"
//																	}
//																},
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9P2NVT20",
//																	"editVersion": 57,
//																	"attrs": {
//																		"type": "#null#>BtnIcon(\"front\",32,0,appCfg.sharedAssets+\"/yulan.svg\",null)",
//																		"id": "BtnViewStory",
//																		"position": "Absolute",
//																		"x": "50%",
//																		"y": "50%",
//																		"display": "On",
//																		"face": "",
//																		"anchorH": "Center",
//																		"autoLayout": "false",
//																		"anchorV": "Center"
//																	}
//																},
//																"subHuds": {
//																	"type": "array",
//																	"attrs": []
//																},
//																"faces": {
//																	"type": "object",
//																	"jaxId": "1HI9P2NVT21",
//																	"editVersion": 22,
//																	"attrs": {
//																		"1HI9IM0KV0": {
//																			"type": "hudface",
//																			"def": "HudFace",
//																			"jaxId": "1HI9P4M360",
//																			"editVersion": 4,
//																			"attrs": {
//																				"properties": {
//																					"type": "object",
//																					"jaxId": "1HI9P4M361",
//																					"editVersion": 0,
//																					"attrs": {}
//																				},
//																				"anis": {
//																					"type": "array",
//																					"def": "Array",
//																					"attrs": []
//																				}
//																			},
//																			"faceTagId": "1HI9IM0KV0",
//																			"faceTagName": "desktop"
//																		},
//																		"1HI9J7T480": {
//																			"type": "hudface",
//																			"def": "HudFace",
//																			"jaxId": "1HI9PA69F8",
//																			"editVersion": 4,
//																			"attrs": {
//																				"properties": {
//																					"type": "object",
//																					"jaxId": "1HI9PA69F9",
//																					"editVersion": 0,
//																					"attrs": {}
//																				},
//																				"anis": {
//																					"type": "array",
//																					"def": "Array",
//																					"attrs": []
//																				}
//																			},
//																			"faceTagId": "1HI9J7T480",
//																			"faceTagName": "view"
//																		},
//																		"1HI9IM0KV2": {
//																			"type": "hudface",
//																			"def": "HudFace",
//																			"jaxId": "1HI9PA69F12",
//																			"editVersion": 4,
//																			"attrs": {
//																				"properties": {
//																					"type": "object",
//																					"jaxId": "1HI9PA69F13",
//																					"editVersion": 0,
//																					"attrs": {}
//																				},
//																				"anis": {
//																					"type": "array",
//																					"def": "Array",
//																					"attrs": []
//																				}
//																			},
//																			"faceTagId": "1HI9IM0KV2",
//																			"faceTagName": "mobile"
//																		}
//																	}
//																},
//																"functions": {
//																	"type": "object",
//																	"jaxId": "1HI9P2NVT22",
//																	"editVersion": 2,
//																	"attrs": {
//																		"OnClick": {
//																			"type": "fixedFunc",
//																			"jaxId": "1HI9PP4435",
//																			"editVersion": 6,
//																			"attrs": {
//																				"callArgs": {
//																					"type": "object",
//																					"jaxId": "1HI9PP4436",
//																					"editVersion": 2,
//																					"attrs": {
//																						"event": ""
//																					}
//																				},
//																				"seg": "1HI9PMO650"
//																			}
//																		}
//																	}
//																},
//																"extraPpts": {
//																	"type": "object",
//																	"def": "Object",
//																	"jaxId": "1HI9P2NVT23",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"mockup": "false",
//																"codes": "false",
//																"locked": "false",
//																"container": "false",
//																"nameVal": "false",
//																"containerSlots": {
//																	"type": "object",
//																	"jaxId": "1HI9P2NVT24",
//																	"editVersion": 0,
//																	"attrs": {}
//																}
//															}
//														}
//													]
//												},
//												"faces": {
//													"type": "object",
//													"jaxId": "1HI9P2NVT25",
//													"editVersion": 8,
//													"attrs": {
//														"1HI9IM0KV0": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9P4M364",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9P4M365",
//																	"editVersion": 4,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "Off"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9IM0KV0",
//															"faceTagName": "desktop"
//														},
//														"1HI9IM0KV2": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9P4M366",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9P4M367",
//																	"editVersion": 4,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "On"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9IM0KV2",
//															"faceTagName": "mobile"
//														},
//														"1HI9J7T480": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9PA69F14",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9PA69F15",
//																	"editVersion": 4,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "Off"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9J7T480",
//															"faceTagName": "view"
//														},
//														"1HI9J8OKB0": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9PA69F16",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9PA69F17",
//																	"editVersion": 4,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "On"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9J8OKB0",
//															"faceTagName": "chat"
//														}
//													}
//												},
//												"functions": {
//													"type": "object",
//													"jaxId": "1HI9P2NVT26",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"extraPpts": {
//													"type": "object",
//													"def": "Object",
//													"jaxId": "1HI9P2NVT27",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"mockup": "false",
//												"codes": "false",
//												"locked": "false",
//												"container": "true",
//												"nameVal": "false"
//											}
//										},
//										{
//											"type": "hudobj",
//											"def": "box",
//											"jaxId": "1HI9P4UQ30",
//											"editVersion": 33,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HI9P4UQ31",
//													"editVersion": 130,
//													"attrs": {
//														"type": "box",
//														"id": "BoxCloseBtn",
//														"position": "Absolute",
//														"x": "100%-50",
//														"y": "10",
//														"w": "40",
//														"h": "40",
//														"anchorH": "Left",
//														"anchorV": "Top",
//														"autoLayout": "false",
//														"display": "Off",
//														"clip": "Off",
//														"uiEvent": "On",
//														"alpha": "1",
//														"rotate": "0",
//														"scale": "",
//														"filter": "",
//														"cursor": "",
//														"zIndex": "0",
//														"margin": "",
//														"padding": "",
//														"minW": "",
//														"minH": "",
//														"maxW": "",
//														"maxH": "",
//														"face": "",
//														"styleClass": "",
//														"background": "[255,255,255,1.00]",
//														"border": "1",
//														"borderStyle": "Solid",
//														"borderColor": "[0,0,0,1.00]",
//														"corner": "6",
//														"shadow": "true",
//														"shadowX": "2",
//														"shadowY": "2",
//														"shadowBlur": "3",
//														"shadowSpread": "0",
//														"shadowColor": "[0,0,0,0.50]"
//													}
//												},
//												"subHuds": {
//													"type": "array",
//													"attrs": [
//														{
//															"type": "hudobj",
//															"def": "Gear/@StdUI/ui/BtnIcon.js",
//															"jaxId": "1HI9P4UQ40",
//															"editVersion": 43,
//															"attrs": {
//																"createArgs": {
//																	"type": "object",
//																	"def": "gearCrateArgs",
//																	"jaxId": "1HI9P4UQ41",
//																	"editVersion": 46,
//																	"attrs": {
//																		"style": "\"front\"",
//																		"w": "32",
//																		"h": "0",
//																		"icon": "#appCfg.sharedAssets+\"/close.svg\"",
//																		"colorBG": "null"
//																	}
//																},
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9P4UQ42",
//																	"editVersion": 59,
//																	"attrs": {
//																		"type": "#null#>BtnIcon(\"front\",32,0,appCfg.sharedAssets+\"/close.svg\",null)",
//																		"id": "BtnCloseView",
//																		"position": "Absolute",
//																		"x": "50%",
//																		"y": "50%",
//																		"display": "On",
//																		"face": "",
//																		"anchorH": "Center",
//																		"autoLayout": "false",
//																		"anchorV": "Center"
//																	}
//																},
//																"subHuds": {
//																	"type": "array",
//																	"attrs": []
//																},
//																"faces": {
//																	"type": "object",
//																	"jaxId": "1HI9P4UQ43",
//																	"editVersion": 22,
//																	"attrs": {
//																		"1HI9IM0KV0": {
//																			"type": "hudface",
//																			"def": "HudFace",
//																			"jaxId": "1HI9P4UQ44",
//																			"editVersion": 4,
//																			"attrs": {
//																				"properties": {
//																					"type": "object",
//																					"jaxId": "1HI9P4UQ45",
//																					"editVersion": 0,
//																					"attrs": {}
//																				},
//																				"anis": {
//																					"type": "array",
//																					"def": "Array",
//																					"attrs": []
//																				}
//																			},
//																			"faceTagId": "1HI9IM0KV0",
//																			"faceTagName": "desktop"
//																		},
//																		"1HI9J7T480": {
//																			"type": "hudface",
//																			"def": "HudFace",
//																			"jaxId": "1HI9PA69F18",
//																			"editVersion": 4,
//																			"attrs": {
//																				"properties": {
//																					"type": "object",
//																					"jaxId": "1HI9PA69F19",
//																					"editVersion": 0,
//																					"attrs": {}
//																				},
//																				"anis": {
//																					"type": "array",
//																					"def": "Array",
//																					"attrs": []
//																				}
//																			},
//																			"faceTagId": "1HI9J7T480",
//																			"faceTagName": "view"
//																		},
//																		"1HI9IM0KV2": {
//																			"type": "hudface",
//																			"def": "HudFace",
//																			"jaxId": "1HI9PA69F22",
//																			"editVersion": 4,
//																			"attrs": {
//																				"properties": {
//																					"type": "object",
//																					"jaxId": "1HI9PA69F23",
//																					"editVersion": 0,
//																					"attrs": {}
//																				},
//																				"anis": {
//																					"type": "array",
//																					"def": "Array",
//																					"attrs": []
//																				}
//																			},
//																			"faceTagId": "1HI9IM0KV2",
//																			"faceTagName": "mobile"
//																		}
//																	}
//																},
//																"functions": {
//																	"type": "object",
//																	"jaxId": "1HI9P4UQ46",
//																	"editVersion": 2,
//																	"attrs": {
//																		"OnClick": {
//																			"type": "fixedFunc",
//																			"jaxId": "1HI9PQ3SN0",
//																			"editVersion": 6,
//																			"attrs": {
//																				"callArgs": {
//																					"type": "object",
//																					"jaxId": "1HI9PQ3SN1",
//																					"editVersion": 2,
//																					"attrs": {
//																						"event": ""
//																					}
//																				},
//																				"seg": "1HI9PPH4H0"
//																			}
//																		}
//																	}
//																},
//																"extraPpts": {
//																	"type": "object",
//																	"def": "Object",
//																	"jaxId": "1HI9P4UQ47",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"mockup": "false",
//																"codes": "false",
//																"locked": "false",
//																"container": "false",
//																"nameVal": "false",
//																"containerSlots": {
//																	"type": "object",
//																	"jaxId": "1HI9P4UQ48",
//																	"editVersion": 0,
//																	"attrs": {}
//																}
//															}
//														}
//													]
//												},
//												"faces": {
//													"type": "object",
//													"jaxId": "1HI9P4UQ49",
//													"editVersion": 8,
//													"attrs": {
//														"1HI9IM0KV0": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9P4UQ410",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9P4UQ411",
//																	"editVersion": 4,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "Off"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9IM0KV0",
//															"faceTagName": "desktop"
//														},
//														"1HI9IM0KV2": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9P4UQ50",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9P4UQ51",
//																	"editVersion": 6,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "Off"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9IM0KV2",
//															"faceTagName": "mobile"
//														},
//														"1HI9J7T480": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9PA69F24",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9PA69F25",
//																	"editVersion": 4,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "On"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9J7T480",
//															"faceTagName": "view"
//														},
//														"1HI9J8OKB0": {
//															"type": "hudface",
//															"def": "HudFace",
//															"jaxId": "1HI9PA69F26",
//															"editVersion": 4,
//															"attrs": {
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HI9PA69F27",
//																	"editVersion": 4,
//																	"attrs": {
//																		"display": {
//																			"type": "choice",
//																			"valText": "Off"
//																		}
//																	}
//																},
//																"anis": {
//																	"type": "array",
//																	"def": "Array",
//																	"attrs": []
//																}
//															},
//															"faceTagId": "1HI9J8OKB0",
//															"faceTagName": "chat"
//														}
//													}
//												},
//												"functions": {
//													"type": "object",
//													"jaxId": "1HI9P4UQ52",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"extraPpts": {
//													"type": "object",
//													"def": "Object",
//													"jaxId": "1HI9P4UQ53",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"mockup": "false",
//												"codes": "false",
//												"locked": "false",
//												"container": "true",
//												"nameVal": "false"
//											}
//										}
//									]
//								},
//								"faces": {
//									"type": "object",
//									"jaxId": "1HDBT8BEP22",
//									"editVersion": 50,
//									"attrs": {
//										"1HI9IM0KV0": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HI9J7BVL4",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HI9J7BVL5",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HI9IM0KV0",
//											"faceTagName": "desktop"
//										},
//										"1HI9J7T480": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HI9P2NVT30",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HI9P2NVT31",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HI9J7T480",
//											"faceTagName": "view"
//										},
//										"1HI9IM0KV2": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HI9PA69F30",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HI9PA69F31",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HI9IM0KV2",
//											"faceTagName": "mobile"
//										}
//									}
//								},
//								"functions": {
//									"type": "object",
//									"jaxId": "1HDBT8BEP23",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"extraPpts": {
//									"type": "object",
//									"def": "Object",
//									"jaxId": "1HDBT8BEP24",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"mockup": "false",
//								"codes": "false",
//								"locked": "false",
//								"container": "true",
//								"nameVal": "false",
//								"exposeContainer": "false"
//							}
//						}
//					]
//				},
//				"faces": {
//					"type": "object",
//					"jaxId": "1GGJKM84D9",
//					"editVersion": 50,
//					"attrs": {
//						"1HI9IM0KV0": {
//							"type": "hudface",
//							"def": "HudFace",
//							"jaxId": "1HI9J7BVL6",
//							"editVersion": 4,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1HI9J7BVL7",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"anis": {
//									"type": "array",
//									"def": "Array",
//									"attrs": []
//								}
//							},
//							"faceTagId": "1HI9IM0KV0",
//							"faceTagName": "desktop"
//						},
//						"1HI9J7T480": {
//							"type": "hudface",
//							"def": "HudFace",
//							"jaxId": "1HI9P2NVT34",
//							"editVersion": 4,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1HI9P2NVT35",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"anis": {
//									"type": "array",
//									"def": "Array",
//									"attrs": []
//								}
//							},
//							"faceTagId": "1HI9J7T480",
//							"faceTagName": "view"
//						},
//						"1HI9IM0KV2": {
//							"type": "hudface",
//							"def": "HudFace",
//							"jaxId": "1HI9PA69F34",
//							"editVersion": 4,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1HI9PA69F35",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"anis": {
//									"type": "array",
//									"def": "Array",
//									"attrs": []
//								}
//							},
//							"faceTagId": "1HI9IM0KV2",
//							"faceTagName": "mobile"
//						}
//					}
//				},
//				"functions": {
//					"type": "object",
//					"jaxId": "1GGJKM84D10",
//					"editVersion": 0,
//					"attrs": {}
//				},
//				"extraPpts": {
//					"type": "object",
//					"def": "Object",
//					"jaxId": "1GGJKM84D11",
//					"editVersion": 0,
//					"attrs": {}
//				},
//				"mockup": "false",
//				"codes": "false",
//				"locked": "false",
//				"container": "true",
//				"nameVal": "false"
//			}
//		},
//		"exposeGear": "false",
//		"exposeTemplate": "false",
//		"exposeAttrs": {
//			"type": "object",
//			"def": "exposeAttrs",
//			"jaxId": "1GGJKM84D12",
//			"editVersion": 70,
//			"attrs": {
//				"id": "true",
//				"position": "true",
//				"x": "true",
//				"y": "true",
//				"w": "false",
//				"h": "false",
//				"anchorH": "false",
//				"anchorV": "false",
//				"autoLayout": "false",
//				"display": "true",
//				"contentLayout": "false",
//				"subAlign": "false",
//				"itemsAlign": "false",
//				"itemsWrap": "false",
//				"clip": "false",
//				"uiEvent": "false",
//				"alpha": "false",
//				"rotate": "false",
//				"scale": "false",
//				"filter": "false",
//				"aspect": "false",
//				"cursor": "false",
//				"zIndex": "false",
//				"flex": "false",
//				"margin": "false",
//				"traceSize": "false",
//				"padding": "false",
//				"minW": "false",
//				"minH": "false",
//				"maxW": "false",
//				"maxH": "false",
//				"styleClass": "false",
//				"innerLayout": {
//					"valText": "false"
//				},
//				"marginL": {
//					"valText": "false"
//				},
//				"marginR": {
//					"valText": "false"
//				},
//				"marginT": {
//					"valText": "false"
//				},
//				"marginB": {
//					"valText": "false"
//				},
//				"paddingL": {
//					"valText": "false"
//				},
//				"paddingR": {
//					"valText": "false"
//				},
//				"paddingT": {
//					"valText": "false"
//				},
//				"paddingB": {
//					"valText": "false"
//				},
//				"attach": {
//					"valText": "false"
//				}
//			}
//		},
//		"exposeStateAttrs": {
//			"type": "array",
//			"def": "StringArray",
//			"attrs": []
//		}
//	}
//}