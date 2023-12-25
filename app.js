//Auto genterated by Cody
import {tabOS,tabFS,tabTask} from "/@tabos";
import {VFACT} from "/@vfact";
import {} from "/@vfact/vfact_app.js";
import{appCfg} from "./cfg/appCfg.js";
/*#{MoreImports*/
import {AppLib} from "/@homekit/data/AppLib.js";
import pathLib from "/@path";
import {MainUI} from "./ui/MainUI.js";
import {DlgTask} from "/@homekit/ui/DlgTask.js";
/*}#MoreImports*/
VFACT.appCfg=appCfg;
/*#{StartApp*/
/*}#StartApp*/
//----------------------------------------------------------------------------
//Start the app:
async function startApp() {
	/*#{AppCode*/
	let app,uiDef;
	
	document.title="Tab-OS App";
	//------------------------------------------------------------------------
	//Check if we are in appFrame:
	let appFrame=null;
	//CheckAppFrame:
	{
		let pw;
		appFrame=null;
		pw=window.parent;
		if(pw!==window){
			if(pw.getAppFrame){
				appFrame=window.appFrame=pw.getAppFrame(window);
			}
		}
	}
	window.tabOSApp=app=await VFACT.createApp();
	
	//setup open (openPath, openMeta...) API:
	await AppLib.setupOpenAPI(app,appFrame);
	
	uiDef=MainUI(app,appFrame);
	if(!appFrame){
		//uiDef=AppLib.setupMiniDocker(app,uiDef);
	}
	//init app, create app UI tree:
	await VFACT.initApp(app,uiDef,{
		wait:1,
		shortcuts:appCfg.shortcuts,
		DlgTask:DlgTask,
		appFrame:appFrame,
	});
	/*}#AppCode*/
}
tabOS.setup().then(()=>{startApp();});
/*#{EndDoc*/
/*}#EndDoc*/

/*Cody Project Doc*/
//{
//	"type": "docfile",
//	"def": "app",
//	"jaxId": "1GGJKJ38Q0",
//	"editVersion": 52,
//	"attrs": {
//		"fonts": {
//			"type": "object",
//			"def": "Fonts",
//			"jaxId": "1GGJKJ38Q1",
//			"editVersion": 0,
//			"attrs": {}
//		},
//		"exportTarget": "VFACT document",
//		"localize": {
//			"type": "array",
//			"def": "StringArray",
//			"attrs": [
//				"EN",
//				{
//					"type": "string",
//					"valText": "CN"
//				}
//			]
//		},
//		"language": "EN",
//		"useTabOS": "true",
//		"title": "Tab-OS App",
//		"bgColor": "[255,255,255]",
//		"icon": "",
//		"fullScreen": "false",
//		"multiTouch": "false",
//		"location": "false",
//		"camera": "false",
//		"photo": "false",
//		"notification": "false",
//		"contacts": "false",
//		"payment": "false"
//	}
//}