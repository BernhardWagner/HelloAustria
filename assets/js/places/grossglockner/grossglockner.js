(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.grossglockner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{specialScene:3});

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
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3));

	// Ebene 1
	this.sc1 = new lib.gk_sc1();
	this.sc1.setTransform(959.7,539.8);

	this.sc2 = new lib.gk_sc2();
	this.sc2.setTransform(958,540,1,1,0,0,0,960,540);

	this.sc3 = new lib.gk_sc3();
	this.sc3.setTransform(1204.9,713,1,1,0,0,0,1204.9,713);

	this.special = new lib.gk_special();
	this.special.setTransform(960,540.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sc1}]}).to({state:[{t:this.sc2}]},1).to({state:[{t:this.sc3}]},1).to({state:[{t:this.special}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-615,-0.1,3636.6,2263);


// symbols:
(lib.auto = function() {
	this.initialize(img.auto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,230);


(lib.baum02 = function() {
	this.initialize(img.baum02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,202);


(lib.baum04 = function() {
	this.initialize(img.baum04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,167);


(lib.baum05 = function() {
	this.initialize(img.baum05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,159);


(lib.Baum08 = function() {
	this.initialize(img.Baum08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,132);


(lib.baum09 = function() {
	this.initialize(img.baum09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,115);


(lib.baumstümfpe = function() {
	this.initialize(img.baumstümfpe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,80);


(lib.grossglockner_layer01_01 = function() {
	this.initialize(img.grossglockner_layer01_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,539);


(lib.grossglockner_layer01_01_01 = function() {
	this.initialize(img.grossglockner_layer01_01_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,528);


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


(lib.grossglockner_layer01_05_1 = function() {
	this.initialize(img.grossglockner_layer01_05_1);
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


(lib.grossglockner_layer03_01 = function() {
	this.initialize(img.grossglockner_layer03_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.grossglockner_layer03_02 = function() {
	this.initialize(img.grossglockner_layer03_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Grossglockner_Reh01 = function() {
	this.initialize(img.Grossglockner_Reh01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,105);


(lib.Grossglockner_Reh02 = function() {
	this.initialize(img.Grossglockner_Reh02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,104);


(lib.Grossglockner_Reh03 = function() {
	this.initialize(img.Grossglockner_Reh03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,102);


(lib.Grossglockner_Reh04 = function() {
	this.initialize(img.Grossglockner_Reh04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,105);


(lib.gs_foto = function() {
	this.initialize(img.gs_foto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,800);


(lib.Himmel = function() {
	this.initialize(img.Himmel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.hintergrundalleine = function() {
	this.initialize(img.hintergrundalleine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.kletterer01_klecks = function() {
	this.initialize(img.kletterer01_klecks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,480);


(lib.kletterer02_klecks = function() {
	this.initialize(img.kletterer02_klecks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,467);


(lib.kletterer03_klecks = function() {
	this.initialize(img.kletterer03_klecks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,199,440);


(lib.schifahrer = function() {
	this.initialize(img.schifahrer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,32);


(lib.Sonne = function() {
	this.initialize(img.Sonne);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,252);


(lib.winter01 = function() {
	this.initialize(img.winter01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,528);


(lib.winter02 = function() {
	this.initialize(img.winter02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.winter03 = function() {
	this.initialize(img.winter03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.winter04 = function() {
	this.initialize(img.winter04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.wolke011 = function() {
	this.initialize(img.wolke011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,476,232);


(lib.wolken02 = function() {
	this.initialize(img.wolken02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


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


(lib.gk_special_layer4 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.winter04();
	this.instance.setTransform(-1095.9,-616.4,1.142,1.142);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1095.9,-616.4,2191.9,1233);


(lib.gk_special_layer3 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.winter03();
	this.instance.setTransform(-1055.8,-593.8,1.1,1.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1055.8,-593.8,2111.8,1187.9);


(lib.gk_special_layer2 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.winter02();
	this.instance.setTransform(-1084.9,-610.2,1.13,1.13);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1084.9,-610.2,2170,1220.6);


(lib.gk_special_layer1 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.winter01();
	this.instance.setTransform(-1075.1,-295.6,1.12,1.12);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1075.1,-295.6,2150.4,591.4);


(lib.gk_sc3_layer2 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.grossglockner_layer03_02();
	this.instance.setTransform(0,0,1.052,1.052);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2020,1136.3);


(lib.gk_sc3_layer1_klRechts = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.kletterer01_klecks();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,293,480);


(lib.gk_sc3_layer1_klMitte = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.kletterer03_klecks();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,199,440);


(lib.gk_sc3_layer1_klLinks = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.kletterer02_klecks();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,297,467);


(lib.gk_sc3_layer1_foto = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.gs_foto();
	this.instance.setTransform(110.9,0,1.066,1.066,7.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,745.1,928.7);


(lib.gk_sc3_layer1 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.grossglockner_layer03_01();
	this.instance.setTransform(0,0,1.052,1.052);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2020,1136.3);


(lib.gk_sc3_hg = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.gk_sc1_sonne_wolke = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.wolke011();
	this.instance.setTransform(-959.9,-539.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-959.9,-539.9,476,232);


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
	this.frame_1 = function() {
		playSound("gs_sc1_rehHover");
	}
	this.frame_16 = function() {
		this.gotoAndStop(0);
	}
	this.frame_17 = function() {
		playSound("gs_sc1_reh");
		playSound("gs_sc1_rehLaub");
	}
	this.frame_95 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16).wait(1).call(this.frame_17).wait(78).call(this.frame_95));

	// Main
	this.instance = new lib.baum05();
	this.instance.setTransform(-197,-71.6,1.169,1.169);

	this.instance_1 = new lib.baum04();
	this.instance_1.setTransform(-28.2,-77.4,1.131,1.131);

	this.instance_2 = new lib.Baum08();
	this.instance_2.setTransform(257.2,-27.4,1.134,1.1,0,0,180);

	this.instance_3 = new lib.baum02();
	this.instance_3.setTransform(-124.1,-139.4,1.148,1.148);

	this.instance_4 = new lib.baumstümfpe();
	this.instance_4.setTransform(51,41.8,1.119,1.08);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{rotation:0,x:-124.1,y:-139.4}},{t:this.instance_2,p:{scaleX:1.134,skewX:0,skewY:180,x:257.2,y:-27.4}},{t:this.instance_1,p:{rotation:0,x:-28.2,y:-77.4}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]}).to({state:[{t:this.instance_3,p:{rotation:-2.1,x:-130.7,y:-135.8}},{t:this.instance_2,p:{scaleX:1.158,skewX:-2.6,skewY:177.3,x:254,y:-30.1}},{t:this.instance_1,p:{rotation:-2.1,x:-33.4,y:-72.9}},{t:this.instance,p:{rotation:-1.6,x:-202.3,y:-69.2}}]},1).to({state:[{t:this.instance_3,p:{rotation:-3.3,x:-134.2,y:-133.8}},{t:this.instance_2,p:{scaleX:1.158,skewX:-6.1,skewY:173.8,x:247.7,y:-33.2}},{t:this.instance_1,p:{rotation:-4.1,x:-37.8,y:-68.7}},{t:this.instance,p:{rotation:-3.1,x:-206.8,y:-67}}]},1).to({state:[{t:this.instance_3,p:{rotation:-2.1,x:-130.7,y:-135.8}},{t:this.instance_2,p:{scaleX:1.158,skewX:-6.6,skewY:173.3,x:246.7,y:-33.6}},{t:this.instance_1,p:{rotation:-4.3,x:-38.4,y:-68.2}},{t:this.instance,p:{rotation:-1.9,x:-203,y:-68.9}}]},1).to({state:[{t:this.instance_3,p:{rotation:-0.7,x:-126.4,y:-138.1}},{t:this.instance_2,p:{scaleX:1.158,skewX:-4.1,skewY:175.8,x:251.4,y:-31.5}},{t:this.instance_1,p:{rotation:-3.1,x:-35.6,y:-70.9}},{t:this.instance,p:{rotation:-0.1,x:-197.6,y:-71.3}}]},1).to({state:[{t:this.instance_3,p:{rotation:0.3,x:-123.4,y:-139.7}},{t:this.instance_2,p:{scaleX:1.158,skewX:0,skewY:180,x:258.9,y:-27.3}},{t:this.instance_1,p:{rotation:1,x:-25.9,y:-79.4}},{t:this.instance,p:{rotation:0.5,x:-195.5,y:-72.2}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:-124.2,y:-139.3}},{t:this.instance_2,p:{scaleX:1.158,skewX:4.5,skewY:-175.4,x:266.6,y:-22.4}},{t:this.instance_1,p:{rotation:3.2,x:-20.5,y:-83.5}},{t:this.instance,p:{rotation:1,x:-193.7,y:-72.9}}]},1).to({state:[{t:this.instance_3,p:{rotation:0.7,x:-122,y:-140.3}},{t:this.instance_2,p:{scaleX:1.158,skewX:6.2,skewY:-173.7,x:269.5,y:-20.3}},{t:this.instance_1,p:{rotation:4.9,x:-16.2,y:-86.6}},{t:this.instance,p:{rotation:1.5,x:-192.1,y:-73.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:0.4,x:-123,y:-139.9}},{t:this.instance_2,p:{scaleX:1.158,skewX:6.2,skewY:-173.7,x:269.5,y:-20.3}},{t:this.instance_1,p:{rotation:4.5,x:-17.4,y:-85.8}},{t:this.instance,p:{rotation:2.2,x:-189.8,y:-74.5}}]},1).to({state:[{t:this.instance_3,p:{rotation:0.1,x:-123.8,y:-139.5}},{t:this.instance_2,p:{scaleX:1.158,skewX:4.4,skewY:-175.5,x:266.6,y:-22.4}},{t:this.instance_1,p:{rotation:3,x:-20.9,y:-83.1}},{t:this.instance,p:{rotation:2.5,x:-189.1,y:-74.9}}]},1).to({state:[{t:this.instance_3,p:{rotation:2.1,x:-117.8,y:-142.4}},{t:this.instance_2,p:{scaleX:1.158,skewX:2.2,skewY:-177.7,x:262.8,y:-24.9}},{t:this.instance_1,p:{rotation:0.8,x:-26.4,y:-78.9}},{t:this.instance,p:{rotation:0.4,x:-195.5,y:-72.3}}]},1).to({state:[{t:this.instance_3,p:{rotation:3.9,x:-112.2,y:-144.9}},{t:this.instance_2,p:{scaleX:1.158,skewX:1,skewY:-178.9,x:260.7,y:-26.3}},{t:this.instance_1,p:{rotation:-0.8,x:-30.4,y:-75.5}},{t:this.instance,p:{rotation:-1.4,x:-201.6,y:-69.6}}]},1).to({state:[{t:this.instance_3,p:{rotation:2.7,x:-115.9,y:-143.3}},{t:this.instance_2,p:{scaleX:1.158,skewX:1,skewY:-178.9,x:260.7,y:-26.3}},{t:this.instance_1,p:{rotation:-2.5,x:-34.4,y:-71.9}},{t:this.instance,p:{rotation:-2.4,x:-204.6,y:-68.2}}]},1).to({state:[{t:this.instance_3,p:{rotation:2.7,x:-115.8,y:-143.4}},{t:this.instance_2,p:{scaleX:1.158,skewX:1,skewY:-178.9,x:260.7,y:-26.3}},{t:this.instance_1,p:{rotation:-0.1,x:-28.6,y:-76.9}},{t:this.instance,p:{rotation:-0.2,x:-197.7,y:-71.3}}]},1).to({state:[{t:this.instance_3,p:{rotation:2.2,x:-117.4,y:-142.6}},{t:this.instance_2,p:{scaleX:1.158,skewX:-1.1,skewY:178.8,x:256.7,y:-28.6}},{t:this.instance_1,p:{rotation:-1.1,x:-31,y:-74.9}},{t:this.instance,p:{rotation:-3.2,x:-207,y:-67}}]},1).to({state:[{t:this.instance_3,p:{rotation:2.9,x:-115.2,y:-143.6}},{t:this.instance_2,p:{scaleX:1.158,skewX:-1.1,skewY:178.8,x:256.7,y:-28.6}},{t:this.instance_1,p:{rotation:-1.1,x:-31,y:-74.9}},{t:this.instance,p:{rotation:-0.4,x:-198.5,y:-71}}]},1).to({state:[{t:this.instance_3,p:{rotation:1.8,x:-120.6,y:-142.6}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:0,skewY:180,x:258.9,y:-27.4}},{t:this.instance_1,p:{rotation:0,x:-28.2,y:-77.4}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.8,x:-120.2,y:-142.5}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:-0.3,skewY:179.6,x:258.1,y:-27.8}},{t:this.instance_1,p:{rotation:-1.4,x:-30.9,y:-75.4}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.5,x:-121.2,y:-142.1}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:0,skewY:180,x:258.9,y:-27.4}},{t:this.instance_1,p:{rotation:1.2,x:-26,y:-78.9}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.5,x:-121.2,y:-142.1}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:0,skewY:180,x:258.9,y:-27.4}},{t:this.instance_1,p:{rotation:0,x:-28.2,y:-77.4}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.5,x:-121.2,y:-142.1}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:0.9,skewY:-179,x:260.6,y:-26.4}},{t:this.instance_1,p:{rotation:0,x:-28.2,y:-77.4}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.5,x:-121.2,y:-142.1}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:1.4,skewY:-178.5,x:261.5,y:-25.8}},{t:this.instance_1,p:{rotation:-1.6,x:-31.4,y:-75.1}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.5,x:-121.2,y:-142.1}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:2.5,skewY:-177.4,x:263.5,y:-24.8}},{t:this.instance_1,p:{rotation:-0.8,x:-30,y:-76.2}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.5,x:-121.2,y:-142.1}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:1.2,skewY:-178.7,x:261.2,y:-26.1}},{t:this.instance_1,p:{rotation:0,x:-28.2,y:-77.4}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.5,x:-121.2,y:-142.1}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:-1.1,skewY:178.8,x:256.7,y:-28.6}},{t:this.instance_1,p:{rotation:0,x:-28.2,y:-77.4}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.5,x:-121.2,y:-142.1}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:-2.1,skewY:177.8,x:254.7,y:-29.6}},{t:this.instance_1,p:{rotation:0,x:-28.2,y:-77.4}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.5,x:-121.2,y:-142.1}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:1.2,skewY:-178.7,x:261.2,y:-26.1}},{t:this.instance_1,p:{rotation:0,x:-28.2,y:-77.4}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.5,x:-121.2,y:-142.1}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:-2.6,skewY:177.3,x:253.7,y:-30.1}},{t:this.instance_1,p:{rotation:0,x:-28.2,y:-77.4}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.5,x:-121.2,y:-142.1}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:-0.9,skewY:179,x:257,y:-28.4}},{t:this.instance_1,p:{rotation:0,x:-28.2,y:-77.4}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},2).to({state:[{t:this.instance_3,p:{rotation:1.5,x:-121.2,y:-142.1}},{t:this.instance_4},{t:this.instance_2,p:{scaleX:1.123,skewX:-0.9,skewY:179,x:257,y:-28.4}},{t:this.instance_1,p:{rotation:0,x:-28.2,y:-77.4}},{t:this.instance,p:{rotation:0,x:-197,y:-71.6}}]},54).wait(1));

	// Reh
	this.instance_5 = new lib.Grossglockner_Reh01();
	this.instance_5.setTransform(29.4,-4.4);

	this.instance_6 = new lib.Grossglockner_Reh02();
	this.instance_6.setTransform(51,-2.6);

	this.instance_7 = new lib.Grossglockner_Reh03();
	this.instance_7.setTransform(66.9,-7.4);

	this.instance_8 = new lib.Grossglockner_Reh04();
	this.instance_8.setTransform(90.5,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5,p:{x:29.4,y:-4.4}}]},17).to({state:[{t:this.instance_6,p:{x:51,y:-2.6}}]},2).to({state:[{t:this.instance_7,p:{x:66.9,y:-7.4}}]},2).to({state:[{t:this.instance_8,p:{x:90.5,y:-1.9}}]},2).to({state:[{t:this.instance_5,p:{x:102.2,y:-4.7}}]},2).to({state:[{t:this.instance_6,p:{x:132.5,y:-1.1}}]},2).to({state:[{t:this.instance_7,p:{x:150.8,y:-1.9}}]},2).to({state:[{t:this.instance_8,p:{x:175.5,y:-0.9}}]},2).to({state:[{t:this.instance_5,p:{x:185.3,y:-2.9}}]},2).to({state:[{t:this.instance_6,p:{x:211.5,y:-1.1}}]},2).to({state:[{t:this.instance_7,p:{x:228.8,y:-4.4}}]},2).to({state:[{t:this.instance_8,p:{x:253.5,y:-3.4}}]},2).to({state:[{t:this.instance_5,p:{x:264.3,y:-4.4}}]},2).to({state:[{t:this.instance_6,p:{x:289.5,y:-4.6}}]},2).to({state:[{t:this.instance_7,p:{x:304.4,y:-1.4}}]},2).to({state:[{t:this.instance_8,p:{x:329.5,y:0}}]},2).to({state:[{t:this.instance_5,p:{x:336.9,y:0}}]},2).to({state:[{t:this.instance_6,p:{x:359.5,y:0}}]},2).to({state:[{t:this.instance_7,p:{x:372.3,y:-2.4}}]},2).to({state:[{t:this.instance_8,p:{x:394,y:0}}]},2).to({state:[{t:this.instance_5,p:{x:400.3,y:0}}]},2).to({state:[{t:this.instance_6,p:{x:427.5,y:0}}]},2).to({state:[{t:this.instance_7,p:{x:438.3,y:-0.9}}]},2).to({state:[{t:this.instance_8,p:{x:461.5,y:-1.9}}]},2).to({state:[{t:this.instance_5,p:{x:471.3,y:-2.9}}]},2).to({state:[{t:this.instance_6,p:{x:496,y:-2.6}}]},2).to({state:[{t:this.instance_7,p:{x:511.3,y:-1.9}}]},2).to({state:[{t:this.instance_8,p:{x:533.5,y:-1.4}}]},2).to({state:[{t:this.instance_5,p:{x:545.3,y:-2.4}}]},2).to({state:[{t:this.instance_6,p:{x:569.5,y:-3.6}}]},2).to({state:[{t:this.instance_7,p:{x:581.8,y:-3.4}}]},2).to({state:[{t:this.instance_8,p:{x:604.5,y:-2.4}}]},2).to({state:[{t:this.instance_5,p:{x:615.3,y:-5.4}}]},2).to({state:[{t:this.instance_6,p:{x:638.5,y:-7.6}}]},2).to({state:[{t:this.instance_7,p:{x:651.8,y:-5.9}}]},2).to({state:[{t:this.instance_8,p:{x:675,y:-6.9}}]},2).to({state:[{t:this.instance_5,p:{x:685.8,y:-7.4}}]},2).to({state:[{t:this.instance_6,p:{x:700,y:-7.1}}]},2).to({state:[{t:this.instance_7,p:{x:714.3,y:-6.9}}]},2).to({state:[]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197,-139.4,454.2,257.2);


(lib.gk_sc1_layer1_haus = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.grossglockner_layer01_01_06();
	this.instance.setTransform(-157.1,-121.9,1.173,1.173);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-157.1,-121.9,314.4,244);


(lib.gk_sc1_blankBackground = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.hintergrundalleine();
	this.instance.setTransform(-960.8,-545.5,1.026,1.026);

	this.instance_1 = new lib.hintergrundalleine();
	this.instance_1.setTransform(-999.9,-562.4,1.042,1.042);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-999.9,-562.4,2008.9,1125);


(lib.gk_sc3_layer1_kletterer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.gotoAndStop(0);
	}
	this.frame_16 = function() {
		playSound("sk_sc3_kletterer2");
	}
	this.frame_38 = function() {
		playSound("sk_sc3_kletterer1");
	}
	this.frame_63 = function() {
		playSound("sk_sc3_kletterer5");
	}
	this.frame_85 = function() {
		this.stop();
	}
	this.frame_104 = function() {
		playSound("sk_sc3_kletterer3");
	}
	this.frame_127 = function() {
		playSound("sk_sc3_kletterer4");
	}
	this.frame_131 = function() {
		$(this).trigger('klettererBack');
	}
	this.frame_155 = function() {
		playSound("sk_sc3_kletterer2");
	}
	this.frame_167 = function() {
		this.stop();
	}
	this.frame_172 = function() {
		playSound("sk_sc3_kletterer4");
	}
	this.frame_188 = function() {
		playSound("sk_sc3_kletterer2");
	}
	this.frame_212 = function() {
		playSound("sk_sc3_kletterer1");
	}
	this.frame_237 = function() {
		this.stop();
	}
	this.frame_256 = function() {
		playSound("sk_sc3_kletterer3");
	}
	this.frame_281 = function() {
		playSound("sk_sc3_kletterer4");
	}
	this.frame_288 = function() {
		playSound("sk_sc3_kletterer1");
	}
	this.frame_302 = function() {
		playSound("sk_sc3_kletterer_win");
	}
	this.frame_305 = function() {
		playSound("sk_sc3_kletterer5");
	}
	this.frame_316 = function() {
		$(this).trigger('klettererFront');
	}
	this.frame_328 = function() {
		this.stop();
	}
	this.frame_329 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16).wait(22).call(this.frame_38).wait(25).call(this.frame_63).wait(22).call(this.frame_85).wait(19).call(this.frame_104).wait(23).call(this.frame_127).wait(4).call(this.frame_131).wait(24).call(this.frame_155).wait(12).call(this.frame_167).wait(5).call(this.frame_172).wait(16).call(this.frame_188).wait(24).call(this.frame_212).wait(25).call(this.frame_237).wait(19).call(this.frame_256).wait(25).call(this.frame_281).wait(7).call(this.frame_288).wait(14).call(this.frame_302).wait(3).call(this.frame_305).wait(11).call(this.frame_316).wait(12).call(this.frame_328).wait(1).call(this.frame_329));

	// KlettererRechts
	this.instance = new lib.gk_sc3_layer1_klRechts();
	this.instance.setTransform(146.5,240,1,1,0,0,0,146.5,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:true},1).wait(28).to({x:246.5,y:16,_off:false},0).wait(16).to({_off:true},1).wait(45).to({x:364.5,y:-239.8,_off:false},0).wait(16).to({_off:true},1).wait(29).to({regY:239.8,scaleX:0.38,scaleY:0.38,x:793.2,y:-337.6,_off:false},0).wait(1).to({regY:240,x:793.1,y:-337.5},0).wait(10).wait(1).to({regY:239.8,x:793.2,y:-337.6},0).wait(1).to({regY:240,x:793.1,y:-337.5},0).wait(3).to({_off:true},1).wait(23).to({regY:235.5,x:830.2,y:-471.6,_off:false},0).wait(1).to({regY:240,x:830.1,y:-469.9},0).wait(15).to({_off:true},1).wait(50).to({regY:233.8,x:910.2,y:-611.6,_off:false},0).wait(1).to({regY:240,x:910.1,y:-609.3},0).wait(17).to({_off:true},1).wait(49));

	// Ebene_6
	this.instance_1 = new lib.gk_sc3_layer1_foto();
	this.instance_1.setTransform(999.7,-784.1,0.008,0.008,0,0,0,364.1,430.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(318).to({_off:false},0).wait(1).to({regX:372.5,regY:464.3,scaleX:0.12,scaleY:0.12,rotation:-56.1,x:1003.6,y:-742.6},0).wait(1).to({scaleX:0.23,scaleY:0.23,rotation:-112.5,x:1006.1,y:-708.8},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-168.8,x:999,y:-675.9},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:-13.4,x:1009.5,y:-465.3},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:23.5,x:995.9,y:-440.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:60.7,x:981,y:-426.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:97.8,x:971.9,y:-421},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:135,x:973.8,y:-419.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:172.2,x:987.5,y:-414.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:1.7,x:1007.9,y:-386.6},0).to({_off:true},1).wait(1));

	// KlettererMitte
	this.instance_2 = new lib.gk_sc3_layer1_klMitte();
	this.instance_2.setTransform(171.5,168,1,1,0,0,0,99.5,220);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(4).to({_off:true},1).wait(17).to({x:211.5,y:86,_off:false},0).wait(5).to({_off:true},1).wait(17).to({x:271.5,y:-53.8,_off:false},0).wait(4).to({_off:true},1).wait(35).to({x:331.5,y:-173.8,_off:false},0).wait(4).to({_off:true},1).wait(17).to({x:429.5,y:-373.8,_off:false},0).wait(4).to({_off:true},1).wait(16).to({regX:99.1,regY:219.4,scaleX:0.4,scaleY:0.4,x:786.5,y:-325.2,_off:false},0).wait(1).to({regX:99.5,regY:220,x:786.6,y:-324.9},0).wait(6).to({_off:true},1).wait(17).to({regX:99.1,regY:216.6,x:806.5,y:-379.2,_off:false},0).wait(1).to({regX:99.5,regY:220,x:806.6,y:-377.8},0).wait(6).to({_off:true},1).wait(8).to({regX:99.1,regY:212.5,x:823.5,y:-456.2,_off:false},0).wait(1).to({regX:99.5,regY:220,x:823.6,y:-453.2},0).wait(5).to({_off:true},1).wait(17).to({regX:99.1,regY:209.6,x:852.5,y:-519.2,_off:false},0).wait(1).to({regX:99.5,regY:220,x:852.6,y:-515},0).wait(5).to({_off:true},1).wait(38).to({regX:99.1,regY:207,x:890.5,y:-590.2,_off:false},0).wait(1).to({regX:99.5,regY:220,x:890.6,y:-585},0).wait(3).to({_off:true},1).wait(19).to({regX:99.1,regY:204.8,x:929.5,y:-648.2,_off:false},0).wait(1).to({regX:99.5,regY:220,x:929.6,y:-642.1},0).wait(5).to({_off:true},1).wait(17).to({regX:99.1,regY:202.3,x:979.5,y:-738.2,_off:false},0).wait(1).to({regX:99.5,regY:220,x:979.6,y:-731.2},0).wait(11).to({_off:true},1).wait(12));

	// KlettererLinks
	this.instance_3 = new lib.gk_sc3_layer1_klLinks();
	this.instance_3.setTransform(201.5,131.5,1,1,0,0,0,148.5,233.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(16).to({_off:true},1).wait(28).to({x:319.5,y:-120.2,_off:false},0).wait(34).to({_off:true},1).wait(27).to({regY:230.3,scaleX:0.39,scaleY:0.39,x:777.5,y:-278.2,_off:false},0).wait(1).to({regY:233.5,y:-276.9},0).wait(14).to({_off:true},1).wait(33).to({regY:227.2,x:816.5,y:-407.2,_off:false},0).wait(1).to({regY:233.5,y:-404.7},0).wait(6).to({_off:true},1).wait(31).to({regY:222.5,x:873.5,y:-537.2,_off:false},0).wait(1).to({regY:233.5,y:-532.9},0).wait(17).wait(1).to({regY:221.6,y:-537.2},0).wait(1).to({regY:233.5,y:-532.6},0).wait(17).to({_off:true},1).wait(31).to({regY:218.2,x:953.5,y:-667.2,_off:false},0).wait(1).to({regY:233.5,y:-661.2},0).wait(15).to({_off:true},1).wait(25));

	// KlettererLinks
	this.instance_4 = new lib.gk_sc3_layer1_klLinks();
	this.instance_4.setTransform(319.5,-120.3,1,1,0,0,0,148.5,233.5);

	this.instance_5 = new lib.gk_sc3_layer1_klRechts();
	this.instance_5.setTransform(793.2,-337.7,0.379,0.379,0,0,0,146.5,239.8);

	this.kletterer = new lib.gk_sc3_layer1_foto();
	this.kletterer.setTransform(999.7,-424.1,1.11,1.11,1.5,0,0,364.1,430.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4,p:{regY:233.5,scaleX:1,scaleY:1,x:319.5,y:-120.3}}]},85).to({state:[]},1).to({state:[{t:this.instance_5}]},80).to({state:[]},1).to({state:[{t:this.instance_4,p:{regY:222.5,scaleX:0.388,scaleY:0.388,x:873.5,y:-537.3}}]},70).to({state:[]},1).to({state:[{t:this.kletterer}]},91).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293,480);


(lib.gk_sc3 = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(12).call(this.frame_24));

	// Ebene 3
	this.instance = new lib.gk_sc3_layer1_kletterer();
	this.instance.setTransform(-42.9,1601.4,1,1,0,0,0,146.5,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:745.3,regY:-228.1,x:569.4,y:1095.4},0).wait(1).to({x:583,y:1057.6},0).wait(1).to({x:596.6,y:1019.8},0).wait(1).to({x:610.2,y:982},0).wait(1).to({x:623.8,y:944.2},0).wait(1).to({x:637.4,y:906.4},0).wait(1).to({x:651,y:868.6},0).wait(1).to({x:664.6,y:830.8},0).wait(1).to({x:678.2,y:793},0).wait(1).to({x:691.8,y:755.2},0).wait(1).to({x:705.3,y:717.4},0).to({_off:true},1).wait(13));

	// Layer1_In
	this.instance_1 = new lib.gk_sc3_layer1();
	this.instance_1.setTransform(-305.4,568.1,1,1,0,0,0,1010,568.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-190},0).wait(1).to({x:-74.8},0).wait(1).to({x:40.1},0).wait(1).to({x:155.5},0).wait(1).to({x:270.7},0).wait(1).to({x:385.8},0).wait(1).to({x:501},0).wait(1).to({x:616.4},0).wait(1).to({x:731.6},0).wait(1).to({x:846.8},0).wait(1).to({x:962},0).to({_off:true},1).wait(13));

	// Layer2_In
	this.instance_2 = new lib.gk_sc3_layer2();
	this.instance_2.setTransform(2715.4,568.1,1,1,0,0,0,1010,568.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:2556.7},0).wait(1).to({x:2398.1},0).wait(1).to({x:2239.5},0).wait(1).to({x:2080.7},0).wait(1).to({x:1922},0).wait(1).to({x:1763.5},0).wait(1).to({x:1604.8},0).wait(1).to({x:1446},0).wait(1).to({x:1287.3},0).wait(1).to({x:1128.7},0).wait(1).to({x:970},0).to({_off:true},1).wait(13));

	// Ebene 4
	this.instance_3 = new lib.gk_sc3_layer1_kletterer();
	this.instance_3.setTransform(106.5,1185.6,1,1,0,0,0,146.5,240);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(1).to({regX:745.3,regY:-228.1,x:706.4,y:810.8},0).wait(1).to({x:707.5,y:904.2},0).wait(1).to({x:708.6,y:997.5},0).wait(1).to({x:709.7,y:1091},0).wait(1).to({x:710.8,y:1184.5},0).wait(1).to({x:711.9,y:1277.8},0).wait(1).to({x:713,y:1371.2},0).wait(1).to({x:714.1,y:1464.7},0).wait(1).to({x:715.2,y:1558.2},0).wait(1).to({x:716.3,y:1651.6},0).wait(1).to({x:717.3,y:1745},0).wait(1));

	// Layer1_Out
	this.instance_4 = new lib.gk_sc3_layer1();
	this.instance_4.setTransform(962,568.1,1,1,0,0,0,1010,568.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).wait(1).to({x:846.4},0).wait(1).to({x:730.8},0).wait(1).to({x:615.3},0).wait(1).to({x:499.5},0).wait(1).to({x:383.9},0).wait(1).to({x:268.3},0).wait(1).to({x:152.7},0).wait(1).to({x:37},0).wait(1).to({x:-78.5},0).wait(1).to({x:-194.1},0).wait(1).to({x:-309.8},0).wait(1));

	// Layer2_Out
	this.instance_5 = new lib.gk_sc3_layer2();
	this.instance_5.setTransform(970,568.1,1,1,0,0,0,1010,568.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).wait(1).to({x:1135.5},0).wait(1).to({x:1300.9},0).wait(1).to({x:1466.2},0).wait(1).to({x:1631.8},0).wait(1).to({x:1797.3},0).wait(1).to({x:1962.6},0).wait(1).to({x:2128},0).wait(1).to({x:2293.6},0).wait(1).to({x:2459.1},0).wait(1).to({x:2624.5},0).wait(1).to({x:2790},0).wait(1));

	// gk_sc3
	this.kletterer = new lib.gk_sc3_layer1_kletterer();
	this.kletterer.setTransform(108.5,1197.6,1,1,0,0,0,148.5,252);

	this.l1 = new lib.gk_sc3_layer1();
	this.l1.setTransform(962,568.1,1,1,0,0,0,1010,568.1);

	this.l2 = new lib.gk_sc3_layer2();
	this.l2.setTransform(970,568.1,1,1,0,0,0,1010,568.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.l2},{t:this.l1},{t:this.kletterer}]},12).to({state:[]},1).wait(12));

	// Ebene 2
	this.instance_6 = new lib.grossglockner_layer01_05();
	this.instance_6.setTransform(0.2,0,1.003,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},13).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1315.4,0,5040.9,1841.4);


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
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":17});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.gotoAndStop(0);
	}
	this.frame_128 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(112).call(this.frame_128));

	// Ebene_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqnGqQgRgEgXABQgDgFgKgBIgOgGQgKgFgKgHQgLgGgGgOQgDgNgHgKQgEgFAAgHIgBgIQgBghABgnQADgFgBgFQgCgKADgIIADgMQABgMAEgKIAFgIQACgDADgJQAFgJADgJQADgNAHgMQANgXAPgWQAWgfAZgbIAJgJIAagXIALgFIAvgZQApgWAsgJIAHgBQARAAAQgDIAMgCQAxgDAugGQAKgCAKAAIAjgCIAUgBQAxAAAxgDIAHgBIBBgBIAZgBIAUgBIA6gCIAUgCIAUgCQAEgDAJAAIAMAAIAegCIAIgBIBDgBIAogBIAEAAIAvgBIABAAIAAAAIAGAAIAHAAIAXgBIAGgBIABAAIABAAQAdgDAdAAIABAAIAAAAIAEAAIAEAAIAKgBIAMgCQAPgCAPgDQAVgFAagIIAZgFQAugQAtgSQARgGAXgCIAGgBQAXgEAXAAIABAAIAAAAQAYAAAZAEQAEACAOABQANABAMAMQANAHAHALIABACIgBgCQgHgLgNgHQgMgMgNgBQgOgBgEgCQgZgEgYAAIAAAAIgBAAQgXAAgXAEIgGABQgXACgRAGQgtASguAQIgZAFQgaAIgVAFQgPADgPACIgMACIgKABIgEAAIgEAAIAAAAIgBAAQgdAAgdADIgBAAIgBAAIgGABIgXABIgHAAIgGAAIAAAAIgBAAIgvABIgEAAIgoABIhDABIgIABIgeACIgMAAQgJAAgEADIgUACIgUACIg6ACIgUABIgZABIhBABIgHABQgxADgxAAIgUABIgjACQgKAAgKACQguAGgxADIgMACQgQADgRAAIgHABQgsAJgpAWIgvAZIgLAFIgaAXIgJAJQgZAbgWAfQgPAWgNAXQgHAMgDANQgDAJgFAJQgDAJgCADIgFAIQgDgrAEgrIAFg8IAGg3QADgbABgfIAAhhIAAhiIgBhaIgCgZIgCglQAAgIACgHQA0gFAwAHQAuAGAvgBIBVAAIBSAAIBOAAIBhAAIBdABQAxAAAwgCIAwgCIAcgBQAsAAArgDQAjgDAjgBIAXgBIBagEQAZgBAZAAQAuAAAugDQAvgEAwABIBfABIBfAAQANAAAKAEIAPAEQAOAFALgBQACAQAAAMQAAAegEAeIgCARQgBA2ABAxIAAAHQAAAKADAGIACAbQABANgGAOQAGAKAEAPIACAIQAEAPgBARIgDAwQgBArAFAtQgIAAgGAFQgHAGgNAFQgFADgKACQgHAGgOAGIgoAQIgSAKIgOAHIgKADIgLAFIgJAEIgPAFIgZAMIgZAIQgDACgKABQgDAEgHABIgKABIgKADIgbAFIgPADIgNAEQgJABgLAGIgHACQgMACgLAEIgKAEQgLADgQACQgJAEgQADQgIAGgMABQgHABgIADIgKADIgbAJQgGACgKAAQgGAAgLADQgDACgMABIgUACIgPACQgDACgLABQgDADgNgBQgDACgMABQgNABgMADIgZAFIgIABIgeAGIgMACIgcAHQgRADgNAKIgPAEIgPAFIgMADIgXAEIgKADQgFADgKgBQgNAAgMADIgXAFIgeAGIgtAMIgWAHIgNADIgZAFIgHACIgKACIgMADQgGACgKABIgPACIgbADIgHACIgLADIgHACIgYAIQgEADgFABQgHABgMAFQgGADgMACQgJAAgGAEIgKADQgDACgHAAQgNAAgPABQgIAAgJAFQgLABgOAFQgXAEgZgBQgWgCgWADIgGABQgIgIgHgCgAMOh6QACgDAAgGIgBgGIABAGQAAAGgCADg");
	var mask_graphics_26 = new cjs.Graphics().p("EAWuA+/QsagBr6irQo+iBmOkfQlDjpkykGQjXi4iLjaQi9kmiQlTQgjhSgvhMQhvizhCkzQgQifgWjxQgHiEhAhjQiEjOg8jxQgPg9gdg3Qh3jghDkEQgZhjgghgQgchUgVhVQgZhjgshcQgfhAgmi0QAIkFhNjgQghhfgThkQg3kWhPkXQhkligwl6IADABQAKACADAEIACAAIAAAAIABAAIAAAAIACAAIAAAAQARAAAOADIAEABQAHACAIAIIAGgBIgGABQgIgIgHgCIgEgBQgOgDgRAAIAAAAIgCAAIAAAAIgBAAIAAAAIgCAAQgDgEgKgCIgDgBQgKhPgHhRQARhEAVhFQAtg6AyhJQAng7AqhDQBZiPBxgYQBmgWB+hWIA7gCIAwgCIAeAAQAsAAArgEQAjgDAjAAIAXgBIBagFQAZgBAZABQAuAAAugDQAvgEAwABIBfAAIBfAAQANAAAKAFIAOAEIAbAOIABARQAAAfgEAdIgCASIgBA/IABAnIAAAIQAAAKADAFIACAbIAAAGQAAAKgFAMIgBgDQgHgLgNgHQgMgLgNgCQgOAAgEgDQgZgEgYAAIAAAAIgBAAQgXAAgXAEIgGABQgXACgRAHQgtASguAPIgZAFQgaAJgVAEQgPAEgPABIgMACIgKABIgEAAIgEAAIAAAAIgBAAQgdAAgdADIgCAAIAAAAIgGABIgXABIgHAAIgGAAIAAAAIgBAAIgvABIgEABIgoABIhDABIgIAAIgeACIgMABQgJAAgEACIgUADIgWACIg6ACIgUABIgZABIhBABIgHAAQgxADgxABIgUABIgjACQgKAAgKABQguAHgxACIgMACQgQAEgRAAIgHAAQgsAJgpAXIgcAPIAcgPQApgXAsgJIAHAAQARAAAQgEIAMgCQAxgCAugHQAKgBAKAAIAjgCIAUgBQAxgBAxgDIAHAAIBBgBIAZgBIAUgBIA6gCIAWgCIAUgDQAEgCAJAAIAMgBIAegCIAIAAIBDgBIAogBIAEgBIAvgBIABAAIAAAAIAGAAIAHAAIAXgBIAGgBIAAAAIACAAQAdgDAdAAIABAAIAAAAIAEAAIAEAAIAKgBIAMgCQAPgBAPgEQAVgEAagJIAZgFQAugPAtgSQARgHAXgCIAGgBQAXgEAXAAIABAAIAAAAQAYAAAZAEQAEADAOAAQANACAMALQANAHAHALIABADIABAGQAAAFgCAEQACgEAAgFIgBgGQAGAKAEAPIACAHQADAMAAANIAAAIIgDAvIAAAQQAAAlAEAlQgIABgGAFQgHAGgNAEQgFADgKACQgHAHgOAFIgoARIgSAJIgOAHIgKAEIgLAEIgJAEIgPAGIgZALIgZAJQgDACgKAAQgDAFgHAAIgKACIgKACIgbAGIgPADIgNADQgJABgLAGIgHACQgMACgLAEIgKAEQgLADgQACQgJAEgQAEQgIAFgMACQgHABgIADIgKADIgbAIQgGADgKAAQgGAAgLACQgDACgMABIgUACIgPADQgDACgLABIgBAAQgCACgHAAIAAAAIgBAAIgFAAQgDACgMABQgNABgMACIgZAGIgIABIgeAFIgMADIgcAHQgRADgPAJIgPAEIgPAFIgMADIgXAFIgKADIgBAAQgEACgHAAIAAAAIAAAAIgCAAIgBAAIgDAAIgBAAIAAAAIAAAAQgKAAgJACIgCAAIAAAAIgXAFIgeAHIgtAMIgWAGIgNAEIgZAEIgHACIgKADIgMADQgGACgKABIgPABIgbAEIgHACIgLADIgHACIgYAHQgEAEgFABQgHABgMAEQgGAEgMABQgJAAgGAEIgKAEQgDACgHAAQgNgBgPACQgIAAgJAFQgLAAgOAFQgTADgTAAIAAAAIAAAAIgKAAIgBAAIgNAAIAAAAIgBAAIgYABIgFABIABAAIAAABQAFAFAFAAIABAAIAAAAIACAAIgCAAIAAAAIgBAAQgFAAgFgFIAAgBIgBAAIAFgBIAYgBIABAAIAAAAIANAAIABAAIAKAAIAAAAIAAAAQATAAATgDQAOgFALAAQAJgFAIAAQAPgCANABQAHAAADgCIAKgEQAGgEAJAAQAMgBAGgEQAMgEAHgBQAFgBAEgEIAYgHIAHgCIALgDIAHgCIAbgEIAPgBQAKgBAGgCIAMgDIAKgDIAHgCIAZgEIANgEIAWgGIAtgMIAegHIAXgFIAAAAIACAAQAJgCAKAAIAAAAIAAAAIABAAIADAAIABAAIACAAIAAAAIAAAAQAHAAAEgCIABAAIAKgDIAXgFIAMgDIAPgFIAPgEQAPgJARgDIAcgHIAMgDIAegFIAIgBIAZgGQAMgCANgBQAMgBADgCIAFAAIABAAIAAAAQAHAAACgCIABAAQALgBADgCIAPgDIAUgCQAMgBADgCQALgCAGAAQAKAAAGgDIAbgIIAKgDQAIgDAHgBQAMgCAIgFQAQgEAJgEQAQgCALgDIAKgEQALgEAMgCIAHgCQALgGAJgBIANgDIAPgDIAbgGIAKgCIAKgCQAHAAADgFQAKAAADgCIAZgJIAZgLIAPgGIAJgEIALgEIAKgEIAOgHIASgJIAogRQAOgFAHgHQAKgCAFgDQANgEAHgGQAGgFAIgBQgEglAAglIAAgQIADgvIAAgIQAAgNgDgMIgCgHQgEgPgGgKQAFgMAAgKIAAgGIgCgbQgDgFAAgKIAAgIIgBgnIABg/IACgSQAEgdAAgfIgBgRQBOArBKArQC/BwCxCZQDfCAEFC7QByBGBZBcQBkBqDrDDQBNBiCMBYQEnC4EEDcQEKDfFEDoQD+C1D4CSQFUDHEfEtQEDEQDUDZIB3B5QAsAsCMCCQBHA7BCBUQA5BICACAQArBkBuBRQAzAmBKBPQAdAeA8BVQA8BLBABKQCjDACBDFQBgCSCADqQA4A/ABBLQADEYgLEXQgLD5iOC9QjEEFjwEtQigDIjCCoQkKDmmlEKQmEARmFAAIgWAAgEg7zgxpIgLgEQgKgFgKgHQgIgFgFgJQALhBAQhBQAHBRAKBPIAAAAgEg8jgyOQgDgMgHgLQgEgFAAgHIgBgHQgBgiABgmQADgFgBgGQgCgKADgIIADgMQABgLAEgKQgDgsAEgqIAFg8IAGg3IADgqQAEBdAHBbQgGAKgCAKQgDAKgFAJQgDAJgCACIgFAJIAFgJQACgCADgJQAFgJADgKQACgKAGgKIAJBwQgQBBgLBBIgEgHgEg8Eg0JIAAAAgEg8Ng15IACgFQANgXAPgWQAWgfAZgbIAJgIIAagYIALgGIATgKQgyBJgtA6QgVBFgRBEIgJhwgEg8Eg0JIAAAAgEg8Ng15QgHhbgEhdIABgSIAAhiIAAhhIgBhaIgCgZIgCgmQAAgHACgHQA0gFAwAGQAuAGAvAAIBVAAIBSAAIBOAAIBhAAIBdAAIAmAAQh+BWhmAWQhxAYhZCPQgqBDgnA7IgTAKIgLAGIgaAYIgJAIQgZAbgWAfQgPAWgNAXIgCAFIAAAAgEgkDg6TIAAAAgEgj+g+mIAAAAgEgkZg+0IABAAQAOAFALgBIABAKIgbgOgEgyAg+mIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:37.5,y:1.6}).wait(26).to({graphics:mask_graphics_26,x:346.7,y:361}).wait(103));

	// Ebene_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(38.1,35,1,1,0,0,0,38.1,35);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(1).to({regX:38,x:38,y:33.2},0).wait(1).to({y:31.3},0).wait(1).to({y:29.4},0).wait(1).to({y:27.5},0).wait(1).to({y:25.6},0).wait(1).to({y:23.6},0).wait(1).to({y:21.6},0).wait(1).to({y:19.6},0).wait(1).to({y:17.6},0).wait(1).to({y:15.5},0).wait(1).to({y:15},0).wait(1).to({y:14.8},0).wait(1).to({y:13.6},0).wait(1).to({y:12.3},0).wait(1).to({y:11},0).wait(1).to({y:9.6},0).wait(1).to({y:8.3},0).wait(1).to({y:7},0).wait(1).to({y:5.6},0).wait(1).to({y:4.2},0).wait(1).to({y:2.8},0).wait(1).to({y:1.4},0).wait(1).to({y:0},0).wait(1).to({y:-0.8},0).wait(1).wait(1).to({scaleX:1.01,scaleY:1.01,x:39.4,y:2.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:40.9,y:6.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:42.4,y:9.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:43.9,y:13.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:45.4,y:17.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:46.9,y:21.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:48.5,y:25.2},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:50,y:29.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:51.6,y:33},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:53.2,y:37},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:54.8,y:41},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:56.4,y:45},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:58,y:49.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:59.7,y:53.2},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:61.3,y:57.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:63,y:61.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:64.7,y:65.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:66.4,y:70},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:68.1,y:74.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:69.9,y:78.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:71.6,y:83},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:73.4,y:87.4},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:75.1,y:91.8},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:76.9,y:96.3},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:78.7,y:100.8},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:80.5,y:105.3},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:82.3,y:109.9},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:84.2,y:114.5},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:86.2,y:119.2},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:91.3,y:123.9},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:96.5,y:128.5},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:101.7,y:133.3},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:107,y:138.1},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:112.3,y:142.9},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:117.6,y:147.8},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:123,y:152.7},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:128.4,y:157.6},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:133.9,y:162.6},0).wait(1).to({scaleX:1.41,scaleY:1.41,x:139.4,y:167.6},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:144.9,y:172.6},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:150.5,y:177.7},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:156.1,y:182.8},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:161.8,y:187.9},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:167.5,y:193.1},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:173.2,y:198.3},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:179,y:203.6},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:184.8,y:208.8},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:190.7,y:214.2},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:196.6,y:219.5},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:202.5,y:224.9},0).wait(1).to({scaleX:1.56,scaleY:1.56,x:208.5,y:230.3},0).wait(1).to({scaleX:1.57,scaleY:1.57,x:214.5,y:235.8},0).wait(1).to({scaleX:1.59,scaleY:1.59,x:219.3,y:242.3},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:222.6,y:250.2},0).wait(1).to({scaleX:1.62,scaleY:1.62,x:226,y:258.3},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:229.3,y:266.3},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:232.8,y:274.5},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:236.2,y:282.6},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:239.6,y:290.8},0).wait(1).to({scaleX:1.7,scaleY:1.7,x:243,y:299.1},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:246.5,y:307.5},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:250,y:315.8},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:253.5,y:324.2},0).wait(1).to({scaleX:1.76,scaleY:1.76,x:257,y:332.7},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:260.6,y:341.3},0).wait(1).to({scaleX:1.8,scaleY:1.8,x:264.1,y:349.9},0).wait(1).to({scaleX:1.81,scaleY:1.81,x:267.7,y:358.4},0).wait(1).to({scaleX:1.83,scaleY:1.83,x:271.3,y:367.1},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:275,y:375.9},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:278.7,y:384.7},0).wait(1).to({scaleX:1.88,scaleY:1.88,x:282.3,y:393.5},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:286,y:402.4},0).wait(1).to({scaleX:1.92,scaleY:1.92,x:289.7,y:411.3},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:293.5,y:420.3},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:296.8,y:429.1},0).wait(1).to({scaleX:1.97,scaleY:1.97,x:299.4,y:437.6},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:302,y:446},0).wait(1).to({scaleX:2.01,scaleY:2.01,x:304.6,y:454.6},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:307.2,y:463.2},0).wait(1).to({scaleX:2.04,scaleY:2.04,x:309.9,y:471.8},0).wait(1).to({scaleX:2.06,scaleY:2.06,x:312.5,y:480.5},0).wait(1).to({scaleX:2.08,scaleY:2.08,x:315.2,y:489.2},0).wait(1).to({scaleX:2.1,scaleY:2.1,x:317.8,y:498},0).wait(1).to({scaleX:2.12,scaleY:2.12,x:320.6,y:506.8},0).wait(1).to({scaleX:2.14,scaleY:2.14,x:323.2,y:515.7},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:325.9,y:524.6},0).wait(1).to({scaleX:2.17,scaleY:2.17,x:328.7,y:533.5},0).wait(1).to({scaleX:2.19,scaleY:2.19,x:334.1,y:543.2},0).wait(1).to({scaleX:2.21,scaleY:2.21,x:346.1,y:554.5},0).wait(1).to({scaleX:2.23,scaleY:2.23,x:358.2,y:565.9},0).wait(1).to({scaleX:2.25,scaleY:2.25,x:370.3,y:577.3},0).wait(1).to({scaleX:2.27,scaleY:2.27,x:382.5,y:588.9},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:394.8,y:600.4},0).wait(1).to({scaleX:2.31,scaleY:2.31,x:407.1,y:612},0).wait(1).to({scaleX:2.33,scaleY:2.33,x:419.5,y:623.7},0).wait(1).to({scaleX:2.35,scaleY:2.35,x:431.9,y:635.4},0).wait(1).to({scaleX:2.37,scaleY:2.37,x:444.4,y:647.2},0).wait(1).to({scaleX:2.39,scaleY:2.39,x:457.1,y:659.1},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:469.7,y:671},0).wait(1).to({scaleX:2.43,scaleY:2.43,x:482.4,y:683},0).wait(1).to({scaleX:2.45,scaleY:2.45,x:495.1,y:695},0).wait(1).to({scaleX:2.47,scaleY:2.47,x:508,y:707.1},0).wait(1));

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
	this.instance = new lib.gk_sc2_layer1();
	this.instance.setTransform(1986.5,940.3,1,1,0,0,0,1047.9,589.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:661.6,x:1893.4,y:976},0).wait(1).to({x:1800.3,y:939.7},0).wait(1).to({x:1707.3,y:903.3},0).wait(1).to({x:1614,y:866.9},0).wait(1).to({x:1520.9,y:830.5},0).wait(1).to({x:1427.9,y:794.2},0).wait(1).to({x:1334.8,y:757.8},0).wait(1).to({x:1241.6,y:721.4},0).wait(1).to({x:1148.5,y:685},0).wait(1).to({x:1055.4,y:648.7},0).wait(1).to({x:962.3,y:612.3},0).to({_off:true},1).wait(13));

	// Layer2_In
	this.instance_1 = new lib.gk_sc2_layer2();
	this.instance_1.setTransform(-812.3,1442.6,1,1,0,0,0,1050,590.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:1049.9,x:-651.2,y:1374.3},0).wait(1).to({x:-490,y:1306},0).wait(1).to({x:-329.1,y:1237.8},0).wait(1).to({x:-167.8,y:1169.5},0).wait(1).to({x:-6.6,y:1101.2},0).wait(1).to({x:154.1,y:1033},0).wait(1).to({x:315.3,y:964.7},0).wait(1).to({x:476.6,y:896.4},0).wait(1).to({x:637.7,y:828.1},0).wait(1).to({x:798.8,y:759.9},0).wait(1).to({x:959.9,y:691.6},0).to({_off:true},1).wait(13));

	// Layer1_Out
	this.instance_2 = new lib.gk_sc2_layer1();
	this.instance_2.setTransform(959.9,540.5,1,1,0,0,0,1047.9,589.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).wait(1).to({regY:661.6,x:1075.9,y:670.1},0).wait(1).to({x:1192,y:727.5},0).wait(1).to({x:1307.9,y:784.9},0).wait(1).to({x:1424,y:842.5},0).wait(1).to({x:1540,y:899.9},0).wait(1).to({x:1655.9,y:957.4},0).wait(1).to({x:1772,y:1014.8},0).wait(1).to({x:1888.1,y:1072.3},0).wait(1).to({x:2004.1,y:1129.8},0).wait(1).to({x:2120.2,y:1187.3},0).wait(1).to({x:2236.2,y:1244.8},0).wait(1));

	// Layer2_Out
	this.instance_3 = new lib.gk_sc2_layer2();
	this.instance_3.setTransform(960,691.6,1,1,0,0,0,1050,590.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(1).to({regX:1049.9,x:752.6,y:776},0).wait(1).to({x:545.3,y:860.4},0).wait(1).to({x:338.2,y:944.7},0).wait(1).to({x:130.7,y:1029.1},0).wait(1).to({x:-76.5,y:1113.5},0).wait(1).to({x:-283.6,y:1197.8},0).wait(1).to({x:-490.9,y:1282.2},0).wait(1).to({x:-698.4,y:1366.7},0).wait(1).to({x:-905.8,y:1451},0).wait(1).to({x:-1113.1,y:1535.4},0).wait(1).to({x:-1320.4,y:1619.8},0).wait(1));

	// GK_Scene2
	this.instance_4 = new lib.grossglockner_layer01_05();
	this.instance_4.setTransform(2,0,1.003,1);

	this.l1 = new lib.gk_sc2_layer1();
	this.l1.setTransform(959.9,540.5,1,1,0,0,0,1047.9,589.5);

	this.l2 = new lib.gk_sc2_layer2();
	this.l2.setTransform(960,691.6,1,1,0,0,0,1050,590.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4},{t:this.l2},{t:this.l1}]},12).to({state:[{t:this.instance_4}]},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1862.4,0,4896.9,2033.2);


(lib.gk_sc1_wolkeUSonne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}
	this.frame_20 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1).call(this.frame_20));

	// Ebene 4
	this.instance = new lib.gk_sc1_sonne_wolke();
	this.instance.setTransform(919.7,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:-721.8,regY:-423.8,x:196,y:-424},0).wait(1).to({x:194.3,y:-424.1},0).wait(1).to({x:192.6,y:-424.2},0).wait(1).to({x:190.9,y:-424.3},0).wait(1).to({x:189.2,y:-424.4},0).wait(1).to({x:187.5,y:-424.5},0).wait(1).to({x:185.8,y:-424.6},0).wait(1).to({x:184.1,y:-424.8},0).wait(1).to({x:185.4,y:-424.7},0).wait(1).to({x:186.8,y:-424.6},0).wait(1).to({x:188.2,y:-424.5},0).wait(1).to({x:189.5,y:-424.4},0).wait(1).to({x:190.9,y:-424.3},0).wait(1).to({x:192.3,y:-424.2},0).wait(1).to({x:193.6,y:-424.1},0).wait(1).to({x:195,y:-424},0).wait(1).to({x:196.4,y:-423.9},0).wait(1).to({x:197.8},0).to({_off:true},1).wait(1));

	// Ebene 1
	this.instance_1 = new lib.wolke011();
	this.instance_1.setTransform(-40.3,-540.5);

	this.instance_2 = new lib.Sonne();
	this.instance_2.setTransform(8.9,-539.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-540.5,476,252.7);


(lib.gk_sc1_layer1 = function() {
	this.initialize();

	// Ebene 1
	this.wald = new lib.gk_sc1_layer1_wald();
	this.wald.setTransform(389,-93.5);

	this.instance = new lib.gk_sc1_layer1_haus();
	this.instance.setTransform(-488.7,-88.5,0.885,0.885);

	this.instance_1 = new lib.grossglockner_layer01_01_01();
	this.instance_1.setTransform(-1017.1,-310.5,1.117,1.117);

	this.addChild(this.instance_1,this.instance,this.wald);
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:105.5,regY:-15.5,x:60.8,y:806.7},0).wait(1).to({x:61.7,y:758},0).wait(1).to({x:62.6,y:709.3},0).wait(1).to({x:63.5,y:660.5},0).wait(1).to({x:64.4,y:611.8},0).wait(1).to({x:65.3,y:563.1},0).wait(1).to({x:66.2,y:514.3},0).wait(1).to({x:67.1,y:465.6},0).wait(1).to({x:68,y:416.8},0).wait(1).to({x:68.9,y:368.1},0).wait(1).to({x:69.8,y:319.4},0).to({_off:true},1).wait(13));

	// Layer2AnimIn
	this.instance_1 = new lib.gk_sc1_layer2();
	this.instance_1.setTransform(-490.7,539.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.99,scaleY:0.99,x:-445.4,y:498.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-400.3,y:456.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-355.2,y:415.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-310.1,y:374.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-264.9,y:332.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-219.9,y:291.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:-174.7,y:250},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-129.6,y:208.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-84.4,y:167.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-39.3,y:125.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:5.6,y:84.3},0).to({_off:true},1).wait(13));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).wait(1).to({_off:false},0).wait(1).to({regX:105.5,regY:-15.5,x:74.2,y:378.2},0).wait(1).to({x:78.6,y:437.1},0).wait(1).to({x:82.9,y:495.9},0).wait(1).to({x:87.3,y:554.9},0).wait(1).to({x:91.6,y:613.7},0).wait(1).to({x:96,y:672.6},0).wait(1).to({x:100.4,y:731.4},0).wait(1).to({x:104.7,y:790.4},0).wait(1).to({x:109,y:849.2},0).wait(1).to({x:113.4,y:908.1},0).wait(1).to({x:117.8,y:967},0).wait(1));

	// Ebene 17
	this.instance_5 = new lib.gk_sc1_layer2();
	this.instance_5.setTransform(5.6,78.4,0.932,0.932);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).wait(1).to({_off:false},0).wait(1).to({x:-22.6,y:145.1},0).wait(1).to({x:-50.9,y:211.8},0).wait(1).to({x:-79.2,y:278.4},0).wait(1).to({x:-107.6,y:345.2},0).wait(1).to({x:-136,y:411.9},0).wait(1).to({x:-164.3,y:478.6},0).wait(1).to({x:-192.7,y:545.3},0).wait(1).to({x:-221.1,y:612},0).wait(1).to({x:-249.4,y:678.7},0).wait(1).to({x:-277.8,y:745.4},0).wait(1).to({x:-306.1,y:812.2},0).wait(1));

	// Ebene 18
	this.instance_6 = new lib.gk_sc1_layer3();
	this.instance_6.setTransform(373.2,150.1,1.039,1.039);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).wait(1).to({_off:false},0).wait(1).to({x:434.5,y:189.5},0).wait(1).to({x:495.7,y:229},0).wait(1).to({x:556.9,y:268.4},0).wait(1).to({x:618.2,y:307.9},0).wait(1).to({x:679.5,y:347.3},0).wait(1).to({x:740.7,y:386.7},0).wait(1).to({x:801.9,y:426.1},0).wait(1).to({x:863.2,y:465.6},0).wait(1).to({x:924.5,y:505.1},0).wait(1).to({x:985.7,y:544.5},0).wait(1).to({x:1047,y:584},0).wait(1));

	// Ebene 19
	this.instance_7 = new lib.gk_sc1_layer4();
	this.instance_7.setTransform(-29.7,193.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).wait(1).to({_off:false},0).wait(1).to({x:-23.6,y:277.5},0).wait(1).to({x:-17.6,y:361.7},0).wait(1).to({x:-11.6,y:445.8},0).wait(1).to({x:-5.6,y:530},0).wait(1).to({x:0.3,y:614.2},0).wait(1).to({x:6.2,y:698.2},0).wait(1).to({x:12.2,y:782.4},0).wait(1).to({x:18.3,y:866.7},0).wait(1).to({x:24.3,y:950.8},0).wait(1).to({x:30.3,y:1035},0).wait(1).to({x:36.3,y:1119.2},0).wait(1));

	// Großglockner
	this.instance_8 = new lib.grossglockner_layer01_05();
	this.instance_8.setTransform(-959.7,-539.9,1.003,1);

	this.l1 = new lib.gk_sc1_layer1();
	this.l1.setTransform(-35.6,335);

	this.l2 = new lib.gk_sc1_layer2();
	this.l2.setTransform(5.6,78.4,0.932,0.932);

	this.sonne = new lib.gk_sc1_wolkeUSonne();
	this.sonne.setTransform(6.2,0);

	this.l3 = new lib.gk_sc1_layer3();
	this.l3.setTransform(373.2,150.1,1.039,1.039);

	this.l4 = new lib.gk_sc1_layer4();
	this.l4.setTransform(-29.7,193.4);

	this.instance_9 = new lib.wolken02();
	this.instance_9.setTransform(-959.7,-539.9,1.003,1);

	this.instance_10 = new lib.gk_sc1_blankBackground();
	this.instance_10.setTransform(-32.9,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.l4},{t:this.l3},{t:this.sonne},{t:this.l2},{t:this.l1}]},12).to({state:[{t:this.instance_8}]},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1574.7,-539.9,3636.6,2263);


(lib.gk_special = function(mode,startPosition,loop) {
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

	// Ebene 5
	this.instance = new lib.gk_special_layer1();
	this.instance.setTransform(-20.9,845.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({y:792},0).wait(1).to({y:738.2},0).wait(1).to({y:684.5},0).wait(1).to({y:630.6},0).wait(1).to({y:576.9},0).wait(1).to({y:523.1},0).wait(1).to({y:469.3},0).wait(1).to({y:415.5},0).wait(1).to({y:361.7},0).wait(1).to({y:308},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({x:-18.8,y:363.8},0).wait(1).to({x:-16.8,y:419.6},0).wait(1).to({x:-14.8,y:475.3},0).wait(1).to({x:-12.8,y:531.2},0).wait(1).to({x:-10.8,y:587},0).wait(1).to({x:-8.8,y:642.8},0).wait(1).to({x:-6.8,y:698.6},0).wait(1).to({x:-4.8,y:754.5},0).wait(1).to({x:-2.8,y:810.3},0).wait(1).to({x:-0.8,y:866.1},0).wait(1).to({x:1,y:921.9},0).wait(1));

	// Ebene 7
	this.instance_1 = new lib.gk_special_layer2();
	this.instance_1.setTransform(-479,469.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({x:-433.5,y:422.7},0).wait(1).to({x:-388.1,y:375.8},0).wait(1).to({x:-342.8,y:328.8},0).wait(1).to({x:-297.3,y:281.8},0).wait(1).to({x:-252,y:234.8},0).wait(1).to({x:-206.6,y:187.9},0).wait(1).to({x:-161.2,y:140.9},0).wait(1).to({x:-115.8,y:93.9},0).wait(1).to({x:-70.4,y:46.9},0).wait(1).to({x:-25,y:0},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({x:-67.4,y:61.7},0).wait(1).to({x:-109.7,y:123.5},0).wait(1).to({x:-152.1,y:185.2},0).wait(1).to({x:-194.5,y:247},0).wait(1).to({x:-236.9,y:308.8},0).wait(1).to({x:-279.2,y:370.5},0).wait(1).to({x:-321.6,y:432.3},0).wait(1).to({x:-364,y:494.1},0).wait(1).to({x:-406.4,y:555.9},0).wait(1).to({x:-448.7,y:617.7},0).wait(1).to({x:-491.1,y:679.5},0).wait(1));

	// Ebene 6
	this.instance_2 = new lib.gk_special_layer3();
	this.instance_2.setTransform(1191.4,317.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({x:1069.3,y:305.9},0).wait(1).to({x:947.1,y:294.3},0).wait(1).to({x:825.1,y:282.7},0).wait(1).to({x:702.8,y:271.1},0).wait(1).to({x:580.7,y:259.5},0).wait(1).to({x:458.6,y:247.9},0).wait(1).to({x:336.5,y:236.3},0).wait(1).to({x:214.2,y:224.7},0).wait(1).to({x:92.1,y:213.1},0).wait(1).to({x:-29.9,y:201.6},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({x:44.2,y:243.5},0).wait(1).to({x:118.6,y:285.5},0).wait(1).to({x:192.8,y:327.4},0).wait(1).to({x:267.2,y:369.4},0).wait(1).to({x:341.6,y:411.3},0).wait(1).to({x:415.8,y:453.2},0).wait(1).to({x:490.2,y:495.2},0).wait(1).to({x:564.6,y:537.2},0).wait(1).to({x:638.9,y:579.1},0).wait(1).to({x:713.3,y:621.1},0).wait(1).to({x:787.6,y:663.1},0).wait(1));

	// Ebene 8
	this.instance_3 = new lib.gk_special_layer4();
	this.instance_3.setTransform(-192.2,1127.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({x:-174.5,y:1030.3},0).wait(1).to({x:-156.9,y:933},0).wait(1).to({x:-139.3,y:835.7},0).wait(1).to({x:-121.7,y:738.3},0).wait(1).to({x:-104.1,y:640.9},0).wait(1).to({x:-86.5,y:543.6},0).wait(1).to({x:-68.9,y:446.3},0).wait(1).to({x:-51.3,y:348.8},0).wait(1).to({x:-33.7,y:251.5},0).wait(1).to({x:-16.1,y:154.1},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({x:-15.5,y:240.4},0).wait(1).to({x:-15,y:326.8},0).wait(1).to({x:-14.4,y:413},0).wait(1).to({x:-13.9,y:499.4},0).wait(1).to({x:-13.3,y:585.8},0).wait(1).to({x:-12.8,y:672},0).wait(1).to({x:-12.2,y:758.4},0).wait(1).to({x:-11.7,y:844.8},0).wait(1).to({x:-11.1,y:931.1},0).wait(1).to({x:-10.6,y:1017.5},0).wait(1).to({x:-10,y:1103.8},0).wait(1));

	// Ebene 4
	this.l1 = new lib.gk_special_layer1();
	this.l1.setTransform(-20.9,308);

	this.l2 = new lib.gk_special_layer2();
	this.l2.setTransform(-25.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.l2},{t:this.l1}]},12).to({state:[]},1).wait(12));

	// Main
	this.instance_4 = new lib.grossglockner_layer01_05();
	this.instance_4.setTransform(-960,-540.4,1.003,1);

	this.l3 = new lib.gk_special_layer3();
	this.l3.setTransform(-30,201.6);

	this.l4 = new lib.gk_special_layer4();
	this.l4.setTransform(-16.2,154.1);

	this.sonne2 = new lib.gk_sc1_wolkeUSonne();
	this.sonne2.setTransform(4.4,-0.4,1.003,1);

	this.instance_5 = new lib.wolken02();
	this.instance_5.setTransform(-960,-540.4,1.003,1);

	this.instance_6 = new lib.gk_sc1_blankBackground();
	this.instance_6.setTransform(0,-9.8,1,1,0,0,0,4.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.sonne2},{t:this.l4},{t:this.l3}]},11).to({state:[{t:this.instance_4}]},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540.4,1925,1080);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;