//Auto genterated by Cody
import {$P,VFACT,callAfter} from "/@vfact";
import pathLib from "/@path";
import inherits from "/@inherits";
import Base64 from "/@tabos/utils/base64.js";
import {trimJSON} from "/@aichat/utils.js";
/*#{1HI7BOT5S0MoreImports*/
import config from "./config.js";
/*}#1HI7BOT5S0MoreImports*/
const agentURL=(new URL(import.meta.url)).pathname;
const basePath=pathLib.dirname(agentURL);
const $ln=VFACT.lanCode||"EN";
/*#{1HI7BOT5S0StartDoc*/
const app=VFACT.app;
/*}#1HI7BOT5S0StartDoc*/
//----------------------------------------------------------------------------
let WriteSeg=async function(session){
	let context,globalContext;
	let self;
	let Start,StartInfo,Ask,Compress,GenText,ShowReuslt,Choose,MergeSotry,AskPic,PicTip,DrawPic,Resize,CheckPic,KeepPic,PicInfo,NextAction,ShowError,Done;
	/*#{1HI7BOT5S0LocalVals*/
	let PACK_SEG_NUM=config.PACK_SEG_NUM;
	/*}#1HI7BOT5S0LocalVals*/
	
	/*#{1HI7BOT5S0PreContext*/
	/*}#1HI7BOT5S0PreContext*/
	globalContext=session.globalContext;
	context={};
	context=VFACT.flexState(context);
	/*#{1HI7BOT5S0PostContext*/
	/*}#1HI7BOT5S0PostContext*/
	let agent,segs={};
	segs["Start"]=Start=async function(input){//:1HIEO4OMC0
		let result=input;
		/*#{1HIEO4OMC0Code*/
		/*}#1HIEO4OMC0Code*/
		return {seg:Compress,result:(result),preSeg:"1HIEO4OMC0",outlet:"1HIEO4OMC1",catchSeg:ShowError,catchlet:"1HIEO4OMC2"};
	};
	Start.jaxId="1HIEO4OMC0"
	Start.url="Start@"+agentURL
	
	segs["StartInfo"]=StartInfo=async function(input){//:1HI7C946I2
		let result=input;
		let role="assistant";
		let content=(globalContext.StorySegs&&globalContext.StorySegs.length>0)?`请给出继续撰写内容的提示`:`这篇文章如何起头？请给出文章起始段落的指引信息`;
		/*#{1HI7C946I2PreCodes*/
		context.image=null;
		context.seg=null;
		/*}#1HI7C946I2PreCodes*/
		session.addChatText(role,content);
		/*#{1HI7C946I2PostCodes*/
		/*}#1HI7C946I2PostCodes*/
		return {seg:Ask,result:(result),preSeg:"1HI7C946I2",outlet:"1HI7C946I3"};
	};
	StartInfo.jaxId="1HI7C946I2"
	StartInfo.url="StartInfo@"+agentURL
	
	segs["Ask"]=Ask=async function(input){//:1HI7C946I0
		let prompt=("请输入新的一段内容的编写提示")||input;
		let placeholder=("");
		let text=("");
		let result="";
		result=await session.askChatInput({type:"input",prompt:prompt,placeholder:placeholder,text:text});
		session.addChatText("user",result);
		return {seg:GenText,result:(result),preSeg:"1HI7C946I0",outlet:"1HI7C946I4"};
	};
	Ask.jaxId="1HI7C946I0"
	Ask.url="Ask@"+agentURL
	
	segs["Compress"]=Compress=async function(input){//:1HI7C946J0
		let result;
		let sourcePath=pathLib.join(basePath,"./mem.js");
		result= await session.pipeChat(sourcePath,input,false);
		return {seg:StartInfo,result:(result),preSeg:"1HI7C946J0",outlet:"1HI7C946J1"};
	};
	Compress.jaxId="1HI7C946J0"
	Compress.url="Compress@"+agentURL
	
	segs["GenText"]=GenText=async function(input){//:1HI7C946I1
		let prompt;
		let result=null;
		/*#{1HI7C946I1Input*/
		let curSegs=globalContext.StorySegs;
		let pkSegs=globalContext.PackedSegs;
		let prefix;
		let content,cnt,list,seg;
		cnt=pkSegs.length;
		prefix=pkSegs.join("\n");
		//考虑插图的情况。
		content="";
		list=curSegs.slice(cnt*PACK_SEG_NUM);
		for(seg of list){
			if(typeof(seg)==="string"){
				content+=seg+"\n\n";
			}else if(seg.text){
				content+=seg.text+"\n\n";
			}
		}
		content=content.substring(0,content.length-2);
		/*}#1HI7C946I1Input*/
		
		let opts={
			mode:globalContext.LLMMode||"gpt-4-1106-preview",
			maxToken:2500,
			temperature:0.8,
			topP:1,
			fqcP:0,
			prcP:0,
			secret:false,
			responseFormat:"json_object"
		};
		let chatMem=GenText.messages
		let seed="";
		if(seed!==undefined){opts.seed=seed;}
		let messages=[
			{role:"system",content:`
你是一个通过与用户对话，编写小说内容的AI
当前小说名称："${globalContext.StoryTitle}"
当前小说背景设定：
\`\`\`
${globalContext.StoryBackground}
\`\`\`
当前小说已撰写内容：
\`\`\`
前文概要：${prefix}
${content}
\`\`\`

根据用户指导编写小说的下一段文字。
请生成三段备选内容，用JSON格式输出，例如：
\`\`\`
{
	"choices":[
    	"第1备选文字内容",
    	"第2备选文字内容",
    	"第3备选文字内容"
    ]
}
\`\`\`
`},
		];
		/*#{1HI7C946I1PrePrompt*/
		/*}#1HI7C946I1PrePrompt*/
		prompt=`
用户指导：
${input}
请根据用户指导，输出JSON格式的三个备选内容。
`;
		if(prompt!==null){
			messages.push({role:"user",content:prompt});
		}
		/*#{1HI7C946I1PreCall*/
		/*}#1HI7C946I1PreCall*/
		result=GenText.cheats[input];
		if(!result){
			result=(result===undefined)?(await session.callSegLLM("GenText@"+agentURL,opts,messages,true)):result;
		
		}
		result=trimJSON(result);
		/*#{1HI7C946I1PostCall*/
		context.choices=result.choices;
		/*}#1HI7C946I1PostCall*/
		return {seg:ShowReuslt,result:(result),preSeg:"1HI7C946I1",outlet:"1HI7C946J2"};
	};
	GenText.jaxId="1HI7C946I1"
	GenText.url="GenText@"+agentURL
	GenText.cheats={
		"相遇":"{\n\t\"choices\":[\n    \t\"Choice1\",\n    \t\"Choice2\",\n    \t\"Choice3\"\n    ]\n}",
		"两人在放学路上相遇的故事，男生抬头看云彩，女生以为他流鼻血了":"{\n\t\"choices\":[\n\t    \"夕阳如血，微风送爽。学校的铃声刚刚响过，放学的孩子们欢声笑语地冲出教室，大院的巷子里顿时热闹起来。男生慢吞吞地走在路上，头顶的云彩像棉花糖一样软绵绵的，他忍不住仰起脸去看。正巧，女生从对面走来，看到他仰头的样子，顿时一愣，急忙跑过去，关切地说：'你怎么了，流鼻血了吗？'\",\n        \"放学时分，男生像往常一样独自一人踱步回家，一路上他的眼睛却不是注视着脚下的路，而是迷恋于头顶变幻的云朵。女生刚好提着书包匆匆从身后赶来，看到他不断抬头，脸上露出担忧的神色。她轻轻拍了拍男生的肩膀，戏谑道：'看什么呢，是不是觉得自己是个有思想的诗人啊？'女生并未察觉到自己的误解，而男生转过头，露出一丝无奈的微笑。\",\n        \"走在回家的路上，男生的目光无意中被高空飘荡的云朵所吸引，他似乎在那形状不定的白云中看到了某种奇妙的图案。女生正好从旁边走过，见到他那专注的模样，停下脚步好奇地凑过去。当她发现男生的眼神并不在近处，而是投向远方的天空，误以为他眼角的光是因为流鼻血，便急忙掏出手绢说：'别看了，快用这个擦擦，我刚刚洗过很干净。'男生回过神来，愣了愣，然后笑着摇摇头，解释是在看云。\"\n    ]\n}"
	};
	
	segs["ShowReuslt"]=ShowReuslt=async function(input){//:1HI92SDG30
		let result=input;
		let role="assistant";
		let content=input;
		/*#{1HI92SDG30PreCodes*/
		content=`**选择1**:  \n${input.choices[0]}  \n\n**选择2**:  \n${input.choices[1]}  \n\n**选择3**:  \n${input.choices[2]}`;
		/*}#1HI92SDG30PreCodes*/
		session.addChatText(role,content);
		/*#{1HI92SDG30PostCodes*/
		/*}#1HI92SDG30PostCodes*/
		return {seg:Choose,result:(result),preSeg:"1HI92SDG30",outlet:"1HI92SDG31"};
	};
	ShowReuslt.jaxId="1HI92SDG30"
	ShowReuslt.url="ShowReuslt@"+agentURL
	
	segs["Choose"]=Choose=async function(input){//:1HI7C946J3
		let prompt=("哪一段更符合你的想法？")||input;
		let items=[
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"选择1",code:0},
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"选择2",code:1},
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"选择3",code:2},
			{icon:"/~/-tabos/shared/assets/undo.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:(($ln==="CN")?("都不满意，再写一次"):("Not satisfied with any, write again")),code:3},
		];
		let result="";
		let item=null;
		let multi=false;
		
		[result,item]=await session.askUserRaw({type:"menu",prompt:prompt,multiSelect:multi,items:items});
		if(multi){
			return {seg:MergeSotry,result:(result),preSeg:"1HI7C946J3",outlet:"1HI7C289S0"};
		}
		if(item.code===0){
			/*#{1HI7C289S0*/
			result=context.choices[0];
			/*}#1HI7C289S0*/
			return {seg:MergeSotry,result:(result),preSeg:"1HI7C946J3",outlet:"1HI7C289S0"};
		}
		if(item.code===1){
			/*#{1HI7C289S1*/
			result=context.choices[1];
			/*}#1HI7C289S1*/
			return {seg:MergeSotry,result:(result),preSeg:"1HI7C946J3",outlet:"1HI7C289S1"};
		}
		if(item.code===2){
			/*#{1HI7C289S2*/
			result=context.choices[2];
			/*}#1HI7C289S2*/
			return {seg:MergeSotry,result:(result),preSeg:"1HI7C946J3",outlet:"1HI7C289S2"};
		}
		if(item.code===3){
			return {seg:Ask,result:(result),preSeg:"1HI7C946J3",outlet:"1HI7C946J4"};
		}
		return {result:result};
	
	};
	Choose.jaxId="1HI7C946J3"
	Choose.url="Choose@"+agentURL
	
	segs["MergeSotry"]=MergeSotry=async function(input){//:1HI7C946J5
		let result=""
		/*#{1HI7C946J5Code*/
		let seg;
		seg=context.seg;
		if(seg){
			seg.text+="\n"+input;
		}else{
			seg={text:input};
			if(context.image){
				seg.image=context.image;
			}
			context.seg=seg;
			globalContext.StorySegs.push(seg);
		}
		app.emit("StoryUpdate",globalContext);
		/*}#1HI7C946J5Code*/
		return {seg:NextAction,result:(result),preSeg:"1HI7C946J5",outlet:"1HI7C946J6"};
	};
	MergeSotry.jaxId="1HI7C946J5"
	MergeSotry.url="MergeSotry@"+agentURL
	
	segs["AskPic"]=AskPic=async function(input){//:1HI9H0H6V0
		let prompt=("是否在此处添加插画？")||input;
		let button1=("Yes")||"OK";
		let button2=("No")||"Cancel";
		let button3="";
		let result="";
		let value=0;
		[result,value]=await session.askUserRaw({type:"confirm",prompt:prompt,button1:button1,button2:button2,button3:button3});
		if(value===1){result=("OK")||result;
		return {seg:PicTip,result:(result),preSeg:"1HI9H0H6V0",outlet:"1HI9GHT4L0"};}
		result=("Cancel")||result;
		return {result:result};
	
	};
	AskPic.jaxId="1HI9H0H6V0"
	AskPic.url="AskPic@"+agentURL
	
	segs["PicTip"]=PicTip=async function(input){//:1HI9H0H6V1
		let result=input;
		let role="assistant";
		let content="请输入插画绘制的提示";
		session.addChatText(role,content);
		return {seg:PicInfo,result:(result),preSeg:"1HI9H0H6V1",outlet:"1HI9H0H6V2"};
	};
	PicTip.jaxId="1HI9H0H6V1"
	PicTip.url="PicTip@"+agentURL
	
	segs["DrawPic"]=DrawPic=async function(input){//:1HI9H0H6V3
		let callVO=null;
		let result=input;
		let revisedPrompt="";
		let rsp=null;
		let dataURL=null;
		let mode="dall-e-3";
		let prompt=`
为小说 “${globalContext.StoryTitle}” 绘制一幅插画:
使用风格：
${globalContext.DrawStyle},

故事背景：
${globalContext.StoryBackground},

参考情节：
${globalContext.StorySegs[globalContext.StorySegs.length-1].text},

${input?("并按照用户的指引："+input):""}
`;
		let size="1792x1024";
		let label="AI Picture:";
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
		return {seg:Resize,result:(result),preSeg:"1HI9H0H6V3",outlet:"1HI9H0H6V4"};
	};
	DrawPic.jaxId="1HI9H0H6V3"
	DrawPic.url="DrawPic@"+agentURL
	
	segs["Resize"]=Resize=async function(input){//:1HI9H0H6V5
		let result=input;
		let role="assistant";
		let content="AI绘制的插画";
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
		return {seg:CheckPic,result:(result),preSeg:"1HI9H0H6V5",outlet:"1HI9H0H6V6"};
	};
	Resize.jaxId="1HI9H0H6V5"
	Resize.url="Resize@"+agentURL
	
	segs["CheckPic"]=CheckPic=async function(input){//:1HI9H0H6V7
		let prompt=("是否使用这幅插画")||input;
		let button1=("使用")||"OK";
		let button2=("重画")||"Cancel";
		let button3=("放弃插画")||"";
		let result="";
		let value=0;
		/*#{1HI9H0H6V7PreCodes*/
		context.image=input;
		/*}#1HI9H0H6V7PreCodes*/
		[result,value]=await session.askUserRaw({type:"confirm",prompt:prompt,button1:button1,button2:button2,button3:button3});
		/*#{1HI9H0H6V7PostCodes*/
		/*}#1HI9H0H6V7PostCodes*/
		if(value===1){result=(input)||result;
		return {seg:KeepPic,result:(result),preSeg:"1HI9H0H6V7",outlet:"1HI9GO80C0"};}
		if(value===2){result=("")||result;
		return {result:result};}
		result=("Cancel")||result;
		return {seg:PicTip,result:(result),preSeg:"1HI9H0H6V7",outlet:"1HI9GO80C1"};
	
	};
	CheckPic.jaxId="1HI9H0H6V7"
	CheckPic.url="CheckPic@"+agentURL
	
	segs["KeepPic"]=KeepPic=async function(input){//:1HI9H0H6V8
		let result=""
		/*#{1HI9H0H6V8Code*/
		globalContext.StorySegs[globalContext.StorySegs.length-1].image=context.image;
		/*}#1HI9H0H6V8Code*/
		return {result:result};
	};
	KeepPic.jaxId="1HI9H0H6V8"
	KeepPic.url="KeepPic@"+agentURL
	
	segs["PicInfo"]=PicInfo=async function(input){//:1HI9HFC1G0
		let prompt=("请输入插画绘制指导")||input;
		let placeholder=("");
		let text=("");
		let result="";
		result=await session.askChatInput({type:"input",prompt:prompt,placeholder:placeholder,text:text});
		session.addChatText("user",result);
		return {seg:DrawPic,result:(result),preSeg:"1HI9HFC1G0",outlet:"1HI9HFC1G1"};
	};
	PicInfo.jaxId="1HI9HFC1G0"
	PicInfo.url="PicInfo@"+agentURL
	
	segs["NextAction"]=NextAction=async function(input){//:1HID9K0AV0
		let prompt=("是否继续撰写？")||input;
		let items=[
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"自生成写下一段选项",code:0},
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"指导生成下一段选项",code:1},
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"结束当前段落编写",code:2},
		];
		let result="";
		let item=null;
		let multi=false;
		
		[result,item]=await session.askUserRaw({type:"menu",prompt:prompt,multiSelect:multi,items:items});
		if(multi){
			return {seg:GenText,result:(result),preSeg:"1HID9K0AV0",outlet:"1HID9607L0"};
		}
		if(item.code===0){
			return {seg:GenText,result:(result),preSeg:"1HID9K0AV0",outlet:"1HID9607L0"};
		}
		if(item.code===1){
			return {seg:Ask,result:(result),preSeg:"1HID9K0AV0",outlet:"1HID9607L1"};
		}
		if(item.code===2){
			return {seg:AskPic,result:(result),preSeg:"1HID9K0AV0",outlet:"1HID9607L2"};
		}
		return {result:result};
	
	};
	NextAction.jaxId="1HID9K0AV0"
	NextAction.url="NextAction@"+agentURL
	
	segs["ShowError"]=ShowError=async function(input){//:1HIEO4OMC3
		let result=input;
		let role="event";
		let content="撰写内容遇到错误，请确认您的网络连接正常，且您的能量足够调用AI指令。";
		session.addChatText(role,content);
		return {seg:Done,result:(result),preSeg:"1HIEO4OMC3",outlet:"1HIEO4OMC4"};
	};
	ShowError.jaxId="1HIEO4OMC3"
	ShowError.url="ShowError@"+agentURL
	
	agent={
		isAIAgent:true,
		session:session,
		name:"WriteSeg",
		url:agentURL,
		autoStart:true,
		jaxId:"1HI7BOT5S0",
		context:context,
		livingSeg:null,
		execChat:async function(input){
			let result;
			/*#{1HI7BOT5S0PreEntry*/
			/*}#1HI7BOT5S0PreEntry*/
			result={seg:Start,"input":input};
			/*#{1HI7BOT5S0PostEntry*/
			/*}#1HI7BOT5S0PostEntry*/
			return result;
		},
		/*#{1HI7BOT5S0MoreAgentAttrs*/
		/*}#1HI7BOT5S0MoreAgentAttrs*/
	};
	/*#{1HI7BOT5S0PostAgent*/
	/*}#1HI7BOT5S0PostAgent*/
	return agent;
};
/*#{1HI7BOT5S0ExCodes*/
/*}#1HI7BOT5S0ExCodes*/


export default WriteSeg;
export{WriteSeg};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "DocAIAgent",
//	"jaxId": "1HI7BOT5S0",
//	"editVersion": 34,
//	"attrs": {
//		"editObjs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI7BOT5S1",
//			"editVersion": 2,
//			"attrs": {
//				"WriteSeg": {
//					"type": "objclass",
//					"def": "ObjClass",
//					"jaxId": "1HI7BOT5T0",
//					"editVersion": 40,
//					"attrs": {
//						"constructArgs": {
//							"type": "object",
//							"jaxId": "1HI7BOT5T1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"superClass": "",
//						"properties": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7BOT5T2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"functions": {
//							"type": "object",
//							"def": "Functions",
//							"jaxId": "1HI7BOT5T3",
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
//			"jaxId": "1HI7BOT5S2",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"segs": {
//			"type": "array",
//			"attrs": [
//				{
//					"type": "aiseg",
//					"def": "tryCatch",
//					"jaxId": "1HIEO4OMC0",
//					"editVersion": 49,
//					"attrs": {
//						"id": "Start",
//						"label": "New AI Seg",
//						"x": "120",
//						"y": "370",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIEO4OMJ0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIEO4OMJ1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIEO4OMC1",
//							"editVersion": 9,
//							"attrs": {
//								"id": "Try",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7C946J0"
//						},
//						"catchlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIEO4OMC2",
//							"editVersion": 7,
//							"attrs": {
//								"id": "Catch",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIEO4OMC3"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HI7C946I2",
//					"editVersion": 158,
//					"attrs": {
//						"id": "StartInfo",
//						"label": "New AI Seg",
//						"x": "560",
//						"y": "310",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7C946M0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7C946M1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "#(globalContext.StorySegs&&globalContext.StorySegs.length>0)?`请给出继续撰写内容的提示`:`这篇文章如何起头？请给出文章起始段落的指引信息`",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7C946I3",
//							"editVersion": 68,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7C946I0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askChat",
//					"jaxId": "1HI7C946I0",
//					"editVersion": 139,
//					"attrs": {
//						"id": "Ask",
//						"label": "New AI Seg",
//						"x": "780",
//						"y": "310",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7C946M2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7C946M3",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "请输入新的一段内容的编写提示",
//						"placeholder": "",
//						"text": "",
//						"file": "false",
//						"showText": "true",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7C946I4",
//							"editVersion": 65,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7C946I1"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "aiBot",
//					"jaxId": "1HI7C946J0",
//					"editVersion": 116,
//					"attrs": {
//						"id": "Compress",
//						"label": "New AI Seg",
//						"x": "340",
//						"y": "310",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7C946M4",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7C946M5",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "调用其它AI Agent，把调用的结果作为输出",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"source": "ai/mem.js",
//						"secret": "false",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7C946J1",
//							"editVersion": 46,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7C946I2"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "callLLM",
//					"jaxId": "1HI7C946I1",
//					"editVersion": 501,
//					"attrs": {
//						"id": "GenText",
//						"label": "New AI Seg",
//						"x": "960",
//						"y": "310",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7C946M6",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7C946M7",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "执行一次LLM调用。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"mode": "#globalContext.LLMMode||\"gpt-4-1106-preview\"",
//						"system": "#`\n你是一个通过与用户对话，编写小说内容的AI\n当前小说名称：\"${globalContext.StoryTitle}\"\n当前小说背景设定：\n\\`\\`\\`\n${globalContext.StoryBackground}\n\\`\\`\\`\n当前小说已撰写内容：\n\\`\\`\\`\n前文概要：${prefix}\n${content}\n\\`\\`\\`\n\n根据用户指导编写小说的下一段文字。\n请生成三段备选内容，用JSON格式输出，例如：\n\\`\\`\\`\n{\n\t\"choices\":[\n    \t\"第1备选文字内容\",\n    \t\"第2备选文字内容\",\n    \t\"第3备选文字内容\"\n    ]\n}\n\\`\\`\\`\n`",
//						"temperature": "0.80",
//						"maxToken": "2500",
//						"topP": "1",
//						"fqcP": "0",
//						"prcP": "0",
//						"messages": {
//							"type": "array",
//							"attrs": []
//						},
//						"prompt": "#`\n用户指导：\n${input}\n请根据用户指导，输出JSON格式的三个备选内容。\n`",
//						"seed": "",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7C946J2",
//							"editVersion": 55,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI92SDG30"
//						},
//						"secret": "false",
//						"allowCheat": "true",
//						"GPTCheats": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "object",
//									"def": "GPTCheat",
//									"jaxId": "1HI8UF7IF0",
//									"editVersion": 30,
//									"attrs": {
//										"prompt": "相遇",
//										"reply": "#`{\n\t\"choices\":[\n    \t\"Choice1\",\n    \t\"Choice2\",\n    \t\"Choice3\"\n    ]\n}`"
//									}
//								},
//								{
//									"type": "object",
//									"def": "GPTCheat",
//									"jaxId": "1HI90S1FS0",
//									"editVersion": 18,
//									"attrs": {
//										"prompt": "两人在放学路上相遇的故事，男生抬头看云彩，女生以为他流鼻血了",
//										"reply": "#`{\n\t\"choices\":[\n\t    \"夕阳如血，微风送爽。学校的铃声刚刚响过，放学的孩子们欢声笑语地冲出教室，大院的巷子里顿时热闹起来。男生慢吞吞地走在路上，头顶的云彩像棉花糖一样软绵绵的，他忍不住仰起脸去看。正巧，女生从对面走来，看到他仰头的样子，顿时一愣，急忙跑过去，关切地说：'你怎么了，流鼻血了吗？'\",\n        \"放学时分，男生像往常一样独自一人踱步回家，一路上他的眼睛却不是注视着脚下的路，而是迷恋于头顶变幻的云朵。女生刚好提着书包匆匆从身后赶来，看到他不断抬头，脸上露出担忧的神色。她轻轻拍了拍男生的肩膀，戏谑道：'看什么呢，是不是觉得自己是个有思想的诗人啊？'女生并未察觉到自己的误解，而男生转过头，露出一丝无奈的微笑。\",\n        \"走在回家的路上，男生的目光无意中被高空飘荡的云朵所吸引，他似乎在那形状不定的白云中看到了某种奇妙的图案。女生正好从旁边走过，见到他那专注的模样，停下脚步好奇地凑过去。当她发现男生的眼神并不在近处，而是投向远方的天空，误以为他眼角的光是因为流鼻血，便急忙掏出手绢说：'别看了，快用这个擦擦，我刚刚洗过很干净。'男生回过神来，愣了愣，然后笑着摇摇头，解释是在看云。\"\n    ]\n}`"
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
//						"responseFormat": "json_object"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HI92SDG30",
//					"editVersion": 81,
//					"attrs": {
//						"id": "ShowReuslt",
//						"label": "New AI Seg",
//						"x": "1170",
//						"y": "310",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI92SDGA0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI92SDGA1",
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
//							"jaxId": "1HI92SDG31",
//							"editVersion": 27,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7C946J3"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askMenu",
//					"jaxId": "1HI7C946J3",
//					"editVersion": 127,
//					"attrs": {
//						"id": "Choose",
//						"label": "New AI Seg",
//						"x": "1400",
//						"y": "310",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7C946M8",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7C946M9",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "哪一段更符合你的想法？",
//						"multi": "false",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI7C289S0",
//									"editVersion": 78,
//									"attrs": {
//										"id": "Seg1",
//										"text": "选择1",
//										"result": "",
//										"codes": "true"
//									},
//									"linkedSeg": "1HI7C946J5"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI7C289S1",
//									"editVersion": 61,
//									"attrs": {
//										"id": "Seg2",
//										"text": "选择2",
//										"result": "",
//										"codes": "true"
//									},
//									"linkedSeg": "1HI7C946J5"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI7C289S2",
//									"editVersion": 56,
//									"attrs": {
//										"id": "Seg3",
//										"text": "选择3",
//										"result": "",
//										"codes": "true"
//									},
//									"linkedSeg": "1HI7C946J5"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI7C946J4",
//									"editVersion": 68,
//									"attrs": {
//										"id": "again",
//										"text": {
//											"type": "string",
//											"valText": "Not satisfied with any, write again",
//											"localize": {
//												"EN": "Not satisfied with any, write again",
//												"CN": "都不满意，再写一次"
//											},
//											"localizable": true
//										},
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/undo.svg"
//									},
//									"linkedSeg": "1HI7C946N0"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HI7C946N0",
//					"editVersion": 86,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1520",
//						"y": "450",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7C946N1",
//							"editVersion": 38,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7C946N2"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HI7C946N2",
//					"editVersion": 62,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "810",
//						"y": "450",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7C946N3",
//							"editVersion": 38,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7C946I0"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HI7C946J5",
//					"editVersion": 117,
//					"attrs": {
//						"id": "MergeSotry",
//						"label": "New AI Seg",
//						"x": "1620",
//						"y": "240",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7C946N4",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI7C946N5",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI7C946J6",
//							"editVersion": 41,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HID9K0AV0"
//						},
//						"result": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askConfirm",
//					"jaxId": "1HI9H0H6V0",
//					"editVersion": 87,
//					"attrs": {
//						"id": "AskPic",
//						"label": "New AI Seg",
//						"x": "2160",
//						"y": "240",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9H0H740",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9H0H741",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "是否在此处添加插画？",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI9GHT4L0",
//									"editVersion": 21,
//									"attrs": {
//										"id": "Yes",
//										"text": "Yes",
//										"result": "OK",
//										"codes": "false"
//									},
//									"linkedSeg": "1HI9H0H6V1"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI9GHT4M0",
//									"editVersion": 20,
//									"attrs": {
//										"id": "No",
//										"text": "No",
//										"result": "Cancel",
//										"codes": "false"
//									}
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HI9H0H6V1",
//					"editVersion": 71,
//					"attrs": {
//						"id": "PicTip",
//						"label": "New AI Seg",
//						"x": "2370",
//						"y": "180",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9H0H742",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9H0H743",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "请输入插画绘制的提示",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9H0H6V2",
//							"editVersion": 13,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9HFC1G0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "aiDraw",
//					"jaxId": "1HI9H0H6V3",
//					"editVersion": 101,
//					"attrs": {
//						"id": "DrawPic",
//						"label": "New AI Seg",
//						"x": "2760",
//						"y": "180",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9H0H744",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9H0H745",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "#`\n为小说 “${globalContext.StoryTitle}” 绘制一幅插画:\n使用风格：\n${globalContext.DrawStyle},\n\n故事背景：\n${globalContext.StoryBackground},\n\n参考情节：\n${globalContext.StorySegs[globalContext.StorySegs.length-1].text},\n\n${input?(\"并按照用户的指引：\"+input):\"\"}\n`",
//						"seed": "",
//						"mode": "DALL-E 3",
//						"showImage": "false",
//						"size": "1792x1024",
//						"imgLabel": "AI Picture:",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9H0H6V4",
//							"editVersion": 13,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9H0H6V5"
//						},
//						"method": "Draw",
//						"image": "",
//						"mask": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "image",
//					"jaxId": "1HI9H0H6V5",
//					"editVersion": 93,
//					"attrs": {
//						"id": "Resize",
//						"label": "New AI Seg",
//						"x": "2960",
//						"y": "180",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9H0H746",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9H0H747",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"text": "AI绘制的插画",
//						"image": "#input",
//						"role": "Assistant",
//						"sizeLimit": "512",
//						"format": "JEPG",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9H0H6V6",
//							"editVersion": 13,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9H0H6V7"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askConfirm",
//					"jaxId": "1HI9H0H6V7",
//					"editVersion": 73,
//					"attrs": {
//						"id": "CheckPic",
//						"label": "New AI Seg",
//						"x": "3160",
//						"y": "180",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9H0H748",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9H0H749",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"prompt": "是否使用这幅插画",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI9GO80C0",
//									"editVersion": 32,
//									"attrs": {
//										"id": "Yes",
//										"text": "使用",
//										"result": "#input",
//										"codes": "false"
//									},
//									"linkedSeg": "1HI9H0H6V8"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI9GO80C1",
//									"editVersion": 20,
//									"attrs": {
//										"id": "No",
//										"text": "重画",
//										"result": "Cancel",
//										"codes": "false"
//									},
//									"linkedSeg": "1HI9H0H7410"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HI9GO80C2",
//									"editVersion": 20,
//									"attrs": {
//										"id": "Abort",
//										"text": "放弃插画",
//										"result": "",
//										"codes": "false"
//									}
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HI9H0H6V8",
//					"editVersion": 70,
//					"attrs": {
//						"id": "KeepPic",
//						"label": "New AI Seg",
//						"x": "3360",
//						"y": "110",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9H0H7411",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9H0H7412",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9H0H6V9",
//							"editVersion": 12,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							}
//						},
//						"result": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HI9H0H7413",
//					"editVersion": 44,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "2480",
//						"y": "310",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9H0H7414",
//							"editVersion": 12,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9H0H6V1"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HI9H0H7410",
//					"editVersion": 48,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "3290",
//						"y": "310",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9H0H7415",
//							"editVersion": 12,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9H0H7413"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askChat",
//					"jaxId": "1HI9HFC1G0",
//					"editVersion": 70,
//					"attrs": {
//						"id": "PicInfo",
//						"label": "New AI Seg",
//						"x": "2570",
//						"y": "180",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9HFC1N0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9HFC1N1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "请输入插画绘制指导",
//						"placeholder": "",
//						"text": "",
//						"file": "false",
//						"showText": "true",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9HFC1G1",
//							"editVersion": 10,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI9H0H6V3"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askMenu",
//					"jaxId": "1HID9K0AV0",
//					"editVersion": 70,
//					"attrs": {
//						"id": "NextAction",
//						"label": "New AI Seg",
//						"x": "1850",
//						"y": "240",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HID9K0B40",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HID9K0B41",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "是否继续撰写？",
//						"multi": "false",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HID9607L0",
//									"editVersion": 28,
//									"attrs": {
//										"id": "Auto",
//										"text": "自生成写下一段选项",
//										"result": "继续编写",
//										"codes": "false"
//									},
//									"linkedSeg": "1HID9K0B42"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HID9607L1",
//									"editVersion": 16,
//									"attrs": {
//										"id": "Manual",
//										"text": "指导生成下一段选项",
//										"result": "",
//										"codes": "false"
//									},
//									"linkedSeg": "1HID9K0B43"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HID9607L2",
//									"editVersion": 24,
//									"attrs": {
//										"id": "Stop",
//										"text": "结束当前段落编写",
//										"result": "",
//										"codes": "false"
//									},
//									"linkedSeg": "1HI9H0H6V0"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HID9K0B42",
//					"editVersion": 27,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "2000",
//						"y": "140",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HID9K0B44",
//							"editVersion": 7,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HID9K0B45"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HID9K0B45",
//					"editVersion": 31,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "990",
//						"y": "140",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HID9K0B46",
//							"editVersion": 7,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7C946I1"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HID9K0B43",
//					"editVersion": 27,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "2060",
//						"y": "50",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HID9K0B47",
//							"editVersion": 7,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HID9K0B48"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HID9K0B48",
//					"editVersion": 35,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "850",
//						"y": "50",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HID9K0B49",
//							"editVersion": 7,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI7C946I0"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIEO4OMC3",
//					"editVersion": 55,
//					"attrs": {
//						"id": "ShowError",
//						"label": "New AI Seg",
//						"x": "340",
//						"y": "430",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIEO4OMJ2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIEO4OMJ3",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Event",
//						"text": "撰写内容遇到错误，请确认您的网络连接正常，且您的能量足够调用AI指令。",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIEO4OMC4",
//							"editVersion": 7,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIEO4OMJ4"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIEO4OMJ4",
//					"editVersion": 37,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "570",
//						"y": "430",
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
//			"jaxId": "1HI7BOT5S3",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"context": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI7BOT5S4",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"globalMockup": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI7BOT5S5",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"desc": "这是一个AI代理。",
//		"exportAPI": "false",
//		"apiArgs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI7BOT5S6",
//			"editVersion": 0,
//			"attrs": {}
//		}
//	}
//}