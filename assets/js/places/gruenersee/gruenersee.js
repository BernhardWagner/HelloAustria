(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.gruenersee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2));

	// Ebene_1
	this.sc1 = new lib.gs_sc1();
	this.sc1.setTransform(960,540,1,1,0,0,0,960,540);

	this.sc2 = new lib.gs_sc2();
	this.sc2.setTransform(960,540,1,1,0,0,0,960,540);

	this.sc3 = new lib.gs_sc3();
	this.sc3.setTransform(1008,536,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sc1}]}).to({state:[{t:this.sc2}]},1).to({state:[{t:this.sc3}]},1).wait(1));

	// Hintergrund
	this.instance = new lib.background();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2682.5,-434,6443.1,2025.2);


// symbols:
(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.bild_see = function() {
	this.initialize(img.bild_see);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,800);


(lib.bird01 = function() {
	this.initialize(img.bird01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,124);


(lib.bird02 = function() {
	this.initialize(img.bird02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,82);


(lib.bird03 = function() {
	this.initialize(img.bird03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,99);


(lib.bird04 = function() {
	this.initialize(img.bird04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,89);


(lib.blase01 = function() {
	this.initialize(img.blase01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,31);


(lib.bruecke = function() {
	this.initialize(img.bruecke);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1588,660);


(lib.fisch01 = function() {
	this.initialize(img.fisch01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,76);


(lib.fisch01_1 = function() {
	this.initialize(img.fisch01_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,88);


(lib.fisch02 = function() {
	this.initialize(img.fisch02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,47);


(lib.fisch02_1 = function() {
	this.initialize(img.fisch02_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,35);


(lib.fisch03 = function() {
	this.initialize(img.fisch03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,26);


(lib.fisch03_1 = function() {
	this.initialize(img.fisch03_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,18);


(lib.fisch04 = function() {
	this.initialize(img.fisch04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,47);


(lib.fisch04_1 = function() {
	this.initialize(img.fisch04_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,44);


(lib.fisch05 = function() {
	this.initialize(img.fisch05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,12);


(lib.gruenersee_layer01_01 = function() {
	this.initialize(img.gruenersee_layer01_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gruenersee_layer01_02 = function() {
	this.initialize(img.gruenersee_layer01_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gruenersee_layer01_03 = function() {
	this.initialize(img.gruenersee_layer01_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gruenersee_layer01_04 = function() {
	this.initialize(img.gruenersee_layer01_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gruenersee_layer01_baum01 = function() {
	this.initialize(img.gruenersee_layer01_baum01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,497,905);


(lib.gruenersee_layer01_baum02 = function() {
	this.initialize(img.gruenersee_layer01_baum02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,529,907);


(lib.gruenersee_layer01_blase01 = function() {
	this.initialize(img.gruenersee_layer01_blase01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,40);


(lib.gruenersee_layer01_blase02 = function() {
	this.initialize(img.gruenersee_layer01_blase02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,31);


(lib.gruenersee_layer01_blase03 = function() {
	this.initialize(img.gruenersee_layer01_blase03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,23);


(lib.gruenersee_layer01_blase04 = function() {
	this.initialize(img.gruenersee_layer01_blase04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,49);


(lib.gruenersee_layer01_blase05 = function() {
	this.initialize(img.gruenersee_layer01_blase05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,30);


(lib.gruenersee_layer01_fisch = function() {
	this.initialize(img.gruenersee_layer01_fisch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,81);


(lib.gruenersee_layer01_wasser01 = function() {
	this.initialize(img.gruenersee_layer01_wasser01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,772);


(lib.gruenersee_layer02_01 = function() {
	this.initialize(img.gruenersee_layer02_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,918);


(lib.gruenersee_layer02_02 = function() {
	this.initialize(img.gruenersee_layer02_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,837);


(lib.gruenersee_layer02_03 = function() {
	this.initialize(img.gruenersee_layer02_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gruenersee_layer02_04 = function() {
	this.initialize(img.gruenersee_layer02_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,331);


(lib.gruenersee_layer04_01 = function() {
	this.initialize(img.gruenersee_layer04_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gruenersee_layer04_02 = function() {
	this.initialize(img.gruenersee_layer04_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gruenersee_layer04_03 = function() {
	this.initialize(img.gruenersee_layer04_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gruenersee_layer04_04 = function() {
	this.initialize(img.gruenersee_layer04_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gruenersee_layer04_05 = function() {
	this.initialize(img.gruenersee_layer04_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gruenersee_layer04_bank = function() {
	this.initialize(img.gruenersee_layer04_bank);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,584,327);


(lib.gruenersee_layer04_stein01 = function() {
	this.initialize(img.gruenersee_layer04_stein01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,518,295);


(lib.gruenersee_layer04_stein02 = function() {
	this.initialize(img.gruenersee_layer04_stein02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,231);


(lib.gruenersee_layer05_taucher = function() {
	this.initialize(img.gruenersee_layer05_taucher);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,703,266);


(lib.gruenersee_layer05_taucher02 = function() {
	this.initialize(img.gruenersee_layer05_taucher02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,713,413);


(lib.person01 = function() {
	this.initialize(img.person01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,142);


(lib.person02 = function() {
	this.initialize(img.person02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,104,140);


(lib.person03 = function() {
	this.initialize(img.person03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,146);


(lib.person04 = function() {
	this.initialize(img.person04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,152);


(lib.gs_sc3_photo_closeButton = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2.6,1,1).p("AEeD6IkajoIi9EkAkdjbIEhDtIDXlH");
	this.shape.setTransform(-3.7,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiqGTQiZhhg7i8Qg6i5BHioQBIinCegxQCdgxCZBhQCaBiA6C8QA6C5hHCnQhHCoifAxQg2AQg0AAQhmABhmhCgAjLE4IC/kkIEZDoIkZjoIDWlIIjWFIIkjjuIEjDugAgMAUgAgMAUgAgMAUg");
	this.shape_1.setTransform(-1.9,9.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.9,-37.5,81.9,93.8);


(lib.gs_sc3_layer4_klStein_fisch4 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.fisch04();
	this.instance.setTransform(0,68,1,1,-89.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47,68);


(lib.gs_sc3_layer4_klStein_fisch3 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.fisch03();
	this.instance.setTransform(0,9.9,1,1,-14.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43.5,35);


(lib.gs_sc3_layer4_klStein_fisch2 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.fisch02();
	this.instance.setTransform(0,39.6,1,1,-44.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.9,72.9);


(lib.gs_sc3_layer4_klStein_fisch1 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.fisch01();
	this.instance.setTransform(0,76.4,1,1,-44.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,130.1,130.1);


(lib.gs_sc3_layer3 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer04_03();
	this.instance.setTransform(0,0,1.052,1.052);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2020,1136.3);


(lib.gs_sc3_layer2_trigger = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AF8EEIr3AAIAAoHIL3AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Al6EEIAAoHIL1AAIAAIHg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.9,-25.9,76,52);


(lib.gs_sc3_layer2_grStein_taucher2 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer05_taucher02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,713,413);


(lib.gs_sc3_layer2_grStein_taucher1 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer05_taucher();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,703,266);


(lib.gs_sc3_layer2_grStein_blase1 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.blase01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,31);


(lib.gs_sc3_layer2_animation1_bank = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer04_bank();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,584,327);


(lib.gs_sc3_layer1 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer04_01();
	this.instance.setTransform(0,0,1.104,1.104);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2120.1,1192.6);


(lib.gs_sc3_hg = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer04_05();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gs_sc2_layer4 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.gruenersee_layer02_04();
	this.instance.setTransform(-1057.9,-182.3,1.102,1.102);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1057.9,-182.3,2115.9,364.8);


(lib.gs_sc2_layer3_person = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.person01();
	this.instance.setTransform(-58.9,-70.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.9,-70.9,118,142);


(lib.gs_sc2_layer2_blase5 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_blase05();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29,30);


(lib.gs_sc2_layer2_blase4 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_blase04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,49);


(lib.gs_sc2_layer2_blase3 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_blase03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,23);


(lib.gs_sc2_layer2_blase2 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_blase02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24,31);


(lib.gs_sc2_layer2_blase1 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_blase01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,40);


(lib.gs_sc2_layer1 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.gruenersee_layer02_01();
	this.instance.setTransform(-1036,-495.3,1.079,1.079);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1036,-495.3,2072.3,990.8);


(lib.gs_sc1_layer3 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_03();
	this.instance.setTransform(0,0,1.063,1.063);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2040,1147.5);


(lib.gs_sc1_layer2_fisch = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_fisch();
	this.instance.setTransform(0,92.7,1,1,-53.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,133.4,140.7);


(lib.gs_sc1_layer2_blase5 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_blase05();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29,30);


(lib.gs_sc1_layer2_blase4 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_blase04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,49);


(lib.gs_sc1_layer2_blase3 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_blase03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,23);


(lib.gs_sc1_layer2_blase2 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_blase02();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24,31);


(lib.gs_sc1_layer2_blase1 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_blase01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,40);


(lib.gs_sc1_layer1_baum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,hover:1,action:17});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("gs_sc1_baum_hover");
	}
	this.frame_16 = function() {
		this.gotoAndStop(0);
	}
	this.frame_17 = function() {
		playSound("gs_sc1_vogel");
	}
	this.frame_63 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16).wait(1).call(this.frame_17).wait(46).call(this.frame_63));

	// Baum01
	this.instance = new lib.gruenersee_layer01_baum01();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[]},4).to({state:[{t:this.instance}]},4).to({state:[]},4).to({state:[{t:this.instance}]},4).wait(47));

	// Baum02
	this.instance_1 = new lib.gruenersee_layer01_baum02();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},5).to({state:[]},4).to({state:[{t:this.instance_1}]},4).to({state:[]},4).wait(47));

	// Vogel
	this.instance_2 = new lib.bird01();
	this.instance_2.setTransform(188,540.3);

	this.instance_3 = new lib.bird02();
	this.instance_3.setTransform(208.5,561.4);

	this.instance_4 = new lib.bird03();
	this.instance_4.setTransform(225.8,543.5);

	this.instance_5 = new lib.bird04();
	this.instance_5.setTransform(252.8,537.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{x:188,y:540.3}}]},17).to({state:[{t:this.instance_3,p:{x:208.5,y:561.4}}]},1).to({state:[{t:this.instance_4,p:{x:225.8,y:543.5}}]},1).to({state:[{t:this.instance_5,p:{x:252.8,y:537.9}}]},1).to({state:[{t:this.instance_2,p:{x:250,y:496.4}}]},1).to({state:[{t:this.instance_3,p:{x:261.5,y:517.4}}]},1).to({state:[{t:this.instance_4,p:{x:285.8,y:504.5}}]},1).to({state:[{t:this.instance_5,p:{x:315.8,y:493.9}}]},1).to({state:[{t:this.instance_2,p:{x:320,y:449.4}}]},1).to({state:[{t:this.instance_3,p:{x:325.5,y:476.4}}]},1).to({state:[{t:this.instance_4,p:{x:364.9,y:467.5}}]},1).to({state:[{t:this.instance_5,p:{x:376.9,y:455.9}}]},1).to({state:[{t:this.instance_2,p:{x:395,y:407}}]},1).to({state:[{t:this.instance_3,p:{x:401,y:433}}]},1).to({state:[{t:this.instance_4,p:{x:429,y:420}}]},1).to({state:[{t:this.instance_5,p:{x:442,y:406}}]},1).to({state:[{t:this.instance_2,p:{x:478,y:361}}]},1).to({state:[{t:this.instance_3,p:{x:483,y:387}}]},1).to({state:[{t:this.instance_4,p:{x:509,y:376}}]},1).to({state:[{t:this.instance_5,p:{x:529,y:363}}]},1).to({state:[{t:this.instance_2,p:{x:560,y:308}}]},1).to({state:[{t:this.instance_3,p:{x:560,y:333}}]},1).to({state:[{t:this.instance_4,p:{x:589,y:325}}]},1).to({state:[{t:this.instance_5,p:{x:614,y:302}}]},1).to({state:[{t:this.instance_2,p:{x:649,y:241}}]},1).to({state:[{t:this.instance_3,p:{x:651,y:270}}]},1).to({state:[{t:this.instance_4,p:{x:681,y:264}}]},1).to({state:[{t:this.instance_5,p:{x:712,y:233}}]},1).to({state:[{t:this.instance_2,p:{x:738,y:173}}]},1).to({state:[{t:this.instance_3,p:{x:740,y:199}}]},1).to({state:[{t:this.instance_4,p:{x:774,y:190}}]},1).to({state:[{t:this.instance_5,p:{x:797,y:162}}]},1).to({state:[{t:this.instance_2,p:{x:820,y:94}}]},1).to({state:[{t:this.instance_3,p:{x:827,y:119}}]},1).to({state:[{t:this.instance_4,p:{x:861,y:105}}]},1).to({state:[{t:this.instance_5,p:{x:883,y:78}}]},1).to({state:[{t:this.instance_2,p:{x:903,y:12}}]},1).to({state:[{t:this.instance_3,p:{x:909,y:39}}]},1).to({state:[{t:this.instance_4,p:{x:943,y:26}}]},1).to({state:[{t:this.instance_5,p:{x:967,y:4}}]},1).to({state:[{t:this.instance_2,p:{x:987,y:-60.9}}]},1).to({state:[{t:this.instance_3,p:{x:995,y:-34.9}}]},1).to({state:[{t:this.instance_4,p:{x:1032,y:-49.9}}]},1).to({state:[{t:this.instance_5,p:{x:1043,y:-70.9}}]},1).to({state:[{t:this.instance_2,p:{x:1067,y:-134.9}}]},1).to({state:[{t:this.instance_3,p:{x:1072,y:-106.9}}]},1).to({state:[{t:this.instance_4,p:{x:1103,y:-123.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,497,905);


(lib.gs_sc1_hg = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gk_sc2_layer2_fisch5 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.fisch05();
	this.instance.setTransform(-7.3,-6.3,1.071,1.071,0,0.6,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-6.3,15.2,12.9);


(lib.gk_sc2_layer2_fisch4 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.fisch03_1();
	this.instance.setTransform(-16.1,-13.9,1.551,1.551,0,0.6,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.4,-13.9,32.9,27.9);


(lib.gk_sc2_layer2_fisch3 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.fisch02_1();
	this.instance.setTransform(-24.9,-18.7,1.071,1.071,0,0.6,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.3,-18.7,50.8,37.5);


(lib.gk_sc2_layer2_fisch2 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.fisch04_1();
	this.instance.setTransform(-37.7,-23.5,1.071,1.071,0,0.6,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.2,-23.5,76.6,47.2);


(lib.gk_sc2_layer2_fisch1 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.fisch01_1();
	this.instance.setTransform(-80.9,-47.1,1.071,1.071,0,0.6,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.8,-47.1,163.8,94.3);


(lib.gs_sc3_photoX = function() {
	this.initialize();

	// Ebene 1
	this.close = new lib.gs_sc3_photo_closeButton();
	this.close.setTransform(116.8,-216.5,0.796,0.796,7.5);

	this.instance = new lib.bild_see();
	this.instance.setTransform(-440.9,-257.8);

	this.addChild(this.instance,this.close);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-440.9,-257.8,600,800);


(lib.gs_sc3_photo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:0,"in":1,"action":20,out:21});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(19).call(this.frame_39));

	// Blitz
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(214,214,214,0.6)").s().p("Ei2JhH9MFJ6g4kMAiZDIfMlJ6A4kg");
	this.shape.setTransform(104.2,141.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(192,192,192,0.8)").s().p("Ei2JhH9MFJ6g4kMAiZDIfMlJ6A4kg");
	this.shape_1.setTransform(104.2,141.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.949)").s().p("Ei2JhH9MFJ6g4kMAiZDIfMlJ6A4kg");
	this.shape_2.setTransform(104.2,141.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(214,214,214,0.8)").s().p("Ei2JhH9MFJ6g4kMAiZDIfMlJ6A4kg");
	this.shape_3.setTransform(104.2,141.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(34));

	// Main
	this.pic = new lib.gs_sc3_photoX();
	this.pic.setTransform(-1112.4,386.8);

	this.timeline.addTween(cjs.Tween.get(this.pic).to({_off:true},1).wait(5).to({scaleX:1.3,scaleY:1.3,x:323.1,y:-786.6,_off:false},0).wait(1).to({regX:-140.7,regY:142.1,scaleX:1.28,scaleY:1.28,x:136,y:-540.9},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:132.2,y:-480.2},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:128.5,y:-419.6},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:124.8,y:-358.9},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:121,y:-298.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:117.3,y:-237.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:113.6,y:-177},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:109.8,y:-116.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:106.1,y:-55.8},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:102.4,y:4.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:98.6,y:65.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:94.9,y:125.9},0).wait(1).to({scaleX:1,scaleY:1,x:91.2,y:186.5},0).wait(1).to({regX:0,regY:0,x:232,y:44.5},0).wait(1).wait(1).to({regX:-140.7,regY:142.1,rotation:-1.9,x:103.1,y:248.1},0).wait(1).to({rotation:-4,x:115.3,y:309.5},0).wait(1).to({rotation:-6.2,x:127.6,y:370.6},0).wait(1).to({rotation:-8.3,x:140.1,y:431.7},0).wait(1).to({rotation:-10.4,x:152.8,y:492.4},0).wait(1).to({rotation:-12.5,x:165.6,y:552.9},0).wait(1).to({rotation:-14.7,x:178.5,y:613.2},0).wait(1).to({rotation:-16.8,x:191.6,y:673.3},0).wait(1).to({rotation:-18.9,x:204.8,y:733.1},0).wait(1).to({rotation:-21,x:218.2,y:792.7},0).wait(1).to({x:224.8,y:849.1},0).wait(1).to({x:231.4,y:905.5},0).wait(1).to({x:238,y:962},0).wait(1).to({x:244.6,y:1018.6},0).wait(1).to({x:251.2,y:1075},0).wait(1).to({x:257.8,y:1131.5},0).wait(1).to({x:264.4,y:1188},0).wait(1).to({x:271,y:1244.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1553.3,128.9,600,800);


(lib.gs_sc3_layer4_klStein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":16});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.gotoAndStop(0);
	}
	this.frame_50 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(35).call(this.frame_50));

	// Stein
	this.instance = new lib.gruenersee_layer04_stein02();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(51));

	// Fisch01
	this.instance_1 = new lib.gs_sc3_layer4_klStein_fisch1();
	this.instance_1.setTransform(171,106.9,1,1,0,0,0,65,65);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:65.1,x:173.2,y:100.9},0).wait(1).to({x:175.2,y:94.8},0).wait(1).to({x:177.3,y:88.8},0).wait(1).to({x:179.4,y:82.8},0).wait(1).to({x:181.4,y:76.8},0).wait(1).to({x:183.5,y:70.7},0).wait(1).to({x:185.6,y:64.8},0).wait(1).to({x:186.4},0).wait(1).to({x:187.3,y:64.9},0).wait(1).to({x:188.2,y:65},0).wait(1).to({x:189.1},0).wait(1).to({x:184.3,y:71.4},0).wait(1).to({x:179.5,y:77.8},0).wait(1).to({x:174.7,y:84.2},0).wait(1).to({x:169.9,y:90.6},0).wait(1).to({x:165.1,y:97},0).wait(1).wait(1).to({rotation:2.2,x:179.5,y:83.1},0).wait(1).to({rotation:-9.1,x:194.6,y:70},0).wait(1).to({rotation:-1.5,x:210.5,y:57.8},0).wait(1).to({rotation:7.9,x:227,y:46.4},0).wait(1).to({rotation:-8.8,x:244.1,y:36.1},0).wait(1).to({rotation:0,x:262.1,y:27},0).wait(1).to({rotation:-7.3,x:279.2,y:19.9},0).wait(1).to({rotation:-14.8,x:296.7,y:13.8},0).wait(1).to({rotation:-1,x:314.5,y:8.4},0).wait(1).to({rotation:12.6,x:332.3,y:3.4},0).wait(1).to({rotation:3,x:350.3,y:-1.2},0).wait(1).to({rotation:-6.5,x:368.2,y:-5.9},0).wait(1).to({rotation:6.4,x:386.1,y:-10.9},0).wait(1).to({rotation:19.5,x:403.9,y:-16.3},0).wait(1).to({rotation:9.7,x:421.3,y:-22.5},0).wait(1).to({rotation:0,x:438.4,y:-29.8},0).wait(1).to({rotation:-7.3,x:450.6,y:-36.5},0).wait(1).to({rotation:-14.8,x:462.1,y:-44.3},0).wait(1).to({rotation:-5.6,x:473.1,y:-52.9},0).wait(1).to({rotation:3.5,x:483.7,y:-61.9},0).wait(1).to({rotation:-4.4,x:493.8,y:-71.4},0).wait(1).to({rotation:-12.5,x:503.7,y:-81.3},0).wait(1).to({rotation:-5.9,x:513.4,y:-91.3},0).wait(1).to({rotation:0.5,x:522.7,y:-101.6},0).wait(1).to({rotation:-7.1,x:531.8,y:-112.1},0).wait(1).to({rotation:-14.8,x:540.7,y:-122.8},0).wait(1).to({rotation:0,x:549.4,y:-133.8},0).wait(1).to({rotation:6.7,x:559.4,y:-145.4},0).wait(1).to({rotation:-5,x:569.4,y:-157.1},0).wait(1).to({rotation:-17,x:579.4,y:-168.8},0).wait(1).to({rotation:-7.8,x:589.4,y:-180.4},0).wait(1).to({rotation:1.1,x:599.4,y:-192.1},0).wait(1).to({rotation:0,x:609.4,y:-203.8},0).wait(1));

	// Fisch02
	this.instance_2 = new lib.gs_sc3_layer4_klStein_fisch2();
	this.instance_2.setTransform(173.7,73.5,1,1,0,0,0,36.4,36.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(1).to({x:181.1,y:65.6},0).wait(1).to({x:188.5,y:57.8},0).wait(1).to({x:195.9,y:50},0).wait(1).to({rotation:-14.8,x:206.8,y:40},0).wait(1).to({rotation:-20.3,x:218.3,y:29.3},0).wait(1).to({rotation:-25.9,x:229.5,y:18.7},0).wait(1).to({rotation:-14,x:240.6,y:8},0).wait(1).to({rotation:-2.1,x:251.4,y:-2.7},0).wait(1).to({rotation:-9,x:262.2,y:-13.7},0).wait(1).to({rotation:-15.8,x:272.7,y:-25},0).wait(1).to({rotation:-7.8,x:282.9,y:-36.6},0).wait(1).to({rotation:0,x:292.6,y:-48.8},0).wait(1).to({rotation:-29.8,x:300.5,y:-60.8},0).wait(1).to({rotation:-14.7,x:308.6,y:-74.2},0).wait(1).to({rotation:-46.3,x:316.2,y:-87.6},0).wait(1).to({rotation:-29.2,x:323.7,y:-101.1},0).wait(1).to({rotation:-12.2,x:331.1,y:-114.6},0).wait(1).to({rotation:-30,x:338.3,y:-128.2},0).wait(1).to({rotation:-47.9,x:345.5,y:-141.8},0).wait(1).to({rotation:-28.4,x:352.6,y:-155.4},0).wait(1).to({rotation:-8.9,x:359.8,y:-169.1},0).wait(1).to({rotation:-19.3,x:367,y:-183.2},0).wait(1).to({rotation:-29.8,x:373.6,y:-196.3},0).to({_off:true},1).wait(10));

	// Fisch03
	this.instance_3 = new lib.gs_sc3_layer4_klStein_fisch3();
	this.instance_3.setTransform(157,49.9,1,1,0,0,0,21.7,17.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).wait(1).to({regY:17.5,rotation:-18.1,x:174.3,y:44.1},0).wait(1).to({rotation:-36.3,x:191.4,y:37.9},0).wait(1).to({rotation:-27.9,x:208.4,y:31.3},0).wait(1).to({rotation:-19.4,x:225.2,y:24.3},0).wait(1).to({rotation:-29,x:241.9,y:17},0).wait(1).to({rotation:-38.6,x:258.3,y:9.3},0).wait(1).to({rotation:-28.1,x:274.6,y:1.1},0).wait(1).to({rotation:-17.6,x:290.5,y:-7.6},0).wait(1).to({rotation:-29.8,x:306,y:-17.2},0).wait(1).to({rotation:-25.2,x:321.2,y:-28.1},0).wait(1).to({rotation:-20.7,x:335.9,y:-40},0).wait(1).to({rotation:-33,x:349.9,y:-52.6},0).wait(1).to({rotation:-45.4,x:363.4,y:-65.7},0).wait(1).to({rotation:-32.8,x:376.4,y:-79.2},0).wait(1).to({rotation:-20.2,x:389.1,y:-93.1},0).wait(1).to({rotation:-45,x:401.5,y:-107.4},0).wait(1).to({rotation:-69.9,x:413.5,y:-121.8},0).wait(1).to({rotation:-49.8,x:425.5,y:-136.3},0).wait(1).to({rotation:-29.7,x:437.5,y:-150.8},0).wait(1).to({rotation:-37.2,x:445.8,y:-160.1},0).wait(1).to({rotation:-44.6,x:454.6,y:-169.2},0).wait(1).to({rotation:-29.7,x:464.5,y:-176.8},0).to({_off:true},1).wait(11));

	// Fisch04
	this.instance_4 = new lib.gs_sc3_layer4_klStein_fisch4();
	this.instance_4.setTransform(214.5,118,1,1,0,0,0,23.5,34);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).wait(1).to({rotation:-7.3,x:212.1,y:98.9},0).wait(1).to({rotation:-14.8,x:210,y:79.7},0).wait(1).to({rotation:-19.2,x:208.2,y:60.4},0).wait(1).to({rotation:-23.6,x:207,y:41.1},0).wait(1).to({rotation:-8.1,x:206.3,y:21.9},0).wait(1).to({rotation:7.2,x:206.5,y:2.6},0).wait(1).to({rotation:0,x:208.5,y:-16.4},0).wait(1).to({rotation:7.5,x:212.1,y:-30.5},0).wait(1).to({rotation:15,x:217.5,y:-44},0).wait(1).to({rotation:19.9,x:224.2,y:-56.9},0).wait(1).to({rotation:24.8,x:232,y:-69.3},0).wait(1).to({rotation:11.1,x:240.6,y:-81},0).wait(1).to({rotation:-2.5,x:249.7,y:-92.3},0).wait(1).to({rotation:21.1,x:259.5,y:-103.1},0).wait(1).to({rotation:45,x:269.5,y:-113.7},0).wait(1).to({rotation:48.4,x:279.4,y:-122.7},0).wait(1).to({rotation:51.8,x:289.7,y:-131.1},0).wait(1).to({rotation:31.1,x:300.3,y:-139.4},0).wait(1).to({rotation:10.3,x:310.9,y:-147.5},0).wait(1).to({rotation:23.8,x:321.6,y:-155.5},0).wait(1).to({rotation:37.3,x:332.3,y:-163.5},0).wait(1).to({x:343.1,y:-171.4},0).wait(1).to({x:353.9,y:-179.3},0).wait(1).to({rotation:39.8,x:364.8,y:-187.1},0).wait(1).to({rotation:42.3,x:375.6,y:-194.9},0).wait(1).to({rotation:30,x:386.5,y:-202.7},0).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-52.7,410,283.8);


(lib.gs_sc3_layer4 = function() {
	this.initialize();

	// Ebene_1
	this.steinKL = new lib.gs_sc3_layer4_klStein();
	this.steinKL.setTransform(238,292.5,1,1,0,0,0,205,115.5);

	this.instance = new lib.gruenersee_layer04_04();
	this.instance.setTransform(0,0,1.033,1.033);

	this.addChild(this.instance,this.steinKL);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1983.9,1116);


(lib.gs_sc3_layer2_grStein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}
	this.frame_20 = function() {
		playSound("gs_sc3_diver");
	}
	this.frame_245 = function() {
		this.gotoAndStop(0);
		this.photoTrigger.dispatchEvent(new Event('click'));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1).call(this.frame_20).wait(225).call(this.frame_245));

	// grStein
	this.instance = new lib.gruenersee_layer04_stein01();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).wait(245));

	// Ebene_10 Kopie 3
	this.instance_1 = new lib.blase01();
	this.instance_1.setTransform(245,62);

	this.instance_2 = new lib.gs_sc3_layer2_grStein_blase1();
	this.instance_2.setTransform(319.3,58,0.483,0.483,0,0,0,14.9,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2,p:{regX:14.9,regY:15.4,scaleX:0.483,scaleY:0.483,x:319.3,y:58,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.391,scaleY:0.391,x:300.7,y:31.7,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.299,scaleY:0.299,x:289.3,y:2.1,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.286,scaleY:0.286,x:298.4,y:-12.1,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.273,scaleY:0.273,x:311.7,y:-23.1,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.261,scaleY:0.261,x:325.7,y:-33.3,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.248,scaleY:0.248,x:339.6,y:-43.7,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.236,scaleY:0.236,x:350.3,y:-56.8,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.225,scaleY:0.225,x:344.1,y:-68.4,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.215,scaleY:0.215,x:334.4,y:-77.6,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.205,scaleY:0.205,x:324.4,y:-86.6,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.195,scaleY:0.195,x:315.3,y:-96.5,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.185,scaleY:0.185,x:310.8,y:-108.9,alpha:1}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.21,scaleY:0.21,x:329.2,y:-135.8,alpha:0.5}}]},1).to({state:[{t:this.instance_2,p:{regX:15,regY:15.5,scaleX:0.368,scaleY:0.368,x:354.8,y:-156.8,alpha:0}}]},1).to({state:[]},1).wait(230));

	// Ebene_10 Kopie
	this.instance_3 = new lib.blase01();
	this.instance_3.setTransform(245,62);

	this.instance_4 = new lib.gs_sc3_layer2_grStein_blase1();
	this.instance_4.setTransform(223.3,78.3,0.483,0.483,0,0,0,15,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4,p:{regY:15.4,scaleX:0.483,scaleY:0.483,x:223.3,y:78.3,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.391,scaleY:0.391,x:255.9,y:46.3,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.299,scaleY:0.299,x:281.5,y:9.1,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.286,scaleY:0.286,x:278.8,y:-1.2,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.273,scaleY:0.273,x:272.5,y:-10.2,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.261,scaleY:0.261,x:265.1,y:-18.2,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.248,scaleY:0.248,x:258,y:-26.5,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.236,scaleY:0.236,x:254.3,y:-36.6,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.225,scaleY:0.225,x:258.4,y:-48.7,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.215,scaleY:0.215,x:264.6,y:-60,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.205,scaleY:0.205,x:270.9,y:-71.3,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.195,scaleY:0.195,x:276.6,y:-82.9,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.185,scaleY:0.185,x:280,y:-95.3,alpha:1}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.21,scaleY:0.21,x:273.1,y:-117.7,alpha:0.5}}]},1).to({state:[{t:this.instance_4,p:{regY:15.5,scaleX:0.368,scaleY:0.368,x:258.7,y:-136.6,alpha:0}}]},1).to({state:[]},1).wait(230));

	// Ebene_10 Kopie 2
	this.instance_5 = new lib.blase01();
	this.instance_5.setTransform(295,42);

	this.instance_6 = new lib.gs_sc3_layer2_grStein_blase1();
	this.instance_6.setTransform(313,73.5,1,1,0,0,0,15,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6,p:{scaleX:1,scaleY:1,x:313,y:73.5,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.956,scaleY:0.956,x:342.9,y:58.5,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.911,scaleY:0.911,x:371.3,y:40.8,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.867,scaleY:0.867,x:392.9,y:16.1,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.814,scaleY:0.814,x:389.6,y:-3.2,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.76,scaleY:0.76,x:381.1,y:-21.3,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.707,scaleY:0.707,x:371.7,y:-38.9,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.654,scaleY:0.654,x:363.5,y:-57.1,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.601,scaleY:0.601,x:360.6,y:-76.7,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.554,scaleY:0.554,x:369.1,y:-88.8,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.508,scaleY:0.508,x:381.2,y:-97.9,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.461,scaleY:0.461,x:393.6,y:-106.5,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.415,scaleY:0.415,x:404.9,y:-116.6,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.368,scaleY:0.368,x:411.9,y:-129.8,alpha:1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.368,scaleY:0.368,x:407.6,y:-157.1,alpha:0.667}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.368,scaleY:0.368,x:396.5,y:-182.8,alpha:0.333}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.368,scaleY:0.368,x:383,y:-207.4,alpha:0}}]},1).to({state:[]},1).wait(228));

	// Ebene_10
	this.instance_7 = new lib.blase01();
	this.instance_7.setTransform(295,42);

	this.instance_8 = new lib.gs_sc3_layer2_grStein_blase1();
	this.instance_8.setTransform(270,57.5,1,1,0,0,0,15,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8,p:{scaleX:1,scaleY:1,x:270,y:57.5,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.956,scaleY:0.956,x:257.1,y:37.2,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.911,scaleY:0.911,x:246,y:15.8,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.867,scaleY:0.867,x:240,y:-7.1,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.822,scaleY:0.822,x:246.7,y:-20.9,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.778,scaleY:0.778,x:257.5,y:-32.1,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.734,scaleY:0.734,x:269.3,y:-42.3,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.689,scaleY:0.689,x:281.2,y:-52.2,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.645,scaleY:0.645,x:292.8,y:-62.7,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.601,scaleY:0.601,x:301,y:-75.6,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.554,scaleY:0.554,x:295,y:-88.7,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.508,scaleY:0.508,x:285,y:-99.6,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.461,scaleY:0.461,x:274.8,y:-110.3,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.415,scaleY:0.415,x:265.8,y:-121.9,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.368,scaleY:0.368,x:261.5,y:-135.8,alpha:1}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.368,scaleY:0.368,x:271.8,y:-157.2,alpha:0.667}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.368,scaleY:0.368,x:287.7,y:-175.2,alpha:0.333}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.368,scaleY:0.368,x:305.5,y:-191.4,alpha:0}}]},1).to({state:[]},1).wait(227));

	// Ebene_12
	this.instance_9 = new lib.gs_sc3_layer2_grStein_taucher2();
	this.instance_9.setTransform(-218.4,47.8,1,1,0,0,0,356.5,206.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120).to({_off:false},0).wait(1).to({x:-226.9,y:41.7},0).wait(1).to({x:-235.4,y:35.6},0).wait(1).to({x:-244,y:29.5},0).wait(1).to({x:-252.6,y:23.4},0).wait(1).to({x:-261.1,y:17.3},0).wait(1).to({x:-269.7,y:11.2},0).wait(1).to({x:-278.3,y:5.1},0).wait(1).to({x:-286.8,y:-0.8},0).wait(1).to({x:-295.4,y:-6.9},0).wait(1).to({x:-304,y:-13},0).wait(1).to({x:-312.5,y:-19.1},0).wait(1).to({x:-321.1,y:-25.2},0).wait(1).to({x:-329.7,y:-31.4},0).wait(1).to({x:-338.2,y:-37.4},0).wait(1).to({x:-346.8,y:-43.6},0).wait(1).to({x:-355.4,y:-49.7},0).wait(1).to({x:-363.9,y:-55.8},0).wait(1).to({x:-372.5,y:-61.9},0).wait(1).to({x:-381.1,y:-68},0).wait(1).to({x:-390.6,y:-72.3},0).wait(1).to({x:-400.2,y:-76.6},0).wait(1).to({x:-409.8,y:-80.9},0).wait(1).to({x:-419.4,y:-85.2},0).wait(1).to({x:-428.9,y:-89.5},0).wait(1).to({x:-438.5,y:-93.8},0).wait(1).to({x:-448.1,y:-98.1},0).wait(1).to({x:-457.7,y:-102.4},0).wait(1).to({x:-467.2,y:-106.7},0).wait(1).to({x:-476.8,y:-111},0).wait(1).to({x:-486.4,y:-115.3},0).wait(1).to({x:-496,y:-119.6},0).wait(1).to({x:-505.5,y:-123.9},0).wait(1).to({x:-515.1,y:-128.2},0).wait(1).to({x:-524.7,y:-132.5},0).wait(1).to({x:-534.3,y:-136.8},0).wait(1).to({x:-543.8,y:-141.1},0).wait(1).to({x:-552.4,y:-147.2},0).wait(1).to({x:-561,y:-153.3},0).wait(1).to({x:-569.5,y:-159.4},0).wait(1).to({x:-578.1,y:-165.6},0).wait(1).to({x:-586.7,y:-171.7},0).wait(1).to({x:-595.2,y:-177.8},0).wait(1).to({x:-603.8,y:-184},0).wait(1).to({x:-612.4,y:-190.1},0).wait(1).to({x:-620.9,y:-196.2},0).wait(1).to({x:-629.5,y:-202.4},0).wait(1).to({x:-638.1,y:-208.5},0).wait(1).to({x:-646.6,y:-214.6},0).wait(1).to({x:-655.2,y:-220.7},0).wait(1).to({x:-663.7,y:-226.9},0).wait(1).to({x:-672.3,y:-233},0).wait(1).to({x:-680.9,y:-239.1},0).wait(1).to({x:-689.5,y:-245.3},0).wait(1).to({x:-698,y:-251.4},0).wait(1).to({x:-706.6,y:-257.5},0).wait(1).to({x:-715.6,y:-261.5},0).wait(1).to({x:-724.7,y:-265.6},0).wait(1).to({x:-733.7,y:-269.6},0).wait(1).to({x:-742.8,y:-273.6},0).wait(1).to({x:-751.8,y:-277.6},0).wait(1).to({x:-760.8,y:-281.7},0).wait(1).to({x:-769.9,y:-285.7},0).wait(1).to({x:-778.9,y:-289.7},0).wait(1).to({x:-788,y:-293.7},0).wait(1).to({x:-797,y:-297.8},0).wait(1).to({x:-806.1,y:-301.8},0).wait(1).to({x:-815.1,y:-305.8},0).wait(1).to({x:-824.1,y:-309.8},0).wait(1).to({x:-833.2,y:-313.8},0).wait(1).to({x:-842.2,y:-317.9},0).wait(1).to({x:-851.3,y:-321.9},0).wait(1).to({x:-860.3,y:-325.9},0).wait(1).to({x:-869.4,y:-329.9},0).wait(1).to({x:-878.4,y:-336.5},0).wait(1).to({x:-887.4,y:-343},0).wait(1).to({x:-896.5,y:-349.5},0).wait(1).to({x:-905.5,y:-356},0).wait(1).to({x:-914.6,y:-362.6},0).wait(1).to({x:-923.6,y:-369.1},0).wait(1).to({x:-932.6,y:-375.6},0).wait(1).to({x:-941.7,y:-382.2},0).wait(1).to({x:-950.7,y:-388.7},0).wait(1).to({x:-959.8,y:-395.2},0).wait(1).to({x:-968.8,y:-401.7},0).wait(1).to({x:-977.8,y:-408.3},0).wait(1).to({x:-986.9,y:-414.8},0).wait(1).to({x:-995.9,y:-421.3},0).wait(1).to({x:-1005,y:-427.8},0).wait(1).to({x:-1014,y:-434.4},0).wait(1).to({x:-1023.1,y:-440.9},0).wait(1).to({x:-1032.1,y:-447.4},0).wait(1).to({x:-1039.5,y:-450.6},0).wait(1).to({x:-1046.9,y:-453.8},0).wait(1).to({x:-1054.3,y:-457.1},0).wait(1).to({x:-1061.7,y:-460.3},0).wait(1).to({x:-1069.1,y:-463.5},0).wait(1).to({x:-1076.5,y:-466.7},0).wait(1).to({x:-1083.9,y:-469.9},0).wait(1).to({x:-1091.3,y:-473.1},0).wait(1).to({x:-1098.7,y:-476.3},0).wait(1).to({x:-1106.1,y:-479.5},0).wait(1).to({x:-1113.5,y:-482.8},0).wait(1).to({x:-1120.9,y:-486},0).wait(1).to({x:-1128.3,y:-489.2},0).wait(1).to({x:-1135.7,y:-492.4},0).wait(1).to({x:-1143.1,y:-495.6},0).wait(1).to({x:-1150.5,y:-498.8},0).wait(1).to({x:-1157.9,y:-502},0).wait(1).to({x:-1165.3,y:-505.2},0).wait(1).to({x:-1172.7,y:-508.5},0).wait(1).to({x:-1180.1,y:-511.7},0).wait(1).to({x:-1187.5,y:-514.9},0).wait(1).to({x:-1194.9,y:-518.1},0).wait(1).to({x:-1218.1,y:-535.4},0).wait(1).to({x:-1241.4,y:-552.7},0).wait(1).to({x:-1264.6,y:-569.9},0).wait(1).to({x:-1287.9,y:-587.3},0).wait(1).to({x:-1311.1,y:-604.5},0).wait(1).to({x:-1334.4,y:-621.8},0).wait(1).to({x:-1357.6,y:-639.1},0).wait(1).to({x:-1388,y:-654},0).wait(1).to({x:-1418.4,y:-668.8},0).wait(1).to({x:-1448.8,y:-683.7},0).wait(1).to({x:-1479.2,y:-698.5},0).wait(1).to({x:-1509.6,y:-713.4},0).wait(1));

	// Ebene 3
	this.photoTrigger = new lib.gs_sc3_layer2_trigger();
	this.photoTrigger.setTransform(1890.6,-511.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.photoTrigger}]}).wait(246));

	// Ebene_11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EA1iBZMIAAAAIAAAAIAAAAgEgzXBYiUho9gAoAABgABUAABgAEAD5ivuUAAAAADCZ0gAsUCZ2gAsAACAADUAACAAHAA/BJWQmcCmm5C7QtzF1iHB6InMg6QnNg5ABAEQABAEutIHQuuIIABAEQABADn2K+Qn2K+ABADQABAEnFbgInEbcUgABgACho4gAog");
	var mask_graphics_119 = new cjs.Graphics().p("EA1iBZMIAAAAIAAAAIAAAAgEgzXBYiUho9gAoAABgABUAABgAEAD5ivuUAAAAADCZ0gAsUCZ2gAsAACAADUAACAAHAA/BJWQmcCmm5C7QtzF1iHB6InMg6QnNg5ABAEQABAEutIHQuuIIABAEQABADn2K+Qn2K+ABADQABAEnFbgInEbcUgABgACho4gAog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-413.4,y:51.6}).wait(119).to({graphics:mask_graphics_119,x:-417.4,y:47.6}).wait(127));

	// Taucher1
	this.instance_10 = new lib.gruenersee_layer05_taucher();
	this.instance_10.setTransform(190,26);

	this.instance_11 = new lib.gs_sc3_layer2_grStein_taucher1();
	this.instance_11.setTransform(558.5,152,1,1,0,0,0,351.5,133);

	this.instance_10.mask = this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[]},1).to({state:[{t:this.instance_11,p:{x:558.5,y:152}}]},18).to({state:[{t:this.instance_11,p:{x:550.7,y:149.8}}]},1).to({state:[{t:this.instance_11,p:{x:542.9,y:147.7}}]},1).to({state:[{t:this.instance_11,p:{x:535,y:145.5}}]},1).to({state:[{t:this.instance_11,p:{x:527.2,y:143.4}}]},1).to({state:[{t:this.instance_11,p:{x:519.4,y:141.2}}]},1).to({state:[{t:this.instance_11,p:{x:511.6,y:139.1}}]},1).to({state:[{t:this.instance_11,p:{x:503.8,y:136.9}}]},1).to({state:[{t:this.instance_11,p:{x:495.9,y:134.8}}]},1).to({state:[{t:this.instance_11,p:{x:488.1,y:132.7}}]},1).to({state:[{t:this.instance_11,p:{x:480.3,y:130.5}}]},1).to({state:[{t:this.instance_11,p:{x:472.5,y:128.4}}]},1).to({state:[{t:this.instance_11,p:{x:464.7,y:126.2}}]},1).to({state:[{t:this.instance_11,p:{x:456.8,y:124.1}}]},1).to({state:[{t:this.instance_11,p:{x:449,y:121.9}}]},1).to({state:[{t:this.instance_11,p:{x:441.2,y:119.8}}]},1).to({state:[{t:this.instance_11,p:{x:433.4,y:117.6}}]},1).to({state:[{t:this.instance_11,p:{x:425.6,y:115.5}}]},1).to({state:[{t:this.instance_11,p:{x:417.7,y:113.3}}]},1).to({state:[{t:this.instance_11,p:{x:409.9,y:111.2}}]},1).to({state:[{t:this.instance_11,p:{x:402.1,y:109}}]},1).to({state:[{t:this.instance_11,p:{x:394.3,y:106.9}}]},1).to({state:[{t:this.instance_11,p:{x:386.4,y:104.7}}]},1).to({state:[{t:this.instance_11,p:{x:378.6,y:104.5}}]},1).to({state:[{t:this.instance_11,p:{x:370.8,y:104.3}}]},1).to({state:[{t:this.instance_11,p:{x:363,y:104.1}}]},1).to({state:[{t:this.instance_11,p:{x:355.2,y:103.9}}]},1).to({state:[{t:this.instance_11,p:{x:347.4,y:103.7}}]},1).to({state:[{t:this.instance_11,p:{x:339.6,y:103.4}}]},1).to({state:[{t:this.instance_11,p:{x:331.7,y:103.2}}]},1).to({state:[{t:this.instance_11,p:{x:323.9,y:103}}]},1).to({state:[{t:this.instance_11,p:{x:316.1,y:102.7}}]},1).to({state:[{t:this.instance_11,p:{x:308.2,y:102.5}}]},1).to({state:[{t:this.instance_11,p:{x:300.4,y:102.2}}]},1).to({state:[{t:this.instance_11,p:{x:292.6,y:102}}]},1).to({state:[{t:this.instance_11,p:{x:284.8,y:101.7}}]},1).to({state:[{t:this.instance_11,p:{x:276.9,y:101.4}}]},1).to({state:[{t:this.instance_11,p:{x:269.1,y:101.2}}]},1).to({state:[{t:this.instance_11,p:{x:261.3,y:100.9}}]},1).to({state:[{t:this.instance_11,p:{x:253.5,y:100.6}}]},1).to({state:[{t:this.instance_11,p:{x:245.6,y:100.3}}]},1).to({state:[{t:this.instance_11,p:{x:237.8,y:100}}]},1).to({state:[{t:this.instance_11,p:{x:230,y:99.6}}]},1).to({state:[{t:this.instance_11,p:{x:222.2,y:99.3}}]},1).to({state:[{t:this.instance_11,p:{x:214.4,y:99}}]},1).to({state:[{t:this.instance_11,p:{x:206.5,y:98.6}}]},1).to({state:[{t:this.instance_11,p:{x:198.7,y:98.2}}]},1).to({state:[{t:this.instance_11,p:{x:190.9,y:97.8}}]},1).to({state:[{t:this.instance_11,p:{x:183.1,y:97.4}}]},1).to({state:[{t:this.instance_11,p:{x:175.3,y:96.9}}]},1).to({state:[{t:this.instance_11,p:{x:167.5,y:96.4}}]},1).to({state:[{t:this.instance_11,p:{x:159.6,y:95.8}}]},1).to({state:[{t:this.instance_11,p:{x:151.8,y:95.1}}]},1).to({state:[{t:this.instance_11,p:{x:144,y:94.2}}]},1).to({state:[{t:this.instance_11,p:{x:136.1,y:93.2}}]},1).to({state:[{t:this.instance_11,p:{x:128.2,y:92}}]},1).to({state:[{t:this.instance_11,p:{x:120.4,y:90.7}}]},1).to({state:[{t:this.instance_11,p:{x:112.6,y:89.4}}]},1).to({state:[{t:this.instance_11,p:{x:104.7,y:88}}]},1).to({state:[{t:this.instance_11,p:{x:96.9,y:86.5}}]},1).to({state:[{t:this.instance_11,p:{x:89.1,y:85}}]},1).to({state:[{t:this.instance_11,p:{x:81.3,y:83.5}}]},1).to({state:[{t:this.instance_11,p:{x:73.5,y:81.9}}]},1).to({state:[{t:this.instance_11,p:{x:65.7,y:80.4}}]},1).to({state:[{t:this.instance_11,p:{x:58,y:78.8}}]},1).to({state:[{t:this.instance_11,p:{x:50.2,y:77.2}}]},1).to({state:[{t:this.instance_11,p:{x:42.4,y:75.6}}]},1).to({state:[{t:this.instance_11,p:{x:34.6,y:74}}]},1).to({state:[{t:this.instance_11,p:{x:26.8,y:72.4}}]},1).to({state:[{t:this.instance_11,p:{x:19,y:70.9}}]},1).to({state:[{t:this.instance_11,p:{x:11.2,y:69.3}}]},1).to({state:[{t:this.instance_11,p:{x:3.4,y:67.8}}]},1).to({state:[{t:this.instance_11,p:{x:-4.3,y:66.3}}]},1).to({state:[{t:this.instance_11,p:{x:-12.1,y:64.9}}]},1).to({state:[{t:this.instance_11,p:{x:-19.9,y:63.5}}]},1).to({state:[{t:this.instance_11,p:{x:-27.7,y:62.1}}]},1).to({state:[{t:this.instance_11,p:{x:-35.6,y:60.9}}]},1).to({state:[{t:this.instance_11,p:{x:-43.4,y:59.7}}]},1).to({state:[{t:this.instance_11,p:{x:-51.3,y:58.6}}]},1).to({state:[{t:this.instance_11,p:{x:-59.1,y:57.7}}]},1).to({state:[{t:this.instance_11,p:{x:-66.9,y:56.9}}]},1).to({state:[{t:this.instance_11,p:{x:-74.7,y:56.1}}]},1).to({state:[{t:this.instance_11,p:{x:-82.5,y:55.5}}]},1).to({state:[{t:this.instance_11,p:{x:-90.3,y:54.8}}]},1).to({state:[{t:this.instance_11,p:{x:-98.1,y:54.2}}]},1).to({state:[{t:this.instance_11,p:{x:-105.9,y:53.6}}]},1).to({state:[{t:this.instance_11,p:{x:-113.8,y:53.1}}]},1).to({state:[{t:this.instance_11,p:{x:-121.6,y:52.6}}]},1).to({state:[{t:this.instance_11,p:{x:-129.4,y:52.1}}]},1).to({state:[{t:this.instance_11,p:{x:-137.2,y:51.6}}]},1).to({state:[{t:this.instance_11,p:{x:-145.1,y:51.2}}]},1).to({state:[{t:this.instance_11,p:{x:-152.9,y:50.8}}]},1).to({state:[{t:this.instance_11,p:{x:-160.7,y:50.4}}]},1).to({state:[{t:this.instance_11,p:{x:-168.6,y:50}}]},1).to({state:[{t:this.instance_11,p:{x:-176.4,y:49.6}}]},1).to({state:[{t:this.instance_11,p:{x:-184.2,y:49.3}}]},1).to({state:[{t:this.instance_11,p:{x:-192.1,y:49}}]},1).to({state:[{t:this.instance_11,p:{x:-199.9,y:48.6}}]},1).to({state:[{t:this.instance_11,p:{x:-207.7,y:48.3}}]},1).to({state:[{t:this.instance_11,p:{x:-215.6,y:48.1}}]},1).to({state:[{t:this.instance_11,p:{x:-223.4,y:47.8}}]},1).to({state:[]},1).wait(126));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-537.9,1928.6,833);


(lib.gs_sc3_layer2_animation1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(63));

	// Ebene_1
	this.instance = new lib.gs_sc3_layer2_animation1_bank();
	this.instance.setTransform(292,163.5,1,1,0,0,0,292,163.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({rotation:1.3,y:163.6},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:4,y:163.5},0).wait(1).to({rotation:2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.1},0).wait(1).to({rotation:-2.5,x:292.1},0).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-1.8,x:292},0).wait(1).to({rotation:0},0).wait(1).wait(1).to({rotation:-1,y:156.1},0).wait(1).to({rotation:-2.2,x:292.1,y:148.5},0).wait(1).to({rotation:-3.3,x:292,y:141.1},0).wait(1).to({rotation:-4.5,x:292.1,y:133.6},0).wait(1).to({rotation:-5.7,y:126.1},0).wait(1).to({rotation:-6.9,x:292,y:118.6},0).wait(1).to({rotation:-8.1,x:292.1,y:111.1},0).wait(1).to({rotation:-9.3,y:103.6},0).wait(1).to({rotation:-7.1,y:95},0).wait(1).to({rotation:-4.9,y:86.4},0).wait(1).to({rotation:-2.8,x:292,y:77.9},0).wait(1).to({rotation:-0.6,y:69.3},0).wait(1).to({rotation:1.4,y:60.7},0).wait(1).to({rotation:3.5,y:52.1},0).wait(1).to({rotation:5.7,y:43.5},0).wait(1).wait(1).to({rotation:5,y:47.3},0).wait(1).to({rotation:4.4,y:51.1},0).wait(1).to({rotation:3.7,y:54.8},0).wait(1).to({rotation:3,y:58.5},0).wait(1).to({rotation:2.4,y:62.3},0).wait(1).to({rotation:1.7,y:66.1},0).wait(1).to({rotation:1,y:69.8},0).wait(1).to({rotation:0.4,y:73.5},0).wait(1).to({rotation:-0.1,x:292.1,y:77.3},0).wait(1).to({rotation:-0.8,x:292,y:81.1},0).wait(1).to({rotation:-1.4,y:84.8},0).wait(1).to({rotation:-2.1,y:88.5},0).wait(1).to({rotation:-2.7,y:92.3},0).wait(1).to({rotation:-3.4,y:96},0).wait(1).to({rotation:-4.1,x:292.1,y:99.8},0).wait(1).to({rotation:-4.7,x:292,y:103.6},0).wait(1).to({rotation:-4.1,y:106.2},0).wait(1).to({rotation:-3.4,y:108.9},0).wait(1).to({rotation:-2.8,x:292.1,y:111.6},0).wait(1).to({rotation:-2.1,x:292,y:114.2},0).wait(1).to({rotation:-1.5,x:292.1,y:116.9},0).wait(1).to({rotation:-0.8,y:119.5},0).wait(1).to({rotation:-0.2,y:122.2},0).wait(1).to({rotation:0.3,x:292,y:124.9},0).wait(1).to({rotation:1,y:127.6},0).wait(1).to({rotation:1.6,y:130.2},0).wait(1).to({rotation:2.3,y:132.8},0).wait(1).to({rotation:2.9,y:135.6},0).wait(1).to({rotation:3.6,y:138.2},0).wait(1).to({rotation:4.2,y:140.9},0).wait(1).to({rotation:4.9,y:143.5},0).wait(1).to({rotation:4.6,y:144.9},0).wait(1).to({rotation:4.2,y:146.2},0).wait(1).to({rotation:3.9,y:147.5},0).wait(1).to({rotation:3.6,y:148.9},0).wait(1).to({rotation:3.3,y:150.2},0).wait(1).to({rotation:2.9,y:151.6},0).wait(1).to({rotation:2.6,y:152.9},0).wait(1).to({rotation:2.3,y:154.2},0).wait(1).to({rotation:2,y:155.6},0).wait(1).to({rotation:1.6,y:156.9},0).wait(1).to({rotation:1.3,y:158.2},0).wait(1).to({rotation:1,y:159.6},0).wait(1).to({rotation:0.7,y:160.9},0).wait(1).to({rotation:0.3,y:162.2},0).wait(1).to({rotation:0,y:163.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,584,327);


(lib.gs_sc3_layer2 = function() {
	this.initialize();

	// Ebene_1
	this.steinGR = new lib.gs_sc3_layer2_grStein();
	this.steinGR.setTransform(1695,677.5,1,1,0,0,0,259,147.5);

	this.bank = new lib.gs_sc3_layer2_animation1();
	this.bank.setTransform(640,806.5,1,1,0,0,0,292,163.5);

	this.instance = new lib.gruenersee_layer04_02();
	this.instance.setTransform(0,0,1.071,1.071);

	this.addChild(this.instance,this.bank,this.steinGR);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7.9,3364.6,1164.5);


(lib.gs_sc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,"action":11,"out":12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		$(document).trigger("nextScene");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13).call(this.frame_24));

	// Layer1_In
	this.instance = new lib.gs_sc3_layer1();
	this.instance.setTransform(-742.2,1879.5,1,1,0,0,0,1060.1,596.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1060,x:-576.5,y:1744.1},0).wait(1).to({x:-410.9,y:1608.8},0).wait(1).to({x:-245.4,y:1473.6},0).wait(1).to({x:-79.6,y:1338.2},0).wait(1).to({x:85.8,y:1202.9},0).wait(1).to({x:251.3,y:1067.7},0).wait(1).to({x:417,y:932.4},0).wait(1).to({x:582.8,y:796.9},0).wait(1).to({x:748.4,y:661.6},0).wait(1).to({x:914,y:526.3},0).to({_off:true},1).wait(14));

	// Layer2_In
	this.instance_1 = new lib.gs_sc3_layer2();
	this.instance_1.setTransform(2084.4,1099.5,1,1,0,0,0,1028.1,578.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:1467.4,regY:383.2,x:2406.4,y:848.7},0).wait(1).to({x:2289.2,y:793.1},0).wait(1).to({x:2172.1,y:737.6},0).wait(1).to({x:2054.8,y:681.9},0).wait(1).to({x:1937.5,y:626.3},0).wait(1).to({x:1820.4,y:570.7},0).wait(1).to({x:1703.2,y:515.1},0).wait(1).to({x:1585.9,y:459.4},0).wait(1).to({x:1468.6,y:403.8},0).wait(1).to({x:1351.4,y:348.2},0).to({_off:true},1).wait(14));

	// Layer3_In
	this.instance_2 = new lib.gs_sc3_layer3();
	this.instance_2.setTransform(-849.2,244.3,1,1,0,0,0,1010,568.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-673.9,y:274.1},0).wait(1).to({x:-498.8,y:303.9},0).wait(1).to({x:-323.8,y:333.6},0).wait(1).to({x:-148.5,y:363.4},0).wait(1).to({x:26.4,y:393.2},0).wait(1).to({x:201.4,y:423},0).wait(1).to({x:376.5,y:452.8},0).wait(1).to({x:551.8,y:482.6},0).wait(1).to({x:726.9,y:512.4},0).wait(1).to({x:902,y:542.1},0).to({_off:true},1).wait(14));

	// Layer4_In
	this.instance_3 = new lib.gs_sc3_layer4();
	this.instance_3.setTransform(3033.1,409.1,1,1,0,0,0,991.9,558);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:512,x:2821,y:377.5},0).wait(1).to({x:2608.9,y:391.9},0).wait(1).to({x:2397,y:406.3},0).wait(1).to({x:2184.6,y:420.7},0).wait(1).to({x:1972.5,y:435.1},0).wait(1).to({x:1760.6,y:449.5},0).wait(1).to({x:1548.5,y:463.9},0).wait(1).to({x:1336.1,y:478.3},0).wait(1).to({x:1124,y:492.7},0).wait(1).to({x:911.9,y:507},0).to({_off:true},1).wait(14));

	// Layer1_Out
	this.instance_4 = new lib.gs_sc3_layer1();
	this.instance_4.setTransform(914.1,526.3,1,1,0,0,0,1060.1,596.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(1).to({regX:1060,x:785.7,y:640},0).wait(1).to({x:657.3,y:753.7},0).wait(1).to({x:528.9,y:867.4},0).wait(1).to({x:400.6,y:981.1},0).wait(1).to({x:272.2,y:1094.8},0).wait(1).to({x:143.8,y:1208.5},0).wait(1).to({x:15.5,y:1322.2},0).wait(1).to({x:-112.7,y:1435.9},0).wait(1).to({x:-241.1,y:1549.6},0).wait(1).to({x:-369.4,y:1663.3},0).wait(1).to({x:-497.8,y:1777},0).wait(1).to({x:-626.2,y:1890.7},0).wait(1));

	// Layer2_Out
	this.instance_5 = new lib.gs_sc3_layer2();
	this.instance_5.setTransform(912.1,543.3,1,1,0,0,0,1028.1,578.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).wait(1).to({regX:1467.4,regY:383.2,x:1456.5,y:397.2},0).wait(1).to({x:1561.5,y:446.2},0).wait(1).to({x:1666.5,y:495.2},0).wait(1).to({x:1771.5,y:544.3},0).wait(1).to({x:1876.5,y:593.3},0).wait(1).to({x:1981.6,y:642.3},0).wait(1).to({x:2086.6,y:691.3},0).wait(1).to({x:2191.6,y:740.3},0).wait(1).to({x:2296.6,y:789.3},0).wait(1).to({x:2401.7,y:838.3},0).wait(1).to({x:2506.7,y:887.3},0).wait(1).to({x:2611.7,y:936.4},0).wait(1));

	// Layer3_Out
	this.instance_6 = new lib.gs_sc3_layer3();
	this.instance_6.setTransform(902,542.1,1,1,0,0,0,1010,568.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).wait(1).to({x:754.8,y:519.8},0).wait(1).to({x:607.6,y:497.4},0).wait(1).to({x:460.4,y:475.1},0).wait(1).to({x:313.2,y:452.7},0).wait(1).to({x:166,y:430.4},0).wait(1).to({x:18.8,y:408},0).wait(1).to({x:-128.2,y:385.7},0).wait(1).to({x:-275.4,y:363.4},0).wait(1).to({x:-422.6,y:341},0).wait(1).to({x:-569.8,y:318.7},0).wait(1).to({x:-717,y:296.3},0).wait(1).to({x:-864.2,y:274},0).wait(1));

	// Layer4_Out
	this.instance_7 = new lib.gs_sc3_layer4();
	this.instance_7.setTransform(911.9,553,1,1,0,0,0,991.9,558);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).wait(1).to({regY:512,x:1115.6,y:456},0).wait(1).to({x:1319.3,y:405},0).wait(1).to({x:1523.1,y:354},0).wait(1).to({x:1726.8,y:303},0).wait(1).to({x:1930.5,y:252},0).wait(1).to({x:2134.2,y:201},0).wait(1).to({x:2337.9,y:150},0).wait(1).to({x:2541.6,y:98.9},0).wait(1).to({x:2745.4,y:47.9},0).wait(1).to({x:2949.1,y:-2.9},0).wait(1).to({x:3152.8,y:-53.9},0).wait(1).to({x:3356.5,y:-104.9},0).wait(1));

	// photo
	this.photo = new lib.gs_sc3_photo();
	this.photo.setTransform(824.7,378.9,0.999,0.999,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.photo}]}).wait(25));

	// Ebene_1
	this.instance_8 = new lib.gs_sc3_hg();
	this.instance_8.setTransform(912,541.9,1,1,0,0,0,960,540);

	this.l1 = new lib.gs_sc3_layer1();
	this.l1.setTransform(914.1,526.3,1,1,0,0,0,1060.1,596.3);

	this.l2 = new lib.gs_sc3_layer2();
	this.l2.setTransform(912.1,543.3,1,1,0,0,0,1028.1,578.3);

	this.l3 = new lib.gs_sc3_layer3();
	this.l3.setTransform(902,542.1,1,1,0,0,0,1010,568.1);

	this.l4 = new lib.gs_sc3_layer4();
	this.l4.setTransform(911.9,553,1,1,0,0,0,991.9,558);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{y:541.9}}]}).to({state:[{t:this.instance_8,p:{y:542}},{t:this.l4},{t:this.l3},{t:this.l2},{t:this.l1}]},11).to({state:[{t:this.instance_8,p:{y:541.9}}]},1).wait(13));

	// Ebene_1 Kopie
	this.instance_9 = new lib.gs_sc3_hg();
	this.instance_9.setTransform(912,551.3,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1859.2,-323.8,6280.2,2799.5);


(lib.gs_sc2_layer3_personAction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.gotoAndStop(0);
	}
	this.frame_10 = function() {
		playSound("gs_sc2_person_step1");
		playSound("gs_sc2_person_whistle");
	}
	this.frame_19 = function() {
		playSound("gs_sc2_person_step5");
	}
	this.frame_30 = function() {
		playSound("gs_sc2_person_step4");
	}
	this.frame_43 = function() {
		playSound("gs_sc2_person_step5");
	}
	this.frame_56 = function() {
		playSound("gs_sc2_person_step2");
	}
	this.frame_68 = function() {
		playSound("gs_sc2_person_step6");
	}
	this.frame_80 = function() {
		playSound("gs_sc2_person_step5");
	}
	this.frame_92 = function() {
		playSound("gs_sc2_person_step4");
	}
	this.frame_103 = function() {
		playSound("gs_sc2_person_step3");
	}
	this.frame_115 = function() {
		playSound("gs_sc2_person_step6");
	}
	this.frame_127 = function() {
		playSound("gs_sc2_person_step1");
	}
	this.frame_139 = function() {
		playSound("gs_sc2_person_step6");
	}
	this.frame_150 = function() {
		playSound("gs_sc2_person_step5");
	}
	this.frame_161 = function() {
		playSound("gs_sc2_person_step6");
	}
	this.frame_171 = function() {
		playSound("gs_sc2_person_step4");
	}
	this.frame_183 = function() {
		playSound("gs_sc2_person_step1");
	}
	this.frame_196 = function() {
		playSound("gs_sc2_person_step2");
	}
	this.frame_208 = function() {
		playSound("gs_sc2_person_step6");
	}
	this.frame_220 = function() {
		playSound("gs_sc2_person_step4");
	}
	this.frame_229 = function() {
		this.gotoAndStop(0);
	}
	this.frame_232 = function() {
		playSound("gs_sc2_person_step5");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(9).call(this.frame_19).wait(11).call(this.frame_30).wait(13).call(this.frame_43).wait(13).call(this.frame_56).wait(12).call(this.frame_68).wait(12).call(this.frame_80).wait(12).call(this.frame_92).wait(11).call(this.frame_103).wait(12).call(this.frame_115).wait(12).call(this.frame_127).wait(12).call(this.frame_139).wait(11).call(this.frame_150).wait(11).call(this.frame_161).wait(10).call(this.frame_171).wait(12).call(this.frame_183).wait(13).call(this.frame_196).wait(12).call(this.frame_208).wait(12).call(this.frame_220).wait(9).call(this.frame_229).wait(3).call(this.frame_232).wait(1));

	// Ebene 4
	this.instance = new lib.gs_sc2_layer3_person();
	this.instance.setTransform(-699.8,-197.6,1,1,0,0,0,-700.6,-199.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:0,regY:0,x:0.7,y:-9.2},0).wait(1).to({y:-20.2},0).wait(1).to({y:-31.2},0).wait(1).to({y:-24.6},0).wait(1).to({y:-18},0).wait(1).to({y:-11.4},0).wait(1).to({y:-4.8},0).wait(1).to({y:1.6},0).to({_off:true},1).wait(224));

	// Ebene 5
	this.instance_1 = new lib.person02();
	this.instance_1.setTransform(-24.6,-70.8);

	this.instance_2 = new lib.person03();
	this.instance_2.setTransform(28,-78);

	this.instance_3 = new lib.person04();
	this.instance_3.setTransform(44.7,-84.9);

	this.instance_4 = new lib.person01();
	this.instance_4.setTransform(31.7,-72.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{x:-24.6,y:-70.8}}]},10).to({state:[{t:this.instance_2,p:{x:28,y:-78}}]},3).to({state:[{t:this.instance_3,p:{x:44.7,y:-84.9}}]},3).to({state:[{t:this.instance_4,p:{x:31.7,y:-72.3}}]},3).to({state:[{t:this.instance_1,p:{x:65.9,y:-72.1}}]},3).to({state:[{t:this.instance_2,p:{x:114.7,y:-80.1}}]},3).to({state:[{t:this.instance_3,p:{x:133,y:-87.6}}]},3).to({state:[{t:this.instance_4,p:{x:117.2,y:-80.9}}]},3).to({state:[{t:this.instance_1,p:{x:152,y:-83.5}}]},3).to({state:[{t:this.instance_2,p:{x:202.2,y:-90.4}}]},3).to({state:[{t:this.instance_3,p:{x:220.1,y:-94.1}}]},3).to({state:[{t:this.instance_4,p:{x:204.9,y:-83.8}}]},3).to({state:[{t:this.instance_1,p:{x:240,y:-83.4}}]},3).to({state:[{t:this.instance_2,p:{x:290.2,y:-87.2}}]},3).to({state:[{t:this.instance_3,p:{x:307.6,y:-92.7}}]},3).to({state:[{t:this.instance_4,p:{x:289.4,y:-83.5}}]},3).to({state:[{t:this.instance_1,p:{x:322,y:-80.1}}]},3).to({state:[{t:this.instance_2,p:{x:371.7,y:-86.8}}]},3).to({state:[{t:this.instance_3,p:{x:388.7,y:-92.2}}]},3).to({state:[{t:this.instance_4,p:{x:371.7,y:-82.4}}]},3).to({state:[{t:this.instance_1,p:{x:406,y:-81.8}}]},3).to({state:[{t:this.instance_2,p:{x:456.7,y:-88.5}}]},3).to({state:[{t:this.instance_3,p:{x:474.8,y:-95.1}}]},3).to({state:[{t:this.instance_4,p:{x:456.8,y:-85.1}}]},3).to({state:[{t:this.instance_1,p:{x:489.6,y:-83.9}}]},3).to({state:[{t:this.instance_2,p:{x:539.1,y:-88.7}}]},3).to({state:[{t:this.instance_3,p:{x:557.2,y:-96.2}}]},3).to({state:[{t:this.instance_4,p:{x:542.1,y:-85.1}}]},3).to({state:[{t:this.instance_1,p:{x:577.4,y:-85.3}}]},3).to({state:[{t:this.instance_2,p:{x:629.2,y:-90.6}}]},3).to({state:[{t:this.instance_3,p:{x:644.5,y:-98.3}}]},3).to({state:[{t:this.instance_4,p:{x:629.4,y:-87.8}}]},3).to({state:[{t:this.instance_1,p:{x:665.9,y:-88.4}}]},3).to({state:[{t:this.instance_2,p:{x:718.2,y:-95.7}}]},2).to({state:[{t:this.instance_3,p:{x:736.9,y:-101.4}}]},3).to({state:[{t:this.instance_4,p:{x:717,y:-92.3}}]},3).to({state:[{t:this.instance_1,p:{x:753.2,y:-92.3}}]},3).to({state:[{t:this.instance_2,p:{x:801.7,y:-100}}]},3).to({state:[{t:this.instance_3,p:{x:820,y:-105.5}}]},3).to({state:[{t:this.instance_4,p:{x:802.6,y:-94.2}}]},3).to({state:[{t:this.instance_1,p:{x:837.4,y:-92.8}}]},3).to({state:[{t:this.instance_2,p:{x:888.2,y:-97.8}}]},3).to({state:[{t:this.instance_3,p:{x:905,y:-103.8}}]},3).to({state:[{t:this.instance_4,p:{x:888.1,y:-92.4}}]},3).to({state:[{t:this.instance_1,p:{x:921.2,y:-87.6}}]},3).to({state:[{t:this.instance_2,p:{x:973.3,y:-92.7}}]},3).to({state:[{t:this.instance_3,p:{x:989.7,y:-100.5}}]},3).to({state:[{t:this.instance_4,p:{x:973.2,y:-89}}]},3).to({state:[{t:this.instance_1,p:{x:1008.6,y:-83.1}}]},3).to({state:[{t:this.instance_2,p:{x:1058.5,y:-88.4}}]},3).to({state:[{t:this.instance_4,p:{x:1063.4,y:-82.8}}]},3).to({state:[{t:this.instance_1,p:{x:1098.5,y:-80.8}}]},3).to({state:[{t:this.instance_2,p:{x:1148.1,y:-86.5}}]},3).to({state:[{t:this.instance_3,p:{x:1166.3,y:-92.2}}]},3).to({state:[{t:this.instance_4,p:{x:1149.9,y:-81.7}}]},3).to({state:[{t:this.instance_1,p:{x:1185.3,y:-80.7}}]},3).to({state:[{t:this.instance_2,p:{x:1235.1,y:-86.7}}]},3).to({state:[{t:this.instance_3,p:{x:1256.1,y:-94.2}}]},3).to({state:[{t:this.instance_4,p:{x:1236.2,y:-83.5}}]},3).to({state:[{t:this.instance_1,p:{x:1270.9,y:-84.7}}]},3).to({state:[{t:this.instance_2,p:{x:1320.2,y:-91}}]},3).to({state:[{t:this.instance_3,p:{x:1337.6,y:-96.6}}]},3).to({state:[{t:this.instance_4,p:{x:1320.7,y:-87.3}}]},3).to({state:[{t:this.instance_1,p:{x:1356.8,y:-86.6}}]},3).to({state:[{t:this.instance_2,p:{x:1405.4,y:-91.7}}]},3).to({state:[{t:this.instance_3,p:{x:1430.9,y:-98.8}}]},3).to({state:[{t:this.instance_4,p:{x:1414.7,y:-87.5}}]},3).to({state:[{t:this.instance_1,p:{x:1449.6,y:-90}}]},3).to({state:[{t:this.instance_2,p:{x:1500.7,y:-95.9}}]},3).to({state:[{t:this.instance_3,p:{x:1518.6,y:-101.9}}]},3).to({state:[{t:this.instance_4,p:{x:1502.3,y:-91}}]},3).to({state:[{t:this.instance_1,p:{x:1538.6,y:-91.7}}]},3).to({state:[{t:this.instance_2,p:{x:1588.7,y:-99.2}}]},3).to({state:[{t:this.instance_3,p:{x:1608.7,y:-105}}]},3).to({state:[{t:this.instance_4,p:{x:1591.5,y:-94.2}}]},3).wait(3));

	// Ebene 1
	this.instance_5 = new lib.gs_sc2_layer3_person();
	this.instance_5.setTransform(-699.8,-197.6,1,1,0,0,0,-700.6,-199.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(233));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.3,-69.4,118,142);


(lib.gs_sc2_layer3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// Ebene 1
	this.person = new lib.gs_sc2_layer3_personAction();
	this.person.setTransform(-991.7,-292.3,1,1,0,0,0,-320.8,-64.1);

	this.instance = new lib.gruenersee_layer02_03();
	this.instance.setTransform(-959.9,-539.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.person}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-959.9,-539.9,1920,1080);


(lib.gs_sc2_layer2_bruecke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":60});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.gotoAndStop(0);
	}
	this.frame_60 = function() {
		playSound("gs_sc2_fische");
	}
	this.frame_97 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1).call(this.frame_60).wait(37).call(this.frame_97));

	// Ebene 1
	this.instance = new lib.bruecke();
	this.instance.setTransform(-1029.9,-607.9,1.073,1.126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(98));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgJoA9OQg+gSsCicQtRislFhOQAAgQAMgRQAOgTAZgKQJ5AGDUhxQBJgnAVg1QAJgWAAgxQAAgZhjhQQg7gwiyiCQmTkpiJiMQg2g3iOiFQh4hwg6hAQi2jJgQjDQgGhMASiHQAViYAAg6QABh2gshXQg2hqiAhTQhxhKiahXIj8iOQkjiniziqQncnDjvlqQkonCAOmBQAIjEhXjwQg6ifiLkLQickugthpQg+iUgUh2Qg/hCkbk1QlmmIAAgFQAAghASgHIAhgGIGDAAQA3AgAqAOQBLAZChAAQBsABEAgmQEPgnBvgkIbtAAIAaAKIETAGQEWAJAQAFMAkrAAAIAfgJILGAAQBIAGBLAQICPAdQDfAnHIAWIZJAAQChgSChgiQBdgTC5gpQF0hOIeghIAAgNIN1AAQASANAVALQgHASgEAaQguBQAAAZIAAADIgGAIQgJgBgHAcQgJATgKAXQgUAygCALIAAAGQgGANAAAYIAAADQgEANAAASQAAAeAKAdIgCANQAaA1AnCIQAHAOADAUQAqCVAABGQAAA+gIAQQgDAIg9BWIAAAFQAAAQhOCaIhpDPIgBABQABgBABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAAAFgGAPIgCAQIgFADQgUAyg0ByQhPCvg1BpIAAAAQgBAIg4BsQhCB9gQAlQgwBtgPAbQgqBJg9AxIAAADQAAAIhtCCQhGBSguAwIABAAQAAAfinCyIjRDXIgDgBQiQDUAACdQAAB0CwHuICIF/QBCC6AZBYQAjAcAtBDIBPB6QA2BVAwA+QE7GhH9B+IKqAKQEaBpBIGAQAYCDACC1QABBkgECdQAAAwAJB6QAIBtgCA+QgIDDh5B7QicCfl5BeQmxBtr7Aig");
	mask.setTransform(-347.4,-191.5);

	// blase5
	this.instance_1 = new lib.gs_sc2_layer2_blase5();
	this.instance_1.setTransform(-388.3,-160.5,1,1,0,0,0,14.5,15);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).wait(1).to({x:-379.4,y:-171.7},0).wait(1).to({x:-371.2,y:-183.5},0).wait(1).to({x:-363.6,y:-195.7},0).wait(1).to({x:-356.9,y:-208.4},0).wait(1).to({x:-351.2,y:-221.6},0).wait(1).to({x:-347.3,y:-235.4},0).wait(1).to({x:-346.2,y:-249.7},0).wait(1).to({x:-349.1,y:-262.3},0).wait(1).to({x:-356,y:-273.5},0).wait(1).to({x:-365,y:-282.9},0).wait(1).to({x:-374.9,y:-291.6},0).wait(1).to({x:-384.6,y:-300.4},0).wait(1).to({x:-393.3,y:-310.2},0).wait(1).to({x:-399.8,y:-321.5},0).wait(1).to({x:-403.2,y:-334.2},0).wait(1).to({x:-402.4,y:-347.2},0).wait(1).to({x:-397.5,y:-359.3},0).wait(1).to({x:-390.3,y:-370.3},0).wait(1).to({x:-382.1,y:-380.5},0).wait(1).to({x:-373.7,y:-390.6},0).wait(1).to({x:-365.5,y:-400.9},0).wait(1).to({x:-358.1,y:-411.8},0).wait(1).to({x:-352,y:-423.3},0).wait(1).to({x:-347.5,y:-435.6},0).wait(1).to({x:-345,y:-448.5},0).wait(1).to({x:-344.8,y:-461.7},0).wait(1).to({x:-350.5,y:-479.9},0).wait(1).to({x:-362.3,y:-495.1},0).wait(1).to({x:-376.9,y:-507.7},0).wait(1).to({x:-392.8,y:-518.5},0).wait(1).to({x:-409.6,y:-528},0).wait(1).to({x:-426.9,y:-536.5},0).wait(1).to({x:-444.5,y:-544.3},0).wait(1).to({x:-462.4,y:-551.4},0).wait(1).to({x:-480.6,y:-558,alpha:0.667},0).wait(1).to({x:-498.9,y:-564,alpha:0.333},0).wait(1).to({x:-517.4,y:-569.5,alpha:0},0).wait(1));

	// blase4
	this.instance_2 = new lib.gs_sc2_layer2_blase4();
	this.instance_2.setTransform(-407.8,-174,1,1,0,0,0,23,24.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).wait(1).to({rotation:12.9,x:-418.6,y:-186.6},0).wait(1).to({rotation:25.7,x:-429,y:-199.8},0).wait(1).to({rotation:38.6,x:-438.8,y:-213.4},0).wait(1).to({rotation:51.4,x:-447.8,y:-227.5},0).wait(1).to({rotation:64.3,x:-456,y:-242.2},0).wait(1).to({rotation:77.1,x:-462.9,y:-257.5},0).wait(1).to({rotation:90,x:-467.7,y:-273.6},0).wait(1).to({rotation:77.6,x:-469.6,y:-285},0).wait(1).to({rotation:65.2,x:-470.5,y:-296.5},0).wait(1).to({rotation:52.8,x:-469.9,y:-308.1},0).wait(1).to({rotation:40.4,x:-467.5,y:-319.4},0).wait(1).to({rotation:27.9,x:-463.9,y:-330.3},0).wait(1).to({rotation:15.5,x:-460.1,y:-341.3},0).wait(1).to({rotation:3.1,x:-456.9,y:-352.5},0).wait(1).to({rotation:-9.1,x:-454.4,y:-363.7},0).wait(1).to({rotation:3,x:-454.2,y:-375.3},0).wait(1).to({rotation:15.3,x:-457.8,y:-386.2},0).wait(1).to({rotation:27.5,x:-463.9,y:-396},0).wait(1).to({rotation:39.8,x:-471.1,y:-405},0).wait(1).to({rotation:52.1,x:-478.8,y:-413.6},0).wait(1).to({rotation:64.4,x:-486.6,y:-422.2},0).wait(1).to({rotation:76.6,x:-493.8,y:-431.3},0).wait(1).to({rotation:88.9,x:-499.6,y:-441.2},0).wait(1).to({rotation:101.2,x:-503.1,y:-452.2},0).wait(1).to({rotation:113.5,x:-502.8,y:-463.7},0).wait(1).to({rotation:125.7,x:-499,y:-474.6},0).wait(1).to({rotation:115.8,x:-488.9,y:-488.2},0).wait(1).to({rotation:105.9,x:-476.2,y:-499.4,alpha:0.9},0).wait(1).to({rotation:96,x:-462.3,y:-509.1,alpha:0.8},0).wait(1).to({rotation:86.1,x:-447.7,y:-517.8,alpha:0.7},0).wait(1).to({rotation:76.1,x:-432.8,y:-525.8,alpha:0.6},0).wait(1).to({rotation:66.2,x:-417.4,y:-533.1,alpha:0.5},0).wait(1).to({rotation:56.3,x:-402,y:-540,alpha:0.4},0).wait(1).to({rotation:46.4,x:-386.3,y:-546.5,alpha:0.3},0).wait(1).to({rotation:36.4,x:-370.4,y:-552.7,alpha:0.2},0).wait(1).to({rotation:26.5,x:-354.4,y:-558.5,alpha:0.1},0).wait(1).to({rotation:16.6,x:-338.3,y:-563.9,alpha:0},0).wait(1));

	// blase3
	this.instance_3 = new lib.gs_sc2_layer2_blase3();
	this.instance_3.setTransform(-373.3,-148,1,1,0,0,0,12.5,11.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).wait(1).to({x:-378.4,y:-159.5},0).wait(1).to({x:-383,y:-171.3},0).wait(1).to({x:-387.1,y:-183.4},0).wait(1).to({x:-390.5,y:-195.7},0).wait(1).to({x:-393.2,y:-208.1},0).wait(1).to({x:-395.1,y:-220.7},0).wait(1).to({x:-396.2,y:-233.4},0).wait(1).to({x:-395.6,y:-246.6},0).wait(1).to({x:-392.6,y:-259.5},0).wait(1).to({x:-387.1,y:-271.6},0).wait(1).to({x:-380.1,y:-282.9},0).wait(1).to({x:-372.7,y:-293.9},0).wait(1).to({x:-366,y:-305.4},0).wait(1).to({x:-360.9,y:-317.7},0).wait(1).to({x:-358.2,y:-330.7},0).wait(1).to({x:-358.3,y:-341.8},0).wait(1).to({x:-360.8,y:-352.7},0).wait(1).to({x:-365.1,y:-363},0).wait(1).to({x:-370.4,y:-372.9},0).wait(1).to({x:-376.3,y:-382.4},0).wait(1).to({x:-382.6,y:-391.6},0).wait(1).to({x:-388.9,y:-400.9},0).wait(1).to({x:-394.9,y:-410.3},0).wait(1).to({x:-400.2,y:-420.2},0).wait(1).to({x:-404,y:-430.7},0).wait(1).to({x:-405.2,y:-441.8},0).wait(1).to({x:-401.4,y:-453.3,alpha:0.909},0).wait(1).to({x:-394.7,y:-463.4,alpha:0.818},0).wait(1).to({x:-386.6,y:-472.6,alpha:0.727},0).wait(1).to({x:-377.9,y:-481.2,alpha:0.636},0).wait(1).to({x:-368.8,y:-489.2,alpha:0.545},0).wait(1).to({x:-359.3,y:-497,alpha:0.455},0).wait(1).to({x:-349.6,y:-504.4,alpha:0.364},0).wait(1).to({x:-339.8,y:-511.6,alpha:0.273},0).wait(1).to({x:-329.8,y:-518.6,alpha:0.182},0).wait(1).to({x:-319.6,y:-525.4,alpha:0.091},0).wait(1).to({x:-309.3,y:-531.9,alpha:0},0).wait(1));

	// blase2
	this.instance_4 = new lib.gs_sc2_layer2_blase2();
	this.instance_4.setTransform(-432.8,-154,1,1,0,0,0,12,15.5);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60).to({_off:false},0).wait(1).to({x:-436.7,y:-176.1},0).wait(1).to({x:-440.5,y:-198.4},0).wait(1).to({x:-444,y:-220.8},0).wait(1).to({x:-447.1,y:-243.1},0).wait(1).to({x:-449.7,y:-265.6},0).wait(1).to({x:-451.6,y:-288.1},0).wait(1).to({x:-452.1,y:-310.8},0).wait(1).to({x:-450.8,y:-322.3},0).wait(1).to({x:-447.8,y:-333.4},0).wait(1).to({x:-442.9,y:-343.9},0).wait(1).to({x:-436.4,y:-353.5},0).wait(1).to({x:-429,y:-362.5},0).wait(1).to({x:-421.5,y:-371.3},0).wait(1).to({x:-415.5,y:-381.2},0).wait(1).to({x:-412.8,y:-392.4},0).wait(1).to({x:-412.9,y:-398.6},0).wait(1).to({x:-414,y:-404.7},0).wait(1).to({x:-416.3,y:-410.4},0).wait(1).to({x:-419.7,y:-415.6},0).wait(1).to({x:-423.6,y:-420.3},0).wait(1).to({x:-427.8,y:-424.9},0).wait(1).to({x:-431.8,y:-429.6},0).wait(1).to({x:-435.5,y:-434.6},0).wait(1).to({x:-438.7,y:-439.9},0).wait(1).to({x:-441.4,y:-445.5},0).wait(1).to({x:-443.6,y:-451.3},0).wait(1).to({x:-445.2,y:-458.5},0).wait(1).to({x:-445.6,y:-466},0).wait(1).to({x:-444.9,y:-473.5},0).wait(1).to({x:-443.4,y:-480.9},0).wait(1).to({x:-441.3,y:-488.1},0).wait(1).to({x:-438.8,y:-495.1},0).wait(1).to({x:-435.8,y:-502},0).wait(1).to({x:-432.4,y:-508.7},0).wait(1).to({x:-428.8,y:-515.3,alpha:0.667},0).wait(1).to({x:-424.9,y:-521.7,alpha:0.333},0).wait(1).to({x:-420.8,y:-527.9,alpha:0},0).wait(1));

	// blase1
	this.instance_5 = new lib.gs_sc2_layer2_blase1();
	this.instance_5.setTransform(-400.8,-144.5,1,1,0,0,0,17,20);
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60).to({_off:false},0).wait(1).to({x:-397.8,y:-163.3},0).wait(1).to({x:-394.8,y:-182.3},0).wait(1).to({x:-391.7,y:-201.2},0).wait(1).to({x:-388.5,y:-220.1},0).wait(1).to({x:-385.2,y:-239},0).wait(1).to({x:-381.6,y:-257.8},0).wait(1).to({x:-377.7,y:-276.6},0).wait(1).to({x:-373.2,y:-290.9},0).wait(1).to({x:-366.7,y:-304.5},0).wait(1).to({x:-359,y:-317.5},0).wait(1).to({x:-351.2,y:-330.3},0).wait(1).to({x:-344.2,y:-343.7},0).wait(1).to({x:-339.5,y:-358},0).wait(1).to({x:-338,y:-372.9},0).wait(1).to({x:-339.7,y:-387.9},0).wait(1).to({x:-342.6,y:-398},0).wait(1).to({x:-347.1,y:-407.4},0).wait(1).to({x:-353.1,y:-416},0).wait(1).to({x:-360.2,y:-423.7},0).wait(1).to({x:-368.1,y:-430.7},0).wait(1).to({x:-376.2,y:-437.3},0).wait(1).to({x:-384.2,y:-444.1},0).wait(1).to({x:-391.6,y:-451.6},0).wait(1).to({x:-397.4,y:-460.3},0).wait(1).to({x:-400.8,y:-470.2},0).wait(1).to({x:-401.8,y:-480.7},0).wait(1).to({x:-398.6,y:-493.2},0).wait(1).to({x:-391.4,y:-504.2,alpha:0.9},0).wait(1).to({x:-382.2,y:-513.5,alpha:0.8},0).wait(1).to({x:-372,y:-521.7,alpha:0.7},0).wait(1).to({x:-361.2,y:-529.1,alpha:0.6},0).wait(1).to({x:-349.9,y:-535.8,alpha:0.5},0).wait(1).to({x:-338.4,y:-542,alpha:0.4},0).wait(1).to({x:-326.7,y:-547.8,alpha:0.3},0).wait(1).to({x:-314.7,y:-553.2,alpha:0.2},0).wait(1).to({x:-302.6,y:-558.2,alpha:0.1},0).wait(1).to({x:-290.4,y:-562.9,alpha:0},0).wait(1));

	// Fish5
	this.instance_6 = new lib.gk_sc2_layer2_fisch5();
	this.instance_6.setTransform(-295.6,-108.2);
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(1).to({rotation:2.5,x:-301.4,y:-107.4},0).wait(1).to({rotation:5.1,x:-307.2,y:-106.6},0).wait(1).to({rotation:7.6,x:-313.1,y:-105.9},0).wait(1).to({rotation:10.2,x:-318.9,y:-105.2},0).wait(1).to({rotation:12.7,x:-324.8,y:-104.5},0).wait(1).to({rotation:15.3,x:-330.7,y:-103.7},0).wait(1).to({rotation:17.8,x:-336.5,y:-103},0).wait(1).to({rotation:20.3,x:-342.4,y:-102.3},0).wait(1).to({rotation:22.9,x:-348.3,y:-101.5},0).wait(1).to({rotation:25.4,x:-354.1,y:-100.8},0).wait(1).to({rotation:28,x:-360,y:-100.1},0).wait(1).to({rotation:30.5,x:-365.8,y:-99.4},0).wait(1).to({rotation:33.1,x:-371.7,y:-98.6},0).wait(1).to({rotation:35.6,x:-377.6,y:-97.9},0).wait(1).to({rotation:38.1,x:-383.4,y:-97.2},0).wait(1).to({rotation:40.7,x:-389.3,y:-96.4},0).wait(1).to({rotation:43.2,x:-395.2,y:-95.7},0).wait(1).to({rotation:45.8,x:-401,y:-95},0).wait(1).to({rotation:48.3,x:-406.9,y:-94.3},0).wait(1).to({rotation:50.8,x:-412.7,y:-93.5},0).wait(1).to({rotation:53.4,x:-418.6,y:-92.8},0).wait(1).to({rotation:55.9,x:-424.5,y:-92.1},0).wait(1).to({rotation:58.5,x:-430.3,y:-91.3},0).wait(1).to({rotation:61,x:-436.2,y:-90.6},0).wait(1).to({rotation:63.6,x:-442.1,y:-89.9},0).wait(1).to({rotation:66.1,x:-447.9,y:-89.2},0).wait(1).to({rotation:68.6,x:-453.8,y:-88.4},0).wait(1).to({rotation:71.2,x:-459.6,y:-87.7},0).wait(1).to({rotation:73.7,x:-465.5,y:-87},0).wait(1).to({rotation:76.3,x:-471.4,y:-86.2},0).wait(1).to({rotation:78.8,x:-477.2,y:-85.5},0).wait(1).to({rotation:81.4,x:-483.1,y:-84.8},0).wait(1).to({rotation:83.9,x:-489,y:-84.1},0).wait(1).to({rotation:86.4,x:-489.2,y:-83.8},0).wait(1).to({rotation:89,x:-489.5,y:-83.5},0).wait(1).to({rotation:91.5,x:-489.8,y:-83.2},0).wait(1).to({rotation:94.1,x:-487.9,y:-83.5},0).wait(1).to({rotation:96.6,x:-486,y:-83.8},0).wait(1).to({rotation:99.2,x:-484.2,y:-84.1},0).wait(1).to({rotation:101.7,x:-482.3,y:-84.4},0).wait(1).to({rotation:104.2,x:-480.4,y:-84.7},0).wait(1).to({rotation:106.8,x:-478.5,y:-85},0).wait(1).to({rotation:109.3,x:-476.7,y:-85.3},0).wait(1).to({rotation:111.9,x:-474.8,y:-85.6},0).wait(1).to({rotation:114.4,x:-472.9,y:-85.9},0).wait(1).to({rotation:116.9,x:-471,y:-86.2},0).wait(1).to({rotation:119.5,x:-469.2,y:-86.5},0).wait(1).to({rotation:122,x:-467.3,y:-86.8},0).wait(1).to({rotation:124.6,x:-465.4,y:-87.1},0).wait(1).to({rotation:127.1,x:-463.5,y:-87.4},0).wait(1).to({rotation:129.7,x:-461.6,y:-87.7},0).wait(1).to({rotation:132.2,x:-459.8,y:-88},0).wait(1).to({rotation:134.7,x:-457.9,y:-88.3},0).wait(1).to({rotation:137.3,x:-456,y:-88.6},0).wait(1).to({rotation:139.8,x:-454.1,y:-88.9},0).wait(1).to({rotation:142.4,x:-452.3,y:-89.2},0).wait(1).to({rotation:144.9,x:-450.4,y:-89.5},0).wait(1).to({rotation:147.5,x:-448.5,y:-89.8},0).wait(1).to({rotation:150,x:-440.1},0).wait(1).to({rotation:153.8,x:-420.9,y:-97.9},0).wait(1).to({rotation:157.5,x:-401.6,y:-106},0).wait(1).to({rotation:161.2,x:-382.4,y:-114.2},0).wait(1).to({rotation:165,x:-363.2,y:-122.3},0).wait(1).to({rotation:149.6,x:-344,y:-130.4},0).wait(1).to({rotation:134.2,x:-324.7,y:-138.6},0).wait(1).to({rotation:149.7,x:-305.5,y:-146.7},0).wait(1).to({rotation:165.1,x:-286.3,y:-154.8},0).wait(1).to({rotation:134.7,x:-267.1,y:-163},0).wait(1).to({rotation:150.3,x:-247.8,y:-171.1},0).wait(1).to({rotation:120.2,x:-228.6,y:-179.2},0).wait(1).to({rotation:151.3,x:-209.4,y:-187.4},0).wait(1).to({rotation:136.4,x:-190.2,y:-195.5},0).wait(1).to({rotation:166.9,x:-170.9,y:-203.6},0).wait(1).to({rotation:136.2,x:-151.7,y:-211.8},0).wait(1).to({rotation:166.9,x:-132.5,y:-219.9},0).wait(1).to({rotation:151.2,x:-113.3,y:-228},0).wait(1).to({rotation:156.2,x:-94,y:-236.2},0).wait(1).to({rotation:161.2,x:-74.8,y:-244.3},0).wait(1).to({rotation:166.1,x:-55.6,y:-252.5},0).wait(1).to({rotation:150.2,x:-36.4,y:-260.6},0).wait(1).to({rotation:157.7,x:-17.1,y:-268.7},0).wait(1).to({rotation:165.2,x:1.9,y:-276.9},0).wait(1).to({rotation:134.2,x:21.1,y:-285},0).wait(1).to({rotation:150.4,x:40.3,y:-293.1},0).wait(1).to({rotation:165.4,x:59.6,y:-301.3},0).wait(1).to({rotation:156.6,x:78.8,y:-309.4},0).wait(1).to({rotation:147.7,x:98,y:-317.5},0).wait(1).to({rotation:153.9,x:117.2,y:-325.7},0).wait(1).to({rotation:160.2,x:136.5,y:-333.8},0).wait(1).to({rotation:166.4,x:155.7,y:-341.9},0).wait(1).to({rotation:172.7,x:174.9,y:-350.1},0).wait(1).to({rotation:178.9,x:194.1,y:-358.2},0).wait(1).to({rotation:164.2,x:213.4,y:-366.3},0).wait(1).to({rotation:149.5,x:232.6,y:-374.5},0).wait(1).to({rotation:149.7,x:251.8,y:-382.6},0).wait(1).to({rotation:150,x:271.1,y:-390.8},0).wait(1));

	// Fish4
	this.instance_7 = new lib.gk_sc2_layer2_fisch4();
	this.instance_7.setTransform(-309.7,-40.4);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(1).to({rotation:0.8,x:-314.7,y:-39.1},0).wait(1).to({rotation:1.5,x:-319.7,y:-37.9},0).wait(1).to({rotation:2.3,x:-324.8,y:-36.6},0).wait(1).to({rotation:3.1,x:-329.9,y:-35.4},0).wait(1).to({rotation:3.8,x:-335,y:-34.2},0).wait(1).to({rotation:4.6,x:-340,y:-33},0).wait(1).to({rotation:5.3,x:-345.1,y:-31.8},0).wait(1).to({rotation:6.1,x:-350.2,y:-30.6},0).wait(1).to({rotation:6.9,x:-355.2,y:-29.3},0).wait(1).to({rotation:7.6,x:-360.3,y:-28.1},0).wait(1).to({rotation:8.4,x:-365.4,y:-26.9},0).wait(1).to({rotation:9.2,x:-370.5,y:-25.7},0).wait(1).to({rotation:9.9,x:-375.5,y:-24.5},0).wait(1).to({rotation:10.7,x:-380.6,y:-23.3},0).wait(1).to({rotation:11.4,x:-385.7,y:-22},0).wait(1).to({rotation:12.2,x:-390.7,y:-20.8},0).wait(1).to({rotation:13,x:-395.8,y:-19.6},0).wait(1).to({rotation:13.7,x:-400.9,y:-18.4},0).wait(1).to({rotation:14.5,x:-406,y:-17.2},0).wait(1).to({rotation:15.3,x:-411,y:-16},0).wait(1).to({rotation:16,x:-416.1,y:-14.7},0).wait(1).to({rotation:16.8,x:-421.2,y:-13.5},0).wait(1).to({rotation:17.5,x:-426.2,y:-12.3},0).wait(1).to({rotation:18.3,x:-431.3,y:-11.1},0).wait(1).to({rotation:19.1,x:-436.4,y:-9.9},0).wait(1).to({rotation:19.8,x:-441.5,y:-8.6},0).wait(1).to({rotation:20.6,x:-446.5,y:-7.4},0).wait(1).to({rotation:21.4,x:-451.6,y:-6.2},0).wait(1).to({rotation:22.1,x:-456.7,y:-5},0).wait(1).to({rotation:22.9,x:-461.7,y:-3.8},0).wait(1).to({rotation:23.6,x:-466.8,y:-2.6},0).wait(1).to({rotation:24.4,x:-471.9,y:-1.3},0).wait(1).to({rotation:25.2,x:-477,y:-0.1},0).wait(1).to({rotation:25.9},0).wait(1).to({rotation:26.7},0).wait(1).to({rotation:27.5},0).wait(1).to({rotation:28.2,x:-473.7,y:-1},0).wait(1).to({rotation:29,x:-470.5,y:-1.9},0).wait(1).to({rotation:29.7,x:-467.2,y:-2.8},0).wait(1).to({rotation:30.5,x:-464,y:-3.8},0).wait(1).to({rotation:31.3,x:-460.8,y:-4.7},0).wait(1).to({rotation:32,x:-457.5,y:-5.6},0).wait(1).to({rotation:32.8,x:-454.3,y:-6.5},0).wait(1).to({rotation:33.6,x:-451,y:-7.4},0).wait(1).to({rotation:34.3,x:-447.8,y:-8.3},0).wait(1).to({rotation:35.1,x:-444.5,y:-9.2},0).wait(1).to({rotation:35.8,x:-441.3,y:-10.1},0).wait(1).to({rotation:36.6,x:-438.1,y:-11},0).wait(1).to({rotation:37.4,x:-434.8,y:-11.9},0).wait(1).to({rotation:38.1,x:-431.6,y:-12.8},0).wait(1).to({rotation:38.9,x:-428.4,y:-13.7},0).wait(1).to({rotation:39.7,x:-425.1,y:-14.6},0).wait(1).to({rotation:40.4,x:-421.9,y:-15.5},0).wait(1).to({rotation:41.2,x:-418.6,y:-16.4},0).wait(1).to({rotation:41.9,x:-415.4,y:-17.3},0).wait(1).to({rotation:42.7,x:-412.1,y:-18.3},0).wait(1).to({rotation:43.5,x:-408.9,y:-19.2},0).wait(1).to({rotation:44.2,x:-405.7,y:-20.1},0).wait(1).to({rotation:45,x:-397.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:85.7,x:-403.1,y:-39.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:68.8,x:-409,y:-59.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:52,x:-414.8,y:-79.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:76.5,x:-420.7,y:-98.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:101,x:-426.5,y:-118.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:80.3,x:-432.3,y:-138.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:119.9,x:-438.2,y:-158.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:134.9,x:-432.1,y:-168.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:149.8,x:-426,y:-178.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:133,x:-419.9,y:-188.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:116.2,x:-413.8,y:-198.2},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:123.9,x:-407.7,y:-208.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:131.6,x:-401.5,y:-218.2},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:120.6,x:-395.4,y:-228.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:109.6,x:-389.3,y:-238.2},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:98.6,x:-383.2,y:-248.2},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:108.5,x:-377.1,y:-258.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:118.3,x:-375.9,y:-269.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:96,x:-374.7,y:-281.3},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:73.8,x:-373.6,y:-292.8},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:83,x:-372.4,y:-304.3},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:92.3,x:-371.3,y:-315.8},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:101.5,x:-370.1,y:-327.3},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:110.7,x:-368.9,y:-338.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:120,x:-368,y:-342.3},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:-367.1,y:-345.7},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:-366.2,y:-349.1},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:-365.3,y:-352.5},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:-364.4,y:-356},0).wait(1).to({x:-350.3},0).wait(1).to({x:-336.1},0).wait(1).to({x:-321.9},0).wait(1).to({x:-307.7},0).wait(1).to({x:-293.6},0).wait(1).to({x:-279.4},0).wait(1).to({x:-265.2},0).wait(1).to({x:-251},0).wait(1));

	// Fish3
	this.instance_8 = new lib.gk_sc2_layer2_fisch3();
	this.instance_8.setTransform(-241.9,-50.2);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).wait(1).to({x:-247.9,y:-49.3},0).wait(1).to({x:-254,y:-48.4},0).wait(1).to({x:-260,y:-47.6},0).wait(1).to({x:-266.1,y:-46.8},0).wait(1).to({x:-272.2,y:-46},0).wait(1).to({x:-278.3,y:-45.1},0).wait(1).to({x:-284.3,y:-44.3},0).wait(1).to({x:-290.4,y:-43.5},0).wait(1).to({x:-296.5,y:-42.6},0).wait(1).to({x:-302.6,y:-41.8},0).wait(1).to({x:-308.6,y:-41},0).wait(1).to({x:-314.7,y:-40.2},0).wait(1).to({x:-320.8,y:-39.3},0).wait(1).to({x:-326.9,y:-38.5},0).wait(1).to({x:-332.9,y:-37.7},0).wait(1).to({x:-339,y:-36.8},0).wait(1).to({x:-345.1,y:-36},0).wait(1).to({x:-351.2,y:-35.2},0).wait(1).to({x:-357.2,y:-34.4},0).wait(1).to({x:-363.3,y:-33.5},0).wait(1).to({x:-369.4,y:-32.7},0).wait(1).to({x:-375.5,y:-31.9},0).wait(1).to({x:-381.5,y:-31},0).wait(1).to({x:-387.6,y:-30.2},0).wait(1).to({x:-393.7,y:-29.4},0).wait(1).to({x:-399.8,y:-28.6},0).wait(1).to({x:-405.8,y:-27.7},0).wait(1).to({x:-411.9,y:-26.9},0).wait(1).to({x:-418,y:-26.1},0).wait(1).to({x:-424.1,y:-25.2},0).wait(1).to({x:-430.1,y:-24.4},0).wait(1).to({x:-436.2,y:-23.6},0).wait(1).to({x:-442.3,y:-22.8},0).wait(1).to({y:-21.9},0).wait(1).to({x:-442.2,y:-21.1},0).wait(1).to({y:-20.3},0).wait(1).to({x:-439.6,y:-21.3},0).wait(1).to({x:-437,y:-22.3},0).wait(1).to({x:-434.4,y:-23.2},0).wait(1).to({x:-431.9,y:-24.2},0).wait(1).to({x:-429.3,y:-25.2},0).wait(1).to({x:-426.7,y:-26.1},0).wait(1).to({x:-424.2,y:-27.1},0).wait(1).to({x:-421.6,y:-28.1},0).wait(1).to({x:-419,y:-29.1},0).wait(1).to({x:-416.5,y:-30.1},0).wait(1).to({x:-413.9,y:-31},0).wait(1).to({x:-411.3,y:-32},0).wait(1).to({x:-408.8,y:-33},0).wait(1).to({x:-406.2,y:-33.9},0).wait(1).to({x:-403.6,y:-34.9},0).wait(1).to({x:-401.1,y:-35.9},0).wait(1).to({x:-398.5,y:-36.9},0).wait(1).to({x:-395.9,y:-37.9},0).wait(1).to({x:-393.4,y:-38.8},0).wait(1).to({x:-390.8,y:-39.8},0).wait(1).to({x:-388.2,y:-40.8},0).wait(1).to({x:-385.7,y:-41.8},0).wait(1).to({x:-377.3},0).wait(1).to({rotation:3,x:-388.1,y:-39.1},0).wait(1).to({rotation:6,x:-398.9,y:-36.4},0).wait(1).to({rotation:9,x:-409.6,y:-33.7},0).wait(1).to({rotation:12,x:-420.5,y:-31},0).wait(1).to({rotation:15,x:-431.3,y:-28.3},0).wait(1).to({rotation:9.5,x:-442,y:-25.6},0).wait(1).to({rotation:4,x:-452.8,y:-23},0).wait(1).to({rotation:-1.3,x:-463.7,y:-20.3},0).wait(1).to({rotation:6.1,x:-474.5,y:-17.6},0).wait(1).to({rotation:13.7,x:-485.3,y:-14.9},0).wait(1).to({rotation:-1.7,x:-496.1,y:-12.2},0).wait(1).to({rotation:-17.2,x:-506.9,y:-9.5},0).wait(1).to({rotation:-9,x:-517.7,y:-6.8},0).wait(1).to({rotation:-0.8,x:-528.5,y:-4.2},0).wait(1).to({rotation:6.6,x:-539.3,y:-1.5},0).wait(1).to({rotation:14.2,x:-550.1,y:1},0).wait(1).to({rotation:-9,x:-560.9,y:3.7},0).wait(1).to({rotation:27.8,x:-571.7,y:6.4},0).wait(1).to({rotation:11.3,x:-582.5,y:9.1},0).wait(1).to({rotation:-5,x:-587,y:9.3},0).wait(1).to({rotation:10.1,x:-591.5,y:9.5},0).wait(1).to({rotation:25.5,x:-596,y:9.7},0).wait(1).to({rotation:13.8,x:-600.5,y:10},0).wait(1).to({rotation:2,x:-605,y:10.2},0).wait(1).to({rotation:-9.5,x:-609.5,y:10.4},0).wait(1).to({rotation:21,x:-614,y:10.6},0).wait(1).to({rotation:22,x:-618.5,y:10.9},0).wait(1).to({rotation:12.3,x:-623,y:11.1},0).wait(1).to({rotation:2.5,x:-627.5,y:11.3},0).wait(1).to({rotation:7.2,x:-632,y:11.5},0).wait(1).to({rotation:11.9,x:-636.5,y:11.8},0).wait(1).to({rotation:16.5,x:-641,y:12},0).wait(1).to({rotation:5.7,x:-645.5,y:12.2},0).wait(1).to({rotation:-5,x:-650,y:12.4},0).wait(1).to({rotation:-3.3,x:-654.5,y:12.7},0).wait(1).to({rotation:-1.5,x:-659,y:12.9},0).wait(1).to({rotation:0,x:-663.5,y:13.1},0).wait(1));

	// Fish2
	this.instance_9 = new lib.gk_sc2_layer2_fisch2();
	this.instance_9.setTransform(-228,-26.5);
	this.instance_9._off = true;

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).wait(1).to({x:-234.1,y:-25.4},0).wait(1).to({x:-240.3,y:-24.4},0).wait(1).to({x:-246.4,y:-23.4},0).wait(1).to({x:-252.6,y:-22.4},0).wait(1).to({x:-258.8,y:-21.5},0).wait(1).to({x:-265,y:-20.5},0).wait(1).to({x:-271.1,y:-19.5},0).wait(1).to({x:-277.3,y:-18.5},0).wait(1).to({x:-283.5,y:-17.5},0).wait(1).to({x:-289.7,y:-16.5},0).wait(1).to({x:-295.9,y:-15.5},0).wait(1).to({x:-302,y:-14.5},0).wait(1).to({x:-308.2,y:-13.5},0).wait(1).to({x:-314.4,y:-12.5},0).wait(1).to({x:-320.6,y:-11.6},0).wait(1).to({x:-326.7,y:-10.6},0).wait(1).to({x:-332.9,y:-9.6},0).wait(1).to({x:-339.1,y:-8.6},0).wait(1).to({x:-345.3,y:-7.6},0).wait(1).to({x:-351.4,y:-6.6},0).wait(1).to({x:-357.6,y:-5.6},0).wait(1).to({x:-363.8,y:-4.6},0).wait(1).to({x:-370,y:-3.6},0).wait(1).to({x:-376.2,y:-2.7},0).wait(1).to({x:-382.3,y:-1.7},0).wait(1).to({x:-388.5,y:-0.7},0).wait(1).to({x:-394.7,y:0.1},0).wait(1).to({x:-400.9,y:1.1},0).wait(1).to({x:-407,y:2.1},0).wait(1).to({x:-413.2,y:3.1},0).wait(1).to({x:-419.4,y:4.1},0).wait(1).to({x:-425.6,y:5.1},0).wait(1).to({x:-431.8,y:6.1},0).wait(2).wait(1).to({x:-428.9,y:5},0).wait(1).to({x:-426,y:3.9},0).wait(1).to({x:-423.1,y:2.9},0).wait(1).to({x:-420.3,y:1.8},0).wait(1).to({x:-417.4,y:0.8},0).wait(1).to({x:-414.5,y:-0.1},0).wait(1).to({x:-411.6,y:-1.1},0).wait(1).to({x:-408.8,y:-2.2},0).wait(1).to({x:-405.9,y:-3.2},0).wait(1).to({x:-403,y:-4.3},0).wait(1).to({x:-400.1,y:-5.3},0).wait(1).to({x:-397.3,y:-6.4},0).wait(1).to({x:-394.4,y:-7.4},0).wait(1).to({x:-391.5,y:-8.5},0).wait(1).to({x:-388.6,y:-9.5},0).wait(1).to({x:-385.8,y:-10.6},0).wait(1).to({x:-382.9,y:-11.6},0).wait(1).to({x:-380,y:-12.7},0).wait(1).to({x:-377.1,y:-13.7},0).wait(1).to({x:-374.3,y:-14.8},0).wait(1).to({x:-371.4,y:-15.8},0).wait(1).to({x:-368.5,y:-16.9},0).wait(1).to({x:-365.7,y:-18},0).wait(1).to({x:-357.3},0).wait(1).to({rotation:82.5,x:-329.3,y:-51},0).wait(1).to({rotation:165,x:-301.3,y:-84.1},0).wait(1).to({rotation:-6.8,x:-293.3,y:-97.2},0).wait(1).to({rotation:-178.8,x:-285.3,y:-110.2},0).wait(1).to({rotation:-196.9,x:-277.3,y:-123.3},0).wait(1).to({rotation:-211,x:-269.3,y:-136.4},0).wait(1).to({rotation:-201.3,x:-261.4,y:-149.4},0).wait(1).to({rotation:-191.7,x:-253.4,y:-162.5},0).wait(1).to({rotation:-193.7,x:-242,y:-173.4},0).wait(1).to({rotation:-195.8,x:-230.6,y:-184.4},0).wait(1).to({rotation:-197.8,x:-219.2,y:-195.3},0).wait(1).to({rotation:-199.8,x:-207.7,y:-206.3},0).wait(1).to({rotation:-201.9,x:-196.3,y:-217.3},0).wait(1).to({rotation:-203.9,x:-184.9,y:-228.2},0).wait(1).to({rotation:-221,x:-173.5,y:-239.2},0).wait(1).to({rotation:-177.8,x:-162.1,y:-250.1},0).wait(1).to({rotation:-172.3,x:-150.7,y:-261.1},0).wait(1).to({rotation:-157.7,x:-135.6,y:-267.3},0).wait(1).to({rotation:-203.2,x:-120.6,y:-273.5},0).wait(1).to({rotation:-167.6,x:-105.5,y:-279.7},0).wait(1).to({rotation:-213.3,x:-90.5,y:-285.9},0).wait(1).to({rotation:-186.7,x:-75.4,y:-292.1},0).wait(1).to({rotation:-192.2,x:-60.3,y:-298.3},0).wait(1).to({rotation:-197.7,x:-40.6,y:-307.9},0).wait(1).to({rotation:-203.2,x:-20.8,y:-317.5},0).wait(1).to({rotation:-187.5,x:-1,y:-327.1},0).wait(1).to({rotation:-195.6,x:18.6,y:-336.7},0).wait(1).to({rotation:-203.7,x:38.3,y:-346.3},0).wait(1).to({rotation:-197.7,x:58.1,y:-355.9},0).wait(1).to({rotation:-191.7,x:77.9,y:-365.5},0).wait(1).to({rotation:-185.7,x:97.7,y:-375.1},0).wait(1).to({rotation:-194.7,x:117.4,y:-384.7},0).wait(1).to({rotation:-203.7,x:137.2,y:-394.3},0).wait(1).to({rotation:-193.9,x:157,y:-403.9},0).wait(1).to({rotation:-184.2,x:176.7,y:-413.5},0).wait(1).to({rotation:-189.6,x:196.5,y:-423.1},0).wait(1).to({rotation:-194.9,x:216.3,y:-432.8},0).wait(1));

	// Fish1
	this.instance_10 = new lib.gk_sc2_layer2_fisch1();
	this.instance_10.setTransform(-270,-82.8);
	this.instance_10._off = true;

	this.instance_10.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).wait(1).to({rotation:0.5,x:-277.7,y:-81.2},0).wait(1).to({rotation:1,x:-285.6,y:-79.7},0).wait(1).to({rotation:1.6,x:-293.5,y:-78.1},0).wait(1).to({rotation:2.1,x:-301.4,y:-76.6},0).wait(1).to({rotation:2.6,x:-309.3,y:-75.1},0).wait(1).to({rotation:3.1,x:-317.2,y:-73.6},0).wait(1).to({rotation:3.7,x:-325.1,y:-72},0).wait(1).to({rotation:4.2,x:-332.9,y:-70.5},0).wait(1).to({rotation:4.7,x:-340.8,y:-69},0).wait(1).to({rotation:5.2,x:-348.7,y:-67.5},0).wait(1).to({rotation:5.7,x:-356.6,y:-66},0).wait(1).to({rotation:6.3,x:-364.5,y:-64.4},0).wait(1).to({rotation:6.8,x:-372.4,y:-62.9},0).wait(1).to({rotation:7.3,x:-380.3,y:-61.4},0).wait(1).to({rotation:7.8,x:-388.1,y:-59.9},0).wait(1).to({rotation:8.3,x:-396,y:-58.3},0).wait(1).to({rotation:8.9,x:-403.9,y:-56.8},0).wait(1).to({rotation:9.4,x:-411.8,y:-55.3},0).wait(1).to({rotation:9.9,x:-419.7,y:-53.8},0).wait(1).to({rotation:10.4,x:-427.6,y:-52.2},0).wait(1).to({rotation:11,x:-435.5,y:-50.7},0).wait(1).to({rotation:11.5,x:-443.4,y:-49.2},0).wait(1).to({rotation:12,x:-451.2,y:-47.7},0).wait(1).to({rotation:12.5,x:-459.1,y:-46.2},0).wait(1).to({rotation:13,x:-467,y:-44.6},0).wait(1).to({rotation:13.6,x:-474.9,y:-43.1},0).wait(1).to({rotation:14.1,x:-482.8,y:-41.6},0).wait(1).to({rotation:14.6,x:-490.7,y:-40.1},0).wait(1).to({rotation:15.1,x:-498.6,y:-38.5},0).wait(1).to({rotation:15.7,x:-506.4,y:-37},0).wait(1).to({rotation:16.2,x:-514.3,y:-35.5},0).wait(1).to({rotation:16.7,x:-522.2,y:-34},0).wait(1).to({rotation:17.2,x:-530.1,y:-32.5},0).wait(1).to({rotation:17.7},0).wait(1).to({rotation:18.3},0).wait(1).to({rotation:18.8,x:-527.1,y:-33.5},0).wait(1).to({rotation:19.3,x:-524,y:-34.5},0).wait(1).to({rotation:19.8,x:-521,y:-35.5},0).wait(1).to({rotation:20.3,x:-517.9,y:-36.5},0).wait(1).to({rotation:20.9,x:-514.9,y:-37.5},0).wait(1).to({rotation:21.4,x:-511.9,y:-38.5},0).wait(1).to({rotation:21.9,x:-508.8,y:-39.5},0).wait(1).to({rotation:22.4,x:-505.8,y:-40.5},0).wait(1).to({rotation:23,x:-502.7,y:-41.5},0).wait(1).to({rotation:23.5,x:-499.7,y:-42.6},0).wait(1).to({rotation:24,x:-496.6,y:-43.6},0).wait(1).to({rotation:24.5,x:-493.6,y:-44.6},0).wait(1).to({rotation:25,x:-490.6,y:-45.6},0).wait(1).to({rotation:25.6,x:-487.5,y:-46.6},0).wait(1).to({rotation:26.1,x:-484.5,y:-47.6},0).wait(1).to({rotation:26.6,x:-481.4,y:-48.6},0).wait(1).to({rotation:27.1,x:-478.4,y:-49.6},0).wait(1).to({rotation:27.7,x:-475.4,y:-50.6},0).wait(1).to({rotation:28.2,x:-472.3,y:-51.7},0).wait(1).to({rotation:28.7,x:-469.3,y:-52.7},0).wait(1).to({rotation:29.2,x:-466.2,y:-53.7},0).wait(1).to({rotation:29.7,x:-463.2,y:-54.7},0).wait(1).to({rotation:30.3,x:-460.2,y:-55.7},0).wait(1).to({rotation:30.8,x:-466,y:-194.3},0).wait(1).to({rotation:21.4,x:-484.6,y:-203.7},0).wait(1).to({rotation:21.1,x:-503.1,y:-213.2},0).wait(1).to({rotation:20.8,x:-521.6,y:-222.6},0).wait(1).to({rotation:34.5,x:-540.2,y:-232.1},0).wait(1).to({rotation:42.7,x:-558.8,y:-241.5},0).wait(1).to({rotation:50.8,x:-577.3,y:-250.9},0).wait(1).to({rotation:45.4,x:-595.9,y:-260.4},0).wait(1).to({rotation:39.9,x:-614.4,y:-269.8},0).wait(1).to({rotation:34.5,x:-633,y:-279.3},0).wait(1).to({rotation:31.7,x:-651.5,y:-288.7},0).wait(1).to({rotation:29,x:-670.1,y:-298.1},0).wait(1).to({rotation:26.2,x:-683.5,y:-304.3},0).wait(1).to({rotation:43.6,x:-697,y:-310.5},0).wait(1).to({rotation:38.4,x:-710.5,y:-316.6},0).wait(1).to({rotation:33.3,x:-723.9,y:-322.8},0).wait(1).to({rotation:12.8,x:-737.4,y:-328.9},0).wait(1).to({rotation:22.3,x:-750.8,y:-335.1},0).wait(1).to({rotation:31.8,x:-764.3,y:-341.3},0).wait(1).to({rotation:31.5,x:-777.8,y:-347.4},0).wait(1).to({rotation:18.6,x:-794.6,y:-351.9},0).wait(1).to({rotation:32.6,x:-803.6,y:-357.5},0).wait(1).to({rotation:27.7,x:-812.5,y:-363.1},0).wait(1).to({rotation:22.8,x:-821.5,y:-368.6},0).wait(1).to({rotation:24.9,x:-830.4,y:-374.2},0).wait(1).to({rotation:26.9,x:-839.4,y:-379.8},0).wait(1).to({rotation:29,x:-848.3,y:-385.4},0).wait(1).to({rotation:23.8,x:-857.3,y:-390.9},0).wait(1).to({rotation:18.6,x:-866.2,y:-396.5},0).wait(1).to({rotation:21.7,x:-875.2,y:-402.1},0).wait(1).to({rotation:24.9,x:-884.1,y:-407.7},0).wait(1).to({rotation:28,x:-893.1,y:-413.3},0).wait(1).to({rotation:19.5,x:-902,y:-418.9},0).wait(1).to({rotation:11.1,x:-911,y:-424.4},0).wait(1).to({rotation:13.8,x:-919.9,y:-430},0).wait(1).to({rotation:16.6,x:-928.9,y:-435.6},0).wait(1).to({rotation:19.4,x:-937.8,y:-441.2},0).wait(1).to({rotation:22.2,x:-946.8,y:-446.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1029.9,-607.9,1703.7,743.1);


(lib.gs_sc2_layer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0));

	// Base
	this.bruecke = new lib.gs_sc2_layer2_bruecke();
	this.bruecke.setTransform(154.3,128.6,0.932,0.932,0,0,0,-178,-236.4);

	this.instance = new lib.gruenersee_layer02_02();
	this.instance.setTransform(-959.9,-418.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.bruecke}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-959.9,-418.4,1920,893.3);


(lib.gs_sc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,"action":12,"out":13});

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
	this.instance = new lib.gs_sc2_layer1();
	this.instance.setTransform(600.8,1306.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:633.5,y:1249.9},0).wait(1).to({x:666.2,y:1193},0).wait(1).to({x:698.9,y:1136.1},0).wait(1).to({x:731.6,y:1079.2},0).wait(1).to({x:764.3,y:1022.3},0).wait(1).to({x:797,y:965.5},0).wait(1).to({x:829.7,y:908.6},0).wait(1).to({x:862.5,y:851.6},0).wait(1).to({x:895.2,y:794.7},0).wait(1).to({x:927.9,y:737.8},0).wait(1).to({x:960.6,y:681},0).to({_off:true},1).wait(13));

	// Layer2_In Kopie
	this.instance_1 = new lib.gs_sc2_layer2();
	this.instance_1.setTransform(1418.5,1192.6,1.053,1.053);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:28.2,scaleX:1.05,scaleY:1.05,x:1376.9,y:1176.1},0).wait(1).to({x:1335.3,y:1129.9},0).wait(1).to({x:1293.7,y:1083.8},0).wait(1).to({x:1252,y:1037.6},0).wait(1).to({x:1210.4,y:991.4},0).wait(1).to({x:1168.8,y:945.3},0).wait(1).to({x:1127.2,y:899.1},0).wait(1).to({x:1085.5,y:852.9},0).wait(1).to({x:1043.9,y:806.7},0).wait(1).to({x:1002.3,y:760.6},0).wait(1).to({x:960.7,y:714.4},0).to({_off:true},1).wait(13));

	// Layer3_In Kopie 3
	this.instance_2 = new lib.gs_sc2_layer3();
	this.instance_2.setTransform(932,1691.6,1.092,1.092);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:39.2,scaleX:1.09,scaleY:1.09,x:974.6,y:1594.2},0).wait(1).to({x:974.4,y:1496.8},0).wait(1).to({x:974.3,y:1399.4},0).wait(1).to({x:974.1,y:1301.9},0).wait(1).to({x:973.9,y:1204.5},0).wait(1).to({x:973.7,y:1107.2},0).wait(1).to({x:973.5,y:1009.7},0).wait(1).to({x:973.3,y:912.2},0).wait(1).to({x:973.2,y:814.8},0).wait(1).to({x:973,y:717.4},0).wait(1).to({x:972.8,y:620},0).to({_off:true},1).wait(13));

	// Layer4_In
	this.instance_3 = new lib.gs_sc2_layer4();
	this.instance_3.setTransform(952.7,-275.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleY:1.01,x:952.8,y:-234.4},0).wait(1).to({scaleY:1.02,x:953,y:-193.5},0).wait(1).to({scaleY:1.03,x:953.2,y:-152.6},0).wait(1).to({scaleY:1.04,x:953.4,y:-111.7},0).wait(1).to({scaleY:1.06,x:953.6,y:-70.8},0).wait(1).to({scaleY:1.07,x:953.7,y:-29.9},0).wait(1).to({scaleY:1.08,x:953.9,y:10.7},0).wait(1).to({scaleY:1.09,x:954.1,y:51.7},0).wait(1).to({scaleY:1.1,x:954.3,y:92.6},0).wait(1).to({scaleY:1.11,x:954.5,y:133.5},0).wait(1).to({scaleY:1.12,x:954.7,y:174.4},0).to({_off:true},1).wait(13));

	// Layer1_Out
	this.instance_4 = new lib.gs_sc2_layer1();
	this.instance_4.setTransform(960.6,681);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).wait(1).to({x:927.7,y:739.3},0).wait(1).to({x:894.8,y:797.6},0).wait(1).to({x:861.9,y:855.9},0).wait(1).to({x:829,y:914.3},0).wait(1).to({x:796.1,y:972.7},0).wait(1).to({x:763.2,y:1031},0).wait(1).to({x:730.3,y:1089.3},0).wait(1).to({x:697.4,y:1147.7},0).wait(1).to({x:664.5,y:1206.1},0).wait(1).to({x:631.6,y:1264.4},0).wait(1).to({x:598.7,y:1322.8},0).wait(1));

	// Layer2_Out
	this.instance_5 = new lib.gs_sc2_layer2();
	this.instance_5.setTransform(960.7,684.7,1.053,1.053);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).wait(1).to({regY:28.2,scaleX:1.05,scaleY:1.05,x:1026.3,y:741.1},0).wait(1).to({x:1091.9,y:767.8},0).wait(1).to({x:1157.4,y:794.5},0).wait(1).to({x:1223.1,y:821.3},0).wait(1).to({x:1288.7,y:848},0).wait(1).to({x:1354.2,y:874.7},0).wait(1).to({x:1419.8,y:901.4},0).wait(1).to({x:1485.5,y:928.1},0).wait(1).to({x:1551.1,y:954.9},0).wait(1).to({x:1616.7,y:981.6},0).wait(1).to({x:1682.4,y:1008.3},0).wait(1));

	// Layer3_Out
	this.instance_6 = new lib.gs_sc2_layer3();
	this.instance_6.setTransform(930,620,1.092,1.092);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).wait(1).to({regX:39.2,scaleX:1.09,scaleY:1.09,x:971.9,y:717.9},0).wait(1).to({x:971,y:815.9},0).wait(1).to({x:970.1,y:913.7},0).wait(1).to({x:969.2,y:1011.8},0).wait(1).to({x:968.3,y:1109.8},0).wait(1).to({x:967.4,y:1207.6},0).wait(1).to({x:966.5,y:1305.6},0).wait(1).to({x:965.6,y:1403.7},0).wait(1).to({x:964.7,y:1501.6},0).wait(1).to({x:963.8,y:1599.6},0).wait(1).to({x:962.9,y:1697.6},0).wait(1));

	// Layer4_Out Kopie
	this.instance_7 = new lib.gs_sc2_layer4();
	this.instance_7.setTransform(954.7,174.3,1,1.121);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).wait(1).to({x:956.1,y:135.6},0).wait(1).to({x:957.6,y:96.9},0).wait(1).to({x:959,y:58.2},0).wait(1).to({x:960.5,y:19.4},0).wait(1).to({x:961.9,y:-19.1},0).wait(1).to({x:963.4,y:-57.7},0).wait(1).to({x:964.8,y:-96.5},0).wait(1).to({x:966.3,y:-135.2},0).wait(1).to({x:967.7,y:-173.9},0).wait(1).to({x:969.2,y:-212.6},0).wait(1).to({x:970.7,y:-251.4},0).wait(1));

	// GK_Scene2
	this.l1 = new lib.gs_sc2_layer1();
	this.l1.setTransform(960.6,681);

	this.l2 = new lib.gs_sc2_layer2();
	this.l2.setTransform(960.7,684.8,1.054,1.054);

	this.l3 = new lib.gs_sc2_layer3();
	this.l3.setTransform(930,620,1.092,1.092);

	this.l4 = new lib.gs_sc2_layer4();
	this.l4.setTransform(954.7,174.4,1,1.121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.l4},{t:this.l3},{t:this.l2},{t:this.l1}]},12).to({state:[]},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-435.2,-457.7,2865.2,2739.4);


(lib.gs_sc1_layer2_wasser1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":16});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.gotoAndStop(0);
	}
	this.frame_16 = function() {
		playSound("gs_sc1_fisch");
	}
	this.frame_71 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(1).call(this.frame_16).wait(55).call(this.frame_71));

	// Ebene_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("EgomAMMQgegIgjgRQhLglkYAAQjMgBhwAjIAA37MBoMAAAIAAXFIgGAAQguAAjeANQjqAOgeAIIrWAEQiLAAiRADQijAFiBAQQhrgriIAAQiKgBhWAcQhVAbhHABQh0AAjFguQj1g5g0gHQiXgUhIAvQgYARgRAZQhYgOkLAAQkigBhhAcQg2AQgYADQg5AIh1ABQiqgBhTgOQg2gKglgVQgngWgfgGQg8gLiDAEQgoAChXAQIizAjQiAAXh0AMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:1066.4,y:402}).wait(56));

	// Ebene_4
	this.instance = new lib.gs_sc1_layer2_fisch();
	this.instance.setTransform(774.4,521.3,1,1,0,0,0,66.7,70.3);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(1).to({x:776,y:516.2},0).wait(1).to({x:777.7,y:511},0).wait(1).to({x:779.5,y:505.9},0).wait(1).to({x:781.3,y:500.9},0).wait(1).to({x:783.3,y:495.8},0).wait(1).to({x:785.3,y:490.8},0).wait(1).to({x:787.5,y:485.9},0).wait(1).to({x:789.8,y:481},0).wait(1).to({x:792.3,y:476.2},0).wait(1).to({x:794.9,y:471.5},0).wait(1).to({x:797.9,y:467},0).wait(1).to({x:801.3,y:462.8},0).wait(1).to({x:805.4,y:459.3},0).wait(1).to({rotation:29.8,x:816.4,y:455.4},0).wait(1).to({rotation:33.6,x:828.1,y:454},0).wait(1).to({rotation:37.4,x:839.9,y:453.7},0).wait(1).to({rotation:41.2,x:851.6,y:454.2},0).wait(1).to({rotation:45,x:863.3,y:455.3},0).wait(1).to({rotation:49.7,x:871.3,y:456.1},0).wait(1).to({rotation:54.3,x:879.4,y:456.9},0).wait(1).to({rotation:51.1,x:887.9,y:458},0).wait(1).to({rotation:47.9,x:896.5,y:459.1},0).wait(1).to({rotation:52.6,x:905,y:460.1},0).wait(1).to({rotation:57.4,x:913.5,y:461.3},0).wait(1).to({rotation:54.2,x:922,y:462.4},0).wait(1).to({rotation:51,x:930.5,y:463.5},0).wait(1).to({rotation:58.6,x:939,y:464.6},0).wait(1).to({rotation:54.9,x:947.5,y:465.7},0).wait(1).to({rotation:51.2,x:956,y:466.7},0).wait(1).to({rotation:55,x:964.5,y:467.9},0).wait(1).to({rotation:58.8,x:973,y:469},0).wait(1).to({rotation:55.3,x:981.6,y:470.1},0).wait(1).to({rotation:51.7,x:990.1,y:471.2},0).wait(1).to({rotation:55.9,x:998.6,y:472.2},0).wait(1).to({rotation:60.2,x:1007.1,y:473.4},0).wait(1).to({rotation:56.8,x:1015.6,y:474.4},0).wait(1).to({rotation:53.5,x:1024.1,y:475.6},0).wait(1).to({rotation:57.2,x:1032.6,y:476.7},0).wait(1).to({rotation:60.9,x:1041.1,y:477.7},0).wait(1).to({rotation:57.7,x:1049.6,y:478.9},0).wait(1).to({rotation:54.5,x:1058.2,y:479.9},0).wait(1).to({rotation:63.1,x:1066.7,y:481.1},0).wait(1).to({rotation:59.7,x:1075.2,y:482.1},0).wait(1).to({rotation:56.2,x:1083.7,y:483.3},0).wait(1).to({rotation:60,x:1092.2,y:484.4},0).wait(1).to({rotation:63.9,x:1100.8,y:485.5},0).wait(1).to({rotation:59.8,x:1109.2,y:486.5},0).wait(1).to({rotation:55.7,x:1117.7,y:487.6},0).wait(1).to({rotation:59.3,x:1126.3,y:488.7},0).wait(1).to({rotation:62.9,x:1134.7,y:489.9},0).wait(1).to({rotation:58.2,x:1143.3,y:491},0).wait(1).to({rotation:53.5,x:1151.8,y:492},0).wait(1).to({rotation:59.1,x:1160.3,y:493.1},0).wait(1).to({rotation:64.6,x:1168.9,y:494.2},0).wait(1).to({rotation:59.9,x:1177.3,y:495.3},0).wait(1));

	// blase5
	this.instance_1 = new lib.gs_sc1_layer2_blase5();
	this.instance_1.setTransform(772.5,427.2,1,1,0,0,0,14.5,15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({y:425.2},0).wait(1).to({y:423.2},0).wait(1).to({y:421.2},0).wait(1).to({y:419.2},0).wait(1).to({y:417.2},0).wait(1).to({y:419.2},0).wait(1).to({y:421.2},0).wait(1).to({y:423.1},0).wait(1).to({y:425.2},0).wait(1).to({y:427.2},0).wait(1).to({y:425.2},0).wait(1).to({y:423.2},0).wait(1).to({y:421.2},0).wait(1).to({y:419.2},0).wait(1).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50));

	// blase4
	this.instance_2 = new lib.gs_sc1_layer2_blase4();
	this.instance_2.setTransform(796,446.5,1,1,0,0,0,23,24.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({y:449},0).wait(1).to({y:451.5},0).wait(1).to({y:454},0).wait(1).to({y:456.5},0).wait(1).to({y:454.5},0).wait(1).to({y:452.5},0).wait(1).to({y:450.5},0).wait(1).to({y:448.5},0).wait(1).to({y:446.5},0).wait(1).to({y:444.5},0).wait(1).to({y:442.5},0).wait(1).to({y:440.5},0).wait(1).to({y:438.5},0).wait(1).to({y:436.5},0).wait(1).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50));

	// blase3
	this.instance_3 = new lib.gs_sc1_layer2_blase3();
	this.instance_3.setTransform(820.5,429.5,1,1,0,0,0,12.5,11.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({y:431.5},0).wait(1).to({y:433.5},0).wait(1).to({y:435.5},0).wait(1).to({y:437.5},0).wait(1).to({y:439.5},0).wait(1).to({y:437.5},0).wait(1).to({y:435.5},0).wait(1).to({y:433.5},0).wait(1).to({y:431.5},0).wait(1).to({y:429.5},0).wait(1).to({y:432},0).wait(1).to({y:434.5},0).wait(1).to({y:437},0).wait(1).to({y:439.5},0).wait(1).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50));

	// blase2
	this.instance_4 = new lib.gs_sc1_layer2_blase2();
	this.instance_4.setTransform(796,423.7,1,1,0,0,0,12,15.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({y:421.2},0).wait(1).to({y:418.7},0).wait(1).to({y:416.2},0).wait(1).to({y:413.7},0).wait(1).to({y:415.7},0).wait(1).to({y:417.7},0).wait(1).to({y:419.6},0).wait(1).to({y:421.7},0).wait(1).to({y:423.7},0).wait(1).to({y:421.7},0).wait(1).to({y:419.7},0).wait(1).to({y:417.7},0).wait(1).to({y:415.7},0).wait(1).to({y:413.7},0).wait(1).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50));

	// blase1
	this.instance_5 = new lib.gs_sc1_layer2_blase1();
	this.instance_5.setTransform(824,455.2,1,1,0,0,0,17,20);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(1).to({y:457.2},0).wait(1).to({y:459.2},0).wait(1).to({y:461.1},0).wait(1).to({y:463.2},0).wait(1).to({y:465.2},0).wait(1).to({y:463.2},0).wait(1).to({y:461.2},0).wait(1).to({y:459.2},0).wait(1).to({y:457.2},0).wait(1).to({y:455.2},0).wait(1).to({y:457.7},0).wait(1).to({y:460.2},0).wait(1).to({y:462.7},0).wait(1).to({y:465.2},0).wait(1).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(50));

	// wasser1
	this.instance_6 = new lib.gruenersee_layer01_wasser01();
	this.instance_6.setTransform(0,0,1.135,1.135);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},70).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2179.9,876.5);


(lib.gs_sc1_layer2 = function() {
	this.initialize();

	// Ebene 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EA0JCBYIg8gUQoNgGoVgHQwsgPgsgNI3QgTQt+hwqkjfQjYhJlwiOQmoiljUhMIy6gKQhnggnpgoQnsgorCgdQgFAOgFATQgSAdg+gBQg3gHhCgMQCRCMB2B+QFmGAAACQQAABNg7ATQgdAKhwAAQhOAAmTiCQmwiPhXgbMgy8gAVQsBio12ilQrrhWlsgsQp0hMmqhEQxpi1pAkNQrAlJhPoWQgjj4ADl6QAKmwgBjaQgDl7gvkQQg9leiSkaQAWgUAzhDQA3hJAegcQBthqBdB8QBkgDBrgFQDXgKAmgNIAqAAQAgBoAkBiQA+CvBDCQIABATIAAY2QAKAhAYCbQAeCoAzB3QCfF4GCAAQFggBBqpWQAjjGAHkFIAAkzQAAlRgZjbQgRiWgmiUQgtivgKg7QgZiWAAjaQAAiCBVm8IAmAuQBYBoAYASQBhBHBHB6QATAhAkBDQAiA6AeAnQBdB1CvB/QCmB5A2AAQA1AAAbgqQAUgfAAglQAAh/ipkmQi7ksgkhKQhUimjulAQhuiTg5hIIAxjjQBxAtCOAxQDtBSDLA1QDeA8BaAAQAqgBArAEIBoAeQGyC7BIgBQA6AAAdgjQBPAaAigBQAyAAAvgSQB2AwAoABQBSAAAigoQATgYAAglQAAg3i5hlQAPgWAAgnQAAhxnTkPQhsg/jviCQi0highgZQg0gbjniKQighfhxg+Qg1iUhjiyQgxhZiGjeQhyi7gwhhQhJiPgaiuQgSh6AAjAQABkDgDg2QgHiPgdh1IgLiOQghl1hwp9QgejSgni/QgEgWgIgXIgciRIAAqVQAFgMAMgMQATgWAxgDQgzhMgmhBIgEACQghAOgTAEQhli4g2ldQgajCgRhkQgbivgjh/QgmiJgYnbQgSlVAAisQAAhBgNi7QgMipAEhlQANlGCxjZQDnkcIlitQKCjKRVg9MA0ggALIB4geIWCgTQAigaAVgMQAbgPAcgIMA/SgAUQM2hDUmiWQZyi+E+ghIAAgTIUAAAQaYAyUjCMIMkBWQGCAjFMgCMAiYAAKQZ1EgQ6HpQOFGYKMJzQECD4EUFPQB/CaFhHIQEvGIDLDrQEtFbE3EaQOfNHHXHrQIxJKEmHcQEwHsB+IgQB1H8AALmQAARblxOXQmwQ0vBNxUgjKAgOhTQARnI9EAUQhAAVjqAVQlWAfqUAbgEjsZgxqIBGETQAnCcATA6IAKAAQgEiVgRlAQhniDhQhwQAdBTAlCMg");
	mask.setTransform(1514.3,530);

	// Ebene_1
	this.instance = new lib.gruenersee_layer01_02();
	this.instance.setTransform(0,0,1.087,1.087);

	this.wasser = new lib.gs_sc1_layer2_wasser1();
	this.wasser.setTransform(1044,730.3,1,1,0,0,0,1090,438.3);

	this.instance.mask = this.wasser.mask = mask;

	this.addChild(this.wasser,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.9,0,2179.9,1174.5);


(lib.gs_sc1_layer1 = function() {
	this.initialize();

	// Baum01
	this.baum = new lib.gs_sc1_layer1_baum();
	this.baum.setTransform(249.5,603.5,1,1,0,0,0,248.5,452.5);

	this.instance = new lib.gruenersee_layer01_01();
	this.instance.setTransform(0,0,1.117,1.117);

	this.addChild(this.instance,this.baum);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2144,1206);


(lib.gs_sc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,"action":11,"out":12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		$(document).trigger("nextScene");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13).call(this.frame_24));

	// Layer1_In
	this.instance = new lib.gs_sc1_layer1();
	this.instance.setTransform(-450.2,988.2,1,1,0,0,0,1072,603);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-307.3,y:942.5},0).wait(1).to({x:-164.4,y:896.9},0).wait(1).to({x:-21.7,y:851.4},0).wait(1).to({x:121,y:805.7},0).wait(1).to({x:263.9,y:760.1},0).wait(1).to({x:406.6,y:714.5},0).wait(1).to({x:549.4,y:668.9},0).wait(1).to({x:692.4,y:623.2},0).wait(1).to({x:835.2,y:577.7},0).wait(1).to({x:978,y:532},0).to({_off:true},1).wait(14));

	// Layer2_In
	this.instance_1 = new lib.gs_sc1_layer2();
	this.instance_1.setTransform(-1592.5,320.8,1,1,0,0,0,1044,587.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:587.2,x:-1337.1,y:343.7},0).wait(1).to({x:-1081.8,y:366.6},0).wait(1).to({x:-826.8,y:389.5},0).wait(1).to({x:-571.3,y:412.5},0).wait(1).to({x:-316.1,y:435.5},0).wait(1).to({x:-61,y:458.4},0).wait(1).to({x:194,y:481.4},0).wait(1).to({x:449.5,y:504.3},0).wait(1).to({x:704.8,y:527.3},0).wait(1).to({x:960,y:550.2},0).to({_off:true},1).wait(14));

	// Layer3_In
	this.instance_2 = new lib.gs_sc1_layer3();
	this.instance_2.setTransform(2740.5,139.8,1,1,0,0,0,1020,573.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:2562.4,y:179.8},0).wait(1).to({x:2384.4,y:219.8},0).wait(1).to({x:2206.5,y:259.8},0).wait(1).to({x:2028.3,y:299.8},0).wait(1).to({x:1850.2,y:339.8},0).wait(1).to({x:1672.4,y:379.8},0).wait(1).to({x:1494.3,y:419.8},0).wait(1).to({x:1316.1,y:459.8},0).wait(1).to({x:1138,y:499.8},0).wait(1).to({x:960,y:539.8},0).to({_off:true},1).wait(14));

	// Layer1_Out
	this.instance_3 = new lib.gs_sc1_layer1();
	this.instance_3.setTransform(978,532,1,1,0,0,0,1072,603);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(1).to({x:847.7,y:573.4},0).wait(1).to({x:717.3,y:614.7},0).wait(1).to({x:586.9,y:656},0).wait(1).to({x:456.6,y:697.4},0).wait(1).to({x:326.2,y:738.7},0).wait(1).to({x:195.8,y:780.1},0).wait(1).to({x:65.5,y:821.4},0).wait(1).to({x:-64.7,y:862.8},0).wait(1).to({x:-195.1,y:904.1},0).wait(1).to({x:-325.4,y:945.5},0).wait(1).to({x:-455.8,y:986.8},0).wait(1).to({x:-586.2,y:1028.2},0).wait(1));

	// Layer2_Out
	this.instance_4 = new lib.gs_sc1_layer2();
	this.instance_4.setTransform(960,550.3,1,1,0,0,0,1044,587.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(1).to({regY:587.2,x:1080,y:500.2},0).wait(1).to({x:1200,y:450.2},0).wait(1).to({x:1320,y:400.2},0).wait(1).to({x:1440,y:350.2},0).wait(1).to({x:1560,y:300.2},0).wait(1).to({x:1680,y:250.2},0).wait(1).to({x:1800,y:200.2},0).wait(1).to({x:1920,y:150.2},0).wait(1).to({x:2040,y:100.2},0).wait(1).to({x:2160,y:50.2},0).wait(1).to({x:2280,y:0.2},0).wait(1).to({x:2400,y:-49.6},0).wait(1));

	// Layer3_Out
	this.instance_5 = new lib.gs_sc1_layer3();
	this.instance_5.setTransform(960,539.8,1,1,0,0,0,1020,573.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).wait(1).to({x:831.7,y:503.2},0).wait(1).to({x:703.4,y:466.5},0).wait(1).to({x:575,y:429.8},0).wait(1).to({x:446.7,y:393.2},0).wait(1).to({x:318.4,y:356.5},0).wait(1).to({x:190,y:319.8},0).wait(1).to({x:61.7,y:283.2},0).wait(1).to({x:-66.4,y:246.5},0).wait(1).to({x:-194.8,y:209.8},0).wait(1).to({x:-323.1,y:173.2},0).wait(1).to({x:-451.4,y:136.5},0).wait(1).to({x:-579.8,y:99.8},0).wait(1));

	// Ebene_1
	this.instance_6 = new lib.gs_sc1_hg();
	this.instance_6.setTransform(960,540,1,1,0,0,0,960,540);

	this.l1 = new lib.gs_sc1_layer1();
	this.l1.setTransform(978,532,1,1,0,0,0,1072,603);

	this.l2 = new lib.gs_sc1_layer2();
	this.l2.setTransform(960,550.3,1,1,0,0,0,1044,587.3);

	this.l3 = new lib.gs_sc1_layer3();
	this.l3.setTransform(960,539.8,1,1,0,0,0,1020,573.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6},{t:this.l3},{t:this.l2},{t:this.l1}]},11).to({state:[{t:this.instance_6}]},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2682.5,-434,6443,2025.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;