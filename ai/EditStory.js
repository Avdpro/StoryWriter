//Auto genterated by Cody
import {$P,VFACT,callAfter} from "/@vfact";
import pathLib from "/@path";
import inherits from "/@inherits";
import Base64 from "/@tabos/utils/base64.js";
import {trimJSON} from "/@aichat/utils.js";
/*#{1HIAPD7FP0MoreImports*/
import config from "./config.js";
/*}#1HIAPD7FP0MoreImports*/
const agentURL=(new URL(import.meta.url)).pathname;
const basePath=pathLib.dirname(agentURL);
const $ln=VFACT.lanCode||"EN";
/*#{1HIAPD7FP0StartDoc*/
const app=VFACT.app;
/*}#1HIAPD7FP0StartDoc*/
//----------------------------------------------------------------------------
let EditStory=async function(session){
	let context,globalContext;
	let self;
	let Menu,TitleTip,EditTitle,BackgroundTip,EditBackground,AskTodo,Done,ChatTip,EditTip,AskEdit,AskChat,AIWrite,PicTip,AskPic,AIDraw,UpdateText,UpdatePic,AskDelete,DoDelete,UpdatePack1,UpdatePack2,TitleDone,BackgroundDone,ChooseSeg,CheckSeg,Choose,AskDeletePic,DeletePic,SEG1HIBFMA2K0,Resize,CheckPic,ShowReuslt,ShowEditSeg,SafeDraw,DrawError,Start,CatchError;
	/*#{1HIAPD7FP0LocalVals*/
	let PACK_SEG_NUM=config.PACK_SEG_NUM;
	/*}#1HIAPD7FP0LocalVals*/
	
	/*#{1HIAPD7FP0PreContext*/
	/*}#1HIAPD7FP0PreContext*/
	globalContext=session.globalContext;
	context={};
	context=VFACT.flexState(context);
	/*#{1HIAPD7FP0PostContext*/
	/*}#1HIAPD7FP0PostContext*/
	let agent,segs={};
	segs["Menu"]=Menu=async function(input){//:1HIAQG6B46
		let prompt=("请问要修改什么？")||input;
		let items=[
			{icon:"/~/-tabos/shared/assets/hudtxt.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"修改标题",code:0},
			{icon:"/~/-tabos/shared/assets/copy.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"修改设定",code:1},
			{icon:"/~/-tabos/shared/assets/lines.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"修改段落",code:2},
			{icon:"/~/-tabos/shared/assets/close.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"取消修改",code:3},
		];
		let result="";
		let item=null;
		let multi=false;
		
		[result,item]=await session.askUserRaw({type:"menu",prompt:prompt,multiSelect:multi,items:items});
		if(multi){
			return {seg:TitleTip,result:(result),preSeg:"1HIAQG6B46",outlet:"1HIAPDRRF0"};
		}
		if(item.code===0){
			return {seg:TitleTip,result:(result),preSeg:"1HIAQG6B46",outlet:"1HIAPDRRF0"};
		}
		if(item.code===1){
			return {seg:BackgroundTip,result:(result),preSeg:"1HIAQG6B46",outlet:"1HIAPDRRF1"};
		}
		if(item.code===2){
			return {seg:ChooseSeg,result:(result),preSeg:"1HIAQG6B46",outlet:"1HIAPDRRF2"};
		}
		if(item.code===3){
			return {seg:Done,result:(result),preSeg:"1HIAQG6B46",outlet:"1HIAQG6B47"};
		}
		return {result:result};
	
	};
	Menu.jaxId="1HIAQG6B46"
	Menu.url="Menu@"+agentURL
	
	segs["TitleTip"]=TitleTip=async function(input){//:1HIAQG6B40
		let result=input;
		let role="assistant";
		let content="请输入新的标题";
		session.addChatText(role,content);
		return {seg:EditTitle,result:(result),preSeg:"1HIAQG6B40",outlet:"1HIAQG6B48"};
	};
	TitleTip.jaxId="1HIAQG6B40"
	TitleTip.url="TitleTip@"+agentURL
	
	segs["EditTitle"]=EditTitle=async function(input){//:1HIAQG6B41
		let prompt=("Please input")||input;
		let placeholder=("");
		let text=(globalContext.StoryTitle);
		let result="";
		/*#{1HIAQG6B41PreCodes*/
		/*}#1HIAQG6B41PreCodes*/
		result=await session.askChatInput({type:"input",prompt:prompt,placeholder:placeholder,text:text});
		session.addChatText("user",result);
		/*#{1HIAQG6B41PostCodes*/
		globalContext.StoryTitle=result;
		/*}#1HIAQG6B41PostCodes*/
		return {seg:TitleDone,result:(result),preSeg:"1HIAQG6B41",outlet:"1HIAQG6B49"};
	};
	EditTitle.jaxId="1HIAQG6B41"
	EditTitle.url="EditTitle@"+agentURL
	
	segs["BackgroundTip"]=BackgroundTip=async function(input){//:1HIAQG6B42
		let result=input;
		let role="assistant";
		let content=input;
		session.addChatText(role,content);
		return {seg:EditBackground,result:(result),preSeg:"1HIAQG6B42",outlet:"1HIAQG6B50"};
	};
	BackgroundTip.jaxId="1HIAQG6B42"
	BackgroundTip.url="BackgroundTip@"+agentURL
	
	segs["EditBackground"]=EditBackground=async function(input){//:1HIAQG6B43
		let prompt=("Please input")||input;
		let placeholder=("");
		let text=(globalContext.StoryBackground);
		let result="";
		/*#{1HIAQG6B43PreCodes*/
		/*}#1HIAQG6B43PreCodes*/
		result=await session.askChatInput({type:"input",prompt:prompt,placeholder:placeholder,text:text});
		session.addChatText("user",result);
		/*#{1HIAQG6B43PostCodes*/
		globalContext.StoryBackground=result;
		/*}#1HIAQG6B43PostCodes*/
		return {seg:BackgroundDone,result:(result),preSeg:"1HIAQG6B43",outlet:"1HIAQG6B51"};
	};
	EditBackground.jaxId="1HIAQG6B43"
	EditBackground.url="EditBackground@"+agentURL
	
	segs["AskTodo"]=AskTodo=async function(input){//:1HIAQG6B54
		let prompt=("请问如何修改这个段落")||input;
		let items=[
			{icon:"/~/-tabos/shared/assets/edit.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"编辑文本",code:0},
			{icon:"/~/-tabos/shared/assets/aichat.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"指导 AI 修改文本",code:1},
			{icon:"/~/-tabos/shared/assets/hudimg.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"添加/更换插图",code:2},
			{icon:"/~/-tabos/shared/assets/trash.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"删除插图",code:3},
			{icon:"/~/-tabos/shared/assets/trash.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"删除这个段落",code:4},
			{icon:"/~/-tabos/shared/assets/close.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"取消修改",code:5},
		];
		let result="";
		let item=null;
		let multi=false;
		
		[result,item]=await session.askUserRaw({type:"menu",prompt:prompt,multiSelect:multi,items:items});
		if(multi){
			return {seg:EditTip,result:(result),preSeg:"1HIAQG6B54",outlet:"1HIAPJL3Q0"};
		}
		if(item.code===0){
			return {seg:EditTip,result:(result),preSeg:"1HIAQG6B54",outlet:"1HIAPJL3Q0"};
		}
		if(item.code===1){
			return {seg:ChatTip,result:(result),preSeg:"1HIAQG6B54",outlet:"1HIAPJL3Q1"};
		}
		if(item.code===2){
			return {seg:PicTip,result:(result),preSeg:"1HIAQG6B54",outlet:"1HIAPJL3Q2"};
		}
		if(item.code===3){
			return {seg:AskDeletePic,result:(result),preSeg:"1HIAQG6B54",outlet:"1HIBFMA2L0"};
		}
		if(item.code===4){
			return {seg:AskDelete,result:(result),preSeg:"1HIAQG6B54",outlet:"1HIAQG6B55"};
		}
		if(item.code===5){
			return {seg:Done,result:(result),preSeg:"1HIAQG6B54",outlet:"1HIC369C70"};
		}
		return {result:result};
	
	};
	AskTodo.jaxId="1HIAQG6B54"
	AskTodo.url="AskTodo@"+agentURL
	
	segs["ChatTip"]=ChatTip=async function(input){//:1HIAQG6B56
		let result=input;
		let role="assistant";
		let content="请输入修改指引";
		session.addChatText(role,content);
		return {seg:AskChat,result:(result),preSeg:"1HIAQG6B56",outlet:"1HIAQG6B57"};
	};
	ChatTip.jaxId="1HIAQG6B56"
	ChatTip.url="ChatTip@"+agentURL
	
	segs["EditTip"]=EditTip=async function(input){//:1HIAQG6B58
		let result=input;
		let role="assistant";
		let content="请直接修改段落的内容";
		session.addChatText(role,content);
		return {seg:AskEdit,result:(result),preSeg:"1HIAQG6B58",outlet:"1HIAQG6B59"};
	};
	EditTip.jaxId="1HIAQG6B58"
	EditTip.url="EditTip@"+agentURL
	
	segs["AskEdit"]=AskEdit=async function(input){//:1HIAQG6B510
		let prompt=("Please input")||input;
		let placeholder=("");
		let text=(context.editSeg.text);
		let result="";
		result=await session.askChatInput({type:"input",prompt:prompt,placeholder:placeholder,text:text});
		session.addChatText("user",result);
		return {seg:UpdateText,result:(result),preSeg:"1HIAQG6B510",outlet:"1HIAQG6B511"};
	};
	AskEdit.jaxId="1HIAQG6B510"
	AskEdit.url="AskEdit@"+agentURL
	
	segs["AskChat"]=AskChat=async function(input){//:1HIAQG6B512
		let prompt=("Please input")||input;
		let placeholder=("");
		let text=("");
		let result="";
		result=await session.askChatInput({type:"input",prompt:prompt,placeholder:placeholder,text:text});
		session.addChatText("user",result);
		return {seg:AIWrite,result:(result),preSeg:"1HIAQG6B512",outlet:"1HIAQG6B513"};
	};
	AskChat.jaxId="1HIAQG6B512"
	AskChat.url="AskChat@"+agentURL
	
	segs["AIWrite"]=AIWrite=async function(input){//:1HIAQG6B514
		let prompt;
		let result=null;
		/*#{1HIAQG6B514Input*/
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
		/*}#1HIAQG6B514Input*/
		
		let opts={
			mode:globalContext.LLMMode||"gpt-4-1106-preview",
			maxToken:3186,
			temperature:0.8,
			topP:1,
			fqcP:0,
			prcP:0,
			secret:false,
			responseFormat:"json_object"
		};
		let chatMem=AIWrite.messages
		let seed="";
		if(seed!==undefined){opts.seed=seed;}
		let messages=[
			{role:"system",content:`
你是一个通过与用户对话，修改小说段落内容的AI
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

根据用户指导修改小说里的一段文字。
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
		/*#{1HIAQG6B514PrePrompt*/
		/*}#1HIAQG6B514PrePrompt*/
		prompt=`
要修改的文本：
\`\`\`
${context.editSeg.text}
\`\`\`
用户修改指导：
${input}
请根据用户指导，输出JSON格式的三个备选的修改后的内容。
`;
		if(prompt!==null){
			messages.push({role:"user",content:prompt});
		}
		/*#{1HIAQG6B514PreCall*/
		/*}#1HIAQG6B514PreCall*/
		result=(result===null)?(await session.callSegLLM("AIWrite@"+agentURL,opts,messages,true)):result;
		result=trimJSON(result);
		/*#{1HIAQG6B514PostCall*/
		context.choices=result.choices;
		/*}#1HIAQG6B514PostCall*/
		return {seg:ShowReuslt,result:(result),preSeg:"1HIAQG6B514",outlet:"1HIAQG6B515"};
	};
	AIWrite.jaxId="1HIAQG6B514"
	AIWrite.url="AIWrite@"+agentURL
	
	segs["PicTip"]=PicTip=async function(input){//:1HIAQG6B516
		let result=input;
		let role="assistant";
		let content="请输入绘制插画的提示";
		session.addChatText(role,content);
		return {seg:AskPic,result:(result),preSeg:"1HIAQG6B516",outlet:"1HIAQG6B517"};
	};
	PicTip.jaxId="1HIAQG6B516"
	PicTip.url="PicTip@"+agentURL
	
	segs["AskPic"]=AskPic=async function(input){//:1HIAQG6B518
		let prompt=("请输入绘制插画的提示")||input;
		let placeholder=("");
		let text=("");
		let result="";
		result=await session.askChatInput({type:"input",prompt:prompt,placeholder:placeholder,text:text});
		session.addChatText("user",result);
		return {seg:SafeDraw,result:(result),preSeg:"1HIAQG6B518",outlet:"1HIAQG6B519"};
	};
	AskPic.jaxId="1HIAQG6B518"
	AskPic.url="AskPic@"+agentURL
	
	segs["AIDraw"]=AIDraw=async function(input){//:1HIAQG6B60
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

参考情节内容：
${context.editSeg.text},

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
		return {seg:Resize,result:(result),preSeg:"1HIAQG6B60",outlet:"1HIAQG6B61"};
	};
	AIDraw.jaxId="1HIAQG6B60"
	AIDraw.url="AIDraw@"+agentURL
	
	segs["UpdateText"]=UpdateText=async function(input){//:1HIAQG6B62
		let result=""
		/*#{1HIAQG6B62Code*/
		context.editSeg.text=input;
		/*}#1HIAQG6B62Code*/
		return {seg:UpdatePack1,result:(result),preSeg:"1HIAQG6B62",outlet:"1HIAQG6B63"};
	};
	UpdateText.jaxId="1HIAQG6B62"
	UpdateText.url="UpdateText@"+agentURL
	
	segs["UpdatePic"]=UpdatePic=async function(input){//:1HIAQG6B64
		let result=""
		/*#{1HIAQG6B64Code*/
		context.editSeg.image=input;
		/*}#1HIAQG6B64Code*/
		return {seg:Done,result:(result),preSeg:"1HIAQG6B64",outlet:"1HIAQG6B65"};
	};
	UpdatePic.jaxId="1HIAQG6B64"
	UpdatePic.url="UpdatePic@"+agentURL
	
	segs["AskDelete"]=AskDelete=async function(input){//:1HIAQG6B66
		let prompt=("缺点药删除这个段落么？")||input;
		let button1=("确认删除")||"OK";
		let button2=("取消")||"Cancel";
		let button3="";
		let result="";
		let value=0;
		[result,value]=await session.askUserRaw({type:"confirm",prompt:prompt,button1:button1,button2:button2,button3:button3});
		if(value===1){result=("OK")||result;
		return {seg:DoDelete,result:(result),preSeg:"1HIAQG6B66",outlet:"1HIAQ2DGU0"};}
		result=("Cancel")||result;
		return {seg:Done,result:(result),preSeg:"1HIAQG6B66",outlet:"1HIAQ2DGV0"};
	
	};
	AskDelete.jaxId="1HIAQG6B66"
	AskDelete.url="AskDelete@"+agentURL
	
	segs["DoDelete"]=DoDelete=async function(input){//:1HIAQG6B67
		let result=""
		/*#{1HIAQG6B67Code*/
		globalContext.StorySegs.splice(context.editSegIdx,1);
		/*}#1HIAQG6B67Code*/
		return {seg:UpdatePack2,result:(result),preSeg:"1HIAQG6B67",outlet:"1HIAQG6B68"};
	};
	DoDelete.jaxId="1HIAQG6B67"
	DoDelete.url="DoDelete@"+agentURL
	
	segs["UpdatePack1"]=UpdatePack1=async function(input){//:1HIAQG6B44
		let result;
		let sourcePath=pathLib.join(basePath,"./UpdatePack.js");
		/*#{1HIAQG6B44Input*/
		input={mode:"update",seg:context.editSegIdx};
		/*}#1HIAQG6B44Input*/
		result= await session.pipeChat(sourcePath,input,false);
		/*#{1HIAQG6B44Ouput*/
		/*}#1HIAQG6B44Ouput*/
		return {seg:Done,result:(result),preSeg:"1HIAQG6B44",outlet:"1HIAQG6B69"};
	};
	UpdatePack1.jaxId="1HIAQG6B44"
	UpdatePack1.url="UpdatePack1@"+agentURL
	
	segs["UpdatePack2"]=UpdatePack2=async function(input){//:1HIAQG6B45
		let result;
		let sourcePath=pathLib.join(basePath,"./UpdatePack.js");
		/*#{1HIAQG6B45Input*/
		input={mode:"delete",seg:context.editSegIdx};
		/*}#1HIAQG6B45Input*/
		result= await session.pipeChat(sourcePath,input,false);
		/*#{1HIAQG6B45Ouput*/
		/*}#1HIAQG6B45Ouput*/
		return {seg:Done,result:(result),preSeg:"1HIAQG6B45",outlet:"1HIAQG6B610"};
	};
	UpdatePack2.jaxId="1HIAQG6B45"
	UpdatePack2.url="UpdatePack2@"+agentURL
	
	segs["TitleDone"]=TitleDone=async function(input){//:1HIARK25D0
		let result=input;
		let role="event";
		let content="标题修改完毕";
		session.addChatText(role,content);
		return {seg:Done,result:(result),preSeg:"1HIARK25D0",outlet:"1HIARK25E0"};
	};
	TitleDone.jaxId="1HIARK25D0"
	TitleDone.url="TitleDone@"+agentURL
	
	segs["BackgroundDone"]=BackgroundDone=async function(input){//:1HIARK25D1
		let result=input;
		let role="event";
		let content="故事背景修改完毕";
		session.addChatText(role,content);
		return {seg:Done,result:(result),preSeg:"1HIARK25D1",outlet:"1HIARK25E1"};
	};
	BackgroundDone.jaxId="1HIARK25D1"
	BackgroundDone.url="BackgroundDone@"+agentURL
	
	segs["ChooseSeg"]=ChooseSeg=async function(input){//:1HIAV2BVA0
		let result;
		let md=await import("../ui/DlgSegs.js");
		let func=md.default;
		let dlgVO={input:input};
		/*#{1HIAV2BVA0Pre*/
		dlgVO={story:globalContext};
		/*}#1HIAV2BVA0Pre*/
		result= await VFACT.app.modalDlg(func,dlgVO);
		/*#{1HIAV2BVA0Codes*/
		/*}#1HIAV2BVA0Codes*/
		return {seg:CheckSeg,result:(result),preSeg:"1HIAV2BVA0",outlet:"1HIAV2BVA1"};
	};
	ChooseSeg.jaxId="1HIAV2BVA0"
	ChooseSeg.url="ChooseSeg@"+agentURL
	
	segs["CheckSeg"]=CheckSeg=async function(input){//:1HIAVRPU40
		/*#{1HIAVRPU40Start*/
		if(input>=0 && input!==null){
			context.editSegIdx=input;
			context.editSeg=globalContext.StorySegs[input];
		}
		/*}#1HIAVRPU40Start*/
		if(input>=0 && input!==null){
			return {seg:ShowEditSeg,result:(input),preSeg:"1HIAVRPU40",outlet:"1HIAVRPU60"};
		}
		/*#{1HIAVRPU40Post*/
		/*}#1HIAVRPU40Post*/
		return {seg:Done,result:(input),preSeg:"1HIAVRPU40",outlet:"1HIAVRPU61"};
	};
	CheckSeg.jaxId="1HIAVRPU40"
	CheckSeg.url="CheckSeg@"+agentURL
	
	segs["Choose"]=Choose=async function(input){//:1HIBF5DAL3
		let prompt=("哪一段更符合你的想法？")||input;
		let items=[
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"选择1",code:0},
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"选择2",code:1},
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"选择3",code:2},
			{icon:"/~/-tabos/shared/assets/hudbox.svg",text:"Write again",code:3},
			{icon:"/~/-tabos/shared/assets/close.svg"||"/~/-tabos/shared/assets/hudbox.svg",text:"放弃修改",code:4},
		];
		let result="";
		let item=null;
		let multi=false;
		
		[result,item]=await session.askUserRaw({type:"menu",prompt:prompt,multiSelect:multi,items:items});
		if(multi){
			return {seg:UpdateText,result:(result),preSeg:"1HIBF5DAL3",outlet:"1HIBF5DAL6"};
		}
		if(item.code===0){
			/*#{1HIBF5DAL6*/
			result=context.choices[0];
			/*}#1HIBF5DAL6*/
			return {seg:UpdateText,result:(result),preSeg:"1HIBF5DAL3",outlet:"1HIBF5DAL6"};
		}
		if(item.code===1){
			/*#{1HIBF5DAL7*/
			result=context.choices[1];
			/*}#1HIBF5DAL7*/
			return {seg:UpdateText,result:(result),preSeg:"1HIBF5DAL3",outlet:"1HIBF5DAL7"};
		}
		if(item.code===2){
			/*#{1HIBF5DAL8*/
			result=context.choices[2];
			/*}#1HIBF5DAL8*/
			return {seg:UpdateText,result:(result),preSeg:"1HIBF5DAL3",outlet:"1HIBF5DAL8"};
		}
		if(item.code===3){
			return {seg:AskChat,result:(result),preSeg:"1HIBF5DAL3",outlet:"1HIBF5DAL9"};
		}
		if(item.code===4){
			return {seg:Done,result:(result),preSeg:"1HIBF5DAL3",outlet:"1HIBIPO0S0"};
		}
		return {result:result};
	
	};
	Choose.jaxId="1HIBF5DAL3"
	Choose.url="Choose@"+agentURL
	
	segs["AskDeletePic"]=AskDeletePic=async function(input){//:1HIBFEM6P3
		let prompt=("缺点药删除这个段落么？")||input;
		let button1=("确认删除")||"OK";
		let button2=("取消")||"Cancel";
		let button3="";
		let result="";
		let value=0;
		[result,value]=await session.askUserRaw({type:"confirm",prompt:prompt,button1:button1,button2:button2,button3:button3});
		if(value===1){result=("OK")||result;
		return {seg:DeletePic,result:(result),preSeg:"1HIBFEM6P3",outlet:"1HIBFEM6P6"};}
		result=("Cancel")||result;
		return {seg:Done,result:(result),preSeg:"1HIBFEM6P3",outlet:"1HIBFEM6P7"};
	
	};
	AskDeletePic.jaxId="1HIBFEM6P3"
	AskDeletePic.url="AskDeletePic@"+agentURL
	
	segs["DeletePic"]=DeletePic=async function(input){//:1HIBFMA2L1
		let result=""
		/*#{1HIBFMA2L1Code*/
		delete context.editSeg.image;
		/*}#1HIBFMA2L1Code*/
		return {seg:SEG1HIBFMA2K0,result:(result),preSeg:"1HIBFMA2L1",outlet:"1HIBFMA2L2"};
	};
	DeletePic.jaxId="1HIBFMA2L1"
	DeletePic.url="DeletePic@"+agentURL
	
	segs["SEG1HIBFMA2K0"]=SEG1HIBFMA2K0=async function(input){//:1HIBFMA2K0
		let result=input;
		let role="assistant";
		let content="段落插图已删除";
		session.addChatText(role,content);
		return {seg:Done,result:(result),preSeg:"1HIBFMA2K0",outlet:"1HIBFMA2L3"};
	};
	SEG1HIBFMA2K0.jaxId="1HIBFMA2K0"
	SEG1HIBFMA2K0.url="SEG1HIBFMA2K0@"+agentURL
	
	segs["Resize"]=Resize=async function(input){//:1HIBGPKUT0
		let result=input;
		let role="assistant";
		let content="更新后的插图";
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
		return {seg:CheckPic,result:(result),preSeg:"1HIBGPKUT0",outlet:"1HIBGPKUT1"};
	};
	Resize.jaxId="1HIBGPKUT0"
	Resize.url="Resize@"+agentURL
	
	segs["CheckPic"]=CheckPic=async function(input){//:1HIBGQ2RO3
		let prompt=("是否使用这幅插画")||input;
		let button1=("使用")||"OK";
		let button2=("重画")||"Cancel";
		let button3=("放弃修改插画")||"";
		let result="";
		let value=0;
		/*#{1HIBGQ2RO3PreCodes*/
		/*}#1HIBGQ2RO3PreCodes*/
		[result,value]=await session.askUserRaw({type:"confirm",prompt:prompt,button1:button1,button2:button2,button3:button3});
		/*#{1HIBGQ2RO3PostCodes*/
		/*}#1HIBGQ2RO3PostCodes*/
		if(value===1){result=(input)||result;
		return {seg:UpdatePic,result:(result),preSeg:"1HIBGQ2RO3",outlet:"1HIBGQ2RO6"};}
		if(value===2){result=("")||result;
		return {seg:Done,result:(result),preSeg:"1HIBGQ2RO3",outlet:"1HIBGQ2RP1"};}
		result=("Cancel")||result;
		return {seg:PicTip,result:(result),preSeg:"1HIBGQ2RO3",outlet:"1HIBGQ2RP0"};
	
	};
	CheckPic.jaxId="1HIBGQ2RO3"
	CheckPic.url="CheckPic@"+agentURL
	
	segs["ShowReuslt"]=ShowReuslt=async function(input){//:1HIBIQHV60
		let result=input;
		let role="assistant";
		let content=input;
		/*#{1HIBIQHV60PreCodes*/
		content=`**选择1**:  \n${input.choices[0]}  \n\n**选择2**:  \n${input.choices[1]}  \n\n**选择3**:  \n${input.choices[2]}`;
		/*}#1HIBIQHV60PreCodes*/
		session.addChatText(role,content);
		/*#{1HIBIQHV60PostCodes*/
		/*}#1HIBIQHV60PostCodes*/
		return {seg:Choose,result:(result),preSeg:"1HIBIQHV60",outlet:"1HIBIQHV80"};
	};
	ShowReuslt.jaxId="1HIBIQHV60"
	ShowReuslt.url="ShowReuslt@"+agentURL
	
	segs["ShowEditSeg"]=ShowEditSeg=async function(input){//:1HIBV36A90
		let result=input;
		let role="assistant";
		let content=input;
		/*#{1HIBV36A90PreCodes*/
		let seg=context.editSeg;
		if(seg.image){
			content=`**修改目标段落**:  \n![pic](${seg.image})  \n${seg.text}`;
		}else{
			content=`**修改目标段落**:  \n${seg.text}`;
		}
		/*}#1HIBV36A90PreCodes*/
		session.addChatText(role,content);
		/*#{1HIBV36A90PostCodes*/
		/*}#1HIBV36A90PostCodes*/
		return {seg:AskTodo,result:(result),preSeg:"1HIBV36A90",outlet:"1HIBV36A91"};
	};
	ShowEditSeg.jaxId="1HIBV36A90"
	ShowEditSeg.url="ShowEditSeg@"+agentURL
	
	segs["SafeDraw"]=SafeDraw=async function(input){//:1HIEMFENP0
		let result=input;
		/*#{1HIEMFENP0Code*/
		/*}#1HIEMFENP0Code*/
		return {seg:AIDraw,result:(result),preSeg:"1HIEMFENP0",outlet:"1HIEMFENP1",catchSeg:DrawError,catchlet:"1HIEMFENP2"};
	};
	SafeDraw.jaxId="1HIEMFENP0"
	SafeDraw.url="SafeDraw@"+agentURL
	
	segs["DrawError"]=DrawError=async function(input){//:1HIEMFENP3
		let result=input;
		let role="event";
		let content="绘制插图失败，如果提示Gas不足，说明需要更多能量。您需要至少110能量才可以调用绘制图片的AI。";
		session.addChatText(role,content);
		return {seg:Done,result:(result),preSeg:"1HIEMFENP3",outlet:"1HIEMFENP4"};
	};
	DrawError.jaxId="1HIEMFENP3"
	DrawError.url="DrawError@"+agentURL
	
	segs["Start"]=Start=async function(input){//:1HIEMIKSE0
		let result=input;
		/*#{1HIEMIKSE0Code*/
		/*}#1HIEMIKSE0Code*/
		return {seg:Menu,result:(result),preSeg:"1HIEMIKSE0",outlet:"1HIEMIKSE1",catchSeg:CatchError,catchlet:"1HIEMIKSE2"};
	};
	Start.jaxId="1HIEMIKSE0"
	Start.url="Start@"+agentURL
	
	segs["CatchError"]=CatchError=async function(input){//:1HIEMIKSE3
		let result=input;
		let role="event";
		let content="编辑文章遇到错误，编辑已取消";
		session.addChatText(role,content);
		return {seg:Done,result:(result),preSeg:"1HIEMIKSE3",outlet:"1HIEMIKSE4"};
	};
	CatchError.jaxId="1HIEMIKSE3"
	CatchError.url="CatchError@"+agentURL
	
	agent={
		isAIAgent:true,
		session:session,
		name:"EditStory",
		url:agentURL,
		autoStart:true,
		jaxId:"1HIAPD7FP0",
		context:context,
		livingSeg:null,
		execChat:async function(input){
			let result;
			/*#{1HIAPD7FP0PreEntry*/
			/*}#1HIAPD7FP0PreEntry*/
			result={seg:Start,"input":input};
			/*#{1HIAPD7FP0PostEntry*/
			/*}#1HIAPD7FP0PostEntry*/
			return result;
		},
		/*#{1HIAPD7FP0MoreAgentAttrs*/
		/*}#1HIAPD7FP0MoreAgentAttrs*/
	};
	/*#{1HIAPD7FP0PostAgent*/
	/*}#1HIAPD7FP0PostAgent*/
	return agent;
};
/*#{1HIAPD7FP0ExCodes*/
/*}#1HIAPD7FP0ExCodes*/


export default EditStory;
export{EditStory};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "DocAIAgent",
//	"jaxId": "1HIAPD7FP0",
//	"editVersion": 30,
//	"attrs": {
//		"editObjs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIAPD7FP1",
//			"editVersion": 2,
//			"attrs": {
//				"EditStory": {
//					"type": "objclass",
//					"def": "ObjClass",
//					"jaxId": "1HIAPD7FQ0",
//					"editVersion": 30,
//					"attrs": {
//						"constructArgs": {
//							"type": "object",
//							"jaxId": "1HIAPD7FR0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"superClass": "",
//						"properties": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAPD7FR1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"functions": {
//							"type": "object",
//							"def": "Functions",
//							"jaxId": "1HIAPD7FR2",
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
//			"jaxId": "1HIAPD7FP2",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"segs": {
//			"type": "array",
//			"attrs": [
//				{
//					"type": "aiseg",
//					"def": "askMenu",
//					"jaxId": "1HIAQG6B46",
//					"editVersion": 89,
//					"attrs": {
//						"id": "Menu",
//						"label": "New AI Seg",
//						"x": "110",
//						"y": "330",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "请问要修改什么？",
//						"multi": "false",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIAPDRRF0",
//									"editVersion": 42,
//									"attrs": {
//										"id": "Title",
//										"text": "修改标题",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/hudtxt.svg"
//									},
//									"linkedSeg": "1HIAQG6B40"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIAPDRRF1",
//									"editVersion": 53,
//									"attrs": {
//										"id": "Background",
//										"text": "修改设定",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/copy.svg"
//									},
//									"linkedSeg": "1HIAQG6B42"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIAPDRRF2",
//									"editVersion": 56,
//									"attrs": {
//										"id": "Seg",
//										"text": "修改段落",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/lines.svg"
//									},
//									"linkedSeg": "1HIAV2BVA0"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIAQG6B47",
//									"editVersion": 47,
//									"attrs": {
//										"id": "Cancel",
//										"text": "取消修改",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/close.svg"
//									},
//									"linkedSeg": "1HIAQG6BA2"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIAQG6B40",
//					"editVersion": 102,
//					"attrs": {
//						"id": "TitleTip",
//						"label": "New AI Seg",
//						"x": "340",
//						"y": "60",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA3",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA4",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "请输入新的标题",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B48",
//							"editVersion": 28,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B41"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askChat",
//					"jaxId": "1HIAQG6B41",
//					"editVersion": 118,
//					"attrs": {
//						"id": "EditTitle",
//						"label": "New AI Seg",
//						"x": "620",
//						"y": "60",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA5",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA6",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"prompt": "Please input",
//						"placeholder": "",
//						"text": "#globalContext.StoryTitle",
//						"file": "false",
//						"showText": "true",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B49",
//							"editVersion": 27,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIARK25D0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIAQG6B42",
//					"editVersion": 93,
//					"attrs": {
//						"id": "BackgroundTip",
//						"label": "New AI Seg",
//						"x": "360",
//						"y": "150",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA7",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA8",
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
//							"jaxId": "1HIAQG6B50",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B43"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askChat",
//					"jaxId": "1HIAQG6B43",
//					"editVersion": 99,
//					"attrs": {
//						"id": "EditBackground",
//						"label": "New AI Seg",
//						"x": "600",
//						"y": "150",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA9",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA10",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"prompt": "Please input",
//						"placeholder": "",
//						"text": "#globalContext.StoryBackground",
//						"file": "false",
//						"showText": "true",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B51",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIARK25D1"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askMenu",
//					"jaxId": "1HIAQG6B54",
//					"editVersion": 115,
//					"attrs": {
//						"id": "AskTodo",
//						"label": "New AI Seg",
//						"x": "1030",
//						"y": "370",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA13",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA14",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "请问如何修改这个段落",
//						"multi": "false",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIAPJL3Q0",
//									"editVersion": 44,
//									"attrs": {
//										"id": "Edit",
//										"text": "编辑文本",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/edit.svg"
//									},
//									"linkedSeg": "1HIAQG6B58"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIAPJL3Q1",
//									"editVersion": 48,
//									"attrs": {
//										"id": "Chat",
//										"text": "指导 AI 修改文本",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/aichat.svg"
//									},
//									"linkedSeg": "1HIAQG6B56"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIAPJL3Q2",
//									"editVersion": 39,
//									"attrs": {
//										"id": "Pic",
//										"text": "添加/更换插图",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/hudimg.svg"
//									},
//									"linkedSeg": "1HIAQG6B516"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIBFMA2L0",
//									"editVersion": 41,
//									"attrs": {
//										"id": "DelPic",
//										"text": "删除插图",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/trash.svg"
//									},
//									"linkedSeg": "1HIBFEM6P3"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIAQG6B55",
//									"editVersion": 49,
//									"attrs": {
//										"id": "Delete",
//										"text": "删除这个段落",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/trash.svg"
//									},
//									"linkedSeg": "1HIAQG6B66"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIC369C70",
//									"editVersion": 30,
//									"attrs": {
//										"id": "Cancel",
//										"text": "取消修改",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/close.svg"
//									},
//									"linkedSeg": "1HIC2UGSO0"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIAQG6BA2",
//					"editVersion": 51,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "340",
//						"y": "540",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIAQG6B56",
//					"editVersion": 114,
//					"attrs": {
//						"id": "ChatTip",
//						"label": "New AI Seg",
//						"x": "1270",
//						"y": "330",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA15",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA16",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "请输入修改指引",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B57",
//							"editVersion": 28,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B512"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIAQG6B58",
//					"editVersion": 122,
//					"attrs": {
//						"id": "EditTip",
//						"label": "New AI Seg",
//						"x": "1270",
//						"y": "250",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA17",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA18",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "请直接修改段落的内容",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B59",
//							"editVersion": 30,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B510"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askChat",
//					"jaxId": "1HIAQG6B510",
//					"editVersion": 132,
//					"attrs": {
//						"id": "AskEdit",
//						"label": "New AI Seg",
//						"x": "1490",
//						"y": "70",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA19",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA20",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "Please input",
//						"placeholder": "",
//						"text": "#context.editSeg.text",
//						"file": "false",
//						"showText": "true",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B511",
//							"editVersion": 30,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B62"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askChat",
//					"jaxId": "1HIAQG6B512",
//					"editVersion": 132,
//					"attrs": {
//						"id": "AskChat",
//						"label": "New AI Seg",
//						"x": "1490",
//						"y": "240",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA21",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA22",
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
//							"jaxId": "1HIAQG6B513",
//							"editVersion": 28,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B514"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "callLLM",
//					"jaxId": "1HIAQG6B514",
//					"editVersion": 456,
//					"attrs": {
//						"id": "AIWrite",
//						"label": "New AI Seg",
//						"x": "1710",
//						"y": "240",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA23",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA24",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "执行一次LLM调用。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"mode": "#globalContext.LLMMode||\"gpt-4-1106-preview\"",
//						"system": "#`\n你是一个通过与用户对话，修改小说段落内容的AI\n当前小说名称：\"${globalContext.StoryTitle}\"\n当前小说背景设定：\n\\`\\`\\`\n${globalContext.StoryBackground}\n\\`\\`\\`\n当前小说已撰写内容：\n\\`\\`\\`\n前文概要：${prefix}\n${content}\n\\`\\`\\`\n\n根据用户指导修改小说里的一段文字。\n请生成三段备选内容，用JSON格式输出，例如：\n\\`\\`\\`\n{\n\t\"choices\":[\n    \t\"第1备选文字内容\",\n    \t\"第2备选文字内容\",\n    \t\"第3备选文字内容\"\n    ]\n}\n\\`\\`\\`\n`",
//						"temperature": "0.80",
//						"maxToken": "3186",
//						"topP": "1",
//						"fqcP": "0",
//						"prcP": "0",
//						"messages": {
//							"type": "array",
//							"attrs": []
//						},
//						"prompt": "#`\n要修改的文本：\n\\`\\`\\`\n${context.editSeg.text}\n\\`\\`\\`\n用户修改指导：\n${input}\n请根据用户指导，输出JSON格式的三个备选的修改后的内容。\n`",
//						"seed": "",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B515",
//							"editVersion": 26,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBIQHV60"
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
//						"responseFormat": "json_object"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIAQG6B516",
//					"editVersion": 107,
//					"attrs": {
//						"id": "PicTip",
//						"label": "New AI Seg",
//						"x": "1270",
//						"y": "410",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA25",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA26",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "请输入绘制插画的提示",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B517",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B518"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askChat",
//					"jaxId": "1HIAQG6B518",
//					"editVersion": 119,
//					"attrs": {
//						"id": "AskPic",
//						"label": "New AI Seg",
//						"x": "1490",
//						"y": "410",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA27",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA28",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "请输入绘制插画的提示",
//						"placeholder": "",
//						"text": "",
//						"file": "false",
//						"showText": "true",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B519",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIEMFENP0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "aiDraw",
//					"jaxId": "1HIAQG6B60",
//					"editVersion": 147,
//					"attrs": {
//						"id": "AIDraw",
//						"label": "New AI Seg",
//						"x": "1900",
//						"y": "360",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA29",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA30",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "#`\n为小说 “${globalContext.StoryTitle}” 绘制一幅插画:\n\n使用风格：\n${globalContext.DrawStyle},\n\n故事背景：\n${globalContext.StoryBackground},\n\n参考情节内容：\n${context.editSeg.text},\n\n${input?(\"并按照用户的指引：\"+input):\"\"}\n`",
//						"seed": "",
//						"mode": "DALL-E 3",
//						"showImage": "false",
//						"size": "1792x1024",
//						"imgLabel": "AI Picture:",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B61",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBGPKUT0"
//						},
//						"method": "Draw",
//						"image": "",
//						"mask": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HIAQG6B62",
//					"editVersion": 148,
//					"attrs": {
//						"id": "UpdateText",
//						"label": "New AI Seg",
//						"x": "2350",
//						"y": "70",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA31",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA32",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B63",
//							"editVersion": 30,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBG8KMB0"
//						},
//						"result": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HIAQG6B64",
//					"editVersion": 143,
//					"attrs": {
//						"id": "UpdatePic",
//						"label": "New AI Seg",
//						"x": "2520",
//						"y": "320",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA33",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA34",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B65",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBFI68A0"
//						},
//						"result": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askConfirm",
//					"jaxId": "1HIAQG6B66",
//					"editVersion": 129,
//					"attrs": {
//						"id": "AskDelete",
//						"label": "New AI Seg",
//						"x": "1240",
//						"y": "760",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA35",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA36",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "缺点药删除这个段落么？",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIAQ2DGU0",
//									"editVersion": 33,
//									"attrs": {
//										"id": "Yes",
//										"text": "确认删除",
//										"result": "OK",
//										"codes": "false"
//									},
//									"linkedSeg": "1HIAQG6BA37"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIAQ2DGV0",
//									"editVersion": 33,
//									"attrs": {
//										"id": "No",
//										"text": "取消",
//										"result": "Cancel",
//										"codes": "false"
//									},
//									"linkedSeg": "1HIAVVU8V0"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HIAQG6B67",
//					"editVersion": 139,
//					"attrs": {
//						"id": "DoDelete",
//						"label": "New AI Seg",
//						"x": "2510",
//						"y": "720",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA38",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA39",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B68",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAR9NVB0"
//						},
//						"result": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connectorL",
//					"jaxId": "1HIAQG6BA37",
//					"editVersion": 89,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1490",
//						"y": "720",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6BA40",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B67"
//						},
//						"dir": "L2R"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "aiBot",
//					"jaxId": "1HIAQG6B44",
//					"editVersion": 130,
//					"attrs": {
//						"id": "UpdatePack1",
//						"label": "New AI Seg",
//						"x": "2860",
//						"y": "290",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA41",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA42",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "调用其它AI Agent，把调用的结果作为输出",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"source": "ai/UpdatePack.js",
//						"secret": "false",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B69",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBGVJOS0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "aiBot",
//					"jaxId": "1HIAQG6B45",
//					"editVersion": 129,
//					"attrs": {
//						"id": "UpdatePack2",
//						"label": "New AI Seg",
//						"x": "2860",
//						"y": "410",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA43",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAQG6BA44",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "调用其它AI Agent，把调用的结果作为输出",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"source": "ai/UpdatePack.js",
//						"secret": "false",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAQG6B610",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBGVJOS0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connectorL",
//					"jaxId": "1HIAR9NVB0",
//					"editVersion": 113,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "2740",
//						"y": "550",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAR9NVB1",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B45"
//						},
//						"dir": "L2R"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIARK25D0",
//					"editVersion": 79,
//					"attrs": {
//						"id": "TitleDone",
//						"label": "New AI Seg",
//						"x": "870",
//						"y": "60",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIARK25G0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIARK25G1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Event",
//						"text": "标题修改完毕",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIARK25E0",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBFKEPI0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIARK25D1",
//					"editVersion": 69,
//					"attrs": {
//						"id": "BackgroundDone",
//						"label": "New AI Seg",
//						"x": "850",
//						"y": "150",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIARK25G2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIARK25G3",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Event",
//						"text": "故事背景修改完毕",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIARK25E1",
//							"editVersion": 25,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBFKJ6L0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askUIDlg",
//					"jaxId": "1HIAV2BVA0",
//					"editVersion": 90,
//					"attrs": {
//						"id": "ChooseSeg",
//						"label": "New AI Seg",
//						"x": "350",
//						"y": "430",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAV2BVG0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAV2BVG1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"source": "ui/DlgSegs.js",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAV2BVA1",
//							"editVersion": 38,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAVRPU40"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "brunch",
//					"jaxId": "1HIAVRPU40",
//					"editVersion": 82,
//					"attrs": {
//						"id": "CheckSeg",
//						"label": "New AI Seg",
//						"x": "560",
//						"y": "430",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAVRPUD0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAVRPUD1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIAVRPU61",
//							"editVersion": 31,
//							"attrs": {
//								"id": "NoSeg",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAVRPUD2"
//						},
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIConditionOutlet",
//									"jaxId": "1HIAVRPU60",
//									"editVersion": 61,
//									"attrs": {
//										"id": "HasSeg",
//										"condition": "#input>=0 && input!==null",
//										"codes": "false",
//										"ouput": "",
//										"desc": "条件输出节点。"
//									},
//									"linkedSeg": "1HIBV36A90"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIAVRPUD2",
//					"editVersion": 91,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "800",
//						"y": "520",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIAVVU8V0",
//					"editVersion": 63,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "1490",
//						"y": "800",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askMenu",
//					"jaxId": "1HIBF5DAL3",
//					"editVersion": 153,
//					"attrs": {
//						"id": "Choose",
//						"label": "New AI Seg",
//						"x": "2140",
//						"y": "180",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBF5DAL4",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBF5DAL5",
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
//									"jaxId": "1HIBF5DAL6",
//									"editVersion": 82,
//									"attrs": {
//										"id": "Seg1",
//										"text": "选择1",
//										"result": "",
//										"codes": "true"
//									},
//									"linkedSeg": "1HIAQG6B62"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIBF5DAL7",
//									"editVersion": 65,
//									"attrs": {
//										"id": "Seg2",
//										"text": "选择2",
//										"result": "",
//										"codes": "true"
//									},
//									"linkedSeg": "1HIAQG6B62"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIBF5DAL8",
//									"editVersion": 61,
//									"attrs": {
//										"id": "Seg3",
//										"text": "选择3",
//										"result": "",
//										"codes": "true"
//									},
//									"linkedSeg": "1HIAQG6B62"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIBF5DAL9",
//									"editVersion": 59,
//									"attrs": {
//										"id": "again",
//										"text": "Write again",
//										"result": "",
//										"codes": "false"
//									},
//									"linkedSeg": "1HIBIPO140"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIBIPO0S0",
//									"editVersion": 31,
//									"attrs": {
//										"id": "Abort",
//										"text": "放弃修改",
//										"result": "",
//										"codes": "false",
//										"icon": "/-tabos/shared/assets/close.svg"
//									},
//									"linkedSeg": "1HIBIP10A0"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HIBFAA8M0",
//					"editVersion": 51,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "2400",
//						"y": "330",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBFAA8M1",
//							"editVersion": 15,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBFAA8M2"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HIBFAA8M2",
//					"editVersion": 47,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1590",
//						"y": "330",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBFAA8M3",
//							"editVersion": 15,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B512"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askConfirm",
//					"jaxId": "1HIBFEM6P3",
//					"editVersion": 139,
//					"attrs": {
//						"id": "AskDeletePic",
//						"label": "New AI Seg",
//						"x": "1260",
//						"y": "630",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBFEM6P4",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBFEM6P5",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"prompt": "缺点药删除这个段落么？",
//						"outlets": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIBFEM6P6",
//									"editVersion": 33,
//									"attrs": {
//										"id": "Yes",
//										"text": "确认删除",
//										"result": "OK",
//										"codes": "false"
//									},
//									"linkedSeg": "1HIBFMA2L1"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIBFEM6P7",
//									"editVersion": 33,
//									"attrs": {
//										"id": "No",
//										"text": "取消",
//										"result": "Cancel",
//										"codes": "false"
//									},
//									"linkedSeg": "1HIBGHJPE0"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "code",
//					"jaxId": "1HIBFMA2L1",
//					"editVersion": 69,
//					"attrs": {
//						"id": "DeletePic",
//						"label": "New AI Seg",
//						"x": "1490",
//						"y": "590",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBFMA2T0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBFMA2T1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "true",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBFMA2L2",
//							"editVersion": 15,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBFMA2K0"
//						},
//						"result": ""
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIBFMA2K0",
//					"editVersion": 63,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1700",
//						"y": "590",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBFMA2T2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBFMA2T3",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Assistant",
//						"text": "段落插图已删除",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBFMA2L3",
//							"editVersion": 15,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBFI5UV0"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIBFI5UV0",
//					"editVersion": 49,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "1870",
//						"y": "590",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIBFI68A0",
//					"editVersion": 89,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "2750",
//						"y": "320",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIBFKEPI0",
//					"editVersion": 111,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "1120",
//						"y": "60",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIBFKJ6L0",
//					"editVersion": 115,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "1100",
//						"y": "150",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connectorT",
//					"jaxId": "1HIBG8KMB0",
//					"editVersion": 55,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "2750",
//						"y": "160",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBG8KMB1",
//							"editVersion": 20,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B44"
//						},
//						"dir": "T2B"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIBGHJPE0",
//					"editVersion": 75,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "1490",
//						"y": "670",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "image",
//					"jaxId": "1HIBGPKUT0",
//					"editVersion": 91,
//					"attrs": {
//						"id": "Resize",
//						"label": "New AI Seg",
//						"x": "2110",
//						"y": "410",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBGPKV70",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBGPKV71",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"text": "更新后的插图",
//						"image": "#input",
//						"role": "Assistant",
//						"sizeLimit": "512",
//						"format": "JEPG",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBGPKUT1",
//							"editVersion": 15,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBGQ2RO3"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "askConfirm",
//					"jaxId": "1HIBGQ2RO3",
//					"editVersion": 86,
//					"attrs": {
//						"id": "CheckPic",
//						"label": "New AI Seg",
//						"x": "2310",
//						"y": "410",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBGQ2RO4",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBGQ2RO5",
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
//									"jaxId": "1HIBGQ2RO6",
//									"editVersion": 37,
//									"attrs": {
//										"id": "Yes",
//										"text": "使用",
//										"result": "#input",
//										"codes": "false"
//									},
//									"linkedSeg": "1HIAQG6B64"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIBGQ2RP0",
//									"editVersion": 25,
//									"attrs": {
//										"id": "No",
//										"text": "重画",
//										"result": "Cancel",
//										"codes": "false"
//									},
//									"linkedSeg": "1HIBH0PGN0"
//								},
//								{
//									"type": "aioutlet",
//									"def": "AIButtonOutlet",
//									"jaxId": "1HIBGQ2RP1",
//									"editVersion": 31,
//									"attrs": {
//										"id": "Abort",
//										"text": "放弃修改插画",
//										"result": "",
//										"codes": "false"
//									},
//									"linkedSeg": "1HIBGS2S50"
//								}
//							]
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HIBH0PGN1",
//					"editVersion": 51,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "2610",
//						"y": "520",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBH0PGN2",
//							"editVersion": 15,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBH0PGN3"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIBGS2S50",
//					"editVersion": 97,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "2550",
//						"y": "470",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connectorL",
//					"jaxId": "1HIBH0PGN0",
//					"editVersion": 39,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "2580",
//						"y": "410",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBH0PGN4",
//							"editVersion": 15,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBH0PGN1"
//						},
//						"dir": "L2R"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connector",
//					"jaxId": "1HIBH0PGN3",
//					"editVersion": 43,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "1340",
//						"y": "520",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBH0PGN5",
//							"editVersion": 15,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B516"
//						},
//						"dir": "R2L"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIBGVJOS0",
//					"editVersion": 97,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "3100",
//						"y": "350",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "connectorL",
//					"jaxId": "1HIBIPO140",
//					"editVersion": 33,
//					"attrs": {
//						"id": "",
//						"label": "New AI Seg",
//						"x": "2370",
//						"y": "210",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIBIPO141",
//							"editVersion": 9,
//							"attrs": {
//								"id": "Outlet",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBFAA8M0"
//						},
//						"dir": "L2R"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIBIP10A0",
//					"editVersion": 65,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "2350",
//						"y": "270",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIBIQHV60",
//					"editVersion": 94,
//					"attrs": {
//						"id": "ShowReuslt",
//						"label": "New AI Seg",
//						"x": "1910",
//						"y": "180",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBIQHV61",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBIQHV62",
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
//							"jaxId": "1HIBIQHV80",
//							"editVersion": 24,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIBF5DAL3"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIBV36A90",
//					"editVersion": 60,
//					"attrs": {
//						"id": "ShowEditSeg",
//						"label": "New AI Seg",
//						"x": "800",
//						"y": "370",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBV36AK0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIBV36AK1",
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
//							"jaxId": "1HIBV36A91",
//							"editVersion": 12,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B54"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIC2UGSO0",
//					"editVersion": 103,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "1150",
//						"y": "810",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "tryCatch",
//					"jaxId": "1HIEMFENP0",
//					"editVersion": 38,
//					"attrs": {
//						"id": "SafeDraw",
//						"label": "New AI Seg",
//						"x": "1680",
//						"y": "410",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIEMFEO70",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIEMFEO71",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIEMFENP1",
//							"editVersion": 4,
//							"attrs": {
//								"id": "Try",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B60"
//						},
//						"catchlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIEMFENP2",
//							"editVersion": 4,
//							"attrs": {
//								"id": "Catch",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIEMFENP3"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIEMFENP3",
//					"editVersion": 46,
//					"attrs": {
//						"id": "DrawError",
//						"label": "New AI Seg",
//						"x": "1900",
//						"y": "480",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIEMFEO72",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIEMFEO73",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Event",
//						"text": "绘制插图失败，如果提示Gas不足，说明需要更多能量。您需要至少110能量才可以调用绘制图片的AI。",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIEMFENP4",
//							"editVersion": 4,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIEMC9A30"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "note",
//					"jaxId": "1HIEMC9A30",
//					"editVersion": 61,
//					"attrs": {
//						"id": "Done",
//						"label": "",
//						"x": "2110",
//						"y": "480",
//						"from": "",
//						"desc": "这是一个注释。"
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "tryCatch",
//					"jaxId": "1HIEMIKSE0",
//					"editVersion": 46,
//					"attrs": {
//						"id": "Start",
//						"label": "New AI Seg",
//						"x": "-120",
//						"y": "370",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIEMIKSN0",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIEMIKSN1",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIEMIKSE1",
//							"editVersion": 4,
//							"attrs": {
//								"id": "Try",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6B46"
//						},
//						"catchlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIEMIKSE2",
//							"editVersion": 4,
//							"attrs": {
//								"id": "Catch",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIEMIKSE3"
//						}
//					}
//				},
//				{
//					"type": "aiseg",
//					"def": "output",
//					"jaxId": "1HIEMIKSE3",
//					"editVersion": 52,
//					"attrs": {
//						"id": "CatchError",
//						"label": "New AI Seg",
//						"x": "70",
//						"y": "470",
//						"context": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIEMIKSN2",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"global": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIEMIKSN3",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"desc": "这是一个AISeg。",
//						"codes": "false",
//						"mkpInput": "$$input$$",
//						"role": "Event",
//						"text": "编辑文章遇到错误，编辑已取消",
//						"outlet": {
//							"type": "aioutlet",
//							"def": "AISegOutlet",
//							"jaxId": "1HIEMIKSE4",
//							"editVersion": 4,
//							"attrs": {
//								"id": "Result",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAQG6BA2"
//						}
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
//			"jaxId": "1HIAPD7FP3",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"context": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIAPD7FP4",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"globalMockup": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIAPD7FP5",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"desc": "这是一个AI代理。",
//		"exportAPI": "false",
//		"apiArgs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIAPD7FP6",
//			"editVersion": 0,
//			"attrs": {}
//		}
//	}
//}