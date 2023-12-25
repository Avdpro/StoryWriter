import {tabFS} from "/@tabos";
import pathLib from "/@path";
import terser from "/@terser/cokemake-plugin.js";
import terserRorllup from "/@terser/rollup-plugin.js";
//Make for HTML-Relase:
let workDir=tabFS.cwd();
let dirName=workDir.substring(1);
let dist={
	steps:[
		{
			action:"clean",
			dirs:["dist"]
		},
		{
			action:"rollup",
			config:{
				input:["./app.js"],
				external:[/\/@/],
				output:{
					format:"es",
					exportDir:"dist",
				},
				plugins:[
					{
						name:"importPatch",
						renderChunk: async function(code, chunk, outputOptions) {
							code=code.replaceAll("import('../@","import('/@");
							code=code.replaceAll(`import("../@`,`import("/@`);
							return code;
						},					
					},
					terserRorllup()
				]
			}
		},
		`Copy "assets" dir, "ai" dir and entry html...`,
		{
			action:"copy",
			dirs:{
				"assets":"dist/assets",
				"ai":"dist/ai",
			},
			files:{
				"app.html":"dist/",
				"app.svg":"dist/app.svg",
				"app.config.js":"dist/app.config.js",
			}
		},
		`Copy "assets" dir, "ai" dir and entry html...`,
	],
	options:{
	}
};
//Make for app package:
let buildVersionIdx=0;
let zipDisks=["coke","-tabos","-homekit","-StdUI","-aichat"];
let zipCommands=[];
let protocol,domain;
let app={
	steps:[
		async function(){
			let info,dir;
			try{
				info=await tabFS.readFile(`${workDir}/build.info.json`,"utf8");
				info=JSON.parse(info);
			}catch(err){
				info={};
			}
			protocol=info.protocol||"app";
			domain=info.domain||"www.ai2apps.com";
			buildVersionIdx=parseInt(info.buildVersionIdx)||0;
			buildVersionIdx+=1;
			//Generate zip disk commands:
			for(dir of zipDisks){
				zipCommands.push(`zip /${dir}/* /tmpinst/${dir}.zip`);
			}
		},
		`Clean dist dir...`,
		{
			action:"clean",
			dirs:["dist"]
		},
		`Roll up apps...`,
		{
			action:"rollup",
			config:{
				input:["./app.js"],
				external:[/\/@/],
				output:{
					format:"es",
					exportDir:"dist",
				},
				plugins:[
					{
						name:"importPatch",
						renderChunk: async function(code, chunk, outputOptions) {
							code=code.replaceAll("import('../@","import('/@");
							code=code.replaceAll(`import("../@`,`import("/@`);
							return code;
						},					
					},
					terserRorllup()
				]
			}
		},
		`Copy "assets" dir, "ai" dir and entry html...`,
		{
			action:"copy",
			dirs:{
				"assets":"dist/assets",
				"ai":"dist/ai",
			},
			files:{
				"app.html":"dist/",
			}
		},
		`Init temp dir...`,
		{
			action:"command",
			commands:[
				"disk drop tmpinst",
				"disk new tmpinst",
			]
		},
		`Generating project disk zip image...`,
		{
			action:"command",
			command:`zip ${workDir}/dist/* /tmpinst/${dirName}.zip`,
		},
		`Generating dependency zip images...`,
		{
			action:"command",
			commands:zipCommands
		},
		`Clear dist dir...`,
		{
			action:"clean",
			dirs:["dist"]
		},
		`Generating setup.js...`,
		async function(){
			let codes,dirs,zipVO,dir;
			dirs=[...zipDisks,dirName];
			zipVO={};
			for(dir of dirs){
				zipVO[dir]=dir+".zip";
			}
			codes=await tabFS.readFile(`${workDir}/setup.template.js`,"utf8");
			codes=codes.replace(`"$$BuildVersionIdx$$"`,""+buildVersionIdx);
			codes=codes.replace(`"$$ZipDirs$$"`,""+JSON.stringify(zipVO));
			codes=codes.replace(`"$$Entry$$"`,""+`"${protocol}://${domain}/~${workDir}/app.html"`);
			await tabFS.writeFile(`/tmpinst/setup.js`,codes,"utf8");
		},
		`Make package zip...`,
		{
			action:"command",
			commands:[
				`zip /tmpinst/* ${workDir}/dist/setup.zip`,
			]
		},
		`Clear temp dir...`,
		{
			action:"clean",
			dirs:["/tmpinst"]
		},
		`Finishing build, update build.info.json.`,
		async function(){
			let info={
				buildVersionIdx:buildVersionIdx,
				lastBuildTime:""+Date(),
				protocol:protocol,
				domain:domain
			};
			info=JSON.stringify(info,null,"\t");
			await tabFS.writeFile(`${workDir}/build.info.json`,info,"utf8");
		},
		`Build done, build-version-idx: ${buildVersionIdx}.`,
		`Download ${workDir}/dist/setup.zip.`,
		`Remove your mobile app project's "setup" dir in "app" dir.`,
		`Unzip setup.zip in your mobile app project's "app" dir as "setup" dir.`,
		`Build and run your mobile app project to test it.`,
	],
	options:{
	}
};
export default dist;
export {dist,app};
