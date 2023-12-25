//Auto genterated by Cody
import {$P,VFACT,callAfter} from "/@vfact";
import pathLib from "/@path";
import inherits from "/@inherits";
import Base64 from "/@tabos/utils/base64.js";
import {trimJSON} from "/@aichat/utils.js";
/*#{1HIBTGACI0MoreImports*/
import config from "./config.js";
/*}#1HIBTGACI0MoreImports*/
const agentURL=(new URL(import.meta.url)).pathname;
const basePath=pathLib.dirname(agentURL);
const $ln=VFACT.lanCode||"EN";
/*#{1HIBTGACI0StartDoc*/
/*}#1HIBTGACI0StartDoc*/
//----------------------------------------------------------------------------
let UpdatePack=async function(session){
	let context,globalContext;
	let self;
	let DoPack,PackMem;
	/*#{1HIBTGACI0LocalVals*/
	let PACK_SEG_NUM=config.PACK_SEG_NUM;
	/*}#1HIBTGACI0LocalVals*/
	
	/*#{1HIBTGACI0PreContext*/
	/*}#1HIBTGACI0PreContext*/
	globalContext=session.globalContext;
	context={};
	context=VFACT.flexState(context);
	/*#{1HIBTGACI0PostContext*/
	/*}#1HIBTGACI0PostContext*/
	let agent,segs={};
	segs["DoPack"]=DoPack=async function(input){//:1HIBTKJ2N0
		let result=""
		/*#{1HIBTKJ2N0Code*/
		let mode,segIdx;
		let packs=globalContext.PackedSegs;
		let segs=globalContext.StorySegs;
		let packedSegNum=packs.length*PACK_SEG_NUM;
		mode=input.mode;
		segIdx=input.seg;
		if(segIdx>=packedSegNum){
			return {result:result};//No need to update:
		}
		if(mode==="delete"){
			let startCnt;
			let endCnt;
			let i,list,content;
			endCnt=Math.floor(segIdx/PACK_SEG_NUM)-1;
			startCnt=Math.floor(segIdx/PACK_SEG_NUM);
			for(i=startCnt;i<endCnt;i++){
				list=segs.slice(i*PACK_SEG_NUM,i*PACK_SEG_NUM+PACK_SEG_NUM).map(item=>item.text);
				content=list.join("\n");
				packs[i]=(await PackMem(content)).result.brief;
			}
		}else{
			let packIdx;
			let content="";
			let i;
			packIdx=Math.floor(segIdx/PACK_SEG_NUM);
			for(i=packIdx*PACK_SEG_NUM;i<packIdx*PACK_SEG_NUM+PACK_SEG_NUM;i++){
				content+=segs[i].text+"\n";
			}
			packs[packIdx]=(await PackMem(content)).result.brief;
		}
		result="";
		/*}#1HIBTKJ2N0Code*/
		return {result:result};
	};
	DoPack.jaxId="1HIBTKJ2N0"
	DoPack.url="DoPack@"+agentURL
	
	segs["PackMem"]=PackMem=async function(input){//:1HIBTKRG70
		let prompt;
		let result=null;
		/*#{1HIBTKRG70Input*/
		/*}#1HIBTKRG70Input*/
		
		let opts={
			mode:"gpt-4-1106-preview",
			maxToken:2800,
			temperature:0,
			topP:1,
			fqcP:0,
			prcP:0,
			secret:false,
			responseFormat:"json_object"
		};
		let chatMem=PackMem.messages
		let seed="";
		if(seed!==undefined){opts.seed=seed;}
		let messages=[
			{role:"system",content:"你是一个提炼总结小说段落内容的AI。根据用户提供的小说段落内容，提炼摘要，注意要包括对故事情节可能产生影响的内容。\n请使用JSON输出，格式为：\n{\n\t\"brief\":\"总结的摘要内容\"\n}"},
		];
		/*#{1HIBTKRG70PrePrompt*/
		/*}#1HIBTKRG70PrePrompt*/
		prompt=`
需要提炼内容的小说段落：

\`\`\`
${input}
\`\`\`

请用JSON格式输出提炼后的内容：
`;
		if(prompt!==null){
			messages.push({role:"user",content:prompt});
		}
		/*#{1HIBTKRG70PreCall*/
		/*}#1HIBTKRG70PreCall*/
		result=(result===null)?(await session.callSegLLM("PackMem@"+agentURL,opts,messages,true)):result;
		result=trimJSON(result);
		/*#{1HIBTKRG70PostCall*/
		/*}#1HIBTKRG70PostCall*/
		return {result:result};
	};
	PackMem.jaxId="1HIBTKRG70"
	PackMem.url="PackMem@"+agentURL
	
	agent={
		isAIAgent:true,
		session:session,
		name:"UpdatePack",
		url:agentURL,
		autoStart:true,
		jaxId:"1HIBTGACI0",
		context:context,
		livingSeg:null,
		execChat:async function(input){
			let result;
			/*#{1HIBTGACI0PreEntry*/
			/*}#1HIBTGACI0PreEntry*/
			result={seg:DoPack,"input":input};
			/*#{1HIBTGACI0PostEntry*/
			/*}#1HIBTGACI0PostEntry*/
			return result;
		},
		/*#{1HIBTGACI0MoreAgentAttrs*/
		/*}#1HIBTGACI0MoreAgentAttrs*/
	};
	/*#{1HIBTGACI0PostAgent*/
	/*}#1HIBTGACI0PostAgent*/
	return agent;
};
/*#{1HIBTGACI0ExCodes*/
/*}#1HIBTGACI0ExCodes*/


export default UpdatePack;
export{UpdatePack};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "DocAIAgent",
//	"jaxId": "1HIBTGACI0",
//	"editVersion": 28,
//	"attrs": {
//		"editObjs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIBTGACI1",
//			"editVersion": 2,
//			"attrs": {
//				"UpdatePack": {
//					"type": "objclass",
//					"def": "ObjClass",
//					"jaxId": "1HIBTGACJ0",
//					"editVersion": 18,
//					"attrs": {
//						"constructArgs": {
//							"type": "object",
//							"jaxId": "1HIBTGACJ1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"superClass": "",
//						"properties": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBTGACJ2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"functions": {
//							"type": "object",
//							"def": "Functions",
//							"jaxId": "1HIBTGACJ3",
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
//			"jaxId": "1HIBTGACI2",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"segs": {
//			"type": "array",
//			"attrs": [
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HIBTKJ2N0",
//					"editVersion": 46,
//					"attrs": {
//						"id": "DoPack",
//						"label": "New AI Seg",
//						"x": "140",
//						"y": "200",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBTKJ2Q0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBTKJ2Q1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBTKJ2N1",
//							"editVersion": 8,
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
//					"def": "callLLM",
//					"jaxId": "1HIBTKRG70",
//					"editVersion": 193,
//					"attrs": {
//						"id": "PackMem",
//						"label": "New AI Seg",
//						"x": "310",
//						"y": "130",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBTKRG71",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBTKRG72",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "执行一次LLM调用。",
//						"codes": "true",
//						"mkpInput": "[\t{\"role\":\"user\":\"My name is Bob\"},\t{\"role\":\"assistant\":\"Hello bob.\"},]",
//						"mode": "GPT-4 Turbo",
//						"system": "你是一个提炼总结小说段落内容的AI。根据用户提供的小说段落内容，提炼摘要，注意要包括对故事情节可能产生影响的内容。\n请使用JSON输出，格式为：\n{\n\t\"brief\":\"总结的摘要内容\"\n}",
//						"temperature": "0",
//						"maxToken": "2800",
//						"topP": "1",
//						"fqcP": "0",
//						"prcP": "0",
//						"messages": {
//							"type": "array",
//							"attrs": []
//						},
//						"prompt": "#`\n需要提炼内容的小说段落：\n\n\\`\\`\\`\n${input}\n\\`\\`\\`\n\n请用JSON格式输出提炼后的内容：\n`",
//						"seed": "",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBTKRG80",
//							"editVersion": 46,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							}
//						},
//						"secret": "false",
//						"allowCheat": "false",
//						"GPTCheats": {
//							"type": "array",
//							"attrs": []
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
//						"responseFormat": "json_object",
//						"inputPrefix": "",
//						"inputPostfix": ""
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
//			"jaxId": "1HIBTGACI3",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"context": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIBTGACI4",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"globalMockup": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIBTGACI5",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"desc": "这是一个AI代理。",
//		"exportAPI": "false",
//		"apiArgs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIBTGACI6",
//			"editVersion": 0,
//			"attrs": {}
//		}
//	}
//}