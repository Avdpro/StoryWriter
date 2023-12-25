//Auto genterated by Cody
import {$P,VFACT,callAfter} from "/@vfact";
import pathLib from "/@path";
import inherits from "/@inherits";
import Base64 from "/@tabos/utils/base64.js";
import {trimJSON} from "/@aichat/utils.js";
/*#{1HI9A49JT0MoreImports*/
/*}#1HI9A49JT0MoreImports*/
const agentURL=(new URL(import.meta.url)).pathname;
const basePath=pathLib.dirname(agentURL);
const $ln=VFACT.lanCode||"EN";
/*#{1HI9A49JT0StartDoc*/
/*}#1HI9A49JT0StartDoc*/
//----------------------------------------------------------------------------
let ViewStory=async function(session){
	let context,globalContext;
	let self;
	let SEG1HI9A4MPT0;
	/*#{1HI9A49JT0LocalVals*/
	/*}#1HI9A49JT0LocalVals*/
	
	/*#{1HI9A49JT0PreContext*/
	/*}#1HI9A49JT0PreContext*/
	globalContext=session.globalContext;
	context={};
	context=VFACT.flexState(context);
	/*#{1HI9A49JT0PostContext*/
	/*}#1HI9A49JT0PostContext*/
	let agent,segs={};
	segs["SEG1HI9A4MPT0"]=SEG1HI9A4MPT0=async function(input){//:1HI9A4MPT0
		let result=""
		/*#{1HI9A4MPT0Code*/
		let segs=globalContext.StorySegs;
		segs=segs.map(item=>item.text);
		console.log(segs.join("\n\n"));
		/*}#1HI9A4MPT0Code*/
		return {result:result};
	};
	SEG1HI9A4MPT0.jaxId="1HI9A4MPT0"
	SEG1HI9A4MPT0.url="SEG1HI9A4MPT0@"+agentURL
	
	agent={
		isAIAgent:true,
		session:session,
		name:"ViewStory",
		url:agentURL,
		autoStart:true,
		jaxId:"1HI9A49JT0",
		context:context,
		livingSeg:null,
		execChat:async function(input){
			let result;
			/*#{1HI9A49JT0PreEntry*/
			/*}#1HI9A49JT0PreEntry*/
			result={seg:SEG1HI9A4MPT0,"input":input};
			/*#{1HI9A49JT0PostEntry*/
			/*}#1HI9A49JT0PostEntry*/
			return result;
		},
		/*#{1HI9A49JT0MoreAgentAttrs*/
		/*}#1HI9A49JT0MoreAgentAttrs*/
	};
	/*#{1HI9A49JT0PostAgent*/
	/*}#1HI9A49JT0PostAgent*/
	return agent;
};
/*#{1HI9A49JT0ExCodes*/
/*}#1HI9A49JT0ExCodes*/


export default ViewStory;
export{ViewStory};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "DocAIAgent",
//	"jaxId": "1HI9A49JT0",
//	"editVersion": 28,
//	"attrs": {
//		"editObjs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI9A49JT1",
//			"editVersion": 2,
//			"attrs": {
//				"ViewStory": {
//					"type": "objclass",
//					"def": "ObjClass",
//					"jaxId": "1HI9A49JU0",
//					"editVersion": 14,
//					"attrs": {
//						"constructArgs": {
//							"type": "object",
//							"jaxId": "1HI9A49JU1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"superClass": "",
//						"properties": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9A49JU2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"functions": {
//							"type": "object",
//							"def": "Functions",
//							"jaxId": "1HI9A49JU3",
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
//			"jaxId": "1HI9A49JT2",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"segs": {
//			"type": "array",
//			"attrs": [
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HI9A4MPT0",
//					"editVersion": 28,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "160",
//						"y": "260",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9A61U00",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HI9A61U01",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HI9A4MPT1",
//							"editVersion": 4,
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
//			"jaxId": "1HI9A49JT3",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"context": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI9A49JT4",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"globalMockup": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI9A49JT5",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"desc": "这是一个AI代理。",
//		"exportAPI": "false",
//		"apiArgs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI9A49JT6",
//			"editVersion": 0,
//			"attrs": {}
//		}
//	}
//}