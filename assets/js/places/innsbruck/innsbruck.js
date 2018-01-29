(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.innsbruck = function(mode,startPosition,loop) {
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
	this.sc1 = new lib.in_sc1();
	this.sc1.setTransform(960,540,1,1,0,0,0,960,540);

	this.sc2 = new lib.in_sc2();
	this.sc2.setTransform(876.4,426,1,1,0,0,0,876.4,426);

	this.sc3 = new lib.in_sc3();
	this.sc3.setTransform(629.1,43.1,1,1,0,0,0,629,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sc1}]}).to({state:[{t:this.sc2}]},1).to({state:[{t:this.sc3}]},1).wait(1));

	// Ebene 2
	this.instance = new lib.in_sc2_hg();
	this.instance.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2359.9,-516,6804,2014.1);


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_01_fahrrad = function() {
	this.initialize(img.Innsbruck_01_fahrrad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,70);


(lib.Innsbruck_01_gondel = function() {
	this.initialize(img.Innsbruck_01_gondel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,446,425);


(lib.Innsbruck_01_layer01 = function() {
	this.initialize(img.Innsbruck_01_layer01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_01_layer02 = function() {
	this.initialize(img.Innsbruck_01_layer02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_01_layer04 = function() {
	this.initialize(img.Innsbruck_01_layer04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_01_layer05 = function() {
	this.initialize(img.Innsbruck_01_layer05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_BahnBkgr = function() {
	this.initialize(img.Innsbruck_BahnBkgr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,136);


(lib.Innsbruck_l01_layer03 = function() {
	this.initialize(img.Innsbruck_l01_layer03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer02_01_1 = function() {
	this.initialize(img.Innsbruck_Layer02_01_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer02_02 = function() {
	this.initialize(img.Innsbruck_Layer02_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer02_03 = function() {
	this.initialize(img.Innsbruck_Layer02_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer02_04 = function() {
	this.initialize(img.Innsbruck_Layer02_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer02_05 = function() {
	this.initialize(img.Innsbruck_Layer02_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer02_06 = function() {
	this.initialize(img.Innsbruck_Layer02_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer02_auto = function() {
	this.initialize(img.Innsbruck_Layer02_auto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,103);


(lib.Innsbruck_Layer02_hungerburgbahn = function() {
	this.initialize(img.Innsbruck_Layer02_hungerburgbahn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,71);


(lib.Innsbruck_Layer03_01 = function() {
	this.initialize(img.Innsbruck_Layer03_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer03_02 = function() {
	this.initialize(img.Innsbruck_Layer03_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer03_03 = function() {
	this.initialize(img.Innsbruck_Layer03_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer03_Dachl = function() {
	this.initialize(img.Innsbruck_Layer03_Dachl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,425,208);


(lib.Innsbruck_Layer03_Personen1 = function() {
	this.initialize(img.Innsbruck_Layer03_Personen1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer03_personen1_hover = function() {
	this.initialize(img.Innsbruck_Layer03_personen1_hover);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer03_Personen2 = function() {
	this.initialize(img.Innsbruck_Layer03_Personen2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer03_Personen3 = function() {
	this.initialize(img.Innsbruck_Layer03_Personen3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Innsbruck_Layer03_Schindl = function() {
	this.initialize(img.Innsbruck_Layer03_Schindl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,42);


(lib.InnsbruckFoto = function() {
	this.initialize(img.InnsbruckFoto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,800);


(lib.in_sc2_layer5 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_Layer02_05();
	this.instance.setTransform(0,0,1.025,1.025);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1968,1107);


(lib.in_sc2_layer4_bahn = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_Layer02_hungerburgbahn();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83,71);


(lib.in_sc2_layer3 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_Layer02_03();
	this.instance.setTransform(0,0,1.075,1.075);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2064,1161);


(lib.in_sc2_layer2_car = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_Layer02_auto();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,126,103);


(lib.in_sc2_layer1 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_Layer02_01_1();
	this.instance.setTransform(0,0,1.137,1.137);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2183.9,1228.5);


(lib.in_sc2_hg = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_Layer02_06();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.in_sc1_layer4_Out = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_01_layer04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.in_sc1_layer4_In = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_01_layer04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.in_sc1_layer4 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_01_layer04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.in_sc1_layer3_Out = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_l01_layer03();
	this.instance.setTransform(0,0,1.046,1.046);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2008,1129.5);


(lib.in_sc1_layer3_In = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_l01_layer03();
	this.instance.setTransform(0,0,1.046,1.046);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2008,1129.5);


(lib.in_sc1_layer2_Out = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_01_layer02();
	this.instance.setTransform(0,0,1.083,1.083);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2080,1170);


(lib.in_sc1_layer2_In = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_01_layer02();
	this.instance.setTransform(0,0,1.083,1.083);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2080,1170);


(lib.in_sc1_layer1_rad_animation = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_01_fahrrad();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83,70);


(lib.in_sc1_layer1_godel_animation = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_01_gondel();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,446,425);


(lib.in_sc1_bkg = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.Innsbruck_01_layer05();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.in_sc3_layer03 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_Layer03_03();
	this.instance.setTransform(0,6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,6,1920,1080);


(lib.in_sc3_layer2_schindl = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_Layer03_Schindl();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49,42);


(lib.in_sc3_layer2_dachl = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Innsbruck_Layer03_Dachl();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,425,208);


(lib.in_sc3_photo_closeButton = function() {
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


(lib.in_sc3_layer1_photoTrigger = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AHCEDIuDAAIAAoFIODAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnBEDIAAoFIODAAIAAIFg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-25.9,90,52);


(lib.in_sc1_layer3 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.Innsbruck_l01_layer03();
	this.instance.setTransform(-1003.9,-564.7,1.046,1.046);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1003.9,-564.7,2008,1129.5);


(lib.in_sc1_layer2 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.Innsbruck_01_layer02();
	this.instance.setTransform(-1039.9,-584.9,1.083,1.083);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1039.9,-584.9,2080,1170);


(lib.in_sc2_layer4_bahn_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,hover:1,action:21});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.gotoAndStop(0);
	}
	this.frame_119 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(99).call(this.frame_119));

	// Ebene_3
	this.instance = new lib.in_sc2_layer4_bahn();
	this.instance.setTransform(632.7,312,1,1,0,0,0,41.5,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:634.3,y:311.2},0).wait(1).to({x:635.9,y:310.4},0).wait(1).to({x:637.5,y:309.6},0).wait(1).to({x:639.1,y:308.8},0).wait(1).to({x:640.8,y:308},0).wait(1).to({x:642.4,y:307.2},0).wait(1).to({x:644,y:306.4},0).wait(1).to({x:645.6,y:305.6},0).wait(1).to({x:647.2,y:304.8},0).wait(1).to({x:648.8,y:304},0).wait(1).to({x:647,y:304.8},0).wait(1).to({x:645.2,y:305.7},0).wait(1).to({x:643.4,y:306.6},0).wait(1).to({x:641.6,y:307.5},0).wait(1).to({x:639.9,y:308.4},0).wait(1).to({x:638.1,y:309.3},0).wait(1).to({x:636.3,y:310.2},0).wait(1).to({x:634.5,y:311.1},0).wait(1).to({x:632.7,y:312},0).wait(2).wait(1).to({x:635.3,y:310.5},0).wait(1).to({x:637.8,y:309.1},0).wait(1).to({x:640.4,y:307.6},0).wait(1).to({x:643,y:306.1},0).wait(1).to({x:645.5,y:304.7},0).wait(1).to({x:648.1,y:303.2},0).wait(1).to({x:650.6,y:301.7},0).wait(1).to({x:653.2,y:300.3},0).wait(1).to({x:655.8,y:298.8},0).wait(1).to({x:658.3,y:297.3},0).wait(1).to({x:660.9,y:295.9},0).wait(1).to({x:663.5,y:294.4},0).wait(1).to({x:666,y:292.9},0).wait(1).to({x:668.6,y:291.5},0).wait(1).to({x:671.2,y:290},0).wait(1).to({x:673.7,y:288.5},0).wait(1).to({x:676.3,y:287.1},0).wait(1).to({x:678.8,y:285.6},0).wait(1).to({x:681.4,y:284.1},0).wait(1).to({x:684,y:282.7},0).wait(1).to({x:686.5,y:281.2},0).wait(1).to({x:689.1,y:279.8},0).wait(1).to({x:691.3,y:278.5},0).wait(1).to({x:693.4,y:277.3},0).wait(1).to({x:695.6,y:276},0).wait(1).to({x:697.8,y:274.8},0).wait(1).to({x:699.9,y:273.6},0).wait(1).to({x:702.1,y:272.3},0).wait(1).to({x:704.3,y:271.1},0).wait(1).to({x:706.5,y:269.8},0).wait(1).to({x:708.6,y:268.6},0).wait(1).to({x:710.8,y:267.4},0).wait(1).to({x:713,y:266.1},0).wait(1).to({x:715.1,y:264.9},0).wait(1).to({x:717.3,y:263.7},0).wait(1).to({x:719.5,y:262.4},0).wait(1).to({x:721.6,y:261.2},0).wait(1).to({x:723.8,y:259.9},0).wait(1).to({x:726,y:258.7},0).wait(1).to({x:728.1,y:257.5},0).wait(1).to({x:730.3,y:256.2},0).wait(1).to({x:732.5,y:255},0).wait(1).to({x:734.7,y:253.7},0).wait(1).to({x:736.8,y:252.5},0).wait(1).to({x:739,y:251.3},0).wait(1).to({x:741.2,y:250},0).wait(1).to({x:743.3,y:248.8},0).wait(1).to({x:745.5,y:247.6},0).wait(1).to({x:747.9,y:246.2},0).wait(1).to({x:750.2,y:244.9},0).wait(1).to({x:752.6,y:243.5},0).wait(1).to({x:754.9,y:242.2},0).wait(1).to({x:757.3,y:240.8},0).wait(1).to({x:759.6,y:239.5},0).wait(1).to({x:762,y:238.1},0).wait(1).to({x:764.3,y:236.8},0).wait(1).to({x:766.7,y:235.5},0).wait(1).to({x:769,y:234.1},0).wait(1).to({x:771.4,y:232.8},0).wait(1).to({x:773.7,y:231.4},0).wait(1).to({x:776.1,y:230.1},0).wait(1).to({x:778.4,y:228.7},0).wait(1).to({x:780.8,y:227.4},0).wait(1).to({x:783.1,y:226.1},0).wait(1).to({x:785.5,y:224.7},0).wait(1).to({x:787.8,y:223.4},0).wait(1).to({x:790.2,y:222},0).wait(1).to({x:792.5,y:220.7},0).wait(1).to({x:794.9,y:219.3},0).wait(1).to({x:797.2,y:218},0).wait(1).to({x:799.6,y:216.6},0).wait(1).to({x:802,y:215.3},0).wait(1).to({x:804.1,y:214.1},0).wait(1).to({x:806.3,y:212.8},0).wait(1).to({x:808.5,y:211.6},0).wait(1).to({x:810.6,y:210.3},0).wait(1).to({x:812.8,y:209.1},0).wait(1).to({x:815,y:207.9},0).wait(1).to({x:817.1,y:206.6},0).wait(1).to({x:819.3,y:205.4},0).wait(1).to({x:821.5,y:204.1},0).wait(1).to({x:823.6,y:202.9},0).wait(1).to({x:825.8,y:201.7},0).wait(1).to({x:828,y:200.4},0).wait(1).to({x:830.2,y:199.2},0).wait(1).to({x:832.3,y:197.9},0).wait(1).to({x:834.5,y:196.7},0).wait(1).to({x:836.7,y:195.5},0).wait(1).to({x:838.8,y:194.2},0).wait(1).to({x:841,y:193},0).wait(1).to({x:843.2,y:191.7},0).wait(1).to({x:845.3,y:190.5},0).wait(1).to({x:847.5,y:189.3},0).wait(1).to({x:849.7,y:188},0).wait(1).to({x:851.8,y:186.8},0).wait(1).to({x:854,y:185.5},0).wait(1).to({x:856.2,y:184.3},0).wait(1).to({x:858.4,y:183.1},0).wait(1));

	// Ebene 2
	this.instance_1 = new lib.Innsbruck_BahnBkgr();
	this.instance_1.setTransform(605,190.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(594.4,190.5,232.6,155.5);


(lib.in_sc2_layer4 = function() {
	this.initialize();

	// Ebene_1
	this.bahn = new lib.in_sc2_layer4_bahn_anim();
	this.bahn.setTransform(640,305.2,1,1,0,0,0,632.7,312);

	this.instance = new lib.Innsbruck_Layer02_04();
	this.instance.setTransform(4,0,1.05,1.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ANSIhI6jAAIAAxBIajAAg");
	this.shape.setTransform(716,275.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtQIhIAAxAIahAAIAARAg");
	this.shape_1.setTransform(716,275.5);

	this.addChild(this.shape_1,this.shape,this.instance,this.bahn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,0,2015.9,1133.9);


(lib.in_sc2_layer2_car_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.gotoAndStop(0);
	}
	this.frame_163 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(149).call(this.frame_163));

	// Ebene_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ECbfAKcUgQWgAIin7gCrQAvkijFhyQg9gkhOgNIhCgHQkvgcmFAEIlIAJQpwjYnMEqQiQBdhuCHQg3BDgaAwUgDmAAAhUsgBQIgroCQgqn8gCgEUAAVAADCfuACGUCgFACHAAFAADQAEABgICNQBBAIA1BKQANgJARgEQAIAnAXBbIAQArQAeBVATBoQAOBQAAAiQAABXgeBYQgeBYAAAlQAAATAMA1Ik5ABIg+AAgEiiFgKbIAAAAIAAAAg");
	mask.setTransform(1034.8,591);

	// Car_hover Kopie
	this.instance = new lib.in_sc2_layer2_car();
	this.instance.setTransform(2003.9,630.5,1,1,0,0,0,63,51.5);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({x:1995.3},0).wait(1).to({x:1986.7},0).wait(1).to({x:1979.8},0).wait(1).to({x:1972.9},0).wait(1).to({x:1966},0).wait(1).to({x:1959.1},0).wait(1).to({x:1952.3},0).wait(1).to({x:1944.9,y:630.4},0).wait(1).to({x:1937.5,y:630.3},0).wait(1).to({x:1930.1,y:630.2},0).wait(1).to({x:1922.8,y:630},0).wait(1).to({x:1915.4,y:629.9},0).wait(1).to({x:1908,y:629.8},0).wait(1).to({x:1900.7,y:629.7},0).wait(1).to({x:1889.2,y:629.6},0).wait(1).to({x:1877.7,y:629.5},0).wait(1).to({x:1866.3},0).wait(1).to({x:1854.8,y:629.4},0).wait(1).to({x:1843.3,y:629.3},0).wait(1).to({x:1831.9,y:629.2},0).wait(1).to({x:1823.3,y:629.1},0).wait(1).to({x:1814.7},0).wait(1).to({x:1806.1,y:629},0).wait(1).to({x:1797.5,y:628.9},0).wait(1).to({x:1788.9},0).wait(1).to({x:1780.3,y:628.8},0).wait(1).to({x:1771.7,y:628.7},0).wait(1).to({x:1763.1,y:628.6},0).wait(1).to({x:1754.5},0).wait(1).to({x:1745.9,y:628.5},0).wait(1).to({x:1736.5,y:628.4},0).wait(1).to({x:1727.1},0).wait(1).to({x:1717.8,y:628.3},0).wait(1).to({x:1708.4,y:628.2},0).wait(1).to({x:1699,y:628.1},0).wait(1).to({x:1689.6},0).wait(1).to({x:1680.2,y:628},0).wait(1).to({x:1670.8,y:627.9},0).wait(1).to({x:1661.5,y:627.8},0).wait(1).to({x:1652.1},0).wait(1).to({x:1642.7,y:627.7},0).wait(1).to({x:1630.7,y:627.6},0).wait(1).to({x:1618.6,y:627.5},0).wait(1).to({x:1606.6,y:627.4},0).wait(1).to({x:1594.5,y:627.3},0).wait(1).to({x:1582.5,y:627.2},0).wait(1).to({x:1570.5,y:627.1},0).wait(1).to({x:1558.4,y:627},0).wait(1).to({x:1546.4,y:626.9},0).wait(1).to({x:1534.3,y:626.8},0).wait(1).to({x:1522.3},0).wait(1).to({x:1508.6,y:626.6},0).wait(1).to({x:1494.8,y:626.5},0).wait(1).to({x:1481.1,y:626.4},0).wait(1).to({x:1467.3,y:626.3},0).wait(1).to({x:1453.6,y:626.2},0).wait(1).to({x:1439.8,y:626.1},0).wait(1).to({x:1426.1,y:626},0).wait(1).to({x:1412.3,y:625.9},0).wait(1).to({x:1398.6,y:625.8},0).wait(1).to({x:1384.8,y:625.7},0).wait(1).to({x:1370.7,y:625.6},0).wait(1).to({x:1356.7,y:625.5},0).wait(1).to({x:1342.6,y:625.4},0).wait(1).to({x:1328.5,y:625.3},0).wait(1).to({x:1314.5,y:625.2},0).wait(1).to({x:1300.4,y:625},0).wait(1).to({x:1286.3,y:624.9},0).wait(1).to({x:1272.3,y:624.8},0).wait(1).to({x:1258.2,y:624.7},0).wait(1).to({x:1244.1,y:624.6},0).wait(1).to({x:1230.1,y:624.5},0).wait(1).to({x:1216.8,y:624.4},0).wait(1).to({x:1203.6,y:624.3},0).wait(1).to({x:1190.4,y:624.2},0).wait(1).to({x:1177.1,y:624.1},0).wait(1).to({x:1163.9,y:624},0).wait(1).to({x:1150.7,y:623.9},0).wait(1).to({x:1137.5,y:623.8},0).wait(1).to({x:1124.2,y:623.7},0).wait(1).to({x:1111,y:623.6},0).wait(1).to({x:1097.8,y:623.5},0).wait(1).to({x:1084.6,y:623.4},0).wait(1).to({x:1071.3,y:623.3},0).wait(1).to({x:1058.1,y:623.2},0).wait(1).to({x:1044.6,y:623},0).wait(1).to({x:1031.1,y:622.9},0).wait(1).to({x:1017.6,y:622.8},0).wait(1).to({x:1004.1,y:622.7},0).wait(1).to({x:990.6,y:622.6},0).wait(1).to({x:977.1,y:622.5},0).wait(1).to({x:963.6,y:622.4},0).wait(1).to({x:950,y:622.3},0).wait(1).to({x:936.5,y:622.2},0).wait(1).to({x:923,y:622.1},0).wait(1).to({x:909.5,y:622},0).wait(1).to({x:896,y:621.9},0).wait(1).to({x:882.5,y:621.8},0).wait(1).to({x:869,y:621.7},0).wait(1).to({x:851.8,y:621.6},0).wait(1).to({x:834.6,y:621.4},0).wait(1).to({x:817.4,y:621.3},0).wait(1).to({x:800.2,y:621.2},0).wait(1).to({x:783,y:621},0).wait(1).to({x:765.8,y:620.9},0).wait(1).to({x:748.6,y:620.7},0).wait(1).to({x:731.4,y:620.6},0).wait(1).to({x:714.2,y:620.5},0).wait(1).to({x:697,y:620.3},0).wait(1).to({x:679.8,y:620.2},0).wait(1).to({x:662.7,y:620.1},0).wait(1).to({x:644,y:619.9},0).wait(1).to({x:625.4,y:619.8},0).wait(1).to({x:606.8,y:619.6},0).wait(1).to({x:588.1,y:619.5},0).wait(1).to({x:569.5,y:619.3},0).wait(1).to({x:550.9,y:619.2},0).wait(1).to({x:532.2,y:619},0).wait(1).to({x:513.6,y:618.9},0).wait(1).to({x:495,y:618.7},0).wait(1).to({x:476.4,y:618.6},0).wait(1).to({x:457.7,y:618.4},0).wait(1).to({x:439.1,y:618.3},0).wait(1).to({x:419,y:618.1},0).wait(1).to({x:399,y:618},0).wait(1).to({x:378.9,y:617.8},0).wait(1).to({x:358.9,y:617.7},0).wait(1).to({x:338.8,y:617.5},0).wait(1).to({x:318.7,y:617.4},0).wait(1).to({x:298.7,y:617.2},0).wait(1).to({x:278.6,y:617.1},0).wait(1).to({x:258.5,y:616.9},0).wait(1).to({x:238.5,y:616.8},0).wait(1).to({x:218.4,y:616.6},0).wait(1).to({x:198.4,y:616.5},0).wait(1).to({x:178.5,y:616.3},0).wait(1).to({x:158.7,y:616.1},0).wait(1).to({x:138.9,y:616},0).wait(1).to({x:119,y:615.8},0).wait(1).to({x:99.2,y:615.7},0).wait(1).to({x:79.4,y:615.5},0).wait(1).to({x:59.6,y:615.4},0).wait(1).to({x:39.8,y:615.2},0).wait(1).to({x:20,y:615.1},0).wait(1).to({x:0.1,y:614.9},0).wait(1).to({x:-19.5,y:614.8},0).wait(1).to({x:-39.3,y:614.6},0).wait(1).to({x:-59.2,y:614.5},0).wait(1));

	// Car_hover
	this.instance_1 = new lib.in_sc2_layer2_car();
	this.instance_1.setTransform(2004,630.5,1,1,0,0,0,63,51.5);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:1998.2},0).wait(1).to({x:1993.6},0).wait(1).to({x:1990},0).wait(1).to({x:1987.2},0).wait(1).to({x:1984.9},0).wait(1).to({x:1983.1},0).wait(1).to({x:1981.6},0).wait(1).to({x:1980.2},0).wait(1).to({x:1983.7},0).wait(1).to({x:1987.9},0).wait(1).to({x:1992},0).wait(1).to({x:1996},0).wait(1).to({x:2000},0).wait(1).to({x:2004},0).to({_off:true},1).wait(149));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1930.7,579,126,103);


(lib.in_sc2_layer2 = function() {
	this.initialize();

	// Ebene_1
	this.auto = new lib.in_sc2_layer2_car_anim();
	this.auto.setTransform(1024.5,604.2,1,1,0,0,0,1025.9,602.8);

	this.instance = new lib.Innsbruck_Layer02_02();
	this.instance.setTransform(0,0,1.1,1.1);

	this.addChild(this.instance,this.auto);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2111.9,1188);


(lib.in_sc2 = function(mode,startPosition,loop) {
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

	// Layer1_In
	this.instance = new lib.in_sc2_layer1();
	this.instance.setTransform(955.8,1359.8,1,1,0,0,0,1092,614.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:1287},0).wait(1).to({y:1214.3},0).wait(1).to({y:1141.6},0).wait(1).to({y:1068.8},0).wait(1).to({y:996.1},0).wait(1).to({y:923.5},0).wait(1).to({y:850.7},0).wait(1).to({y:777.9},0).wait(1).to({y:705.2},0).wait(1).to({y:632.5},0).wait(1).to({y:559.8},0).to({_off:true},1).wait(13));

	// Layer2_In
	this.instance_1 = new lib.in_sc2_layer2();
	this.instance_1.setTransform(-1379.9,1316,1,1,0,0,0,1056,594);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:1053.9,x:-1169.1,y:1246},0).wait(1).to({x:-956.4,y:1176},0).wait(1).to({x:-743.9,y:1106.1},0).wait(1).to({x:-530.9,y:1036},0).wait(1).to({x:-318.2,y:966},0).wait(1).to({x:-105.7,y:896.1},0).wait(1).to({x:106.8,y:826.1},0).wait(1).to({x:319.8,y:756},0).wait(1).to({x:532.5,y:686},0).wait(1).to({x:745.2,y:616},0).wait(1).to({x:957.9,y:546},0).to({_off:true},1).wait(13));

	// Layer3_In
	this.instance_2 = new lib.in_sc2_layer3();
	this.instance_2.setTransform(3160,1560.5,1,1,0,0,0,1032,580.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:2960,y:1469.6},0).wait(1).to({x:2760,y:1378.7},0).wait(1).to({x:2560.2,y:1287.9},0).wait(1).to({x:2360,y:1196.9},0).wait(1).to({x:2160,y:1106},0).wait(1).to({x:1960.2,y:1015.1},0).wait(1).to({x:1760.2,y:924.2},0).wait(1).to({x:1560,y:833.2},0).wait(1).to({x:1360,y:742.3},0).wait(1).to({x:1160,y:651.4},0).wait(1).to({x:960,y:560.5},0).to({_off:true},1).wait(13));

	// Layer4_In
	this.instance_3 = new lib.in_sc2_layer4();
	this.instance_3.setTransform(3159.9,-721.9,1,1,0,0,0,1007.9,567);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:1011.9,x:2963.9,y:-605.4},0).wait(1).to({x:2763.9,y:-489},0).wait(1).to({x:2564.1,y:-372.8},0).wait(1).to({x:2363.9,y:-256.3},0).wait(1).to({x:2163.9,y:-139.9},0).wait(1).to({x:1964.1,y:-23.7},0).wait(1).to({x:1764.1,y:92.5},0).wait(1).to({x:1563.9,y:209},0).wait(1).to({x:1363.9,y:325.3},0).wait(1).to({x:1163.9,y:441.7},0).wait(1).to({x:963.9,y:558},0).to({_off:true},1).wait(13));

	// Layer5_In
	this.instance_4 = new lib.in_sc2_layer5();
	this.instance_4.setTransform(-559.9,-529.4,1,1,0,0,0,984,553.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:-421.6,y:-431.1},0).wait(1).to({x:-283.4,y:-332.9},0).wait(1).to({x:-145.3,y:-234.8},0).wait(1).to({x:-7,y:-136.5},0).wait(1).to({x:131,y:-38.3},0).wait(1).to({x:269,y:59.5},0).wait(1).to({x:407.2,y:157.7},0).wait(1).to({x:545.5,y:256},0).wait(1).to({x:683.7,y:354.2},0).wait(1).to({x:821.9,y:452.4},0).wait(1).to({x:960,y:550.5},0).to({_off:true},1).wait(13));

	// Layer1_Out
	this.instance_5 = new lib.in_sc2_layer1();
	this.instance_5.setTransform(955.8,559.8,1,1,0,0,0,1092,614.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).wait(1).to({y:654.3},0).wait(1).to({y:748.8},0).wait(1).to({y:843.3},0).wait(1).to({y:937.9},0).wait(1).to({y:1032.5},0).wait(1).to({y:1126.9},0).wait(1).to({y:1221.5},0).wait(1).to({y:1316.1},0).wait(1).to({y:1410.7},0).wait(1).to({y:1505.2},0).wait(1).to({y:1599.8},0).wait(1));

	// Layer2_Out
	this.instance_6 = new lib.in_sc2_layer2();
	this.instance_6.setTransform(960,546,1,1,0,0,0,1056,594);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).wait(1).to({regX:1053.9,x:772.5,y:652.4},0).wait(1).to({x:587,y:758.7},0).wait(1).to({x:401.8,y:865},0).wait(1).to({x:216.1,y:971.5},0).wait(1).to({x:30.7,y:1077.8},0).wait(1).to({x:-154.4,y:1184.1},0).wait(1).to({x:-339.8,y:1290.4},0).wait(1).to({x:-525.5,y:1396.9},0).wait(1).to({x:-710.9,y:1503.3},0).wait(1).to({x:-896.4,y:1609.6},0).wait(1).to({x:-1081.9,y:1716},0).wait(1));

	// Layer3_Out
	this.instance_7 = new lib.in_sc2_layer3();
	this.instance_7.setTransform(960,560.5,1,1,0,0,0,1032,580.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).wait(1).to({x:1109.1,y:680.5},0).wait(1).to({x:1258.2,y:800.5},0).wait(1).to({x:1407.1,y:920.4},0).wait(1).to({x:1556.4,y:1040.5},0).wait(1).to({x:1705.5,y:1160.5},0).wait(1).to({x:1854.4,y:1280.4},0).wait(1).to({x:2003.5,y:1400.4},0).wait(1).to({x:2152.7,y:1520.5},0).wait(1).to({x:2301.8,y:1640.5},0).wait(1).to({x:2450.9,y:1760.5},0).wait(1).to({x:2600,y:1880.5},0).wait(1));

	// Layer4_Out
	this.instance_8 = new lib.in_sc2_layer4();
	this.instance_8.setTransform(959.9,558,1,1,0,0,0,1007.9,567);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(13).to({_off:false},0).wait(1).to({regX:1011.9,x:763.9,y:478},0).wait(1).to({x:563.9,y:398},0).wait(1).to({x:364.1,y:318.1},0).wait(1).to({x:163.9,y:238},0).wait(1).to({x:-35.9,y:158},0).wait(1).to({x:-235.7,y:78.1},0).wait(1).to({x:-435.7,y:-1.7},0).wait(1).to({x:-635.9,y:-81.8},0).wait(1).to({x:-835.9,y:-161.8},0).wait(1).to({x:-1035.9,y:-241.8},0).wait(1).to({x:-1235.9,y:-321.8},0).wait(1));

	// Layer5_Out
	this.instance_9 = new lib.in_sc2_layer5();
	this.instance_9.setTransform(960,550.5,1,1,0,0,0,984,553.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(13).to({_off:false},0).wait(1).to({x:1061.8,y:466.9},0).wait(1).to({x:1163.6,y:383.3},0).wait(1).to({x:1265.4,y:299.7},0).wait(1).to({x:1367.3,y:216},0).wait(1).to({x:1469.1,y:132.4},0).wait(1).to({x:1570.8,y:48.8},0).wait(1).to({x:1672.6,y:-34.6},0).wait(1).to({x:1774.5,y:-118.3},0).wait(1).to({x:1876.4,y:-202},0).wait(1).to({x:1978.2,y:-285.6},0).wait(1).to({x:2080,y:-369.3},0).wait(1));

	// Layer6
	this.instance_10 = new lib.in_sc2_hg();
	this.instance_10.setTransform(960,540,1,1,0,0,0,960,540);

	this.l1 = new lib.in_sc2_layer1();
	this.l1.setTransform(956.8,559.8,1,1,0,0,0,1092,614.2);

	this.l2 = new lib.in_sc2_layer2();
	this.l2.setTransform(960,546,1,1,0,0,0,1056,594);

	this.l3 = new lib.in_sc2_layer3();
	this.l3.setTransform(960,560.5,1,1,0,0,0,1032,580.5);

	this.l4 = new lib.in_sc2_layer4();
	this.l4.setTransform(959.9,558,1,1,0,0,0,1007.9,567);

	this.l5 = new lib.in_sc2_layer5();
	this.l5.setTransform(960,550.5,1,1,0,0,0,984,553.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_10},{t:this.l5},{t:this.l4},{t:this.l3},{t:this.l2},{t:this.l1}]},12).to({state:[{t:this.instance_10}]},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2010.5,-1056.2,5802.6,3015.5);


(lib.in_sc1_layer1_rad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":18});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.gotoAndStop(0);
	}
	this.frame_109 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(92).call(this.frame_109));

	// Ebene_1
	this.instance = new lib.in_sc1_layer1_rad_animation();
	this.instance.setTransform(41.5,35,1,1,0,0,0,41.5,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-3.1,x:40.5,y:36.1},0).wait(1).to({rotation:-6.5,x:39.3,y:37.2},0).wait(1).to({rotation:-9.8,x:38.2,y:38.3},0).wait(1).to({rotation:-13.1,x:37.1,y:39.5},0).wait(1).to({rotation:-16.5,x:36,y:40.6},0).wait(1).to({rotation:-19.8,x:34.9,y:41.7},0).wait(1).to({rotation:-23.1,x:33.8,y:42.8},0).wait(1).to({rotation:-26.5,x:32.7,y:43.9},0).wait(1).to({rotation:-29.8,x:31.6,y:45},0).wait(1).to({rotation:-26,x:32.8,y:43.8},0).wait(1).to({rotation:-22.3,x:34.1,y:42.5},0).wait(1).to({rotation:-18.5,x:35.3,y:41.2},0).wait(1).to({rotation:-14.8,x:36.6,y:40},0).wait(1).to({rotation:-11,x:37.8,y:38.8},0).wait(1).to({rotation:-7.3,x:39,y:37.5},0).wait(1).to({rotation:-3.5,x:40.3,y:36.2},0).wait(1).to({rotation:0,x:41.5,y:35},0).wait(1).wait(1).to({rotation:-3.9,x:40.7,y:35.9},0).wait(1).to({rotation:-8,x:39.8,y:36.8},0).wait(1).to({rotation:-12.1,x:38.8,y:37.7},0).wait(1).to({rotation:-16.2,x:37.9,y:38.6},0).wait(1).to({rotation:-20.3,x:37.1,y:39.6},0).wait(1).to({rotation:-24.3,x:36.1,y:40.5},0).wait(1).to({rotation:-28.4,x:35.2,y:41.3},0).wait(1).to({rotation:-32.5,x:34.3,y:42.3},0).wait(1).to({rotation:-36.6,x:33.3,y:43.2},0).wait(1).to({rotation:-40.7,x:32.5,y:44.1},0).wait(1).to({rotation:-44.8,x:31.6,y:45},0).wait(1).to({rotation:-41.8,x:12.6,y:58.5},0).wait(1).to({rotation:-38.8,x:-6.3,y:72},0).wait(1).to({rotation:-35.8,x:-25.2,y:85.5},0).wait(1).to({rotation:-32.8,x:-44.2,y:99},0).wait(1).to({rotation:-29.8,x:-63.3,y:112.5},0).wait(1).to({rotation:-26.7,x:-82.2,y:126},0).wait(1).to({rotation:-23.7,x:-101.2,y:139.5},0).wait(1).to({rotation:-20.7,x:-120.3,y:153},0).wait(1).to({rotation:-17.7,x:-139.2,y:166.5},0).wait(1).to({rotation:-14.7,x:-158.3,y:180},0).wait(1).to({rotation:-13.2,x:-178.3,y:186.1},0).wait(1).to({rotation:-11.7,x:-198.3,y:192.2},0).wait(1).to({rotation:-10.2,x:-218.2,y:198.3},0).wait(1).to({rotation:-8.7,x:-238.2,y:204.4},0).wait(1).to({rotation:-7.2,x:-258.2,y:210.5},0).wait(1).to({rotation:-5.6,x:-278.2,y:216.6},0).wait(1).to({rotation:-4.1,x:-298.2,y:222.7},0).wait(1).to({rotation:-2.6,x:-318.3,y:228.8},0).wait(1).to({rotation:-1.1,x:-338.2,y:234.9},0).wait(1).to({rotation:0.2,x:-358.2,y:241},0).wait(1).to({rotation:0.2,x:-378.2,y:242.5},0).wait(1).to({x:-398.2,y:244},0).wait(1).to({x:-418.2,y:245.5},0).wait(1).to({x:-438.2,y:247},0).wait(1).to({x:-458.2,y:248.5},0).wait(1).to({x:-478.2,y:250},0).wait(1).to({x:-498.2,y:251.5},0).wait(1).to({x:-518.2,y:253},0).wait(1).to({x:-538.2,y:254.5},0).wait(1).to({x:-558.2,y:256},0).wait(1).to({x:-575.2,y:255.2},0).wait(1).to({x:-592.3,y:254.4},0).wait(1).to({rotation:0.1,x:-609.2,y:253.6},0).wait(1).to({x:-626.2,y:252.8},0).wait(1).to({x:-643.2,y:252},0).wait(1).to({x:-660.2,y:251.2},0).wait(1).to({x:-677.2,y:250.4},0).wait(1).to({rotation:0,x:-694.2,y:249.6},0).wait(1).to({x:-711.2,y:248.8},0).wait(1).to({x:-728.3,y:248},0).wait(1).to({rotation:1.5,x:-740.2,y:246.8},0).wait(1).to({rotation:3,x:-752.3,y:245.6},0).wait(1).to({rotation:4.5,x:-764.3,y:244.4},0).wait(1).to({rotation:6,x:-776.3,y:243.2},0).wait(1).to({rotation:7.5,x:-788.2,y:242},0).wait(1).to({rotation:9,x:-800.2,y:240.8},0).wait(1).to({rotation:10.5,x:-812.3,y:239.6},0).wait(1).to({rotation:12,x:-824.3,y:238.4},0).wait(1).to({rotation:13.5,x:-836.2,y:237.2},0).wait(1).to({rotation:15,x:-848.2,y:236},0).wait(1).to({x:-858.9,y:234.4},0).wait(1).to({x:-869.6,y:232.8},0).wait(1).to({x:-880.3,y:231.2},0).wait(1).to({x:-891,y:229.6},0).wait(1).to({x:-901.7,y:228},0).wait(1).to({x:-912.4,y:226.4},0).wait(1).to({x:-923.1,y:224.8},0).wait(1).to({x:-933.8,y:223.2},0).wait(1).to({x:-944.5,y:221.6},0).wait(1).to({x:-955.2,y:220},0).wait(1).to({x:-964.8,y:218.1},0).wait(1).to({x:-974.4,y:216.2},0).wait(1).to({x:-984,y:214.3},0).wait(1).to({x:-993.6,y:212.4},0).wait(1).to({x:-1003.2,y:210.5},0).wait(1).to({x:-1012.8,y:208.6},0).wait(1).to({x:-1022.4,y:206.7},0).wait(1).to({x:-1032,y:204.8},0).wait(1).to({x:-1041.6,y:202.9},0).wait(1).to({x:-1051.2,y:201},0).wait(1).to({x:-1059.2,y:198.6},0).wait(1).to({x:-1067.2,y:196.2},0).wait(1).to({x:-1075.2,y:193.8},0).wait(1).to({x:-1083.2,y:191.4},0).wait(1).to({x:-1091.2,y:189},0).wait(1).to({x:-1099.2,y:186.6},0).wait(1).to({x:-1107.2,y:184.2},0).wait(1).to({x:-1115.2,y:181.8},0).wait(1).to({x:-1123.2,y:179.4},0).wait(1).to({x:-1131.2,y:177},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-2.2,90.4,79);


(lib.in_sc1_layer1_godel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.gotoAndStop(0);
	}
	this.frame_243 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(233).call(this.frame_243));

	// Ebene_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AYuZAQnxhIkZgrQkjgupVixQpOiuqxjzQo4jJrJjIQlkhjjzg8UAnYgfOgABgABUA9/AG5AABgABUgABAABgNHAurQlmgwnQhCgEAysgT6IAAAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:376.4,y:-36.5}).wait(68).to({graphics:null,x:0,y:0}).wait(176));

	// Ebene_1
	this.instance = new lib.in_sc1_layer1_godel_animation();
	this.instance.setTransform(266.5,87.9,0.258,0.258,0,0,0,223.2,212.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:223,regY:212.5,x:270.7,y:86.1},0).wait(1).to({x:275,y:84.4},0).wait(1).to({x:279.3,y:82.7},0).wait(1).to({x:283.6,y:81},0).wait(1).to({scaleY:0.26,x:287.9,y:79.3},0).wait(1).to({x:283.7,y:81.1},0).wait(1).to({x:279.5,y:82.8},0).wait(1).to({x:275.2,y:84.6},0).wait(1).to({x:271,y:86.3},0).wait(1).to({x:266.8,y:88.1},0).wait(1).to({x:265.7},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:267.6,y:87.4},0).wait(1).to({scaleY:0.26,x:269.4,y:86.7},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:271.2,y:86},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:273,y:85.4},0).wait(1).to({scaleX:0.26,x:274.9,y:84.7},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:276.7,y:84},0).wait(1).to({scaleY:0.26,x:278.5,y:83.4},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:280.4,y:82.7},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:282.2,y:82},0).wait(1).to({scaleX:0.27,x:284,y:81.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:285.8,y:80.6},0).wait(1).to({scaleY:0.27,x:287.7,y:80},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:289.5,y:79.3},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:291.3,y:78.6},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:294.6,y:77.6},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:297.9,y:76.6},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:301.2,y:75.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:304.6,y:74.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:307.9,y:73.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:311.2,y:72.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:314.5,y:71.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:317.8,y:70.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:321.1,y:69.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:324.5,y:68.6},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:327.8,y:67.6},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:331.1,y:66.6},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:334.4,y:65.6},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:337.7,y:64.6},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:340.8,y:63.5},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:343.7,y:62.4},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:346.7,y:61.3},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:349.7,y:60.2},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:352.7,y:59},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:355.7,y:57.9},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:358.7,y:56.8},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:361.7,y:55.6},0).wait(1).to({scaleX:0.31,scaleY:0.3,x:364.7,y:54.5},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:367.7,y:53.4},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:370.7,y:52.2},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:373.7,y:51.1},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:376.7,y:50},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:379.7,y:48.8},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:382.7,y:47.7},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:387,y:46.2},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:391.4,y:44.8},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:395.7,y:43.3},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:400,y:41.8},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:404.4,y:40.3},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:408.7,y:38.9},0).wait(1).to({scaleX:0.33,scaleY:0.32,x:413,y:37.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:417.4,y:35.9},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:421.7,y:34.4},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:426.1,y:33},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:430.4,y:31.5},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:434.8,y:30},0).wait(1).to({scaleX:0.34,scaleY:0.33,x:439.1,y:28.5},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:443.4,y:27.1},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-0.5,x:451},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-1.2,x:458.6,y:27.3},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-1.9,x:466.2},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-2.6,x:473.7,y:27.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-3.3,x:481.4},0).wait(1).to({scaleX:0.38,scaleY:0.38,rotation:-4,x:488.9,y:27.6},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:-4.7,x:496.5},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-5.4,x:504.1,y:27.7},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-6.1,x:511.6,y:27.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:-6.8,x:519.2,y:27.9},0).wait(1).to({scaleX:0.42,scaleY:0.42,rotation:-7.5,x:526.8,y:28},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:-8.2,x:534.4,y:28.1},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:-8.9,x:541.9},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-9.6,x:549.5,y:28.2},0).wait(1).to({scaleX:0.45,scaleY:0.45,rotation:-10.3,x:557.1,y:28.3},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:-9.6,x:562.9,y:27.9},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:-8.9,x:568.7,y:27.6},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:-8.2,x:574.4,y:27.3},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-7.5,x:580.3,y:26.9},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:-6.8,x:586,y:26.6},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:-6.1,x:591.9,y:26.3},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:-5.4,x:597.7,y:25.9},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:-4.7,x:603.4,y:25.6},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:-4,x:609.2,y:25.2},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:-3.3,x:615,y:24.9},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-2.6,x:620.8,y:24.6},0).wait(1).to({scaleX:0.54,scaleY:0.54,rotation:-1.9,x:626.6,y:24.2},0).wait(1).to({scaleX:0.55,scaleY:0.54,rotation:-1.2,x:632.4,y:23.9},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:-0.5,x:638.2,y:23.5},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:0,x:644,y:23.2},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:0.4,x:651.3,y:22.5},0).wait(1).to({scaleX:0.58,scaleY:0.57,rotation:0.8,x:658.6,y:21.9},0).wait(1).to({scaleX:0.59,scaleY:0.58,rotation:1.2,x:665.8,y:21.2},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:1.6,x:673.1,y:20.6},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:2.1,x:680.4,y:19.9},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:2.5,x:687.7,y:19.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:2.9,x:694.9,y:18.6},0).wait(1).to({scaleX:0.63,scaleY:0.62,rotation:3.3,x:702.2,y:18},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:3.7,x:709.5,y:17.3},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:4.1,x:716.8,y:16.7},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:4.5,x:724.1,y:16},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:4.9,x:731.3,y:15.4},0).wait(1).to({scaleX:0.67,scaleY:0.66,rotation:5.3,x:738.7,y:14.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:5.8,x:745.9,y:14.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:5.3,x:752.5,y:14.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:4.9,x:759.1,y:15.4},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:4.5,x:765.6,y:16.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:4.1,x:772.2,y:16.8},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:3.7,x:778.8,y:17.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:3.3,x:785.4,y:18.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:2.9,x:792,y:18.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:2.5,x:798.5,y:19.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:2.1,x:805.1,y:20.2},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:1.6,x:811.7,y:20.9},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:1.2,x:818.3,y:21.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:0.8,x:824.8,y:22.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:0.4,x:831.4,y:22.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:0,x:838,y:23.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-0.2,x:846.7,y:22.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-0.7,x:855.4,y:22.1},0).wait(1).to({scaleX:0.82,scaleY:0.81,rotation:-1.1,x:864,y:21.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-1.6,x:872.6,y:20.6},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-2,x:881.3,y:19.8},0).wait(1).to({scaleX:0.83,scaleY:0.82,rotation:-2.5,x:890,y:19.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-2.9,x:898.6,y:18.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-3.4,x:907.3,y:17.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-3.8,x:915.9,y:16.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-4.3,x:924.6,y:16.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-4.7,x:933.3,y:15.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-5.1,x:941.9,y:14.5},0).wait(1).to({scaleX:0.85,scaleY:0.84,rotation:-5.6,x:950.6,y:13.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-6,x:959.2,y:13.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-6.5,x:967.9,y:12.4},0).wait(1).to({scaleX:0.86,scaleY:0.85,rotation:-6,x:976.6,y:10.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-5.6,x:985.2,y:8.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-5.1,x:993.9,y:6.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-4.7,x:1002.5,y:4.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-4.3,x:1011.2,y:2.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-3.8,x:1019.9,y:0.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-3.4,x:1028.5,y:-1.3},0).wait(1).to({scaleX:0.88,scaleY:0.87,rotation:-2.9,x:1037.2,y:-3.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-2.5,x:1045.8,y:-5.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-2,x:1054.5,y:-7.1},0).wait(1).to({scaleX:0.89,scaleY:0.88,rotation:-1.6,x:1063.2,y:-9.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-1.1,x:1071.8,y:-11},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-0.7,x:1080.5,y:-13.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-0.2,x:1089.1,y:-15},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:0,x:1097.8,y:-17},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:0.4,x:1107.2,y:-18.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:0.8,x:1116.7,y:-20.8},0).wait(1).to({scaleX:0.91,scaleY:0.9,rotation:1.2,x:1126.1,y:-22.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:1.6,x:1135.5,y:-24.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:2,x:1144.9,y:-26.4},0).wait(1).to({scaleX:0.92,scaleY:0.91,rotation:2.4,x:1154.4,y:-28.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:2.9,x:1163.8,y:-30.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:3.3,x:1173.3,y:-32.1},0).wait(1).to({scaleX:0.93,scaleY:0.92,rotation:3.7,x:1182.7,y:-34},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:4.1,x:1192.1,y:-35.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:4.5,x:1201.6,y:-37.8},0).wait(1).to({scaleX:0.94,scaleY:0.93,rotation:4.9,x:1210.9,y:-39.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:5.3,x:1220.4,y:-41.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:5.7,x:1229.8,y:-43.4},0).wait(1).to({scaleX:0.95,scaleY:0.94,rotation:5.3,x:1239.2,y:-44.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:4.9,x:1248.6,y:-45.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:4.5,x:1258.1,y:-46.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:4.1,x:1267.5,y:-47.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:3.7,x:1277,y:-48.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:3.3,x:1286.4,y:-49.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:2.9,x:1295.8,y:-50.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:2.4,x:1305.3,y:-51.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:2,x:1314.7,y:-52.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:1.6,x:1324.1,y:-53.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:1.2,x:1333.6,y:-54.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:0.8,x:1342.9,y:-55.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:0.4,x:1352.4,y:-56.9},0).wait(1).to({scaleX:0.99,scaleY:0.98,rotation:0,x:1361.8,y:-57.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-0.2,x:1370.5,y:-58.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.7,x:1379.3,y:-58.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.1,x:1388,y:-58.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-1.5,x:1396.8,y:-58.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-2,x:1405.5,y:-58.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-2.4,x:1414.3,y:-59},0).wait(1).to({scaleX:1.03,scaleY:1.02,rotation:-2.8,x:1423.1,y:-59.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-3.3,x:1431.8,y:-59.3},0).wait(1).to({scaleX:1.04,scaleY:1.03,rotation:-3.7,x:1440.6,y:-59.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:-4.2,x:1449.3,y:-59.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-4.6,x:1458.1,y:-59.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-5,x:1466.8,y:-60.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:-5.5,x:1475.5,y:-60.2},0).wait(1).to({scaleX:1.07,scaleY:1.06,rotation:-5.9,x:1484.3,y:-60.4},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:-6.3,x:1493,y:-60.6},0).wait(1).to({scaleX:1.08,scaleY:1.07,rotation:-6.8,x:1501.8,y:-60.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-6.2,x:1511.8,y:-62.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-5.7,x:1521.9,y:-65.1},0).wait(1).to({scaleX:1.09,scaleY:1.08,rotation:-5.2,x:1531.8,y:-67.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:-4.6,x:1541.8,y:-69.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:-4.1,x:1551.8,y:-71.7},0).wait(1).to({scaleX:1.1,scaleY:1.09,rotation:-3.6,x:1561.8,y:-73.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-3,x:1571.8,y:-76.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-2.5,x:1581.8,y:-78.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-1.9,x:1591.8,y:-80.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-1.4,x:1601.8,y:-82.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:-0.9,x:1611.8,y:-84.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:-0.3,x:1621.8,y:-87},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:0,x:1631.8,y:-89.2},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:0.2,x:1639.9,y:-90.1},0).wait(1).to({scaleX:1.13,scaleY:1.12,rotation:0.5,x:1648,y:-91},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:0.7,x:1656.2,y:-91.9},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:0.9,x:1664.3,y:-92.8},0).wait(1).to({scaleX:1.14,scaleY:1.13,rotation:1.2,x:1672.4,y:-93.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:1.4,x:1680.5,y:-94.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:1.6,x:1688.6,y:-95.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:1.9,x:1696.8,y:-96.4},0).wait(1).to({scaleX:1.15,scaleY:1.14,rotation:2.1,x:1704.9,y:-97.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:2.3,x:1713,y:-98.2},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:2.6,x:1721.1,y:-99.1},0).wait(1).to({scaleX:1.16,scaleY:1.15,rotation:2.8,x:1729.3,y:-100},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:3,x:1737.4,y:-100.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:3.3,x:1745.5,y:-101.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:3.5,x:1753.6,y:-102.7},0).wait(1).to({scaleX:1.17,scaleY:1.16,rotation:3.7,x:1761.8,y:-103.6},0).wait(1).to({rotation:3.5,x:1770.3,y:-104.9},0).wait(1).to({rotation:3.2,x:1778.9,y:-106.1},0).wait(1).to({rotation:2.9,x:1787.5,y:-107.4},0).wait(1).to({rotation:2.7,x:1796.1,y:-108.7},0).wait(1).to({rotation:2.4,x:1804.6,y:-110},0).wait(1).to({rotation:2.1,x:1813.2,y:-111.3},0).wait(1).to({rotation:1.9,x:1821.8,y:-112.6},0).wait(1).to({rotation:1.6,x:1830.4,y:-113.9},0).wait(1).to({rotation:1.3,x:1838.9,y:-115.1},0).wait(1).to({rotation:1.1,x:1847.5,y:-116.4},0).wait(1).to({rotation:0.8,x:1856.1,y:-117.7},0).wait(1).to({rotation:0.5,x:1864.6,y:-119},0).wait(1).to({rotation:0.3,x:1873.2,y:-120.3},0).wait(1).to({rotation:0,x:1881.8,y:-121.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(217.5,29.7,115,109.5);


(lib.in_sc3_layer2_dachl_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.gotoAndStop(0);
	}
	this.frame_42 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(28).call(this.frame_42));

	// Ebene_5
	this.instance = new lib.in_sc3_layer2_schindl();
	this.instance.setTransform(1647.5,205,1,1,0,0,0,24.5,21);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).wait(1).to({rotation:13.3,x:1643.6,y:228},0).wait(1).to({rotation:26.7,x:1639.7,y:250.9},0).wait(1).to({rotation:40,x:1635.7,y:273.9},0).wait(1).to({rotation:53.3,x:1631.8,y:296.9},0).wait(1).to({rotation:66.7,x:1627.8,y:319.8},0).wait(1).to({rotation:80,x:1623.9,y:342.8},0).wait(1).to({rotation:93.3,x:1620.1,y:365.8},0).wait(1).to({rotation:106.7,x:1616.1,y:388.7},0).wait(1).to({rotation:120,x:1612.2,y:411.6},0).wait(1).to({rotation:133.3,x:1608.3,y:434.6},0).wait(1).to({rotation:146.7,x:1604.3,y:457.6},0).wait(1).to({rotation:160,x:1600.4,y:480.5},0).wait(1).to({rotation:173.3,x:1596.4,y:503.5},0).wait(1).to({rotation:186.8,x:1592.5,y:526.5},0).wait(1).to({rotation:200.1,x:1588.7,y:549.4},0).wait(1).to({rotation:213.4,x:1584.7,y:572.4},0).wait(1).to({rotation:226.8,x:1580.7,y:595.4},0).wait(1).to({rotation:240.1,x:1576.8,y:618.4},0).wait(1).to({rotation:253.4,x:1572.9,y:641.3},0).wait(1).to({rotation:266.8,x:1569,y:664.3},0).wait(1).to({rotation:280.1,x:1565.1,y:687.2},0).wait(1).to({rotation:293.4,x:1561.1,y:710.2},0).wait(1).to({rotation:306.8,x:1557.2,y:733.2},0).wait(1).to({rotation:320.1,x:1553.3,y:756.1},0).wait(1).to({rotation:333.4,x:1549.3,y:779.1},0).wait(1).to({rotation:346.8,x:1545.4,y:802},0).wait(1).to({rotation:360,x:1541.5,y:825},0).wait(1));

	// Ebene_4
	this.instance_1 = new lib.in_sc3_layer2_dachl();
	this.instance_1.setTransform(1720.5,174,1,1,0,0,0,212.5,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:1.6},0).wait(1).to({rotation:3.1},0).wait(1).to({rotation:4.7},0).wait(1).to({rotation:6.2},0).wait(1).to({rotation:4.2},0).wait(1).to({rotation:2.1},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.9},0).wait(1).to({rotation:-3.9},0).wait(1).to({rotation:-2.9},0).wait(1).to({rotation:-1.9},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:0},0).wait(1).to({rotation:1},0).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1502.9,58.9,435.4,230.1);


(lib.in_sc3_layer2 = function() {
	this.initialize();

	// Ebene_1
	this.dachl = new lib.in_sc3_layer2_dachl_anim();
	this.dachl.setTransform(1719.9,172.5,1,1,0,0,0,1720.5,174);

	this.instance = new lib.Innsbruck_Layer03_02();
	this.instance.setTransform(0,0,1.023,1.023);

	this.addChild(this.instance,this.dachl);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1964,1104.8);


(lib.in_sc3_layer1_personen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":22});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.gotoAndStop(0);
	}
	this.frame_92 = function() {
		this.gotoAndStop(0);
		this.photoTrigger.dispatchEvent(new Event('click'));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(71).call(this.frame_92));

	// personen3
	this.instance = new lib.Innsbruck_Layer03_Personen3();
	this.instance.setTransform(88,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},22).to({state:[{t:this.instance}]},21).to({state:[]},10).to({state:[{t:this.instance}]},20).to({state:[]},10).wait(10));

	// personen2
	this.instance_1 = new lib.Innsbruck_Layer03_Personen2();
	this.instance_1.setTransform(158,47);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},22).to({state:[{t:this.instance_1,p:{x:158,y:47}}]},11).to({state:[]},10).to({state:[{t:this.instance_1,p:{x:88,y:21}}]},20).to({state:[]},10).wait(20));

	// personen1
	this.instance_2 = new lib.Innsbruck_Layer03_Personen1();
	this.instance_2.setTransform(88,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},22).to({state:[]},11).to({state:[{t:this.instance_2}]},20).to({state:[]},10).to({state:[{t:this.instance_2}]},20).wait(10));

	// personen1_hover
	this.instance_3 = new lib.Innsbruck_Layer03_Personen1();
	this.instance_3.setTransform(100,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{x:100}}]}).to({state:[]},5).to({state:[{t:this.instance_3,p:{x:88}}]},11).to({state:[]},6).wait(71));

	// personen1.1_hover
	this.instance_4 = new lib.Innsbruck_Layer03_personen1_hover();
	this.instance_4.setTransform(88,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},5).to({state:[]},11).wait(77));

	// PhotoTrigger
	this.photoTrigger = new lib.in_sc3_layer1_photoTrigger();
	this.photoTrigger.setTransform(-15.9,1508.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.photoTrigger}]}).wait(93));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9,21,2081,1513.4);


(lib.in_sc3_layer1 = function() {
	this.initialize();

	// hg
	this.personen = new lib.in_sc3_layer1_personen();
	this.personen.setTransform(1050.9,567.5,1,1,0,0,0,1048,561);

	this.instance = new lib.Innsbruck_Layer03_01();
	this.instance.setTransform(0,0,1.046,1.046);

	this.addChild(this.instance,this.personen);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58,0,2081,1540.9);


(lib.in_sc3_photoX = function() {
	this.initialize();

	// Ebene 1
	this.close = new lib.in_sc3_photo_closeButton();
	this.close.setTransform(116.8,-216.5,0.796,0.796,7.5);

	this.instance = new lib.InnsbruckFoto();
	this.instance.setTransform(-440.9,-257.8);

	this.addChild(this.instance,this.close);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-440.9,-257.8,600,800);


(lib.in_sc3_photo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:0,"in":1,"action":20,"out":21});

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
	this.pic = new lib.in_sc3_photoX();
	this.pic.setTransform(-1112.4,386.8);

	this.timeline.addTween(cjs.Tween.get(this.pic).to({_off:true},1).wait(5).to({scaleX:1.3,scaleY:1.3,x:323.1,y:-786.6,_off:false},0).wait(1).to({regX:-140.7,regY:142.1,scaleX:1.28,scaleY:1.28,x:136,y:-540.9},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:132.2,y:-480.2},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:128.5,y:-419.6},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:124.8,y:-358.9},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:121,y:-298.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:117.3,y:-237.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:113.6,y:-177},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:109.8,y:-116.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:106.1,y:-55.8},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:102.4,y:4.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:98.6,y:65.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:94.9,y:125.9},0).wait(1).to({scaleX:1,scaleY:1,x:91.2,y:186.5},0).wait(1).to({regX:0,regY:0,x:232,y:44.5},0).wait(1).wait(1).to({regX:-140.7,regY:142.1,rotation:-1.9,x:103.1,y:248.1},0).wait(1).to({rotation:-4,x:115.3,y:309.5},0).wait(1).to({rotation:-6.2,x:127.6,y:370.6},0).wait(1).to({rotation:-8.3,x:140.1,y:431.7},0).wait(1).to({rotation:-10.4,x:152.8,y:492.4},0).wait(1).to({rotation:-12.5,x:165.6,y:552.9},0).wait(1).to({rotation:-14.7,x:178.5,y:613.2},0).wait(1).to({rotation:-16.8,x:191.6,y:673.3},0).wait(1).to({rotation:-18.9,x:204.8,y:733.1},0).wait(1).to({rotation:-21,x:218.2,y:792.7},0).wait(1).to({x:224.8,y:849.1},0).wait(1).to({x:231.4,y:905.5},0).wait(1).to({x:238,y:962},0).wait(1).to({x:244.6,y:1018.6},0).wait(1).to({x:251.2,y:1075},0).wait(1).to({x:257.8,y:1131.5},0).wait(1).to({x:264.4,y:1188},0).wait(1).to({x:271,y:1244.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1553.3,128.9,600,800);


(lib.in_sc1_layer1_In = function() {
	this.initialize();

	// Ebene_2
	this.gondel = new lib.in_sc1_layer1_godel();
	this.gondel.setTransform(681,994.5,1,1,0,0,0,223,212.5);

	// Ebene_1
	this.fahrrad = new lib.in_sc1_layer1_rad();
	this.fahrrad.setTransform(1968.5,848,1,1,0,0,0,41.5,35);

	this.instance = new lib.Innsbruck_01_layer01();
	this.instance.setTransform(0,0,1.125,1.125);

	this.addChild(this.instance,this.fahrrad,this.gondel);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2160,1215);


(lib.in_sc1 = function(mode,startPosition,loop) {
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

	// Layer1_In
	this.instance = new lib.in_sc1_layer1_In();
	this.instance.setTransform(-1279.9,890.5,1,1,0,0,0,1080,607.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-1076.1,y:861.4},0).wait(1).to({x:-872.5,y:832.3},0).wait(1).to({x:-669,y:803.3},0).wait(1).to({x:-465.2,y:774.1},0).wait(1).to({x:-261.6,y:745},0).wait(1).to({x:-58.1,y:716},0).wait(1).to({x:145.3,y:686.9},0).wait(1).to({x:349.1,y:657.8},0).wait(1).to({x:552.8,y:628.7},0).wait(1).to({x:756.4,y:599.6},0).wait(1).to({x:960,y:570.5},0).to({_off:true},1).wait(13));

	// Layer2_In
	this.instance_1 = new lib.in_sc1_layer2_In();
	this.instance_1.setTransform(3320,770,1,1,0,0,0,1040,585);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:3105.5,y:751.8},0).wait(1).to({x:2890.9,y:733.6},0).wait(1).to({x:2676.6,y:715.5},0).wait(1).to({x:2461.8,y:697.3},0).wait(1).to({x:2247.3,y:679.1},0).wait(1).to({x:2032.9,y:660.9},0).wait(1).to({x:1818.4,y:642.7},0).wait(1).to({x:1603.6,y:624.5},0).wait(1).to({x:1389.1,y:606.4},0).wait(1).to({x:1174.5,y:588.2},0).wait(1).to({x:960,y:570},0).to({_off:true},1).wait(13));

	// Layer3_In
	this.instance_2 = new lib.in_sc1_layer3_In();
	this.instance_2.setTransform(3440,405.8,1,1,0,0,0,1004,564.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:3214.5,y:420.4},0).wait(1).to({x:2989.1,y:434.9},0).wait(1).to({x:2763.9,y:449.5},0).wait(1).to({x:2538.2,y:464},0).wait(1).to({x:2312.7,y:478.6},0).wait(1).to({x:2087.5,y:493.1},0).wait(1).to({x:1862,y:507.7},0).wait(1).to({x:1636.4,y:522.2},0).wait(1).to({x:1410.9,y:536.8},0).wait(1).to({x:1185.5,y:551.3},0).wait(1).to({x:960,y:565.8},0).to({_off:true},1).wait(13));

	// Layer4_In
	this.instance_3 = new lib.in_sc1_layer4_In();
	this.instance_3.setTransform(-1359.9,420,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-1148.8,y:431},0).wait(1).to({x:-937.9,y:441.9},0).wait(1).to({x:-727.2,y:452.8},0).wait(1).to({x:-516.1,y:463.7},0).wait(1).to({x:-305.2,y:474.6},0).wait(1).to({x:-94.5,y:485.5},0).wait(1).to({x:116.2,y:496.4},0).wait(1).to({x:327.3,y:507.3},0).wait(1).to({x:538.2,y:518.2},0).wait(1).to({x:749.1,y:529.1},0).wait(1).to({x:960,y:540},0).to({_off:true},1).wait(13));

	// Layer1_Out
	this.instance_4 = new lib.in_sc1_layer1_In();
	this.instance_4.setTransform(960,570.5,1,1,0,0,0,1080,607.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).wait(1).to({x:1170.9,y:599.6},0).wait(1).to({x:1381.8,y:628.7},0).wait(1).to({x:1592.5,y:657.7},0).wait(1).to({x:1803.6,y:686.9},0).wait(1).to({x:2014.5,y:716},0).wait(1).to({x:2225.2,y:745},0).wait(1).to({x:2436.2,y:774.1},0).wait(1).to({x:2647.3,y:803.2},0).wait(1).to({x:2858.2,y:832.3},0).wait(1).to({x:3069.1,y:861.4},0).wait(1).to({x:3280,y:890.5},0).wait(1));

	// Layer2_Out
	this.instance_5 = new lib.in_sc1_layer2_Out();
	this.instance_5.setTransform(960,570,1,1,0,0,0,1040,585);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).wait(1).to({x:712.8,y:588.2},0).wait(1).to({x:465.5,y:606.4},0).wait(1).to({x:218.5,y:624.5},0).wait(1).to({x:-28.8,y:642.7},0).wait(1).to({x:-276.1,y:660.9},0).wait(1).to({x:-523.1,y:679.1},0).wait(1).to({x:-770.4,y:697.3},0).wait(1).to({x:-1017.9,y:715.5},0).wait(1).to({x:-1265.2,y:733.6},0).wait(1).to({x:-1512.5,y:751.8},0).wait(1).to({x:-1759.8,y:770},0).wait(1));

	// Layer3_Out
	this.instance_6 = new lib.in_sc1_layer3_Out();
	this.instance_6.setTransform(960,565.8,1,1,0,0,0,1004,564.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).wait(1).to({x:731,y:554.9},0).wait(1).to({x:501.9,y:544},0).wait(1).to({x:273,y:533.1},0).wait(1).to({x:43.7,y:522.2},0).wait(1).to({x:-185.2,y:511.3},0).wait(1).to({x:-414.1,y:500.4},0).wait(1).to({x:-643.2,y:489.5},0).wait(1).to({x:-872.5,y:478.6},0).wait(1).to({x:-1101.6,y:467.7},0).wait(1).to({x:-1330.7,y:456.8},0).wait(1).to({x:-1559.8,y:445.8},0).wait(1));

	// Layer4_Out
	this.instance_7 = new lib.in_sc1_layer4_Out();
	this.instance_7.setTransform(960,540,1,1,0,0,0,960,540);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).wait(1).to({x:1149.1,y:532.8},0).wait(1).to({x:1338.2,y:525.5},0).wait(1).to({x:1527.1,y:518.2},0).wait(1).to({x:1716.4,y:511},0).wait(1).to({x:1905.5,y:503.7},0).wait(1).to({x:2094.4,y:496.4},0).wait(1).to({x:2283.4,y:489.1},0).wait(1).to({x:2472.7,y:481.9},0).wait(1).to({x:2661.8,y:474.6},0).wait(1).to({x:2850.9,y:467.3},0).wait(1).to({x:3040,y:460},0).wait(1));

	// Ebene_1
	this.instance_8 = new lib.in_sc1_bkg();
	this.instance_8.setTransform(844,23.9,1,1,0,0,0,960,540);

	this.l1 = new lib.in_sc1_layer1_In();
	this.l1.setTransform(960,570.5,1,1,0,0,0,1080,607.5);

	this.l2 = new lib.in_sc1_layer2();
	this.l2.setTransform(960,570);

	this.l3 = new lib.in_sc1_layer3();
	this.l3.setTransform(960,565.8);

	this.l4 = new lib.in_sc1_layer4();
	this.l4.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_9 = new lib.Innsbruck_01_layer05();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{x:844,y:23.9}}]}).to({state:[{t:this.instance_8,p:{x:854.5,y:70.9}}]},1).to({state:[{t:this.instance_8,p:{x:865.1,y:117.8}}]},1).to({state:[{t:this.instance_8,p:{x:875.6,y:164.7}}]},1).to({state:[{t:this.instance_8,p:{x:886.2,y:211.6}}]},1).to({state:[{t:this.instance_8,p:{x:896.7,y:258.5}}]},1).to({state:[{t:this.instance_8,p:{x:907.3,y:305.4}}]},1).to({state:[{t:this.instance_8,p:{x:917.8,y:352.3}}]},1).to({state:[{t:this.instance_8,p:{x:928.4,y:399.3}}]},1).to({state:[{t:this.instance_8,p:{x:938.9,y:446.2}}]},1).to({state:[{t:this.instance_8,p:{x:949.5,y:493.1}}]},1).to({state:[{t:this.instance_8,p:{x:960,y:540}}]},1).to({state:[{t:this.instance_9},{t:this.l4},{t:this.l3},{t:this.l2},{t:this.l1}]},1).to({state:[{t:this.instance_8,p:{x:960,y:540}}]},1).to({state:[{t:this.instance_8,p:{x:956.4,y:492.8}}]},1).to({state:[{t:this.instance_8,p:{x:952.8,y:445.5}}]},1).to({state:[{t:this.instance_8,p:{x:949.1,y:398.3}}]},1).to({state:[{t:this.instance_8,p:{x:945.5,y:350.9}}]},1).to({state:[{t:this.instance_8,p:{x:941.8,y:303.6}}]},1).to({state:[{t:this.instance_8,p:{x:938.2,y:256.4}}]},1).to({state:[{t:this.instance_8,p:{x:934.6,y:209.1}}]},1).to({state:[{t:this.instance_8,p:{x:930.9,y:161.8}}]},1).to({state:[{t:this.instance_8,p:{x:927.3,y:114.5}}]},1).to({state:[{t:this.instance_8,p:{x:923.6,y:67.2}}]},1).to({state:[{t:this.instance_8,p:{x:920,y:19.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1952.7,-422.2,5945.9,1862.2);


(lib.in_sc3 = function(mode,startPosition,loop) {
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

	// Ebene 2
	this.photo = new lib.in_sc3_photo();
	this.photo.setTransform(-519.9,888.7,1,1,0,0,0,-1253.3,528.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.photo}]}).wait(25));

	// Layer1_In
	this.instance = new lib.in_sc3_layer1();
	this.instance.setTransform(-1319.9,656.7,1,1,0,0,0,1004,564.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1011.1,regY:770.7,x:-1105.4,y:851.2},0).wait(1).to({x:-898.1,y:839.8},0).wait(1).to({x:-691,y:828.3},0).wait(1).to({x:-483.6,y:816.9},0).wait(1).to({x:-276.3,y:805.4},0).wait(1).to({x:-69.2,y:794},0).wait(1).to({x:137.9,y:782.5},0).wait(1).to({x:345.3,y:771.1},0).wait(1).to({x:552.6,y:759.7},0).wait(1).to({x:759.9,y:748.2},0).wait(1).to({x:967.1,y:736.7},0).to({_off:true},1).wait(13));

	// Layer2_In
	this.instance_1 = new lib.in_sc3_layer2();
	this.instance_1.setTransform(2600,662.4,1,1,0,0,0,982,552.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:2450.9,y:651.5},0).wait(1).to({x:2301.8,y:640.6},0).wait(1).to({x:2152.9,y:629.7},0).wait(1).to({x:2003.6,y:618.8},0).wait(1).to({x:1854.5,y:607.9},0).wait(1).to({x:1705.6,y:597},0).wait(1).to({x:1556.5,y:586},0).wait(1).to({x:1407.3,y:575.1},0).wait(1).to({x:1258.2,y:564.2},0).wait(1).to({x:1109.1,y:553.3},0).wait(1).to({x:960,y:542.4},0).to({_off:true},1).wait(13));

	// Layer1_Out
	this.instance_2 = new lib.in_sc3_layer1();
	this.instance_2.setTransform(960,530.7,1,1,0,0,0,1004,564.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).wait(1).to({regX:1011.1,regY:770.7,x:761.7,y:744.6},0).wait(1).to({x:556.2,y:752.4},0).wait(1).to({x:351,y:760.2},0).wait(1).to({x:145.3,y:768},0).wait(1).to({x:-59.9,y:775.8},0).wait(1).to({x:-265.2,y:783.6},0).wait(1).to({x:-470.6,y:791.4},0).wait(1).to({x:-676.3,y:799.2},0).wait(1).to({x:-881.7,y:807.1},0).wait(1).to({x:-1087.2,y:814.9},0).wait(1).to({x:-1292.7,y:822.7},0).wait(1));

	// Layer2_Out
	this.instance_3 = new lib.in_sc3_layer2();
	this.instance_3.setTransform(960,542.4,1,1,0,0,0,982,552.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(1).to({x:1110.9,y:553.3},0).wait(1).to({x:1261.8,y:564.2},0).wait(1).to({x:1412.6,y:575.1},0).wait(1).to({x:1563.6,y:586},0).wait(1).to({x:1714.5,y:596.9},0).wait(1).to({x:1865.3,y:607.8},0).wait(1).to({x:2016.2,y:618.8},0).wait(1).to({x:2167.3,y:629.7},0).wait(1).to({x:2318.2,y:640.6},0).wait(1).to({x:2469.1,y:651.5},0).wait(1).to({x:2620,y:662.4},0).wait(1));

	// Layer3_In_Out
	this.instance_4 = new lib.in_sc3_layer03();
	this.instance_4.setTransform(960,-607.9,1.023,1.023,0,0,0,960,536.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:546,y:-591.5},0).wait(1).to({y:-584.6},0).wait(1).to({y:-577.6},0).wait(1).to({y:-570.6},0).wait(1).to({y:-563.7},0).wait(1).to({y:-556.7},0).wait(1).to({y:-337.4},0).wait(1).to({y:-118.2},0).wait(1).to({y:100.6},0).wait(1).to({y:320.1},0).wait(1).to({y:539.3},0).to({_off:true},1).wait(1).to({regY:537.3,y:532,_off:false},0).wait(1).to({regY:546,y:370.9},0).wait(1).to({y:200.9},0).wait(1).to({y:30.9},0).wait(1).to({y:-138.9},0).wait(1).to({y:-164.6},0).wait(1).to({y:-190.3},0).wait(1).to({y:-216},0).wait(1).to({y:-241.7},0).wait(1).to({y:-267.4},0).wait(1).to({y:-293.1},0).wait(1).to({y:-318.9},0).wait(1));

	// Ebene 3
	this.l1 = new lib.in_sc3_layer1();
	this.l1.setTransform(960,530.7,1,1,0,0,0,1004,564.7);

	this.l2 = new lib.in_sc3_layer2();
	this.l2.setTransform(960,542.4,1,1,0,0,0,982,552.4);

	this.l3 = new lib.in_sc3_layer03();
	this.l3.setTransform(960,535,1.023,1.023,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.l3},{t:this.l2},{t:this.l1}]},12).to({state:[]},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1967.5,-1137.1,5251.5,2747.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;