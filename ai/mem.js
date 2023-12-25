//Auto genterated by Cody
import {$P,VFACT,callAfter} from "/@vfact";
import pathLib from "/@path";
import inherits from "/@inherits";
import Base64 from "/@tabos/utils/base64.js";
import {trimJSON} from "/@aichat/utils.js";
/*#{1HE544DRT0MoreImports*/
import config from "./config.js";
/*}#1HE544DRT0MoreImports*/
const agentURL=(new URL(import.meta.url)).pathname;
const basePath=pathLib.dirname(agentURL);
const $ln=VFACT.lanCode||"EN";
/*#{1HE544DRT0StartDoc*/
/*}#1HE544DRT0StartDoc*/
//----------------------------------------------------------------------------
let mem=async function(session){
	let context,globalContext;
	let self;
	let PackMem,LogMemory;
	/*#{1HE544DRT0LocalVals*/
	let PACK_SEG_NUM=config.PACK_SEG_NUM;
	/*}#1HE544DRT0LocalVals*/
	
	/*#{1HE544DRT0PreContext*/
	/*}#1HE544DRT0PreContext*/
	globalContext=session.globalContext;
	context={};
	context=VFACT.flexState(context);
	/*#{1HE544DRT0PostContext*/
	/*}#1HE544DRT0PostContext*/
	let agent,segs={};
	segs["PackMem"]=PackMem=async function(input){//:1HE54ITR30
		let prompt;
		let result=null;
		/*#{1HE54ITR30Input*/
		let packed=globalContext.PackedSegs.length;
		let list=globalContext.StorySegs;
		let segNum=list.length;
		segNum-=packed*PACK_SEG_NUM;
		if(segNum>=PACK_SEG_NUM*2){
			list=list.slice(packed*PACK_SEG_NUM,packed*PACK_SEG_NUM+PACK_SEG_NUM).map(item=>item.text);
			input=list.join("\n");
		}else{
			input="";
			return {result:null};
		}
		/*}#1HE54ITR30Input*/
		
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
		/*#{1HE54ITR30PrePrompt*/
		/*}#1HE54ITR30PrePrompt*/
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
		/*#{1HE54ITR30PreCall*/
		/*}#1HE54ITR30PreCall*/
		result=(result===null)?(await session.callSegLLM("PackMem@"+agentURL,opts,messages,true)):result;
		result=trimJSON(result);
		/*#{1HE54ITR30PostCall*/
		let memory;
		memory=result.brief;
		if(memory){
			globalContext.PackedSegs.push(memory);
			result=memory;
		}else{
			memory=null;
		}
		/*}#1HE54ITR30PostCall*/
		return {seg:LogMemory,result:(result),preSeg:"1HE54ITR30",outlet:"1HE54ITR31"};
	};
	PackMem.jaxId="1HE54ITR30"
	PackMem.url="PackMem@"+agentURL
	
	segs["LogMemory"]=LogMemory=async function(input){//:1HE5KFKGL0
		let result=input;
		let role="event";
		let content=`New memory: ${globalContext.PackedSegs.join("\n")}`;
		/*#{1HE5KFKGL0PreCodes*/
		/*}#1HE5KFKGL0PreCodes*/
		session.addChatText(role,content);
		/*#{1HE5KFKGL0PostCodes*/
		/*}#1HE5KFKGL0PostCodes*/
		return {result:result};
	};
	LogMemory.jaxId="1HE5KFKGL0"
	LogMemory.url="LogMemory@"+agentURL
	
	agent={
		isAIAgent:true,
		session:session,
		name:"mem",
		url:agentURL,
		autoStart:true,
		jaxId:"1HE544DRT0",
		context:context,
		livingSeg:null,
		execChat:async function(input){
			let result;
			/*#{1HE544DRT0PreEntry*/
			/*}#1HE544DRT0PreEntry*/
			result={seg:PackMem,"input":input};
			/*#{1HE544DRT0PostEntry*/
			/*}#1HE544DRT0PostEntry*/
			return result;
		},
		/*#{1HE544DRT0MoreAgentAttrs*/
		/*}#1HE544DRT0MoreAgentAttrs*/
	};
	/*#{1HE544DRT0PostAgent*/
	/*}#1HE544DRT0PostAgent*/
	return agent;
};
/*#{1HE544DRT0ExCodes*/
/*}#1HE544DRT0ExCodes*/


export default mem;
export{mem};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "DocAIAgent",
//	"jaxId": "1HE544DRT0",
//	"editVersion": 24,
//	"attrs": {
//		"editObjs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HE544DRT1",
//			"editVersion": 2,
//			"attrs": {
//				"mem": {
//					"type": "objclass",
//					"def": "ObjClass",
//					"jaxId": "1HE544DRT6",
//					"editVersion": 20,
//					"attrs": {
//						"constructArgs": {
//							"type": "object",
//							"jaxId": "1HE544DRU0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"superClass": "",
//						"properties": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HE544DRU1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"functions": {
//							"type": "object",
//							"def": "Functions",
//							"jaxId": "1HE544DRU2",
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
//			"jaxId": "1HE544DRT2",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"segs": {
//			"type": "array",
//			"attrs": [
//				{
//					"type": "aiseg",
//					"def": "callLLM",
//					"jaxId": "1HE54ITR30",
//					"editVersion": 173,
//					"attrs": {
//						"id": "PackMem",
//						"label": "New AI Seg",
//						"x": "140",
//						"y": "220",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HE54ITR60",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HE54ITR61",
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
//							"jaxId": "1HE54ITR31",
//							"editVersion": 42,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HE5KFKGL0"
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
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HE5KFKGL0",
//					"editVersion": 96,
//					"attrs": {
//						"id": "LogMemory",
//						"label": "New AI Seg",
//						"x": "350",
//						"y": "220",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HE5KHHTS0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HE5KHHTS1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"role": "Event",
//						"text": "#`New memory: ${globalContext.PackedSegs.join(\"\\n\")}`",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HE5KFKGL1",
//							"editVersion": 26,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							}
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
//			"jaxId": "1HE544DRT3",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"context": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HE544DRT4",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"globalMockup": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HE544DRT5",
//			"editVersion": 16,
//			"attrs": {
//				"memory": {
//					"type": "string",
//					"valText": "user like red"
//				},
//				"packMemMode": {
//					"type": "string",
//					"valText": "GPT4"
//				}
//			}
//		},
//		"desc": "这是一个AI代理。",
//		"exportAPI": "false",
//		"apiArgs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HI96L9970",
//			"editVersion": 0,
//			"attrs": {}
//		}
//	}
//}