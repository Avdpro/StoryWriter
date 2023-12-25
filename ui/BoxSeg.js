//Auto genterated by Cody
import {$P,VFACT,callAfter,sleep} from "/@vfact";
import inherits from "/@inherits";
import {appCfg} from "../cfg/appCfg.js";
/*#{1HIASUKH50StartDoc*/
/*}#1HIASUKH50StartDoc*/
const $ln=appCfg.lanCode||VFACT.lanCode||"EN";
//----------------------------------------------------------------------------
let BoxSeg=function(seg){
	let cfgColor,cfgSize,txtSize,state;
	let cssVO,self;
	const $ln=appCfg.lanCode||VFACT.lanCode||"EN";
	cfgColor=appCfg.color;
	cfgSize=appCfg.size;
	txtSize=appCfg.txtSize;
	
	
	/*#{1HIASUKH51LocalVals*/
	/*}#1HIASUKH51LocalVals*/
	
	/*#{1HIASUKH51PreState*/
	/*}#1HIASUKH51PreState*/
	/*#{1HIASUKH51PostState*/
	/*}#1HIASUKH51PostState*/
	cssVO={
		"hash":"1HIASUKH51",nameHost:true,
		"type":"button","position":"relative","x":0,"y":0,"w":"100%","h":"","cursor":"pointer","margin":[5,0,5,0],"padding":10,"minW":"","minH":50,"maxW":"",
		"maxH":"","styleClass":"","contentLayout":"flex-y",
		children:[
			{
				"hash":"1HIASVB5T0",
				"type":"box","id":"BoxBG","x":0,"y":0,"w":"100%","h":"100%","minW":"","minH":"","maxW":"","maxH":"","styleClass":"","background":[255,255,255,1],"border":1,
				"corner":8,
			},
			{
				"hash":"1HIAT14TV0",
				"type":"text","position":"relative","x":0,"y":0,"w":"100%","h":"","uiEvent":-1,"minW":"","minH":"","maxW":"","maxH":"","styleClass":"","color":cfgColor["fontBodySub"],
				"text":`段落${seg.idx+1}:`,"fontSize":txtSize.small,"fontWeight":"normal","fontStyle":"normal","textDecoration":"","alignH":1,
			},
			{
				"hash":"1HIAT6MCT0",
				"type":"image","position":"relative","x":0,"y":0,"w":"100%","h":"","uiEvent":-1,"minW":"","minH":"","maxW":"","maxH":"","styleClass":"","image":seg.image,
				"fitSize":"contain","repeat":false,"alignX":1,"aspect":"2","attached":!!seg.image,
			},
			{
				"hash":"1HIATFCDJ0",
				"type":"text","position":"relative","x":0,"y":0,"w":"100%","h":"","uiEvent":-1,"minW":"","minH":"","maxW":"","maxH":"","styleClass":"","color":[0,0,0],
				"text":seg.text,"fontSize":txtSize.smallPlus,"fontWeight":"normal","fontStyle":"normal","textDecoration":"","wrap":true,
			}
		],
		/*#{1HIASUKH51ExtraCSS*/
		/*}#1HIASUKH51ExtraCSS*/
		faces:{
			"up":{
				/*BoxBG*/"#1HIASVB5T0":{
					"background":cfgColor["body"]
				}
			},"over":{
				/*BoxBG*/"#1HIASVB5T0":{
					"background":cfgColor["fontPrimarySub"]
				}
			},"down":{
				/*BoxBG*/"#1HIASVB5T0":{
					"background":cfgColor["fontPrimaryLit"]
				}
			}
		},
		OnCreate:function(){
			self=this;
			
			/*#{1HIASUKH51Create*/
			/*}#1HIASUKH51Create*/
		},
		/*#{1HIASUKH51EndCSS*/
		/*}#1HIASUKH51EndCSS*/
	};
	/*#{1HIASUKH51PostCSSVO*/
	/*}#1HIASUKH51PostCSSVO*/
	return cssVO;
};
/*#{1HIASUKH51ExCodes*/
/*}#1HIASUKH51ExCodes*/

BoxSeg.gearExport={
	framework: "jax",
	hudType: "button",
	"showName":"",icon:"gears.svg",previewImg:false,
	fixPose:false,initW:100,initH:100,
	catalog:"",
	args: {
		"seg": {
			"name": "seg", "showName": "seg", "type": "auto", "key": true, "fixed": true, 
			"initVal": {"idx":3,"text":"abcd","image":"/~/-tabos/shared/assets/close.svg"}, "initValText": "#{idx:3,text:\"abcd\",image:appCfg.sharedAssets+\"/close.svg\"}"
		}
	},
	state:{
	},
	properties:["id","position","x","y","display"],
	faces:["up","over","down"],
	subContainers:{
	},
	/*#{1HIASUKH50ExGearInfo*/
	/*}#1HIASUKH50ExGearInfo*/
};
export default BoxSeg;
export{BoxSeg};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "GearButton",
//	"jaxId": "1HIASUKH50",
//	"editVersion": 67,
//	"attrs": {
//		"editEnv": {
//			"type": "object",
//			"jaxId": "1HIASUKH60",
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
//			"jaxId": "1HIASUKH61",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"model": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIASUKH62",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"createArgs": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIASUKH63",
//			"editVersion": 22,
//			"attrs": {
//				"seg": {
//					"type": "auto",
//					"valText": "#{idx:3,text:\"abcd\",image:appCfg.sharedAssets+\"/close.svg\"}"
//				}
//			}
//		},
//		"localVars": {
//			"type": "object",
//			"def": "Object",
//			"jaxId": "1HIASUKH64",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"oneHud": "false",
//		"state": {
//			"type": "object",
//			"def": "StateObj",
//			"jaxId": "1HIASUKH65",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"segs": {
//			"type": "array",
//			"attrs": []
//		},
//		"exportTarget": "\"jax\"",
//		"gearName": "",
//		"gearIcon": "gears.svg",
//		"gearW": "100",
//		"gearH": "100",
//		"gearCatalog": "",
//		"description": "",
//		"fixPose": "false",
//		"previewImg": "",
//		"faceTags": {
//			"type": "object",
//			"def": "FaceTags",
//			"jaxId": "1HIASUKH66",
//			"editVersion": 6,
//			"attrs": {
//				"up": {
//					"type": "facetag",
//					"def": "FaceTag",
//					"jaxId": "1HIBDVQ100",
//					"editVersion": 16,
//					"attrs": {
//						"mockup": "false",
//						"previewEntry": "false",
//						"mockupNext": "",
//						"description": "",
//						"preFunc": "false",
//						"faceFunc": "false",
//						"delay": "0",
//						"faceTimes": {
//							"type": "object",
//							"jaxId": "1HIBE18NA0",
//							"editVersion": 0,
//							"attrs": {}
//						}
//					}
//				},
//				"over": {
//					"type": "facetag",
//					"def": "FaceTag",
//					"jaxId": "1HIBE070V0",
//					"editVersion": 16,
//					"attrs": {
//						"mockup": "false",
//						"previewEntry": "false",
//						"mockupNext": "",
//						"description": "",
//						"preFunc": "false",
//						"faceFunc": "false",
//						"delay": "0",
//						"faceTimes": {
//							"type": "object",
//							"jaxId": "1HIBE18NA1",
//							"editVersion": 0,
//							"attrs": {}
//						}
//					}
//				},
//				"down": {
//					"type": "facetag",
//					"def": "FaceTag",
//					"jaxId": "1HIBE0TML0",
//					"editVersion": 16,
//					"attrs": {
//						"mockup": "false",
//						"previewEntry": "false",
//						"mockupNext": "",
//						"description": "",
//						"preFunc": "false",
//						"faceFunc": "false",
//						"delay": "0",
//						"faceTimes": {
//							"type": "object",
//							"jaxId": "1HIBE18NA2",
//							"editVersion": 0,
//							"attrs": {}
//						}
//					}
//				}
//			}
//		},
//		"mockupStates": {
//			"type": "object",
//			"def": "MockupObj",
//			"jaxId": "1HIASUKH67",
//			"editVersion": 5,
//			"attrs": {
//				"pic": {
//					"type": "mockState",
//					"def": "MockState",
//					"jaxId": "1HIATEDNG0",
//					"editVersion": 4,
//					"attrs": {
//						"createArgs": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIASUKH63",
//							"editVersion": 16,
//							"attrs": {
//								"seg": {
//									"type": "auto",
//									"valText": "#{idx:3,text:\"abcd\",image:appCfg.sharedAssets+\"/close.svg\"}"
//								}
//							}
//						},
//						"stateObj": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIASUKH65",
//							"editVersion": 0,
//							"attrs": {}
//						}
//					}
//				},
//				"noPic": {
//					"type": "mockState",
//					"def": "MockState",
//					"jaxId": "1HIATK8960",
//					"editVersion": 4,
//					"attrs": {
//						"createArgs": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIASUKH63",
//							"editVersion": 22,
//							"attrs": {
//								"seg": {
//									"type": "auto",
//									"valText": "#{idx:3,text:\"abcd\"}"
//								}
//							}
//						},
//						"stateObj": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1HIASUKH65",
//							"editVersion": 0,
//							"attrs": {}
//						}
//					}
//				}
//			}
//		},
//		"hud": {
//			"type": "hudobj",
//			"def": "button",
//			"jaxId": "1HIASUKH51",
//			"editVersion": 20,
//			"attrs": {
//				"properties": {
//					"type": "object",
//					"jaxId": "1HIASUKH68",
//					"editVersion": 126,
//					"attrs": {
//						"type": "button",
//						"id": "",
//						"position": "Relative",
//						"x": "0",
//						"y": "0",
//						"w": "100%",
//						"h": "",
//						"anchorH": "Left",
//						"anchorV": "Top",
//						"autoLayout": "false",
//						"display": "On",
//						"clip": "Off",
//						"uiEvent": "On",
//						"alpha": "1",
//						"rotate": "0",
//						"scale": "",
//						"filter": "",
//						"cursor": "pointer",
//						"zIndex": "0",
//						"margin": "[5,0,5,0]",
//						"padding": "10",
//						"minW": "",
//						"minH": "50",
//						"maxW": "",
//						"maxH": "",
//						"face": "",
//						"styleClass": "",
//						"enable": "true",
//						"drag": "NA",
//						"flex": "false",
//						"contentLayout": "Flex Y"
//					}
//				},
//				"subHuds": {
//					"type": "array",
//					"attrs": [
//						{
//							"type": "hudobj",
//							"def": "box",
//							"jaxId": "1HIASVB5T0",
//							"editVersion": 35,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1HIAT0EOJ0",
//									"editVersion": 100,
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
//										"background": "[255,255,255,1.00]",
//										"border": "1",
//										"borderStyle": "Solid",
//										"borderColor": "[0,0,0,1.00]",
//										"corner": "8",
//										"shadow": "false",
//										"shadowX": "2",
//										"shadowY": "2",
//										"shadowBlur": "3",
//										"shadowSpread": "0",
//										"shadowColor": "[0,0,0,0.50]"
//									}
//								},
//								"subHuds": {
//									"type": "array",
//									"attrs": []
//								},
//								"faces": {
//									"type": "object",
//									"jaxId": "1HIAT0EOJ1",
//									"editVersion": 6,
//									"attrs": {
//										"1HIBDVQ100": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HIBE18NA3",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HIBE18NA4",
//													"editVersion": 8,
//													"attrs": {
//														"background": "#cfgColor[\"body\"]"
//													}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HIBDVQ100",
//											"faceTagName": "up"
//										},
//										"1HIBE070V0": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HIBE18NA5",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HIBE18NA6",
//													"editVersion": 8,
//													"attrs": {
//														"background": "#cfgColor[\"fontPrimarySub\"]"
//													}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HIBE070V0",
//											"faceTagName": "over"
//										},
//										"1HIBE0TML0": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HIBE18NA7",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HIBE18NA8",
//													"editVersion": 8,
//													"attrs": {
//														"background": "#cfgColor[\"fontPrimaryLit\"]"
//													}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HIBE0TML0",
//											"faceTagName": "down"
//										}
//									}
//								},
//								"functions": {
//									"type": "object",
//									"jaxId": "1HIAT0EOJ2",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"extraPpts": {
//									"type": "object",
//									"def": "Object",
//									"jaxId": "1HIAT0EOJ3",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"mockup": "false",
//								"codes": "false",
//								"locked": "true",
//								"container": "false",
//								"nameVal": "false"
//							}
//						},
//						{
//							"type": "hudobj",
//							"def": "text",
//							"jaxId": "1HIAT14TV0",
//							"editVersion": 20,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1HIAT1KCG0",
//									"editVersion": 132,
//									"attrs": {
//										"type": "text",
//										"id": "",
//										"position": "relative",
//										"x": "0",
//										"y": "0",
//										"w": "100%",
//										"h": "",
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
//										"margin": "",
//										"padding": "",
//										"minW": "",
//										"minH": "",
//										"maxW": "",
//										"maxH": "",
//										"face": "",
//										"styleClass": "",
//										"color": "#cfgColor[\"fontBodySub\"]",
//										"text": "#`段落${seg.idx+1}:`",
//										"font": "",
//										"fontSize": "#txtSize.small",
//										"bold": "false",
//										"italic": "false",
//										"underline": "false",
//										"alignH": "Center",
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
//										"maxTextW": "0"
//									}
//								},
//								"subHuds": {
//									"type": "array",
//									"attrs": []
//								},
//								"faces": {
//									"type": "object",
//									"jaxId": "1HIAT1KCG1",
//									"editVersion": 8,
//									"attrs": {
//										"1HIBDVQ100": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HIBE18NA9",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HIBE18NA10",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HIBDVQ100",
//											"faceTagName": "up"
//										},
//										"1HIBE070V0": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HIBE18NA11",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HIBE18NA12",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HIBE070V0",
//											"faceTagName": "over"
//										}
//									}
//								},
//								"functions": {
//									"type": "object",
//									"jaxId": "1HIAT1KCG2",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"extraPpts": {
//									"type": "object",
//									"def": "Object",
//									"jaxId": "1HIAT1KCG3",
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
//							"def": "image",
//							"jaxId": "1HIAT6MCT0",
//							"editVersion": 20,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1HIATBUBD0",
//									"editVersion": 142,
//									"attrs": {
//										"type": "image",
//										"id": "",
//										"position": "relative",
//										"x": "0",
//										"y": "0",
//										"w": "100%",
//										"h": "",
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
//										"margin": "",
//										"padding": "",
//										"minW": "",
//										"minH": "",
//										"maxW": "",
//										"maxH": "",
//										"face": "",
//										"styleClass": "",
//										"image": "#seg.image",
//										"autoSize": "false",
//										"fitSize": "Contain",
//										"repeat": "false",
//										"alignX": "Center",
//										"alignY": "Top",
//										"aspect": "2",
//										"attach": "#!!seg.image"
//									}
//								},
//								"subHuds": {
//									"type": "array",
//									"attrs": []
//								},
//								"faces": {
//									"type": "object",
//									"jaxId": "1HIATBUBD5",
//									"editVersion": 8,
//									"attrs": {
//										"1HIBDVQ100": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HIBE18NA15",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HIBE18NA16",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HIBDVQ100",
//											"faceTagName": "up"
//										},
//										"1HIBE070V0": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HIBE18NA17",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HIBE18NA18",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HIBE070V0",
//											"faceTagName": "over"
//										}
//									}
//								},
//								"functions": {
//									"type": "object",
//									"jaxId": "1HIATBUBD6",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"extraPpts": {
//									"type": "object",
//									"def": "Object",
//									"jaxId": "1HIATBUBD7",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"mockup": "false",
//								"codes": "false",
//								"locked": "false",
//								"container": "true",
//								"nameVal": "false"
//							}
//						},
//						{
//							"type": "hudobj",
//							"def": "text",
//							"jaxId": "1HIATFCDJ0",
//							"editVersion": 20,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1HIATFCDJ1",
//									"editVersion": 124,
//									"attrs": {
//										"type": "text",
//										"id": "",
//										"position": "Relative",
//										"x": "0",
//										"y": "0",
//										"w": "100%",
//										"h": "",
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
//										"margin": "",
//										"padding": "",
//										"minW": "",
//										"minH": "",
//										"maxW": "",
//										"maxH": "",
//										"face": "",
//										"styleClass": "",
//										"color": "[0,0,0]",
//										"text": "#seg.text",
//										"font": "",
//										"fontSize": "#txtSize.smallPlus",
//										"bold": "false",
//										"italic": "false",
//										"underline": "false",
//										"alignH": "Left",
//										"alignV": "Top",
//										"wrap": "true",
//										"ellipsis": "false",
//										"select": "false",
//										"shadow": "false",
//										"shadowX": "0",
//										"shadowY": "2",
//										"shadowBlur": "3",
//										"shadowColor": "[0,0,0,1.00]",
//										"shadowEx": "",
//										"maxTextW": "0"
//									}
//								},
//								"subHuds": {
//									"type": "array",
//									"attrs": []
//								},
//								"faces": {
//									"type": "object",
//									"jaxId": "1HIATFCDJ2",
//									"editVersion": 8,
//									"attrs": {
//										"1HIBDVQ100": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HIBE18NB0",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HIBE18NB1",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HIBDVQ100",
//											"faceTagName": "up"
//										},
//										"1HIBE070V0": {
//											"type": "hudface",
//											"def": "HudFace",
//											"jaxId": "1HIBE18NB2",
//											"editVersion": 4,
//											"attrs": {
//												"properties": {
//													"type": "object",
//													"jaxId": "1HIBE18NB3",
//													"editVersion": 0,
//													"attrs": {}
//												},
//												"anis": {
//													"type": "array",
//													"def": "Array",
//													"attrs": []
//												}
//											},
//											"faceTagId": "1HIBE070V0",
//											"faceTagName": "over"
//										}
//									}
//								},
//								"functions": {
//									"type": "object",
//									"jaxId": "1HIATFCDJ3",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"extraPpts": {
//									"type": "object",
//									"def": "Object",
//									"jaxId": "1HIATFCDJ4",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"mockup": "false",
//								"codes": "false",
//								"locked": "false",
//								"container": "false",
//								"nameVal": "false"
//							}
//						}
//					]
//				},
//				"faces": {
//					"type": "object",
//					"jaxId": "1HIASUKH69",
//					"editVersion": 8,
//					"attrs": {
//						"1HIBDVQ100": {
//							"type": "hudface",
//							"def": "HudFace",
//							"jaxId": "1HIBE18NB6",
//							"editVersion": 4,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1HIBE18NB7",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"anis": {
//									"type": "array",
//									"def": "Array",
//									"attrs": []
//								}
//							},
//							"faceTagId": "1HIBDVQ100",
//							"faceTagName": "up"
//						},
//						"1HIBE070V0": {
//							"type": "hudface",
//							"def": "HudFace",
//							"jaxId": "1HIBE18NB8",
//							"editVersion": 4,
//							"attrs": {
//								"properties": {
//									"type": "object",
//									"jaxId": "1HIBE18NB9",
//									"editVersion": 0,
//									"attrs": {}
//								},
//								"anis": {
//									"type": "array",
//									"def": "Array",
//									"attrs": []
//								}
//							},
//							"faceTagId": "1HIBE070V0",
//							"faceTagName": "over"
//						}
//					}
//				},
//				"functions": {
//					"type": "object",
//					"jaxId": "1HIASUKH610",
//					"editVersion": 0,
//					"attrs": {}
//				},
//				"extraPpts": {
//					"type": "object",
//					"def": "Object",
//					"jaxId": "1HIASUKH611",
//					"editVersion": 0,
//					"attrs": {}
//				},
//				"mockup": "false",
//				"codes": "false",
//				"locked": "false",
//				"container": "true",
//				"nameVal": "false"
//			}
//		},
//		"exposeGear": "true",
//		"exposeTemplate": "false",
//		"exposeAttrs": {
//			"type": "object",
//			"def": "exposeAttrs",
//			"jaxId": "1HIASUKH612",
//			"editVersion": 68,
//			"attrs": {
//				"id": "true",
//				"position": "true",
//				"x": "true",
//				"y": "true",
//				"w": "false",
//				"h": "false",
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
//				"enable": "false",
//				"drag": "false"
//			}
//		},
//		"exposeStateAttrs": {
//			"type": "array",
//			"def": "StringArray",
//			"attrs": []
//		}
//	}
//}