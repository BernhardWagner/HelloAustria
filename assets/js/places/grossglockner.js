(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.grossglockner = function() {
	this.initialize();

	// Ebene 1
	this.sc1 = new lib.gk_sc1();
	this.sc1.setTransform(959.7,539.8);

	this.addChild(this.sc1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-615,-0.1,3636.6,2263);


// symbols:
(lib.grossglockner_layer01_01 = function() {
	this.initialize(img.grossglockner_layer01_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,539);


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


(lib.gk_sc1_layer1 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.grossglockner_layer01_01();
	this.instance.setTransform(-1043.9,-293,1.087,1.087);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1043.9,-293,2087.9,586.2);


(lib.gk_sc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,action:12,out:13});

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
	this.instance.setTransform(10.3,871.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:822.3},0).wait(1).to({y:773.6},0).wait(1).to({y:724.9},0).wait(1).to({y:676.1},0).wait(1).to({y:627.4},0).wait(1).to({y:578.7},0).wait(1).to({y:529.9},0).wait(1).to({y:481.2},0).wait(1).to({y:432.4},0).wait(1).to({y:383.7},0).wait(1).to({y:335},0).to({_off:true},1).wait(13));

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
	this.instance_4.setTransform(10.3,335);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).wait(1).to({x:10.5,y:393.8},0).wait(1).to({x:10.7,y:452.7},0).wait(1).to({x:10.8,y:511.5},0).wait(1).to({x:11,y:570.5},0).wait(1).to({x:11.2,y:629.3},0).wait(1).to({x:11.4,y:688.2},0).wait(1).to({x:11.5,y:747},0).wait(1).to({x:11.7,y:806},0).wait(1).to({x:11.9,y:864.8},0).wait(1).to({x:12.1,y:923.7},0).wait(1).to({x:12.3,y:982.6},0).wait(1));

	// Ebene 17
	this.instance_5 = new lib.gk_sc1_layer2();
	this.instance_5.setTransform(5.6,78.4,0.932,0.932);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).wait(1).to({x:-22.6,y:145.1},0).wait(1).to({x:-50.9,y:211.8},0).wait(1).to({x:-79.2,y:278.4},0).wait(1).to({x:-107.6,y:345.2},0).wait(1).to({x:-136,y:411.9},0).wait(1).to({x:-164.3,y:478.6},0).wait(1).to({x:-192.7,y:545.3},0).wait(1).to({x:-221.1,y:612},0).wait(1).to({x:-249.4,y:678.7},0).wait(1).to({x:-277.8,y:745.4},0).wait(1).to({x:-306.2,y:812.2},0).wait(1));

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
	this.instance_8.setTransform(-959.9,-539.9);

	this.l1 = new lib.gk_sc1_layer1();
	this.l1.setTransform(10.3,335);

	this.l2 = new lib.gk_sc1_layer2();
	this.l2.setTransform(5.6,78.4,0.932,0.932);

	this.l3 = new lib.gk_sc1_layer3();
	this.l3.setTransform(373.2,150.1,1.039,1.039);

	this.l4 = new lib.gk_sc1_layer4();
	this.l4.setTransform(-29.7,193.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_8},{t:this.l4},{t:this.l3},{t:this.l2},{t:this.l1}]},12).to({state:[{t:this.instance_8}]},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1574.7,-539.9,3636.6,2263);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;