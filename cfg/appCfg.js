//Auto genterated by Cody
import {VFACT} from "/@vfact";
/*#{Imports*/
/*}#Imports*/
var cfgURL=import.meta.url+"1GGJKJ2SR0;"
/*#{StartDoc*/
if(VFACT.lanCode===null){
	let userLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
	let userLanguage = userLanguages[0];
	let languageCode = userLanguage.substring(0, 2).toUpperCase();
	switch(languageCode){
		case "ZH":
			languageCode="CN";
			break;
	}
	VFACT.lanCode=languageCode;
}
/*}#StartDoc*/
let darkMode=false;
let colors={
	"primary":[13,110,253,1],"secondary":[108,117,125,1],"success":[0,128,0,1],"warning":[255,128,12,1],"error":[240,0,0,1],"dark":[30,30,30,1],"light":[250,250,250,1]
};
darkMode=VFACT.darkMode===null?darkMode:VFACT.darkMode;
VFACT.darkMode=darkMode;
if(!window.codyAppCfgs){
	window.codyAppCfgs={};
}
/*#{StartObj*/
/*}#StartObj*/
//----------------------------------------------------------------------------
let appCfg=window.codyAppCfgs[cfgURL]||{//"jaxId":"1GGJKJ2SQ0"
	"darkMode":darkMode,"version":"0.0.1",
	"txtSize":{
		"small":12,"mid":16,"big":20,"smallPlus":14,"midPlus":18,"bigPlus":25,"large":30,"largePlus":35,"huge":40,"hugePlus":50
	},
	"size":{
		"menuLineH":24
	},
	"color":{
		"body":darkMode?[55,55,55,1.00]:[255,255,255,1.00],"primary":colors.primary,"secondary":colors.secondary,"success":colors.success,"warning":colors.warning,
		"error":colors.error,"fontBody":darkMode?[255,255,255,1]:[0,0,0,1.00],"fontBodySub":darkMode?[240,240,240,1.00]:[80,80,80,1.00],"fontBodyLit":darkMode?[120,120,120,1]:[180,180,180,1.00],
		"fontPrimary":[255,255,255,1],"fontPrimarySub":[...colors.primary,80],"fontPrimaryLit":[...colors.primary,40],"fontSecondary":[255,255,255,1],"fontSecondarySub":[...colors.secondary,80.00],
		"fontSecondaryLit":[...colors.secondary,40.00],"fontSuccess":[255,255,255,1],"fontSuccessSub":[...colors.success,80.00],"fontSuccessLit":[...colors.success,40.00],
		"fontWarning":[255,255,255,1],"fontWarningSub":[...colors.warning,80],"fontWarningLit":[...colors.warning,40],"fontError":[255,255,255,1],"fontErrorSub":[...colors.error,80],
		"fontErrorLit":[...colors.error,40],"lineBody":darkMode?[255,255,255,1]:[0,0,0,1.00],"lineBodySub":darkMode?[240,240,240,1.00]:[80,80,80,1.00],"lineBodyLit":darkMode?[120,120,120,1]:[180,180,180,1.00],
		"front":[0,0,0,1],"fontFront":[255,255,255,1],"fontFrontSub":[240,240,240,1],"fontFrontLit":[80,80,80,1],"itemOver":[240,240,240,1],"itemDown":[200,200,200,1],
		"itemFocus":[13,110,253,1,80],"itemGray":[200,200,200,1]
	},
	"sharedAssets":"/~/-tabos/shared/assets","lanCode":"CN",
	/*#{ExAttrs*/
	/*}#ExAttrs*/
};
window.codyAppCfgs[cfgURL]=appCfg;
appCfg.lanCode=VFACT.lanCode===null?"EN":(VFACT.lanCode||"EN");
VFACT.lanCode=appCfg.lanCode;
if(!VFACT.appCfg){
	VFACT.appCfg=appCfg;
	window.jaxAppCfg=appCfg;
}
appCfg.applyCfg=function(){
	let majorCfg,attrName,cAttr,mAttr;
	majorCfg=VFACT.appCfg||window.jaxAppCfg;
	if(majorCfg && majorCfg!==appCfg){
		for(attrName in appCfg){
			if(attrName in majorCfg){
				cAttr=appCfg[attrName];
				mAttr=majorCfg[attrName];
				if(typeof(cAttr)==="object"){
					if(typeof(mAttr)==="object"){
						Object.assign(cAttr,mAttr);
					}
				}else if(attrName!=="applyCfg" && attrName!=="proxyCfg"){
					appCfg[attrName]=mAttr;
				}
			}
		}
	}
};
appCfg.proxyCfg=function(proxy){
	if(window.codyAppCfgs[cfgURL]===appCfg){
		window.codyAppCfgs[cfgURL]=proxy;
	}
	appCfg=proxy;
};

/*#{EndDoc*/
/*}#EndDoc*/

export{appCfg};
/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "appCfg",
//	"jaxId": "1GGJKJ2SR0",
//	"editVersion": 8,
//	"attrs": {
//		"localVars": {
//			"type": "object",
//			"jaxId": "1GGJKJ2SR1",
//			"editVersion": 10,
//			"attrs": {
//				"darkMode": "false",
//				"colors": {
//					"type": "object",
//					"def": "Object",
//					"jaxId": "1GGJM2JI80",
//					"editVersion": 56,
//					"attrs": {
//						"primary": {
//							"type": "colorRGBA",
//							"valText": "[13,110,253,1]"
//						},
//						"secondary": {
//							"type": "colorRGBA",
//							"valText": "[108,117,125,1]"
//						},
//						"success": {
//							"type": "colorRGBA",
//							"valText": "[0,128,0,1.00]"
//						},
//						"warning": {
//							"type": "colorRGBA",
//							"valText": "[255,128,12,1]"
//						},
//						"error": {
//							"type": "colorRGBA",
//							"valText": "[240,0,0,1.00]"
//						},
//						"dark": {
//							"type": "colorRGBA",
//							"valText": "[30,30,30,1.00]"
//						},
//						"light": {
//							"type": "colorRGBA",
//							"valText": "[250,250,250,1]"
//						}
//					}
//				}
//			}
//		},
//		"editObjs": {
//			"type": "object",
//			"jaxId": "1GGJKJ2SR2",
//			"editVersion": 2,
//			"attrs": {
//				"appCfg": {
//					"type": "object",
//					"jaxId": "1GGJKJ2SQ0",
//					"editVersion": 16,
//					"attrs": {
//						"darkMode": "#darkMode",
//						"version": "0.0.1",
//						"txtSize": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1GGJKJ2SR3",
//							"editVersion": 94,
//							"attrs": {
//								"small": "12",
//								"mid": "16",
//								"big": "20",
//								"smallPlus": {
//									"type": "int",
//									"valText": "14"
//								},
//								"midPlus": {
//									"type": "int",
//									"valText": "18"
//								},
//								"bigPlus": {
//									"type": "int",
//									"valText": "25"
//								},
//								"large": {
//									"type": "int",
//									"valText": "30"
//								},
//								"largePlus": {
//									"type": "int",
//									"valText": "35"
//								},
//								"huge": {
//									"type": "int",
//									"valText": "40"
//								},
//								"hugePlus": {
//									"type": "int",
//									"valText": "50"
//								}
//							}
//						},
//						"size": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1GGJKJ2SR4",
//							"editVersion": 2,
//							"attrs": {
//								"menuLineH": "24"
//							}
//						},
//						"color": {
//							"type": "object",
//							"def": "Object",
//							"jaxId": "1GGJKJ2SR5",
//							"editVersion": 382,
//							"attrs": {
//								"body": {
//									"type": "colorRGBA",
//									"valText": "#darkMode?[55,55,55,1.00]:[255,255,255,1.00]"
//								},
//								"primary": {
//									"type": "colorRGBA",
//									"valText": "#colors.primary"
//								},
//								"secondary": {
//									"type": "colorRGBA",
//									"valText": "#colors.secondary"
//								},
//								"success": {
//									"type": "colorRGBA",
//									"valText": "#colors.success"
//								},
//								"warning": {
//									"type": "colorRGBA",
//									"valText": "#colors.warning"
//								},
//								"error": {
//									"type": "colorRGBA",
//									"valText": "#colors.error"
//								},
//								"fontBody": {
//									"type": "colorRGBA",
//									"valText": "#darkMode?[255,255,255,1]:[0,0,0,1.00]"
//								},
//								"fontBodySub": {
//									"type": "colorRGBA",
//									"valText": "#darkMode?[240,240,240,1.00]:[80,80,80,1.00]"
//								},
//								"fontBodyLit": {
//									"type": "colorRGBA",
//									"valText": "#darkMode?[120,120,120,1]:[180,180,180,1.00]"
//								},
//								"fontPrimary": {
//									"type": "colorRGBA",
//									"valText": "[255,255,255,1.00]"
//								},
//								"fontPrimarySub": {
//									"type": "colorRGBA",
//									"valText": "#[...colors.primary,80]"
//								},
//								"fontPrimaryLit": {
//									"type": "colorRGBA",
//									"valText": "#[...colors.primary,40]"
//								},
//								"fontSecondary": {
//									"type": "colorRGBA",
//									"valText": "[255,255,255,1.00]"
//								},
//								"fontSecondarySub": {
//									"type": "colorRGBA",
//									"valText": "#[...colors.secondary,80.00]"
//								},
//								"fontSecondaryLit": {
//									"type": "colorRGBA",
//									"valText": "#[...colors.secondary,40.00]"
//								},
//								"fontSuccess": {
//									"type": "colorRGBA",
//									"valText": "[255,255,255,1.00]"
//								},
//								"fontSuccessSub": {
//									"type": "colorRGBA",
//									"valText": "#[...colors.success,80.00]"
//								},
//								"fontSuccessLit": {
//									"type": "colorRGBA",
//									"valText": "#[...colors.success,40.00]"
//								},
//								"fontWarning": {
//									"type": "colorRGBA",
//									"valText": "[255,255,255,1.00]"
//								},
//								"fontWarningSub": {
//									"type": "colorRGBA",
//									"valText": "#[...colors.warning,80]"
//								},
//								"fontWarningLit": {
//									"type": "colorRGBA",
//									"valText": "#[...colors.warning,40]"
//								},
//								"fontError": {
//									"type": "colorRGBA",
//									"valText": "[255,255,255,1.00]"
//								},
//								"fontErrorSub": {
//									"type": "colorRGBA",
//									"valText": "#[...colors.error,80]"
//								},
//								"fontErrorLit": {
//									"type": "colorRGBA",
//									"valText": "#[...colors.error,40]"
//								},
//								"lineBody": {
//									"type": "colorRGBA",
//									"valText": "#darkMode?[255,255,255,1]:[0,0,0,1.00]"
//								},
//								"lineBodySub": {
//									"type": "colorRGBA",
//									"valText": "#darkMode?[240,240,240,1.00]:[80,80,80,1.00]"
//								},
//								"lineBodyLit": {
//									"type": "colorRGBA",
//									"valText": "#darkMode?[120,120,120,1]:[180,180,180,1.00]"
//								},
//								"front": "[0,0,0,1]",
//								"fontFront": "[255,255,255,1]",
//								"fontFrontSub": "[240,240,240,1]",
//								"fontFrontLit": "[80,80,80,1]",
//								"itemOver": "[240,240,240,1]",
//								"itemDown": "[200,200,200,1]",
//								"itemFocus": "[13,110,253,1,80]",
//								"itemGray": "[200,200,200,1]"
//							}
//						},
//						"sharedAssets": "\"/~/-tabos/shared/assets\"",
//						"lanCode": "\"CN\""
//					}
//				}
//			}
//		}
//	}
//}