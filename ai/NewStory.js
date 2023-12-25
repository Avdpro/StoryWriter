//Auto genterated by Cody
import {$P,VFACT,callAfter} from "/@vfact";
import pathLib from "/@path";
import inherits from "/@inherits";
import Base64 from "/@tabos/utils/base64.js";
import {trimJSON} from "/@aichat/utils.js";
/*#{1HI79QI6P0MoreImports*/
/*}#1HI79QI6P0MoreImports*/
const agentURL=(new URL(import.meta.url)).pathname;
const basePath=pathLib.dirname(agentURL);
const $ln=VFACT.lanCode||"EN";
/*#{1HI79QI6P0StartDoc*/
/*}#1HI79QI6P0StartDoc*/
//----------------------------------------------------------------------------
let NewStory=async function(session){
	let context,globalContext;
	let self;
	let Start,AskName,StartInfo,AskBG,GenBackground,ShowConent,Menu,SEG1HI7ALO4H0,SaveInfo,DrawStyle,CheckStyle,HasCover,CoverInfo,DrawCover,CoverOK,Done,StyleTip,CoverTip,SaveCover,Resize,TryDraw,NotityError;
	/*#{1HI79QI6P0LocalVals*/
	/*}#1HI79QI6P0LocalVals*/
	
	/*#{1HI79QI6P0PreContext*/
	/*}#1HI79QI6P0PreContext*/
	globalContext=session.globalContext;
	context={
		"info":"","title":"",
		/*#{1HI79QI6P4ExCtxAttrs*/
		/*}#1HI79QI6P4ExCtxAttrs*/
	};
	context=VFACT.flexState(context);
	/*#{1HI79QI6P0PostContext*/
	/*}#1HI79QI6P0PostContext*/
	let agent,segs={};
	segs["Start"]=Start=async function(input){//:1HI7BI50J2
		let result=input;
		let role="assistant";
		let content="请给新小说取一个名字";
		/*#{1HI7BI50J2PreCodes*/
		/*}#1HI7BI50J2PreCodes*/
		session.addChatText(role,content);
		/*#{1HI7BI50J2PostCodes*/
		globalContext.StoryTitle="无题";
		globalContext.StorySegs=[];
		globalContext.PackedSegs=[];
		globalContext.LLMMode="gpt-3.5-turbo-1106";
		/*}#1HI7BI50J2PostCodes*/
		return {seg:AskName,result:(result),preSeg:"1HI7BI50J2",outlet:"1HI7BI50J3"};
	};
	Start.jaxId="1HI7BI50J2"
	Start.url="Start@"+agentURL
	
	segs["AskName"]=AskName=async function(input){//:1HI7BI50J0
		let prompt=("Please input")||input;
		let placeholder=("");
		let text=("");
		let result="";
		/*#{1HI7BI50J0PreCodes*/
		/*}#1HI7BI50J0PreCodes*/
		result=await session.askChatInput({type:"input",prompt:prompt,placeholder:placeholder,text:text});
		session.addChatText("user",result);
		Object.assign(context,{
			"title":result
		});
		/*#{1HI7BI50J0PostCodes*/
		VFACT.app.emit("StoryReady",globalContext);
		/*}#1HI7BI50J0PostCodes*/
		return {seg:StartInfo,result:(result),preSeg:"1HI7BI50J0",outlet:"1HI7BI50J1"};
	};
	AskName.jaxId="1HI7BI50J0"
	AskName.url="AskName@"+agentURL
	
	segs["StartInfo"]=StartInfo=async function(input){//:1HI7ALO4H1
		let result=input;
		let role="assistant";
		let content="\n## 让我们开始编写故事吧！\n首先请告诉我你想写的故事的大概内容，最好包括：\n- 故事发生的时间\n- 故事发生的地点\n- 故事中涉及的主要人物\n- 故事的大致情节\n你也可以提供更多的信息，比如：\n";
		session.addChatText(role,content);
		return {seg:AskBG,result:(result),preSeg:"1HI7ALO4H1",outlet:"1HI7ALO4H2"};
	};
	StartInfo.jaxId="1HI7ALO4H1"
	StartInfo.url="StartInfo@"+agentURL
	
	segs["AskBG"]=AskBG=async function(input){//:1HI7ALO4H3
		let prompt=("Please input")||input;
		let placeholder=("");
		let text=("");
		let result="";
		result=await session.askChatInput({type:"input",prompt:prompt,placeholder:placeholder,text:text});
		session.addChatText("user",result);
		return {seg:GenBackground,result:(result),preSeg:"1HI7ALO4H3",outlet:"1HI7ALO4H4"};
	};
	AskBG.jaxId="1HI7ALO4H3"
	AskBG.url="AskBG@"+agentURL
	
	segs["GenBackground"]=GenBackground=async function(input){//:1HI7ALO4I0
		let prompt;
		let result;
		
		let opts={
			mode:globalContext.LLMMode||"gpt-4-1106-preview",
			maxToken:2000,
			temperature:0.6,
			topP:1,
			fqcP:0,
			prcP:0,
			secret:false,
			responseFormat:"text"
		};
		let chatMem=GenBackground.messages
		let seed="";
		if(seed!==undefined){opts.seed=seed;}
		let messages=[
			{role:"system",content:`
你是一个通过跟用户聊天，构建一个小说故事背景资料的助理
请通过和用户聊天完善当前的小说背景资料设定。
当前的小说背景资料：
${context.info?context.info:"暂无"}
`},
			{role:"assistant",content:"请告诉我这个故事的大致背景"},
		];
		prompt=`用户的输入：
${input}
请根据用户的输入编写/完善当前小说设定。
你的输出应该只包含小说设定信息，不要包括其它的聊天内容
`;
		if(prompt!==null){
			messages.push({role:"user",content:prompt});
		}
		result=GenBackground.cheats[input];
		if(!result){
			result=await session.callSegLLM("GenBackground@"+agentURL,opts,messages,true);
		
		}
		return {seg:ShowConent,result:(result),preSeg:"1HI7ALO4I0",outlet:"1HI7ALO4I1"};
	};
	GenBackground.jaxId="1HI7ALO4I0"
	GenBackground.url="GenBackground@"+agentURL
	GenBackground.cheats={
		"80年代的北京机关大院里，男生和女生相识的故事":"小说背景设定：\n\n时间：故事发生在1980年代，这是一个重要的历史转折点，中国开始走向改革开放。\n\n地点：故事的主要场景设定在北京，特别是一个充满生活气息的机关大院。\n\n角色：主角是大院里的一对男生和女生，他们在这个大院里相识，共同成长。\n\n社会背景：那个时期的中国正经历着巨大的变革，人们的思想观念和生活方式都在发生着翻天覆地的变化。大院里的生活则是这个时代变化的一个缩影。\n\n具体情境：在这个大院里，男生和女生之间的互动和感情变化，将推动故事发展"
	};
	
	segs["ShowConent"]=ShowConent=async function(input){//:1HI7ALO4I2
		let result=input;
		let role="assistant";
		let content=input;
		session.addChatText(role,content);
		Object.assign(context,{
			"info":input
		});
		return {seg:Menu,result:(result),preSeg:"1HI7ALO4I2",outlet:"1HI7ALO4I3"};
	};
	ShowConent.jaxId="1HI7ALO4I2"
	ShowConent.url="ShowConent@"+agentURL
	
	segs["Menu"]=Menu=async function(input){//:1HI7ALO4I4
		let prompt=("Please confirm")||input;
		let items=[
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"设定已完成，开始撰写故事",code:0},
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"故事设定需要修改",code:1},
		];
		let result="";
		let item=null;
		let multi=false;
		
		[result,item]=await session.askUserRaw({type:"menu",prompt:prompt,multiSelect:multi,items:items});
		if(multi){
			return {seg:SaveInfo,result:(result),preSeg:"1HI7ALO4I4",outlet:"1HI79UHLT0"};
		}
		if(item.code===0){
			return {seg:SaveInfo,result:(result),preSeg:"1HI7ALO4I4",outlet:"1HI79UHLT0"};
		}
		if(item.code===1){
			return {seg:SEG1HI7ALO4H0,result:(result),preSeg:"1HI7ALO4I4",outlet:"1HI79UHLT1"};
		}
		return {result:result};
	
	};
	Menu.jaxId="1HI7ALO4I4"
	Menu.url="Menu@"+agentURL
	
	segs["SEG1HI7ALO4H0"]=SEG1HI7ALO4H0=async function(input){//:1HI7ALO4H0
		let result=input;
		let role="assistant";
		let content="请告诉我你想修改的设定";
		session.addChatText(role,content);
		return {seg:AskBG,result:(result),preSeg:"1HI7ALO4H0",outlet:"1HI7ALO4I5"};
	};
	SEG1HI7ALO4H0.jaxId="1HI7ALO4H0"
	SEG1HI7ALO4H0.url="SEG1HI7ALO4H0@"+agentURL
	
	segs["SaveInfo"]=SaveInfo=async function(input){//:1HI7ARUOF0
		let result=""
		/*#{1HI7ARUOF0Code*/
		globalContext.StorySegs=[];
		globalContext.PackedSegs=[];
		/*}#1HI7ARUOF0Code*/
		Object.assign(globalContext,{
			"StoryBackground":context.info,"StoryTitle":context.title
		});
		globalContext.emit("Changed");
		return {seg:StyleTip,result:(result),preSeg:"1HI7ARUOF0",outlet:"1HI7ARUOF1"};
	};
	SaveInfo.jaxId="1HI7ARUOF0"
	SaveInfo.url="SaveInfo@"+agentURL
	
	segs["DrawStyle"]=DrawStyle=async function(input){//:1HI9BUO620
		let prompt=("请设定这个文章的插图绘画风格，如果不需要插图，忽略。")||input;
		let placeholder=("");
		let text=("");
		let result="";
		/*#{1HI9BUO620PreCodes*/
		/*}#1HI9BUO620PreCodes*/
		result=await session.askChatInput({type:"input",prompt:prompt,placeholder:placeholder,text:text});
		session.addChatText("user",result);
		/*#{1HI9BUO620PostCodes*/
		globalContext.DrawStyle=result;
		/*}#1HI9BUO620PostCodes*/
		return {seg:CheckStyle,result:(result),preSeg:"1HI9BUO620",outlet:"1HI9BUO621"};
	};
	DrawStyle.jaxId="1HI9BUO620"
	DrawStyle.url="DrawStyle@"+agentURL
	
	segs["CheckStyle"]=CheckStyle=async function(input){//:1HI9BUO600
		if(!!input){
			return {seg:HasCover,result:(input),preSeg:"1HI9BUO600",outlet:"1HI9BUO622"};
		}
		return {seg:Done,result:(input),preSeg:"1HI9BUO600",outlet:"1HI9BUO623"};
	};
	CheckStyle.jaxId="1HI9BUO600"
	CheckStyle.url="CheckStyle@"+agentURL
	
	segs["HasCover"]=HasCover=async function(input){//:1HI9BQTUA0
		let prompt=("是否绘制一幅封面？")||input;
		let button1=("绘制封面")||"OK";
		let button2=("不用绘制")||"Cancel";
		let button3="";
		let result="";
		let value=0;
		[result,value]=await session.askUserRaw({type:"confirm",prompt:prompt,button1:button1,button2:button2,button3:button3});
		if(value===1){result=("Yes")||result;
		return {seg:CoverTip,result:(result),preSeg:"1HI9BQTUA0",outlet:"1HI9BK3T60"};}
		result=("Cancel")||result;
		return {seg:Done,result:(result),preSeg:"1HI9BQTUA0",outlet:"1HI9BK3T61"};
	
	};
	HasCover.jaxId="1HI9BQTUA0"
	HasCover.url="HasCover@"+agentURL
	
	segs["CoverInfo"]=CoverInfo=async function(input){//:1HI9BQTUA3
		let prompt=("请输入绘制封面的提示")||input;
		let placeholder=("");
		let text=(context.coverTip||"");
		let result="";
		result=await session.askChatInput({type:"input",prompt:prompt,placeholder:placeholder,text:text});
		session.addChatText("user",result);
		Object.assign(context,{
			"coverTip":result
		});
		return {seg:TryDraw,result:(result),preSeg:"1HI9BQTUA3",outlet:"1HI9BUO624"};
	};
	CoverInfo.jaxId="1HI9BQTUA3"
	CoverInfo.url="CoverInfo@"+agentURL
	
	segs["DrawCover"]=DrawCover=async function(input){//:1HI9BUO625
		let callVO=null;
		let result=input;
		let revisedPrompt="";
		let rsp=null;
		let dataURL=null;
		let mode="dall-e-3";
		let prompt=`
请按照用户的需求以风格：${globalContext.DrawStyle} 
为小说 “${globalContext.StoryTitle}” 绘制封面。
这部小说的背景资料是：
${globalContext.StoryBackground}
用户的需求是:
${input}
`;
		let size="1792x1024";
		let label="AI绘制的封面：";
		/*#{1HI9BUO625PreCodes*/
		/*}#1HI9BUO625PreCodes*/
		let seed="";
		callVO={model:mode,prompt:prompt,size:size};
		if(seed!==undefined){callVO.seed=seed;}
		rsp=await session.sysCall("AIDraw",callVO,true,100000);
		if(rsp.code===200){
			result=rsp.img;
			revisedPrompt=rsp.revised_prompt;
			dataURL=`data:image/jpeg;base64,${result}`
			result=dataURL;
		
		}else{
			throw Error("Error "+rsp.code+": "+rsp.info||"")
		}
		/*#{1HI9BUO625PostCodes*/
		/*}#1HI9BUO625PostCodes*/
		return {seg:Resize,result:(result),preSeg:"1HI9BUO625",outlet:"1HI9BUO626"};
	};
	DrawCover.jaxId="1HI9BUO625"
	DrawCover.url="DrawCover@"+agentURL
	
	segs["CoverOK"]=CoverOK=async function(input){//:1HI9BQUAV3
		let prompt=("使用这个封面？")||input;
		let button1=("使用")||"OK";
		let button2=("重新绘制")||"Cancel";
		let button3="";
		let result="";
		let value=0;
		/*#{1HI9BQUAV3PreCodes*/
		context.cover=input;
		/*}#1HI9BQUAV3PreCodes*/
		[result,value]=await session.askUserRaw({type:"confirm",prompt:prompt,button1:button1,button2:button2,button3:button3});
		/*#{1HI9BQUAV3PostCodes*/
		/*}#1HI9BQUAV3PostCodes*/
		if(value===1){result=("Yes")||result;
		return {seg:SaveCover,result:(result),preSeg:"1HI9BQUAV3",outlet:"1HI9BQUAV6"};}
		result=("Cancel")||result;
		return {seg:CoverInfo,result:(result),preSeg:"1HI9BQUAV3",outlet:"1HI9BQUAV7"};
	
	};
	CoverOK.jaxId="1HI9BQUAV3"
	CoverOK.url="CoverOK@"+agentURL
	
	segs["StyleTip"]=StyleTip=async function(input){//:1HI9D6MAA0
		let result=input;
		let role="assistant";
		let content="请为这部作品的插画指定一个风格";
		session.addChatText(role,content);
		return {seg:DrawStyle,result:(result),preSeg:"1HI9D6MAA0",outlet:"1HI9D6MAA1"};
	};
	StyleTip.jaxId="1HI9D6MAA0"
	StyleTip.url="StyleTip@"+agentURL
	
	segs["CoverTip"]=CoverTip=async function(input){//:1HI9D6MAA2
		let result=input;
		let role="assistant";
		let content="请输入绘制封面的指导";
		session.addChatText(role,content);
		return {seg:CoverInfo,result:(result),preSeg:"1HI9D6MAA2",outlet:"1HI9D6MAA3"};
	};
	CoverTip.jaxId="1HI9D6MAA2"
	CoverTip.url="CoverTip@"+agentURL
	
	segs["SaveCover"]=SaveCover=async function(input){//:1HI9F6Q440
		let result=""
		/*#{1HI9F6Q440Code*/
		globalContext.StoryCover=context.cover;
		/*}#1HI9F6Q440Code*/
		return {seg:Done,result:(result),preSeg:"1HI9F6Q440",outlet:"1HI9F6Q441"};
	};
	SaveCover.jaxId="1HI9F6Q440"
	SaveCover.url="SaveCover@"+agentURL
	
	segs["Resize"]=Resize=async function(input){//:1HI9G8P2O0
		let result=input;
		let role="assistant";
		let content="AI 生成的封面";
		/*#{1HI9G8P2O0PreCodes*/
		/*}#1HI9G8P2O0PreCodes*/
		/*#{1HI9G8P2O0PostCodes*/
		/*}#1HI9G8P2O0PostCodes*/
		//Limit size:
		let callback =null;
		let pms=new Promise((resolve)=>{callback=resolve;});
		{
			
			let maxSize =512;
			let img = new Image();
			img.crossOrigin = "Anonymous";
			img.src = input;
			img.onload = function () {
				let imgW = img.width;
				let imgH = img.height;
				let scale = maxSize/(imgW>imgH?imgW:imgH);
				if(scale<1){
					let canvas = document.createElement("canvas");
					let context = canvas.getContext("2d");
					canvas.width = Math.floor(img.width*scale);
					canvas.height = Math.floor(img.height*scale);
					context.drawImage(img, 0, 0,canvas.width,canvas.height);
					result = canvas.toDataURL("image/jpeg");
				}
				callback();
			};
		}
		await pms;
		session.addChatText(role,content,{image:result});
		return {seg:CoverOK,result:(result),preSeg:"1HI9G8P2O0",outlet:"1HI9G8P2O1"};
	};
	Resize.jaxId="1HI9G8P2O0"
	Resize.url="Resize@"+agentURL
	
	segs["TryDraw"]=TryDraw=async function(input){//:1HIDBO3HL0
		let result=input;
		/*#{1HIDBO3HL0Code*/
		/*}#1HIDBO3HL0Code*/
		return {seg:DrawCover,result:(result),preSeg:"1HIDBO3HL0",outlet:"1HIDBO3HL1",catchSeg:NotityError,catchlet:"1HIDBO3HL2"};
	};
	TryDraw.jaxId="1HIDBO3HL0"
	TryDraw.url="TryDraw@"+agentURL
	
	segs["NotityError"]=NotityError=async function(input){//:1HIDBO3HL3
		let result=input;
		let role="assistant";
		let content="绘制封面出了点问题，我们先专注写内容吧";
		session.addChatText(role,content);
		return {seg:Done,result:(result),preSeg:"1HIDBO3HL3",outlet:"1HIDBO3HL4"};
	};
	NotityError.jaxId="1HIDBO3HL3"
	NotityError.url="NotityError@"+agentURL
	
	agent={
		isAIAgent:true,
		session:session,
		name:"NewStory",
		url:agentURL,
		autoStart:true,
		jaxId:"1HI79QI6P0",
		context:context,
		livingSeg:null,
		execChat:async function(input){
			let result;
			/*#{1HI79QI6P0PreEntry*/
			/*}#1HI79QI6P0PreEntry*/
			result={seg:Start,"input":input};
			/*#{1HI79QI6P0PostEntry*/
			/*}#1HI79QI6P0PostEntry*/
			return result;
		},
		/*#{1HI79QI6P0MoreAgentAttrs*/
		/*}#1HI79QI6P0MoreAgentAttrs*/
	};
	/*#{1HI79QI6P0PostAgent*/
	/*}#1HI79QI6P0PostAgent*/
	return agent;
};
/*#{1HI79QI6P0ExCodes*/
/*}#1HI79QI6P0ExCodes*/


export default NewStory;
export{NewStory};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "DocAIAgent",
//	"jaxId": "1HI79QI6P0",
//	"editVersion": 37,
//	"attrs": {
//		"editObjs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI79QI6P1",
//			"editVersion": 2,
//			"attrs": {
//				"NewStory": {
//					"type": "objclass",
//					"def": "ObjClass",
//					"jaxId": "1HI79QI6Q0",
//					"editVersion": 34,
//					"attrs": {
//						"constructArgs": {
//							"type": "object",
//							"jaxId": "1HI79QI6Q1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"superClass": "",
//						"properties": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI79QI6Q2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"functions": {
//							"type": "object",
//							"def": "Functions",
//							"jaxId": "1HI79QI6Q3",
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
//			"jaxId": "1HI79QI6P2",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"segs": {
//			"type": "array",
//			"attrs": [
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HI7BI50J2",
//					"editVersion": 100,
//					"attrs": {
//						"id": "Start",
//						"label": "New AI Seg",
//						"x": "160",
//						"y": "380",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7BI50L2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7BI50L3",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "请给新小说取一个名字",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7BI50J3",
//							"editVersion": 50,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7BI50J0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askChat",
//					"jaxId": "1HI7BI50J0",
//					"editVersion": 106,
//					"attrs": {
//						"id": "AskName",
//						"label": "New AI Seg",
//						"x": "350",
//						"y": "380",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7BI50L0",
//							"editVersion": 14,
//							"attrs": {
//								"title": {
//									"type": "string",
//									"valText": "#result"
//								}
//							}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7BI50L1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"prompt": "Please input",
//						"placeholder": "",
//						"text": "",
//						"file": "false",
//						"showText": "true",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7BI50J1",
//							"editVersion": 49,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7ALO4H1"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HI7ALO4H1",
//					"editVersion": 138,
//					"attrs": {
//						"id": "StartInfo",
//						"label": "New AI Seg",
//						"x": "580",
//						"y": "380",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ALO4K0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ALO4K1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "\n## 让我们开始编写故事吧！\n首先请告诉我你想写的故事的大概内容，最好包括：\n- 故事发生的时间\n- 故事发生的地点\n- 故事中涉及的主要人物\n- 故事的大致情节\n你也可以提供更多的信息，比如：\n",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7ALO4H2",
//							"editVersion": 66,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7ALO4H3"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askChat",
//					"jaxId": "1HI7ALO4H3",
//					"editVersion": 133,
//					"attrs": {
//						"id": "AskBG",
//						"label": "New AI Seg",
//						"x": "800",
//						"y": "380",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ALO4K2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ALO4K3",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "Please input",
//						"placeholder": "",
//						"text": "",
//						"file": "false",
//						"showText": "true",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7ALO4H4",
//							"editVersion": 67,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7ALO4I0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "callLLM",
//					"jaxId": "1HI7ALO4I0",
//					"editVersion": 803,
//					"attrs": {
//						"id": "GenBackground",
//						"label": "New AI Seg",
//						"x": "1020",
//						"y": "380",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ALO4K4",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ALO4K5",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "执行一次LLM调用。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"mode": "#globalContext.LLMMode||\"gpt-4-1106-preview\"",
//						"system": "#`\n你是一个通过跟用户聊天，构建一个小说故事背景资料的助理\n请通过和用户聊天完善当前的小说背景资料设定。\n当前的小说背景资料：\n${context.info?context.info:\"暂无\"}\n`",
//						"temperature": "0.60",
//						"maxToken": "2000",
//						"topP": "1",
//						"fqcP": "0",
//						"prcP": "0",
//						"messages": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "object",
//									"def": "AIPresetMsg",
//									"jaxId": "1HI7ALO4K6",
//									"editVersion": 8,
//									"attrs": {
//										"role": "Assistant",
//										"content": "请告诉我这个故事的大致背景"
//									}
//								}
//							]
//						},
//						"prompt": "#`用户的输入：\n${input}\n请根据用户的输入编写/完善当前小说设定。\n你的输出应该只包含小说设定信息，不要包括其它的聊天内容\n`",
//						"seed": "",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7ALO4I1",
//							"editVersion": 65,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7ALO4I2"
//						},
//						"secret": "false",
//						"allowCheat": "true",
//						"GPTCheats": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "object",
//									"def": "GPTCheat",
//									"jaxId": "1HI839GTG0",
//									"editVersion": 24,
//									"attrs": {
//										"prompt": "80年代的北京机关大院里，男生和女生相识的故事",
//										"reply": "小说背景设定：\n\n时间：故事发生在1980年代，这是一个重要的历史转折点，中国开始走向改革开放。\n\n地点：故事的主要场景设定在北京，特别是一个充满生活气息的机关大院。\n\n角色：主角是大院里的一对男生和女生，他们在这个大院里相识，共同成长。\n\n社会背景：那个时期的中国正经历着巨大的变革，人们的思想观念和生活方式都在发生着翻天覆地的变化。大院里的生活则是这个时代变化的一个缩影。\n\n具体情境：在这个大院里，男生和女生之间的互动和感情变化，将推动故事发展"
//									}
//								}
//							]
//						},
//						"shareChatName": "",
//						"keepChat": "No",
//						"clearChat": "2",
//						"apiFiles": {
//							"type": "array",
//							"def": "FileArray",
//							"attrs": []
//						},
//						"parallelFunction": "false",
//						"responseFormat": "text"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HI7ALO4I2",
//					"editVersion": 147,
//					"attrs": {
//						"id": "ShowConent",
//						"label": "New AI Seg",
//						"x": "1280",
//						"y": "380",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ALO4K7",
//							"editVersion": 8,
//							"attrs": {
//								"info": {
//									"type": "string",
//									"valText": "#input"
//								}
//							}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ALO4K8",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "#input",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7ALO4I3",
//							"editVersion": 65,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7ALO4I4"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askMenu",
//					"jaxId": "1HI7ALO4I4",
//					"editVersion": 125,
//					"attrs": {
//						"id": "Menu",
//						"label": "New AI Seg",
//						"x": "1520",
//						"y": "380",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ALO4K9",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ALO4K10",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "Please confirm",
//						"multi": "false",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI79UHLT0",
//									"editVersion": 73,
//									"attrs": {
//										"id": "StartWrite",
//										"text": "设定已完成，开始撰写故事",
//										"result": "",
//										"codes": "false"
//									},
//									"linkedSeg": "1HI7ARUOF0"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI79UHLT1",
//									"editVersion": 47,
//									"attrs": {
//										"id": "Modify",
//										"text": "故事设定需要修改",
//										"result": "",
//										"codes": "false"
//									},
//									"linkedSeg": "1HI7ALO4H0"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HI7ALO4K12",
//					"editVersion": 86,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1840",
//						"y": "530",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7ALO4K13",
//							"editVersion": 39,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7ALO4K14"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HI7ALO4K14",
//					"editVersion": 82,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "840",
//						"y": "530",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7ALO4K15",
//							"editVersion": 39,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7ALO4H3"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HI7ALO4H0",
//					"editVersion": 99,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1740",
//						"y": "420",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ALO4K16",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ALO4K17",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "请告诉我你想修改的设定",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7ALO4I5",
//							"editVersion": 39,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7ALO4K12"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HI7ARUOF0",
//					"editVersion": 119,
//					"attrs": {
//						"id": "SaveInfo",
//						"label": "New AI Seg",
//						"x": "1730",
//						"y": "280",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ARUOH0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7ARUOH1",
//							"editVersion": 20,
//							"attrs": {
//								"StoryBackground": {
//									"type": "string",
//									"valText": "#context.info"
//								},
//								"StoryTitle": {
//									"type": "string",
//									"valText": "#context.title"
//								}
//							}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7ARUOF1",
//							"editVersion": 43,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9D6MAA0"
//						},
//						"result": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askChat",
//					"jaxId": "1HI9BUO620",
//					"editVersion": 84,
//					"attrs": {
//						"id": "DrawStyle",
//						"label": "New AI Seg",
//						"x": "2150",
//						"y": "280",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9BUO660",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9BUO661",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"prompt": "请设定这个文章的插图绘画风格，如果不需要插图，忽略。",
//						"placeholder": "",
//						"text": "",
//						"file": "false",
//						"showText": "true",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9BUO621",
//							"editVersion": 18,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9BUO600"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "brunch",
//					"jaxId": "1HI9BUO600",
//					"editVersion": 68,
//					"attrs": {
//						"id": "CheckStyle",
//						"label": "New AI Seg",
//						"x": "2370",
//						"y": "280",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9BUO662",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9BUO663",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9BUO623",
//							"editVersion": 19,
//							"attrs": {
//								"id": "NoStyle",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9CBT7H0"
//						},
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIConditionOutlet",
//									"jaxId": "1HI9BUO622",
//									"editVersion": 36,
//									"attrs": {
//										"id": "HasStyle",
//										"condition": "!!input",
//										"codes": "false",
//										"ouput": "",
//										"desc": "条件输出节点。"
//									},
//									"linkedSeg": "1HI9BQTUA0"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askConfirm",
//					"jaxId": "1HI9BQTUA0",
//					"editVersion": 74,
//					"attrs": {
//						"id": "HasCover",
//						"label": "New AI Seg",
//						"x": "2610",
//						"y": "340",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9BQTUA1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9BQTUA2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "是否绘制一幅封面？",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI9BK3T60",
//									"editVersion": 40,
//									"attrs": {
//										"id": "Yes",
//										"text": "绘制封面",
//										"result": "Yes",
//										"codes": "false"
//									},
//									"linkedSeg": "1HI9D6MAA2"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI9BK3T61",
//									"editVersion": 33,
//									"attrs": {
//										"id": "No",
//										"text": "不用绘制",
//										"result": "Cancel",
//										"codes": "false"
//									},
//									"linkedSeg": "1HI9CD8KO0"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askChat",
//					"jaxId": "1HI9BQTUA3",
//					"editVersion": 115,
//					"attrs": {
//						"id": "CoverInfo",
//						"label": "New AI Seg",
//						"x": "3010",
//						"y": "250",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9BUO664",
//							"editVersion": 14,
//							"attrs": {
//								"coverTip": {
//									"type": "string",
//									"valText": "#result"
//								}
//							}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9BUO665",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "请输入绘制封面的提示",
//						"placeholder": "",
//						"text": "#context.coverTip||\"\"",
//						"file": "false",
//						"showText": "true",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9BUO624",
//							"editVersion": 19,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIDBO3HL0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "aiDraw",
//					"jaxId": "1HI9BUO625",
//					"editVersion": 149,
//					"attrs": {
//						"id": "DrawCover",
//						"label": "New AI Seg",
//						"x": "3440",
//						"y": "200",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9BUO666",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9BUO667",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"prompt": "#`\n请按照用户的需求以风格：${globalContext.DrawStyle} \n为小说 “${globalContext.StoryTitle}” 绘制封面。\n这部小说的背景资料是：\n${globalContext.StoryBackground}\n用户的需求是:\n${input}\n`",
//						"seed": "",
//						"mode": "DALL-E 3",
//						"showImage": "false",
//						"size": "1792x1024",
//						"imgLabel": "AI绘制的封面：",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9BUO626",
//							"editVersion": 19,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9G8P2O0"
//						},
//						"method": "Draw",
//						"image": "",
//						"mask": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askConfirm",
//					"jaxId": "1HI9BQUAV3",
//					"editVersion": 133,
//					"attrs": {
//						"id": "CoverOK",
//						"label": "New AI Seg",
//						"x": "3900",
//						"y": "250",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9BQUAV4",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9BQUAV5",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"prompt": "使用这个封面？",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI9BQUAV6",
//									"editVersion": 50,
//									"attrs": {
//										"id": "Yes",
//										"text": "使用",
//										"result": "Yes",
//										"codes": "true"
//									},
//									"linkedSeg": "1HI9F6Q440"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI9BQUAV7",
//									"editVersion": 40,
//									"attrs": {
//										"id": "No",
//										"text": "重新绘制",
//										"result": "Cancel",
//										"codes": "false"
//									},
//									"linkedSeg": "1HI9BUO668"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HI9BUO668",
//					"editVersion": 77,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "4020",
//						"y": "350",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9BUO669",
//							"editVersion": 14,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9BUO6610"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HI9BUO6610",
//					"editVersion": 61,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "3040",
//						"y": "350",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9BUO6611",
//							"editVersion": 14,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9BQTUA3"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HI9C9DEQ0",
//					"editVersion": 204,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "4310",
//						"y": "160",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connectorL",
//					"jaxId": "1HI9CBT7H0",
//					"editVersion": 53,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "2610",
//						"y": "160",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9CBT7H1",
//							"editVersion": 13,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9C9DEQ0"
//						},
//						"dir": "L2R"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connectorL",
//					"jaxId": "1HI9CD8KO0",
//					"editVersion": 57,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "2800",
//						"y": "440",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9CD8KO1",
//							"editVersion": 13,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9CD8KO2"
//						},
//						"dir": "L2R"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connectorL",
//					"jaxId": "1HI9CD8KO2",
//					"editVersion": 85,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "4220",
//						"y": "440",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9CD8KO3",
//							"editVersion": 13,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9C9DEQ0"
//						},
//						"dir": "L2R"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HI9D6MAA0",
//					"editVersion": 68,
//					"attrs": {
//						"id": "StyleTip",
//						"label": "New AI Seg",
//						"x": "1940",
//						"y": "280",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9D6MAE0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9D6MAE1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "请为这部作品的插画指定一个风格",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9D6MAA1",
//							"editVersion": 16,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9BUO620"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HI9D6MAA2",
//					"editVersion": 54,
//					"attrs": {
//						"id": "CoverTip",
//						"label": "New AI Seg",
//						"x": "2790",
//						"y": "250",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9D6MAE2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9D6MAE3",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "请输入绘制封面的指导",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9D6MAA3",
//							"editVersion": 16,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9BQTUA3"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HI9F6Q440",
//					"editVersion": 66,
//					"attrs": {
//						"id": "SaveCover",
//						"label": "New AI Seg",
//						"x": "4090",
//						"y": "200",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9F6Q490",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9F6Q491",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9F6Q441",
//							"editVersion": 9,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9C9DEQ0"
//						},
//						"result": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "image",
//					"jaxId": "1HI9G8P2O0",
//					"editVersion": 84,
//					"attrs": {
//						"id": "Resize",
//						"label": "New AI Seg",
//						"x": "3700",
//						"y": "250",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9G8P310",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9G8P311",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"text": "AI 生成的封面",
//						"image": "#input",
//						"role": "Assistant",
//						"sizeLimit": "512",
//						"format": "JEPG",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9G8P2O1",
//							"editVersion": 8,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9BQUAV3"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "tryCatch",
//					"jaxId": "1HIDBO3HL0",
//					"editVersion": 39,
//					"attrs": {
//						"id": "TryDraw",
//						"label": "New AI Seg",
//						"x": "3230",
//						"y": "250",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIDBO3HQ0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIDBO3HQ1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIDBO3HL1",
//							"editVersion": 5,
//							"attrs": {
//								"id": "Try",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9BUO625"
//						},
//						"catchlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIDBO3HL2",
//							"editVersion": 5,
//							"attrs": {
//								"id": "Catch",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIDBO3HL3"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIDBO3HL3",
//					"editVersion": 47,
//					"attrs": {
//						"id": "NotityError",
//						"label": "New AI Seg",
//						"x": "3440",
//						"y": "300",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIDBO3HQ2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIDBO3HQ3",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "绘制封面出了点问题，我们先专注写内容吧",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIDBO3HL4",
//							"editVersion": 5,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIDBMP9G0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIDBMP9G0",
//					"editVersion": 220,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "3660",
//						"y": "300",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				}
//			]
//		},
//		"entry": "Start",
//		"autoStart": "true",
//		"debug": "true",
//		"localVars": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI79QI6P3",
//			"editVersion": 6,
//			"attrs": {}
//		},
//		"context": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI79QI6P4",
//			"editVersion": 8,
//			"attrs": {
//				"info": {
//					"type": "string",
//					"valText": ""
//				},
//				"title": {
//					"type": "string",
//					"valText": ""
//				}
//			}
//		},
//		"globalMockup": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI79QI6P5",
//			"editVersion": 24,
//			"attrs": {
//				"StoryTitle": {
//					"type": "string",
//					"valText": ""
//				},
//				"StoryBackground": {
//					"type": "string",
//					"valText": ""
//				},
//				"StorySegs": {
//					"type": "auto",
//					"valText": "[]"
//				},
//				"PackedSegs": {
//					"type": "auto",
//					"valText": "[]"
//				}
//			}
//		},
//		"desc": "这是一个AI代理。",
//		"exportAPI": "false",
//		"apiArgs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI79QI6P6",
//			"editVersion": 0,
//			"attrs": {}
//		}
//	}
//}