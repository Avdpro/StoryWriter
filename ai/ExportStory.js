//Auto genterated by Cody
import {$P,VFACT,callAfter} from "/@vfact";
import pathLib from "/@path";
import inherits from "/@inherits";
import Base64 from "/@tabos/utils/base64.js";
import {trimJSON} from "/@aichat/utils.js";
/*#{1HIAN9JQ30MoreImports*/
import markdownit from "/@markdownit";
/*}#1HIAN9JQ30MoreImports*/
const agentURL=(new URL(import.meta.url)).pathname;
const basePath=pathLib.dirname(agentURL);
const $ln=VFACT.lanCode||"EN";
/*#{1HIAN9JQ30StartDoc*/
/*}#1HIAN9JQ30StartDoc*/
//----------------------------------------------------------------------------
let ExportStory=async function(session){
	let context,globalContext;
	let self;
	let GetMode,Markdown,HTML,JSON,Download,Done,Report,Abort;
	/*#{1HIAN9JQ30LocalVals*/
	/*}#1HIAN9JQ30LocalVals*/
	
	/*#{1HIAN9JQ30PreContext*/
	/*}#1HIAN9JQ30PreContext*/
	globalContext=session.globalContext;
	context={
		"fileName":"",
		/*#{1HIAN9JQ43ExCtxAttrs*/
		/*}#1HIAN9JQ43ExCtxAttrs*/
	};
	context=VFACT.flexState(context);
	/*#{1HIAN9JQ30PostContext*/
	/*}#1HIAN9JQ30PostContext*/
	let agent,segs={};
	segs["GetMode"]=GetMode=async function(input){//:1HIANEKMB0
		let prompt=("请选择输出格式：")||input;
		let items=[
			{icon:"/~/-tabos/shared/assets/web.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:`输出为HTML文件(${globalContext.StoryTitle}.html)`,code:0},
			{icon:"/~/-tabos/shared/assets/filemd.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:`输出为Mardown格式文件(${globalContext.StoryTitle}.md)`,code:1},
			{icon:"/~/-tabos/shared/assets/appdata.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:`工程文件(${globalContext.StoryTitle}.json)`,code:2},
			{icon:"/~/-tabos/shared/assets/close.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"放弃输出",code:3},
		];
		let result="";
		let item=null;
		let multi=false;
		
		[result,item]=await session.askUserRaw({type:"menu",prompt:prompt,multiSelect:multi,items:items});
		if(multi){
			return {seg:HTML,result:(result),preSeg:"1HIANEKMB0",outlet:"1HIANA1F40"};
		}
		if(item.code===0){
			return {seg:HTML,result:(result),preSeg:"1HIANEKMB0",outlet:"1HIANA1F40"};
		}
		if(item.code===1){
			return {seg:Markdown,result:(result),preSeg:"1HIANEKMB0",outlet:"1HIANA1F30"};
		}
		if(item.code===2){
			return {seg:JSON,result:(result),preSeg:"1HIANEKMB0",outlet:"1HIANA1F41"};
		}
		if(item.code===3){
			return {seg:Abort,result:(result),preSeg:"1HIANEKMB0",outlet:"1HIANO1TE0"};
		}
		return {result:result};
	
	};
	GetMode.jaxId="1HIANEKMB0"
	GetMode.url="GetMode@"+agentURL
	
	segs["Markdown"]=Markdown=async function(input){//:1HIANO1TE1
		let result=""
		/*#{1HIANO1TE1Code*/
		let story=globalContext;
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
		result=content;
		context.fileName=`${globalContext.StoryTitle}.md`;
		/*}#1HIANO1TE1Code*/
		return {seg:Download,result:(result),preSeg:"1HIANO1TE1",outlet:"1HIANO1TE2"};
	};
	Markdown.jaxId="1HIANO1TE1"
	Markdown.url="Markdown@"+agentURL
	
	segs["HTML"]=HTML=async function(input){//:1HIANO1TE3
		let result=""
		/*#{1HIANO1TE3Code*/
		let mdContent,webObj,content;
		let list,i,n,blk,pNode;
		mdContent=(await Markdown(input)).result;
		webObj=document.createElement("div");
		content=markdownit().render(mdContent);
		webObj.innerHTML=content;
		list=webObj.querySelectorAll("img");
		n=list.length;
		for(i=0;i<n;i++){
			blk=list[i];
			pNode=blk.parentNode;
			if(pNode && pNode.children && pNode.children.length===1){
				pNode.styleWidth="100%";
				blk.style.maxWidth="100%";
			}
		}
		result=`
		<html lang="en-us">
		<head>
			<meta charset="utf-8">
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
			<meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
			<meta name="apple-mobile-web-app-capable" content="yes"/>
			<meta name="full-screen" content="true"/>
			<meta name="screen-orientation" content="portrait"/>
			<meta name="x5-fullscreen" content="true"/>
			<meta name="360-fullscreen" content="true"/>
			<title>${globalContext.StoryTitle}</title>
		</head>
		<body style="max-width:500px;margin:0px auto;padding:5px">
			<div style="font-size:12px;color:rgb(180,180,180);text-align:center">
			Create by StoryWriter, a www.ai2apps.com demo project.
			</div>
			${webObj.innerHTML}
			<div style="font-size:12px;color:rgb(180,180,180);text-align:center">
			Create by StoryWriter, a www.ai2apps.com demo project.
			</div>
		</body>
		</html>
		`
		context.fileName=`${globalContext.StoryTitle}.html`;
		/*}#1HIANO1TE3Code*/
		return {seg:Download,result:(result),preSeg:"1HIANO1TE3",outlet:"1HIANO1TE4"};
	};
	HTML.jaxId="1HIANO1TE3"
	HTML.url="HTML@"+agentURL
	
	segs["JSON"]=JSON=async function(input){//:1HIANO1TE5
		let result=""
		/*#{1HIANO1TE5Code*/
		let saveVO={};
		saveVO.StoryTitle=globalContext.StoryTitle;
		saveVO.StorySegs=globalContext.StorySegs;
		saveVO.PackedSegs=globalContext.PackedSegs;
		saveVO.DrawStyle=globalContext.DrawStyle;
		if(globalContext.StoryCover){
			saveVO.StoryCover=globalContext.StoryCover;
		}
		result=JSON.stringify(saveVO,null,"\t");
		context.fileName=`${globalContext.StoryTitle}.json`;
		/*}#1HIANO1TE5Code*/
		return {seg:Download,result:(result),preSeg:"1HIANO1TE5",outlet:"1HIANO1TE6"};
	};
	JSON.jaxId="1HIANO1TE5"
	JSON.url="JSON@"+agentURL
	
	segs["Download"]=Download=async function(input){//:1HIANO1TE7
		let result=""
		/*#{1HIANO1TE7Code*/
		let fileName=context.fileName;
		function downloadFile(data){
			let e,blob,url;
			blob = new Blob([data], {type: "application/octet-stream"});
			url = URL.createObjectURL(blob);
			VFACT.webFileDownload.download = fileName;
			VFACT.webFileDownload.href = url;
		
			//Generate a mouse click:
			e = document.createEvent('MouseEvents');
			e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			VFACT.webFileDownload.dispatchEvent(e);
		
			//Release the URLData:
			window.setTimeout(() => {
				URL.revokeObjectURL(url);
			}, 10000);
		}
		const encoder = new TextEncoder();
		let data = encoder.encode(input);
		downloadFile(data);
		/*}#1HIANO1TE7Code*/
		return {seg:Report,result:(result),preSeg:"1HIANO1TE7",outlet:"1HIANO1TE8"};
	};
	Download.jaxId="1HIANO1TE7"
	Download.url="Download@"+agentURL
	
	segs["Report"]=Report=async function(input){//:1HIAP2FQE0
		let result=input;
		let role="event";
		let content="故事输出完毕";
		session.addChatText(role,content);
		return {seg:Done,result:(result),preSeg:"1HIAP2FQE0",outlet:"1HIAP2FQE1"};
	};
	Report.jaxId="1HIAP2FQE0"
	Report.url="Report@"+agentURL
	
	segs["Abort"]=Abort=async function(input){//:1HIAP2VKO0
		let result=input;
		let role="event";
		let content="已取消输出故事";
		session.addChatText(role,content);
		return {seg:Done,result:(result),preSeg:"1HIAP2VKO0",outlet:"1HIAP2VKO3"};
	};
	Abort.jaxId="1HIAP2VKO0"
	Abort.url="Abort@"+agentURL
	
	agent={
		isAIAgent:true,
		session:session,
		name:"ExportStory",
		url:agentURL,
		autoStart:true,
		jaxId:"1HIAN9JQ30",
		context:context,
		livingSeg:null,
		execChat:async function(input){
			let result;
			/*#{1HIAN9JQ30PreEntry*/
			/*}#1HIAN9JQ30PreEntry*/
			result={seg:GetMode,"input":input};
			/*#{1HIAN9JQ30PostEntry*/
			/*}#1HIAN9JQ30PostEntry*/
			return result;
		},
		/*#{1HIAN9JQ30MoreAgentAttrs*/
		/*}#1HIAN9JQ30MoreAgentAttrs*/
	};
	/*#{1HIAN9JQ30PostAgent*/
	/*}#1HIAN9JQ30PostAgent*/
	return agent;
};
/*#{1HIAN9JQ30ExCodes*/
/*}#1HIAN9JQ30ExCodes*/


export default ExportStory;
export{ExportStory};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "DocAIAgent",
//	"jaxId": "1HIAN9JQ30",
//	"editVersion": 28,
//	"attrs": {
//		"editObjs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIAN9JQ40",
//			"editVersion": 2,
//			"attrs": {
//				"ExportStory": {
//					"type": "objclass",
//					"def": "ObjClass",
//					"jaxId": "1HIAN9JQ50",
//					"editVersion": 22,
//					"attrs": {
//						"constructArgs": {
//							"type": "object",
//							"jaxId": "1HIAN9JQ51",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"superClass": "",
//						"properties": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAN9JQ52",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"functions": {
//							"type": "object",
//							"def": "Functions",
//							"jaxId": "1HIAN9JQ53",
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
//			"jaxId": "1HIAN9JQ41",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"segs": {
//			"type": "array",
//			"attrs": [
//				{
//					"type": "aiseg",
//					"def": "askMenu",
//					"jaxId": "1HIANEKMB0",
//					"editVersion": 65,
//					"attrs": {
//						"id": "GetMode",
//						"label": "New AI Seg",
//						"x": "150",
//						"y": "270",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIANOKE70",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIANOKE71",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "请选择输出格式：",
//						"multi": "false",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIANA1F40",
//									"editVersion": 41,
//									"attrs": {
//										"id": "HTML",
//										"text": "#`输出为HTML文件(${globalContext.StoryTitle}.html)`",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/web.svg"
//									},
//									"linkedSeg": "1HIANO1TE3"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIANA1F30",
//									"editVersion": 35,
//									"attrs": {
//										"id": "Markdown",
//										"text": "#`输出为Mardown格式文件(${globalContext.StoryTitle}.md)`",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/filemd.svg"
//									},
//									"linkedSeg": "1HIANO1TE1"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIANA1F41",
//									"editVersion": 30,
//									"attrs": {
//										"id": "JSON",
//										"text": "#`工程文件(${globalContext.StoryTitle}.json)`",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/appdata.svg"
//									},
//									"linkedSeg": "1HIANO1TE5"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIANO1TE0",
//									"editVersion": 37,
//									"attrs": {
//										"id": "Cancel",
//										"text": "放弃输出",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/close.svg"
//									},
//									"linkedSeg": "1HIAP2VKO0"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HIANO1TE1",
//					"editVersion": 69,
//					"attrs": {
//						"id": "Markdown",
//						"label": "New AI Seg",
//						"x": "430",
//						"y": "160",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIANOKE73",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIANOKE74",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIANO1TE2",
//							"editVersion": 15,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIANO1TE7"
//						},
//						"result": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HIANO1TE3",
//					"editVersion": 79,
//					"attrs": {
//						"id": "HTML",
//						"label": "New AI Seg",
//						"x": "430",
//						"y": "100",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIANOKE75",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIANOKE76",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIANO1TE4",
//							"editVersion": 21,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIANO1TE7"
//						},
//						"result": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HIANO1TE5",
//					"editVersion": 68,
//					"attrs": {
//						"id": "JSON",
//						"label": "New AI Seg",
//						"x": "430",
//						"y": "220",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIANOKE77",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIANOKE78",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIANO1TE6",
//							"editVersion": 14,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIANO1TE7"
//						},
//						"result": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HIANO1TE7",
//					"editVersion": 56,
//					"attrs": {
//						"id": "Download",
//						"label": "New AI Seg",
//						"x": "660",
//						"y": "220",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIANOKE79",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIANOKE710",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIANO1TE8",
//							"editVersion": 20,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAP2FQE0"
//						},
//						"result": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIANOKE72",
//					"editVersion": 44,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "1110",
//						"y": "310",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIAP2FQE0",
//					"editVersion": 66,
//					"attrs": {
//						"id": "Report",
//						"label": "New AI Seg",
//						"x": "890",
//						"y": "220",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAP2FQL0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAP2FQL1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Event",
//						"text": "故事输出完毕",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAP2FQE1",
//							"editVersion": 12,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIANOKE72"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIAP2VKO0",
//					"editVersion": 89,
//					"attrs": {
//						"id": "Abort",
//						"label": "New AI Seg",
//						"x": "890",
//						"y": "310",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAP2VKO1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAP2VKO2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Event",
//						"text": "已取消输出故事",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAP2VKO3",
//							"editVersion": 12,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIANOKE72"
//						}
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
//			"jaxId": "1HIAN9JQ42",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"context": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIAN9JQ43",
//			"editVersion": 4,
//			"attrs": {
//				"fileName": {
//					"type": "string",
//					"valText": ""
//				}
//			}
//		},
//		"globalMockup": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIAN9JQ44",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"desc": "这是一个AI代理。",
//		"exportAPI": "false",
//		"apiArgs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIAN9JQ45",
//			"editVersion": 0,
//			"attrs": {}
//		}
//	}
//}