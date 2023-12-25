//Auto genterated by Cody
import {$P,VFACT,callAfter} from "/@vfact";
import pathLib from "/@path";
import inherits from "/@inherits";
import Base64 from "/@tabos/utils/base64.js";
import {trimJSON} from "/@aichat/utils.js";
/*#{1HDBOSUN90MoreImports*/
/*}#1HDBOSUN90MoreImports*/
const agentURL=(new URL(import.meta.url)).pathname;
const basePath=pathLib.dirname(agentURL);
const $ln=VFACT.lanCode||"EN";
/*#{1HDBOSUN90StartDoc*/
//----------------------------------------------------------------------------
const app=VFACT.app;
/*}#1HDBOSUN90StartDoc*/
//----------------------------------------------------------------------------
let agent=async function(session){
	let context,globalContext;
	let self;
	let Start,NewStory,StartWrite,WriteSeg,SaveStory,StarMenu,LoadStory,NextMenu,ShowStory,ExportStory,EditStory,SaveEdit;
	/*#{1HDBOSUN90LocalVals*/
	/*}#1HDBOSUN90LocalVals*/
	
	/*#{1HDBOSUN90PreContext*/
	/*}#1HDBOSUN90PreContext*/
	globalContext=session.globalContext;
	context={};
	context=VFACT.flexState(context);
	/*#{1HDBOSUN90PostContext*/
	globalContext.memory="";
	/*}#1HDBOSUN90PostContext*/
	let agent,segs={};
	segs["Start"]=Start=async function(input){//:1HDBPEGBH0
		let result=input;
		let role="assistant";
		let content=(($ln==="CN")?("你好！这是一个通过 AI 撰写短篇小说的 Agent 演示"):("Hello! This is a demo of an AI-powered agent for writing short stories."));
		session.addChatText(role,content);
		return {seg:StarMenu,result:(result),preSeg:"1HDBPEGBH0",outlet:"1HDBPEGBH1"};
	};
	Start.jaxId="1HDBPEGBH0"
	Start.url="Start@"+agentURL
	
	segs["NewStory"]=NewStory=async function(input){//:1HI79NVUM0
		let result;
		let sourcePath=pathLib.join(basePath,"./NewStory.js");
		result= await session.pipeChat(sourcePath,input,false);
		return {seg:StartWrite,result:(result),preSeg:"1HI79NVUM0",outlet:"1HI79NVUM1"};
	};
	NewStory.jaxId="1HI79NVUM0"
	NewStory.url="NewStory@"+agentURL
	
	segs["StartWrite"]=StartWrite=async function(input){//:1HI79NVUM2
		let result=input;
		let role="assistant";
		let content="太好了，我们现在可以开始写故事了！";
		session.addChatText(role,content);
		return {seg:WriteSeg,result:(result),preSeg:"1HI79NVUM2",outlet:"1HI79NVUM3"};
	};
	StartWrite.jaxId="1HI79NVUM2"
	StartWrite.url="StartWrite@"+agentURL
	
	segs["WriteSeg"]=WriteSeg=async function(input){//:1HI79NVUM4
		let result;
		let sourcePath=pathLib.join(basePath,"./WriteSeg.js");
		result= await session.pipeChat(sourcePath,input,false);
		return {seg:SaveStory,result:(result),preSeg:"1HI79NVUM4",outlet:"1HI79NVUM5"};
	};
	WriteSeg.jaxId="1HI79NVUM4"
	WriteSeg.url="WriteSeg@"+agentURL
	
	segs["SaveStory"]=SaveStory=async function(input){//:1HI79NVUM6
		let saveVO={context:{}};
		let ctxVO=saveVO.context;
		let result=saveVO;
		/*#{1HI79NVUM6PreCodes*/
		saveVO.StoryTitle=globalContext.StoryTitle;
		saveVO.StorySegs=globalContext.StorySegs;
		saveVO.PackedSegs=globalContext.PackedSegs;
		saveVO.DrawStyle=globalContext.DrawStyle;
		saveVO.LLMMode=globalContext.LLMMode;
		if(globalContext.StoryCover){
			saveVO.StoryCover=globalContext.StoryCover;
		}
		/*}#1HI79NVUM6PreCodes*/
		/*#{1HI79NVUM6PostCodes*/
		/*}#1HI79NVUM6PostCodes*/
		{
			let tabFS=(await import("/@tabos")).tabFS;
			let fileName=`/doc/story_${globalContext.StoryTitle}.json`;
			let content=JSON.stringify(saveVO,null,"	");
			fileName=fileName[0]==="/"?fileName:basePath+"/"+fileName;
			fileName=fileName.startsWith("/~/")?fileName.substring(2):fileName;
			fileName=fileName.startsWith("//")?fileName.substring(1):fileName;
			/*#{1HI79NVUM6SaveData*/
			/*}#1HI79NVUM6SaveData*/
			await tabFS.writeFile(fileName,content,"utf8");
		}
		/*#{1HI79NVUM6FinCodes*/
		app.emit("StoryUpdate",globalContext);
		/*}#1HI79NVUM6FinCodes*/
		return {seg:NextMenu,result:(result),preSeg:"1HI79NVUM6",outlet:"1HI79NVUM7"};
	};
	SaveStory.jaxId="1HI79NVUM6"
	SaveStory.url="SaveStory@"+agentURL
	
	segs["StarMenu"]=StarMenu=async function(input){//:1HI79NVUM8
		let prompt=("新建故事还是读取已存在的项目")||input;
		let items=[
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"新建一个故事",code:0},
			{icon:"/~/-tabos/shared/assets/folder.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"加载故事",code:1},
		];
		let result="";
		let item=null;
		let multi=false;
		
		[result,item]=await session.askUserRaw({type:"menu",prompt:prompt,multiSelect:multi,items:items});
		if(multi){
			return {seg:NewStory,result:(result),preSeg:"1HI79NVUM8",outlet:"1HI78J1HI0"};
		}
		if(item.code===0){
			return {seg:NewStory,result:(result),preSeg:"1HI79NVUM8",outlet:"1HI78J1HI0"};
		}
		if(item.code===1){
			return {seg:LoadStory,result:(result),preSeg:"1HI79NVUM8",outlet:"1HI78J1HI1"};
		}
		return {result:result};
	
	};
	StarMenu.jaxId="1HI79NVUM8"
	StarMenu.url="StarMenu@"+agentURL
	
	segs["LoadStory"]=LoadStory=async function(input){//:1HI79NVUM9
		let result;
		let sourcePath=pathLib.join(basePath,"./LoadStory.js");
		result= await session.pipeChat(sourcePath,input,false);
		return {seg:ShowStory,result:(result),preSeg:"1HI79NVUM9",outlet:"1HI79NVUM10"};
	};
	LoadStory.jaxId="1HI79NVUM9"
	LoadStory.url="LoadStory@"+agentURL
	
	segs["NextMenu"]=NextMenu=async function(input){//:1HI79NVUM11
		let prompt=("请选择下一步的操作")||input;
		let items=[
			{icon:"/~/-tabos/shared/assets/inc.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"继续撰写",code:0},
			{icon:"/~/-tabos/shared/assets/file.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"查看当前故事",code:1},
			{icon:"/~/-tabos/shared/assets/edit.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"编辑文章",code:2},
			{icon:"/~/-tabos/shared/assets/share.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"输出故事",code:3},
		];
		let result="";
		let item=null;
		let multi=false;
		
		[result,item]=await session.askUserRaw({type:"menu",prompt:prompt,multiSelect:multi,items:items});
		if(multi){
			return {seg:WriteSeg,result:(result),preSeg:"1HI79NVUM11",outlet:"1HI78SAD81"};
		}
		if(item.code===0){
			return {seg:WriteSeg,result:(result),preSeg:"1HI79NVUM11",outlet:"1HI78SAD81"};
		}
		if(item.code===1){
			return {seg:ShowStory,result:(result),preSeg:"1HI79NVUM11",outlet:"1HI78SAD80"};
		}
		if(item.code===2){
			return {seg:EditStory,result:(result),preSeg:"1HI79NVUM11",outlet:"1HI7D5NNL0"};
		}
		if(item.code===3){
			return {seg:ExportStory,result:(result),preSeg:"1HI79NVUM11",outlet:"1HI78SAD82"};
		}
		return {result:result};
	
	};
	NextMenu.jaxId="1HI79NVUM11"
	NextMenu.url="NextMenu@"+agentURL
	
	segs["ShowStory"]=ShowStory=async function(input){//:1HI79NVUM12
		let result=input;
		let role="assistant";
		let content=input;
		/*#{1HI79NVUM12PreCodes*/
		/*
		let segs=globalContext.StorySegs;
		segs=segs.map((item)=>{
			if(item.image){
				return `![pic](${item.image})  \n\n${item.text}`;
			}
			return "  "+item.text
		});
		content=segs.join("\n\n");
		content=`## ${globalContext.StoryTitle}\n${content}`;
		if(globalContext.StoryCover){
			content=`![cover](${globalContext.StoryCover})\n${content}`;
		}
		//console.log(content);
		*/
		content="显示当前文章。";
		/*}#1HI79NVUM12PreCodes*/
		session.addChatText(role,content);
		/*#{1HI79NVUM12PostCodes*/
		app.emit("StoryUpdate",globalContext);
		app.emit("ShowStory",globalContext);
		/*}#1HI79NVUM12PostCodes*/
		return {seg:NextMenu,result:(result),preSeg:"1HI79NVUM12",outlet:"1HI79NVUM13"};
	};
	ShowStory.jaxId="1HI79NVUM12"
	ShowStory.url="ShowStory@"+agentURL
	
	segs["ExportStory"]=ExportStory=async function(input){//:1HI79NVUM14
		let result;
		let sourcePath=pathLib.join(basePath,"./ExportStory.js");
		result= await session.pipeChat(sourcePath,input,false);
		return {seg:NextMenu,result:(result),preSeg:"1HI79NVUM14",outlet:"1HI79NVUM15"};
	};
	ExportStory.jaxId="1HI79NVUM14"
	ExportStory.url="ExportStory@"+agentURL
	
	segs["EditStory"]=EditStory=async function(input){//:1HI7D5NNL1
		let result;
		let sourcePath=pathLib.join(basePath,"./EditStory.js");
		result= await session.pipeChat(sourcePath,input,false);
		return {seg:SaveEdit,result:(result),preSeg:"1HI7D5NNL1",outlet:"1HI7D5NNL2"};
	};
	EditStory.jaxId="1HI7D5NNL1"
	EditStory.url="EditStory@"+agentURL
	
	segs["SaveEdit"]=SaveEdit=async function(input){//:1HIBJ7OVI0
		let saveVO={context:{}};
		let ctxVO=saveVO.context;
		let result=saveVO;
		/*#{1HIBJ7OVI0PreCodes*/
		saveVO.StoryTitle=globalContext.StoryTitle;
		saveVO.StorySegs=globalContext.StorySegs;
		saveVO.PackedSegs=globalContext.PackedSegs;
		saveVO.DrawStyle=globalContext.DrawStyle;
		if(globalContext.StoryCover){
			saveVO.StoryCover=globalContext.StoryCover;
		}
		/*}#1HIBJ7OVI0PreCodes*/
		/*#{1HIBJ7OVI0PostCodes*/
		/*}#1HIBJ7OVI0PostCodes*/
		{
			let tabFS=(await import("/@tabos")).tabFS;
			let fileName=`/doc/story_${globalContext.StoryTitle}.json`;
			let content=JSON.stringify(saveVO,null,"	");
			fileName=fileName[0]==="/"?fileName:basePath+"/"+fileName;
			fileName=fileName.startsWith("/~/")?fileName.substring(2):fileName;
			fileName=fileName.startsWith("//")?fileName.substring(1):fileName;
			/*#{1HIBJ7OVI0SaveData*/
			/*}#1HIBJ7OVI0SaveData*/
			await tabFS.writeFile(fileName,content,"utf8");
		}
		/*#{1HIBJ7OVI0FinCodes*/
		app.emit("StoryUpdate",globalContext);
		/*}#1HIBJ7OVI0FinCodes*/
		return {seg:NextMenu,result:(result),preSeg:"1HIBJ7OVI0",outlet:"1HIBJ7OVJ0"};
	};
	SaveEdit.jaxId="1HIBJ7OVI0"
	SaveEdit.url="SaveEdit@"+agentURL
	
	agent={
		isAIAgent:true,
		session:session,
		name:"agent",
		url:agentURL,
		autoStart:true,
		jaxId:"1HDBOSUN90",
		context:context,
		livingSeg:null,
		execChat:async function(input){
			let result;
			/*#{1HDBOSUN90PreEntry*/
			/*}#1HDBOSUN90PreEntry*/
			result={seg:Start,"input":input};
			/*#{1HDBOSUN90PostEntry*/
			/*}#1HDBOSUN90PostEntry*/
			return result;
		},
		/*#{1HDBOSUN90MoreAgentAttrs*/
		/*}#1HDBOSUN90MoreAgentAttrs*/
	};
	/*#{1HDBOSUN90PostAgent*/
	/*}#1HDBOSUN90PostAgent*/
	return agent;
};
/*#{1HDBOSUN90ExCodes*/
/*}#1HDBOSUN90ExCodes*/


export default agent;
export{agent};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "DocAIAgent",
//	"jaxId": "1HDBOSUN90",
//	"editVersion": 52,
//	"attrs": {
//		"editObjs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HDBOSUNA0",
//			"editVersion": 2,
//			"attrs": {
//				"agent": {
//					"type": "objclass",
//					"def": "ObjClass",
//					"jaxId": "1HDBOSUNA4",
//					"editVersion": 84,
//					"attrs": {
//						"constructArgs": {
//							"type": "object",
//							"jaxId": "1HDBOSUNB0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"superClass": "",
//						"properties": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HDBOSUNB1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"functions": {
//							"type": "object",
//							"def": "Functions",
//							"jaxId": "1HDBOSUNB2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"mockupOnly": "false",
//						"nullMockup": "false"
//					},
//					"mockups": {}
//				}
//			}
//		},
//		"agent": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HDBOSUNA1",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"segs": {
//			"type": "array",
//			"attrs": [
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HDBPEGBH0",
//					"editVersion": 253,
//					"attrs": {
//						"id": "Start",
//						"label": "Greating",
//						"x": "40",
//						"y": "510",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HDBPEGBK0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HDIJB7SK0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "Start agent. Greeting to user.",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": {
//							"type": "string",
//							"valText": "Hello! This is a demo of an AI-powered agent for writing short stories.",
//							"localize": {
//								"EN": "Hello! This is a demo of an AI-powered agent for writing short stories.",
//								"CN": "你好！这是一个通过 AI 撰写短篇小说的 Agent 演示"
//							},
//							"localizable": true
//						},
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HDBPEGBH1",
//							"editVersion": 165,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUM8"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "aiBot",
//					"jaxId": "1HI79NVUM0",
//					"editVersion": 168,
//					"attrs": {
//						"id": "NewStory",
//						"label": "New AI Seg",
//						"x": "490",
//						"y": "370",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "调用其它AI Agent，把调用的结果作为输出",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"source": "ai/NewStory.js",
//						"secret": "false",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUM1",
//							"editVersion": 92,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUM2"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HI79NVUM2",
//					"editVersion": 168,
//					"attrs": {
//						"id": "StartWrite",
//						"label": "New AI Seg",
//						"x": "740",
//						"y": "370",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ3",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "太好了，我们现在可以开始写故事了！",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUM3",
//							"editVersion": 92,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUM4"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "aiBot",
//					"jaxId": "1HI79NVUM4",
//					"editVersion": 163,
//					"attrs": {
//						"id": "WriteSeg",
//						"label": "New AI Seg",
//						"x": "1000",
//						"y": "370",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ4",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ5",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "调用其它AI Agent，把调用的结果作为输出",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"source": "ai/WriteSeg.js",
//						"secret": "false",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUM5",
//							"editVersion": 82,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUM6"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "save",
//					"jaxId": "1HI79NVUM6",
//					"editVersion": 162,
//					"attrs": {
//						"id": "SaveStory",
//						"label": "New AI Seg",
//						"x": "1260",
//						"y": "370",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ6",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ7",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"fileName": "#`/doc/story_${globalContext.StoryTitle}.json`",
//						"saveContext": {
//							"type": "array",
//							"def": "StringArray",
//							"attrs": []
//						},
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUM7",
//							"editVersion": 82,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUM11"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askMenu",
//					"jaxId": "1HI79NVUM8",
//					"editVersion": 173,
//					"attrs": {
//						"id": "StarMenu",
//						"label": "New AI Seg",
//						"x": "230",
//						"y": "510",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ8",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ9",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "新建故事还是读取已存在的项目",
//						"multi": "false",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI78J1HI0",
//									"editVersion": 118,
//									"attrs": {
//										"id": "NewStory",
//										"text": "新建一个故事",
//										"result": "",
//										"codes": "false"
//									},
//									"linkedSeg": "1HI79NVUM0"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI78J1HI1",
//									"editVersion": 110,
//									"attrs": {
//										"id": "LoadStory",
//										"text": "加载故事",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/folder.svg"
//									},
//									"linkedSeg": "1HI79NVUM9"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "aiBot",
//					"jaxId": "1HI79NVUM9",
//					"editVersion": 146,
//					"attrs": {
//						"id": "LoadStory",
//						"label": "New AI Seg",
//						"x": "480",
//						"y": "560",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ10",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ11",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "调用其它AI Agent，把调用的结果作为输出",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"source": "ai/LoadStory.js",
//						"secret": "false",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUM10",
//							"editVersion": 95,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9B1M0J0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askMenu",
//					"jaxId": "1HI79NVUM11",
//					"editVersion": 235,
//					"attrs": {
//						"id": "NextMenu",
//						"label": "New AI Seg",
//						"x": "1500",
//						"y": "560",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ12",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ13",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "请选择下一步的操作",
//						"multi": "false",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI78SAD81",
//									"editVersion": 88,
//									"attrs": {
//										"id": "WriteMore",
//										"text": "继续撰写",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/inc.svg"
//									},
//									"linkedSeg": "1HI79NVUQ14"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI78SAD80",
//									"editVersion": 97,
//									"attrs": {
//										"id": "ViewSotry",
//										"text": "查看当前故事",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/file.svg"
//									},
//									"linkedSeg": "1HI79NVUM12"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI7D5NNL0",
//									"editVersion": 124,
//									"attrs": {
//										"id": "Edit",
//										"text": "编辑文章",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/edit.svg"
//									},
//									"linkedSeg": "1HI7D5NNL1"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI78SAD82",
//									"editVersion": 90,
//									"attrs": {
//										"id": "Export",
//										"text": "输出故事",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/share.svg"
//									},
//									"linkedSeg": "1HI79NVUM14"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HI79NVUM12",
//					"editVersion": 202,
//					"attrs": {
//						"id": "ShowStory",
//						"label": "New AI Seg",
//						"x": "1780",
//						"y": "480",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ15",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUQ16",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "#input",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUM13",
//							"editVersion": 104,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUR0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "aiBot",
//					"jaxId": "1HI79NVUM14",
//					"editVersion": 184,
//					"attrs": {
//						"id": "ExportStory",
//						"label": "New AI Seg",
//						"x": "1780",
//						"y": "660",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUR1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79NVUR2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "调用其它AI Agent，把调用的结果作为输出",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"source": "ai/ExportStory.js",
//						"secret": "false",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUM15",
//							"editVersion": 70,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBJCD5K0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HI79NVUQ14",
//					"editVersion": 87,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1660",
//						"y": "270",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUR4",
//							"editVersion": 74,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUR5"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HI79NVUR5",
//					"editVersion": 91,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1030",
//						"y": "270",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUR6",
//							"editVersion": 74,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUM4"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connectorT",
//					"jaxId": "1HI79NVUR0",
//					"editVersion": 123,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "2050",
//						"y": "620",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUR7",
//							"editVersion": 104,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBJCD5K0"
//						},
//						"dir": "T2B"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HI79NVUR3",
//					"editVersion": 127,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1940",
//						"y": "810",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUR8",
//							"editVersion": 116,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUR9"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HI79NVUR9",
//					"editVersion": 123,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1360",
//						"y": "810",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUR10",
//							"editVersion": 116,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUR11"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connectorB",
//					"jaxId": "1HI79NVUR11",
//					"editVersion": 111,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1210",
//						"y": "730",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI79NVUR12",
//							"editVersion": 116,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBJ7OVI0"
//						},
//						"dir": "B2T"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "aiBot",
//					"jaxId": "1HI7D5NNL1",
//					"editVersion": 164,
//					"attrs": {
//						"id": "EditStory",
//						"label": "New AI Seg",
//						"x": "1830",
//						"y": "600",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7D5NNO0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7D5NNO1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "调用其它AI Agent，把调用的结果作为输出",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"source": "ai/EditStory.js",
//						"secret": "false",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7D5NNL2",
//							"editVersion": 81,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUR3"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connectorL",
//					"jaxId": "1HI9B1M0J0",
//					"editVersion": 62,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "740",
//						"y": "440",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9B1M0J1",
//							"editVersion": 59,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9B1M0J2"
//						},
//						"dir": "L2R"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connectorL",
//					"jaxId": "1HI9B1M0J2",
//					"editVersion": 66,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1630",
//						"y": "440",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9B1M0J3",
//							"editVersion": 59,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUM12"
//						},
//						"dir": "L2R"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "save",
//					"jaxId": "1HIBJ7OVI0",
//					"editVersion": 179,
//					"attrs": {
//						"id": "SaveEdit",
//						"label": "New AI Seg",
//						"x": "1280",
//						"y": "560",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBJ7OVI1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBJ7OVI2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"fileName": "#`/doc/story_${globalContext.StoryTitle}.json`",
//						"saveContext": {
//							"type": "array",
//							"def": "StringArray",
//							"attrs": []
//						},
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBJ7OVJ0",
//							"editVersion": 83,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUM11"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HIBJCD5K0",
//					"editVersion": 25,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1930",
//						"y": "740",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBJCD5K1",
//							"editVersion": 14,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBJCD5K2"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HIBJCD5K2",
//					"editVersion": 25,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1540",
//						"y": "740",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBJCD5K3",
//							"editVersion": 14,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI79NVUM11"
//						},
//						"dir": "R2L"
//					}
//				}
//			]
//		},
//		"entry": "",
//		"autoStart": "true",
//		"debug": "true",
//		"localVars": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HDBOSUNA2",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"context": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HDBOSUNA3",
//			"editVersion": 14,
//			"attrs": {}
//		},
//		"globalMockup": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HDIJB7SK6",
//			"editVersion": 4,
//			"attrs": {
//				"memory": {
//					"type": "string",
//					"valText": ""
//				}
//			}
//		},
//		"desc": "This is an AI Agent that use message compress to keep memory about chats.",
//		"exportAPI": "false",
//		"apiArgs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI79NVUR13",
//			"editVersion": 0,
//			"attrs": {}
//		}
//	}
//}