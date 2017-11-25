(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"grossglockner_sc2_animation_atlas_", frames: [[0,3246,250,230],[0,1082,1920,1080],[0,0,1920,1080],[0,2164,1920,1080],[252,3246,29,32]]}
];


// symbols:



(lib.auto = function() {
	this.spriteSheet = ss["grossglockner_sc2_animation_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.grossglockner_layer01_05 = function() {
	this.spriteSheet = ss["grossglockner_sc2_animation_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.grossglockner_layer02_01 = function() {
	this.spriteSheet = ss["grossglockner_sc2_animation_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.grossglockner_layer02_02 = function() {
	this.spriteSheet = ss["grossglockner_sc2_animation_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.schifahrer = function() {
	this.spriteSheet = ss["grossglockner_sc2_animation_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.schifahrer();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,29,32), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.auto();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.304,0.304);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,76.1,70), null);


(lib.gk_sc2_layer2_schifahrer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,hover:1,action:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.gotoAndStop(0);
	}
	this.frame_29 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(26).call(this.frame_29).wait(1));

	// Ebene_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(14.5,16,1,1,0,0,0,14.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({skewY:180},0).wait(1).to({skewY:0},0).wait(2).to({scaleX:0.6,x:36.8,y:32},0).wait(1).to({scaleX:0.2,x:59.2,y:48},0).wait(1).to({skewY:180,x:81.5,y:64},0).wait(1).to({scaleX:0.6,x:60.7,y:72},0).wait(1).to({scaleX:1,x:39.9,y:80},0).wait(1).to({scaleX:0.6,x:19.1,y:88},0).wait(1).to({scaleX:0.2,x:-1.7,y:96},0).wait(1).to({skewY:0,x:-22.5,y:104.1},0).wait(1).to({scaleX:0.6,x:24.5,y:119.6},0).wait(1).to({scaleX:1,x:71.5,y:135.2},0).wait(1).to({scaleX:0.6,x:118.5,y:150.8},0).wait(1).to({scaleX:0.2,x:165.6,y:166.4},0).wait(1).to({skewY:180,x:212.6,y:182},0).wait(1).to({scaleX:0.6,x:179.6,y:199.8},0).wait(1).to({scaleX:1,x:146.6,y:217.7},0).wait(1).to({scaleX:0.67,x:113.6,y:235.5},0).wait(1).to({scaleX:0.33,x:80.5,y:253.4},0).wait(1).to({scaleX:0,x:64,y:271.2},0).wait(1).to({scaleX:0.33,skewY:0,x:14.5,y:289.1},0).wait(1).to({scaleX:0.67,x:80.8,y:312.5},0).wait(1).to({scaleX:1,x:147.2,y:336},0).wait(1).to({x:213.6,y:359.5},0).wait(1).to({x:279.9,y:383},0).wait(1).to({x:346.3,y:406.5},0).wait(1).to({x:412.7,y:430},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,32);


(lib.gk_sc2_layer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.gk_sc2_layer2_schifahrer();
	this.instance.parent = this;
	this.instance.setTransform(820.5,141,1,1,0,0,0,14.5,16);

	this.instance_1 = new lib.grossglockner_layer02_02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.094,1.094);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gk_sc2_layer2, new cjs.Rectangle(0,0,2099.9,1181.2), null);


(lib.gk_sc2_layer1_auto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.gotoAndStop(0);
	}
	this.frame_18 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(15).call(this.frame_18).wait(1));

	// Ebene_6
	this.instance = new lib.grossglockner_layer02_01();
	this.instance.parent = this;
	this.instance.setTransform(-1453,-558,1.091,1.091);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},7).wait(12));

	// Ebene_1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(38.1,35,1,1,0,0,0,38.1,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regX:38,x:38,y:25},0).wait(1).to({y:15},0).wait(2).to({y:7},0).wait(1).to({y:-1},0).wait(2).to({scaleX:1.12,scaleY:1.12,x:62,y:59},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:86,y:119},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:130,y:159},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:174,y:199},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:217.9,y:239},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:257,y:332.6},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:296,y:426.2},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:330.6,y:539.9},0).wait(1).to({scaleX:2.17,scaleY:2.17,x:389.7,y:595.6},0).wait(1).to({scaleX:2.32,scaleY:2.32,x:448.9,y:651.4},0).wait(1).to({scaleX:2.47,scaleY:2.47,x:508,y:707.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1453,-558,2094.3,1178.1);


(lib.gk_sc2_layer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.gk_sc2_layer1_auto();
	this.instance.parent = this;
	this.instance.setTransform(1495.1,594,1,1,0,0,0,38.1,35);

	this.instance_1 = new lib.grossglockner_layer02_01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.092,1.092);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gk_sc2_layer1, new cjs.Rectangle(0,0,2098.3,1179.1), null);


(lib.gk_sc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,"action":12,out:13});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		$(document).trigger("nextScene");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12).call(this.frame_24).wait(1));

	// Layer1_In
	this.instance = new lib.gk_sc2_layer1();
	this.instance.parent = this;
	this.instance.setTransform(2114.6,984.3,1,1,0,0,0,1047.9,589.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1049.2,regY:676.3,x:2011.1,y:1030.7},0).wait(1).to({x:1906.3,y:990.4},0).wait(1).to({x:1801.7,y:950},0).wait(1).to({x:1696.8,y:909.6},0).wait(1).to({x:1592.1,y:869.2},0).wait(1).to({x:1487.4,y:828.9},0).wait(1).to({x:1382.7,y:788.5},0).wait(1).to({x:1277.8,y:748.1},0).wait(1).to({x:1173.1,y:707.7},0).wait(1).to({x:1068.3,y:667.4},0).wait(1).to({x:963.6,y:627},0).to({_off:true},1).wait(13));

	// Layer2_In
	this.instance_1 = new lib.gk_sc2_layer2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1032.5,1670.6,1,1,0,0,0,1050,590.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:1049.9,x:-851.4,y:1581.6},0).wait(1).to({x:-670.3,y:1492.6},0).wait(1).to({x:-489.3,y:1403.7},0).wait(1).to({x:-308,y:1314.6},0).wait(1).to({x:-126.9,y:1225.6},0).wait(1).to({x:54.1,y:1136.7},0).wait(1).to({x:235.2,y:1047.7},0).wait(1).to({x:416.5,y:958.6},0).wait(1).to({x:597.7,y:869.6},0).wait(1).to({x:778.8,y:780.6},0).wait(1).to({x:959.9,y:691.6},0).to({_off:true},1).wait(13));

	// Layer1_Out
	this.instance_2 = new lib.gk_sc2_layer1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(959.9,540.5,1,1,0,0,0,1047.9,589.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).wait(1).to({regX:1049.2,regY:676.3,x:1077.2,y:684.8},0).wait(1).to({x:1193.3,y:742.2},0).wait(1).to({x:1309.2,y:799.6},0).wait(1).to({x:1425.3,y:857.2},0).wait(1).to({x:1541.3,y:914.6},0).wait(1).to({x:1657.2,y:972.1},0).wait(1).to({x:1773.3,y:1029.5},0).wait(1).to({x:1889.4,y:1087},0).wait(1).to({x:2005.4,y:1144.5},0).wait(1).to({x:2121.5,y:1202},0).wait(1).to({x:2237.5,y:1259.5},0).wait(1));

	// Layer2_Out
	this.instance_3 = new lib.gk_sc2_layer2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,691.6,1,1,0,0,0,1050,590.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(1).to({regX:1049.9,x:752.6,y:776},0).wait(1).to({x:545.3,y:860.4},0).wait(1).to({x:338.2,y:944.7},0).wait(1).to({x:130.7,y:1029.1},0).wait(1).to({x:-76.7,y:1113.5},0).wait(1).to({x:-283.8,y:1197.8},0).wait(1).to({x:-491.1,y:1282.2},0).wait(1).to({x:-698.6,y:1366.7},0).wait(1).to({x:-906,y:1451},0).wait(1).to({x:-1113.3,y:1535.4},0).wait(1).to({x:-1320.6,y:1619.8},0).wait(1));

	// GK_Scene2
	this.instance_4 = new lib.grossglockner_layer01_05();
	this.instance_4.parent = this;

	this.instance_5 = new lib.gk_sc2_layer1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(959.9,540.5,1,1,0,0,0,1047.9,589.5);

	this.instance_6 = new lib.gk_sc2_layer2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(960,691.6,1,1,0,0,0,1050,590.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4},{t:this.instance_6},{t:this.instance_5}]},12).to({state:[{t:this.instance_4}]},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2082.5,0,5247.5,2261.2);


// stage content:
(lib.grossglockner_sc2_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene_1
	this.instance = new lib.gk_sc2();
	this.instance.parent = this;
	this.instance.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1122.5,540,5247.5,2261.2);
// library properties:
lib.properties = {
	id: 'E4B988B16767494D8F179471DFDFE09D',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/grossglockner_sc2_animation_atlas_.png", id:"grossglockner_sc2_animation_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E4B988B16767494D8F179471DFDFE09D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;