(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.grossglockner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// Ebene 1
	this.sc1 = new lib.gk_sc1();
	this.sc1.setTransform(959.7,539.8);

	this.sc2 = new lib.gk_sc2();
	this.sc2.setTransform(958,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sc1}]}).to({state:[{t:this.sc2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-615,-0.1,3636.6,2263);


// symbols:
(lib.auto = function() {
	this.initialize(img.auto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,230);


(lib.grossglockner_layer01_01 = function() {
	this.initialize(img.grossglockner_layer01_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,539);


(lib.grossglockner_layer01_01_01 = function() {
	this.initialize(img.grossglockner_layer01_01_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,528);


(lib.grossglockner_layer01_01_02 = function() {
	this.initialize(img.grossglockner_layer01_01_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,189);


(lib.grossglockner_layer01_01_03 = function() {
	this.initialize(img.grossglockner_layer01_01_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,183);


(lib.grossglockner_layer01_01_04 = function() {
	this.initialize(img.grossglockner_layer01_01_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,138);


(lib.grossglockner_layer01_01_05 = function() {
	this.initialize(img.grossglockner_layer01_01_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,217);


(lib.grossglockner_layer01_01_06 = function() {
	this.initialize(img.grossglockner_layer01_01_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,208);


(lib.grossglockner_layer01_01_06_1 = function() {
	this.initialize(img.grossglockner_layer01_01_06_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.grossglockner_layer01_02 = function() {
	this.initialize(img.grossglockner_layer01_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,995);


(lib.grossglockner_layer01_03 = function() {
	this.initialize(img.grossglockner_layer01_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1270,912);


(lib.grossglockner_layer01_04 = function() {
	this.initialize(img.grossglockner_layer01_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1024);


(lib.grossglockner_layer01_05 = function() {
	this.initialize(img.grossglockner_layer01_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.grossglockner_layer02_01 = function() {
	this.initialize(img.grossglockner_layer02_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.grossglockner_layer02_02 = function() {
	this.initialize(img.grossglockner_layer02_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.reh01 = function() {
	this.initialize(img.reh01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,93);


(lib.reh02 = function() {
	this.initialize(img.reh02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,93);


(lib.schifahrer = function() {
	this.initialize(img.schifahrer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,32);


(lib.Symbol2 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.schifahrer();
	this.instance.setTransform(-14.2,-15.7,1.984,1.984);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.2,-15.7,57.6,63.5);


(lib.Symbol1 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.auto();
	this.instance.setTransform(0,0,0.304,0.304);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.1,70);


(lib.gk_sc1_layer4 = function() {
	this.initialize();

	// Main
	this.instance = new lib.grossglockner_layer01_04();
	this.instance.setTransform(-1085.9,-579.1,1.131,1.131);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1085.9,-579.1,2171.9,1158.4);


(lib.gk_sc1_layer3 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.grossglockner_layer01_03();
	this.instance.setTransform(-634.9,-455.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-634.9,-455.9,1270,912);


(lib.gk_sc1_layer2 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.grossglockner_layer01_02();
	this.instance.setTransform(-1083.9,-561.7,1.129,1.129);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1083.9,-561.7,2168,1123.5);


(lib.gk_sc1_layer1_wald = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,hover:1,action:17});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.gotoAndStop(0);
	}
	this.frame_96 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(80).call(this.frame_96));

	// Main
	this.instance = new lib.grossglockner_layer01_01_02();
	this.instance.setTransform(-29.1,-89.8,1.148,1.148);

	this.instance_1 = new lib.grossglockner_layer01_01_04();
	this.instance_1.setTransform(-21.2,-56,1.052,1.052);

	this.instance_2 = new lib.grossglockner_layer01_01_03();
	this.instance_2.setTransform(-195.4,-75.9,1.131,1.131);

	this.instance_3 = new lib.grossglockner_layer01_01_05();
	this.instance_3.setTransform(-119.9,-141.9,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(80));

	// Reh
	this.instance_4 = new lib.reh01();
	this.instance_4.setTransform(28,12);

	this.instance_5 = new lib.reh02();
	this.instance_5.setTransform(38.4,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4,p:{x:28,y:12}}]},17).to({state:[{t:this.instance_5,p:{x:38.4,y:15}}]},4).to({state:[{t:this.instance_4,p:{x:54.6,y:17.5}}]},4).to({state:[{t:this.instance_5,p:{x:59.9,y:21}}]},4).to({state:[{t:this.instance_4,p:{x:66.3,y:21.5}}]},4).to({state:[{t:this.instance_5,p:{x:83.3,y:29.5}}]},4).to({state:[{t:this.instance_4,p:{x:119.5,y:29.5}}]},4).to({state:[{t:this.instance_5,p:{x:145.3,y:34.2}}]},4).to({state:[{t:this.instance_4,p:{x:183.4,y:43.5}}]},4).to({state:[{t:this.instance_5,p:{x:218.3,y:54.5}}]},4).to({state:[{t:this.instance_4,p:{x:257,y:63}}]},4).to({state:[{t:this.instance_5,p:{x:286.3,y:73}}]},4).to({state:[{t:this.instance_4,p:{x:337.5,y:80.5}}]},4).to({state:[{t:this.instance_5,p:{x:385.3,y:100.8}}]},4).to({state:[{t:this.instance_4,p:{x:430.5,y:112.8}}]},4).to({state:[{t:this.instance_5,p:{x:476.3,y:127.2}}]},4).to({state:[{t:this.instance_4,p:{x:532,y:149.5}}]},4).to({state:[{t:this.instance_5,p:{x:582.8,y:164}}]},4).to({state:[{t:this.instance_4,p:{x:630,y:184.5}}]},4).to({state:[{t:this.instance_5,p:{x:679.3,y:207.5}}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.4,-141.9,378.8,273);


(lib.gk_sc1_layer1_haus = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.grossglockner_layer01_01_06();
	this.instance.setTransform(-157.1,-121.9,1.173,1.173);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.1,-121.9,314.4,244);


(lib.gk_sc2_layer2_schifahrer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.gotoAndStop(0);
	}
	this.frame_141 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(130).call(this.frame_141));

	// Ebene_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(14.5,16,1,1,0,0,0,14.5,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).wait(1).to({scaleX:0,scaleY:0,x:-11.5},0).wait(1).to({scaleX:1,scaleY:1,skewY:180,x:9},0).wait(1).to({x:9.7},0).wait(1).to({skewY:0,x:10.4},0).wait(1).to({x:11.1},0).wait(1).to({x:11.8},0).wait(1).to({x:12.5},0).wait(1).to({x:13.2},0).wait(1).to({x:13.9},0).wait(1).to({x:14.5},0).wait(1).to({x:18.4,y:18.8},0).wait(1).to({x:22.4,y:21.6},0).wait(1).to({x:26.3,y:24.5},0).wait(1).to({x:30.3,y:27.3},0).wait(1).to({x:34.2,y:30.1},0).wait(1).to({x:38.1,y:32.9},0).wait(1).to({x:42.1,y:35.8},0).wait(1).to({x:46,y:38.6},0).wait(1).to({x:50,y:41.4},0).wait(1).to({x:53.9,y:44.2},0).wait(1).to({x:57.9,y:47.1},0).wait(1).to({x:61.8,y:49.9},0).wait(1).to({x:65.7,y:52.7},0).wait(1).to({x:69.7,y:55.5},0).wait(1).to({x:73.6,y:58.4},0).wait(1).to({x:77.6,y:61.2},0).wait(1).to({x:81.5,y:64},0).wait(1).to({skewY:180,x:76.3,y:66},0).wait(1).to({x:71.1,y:68},0).wait(1).to({x:65.9,y:70},0).wait(1).to({x:60.7,y:72},0).wait(1).to({x:55.5,y:74},0).wait(1).to({x:50.3,y:76},0).wait(1).to({x:45.1,y:78},0).wait(1).to({x:39.9,y:80},0).wait(1).to({x:34.7,y:82},0).wait(1).to({x:29.5,y:84},0).wait(1).to({x:24.3,y:86},0).wait(1).to({x:19.1,y:88},0).wait(1).to({x:13.9,y:90},0).wait(1).to({x:8.7,y:92},0).wait(1).to({x:3.5,y:94},0).wait(1).to({x:-1.5,y:96},0).wait(1).to({x:-6.7,y:98},0).wait(1).to({x:-11.9,y:100},0).wait(1).to({x:-17.1,y:102},0).wait(1).to({x:-22.3,y:104.1},0).wait(1).to({skewY:0,x:-13.9,y:106.8},0).wait(1).to({x:-5.5,y:109.6},0).wait(1).to({x:2.7,y:112.4},0).wait(1).to({x:11.1,y:115.2},0).wait(1).to({x:19.4,y:118},0).wait(1).to({x:27.8,y:120.7},0).wait(1).to({x:36.2,y:123.5},0).wait(1).to({x:44.6,y:126.3},0).wait(1).to({x:53,y:129.1},0).wait(1).to({x:61.4,y:131.9},0).wait(1).to({x:69.8,y:134.7},0).wait(1).to({x:78.2,y:137.4},0).wait(1).to({x:86.6,y:140.2},0).wait(1).to({x:95,y:143},0).wait(1).to({x:103.4,y:145.8},0).wait(1).to({x:111.8,y:148.6},0).wait(1).to({x:120.2,y:151.3},0).wait(1).to({x:128.6,y:154.1},0).wait(1).to({x:137,y:156.9},0).wait(1).to({x:145.4,y:159.7},0).wait(1).to({x:153.8,y:162.5},0).wait(1).to({x:162.2,y:165.3},0).wait(1).to({x:170.6,y:168},0).wait(1).to({x:179,y:170.8},0).wait(1).to({x:187.4,y:173.6},0).wait(1).to({x:195.8,y:176.4},0).wait(1).to({x:204.2,y:179.2},0).wait(1).to({skewY:180,x:212.6,y:182},0).wait(1).to({x:204.7,y:186.2},0).wait(1).to({x:196.8,y:190.5},0).wait(1).to({x:188.8,y:194.8},0).wait(1).to({x:180.9,y:199.1},0).wait(1).to({x:173,y:203.4},0).wait(1).to({x:165.1,y:207.7},0).wait(1).to({x:157.1,y:211.9},0).wait(1).to({x:149.2,y:216.2},0).wait(1).to({x:141.3,y:220.5},0).wait(1).to({x:133.4,y:224.8},0).wait(1).to({x:125.4,y:229.1},0).wait(1).to({x:117.5,y:233.4},0).wait(1).to({x:109.6,y:237.6},0).wait(1).to({x:101.7,y:241.9},0).wait(1).to({x:93.7,y:246.2},0).wait(1).to({x:85.8,y:250.5},0).wait(1).to({x:77.9,y:254.8},0).wait(1).to({x:70,y:259.1},0).wait(1).to({x:62,y:263.3},0).wait(1).to({x:54.1,y:267.6},0).wait(1).to({x:46.2,y:271.9},0).wait(1).to({x:38.3,y:276.2},0).wait(1).to({x:30.3,y:280.5},0).wait(1).to({x:22.4,y:284.8},0).wait(1).to({x:14.5,y:289.1},0).wait(1).to({skewY:0,x:24.7,y:292.7},0).wait(1).to({x:34.9,y:296.3},0).wait(1).to({x:45.1,y:299.9},0).wait(1).to({x:55.3,y:303.5},0).wait(1).to({x:65.5,y:307.1},0).wait(1).to({x:75.8,y:310.7},0).wait(1).to({x:86,y:314.3},0).wait(1).to({x:96.2,y:318},0).wait(1).to({x:106.4,y:321.6},0).wait(1).to({x:116.6,y:325.2},0).wait(1).to({x:126.8,y:328.8},0).wait(1).to({x:137,y:332.4},0).wait(1).to({x:147.2,y:336},0).wait(1).to({x:157.4,y:339.6},0).wait(1).to({x:167.6,y:343.2},0).wait(1).to({x:177.8,y:346.9},0).wait(1).to({x:188.1,y:350.5},0).wait(1).to({x:198.3,y:354.1},0).wait(1).to({x:208.5,y:357.7},0).wait(1).to({x:218.7,y:361.3},0).wait(1).to({x:228.9,y:364.9},0).wait(1).to({x:239.1,y:368.5},0).wait(1).to({x:249.3,y:372.1},0).wait(1).to({x:259.5,y:375.8},0).wait(1).to({x:269.7,y:379.4},0).wait(1).to({x:279.9,y:383},0).wait(1).to({x:290.1,y:386.6},0).wait(1).to({x:300.4,y:390.2},0).wait(1).to({x:310.6,y:393.8},0).wait(1).to({x:320.8,y:397.4},0).wait(1).to({x:331,y:401},0).wait(1).to({x:341.2,y:404.7},0).wait(1).to({x:351.4,y:408.3},0).wait(1).to({x:361.6,y:411.9},0).wait(1).to({x:371.8,y:415.5},0).wait(1).to({x:382,y:419.1},0).wait(1).to({x:392.2,y:422.7},0).wait(1).to({x:402.4,y:426.3},0).wait(1).to({x:412.7,y:430},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-15.7,57.6,63.5);


(lib.gk_sc2_layer2 = function() {
	this.initialize();

	// Ebene_1
	this.skifahrer = new lib.gk_sc2_layer2_schifahrer();
	this.skifahrer.setTransform(820.5,141,1,1,0,0,0,14.5,16);

	this.instance = new lib.grossglockner_layer02_02();
	this.instance.setTransform(0,0,1.094,1.094);

	this.addChild(this.instance,this.skifahrer);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2099.9,1181.2);


(lib.gk_sc2_layer1_auto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.gotoAndStop(0);
	}
	this.frame_64 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(50).call(this.frame_64));

	// Ebene_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqnGqQgRgEgXABQgDgFgKgBIgOgGQgKgFgKgHQgLgGgGgOQgDgNgHgKQgEgFAAgHIgBgIQgBghABgnQADgFgBgFQgCgKADgIIADgMQABgMAEgKQgDgrAEgrIAFg8IAGg3QADgbABgfIAAhhIAAhiIgBhaIgCgZIgCglQAAgIACgHQA0gFAwAHQAuAGAvgBIBVAAIBSAAIBOAAIBhAAIBdABQAxAAAwgCIAwgCIAcgBQAsAAArgDQAjgDAjgBIAXgBIBagEQAZgBAZAAQAuAAAugDQAvgEAwABIBfABIBfAAQANAAAKAEIAPAEQAOAFALgBQACAQAAAMQAAAegEAeIgCARQgBA2ABAxIAAAHQAAAKADAGIACAbQABANgGAOQAGAKAEAPIACAIQAEAPgBARIgDAwQgBArAFAtQgIAAgGAFQgHAGgNAFQgFADgKACQgHAGgOAGIgoAQIgSAKIgOAHIgKADIgLAFIgJAEIgPAFIgZAMIgZAIQgDACgKABQgDAEgHABIgKABIgKADIgbAFIgPADIgNAEQgJABgLAGIgHACQgMACgLAEIgKAEQgLADgQACQgJAEgQADQgIAGgMABQgHABgIADIgKADIgbAJQgGACgKAAQgGAAgLADQgDACgMABIgUACIgPACQgDACgLABQgDADgNgBQgDACgMABQgNABgMADIgZAFIgIABIgeAGIgMACIgcAHQgRADgNAKIgPAEIgPAFIgMADIgXAEIgKADQgFADgKgBQgNAAgMADIgXAFIgeAGIgtAMIgWAHIgNADIgZAFIgHACIgKACIgMADQgGACgKABIgPACIgbADIgHACIgLADIgHACIgYAIQgEADgFABQgHABgMAFQgGADgMACQgJAAgGAEIgKADQgDACgHAAQgNAAgPABQgIAAgJAFQgLABgOAFQgXAEgZgBQgWgCgWADIgGABQgIgIgHgCgADHhiIgoABIhDABIgIABIgeACIgMAAQgJAAgEADIgUACIgUACIg6ACIgUABIgZABIhBABIgHABQgxADgxAAIgUABIgjACQgKAAgKACQguAGgxADIgMACQgQADgRAAIgHABQgsAJgpAWIgvAZIgLAFIgaAXIgJAJQgZAbgWAfQgPAWgNAXQgHAMgDANQgDAJgFAJQgDAJgCADIgFAIIAFgIQACgDADgJQAFgJADgJQADgNAHgMQANgXAPgWQAWgfAZgbIAJgJIAagXIALgFIAvgZQApgWAsgJIAHgBQARAAAQgDIAMgCQAxgDAugGQAKgCAKAAIAjgCIAUgBQAxAAAxgDIAHgBIBBgBIAZgBIAUgBIA6gCIAUgCIAUgCQAEgDAJAAIAMAAIAegCIAIgBIBDgBIAogBIAEAAIAvgBIABAAIAAAAIAGAAIAHAAIAXgBIAGgBIABAAIABAAQAdgDAdAAIABAAIAAAAIAEAAIAEAAIAKgBIAMgCQAPgCAPgDQAVgFAagIIAZgFQAugQAtgSQARgGAXgCIAGgBQAXgEAXAAIABAAIAAAAQAYAAAZAEQAEACAOABQANABAMAMQANAHAHALIABACIABAGQAAAGgCADQACgDAAgGIgBgGIgBgCQgHgLgNgHQgMgMgNgBQgOgBgEgCQgZgEgYAAIAAAAIgBAAQgXAAgXAEIgGABQgXACgRAGQgtASguAQIgZAFQgaAIgVAFQgPADgPACIgMACIgKABIgEAAIgEAAIAAAAIgBAAQgdAAgdADIgBAAIgBAAIgGABIgXABIgHAAIgGAAIAAAAIgBAAIgvABIgEAAIAAAAg");
	mask.setTransform(37.5,1.6);

	// Ebene_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(38.1,35,1,1,0,0,0,38.1,35);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({regX:38,x:38,y:31},0).wait(1).to({y:27},0).wait(1).to({y:23.1},0).wait(1).to({y:19},0).wait(1).to({y:15},0).wait(1).wait(1).to({y:12.8},0).wait(1).to({y:10.5},0).wait(1).to({y:8.2},0).wait(1).to({y:5.9},0).wait(1).to({y:3.6},0).wait(1).to({y:1.3},0).wait(1).to({y:-0.8},0).wait(2).wait(1).to({scaleX:1.02,scaleY:1.02,x:42,y:9.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:46,y:19.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:50,y:29.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:54,y:39},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:58,y:49},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:62,y:59},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:66,y:69},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:70,y:79},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:74,y:89},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:78,y:99},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:82,y:109},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:86,y:119},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:97,y:129},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:108,y:139},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:119,y:149},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:130,y:159},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:141,y:169},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:152,y:179},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:163,y:189},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:174,y:199},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:184.9,y:209},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:196,y:219},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:207,y:229},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:217.9,y:239},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:224.5,y:254.6},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:231,y:270.2},0).wait(1).to({scaleX:1.69,scaleY:1.69,x:237.5,y:285.8},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:244,y:301.4},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:250.5,y:317},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:257,y:332.6},0).wait(1).to({scaleX:1.84,scaleY:1.84,x:263.5,y:348.2},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:270,y:363.8},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:276.5,y:379.4},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:282.9,y:395},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:289.5,y:410.6},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:296,y:426.3},0).wait(1).to({scaleX:2.06,scaleY:2.06,x:301.7,y:445.2},0).wait(1).to({scaleX:2.1,scaleY:2.1,x:307.5,y:464.1},0).wait(1).to({scaleX:2.14,scaleY:2.14,x:313.3,y:483.1},0).wait(1).to({scaleX:2.17,scaleY:2.17,x:319.1,y:502},0).wait(1).to({scaleX:2.21,scaleY:2.21,x:324.9,y:521},0).wait(1).to({scaleX:2.25,scaleY:2.25,x:330.6,y:539.9},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:360.2,y:567.8},0).wait(1).to({scaleX:2.32,scaleY:2.32,x:389.8,y:595.6},0).wait(1).to({scaleX:2.36,scaleY:2.36,x:419.3,y:623.5},0).wait(1).to({scaleX:2.4,scaleY:2.4,x:448.9,y:651.4},0).wait(1).to({scaleX:2.44,scaleY:2.44,x:478.4,y:679.2},0).wait(1).to({scaleX:2.47,scaleY:2.47,x:508,y:707.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.1,70);


(lib.gk_sc2_layer1 = function() {
	this.initialize();

	// Ebene_1
	this.auto = new lib.gk_sc2_layer1_auto();
	this.auto.setTransform(1495.1,594,1,1,0,0,0,38.1,35);

	this.instance = new lib.grossglockner_layer02_01();
	this.instance.setTransform(0,0,1.092,1.092);

	this.addChild(this.instance,this.auto);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2095.9,1179);


(lib.gk_sc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,"action":12,out:13});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop();
	}
	this.frame_12 = function() {
		this.gotoAndStop();
	}
	this.frame_24 = function() {
		this.gotoAndStop();
		$(document).trigger("nextScene");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12).call(this.frame_24));

	// Layer1_In
	this.l1 = new lib.gk_sc2_layer1();
	this.l1.setTransform(2114.6,984.3,1,1,0,0,0,1047.9,589.5);

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(1).to({x:2009.8,y:943.9},0).wait(1).to({x:1905,y:903.6},0).wait(1).to({x:1800.4,y:863.2},0).wait(1).to({x:1695.5,y:822.8},0).wait(1).to({x:1590.8,y:782.4},0).wait(1).to({x:1486.1,y:742.1},0).wait(1).to({x:1381.4,y:701.7},0).wait(1).to({x:1276.5,y:661.3},0).wait(1).to({x:1171.8,y:620.9},0).wait(1).to({x:1067,y:580.6},0).wait(1).to({x:962.3,y:540.2},0).to({_off:true},1).wait(13));

	// Layer2_In
	this.l2 = new lib.gk_sc2_layer2();
	this.l2.setTransform(-1032.4,1670.6,1,1,0,0,0,1050,590.6);

	this.timeline.addTween(cjs.Tween.get(this.l2).wait(1).to({regX:1049.9,x:-851.2,y:1581.6},0).wait(1).to({x:-670.1,y:1492.6},0).wait(1).to({x:-489.1,y:1403.7},0).wait(1).to({x:-307.8,y:1314.6},0).wait(1).to({x:-126.7,y:1225.6},0).wait(1).to({x:54.1,y:1136.7},0).wait(1).to({x:235.2,y:1047.7},0).wait(1).to({x:416.5,y:958.6},0).wait(1).to({x:597.7,y:869.6},0).wait(1).to({x:778.8,y:780.6},0).wait(1).to({x:959.9,y:691.6},0).to({_off:true},1).wait(13));

	// Layer1_Out
	this.l1_1 = new lib.gk_sc2_layer1();
	this.l1_1.setTransform(959.9,540.5,1,1,0,0,0,1047.9,589.5);
	this.l1_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.l1_1).wait(13).to({_off:false},0).wait(1).to({x:1075.9,y:598},0).wait(1).to({x:1192,y:655.4},0).wait(1).to({x:1307.9,y:712.8},0).wait(1).to({x:1424,y:770.4},0).wait(1).to({x:1540,y:827.8},0).wait(1).to({x:1655.9,y:885.3},0).wait(1).to({x:1772,y:942.7},0).wait(1).to({x:1888.1,y:1000.2},0).wait(1).to({x:2004.1,y:1057.7},0).wait(1).to({x:2120.2,y:1115.2},0).wait(1).to({x:2236.2,y:1172.7},0).wait(1));

	// Layer2_Out
	this.l2_1 = new lib.gk_sc2_layer2();
	this.l2_1.setTransform(960,691.6,1,1,0,0,0,1050,590.6);
	this.l2_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.l2_1).wait(13).to({_off:false},0).wait(1).to({regX:1049.9,x:752.6,y:776},0).wait(1).to({x:545.3,y:860.4},0).wait(1).to({x:338.2,y:944.7},0).wait(1).to({x:130.7,y:1029.1},0).wait(1).to({x:-76.5,y:1113.5},0).wait(1).to({x:-283.6,y:1197.8},0).wait(1).to({x:-490.9,y:1282.2},0).wait(1).to({x:-698.4,y:1366.7},0).wait(1).to({x:-905.8,y:1451},0).wait(1).to({x:-1113.1,y:1535.4},0).wait(1).to({x:-1320.4,y:1619.8},0).wait(1));

	// GK_Scene2
	this.instance = new lib.grossglockner_layer01_05();
	this.instance.setTransform(-15.9,0,1.017,1);

	this.l1_2 = new lib.gk_sc2_layer1();
	this.l1_2.setTransform(959.9,540.5,1,1,0,0,0,1047.9,589.5);

	this.l2_2 = new lib.gk_sc2_layer2();
	this.l2_2.setTransform(960,691.6,1,1,0,0,0,1050,590.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1.017,x:-15.9}}]}).to({state:[{t:this.instance,p:{scaleX:1,x:0}},{t:this.l2_2},{t:this.l1_2}]},12).to({state:[{t:this.instance,p:{scaleX:1,x:0}}]},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1901.3,0,4959.2,2172.2);


(lib.gk_sc1_layer1 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.gk_sc1_layer1_haus();
	this.instance.setTransform(-488.7,-88.5);

	this.wald = new lib.gk_sc1_layer1_wald();
	this.wald.setTransform(389,-93.5);

	this.instance_1 = new lib.grossglockner_layer01_01_01();
	this.instance_1.setTransform(-1017.1,-310.5,1.117,1.117);

	this.addChild(this.instance_1,this.wald,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1017.1,-310.5,2144.4,589.7);


(lib.gk_sc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,"action":12,"out":13});

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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12).call(this.frame_24));

	// Layer1AnimIn
	this.instance = new lib.gk_sc1_layer1();
	this.instance.setTransform(-45.6,871.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:86.5,regY:-15.5,x:41.8,y:806.7},0).wait(1).to({x:42.7,y:758},0).wait(1).to({x:43.6,y:709.3},0).wait(1).to({x:44.5,y:660.5},0).wait(1).to({x:45.4,y:611.8},0).wait(1).to({x:46.3,y:563.1},0).wait(1).to({x:47.2,y:514.3},0).wait(1).to({x:48.1,y:465.6},0).wait(1).to({x:49,y:416.8},0).wait(1).to({x:49.9,y:368.1},0).wait(1).to({x:50.8,y:319.4},0).to({_off:true},1).wait(13));

	// Layer2AnimIn
	this.instance_1 = new lib.gk_sc1_layer2();
	this.instance_1.setTransform(-490.7,539.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.99,scaleY:0.99,x:-445.4,y:497.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-400.3,y:455.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-355.2,y:414},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-310.1,y:372},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-264.9,y:330},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-219.9,y:288.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-174.7,y:246.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-129.6,y:204.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-84.4,y:162.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-39.3,y:120.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:5.6,y:78.4},0).to({_off:true},1).wait(13));

	// Layer3AnimIn
	this.instance_2 = new lib.gk_sc1_layer3();
	this.instance_2.setTransform(1362.8,548,1.101,1.101);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.1,scaleY:1.1,x:1272.8,y:511.8},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:1182.9,y:475.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:1093,y:439.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:1002.9,y:403.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:913,y:367.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:823.1,y:331},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:733.1,y:294.8},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:643.1,y:258.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:553.1,y:222.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:463.2,y:186.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:373.2,y:150.1},0).to({_off:true},1).wait(13));

	// Layer4 AnimIn
	this.instance_3 = new lib.gk_sc1_layer4();
	this.instance_3.setTransform(-87.6,1143.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-82.2,y:1057.4},0).wait(1).to({x:-77,y:971},0).wait(1).to({x:-71.7,y:884.6},0).wait(1).to({x:-66.4,y:798.2},0).wait(1).to({x:-61.2,y:711.8},0).wait(1).to({x:-55.9,y:625.4},0).wait(1).to({x:-50.6,y:539},0).wait(1).to({x:-45.4,y:452.6},0).wait(1).to({x:-40.1,y:366.2},0).wait(1).to({x:-34.8,y:279.8},0).wait(1).to({x:-29.6,y:193.4},0).to({_off:true},1).wait(13));

	// Ebene 16
	this.instance_4 = new lib.gk_sc1_layer1();
	this.instance_4.setTransform(-35.6,335);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).wait(1).to({regX:86.5,regY:-15.5,x:55.2,y:378.2},0).wait(1).to({x:59.6,y:437.1},0).wait(1).to({x:63.9,y:495.9},0).wait(1).to({x:68.3,y:554.9},0).wait(1).to({x:72.6,y:613.7},0).wait(1).to({x:77,y:672.6},0).wait(1).to({x:81.4,y:731.4},0).wait(1).to({x:85.7,y:790.4},0).wait(1).to({x:90,y:849.2},0).wait(1).to({x:94.4,y:908.1},0).wait(1).to({x:98.8,y:967},0).wait(1));

	// Ebene 17
	this.instance_5 = new lib.gk_sc1_layer2();
	this.instance_5.setTransform(5.6,78.4,0.932,0.932);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).wait(1).to({x:-22.6,y:145.1},0).wait(1).to({x:-50.9,y:211.8},0).wait(1).to({x:-79.2,y:278.4},0).wait(1).to({x:-107.6,y:345.2},0).wait(1).to({x:-136,y:411.9},0).wait(1).to({x:-164.3,y:478.6},0).wait(1).to({x:-192.7,y:545.3},0).wait(1).to({x:-221.1,y:612},0).wait(1).to({x:-249.4,y:678.7},0).wait(1).to({x:-277.8,y:745.4},0).wait(1).to({x:-306.1,y:812.2},0).wait(1));

	// Ebene 18
	this.instance_6 = new lib.gk_sc1_layer3();
	this.instance_6.setTransform(373.2,150.1,1.039,1.039);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).wait(1).to({x:434.5,y:189.5},0).wait(1).to({x:495.7,y:229},0).wait(1).to({x:556.9,y:268.4},0).wait(1).to({x:618.2,y:307.9},0).wait(1).to({x:679.5,y:347.3},0).wait(1).to({x:740.7,y:386.7},0).wait(1).to({x:801.9,y:426.1},0).wait(1).to({x:863.2,y:465.6},0).wait(1).to({x:924.5,y:505.1},0).wait(1).to({x:985.7,y:544.5},0).wait(1).to({x:1047,y:584},0).wait(1));

	// Ebene 19
	this.instance_7 = new lib.gk_sc1_layer4();
	this.instance_7.setTransform(-29.7,193.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).wait(1).to({x:-23.6,y:277.5},0).wait(1).to({x:-17.6,y:361.7},0).wait(1).to({x:-11.6,y:445.8},0).wait(1).to({x:-5.6,y:530},0).wait(1).to({x:0.3,y:614.2},0).wait(1).to({x:6.2,y:698.2},0).wait(1).to({x:12.2,y:782.4},0).wait(1).to({x:18.3,y:866.7},0).wait(1).to({x:24.3,y:950.8},0).wait(1).to({x:30.3,y:1035},0).wait(1).to({x:36.3,y:1119.2},0).wait(1));

	// Großglockner
	this.instance_8 = new lib.grossglockner_layer01_05();
	this.instance_8.setTransform(-968.7,-539.9,1.009,1);

	this.l1 = new lib.gk_sc1_layer1();
	this.l1.setTransform(-35.6,335);

	this.l2 = new lib.gk_sc1_layer2();
	this.l2.setTransform(5.6,78.4,0.932,0.932);

	this.l3 = new lib.gk_sc1_layer3();
	this.l3.setTransform(373.2,150.1,1.039,1.039);

	this.l4 = new lib.gk_sc1_layer4();
	this.l4.setTransform(-29.7,193.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{scaleX:1.009,x:-968.7}}]}).to({state:[{t:this.instance_8,p:{scaleX:1,x:-959.9}},{t:this.l4},{t:this.l3},{t:this.l2},{t:this.l1}]},12).to({state:[{t:this.instance_8,p:{scaleX:1,x:-959.9}}]},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1522.9,-539.9,3491.3,2176.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;