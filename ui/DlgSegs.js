//Auto genterated by Cody
import {$P,VFACT,callAfter,sleep} from "/@vfact";
import inherits from "/@inherits";
import {appCfg} from "../cfg/appCfg.js";
import {BoxSeg} from "./BoxSeg.js";
import {BtnIcon} from "/@StdUI/ui/BtnIcon.js";
/*#{1HIARMBHP0StartDoc*/
/*
This is a template for standard dialog.
*/
/*}#1HIARMBHP0StartDoc*/
const $ln=appCfg.lanCode||VFACT.lanCode||"EN";
//----------------------------------------------------------------------------
let DlgSegs=function(){
	let cfgColor,cfgSize,txtSize,state;
	let cssVO,self;
	const $ln=appCfg.lanCode||VFACT.lanCode||"EN";
	let txtTitle,boxContent;
	
	cfgColor=appCfg.color;
	cfgSize=appCfg.size;
	txtSize=appCfg.txtSize;
	
	
	/*#{1H1T7ISV51LocalVals*/
	let app,dlgVO,story,segs;
	app=window.tabOSApp;
	dlgVO=null;
	story=null;
	segs=null;
	/*}#1H1T7ISV51LocalVals*/
	
	/*#{1H1T7ISV51PreState*/
	/*}#1H1T7ISV51PreState*/
	state={
		"title":"请选择段落:",
		/*#{1H1T7ISV56ExState*/
		/*}#1H1T7ISV56ExState*/
	};
	state=VFACT.flexState(state);
	/*#{1H1T7ISV51PostState*/
	/*}#1H1T7ISV51PostState*/
	cssVO={
		"hash":"1H1T7ISV51",nameHost:true,
		"type":"hud","x":"50%","y":"50%","w":360,"h":"80%","anchorX":1,"anchorY":1,"padding":10,"minW":"","minH":"","maxW":"","maxH":"","styleClass":"","contentLayout":"flex-y",
		children:[
			{
				"hash":"1H1T7LGH40",
				"type":"box","id":"BoxBG","x":0,"y":0,"w":"100%","h":"100%","minW":"","minH":"","maxW":"","maxH":"","styleClass":"","background":cfgColor.body,"border":2,
				"borderColor":cfgColor["fontBodySub"],"corner":5,"shadow":true,"shadowX":3,"shadowY":6,"shadowBlur":5,"shadowColor":[0,0,0,0.3],
			},
			{
				"hash":"1H1T7O2SA0",
				"type":"text","id":"TxtTitle","position":"relative","x":0,"y":0,"w":"100%","h":"","uiEvent":-1,"margin":[0,0,10,0],"minW":"","minH":"","maxW":"","maxH":"",
				"styleClass":"","color":cfgColor.fontBodySub,"text":$P(()=>(state.title),state),"fontSize":txtSize.big,"fontWeight":"bold","fontStyle":"normal","textDecoration":"",
			},
			{
				"hash":"1H1T7S0BE0",
				"type":"hud","id":"BoxContent","position":"relative","x":0,"y":0,"w":"100%","h":"","overflow":"auto-y","minW":"","minH":30,"maxW":"","maxH":"","styleClass":"",
				"flex":true,"contentLayout":"flex-y",
				children:[
					{
						"hash":"1HIAUBB680",
						"type":"hud","id":"BoxSegs","x":0,"y":0,"w":"100%","h":"100%","overflow":"auto-y","minW":"","minH":"","maxW":"","maxH":"","styleClass":"","contentLayout":"flex-y",
						children:[
						],
					}
				],
			},
			{
				"hash":"1HIARRB8R0",
				"type":BtnIcon("front",30,0,appCfg.sharedAssets+"/close.svg",null),"id":"BtnClose","x":">calc(100% - 40px)","y":10,"padding":2,
				"OnClick":function(event){
					self.btnCloseOnClick(this,event);
				},
			}
		],
		/*#{1H1T7ISV51ExtraCSS*/
		/*}#1H1T7ISV51ExtraCSS*/
		faces:{
		},
		OnCreate:function(){
			self=this;
			txtTitle=self.TxtTitle;boxContent=self.BoxContent;
			/*#{1H1T7ISV51Create*/
			//Apply drag to move:
			VFACT.applyMoveDrag(self.BoxBG,self);
			/*}#1H1T7ISV51Create*/
		},
		/*#{1H1T7ISV51EndCSS*/
		/*}#1H1T7ISV51EndCSS*/
	};
	//------------------------------------------------------------------------
	cssVO.btnCloseOnClick=async function(sender,event){
		/*#{1HIAUH66I0Start*/
		/*}#1HIAUH66I0Start*/
		/*#{1HIAUHFN80*/
		self.close(null);
		/*}#1HIAUHFN80*/
	};
	//------------------------------------------------------------------------
	cssVO.showSegs=async function(segs){
		/*#{1HIAULQS10Start*/
		/*}#1HIAULQS10Start*/
		/*#{1HIAUMQ120*/
		/*}#1HIAUMQ120*/
		VFACT.syncDataList2View(self.BoxSegs,segs,self.segBox,true);
	};
	/*#{1H1T7ISV51PostCSSVO*/
	//------------------------------------------------------------------------
	cssVO.segBox=function(seg){
		return {
			type:BoxSeg(seg),
			OnClick(){
				self.close(seg.idx);
			}
		};
	};
	//------------------------------------------------------------------------
	cssVO.showDlg=function(vo){
		dlgVO=vo;
		story=vo.story;
		segs=story.StorySegs.map((item,idx)=>{return {idx:idx,...item}});
		self.showSegs(segs);
		self.animate({type:"in",alpha:0,scale:0.9,time:100});
	};
	
	//------------------------------------------------------------------------
	cssVO.close=function(result){
		//Maybe animation:
		app.closeDlg(self,result);
		if(dlgVO){
			let next;
			next=dlgVO.next||dlgVO.callback;
			if(next){
				next(result);
			}
		}
	};
	/*}#1H1T7ISV51PostCSSVO*/
	return cssVO;
};
/*#{1H1T7ISV51ExCodes*/
/*}#1H1T7ISV51ExCodes*/

DlgSegs.gearExport={
	framework: "jax",
	hudType: "hud",
	"showName":(($ln==="CN")?("标准对话框"):("Standard Dialog")),icon:"gears.svg",previewImg:false,
	fixPose:false,initW:360,initH:500,
	catalog:"",
	args: {},
	state:{
	},
	properties:["id","position","x","y","w","h","display"],
	faces:[],
	subContainers:{
		"1H1T7S0BE0":{"showName":"BoxContent","contentLayout":"flex-y"}
	},
	/*#{1HIARMBHP0ExGearInfo*/
	/*}#1HIARMBHP0ExGearInfo*/
};
export default DlgSegs;
export{DlgSegs};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "GearHud",
//	"jaxId": "1HIARMBHP0",
//	"editVersion": 152,
//	"attrs": {
//		"editEnv": {
//			"type": "object",
//			"jaxId": "1H1T7ISV52",
//			"editVersion": 10,
//			"attrs": {
//				"device": "Custom Size",
//				"screenW": "375",
//				"screenH": "750",
//				"bgColor": "[255,255,255]",
//				"bgChecker": "false"
//			}
//		},
//		"editObjs": {
//			"type": "object",
//			"jaxId": "1H1T7ISV53",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"model": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1H8H690AD0",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"createArgs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1H1T7ISV54",
//			"editVersion": 118,
//			"attrs": {}
//		},
//		"localVars": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1H1T7ISV55",
//			"editVersion": 10,
//			"attrs": {}
//		},
//		"oneHud": "false",
//		"state": {
//			"type": "object",
//			"def": "StateObj",
//			"jaxId": "1H1T7ISV56",
//			"editVersion": 44,
//			"attrs": {
//				"title": {
//					"type": "string",
//					"valText": "请选择段落:",
//					"localizable": true
//				}
//			}
//		},
//		"segs": {
//			"type": "array",
//			"attrs": [
//				{
//					"type": "flowseg",
//					"def": "Entry",
//					"jaxId": "1HIAUH66I0",
//					"editVersion": 30,
//					"attrs": {
//						"id": "btnCloseOnClick",
//						"label": "New AI Seg",
//						"x": "100",
//						"y": "50",
//						"desc": "",
//						"codes": "false",
//						"args": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAUI0L70",
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
//							"jaxId": "1HIAUI0L71",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"segs": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "flowseg",
//									"def": "Code",
//									"jaxId": "1HIAUHFN80",
//									"editVersion": 18,
//									"attrs": {
//										"id": "",
//										"label": "New AI Seg",
//										"x": "330",
//										"y": "50",
//										"desc": "",
//										"codes": "false",
//										"outlet": {
//											"type": "aioutlet",
//											"def": "AISegOutlet",
//											"jaxId": "1HIAUI0L72",
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
//							"jaxId": "1HIAUI0L73",
//							"editVersion": 4,
//							"attrs": {
//								"id": "Next",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAUHFN80"
//						}
//					}
//				},
//				{
//					"type": "flowseg",
//					"def": "Entry",
//					"jaxId": "1HIAULQS10",
//					"editVersion": 40,
//					"attrs": {
//						"id": "showSegs",
//						"label": "New AI Seg",
//						"x": "100",
//						"y": "140",
//						"desc": "",
//						"codes": "false",
//						"args": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAUMQ170",
//							"editVersion": 8,
//							"attrs": {
//								"segs": {
//									"type": "auto",
//									"valText": "[]"
//								}
//							}
//						},
//						"async": "true",
//						"localVars": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIAUMQ171",
//							"editVersion": 0,
//							"attrs": {}
//						},
//						"segs": {
//							"type": "array",
//							"attrs": [
//								{
//									"type": "flowseg",
//									"def": "RenderData",
//									"jaxId": "1HIAUMQ120",
//									"editVersion": 58,
//									"attrs": {
//										"id": "",
//										"label": "New AI Seg",
//										"x": "310",
//										"y": "140",
//										"desc": "",
//										"codes": "true",
//										"view": "self.BoxSegs",
//										"data": "segs",
//										"uiDef": "self.segBox",
//										"clear": "true",
//										"assign": "",
//										"outlet": {
//											"type": "aioutlet",
//											"def": "AISegOutlet",
//											"jaxId": "1HIAUMQ172",
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
//							"jaxId": "1HIAUMQ173",
//							"editVersion": 4,
//							"attrs": {
//								"id": "Next",
//								"desc": "输出节点。"
//							},
//							"linkedSeg": "1HIAUMQ120"
//						}
//					}
//				}
//			]
//		},
//		"exportTarget": "\"jax\"",
//		"gearName": {
//			"type": "string",
//			"valText": "Standard Dialog",
//			"localize": {
//				"EN": "Standard Dialog",
//				"CN": "标准对话框"
//			},
//			"localizable": true
//		},
//		"gearIcon": "gears.svg",
//		"gearW": "360",
//		"gearH": "500",
//		"gearCatalog": "",
//		"description": "",
//		"fixPose": "false",
//		"previewImg": "",
//		"faceTags": {
//			"type": "object",
//			"def": "FaceTags",
//			"jaxId": "1H1T7ISV57",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"mockupStates": {
//			"type": "object",
//			"def": "MockupObj",
//			"jaxId": "1HIARMBLP0",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"hud": {
//			"type": "hudobj",
//			"def": "hud",
//			"jaxId": "1H1T7ISV51",
//			"editVersion": 20,
//			"attrs": {
//				"properties": {
//					"type": "object",
//					"jaxId": "1H1T7ISV58",
//					"editVersion": 182,
//					"attrs": {
//						"type": "hud",
//						"id": "",
//						"position": "Absolute",
//						"x": "50%",
//						"y": "50%",
//						"w": "360",
//						"h": "80%",
//						"anchorH": "Center",
//						"anchorV": "Center",
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
//						"padding": "10",
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
//							"def": "box",
//							"jaxId": "1H1T7LGH40",
//							"editVersion": 37,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1H1T83E7O0",
//									"editVersion": 152,
//									"attrs": {
//										"type": "box",
//										"id": "BoxBG",
//										"position": "Absolute",
//										"x": "0",
//										"y": "0",
//										"w": "100%",
//										"h": "100%",
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
//										"styleClass": "",
//										"background": "#cfgColor.body",
//										"border": "2",
//										"borderStyle": "Solid",
//										"borderColor": "#cfgColor[\"fontBodySub\"]",
//										"corner": "5",
//										"shadow": "true",
//										"shadowX": "3",
//										"shadowY": "6",
//										"shadowBlur": "5",
//										"shadowSpread": "0",
//										"shadowColor": "[0,0,0,0.30]"
//									}
//								},
//								"subHuds": {
//									"type": "array",
//									"attrs": []
//								},
//								"faces": {
//									"type": "object",
//									"jaxId": "1H1T83E7O1",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"functions": {
//									"type": "object",
//									"jaxId": "1H1T83E7O2",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"extraPpts": {
//									"type": "object",
//									"def": "Object",
//									"jaxId": "1H1T83E7O3",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"mockup": "false",
//								"codes": "false",
//								"locked": "false",
//								"container": "false",
//								"nameVal": "false"
//							}
//						},
//						{
//							"type": "hudobj",
//							"def": "text",
//							"jaxId": "1H1T7O2SA0",
//							"editVersion": 52,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1H1T83E7O4",
//									"editVersion": 176,
//									"attrs": {
//										"type": "text",
//										"id": "TxtTitle",
//										"position": "relative",
//										"x": "0",
//										"y": "0",
//										"w": "100%",
//										"h": "\"\"",
//										"anchorH": "Left",
//										"anchorV": "Top",
//										"autoLayout": "false",
//										"display": "On",
//										"clip": "Off",
//										"uiEvent": "Tree Off",
//										"alpha": "1",
//										"rotate": "0",
//										"scale": "",
//										"filter": "",
//										"cursor": "",
//										"zIndex": "0",
//										"margin": "[0,0,10,0]",
//										"padding": "",
//										"minW": "",
//										"minH": "",
//										"maxW": "",
//										"maxH": "",
//										"face": "",
//										"styleClass": "",
//										"color": "#cfgColor.fontBodySub",
//										"text": "${state.title},state",
//										"font": "",
//										"fontSize": "#txtSize.big",
//										"bold": "true",
//										"italic": "false",
//										"underline": "false",
//										"alignH": "Left",
//										"alignV": "Top",
//										"wrap": "false",
//										"ellipsis": "false",
//										"select": "false",
//										"shadow": "false",
//										"shadowX": "0",
//										"shadowY": "2",
//										"shadowBlur": "3",
//										"shadowColor": "[0,0,0,1.00]",
//										"shadowEx": "",
//										"maxTextW": "0",
//										"autoSizeW": "false",
//										"autoSizeH": "false"
//									}
//								},
//								"subHuds": {
//									"type": "array",
//									"attrs": []
//								},
//								"faces": {
//									"type": "object",
//									"jaxId": "1H1T83E7O5",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"functions": {
//									"type": "object",
//									"jaxId": "1H1T83E7O6",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"extraPpts": {
//									"type": "object",
//									"def": "Object",
//									"jaxId": "1H1T83E7O7",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"mockup": "false",
//								"codes": "false",
//								"locked": "false",
//								"container": "false",
//								"nameVal": "true"
//							}
//						},
//						{
//							"type": "hudobj",
//							"def": "hud",
//							"jaxId": "1H1T7S0BE0",
//							"editVersion": 54,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1H1T83E7O8",
//									"editVersion": 104,
//									"attrs": {
//										"type": "hud",
//										"id": "BoxContent",
//										"position": "relative",
//										"x": "0",
//										"y": "0",
//										"w": "100%",
//										"h": "\"\"",
//										"anchorH": "Left",
//										"anchorV": "Top",
//										"autoLayout": "false",
//										"display": "On",
//										"clip": "Auto Scroll Y",
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
//										"minH": "30",
//										"maxW": "",
//										"maxH": "",
//										"face": "",
//										"styleClass": "",
//										"flex": "true",
//										"contentLayout": "Flex Y"
//									}
//								},
//								"subHuds": {
//									"type": "array",
//									"attrs": [
//										{
//											"type": "hudobj",
//											"def": "hud",
//											"jaxId": "1HIAUBB680",
//											"editVersion": 24,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HIAUG13S0",
//													"editVersion": 82,
//													"attrs": {
//														"type": "hud",
//														"id": "BoxSegs",
//														"position": "Absolute",
//														"x": "0",
//														"y": "0",
//														"w": "100%",
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
//														"contentLayout": "Flex Y"
//													}
//												},
//												"subHuds": {
//													"type": "array",
//													"attrs": [
//														{
//															"type": "hudobj",
//															"def": "Gear1HIASUKH50",
//															"jaxId": "1HIAUC7740",
//															"editVersion": 36,
//															"attrs": {
//																"createArgs": {
//																	"type": "object",
//																	"def": "gearCrateArgs",
//																	"jaxId": "1HIAUC7741",
//																	"editVersion": 10,
//																	"attrs": {
//																		"seg": "#{idx:1,text:\"abcd\",image:appCfg.sharedAssets+\"/close.svg\"}"
//																	}
//																},
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HIAUC7742",
//																	"editVersion": 25,
//																	"attrs": {
//																		"type": "#null#>BoxSeg({idx:1,text:\"abcd\",image:appCfg.sharedAssets+\"/close.svg\"})",
//																		"id": "",
//																		"position": "relative",
//																		"x": "0",
//																		"y": "0",
//																		"display": "On",
//																		"face": ""
//																	}
//																},
//																"subHuds": {
//																	"type": "array",
//																	"attrs": []
//																},
//																"faces": {
//																	"type": "object",
//																	"jaxId": "1HIAUC7750",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"functions": {
//																	"type": "object",
//																	"jaxId": "1HIAUC7751",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"extraPpts": {
//																	"type": "object",
//																	"def": "Object",
//																	"jaxId": "1HIAUC7752",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"mockup": "true",
//																"codes": "false",
//																"locked": "false",
//																"container": "false",
//																"nameVal": "false",
//																"containerSlots": {
//																	"type": "object",
//																	"jaxId": "1HIAUC7753",
//																	"editVersion": 0,
//																	"attrs": {}
//																}
//															}
//														},
//														{
//															"type": "hudobj",
//															"def": "Gear1HIASUKH50",
//															"jaxId": "1HIAUCBC70",
//															"editVersion": 41,
//															"attrs": {
//																"createArgs": {
//																	"type": "object",
//																	"def": "gearCrateArgs",
//																	"jaxId": "1HIAUCBC71",
//																	"editVersion": 16,
//																	"attrs": {
//																		"seg": "#{idx:2,text:\"abcd\",image:appCfg.sharedAssets+\"/close.svg\"}"
//																	}
//																},
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HIAUCBC72",
//																	"editVersion": 27,
//																	"attrs": {
//																		"type": "#null#>BoxSeg({idx:2,text:\"abcd\",image:appCfg.sharedAssets+\"/close.svg\"})",
//																		"id": "",
//																		"position": "relative",
//																		"x": "0",
//																		"y": "0",
//																		"display": "On",
//																		"face": ""
//																	}
//																},
//																"subHuds": {
//																	"type": "array",
//																	"attrs": []
//																},
//																"faces": {
//																	"type": "object",
//																	"jaxId": "1HIAUCBC73",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"functions": {
//																	"type": "object",
//																	"jaxId": "1HIAUCBC74",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"extraPpts": {
//																	"type": "object",
//																	"def": "Object",
//																	"jaxId": "1HIAUCBC75",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"mockup": "true",
//																"codes": "false",
//																"locked": "false",
//																"container": "false",
//																"nameVal": "false",
//																"containerSlots": {
//																	"type": "object",
//																	"jaxId": "1HIAUCBC76",
//																	"editVersion": 0,
//																	"attrs": {}
//																}
//															}
//														},
//														{
//															"type": "hudobj",
//															"def": "Gear1HIASUKH50",
//															"jaxId": "1HIAUCFIA0",
//															"editVersion": 42,
//															"attrs": {
//																"createArgs": {
//																	"type": "object",
//																	"def": "gearCrateArgs",
//																	"jaxId": "1HIAUCFIA1",
//																	"editVersion": 16,
//																	"attrs": {
//																		"seg": "#{idx:2,text:\"abcd\",image:appCfg.sharedAssets+\"/close.svg\"}"
//																	}
//																},
//																"properties": {
//																	"type": "object",
//																	"jaxId": "1HIAUCFIA2",
//																	"editVersion": 28,
//																	"attrs": {
//																		"type": "#null#>BoxSeg({idx:2,text:\"abcd\",image:appCfg.sharedAssets+\"/close.svg\"})",
//																		"id": "",
//																		"position": "relative",
//																		"x": "0",
//																		"y": "0",
//																		"display": "On",
//																		"face": ""
//																	}
//																},
//																"subHuds": {
//																	"type": "array",
//																	"attrs": []
//																},
//																"faces": {
//																	"type": "object",
//																	"jaxId": "1HIAUCFIA3",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"functions": {
//																	"type": "object",
//																	"jaxId": "1HIAUCFIA4",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"extraPpts": {
//																	"type": "object",
//																	"def": "Object",
//																	"jaxId": "1HIAUCFIA5",
//																	"editVersion": 0,
//																	"attrs": {}
//																},
//																"mockup": "true",
//																"codes": "false",
//																"locked": "false",
//																"container": "false",
//																"nameVal": "false",
//																"containerSlots": {
//																	"type": "object",
//																	"jaxId": "1HIAUCFIA6",
//																	"editVersion": 0,
//																	"attrs": {}
//																}
//															}
//														}
//													]
//												},
//												"faces": {
//													"type": "object",
//													"jaxId": "1HIAUG13S1",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"functions": {
//													"type": "object",
//													"jaxId": "1HIAUG13S2",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"extraPpts": {
//													"type": "object",
//													"def": "Object",
//													"jaxId": "1HIAUG13S3",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"mockup": "false",
//												"codes": "false",
//												"locked": "false",
//												"container": "true",
//												"nameVal": "false",
//												"exposeContainer": "false"
//											}
//										}
//									]
//								},
//								"faces": {
//									"type": "object",
//									"jaxId": "1H1T83E7O9",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"functions": {
//									"type": "object",
//									"jaxId": "1H1T83E7O10",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"extraPpts": {
//									"type": "object",
//									"def": "Object",
//									"jaxId": "1H1T83E7O11",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"mockup": "false",
//								"codes": "false",
//								"locked": "false",
//								"container": "true",
//								"nameVal": "true",
//								"exposeContainer": "true"
//							}
//						},
//						{
//							"type": "hudobj",
//							"def": "Gear/@StdUI/ui/BtnIcon.js",
//							"jaxId": "1HIARRB8R0",
//							"editVersion": 31,
//							"attrs": {
//								"createArgs": {
//									"type": "object",
//									"def": "gearCrateArgs",
//									"jaxId": "1HIASS5BN0",
//									"editVersion": 16,
//									"attrs": {
//										"style": "\"front\"",
//										"w": "30",
//										"h": "0",
//										"icon": "#appCfg.sharedAssets+\"/close.svg\"",
//										"colorBG": "null"
//									}
//								},
//								"properties": {
//									"type": "object",
//									"jaxId": "1HIASS5BN1",
//									"editVersion": 48,
//									"attrs": {
//										"type": "#null#>BtnIcon(\"front\",30,0,appCfg.sharedAssets+\"/close.svg\",null)",
//										"id": "BtnClose",
//										"position": "Absolute",
//										"x": "100%-40",
//										"y": "10",
//										"display": "On",
//										"face": "",
//										"padding": "2"
//									}
//								},
//								"subHuds": {
//									"type": "array",
//									"attrs": []
//								},
//								"faces": {
//									"type": "object",
//									"jaxId": "1HIASS5BN2",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"functions": {
//									"type": "object",
//									"jaxId": "1HIASS5BN3",
//									"editVersion": 2,
//									"attrs": {
//										"OnClick": {
//											"type": "fixedFunc",
//											"jaxId": "1HIAUI0L80",
//											"editVersion": 6,
//											"attrs": {
//												"callArgs": {
//													"type": "object",
//													"jaxId": "1HIAUI0L81",
//													"editVersion": 2,
//													"attrs": {
//														"event": ""
//													}
//												},
//												"seg": "1HIAUH66I0"
//											}
//										}
//									}
//								},
//								"extraPpts": {
//									"type": "object",
//									"def": "Object",
//									"jaxId": "1HIASS5BN4",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"mockup": "false",
//								"codes": "false",
//								"locked": "false",
//								"container": "false",
//								"nameVal": "false",
//								"containerSlots": {
//									"type": "object",
//									"jaxId": "1HIASS5BN5",
//									"editVersion": 0,
//									"attrs": {}
//								}
//							}
//						}
//					]
//				},
//				"faces": {
//					"type": "object",
//					"jaxId": "1H1T7ISV59",
//					"editVersion": 0,
//					"attrs": {}
//				},
//				"functions": {
//					"type": "object",
//					"jaxId": "1H1T7ISV510",
//					"editVersion": 0,
//					"attrs": {}
//				},
//				"extraPpts": {
//					"type": "object",
//					"def": "Object",
//					"jaxId": "1H1T7ISV511",
//					"editVersion": 0,
//					"attrs": {}
//				},
//				"mockup": "false",
//				"codes": "false",
//				"locked": "false",
//				"container": "true",
//				"nameVal": "false",
//				"exposeContainer": "false"
//			}
//		},
//		"exposeGear": "true",
//		"exposeTemplate": "true",
//		"exposeAttrs": {
//			"type": "object",
//			"def": "exposeAttrs",
//			"jaxId": "1H1T7ISV512",
//			"editVersion": 84,
//			"attrs": {
//				"id": "true",
//				"position": "true",
//				"x": "true",
//				"y": "true",
//				"w": "true",
//				"h": "true",
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