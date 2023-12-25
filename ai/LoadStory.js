//Auto genterated by Cody
import {$P,VFACT,callAfter} from "/@vfact";
import pathLib from "/@path";
import inherits from "/@inherits";
import Base64 from "/@tabos/utils/base64.js";
import {trimJSON} from "/@aichat/utils.js";
/*#{1HI98V9M00MoreImports*/
import {tabFS} from "/@tabos";
/*}#1HI98V9M00MoreImports*/
const agentURL=(new URL(import.meta.url)).pathname;
const basePath=pathLib.dirname(agentURL);
const $ln=VFACT.lanCode||"EN";
/*#{1HI98V9M00StartDoc*/
/*}#1HI98V9M00StartDoc*/
//----------------------------------------------------------------------------
let LoadStory=async function(session){
	let context,globalContext;
	let self;
	let ChooseFile,ParseData;
	/*#{1HI98V9M00LocalVals*/
	/*}#1HI98V9M00LocalVals*/
	
	/*#{1HI98V9M00PreContext*/
	/*}#1HI98V9M00PreContext*/
	globalContext=session.globalContext;
	context={};
	context=VFACT.flexState(context);
	/*#{1HI98V9M00PostContext*/
	/*}#1HI98V9M00PostContext*/
	let agent,segs={};
	segs["ChooseFile"]=ChooseFile=async function(input){//:1HI990Q8I0
		let prompt=("请选择故事文件")||input;
		let resultText="";
		let fileData=null;
		let enc=null;
		let ext=null;
		let fileSys="tabos";
		let result="";
		let path=("/doc/");
		let filter=("*.json");
		[resultText,result]=await session.askUserRaw({type:"input",prompt:prompt,text:"",path:path,file:fileSys,filter:filter,});
		return {seg:ParseData,result:(result),preSeg:"1HI990Q8I0",outlet:"1HI990Q8J0"};
	};
	ChooseFile.jaxId="1HI990Q8I0"
	ChooseFile.url="ChooseFile@"+agentURL
	
	segs["ParseData"]=ParseData=async function(input){//:1HI995AAQ0
		let result=""
		/*#{1HI995AAQ0Code*/
		let fileData,path;
		path=input;
		try{
			fileData=(await (await fetch(path)).text());
			result=JSON.parse(fileData);
		}catch(err){
			if(path.startsWith("//")){
				path=path.substring(1);
			}
			if(path.startsWith("/~/")){
				path=path.substring(2);
			}
			fileData=await tabFS.readFile(path,"utf8");
			result=JSON.parse(fileData);
		}
		delete result.context;
		Object.assign(globalContext,result);
		if(!globalContext.LLMMode){
			globalContext.LLMMode="gpt-3.5-turbo-1106";
		}
		VFACT.app.emit("StoryReady",globalContext);
		/*}#1HI995AAQ0Code*/
		return {result:result};
	};
	ParseData.jaxId="1HI995AAQ0"
	ParseData.url="ParseData@"+agentURL
	
	agent={
		isAIAgent:true,
		session:session,
		name:"LoadStory",
		url:agentURL,
		autoStart:true,
		jaxId:"1HI98V9M00",
		context:context,
		livingSeg:null,
		execChat:async function(input){
			let result;
			/*#{1HI98V9M00PreEntry*/
			/*}#1HI98V9M00PreEntry*/
			result={seg:ChooseFile,"input":input};
			/*#{1HI98V9M00PostEntry*/
			/*}#1HI98V9M00PostEntry*/
			return result;
		},
		/*#{1HI98V9M00MoreAgentAttrs*/
		/*}#1HI98V9M00MoreAgentAttrs*/
	};
	/*#{1HI98V9M00PostAgent*/
	/*}#1HI98V9M00PostAgent*/
	return agent;
};
/*#{1HI98V9M00ExCodes*/
/*}#1HI98V9M00ExCodes*/


export default LoadStory;
export{LoadStory};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "DocAIAgent",
//	"jaxId": "1HI98V9M00",
//	"editVersion": 40,
//	"attrs": {
//		"editObjs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI98V9M01",
//			"editVersion": 2,
//			"attrs": {
//				"LoadStory": {
//					"type": "objclass",
//					"def": "ObjClass",
//					"jaxId": "1HI98V9M10",
//					"editVersion": 28,
//					"attrs": {
//						"constructArgs": {
//							"type": "object",
//							"jaxId": "1HI98V9M11",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"superClass": "",
//						"properties": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI98V9M12",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"functions": {
//							"type": "object",
//							"def": "Functions",
//							"jaxId": "1HI98V9M13",
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
//			"jaxId": "1HI98V9M02",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"segs": {
//			"type": "array",
//			"attrs": [
//				{
//					"type": "aiseg",
//					"def": "askFile",
//					"jaxId": "1HI990Q8I0",
//					"editVersion": 96,
//					"attrs": {
//						"id": "ChooseFile",
//						"label": "New AI Seg",
//						"x": "140",
//						"y": "260",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI990Q8M0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI990Q8M1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "请选择故事文件",
//						"path": "/doc/",
//						"fileSys": "tabos",
//						"filter": "*.json",
//						"read": "No",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI990Q8J0",
//							"editVersion": 18,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HI995AAQ0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HI995AAQ0",
//					"editVersion": 52,
//					"attrs": {
//						"id": "ParseData",
//						"label": "New AI Seg",
//						"x": "380",
//						"y": "260",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI995AAR0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI995AAR1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI995AAQ1",
//							"editVersion": 14,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							}
//						},
//						"result": ""
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
//			"jaxId": "1HI98V9M03",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"context": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI98V9M04",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"globalMockup": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI98V9M05",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"desc": "这是一个AI代理。",
//		"exportAPI": "false",
//		"apiArgs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI98V9M06",
//			"editVersion": 0,
//			"attrs": {}
//		}
//	}
//}