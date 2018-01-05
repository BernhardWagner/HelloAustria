(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.hallstatt = function(mode,startPosition,loop) {
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
	this.sc1 = new lib.hs_sc1();
	this.sc1.setTransform(960,540,1,1,0,0,0,960,540);

	this.sc2 = new lib.hs_sc2();
	this.sc2.setTransform(960,540,1.028,1.028,0,0,0,960,540);

	this.sc3 = new lib.hs_sc3();
	this.sc3.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sc1}]}).to({state:[{t:this.sc2}]},1).to({state:[{t:this.sc3}]},1).wait(1));

	// Hintergrund
	this.instance = new lib.hallstatt_01_06();
	this.instance.setTransform(0.7,-11.1,1,1.022);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2729,-519,6005.2,2198.7);


// symbols:
(lib.foto = function() {
	this.initialize(img.foto);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,800);


(lib.hallstatt_01_01 = function() {
	this.initialize(img.hallstatt_01_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,498,934);


(lib.hallstatt_01_02 = function() {
	this.initialize(img.hallstatt_01_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,471,632);


(lib.hallstatt_01_03 = function() {
	this.initialize(img.hallstatt_01_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,990,784);


(lib.hallstatt_01_04 = function() {
	this.initialize(img.hallstatt_01_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,793);


(lib.hallstatt_01_05 = function() {
	this.initialize(img.hallstatt_01_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,436);


(lib.hallstatt_01_06 = function() {
	this.initialize(img.hallstatt_01_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.hallstatt_01_kirche = function() {
	this.initialize(img.hallstatt_01_kirche);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,480);


(lib.hallstatt_01_schiff = function() {
	this.initialize(img.hallstatt_01_schiff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,253);


(lib.hallstatt_02_lampe = function() {
	this.initialize(img.hallstatt_02_lampe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,48);


(lib.hallstatt_02_layer01 = function() {
	this.initialize(img.hallstatt_02_layer01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.hallstatt_02_layer02 = function() {
	this.initialize(img.hallstatt_02_layer02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Hallstatt_02_layer03 = function() {
	this.initialize(img.Hallstatt_02_layer03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.hallstatt_02_mensch = function() {
	this.initialize(img.hallstatt_02_mensch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,42);


(lib.hallstatt_02_türoffen = function() {
	this.initialize(img.hallstatt_02_türoffen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,177);


(lib.hallstatt_02_türzu = function() {
	this.initialize(img.hallstatt_02_türzu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,176);


(lib.hallstatt_03_layer04 = function() {
	this.initialize(img.hallstatt_03_layer04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.hallstatt_03_layer1 = function() {
	this.initialize(img.hallstatt_03_layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.hallstatt_03_layer2 = function() {
	this.initialize(img.hallstatt_03_layer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.hallstatt_03_layer3 = function() {
	this.initialize(img.hallstatt_03_layer3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.hallstatt_03_tür_offen = function() {
	this.initialize(img.hallstatt_03_tür_offen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,365,345);


(lib.hallstatt_03_tür_zu = function() {
	this.initialize(img.hallstatt_03_tür_zu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,346,377);


(lib.hallstatt_03_türhalboffen = function() {
	this.initialize(img.hallstatt_03_türhalboffen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,358,364);


(lib.hallstatt_03_werkzeug = function() {
	this.initialize(img.hallstatt_03_werkzeug);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,124);


(lib.hallstatt_laterneaus = function() {
	this.initialize(img.hallstatt_laterneaus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,95);


(lib.hallstatt_laterneein = function() {
	this.initialize(img.hallstatt_laterneein);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,89);


(lib.Hallstatt_layer02_tür_halboffen = function() {
	this.initialize(img.Hallstatt_layer02_tür_halboffen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,176);


(lib.hallstatt_schiffsanlage = function() {
	this.initialize(img.hallstatt_schiffsanlage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,160);


(lib.Kopievonhallstatt_01_05 = function() {
	this.initialize(img.Kopievonhallstatt_01_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,436);


(lib.Kopievonhallstatt_schiffsanlage = function() {
	this.initialize(img.Kopievonhallstatt_schiffsanlage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,160);


(lib.hs_sc3_layer3 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.hallstatt_03_layer1();
	this.instance.setTransform(0,0,1.06,1.06);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2035.9,1145.2);


(lib.hs_sc3_layer2_anim2_tuerzu = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.hallstatt_03_tür_zu();
	this.instance.setTransform(0,0,1.127,1.127);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,390,424.9);


(lib.hs_sc3_layer2_anim1_hammer = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.hallstatt_03_werkzeug();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,124);


(lib.hs_sc3_layer2_anim1_bild = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.foto();
	this.instance.setTransform(0,0,0.22,0.22);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,132.1,176.1);


(lib.hs_sc3_layer1 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.hallstatt_03_layer3();
	this.instance.setTransform(0,0,1.027,1.027);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1971.9,1109.2);


(lib.hs_sc3_hg = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.hallstatt_03_layer04();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.gk_sc1_photo_closeButton = function() {
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


(lib.hs_sc2_layer2_tuerzu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,hover:1,action:20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}
	this.frame_41 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(22).call(this.frame_41));

	// Tuer halb
	this.instance = new lib.Hallstatt_layer02_tür_halboffen();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},3).to({state:[]},14).to({state:[{t:this.instance}]},3).to({state:[]},8).wait(14));

	// Tuer offen
	this.instance_1 = new lib.hallstatt_02_türoffen();
	this.instance_1.setTransform(-5.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},28).wait(14));

	// Tuer zu
	this.instance_2 = new lib.hallstatt_02_türzu();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},19).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,176);


(lib.hs_sc2_layer2_licht = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.hallstatt_laterneaus();
	this.instance.setTransform(-34.4,-47.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.4,-47.4,69,95);


(lib.hs_sc2_layer2_fenster_mensch = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.hallstatt_02_mensch();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,42);


(lib.hs_sc2_layer2_fenster_lampe = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.hallstatt_02_lampe();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,48);


(lib.hs_sc2_layer1 = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.hallstatt_02_layer01();
	this.instance.setTransform(0,0,1.048,1.048);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2012.1,1131.8);


(lib.hs_sc2_hg = function() {
	this.initialize();

	// Ebene_1
	this.instance = new lib.Hallstatt_02_layer03();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.glow = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAJiSIAGAAAARCTIghAA");
	this.shape.setTransform(1.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgJCTQgfgkgNgjQgNgkAAg2QAAgeAXgnQAYgpAigWIAHAAQAtCxAAAjQAAAegOARIgdAig");
	this.shape_1.setTransform(0.6,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.1,-14.7,13.5,29.6);


(lib.hs_sc1_layer5 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.hallstatt_01_05();
	this.instance.setTransform(-1009.2,-210.3,0.859,0.859);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1009.2,-210.3,1649.2,374.5);


(lib.hs_sc1_layer4_schiff = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.hallstatt_01_schiff();
	this.instance.setTransform(-257.9,-118.2,0.935,0.935);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-257.9,-118.2,516,236.5);


(lib.hs_sc1_layer4_kirche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":16});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.gotoAndStop(0);
	}
	this.frame_16 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(15).call(this.frame_16));

	// Ebene 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#484848").ss(1,1,1).p("AAKgbQADAAADAAQgDAAgDAAQAAAAAAAAQgHACgDAAQgCAAgCAAQgCAAgCAAQgBABAAABQgBABAAABQAAAFgFACQAAACgBAAQgCAEgCABQgCACgBABQgBACgBACIAAAAQgBAAgCABQAAADgCABQgCAHgCADQgBABgBABQgBADgDACQAAABgBAAQgCACgBABQAAABgBABQgBABgDADQACgDADgDAAygcIgRAAQgHABgIAAIgCAAAgIgZQgBAAgCAAQABABAAABQAAAAABAAAgKgVQAAAAgBABQAAACgBABQgBABgBgBQgBACgBABQAAABAAABAgKgVQAAgBAAgBQgCABABACAgIgZQACgFgFgBQgBAAgDABQgCACAAABQAAACgBABQgEgEADAFQgDAFAEAEQABgCACgBIAAgBQAAgCAAgCQAAgBAAgBQgBgDAFACQgDAAgBADAgPgRIABAAQABgCACgBQgCABgBAAQAAABgBAAAgSgOIAAAAQABADABgBAgUgHQAAgCAAgBQABgCABgCAgkARQgEACgBAEAgcABQgEAJgEAHAgZAAQgBAAgCABAgEgZQAGgBAIgB");
	this.shape.setTransform(76.2,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(16));

	// Ebene 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DDDCDC").ss(1,1,1).p("AAChCIAAAJQAAACAAABQAAAGAAAGQABgCABgBQAAgBAAgBQAAgEABgFQAAgDAAgCQAAgFAAgEQABAHgBAHQACgBABgFQACgEAAgDQAAANADALQAAAAAAABQAAgBAAAAQABgFAAgEQABgGABgGAAAgvQAAANAAAQQAAABAAABQAAgHABgIQABgBAAgBQgBgEAAgEIAAAAQgBgDAAgDQAAgFAAgFQAAATAAAUAABgpQABAAAAAAQAAgBAAAAQAAAAgBABgAAEgtQAAgBAAAAQAAgBAAAAAAEgtQAAACAAACQAAAAAAABIAAABQABgHAAgIQAAACgBADQAAABAAABAACg5QAAAIgBAIAAFg4IAAAAQAAABAAABQAAgBAAgBgAANgtQAAABAAAAQABACAAABQAAgGAAgHAANgsIAAAAQAAADAAADAgYBAQgBACgBABQACABADABQAAgDABgDQgBgBAAgDQgBgBAAAAQgBADgBADgAgWA6QgCAAAEgDQAAgCACgBQAAgBABAAQgFAEgFADQACgFAFgFQACgBABgCQABgCACgCQABAAAAgBIAAAAQAAgCABgBQABgFACgEQABgCACgBQAAgBAAAAQgBgEABgDQgBADgBABQABgFACgCQAAAAAAgBQABgHABgEQAAgBABAAQAAgBAAgBQAAABACAAQAAAEgDAGQgBAHgCAHIAAAAQAGgMACgNQAAgMAAgMQgBgCAAAAQAAgCAAgCQAAADABADAAOgpQAAABgBACQgBAGAAAGQAAANAAANQACgEADgDQACgBABABQAAgMAAgLQAAgTAAgUAANgsQgBAEgBAEQgCACAAADQgBACgBACQABAHACAHQABAHABAGQACAAACAAQACADgDAEQgCADgBABQgDADgCAEQABAAAAgBQABgBABgBAAHgbQAAAAAAABQgBADgCACQAAADAAACQAAgBgBgBQAAADAAAEQAAgHgBgGQAAgBAAAAAACghQAAgBAAAAQAAgBAAgBQgBgCAAgDAAEgpQgBADgBADQABAAAAABQAAgDABgCAAEgpQgBAAgBAAQAAACAAADIAAABQAAAAAAABQAAADAAADQABACAAADQABgDAAgDQgBgEABgDQAAgCAAgBAACgYQAAgCAAgCQAAgCAAgDAAEgVQAAABgBACAADgXQAAADAAACAACgYQABAAAAABAAEgVQAAgIAAgHAgCABQABgBABAAQAAABgBADQgBABAAABQAAACgBACQgBABAAABQAAgDACgDQAAgDAAgCgAACgBQABACAAABQABADAAABQABgGAAgEQAAgIABgGQAAAMAAALQACgBABgBQABgCACgBIAAAAAgFAOQAAAAAAAAQAAAAAAgBAgFAOQAAgBABgBQAAABgBAAAgFAOQgBACAAABQABgBAAgCAgGAYQAAABABACQABgBABgDQACgDABgCQAAgEAAgCQAAgCAAgCQACgCABgEAAAASQABgEADgEQABgBgBgDQABAAABgBQAAACAAACQACgDABgDQABAAAAAAAAUgHQABAAAAADQgBACAAACQAAAGgFAEQgDADgCACQACgBABAAQgJAOgIANQANgQAOgQQADgCABgBQABgBAAgBQAAADgBADQABADgBABQgDADgCADQgEAIgGAHIABgEQgDACgDACQgHANgLAMQgCABgDAEQgDADgCABQADgBAAgBQABADgBABQgCAAgBgCAAMAAQgBABgBACQAAgBABAAIAAgBQABgBAAAAAAGAJQAAADAAACQABgGADgFAANAfQAAgBABgCQAEgHAFgGQACgBACgEQAAgBAAgDAAGAOQgBADgBACQAEgIACgGQAAgCABgCAAAgQQAAAGAAAGAAGAJQgCAEgBADQABgBACgBAAEATQgDAIgCAIQABgDABgDQADgFADgGQgBABgCAAgAAWAUQgFAFgEAGAgEApQgBADgCACQAFgGAFgFQACgCABgCQACgBACgBQgBADgCADQgHAGgIAFAgGAYIAAABIAAAAQgBABACABQgFAIAAAIQACgEADgDQACgEADgFQgBAAAAABQgBgEACgCQAAgCAAgCAABAdQABgCACgDQADgDABgEAgGAZQgDAHgEAIQgBAEgBAEQABgBABgBQACgBABgCAgPAwIAAABQABgCABgBQACAAACAAAgJAvQgCACgBADQABgCACgCQAAgBAAAAQABgBAAAAIAAAAIgBABIAAAAQABAAAAgBAgIAuIgBAAQgDABgDACQACgBAFgCgAgEApQACgCABgDQAAgBAAAAQgEAGgDAFIABAAAgBAjQgBAAAAAAQgDAGgDAFIAAAAAgJAwQgCACgBACQACgCABgDQAAABAAAAgAgBAjQAAAAAAAAQAAgCAAgBQAAACgBABAgBAkQAAgBAAAAAgFAkQABgBACAAAABAdQgBADgBAEAgUA3QACgCABgCQAAAAgBABAgMA0QgBACgDACQgDADgBAEAgMA0QgFAEgEADQADgCACgBQABgCADgCgAgRAzQABgBABgBAgRAzQAAgFADgFAgRAzQABgCABgBAAAAbQABgDADgFQgCACABgFQgDAGAAAFgAAbAKQgCAFgDAFAAHgbQAAgIgBgIQgCADAAAEAgUA3QADgBACgF");
	this.shape_1.setTransform(72.9,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).wait(16));

	// Ebene 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgkaAvPMAAAhedMBI1AAAMAAABedgAuVcoIABASQAEATAMARQAUAcAeAAQAlAAAKgVQAEgIAAgXQAAgggEgMIAAg2IACgLIASANQAGALAWAZQAcAiAWAGQATAMAZAAQBRAAAlhOQAWgvAAguIAAgEQBTgXAQgUIAOgKIASgQQAZgLAKgSQAOgXAAgnQAAgjgEgSQgGgYgUggQhDhtgiAAQgOAAgEABIgIADIgSAAQAcgcArg4QARgHAcgqQAjg2AAgjQAAgTgTgaQgTgZgbgQQgVgNgUgGQghgMgRALQgMAJgLALIgHAHIAAiHQgPhigkg0QgOgUgKgCIgFAAQgbgWgVADIgCAAQgHgGgPADQgDgDgTgGIgSgHIgFgDQgNgKgIAEQgEABgBADQgDgDgFAAIgsAAIAAABQgMACgSAOQg9AhgdBKQgaBGAAB3QgBAFACADQgGAWgIAMQgTAbgSAJIgmAPQgOAFgBAIQgFAIAAAMQAAA6AmBqIANAfIgBAFQAAANAFAgIAHArIAAAHIgJAhQgHAgAABAIAAAWQADATAJACIABAYIgCAUIgDAVIgBBJQgFAjAAAOIAYArQAbArAUAAQAGAAAGgCQAGgCAHAAQAIADADAAQAEAAADgCIABAFgAWfcyIBKAAQARABAHgGQAEgEAAgEQABgGgEgDIAAgBIgDgJQAfgEAIgEQAGgEAAgJQAAgFgBgCQgDgDgKgCIACAAIALgIQABgDAAgEQAAgPgXAEIgBgCQAAgBAPgGQAOgFAAgIQAAgEgDgDQgEgFgIAAIAXgJQAGgEAAgGQAAgGgGgEQAfgLAAgLQAAgMgTAAQgBgIgIgDIgJAAQAIgEAAgEQADgLgWAAQgPAAgUACIgeACIgDgEQgDgEgEgBIgiAAIACgCIAYAAQAMgDAAgJQAAgQgjgBQAHgFAhgGQAZgEAAgMQAAgFgCgBQgEgGgRAAQgMAAgOACIgVACQgDAAgDgBIgFgCIgQAEIAEgJIgBgEQATgHAAgKQAAgIgGgEQgKgFgZgBIAAgBIBDgFQAagEAAgLQAAgEgEgEQgHgHgTAEIACgHQADgDAAgFIgBgCQAFgCACgEQADgDAAgDQAAgEgDgEQgDgEgGAAIgdAAQgBgFgJgBIgBAAIAdhSQgBgNgLAAQgIAAgPATIgCgCIAGgjQAVhBAAgHQAAgVgOALIgEAFQgHgBgGAGQgEgEgIAHQgPALgUAiIgLATQgLAJgFAHQgFADgCAKIgDANIgRAWQgDAEgDAMQgGAKgaAAQgVAAgdgOQgdgOgTAAIgFABIgFgBIgEgBQgLgBgOANQglAhAAA4QAAA1BBArQAlAYA4AUQAAAIgHAHQgFAFgSALQgtAbgNAMQgSAQAAAWQAAAVAYAUQAVARAvAWQAbANAzAJIAlAGIALAFQAcAKAQAAIAGAAIAAAAgAU/cJIABAAIAOADIgPgDgATlbDIACAAIAVAAIgGAAgAR4WqIAAABIgBAEIABgFg");
	var mask_graphics_1 = new cjs.Graphics().p("EgkaAvPMAAAhedMBI1AAAMAAABedgAuVcoIABASQAEATAMARQAUAcAeAAQAlAAAKgVQAEgIAAgXQAAgggEgMIAAg2IACgLIASANQAGALAWAZQAcAiAWAGQATAMAZAAQBRAAAlhOQAWgvAAguIAAgEQBTgXAQgUIAOgKIASgQQAZgLAKgSQAOgXAAgnQAAgjgEgSQgGgYgUggQhDhtgiAAQgOAAgEABIgIADIgSAAQAcgcArg4QARgHAcgqQAjg2AAgjQAAgTgTgaQgTgZgbgQQgVgNgUgGQghgMgRALQgMAJgLALIgHAHIAAiHQgPhigkg0QgOgUgKgCIgFAAQgbgWgVADIgCAAQgHgGgPADQgDgDgTgGIgSgHIgFgDQgNgKgIAEQgEABgBADQgDgDgFAAIgsAAIAAABQgMACgSAOQg9AhgdBKQgaBGAAB3QgBAFACADQgGAWgIAMQgTAbgSAJIgmAPQgOAFgBAIQgFAIAAAMQAAA6AmBqIANAfIgBAFQAAANAFAgIAHArIAAAHIgJAhQgHAgAABAIAAAWQADATAJACIABAYIgCAUIgDAVIgBBJQgFAjAAAOIAYArQAbArAUAAQAGAAAGgCQAGgCAHAAQAIADADAAQAEAAADgCIABAFgAWfcyIBKAAQARABAHgGQAEgEAAgEQABgGgEgDIAAgBIgDgJQAfgEAIgEQAGgEAAgJQAAgFgBgCQgDgDgKgCIACAAIALgIQABgDAAgEQAAgPgXAEIgBgCQAAgBAPgGQAOgFAAgIQAAgEgDgDQgEgFgIAAIAXgJQAGgEAAgGQAAgGgGgEQAfgLAAgLQAAgMgTAAQgBgIgIgDIgJAAQAIgEAAgEQADgLgWAAQgPAAgUACIgeACIgDgEQgDgEgEgBIgiAAIACgCIAYAAQAMgDAAgJQAAgQgjgBQAHgFAhgGQAZgEAAgMQAAgFgCgBQgEgGgRAAQgMAAgOACIgVACQgDAAgDgBIgFgCIgQAEIAEgJIgBgEQATgHAAgKQAAgIgGgEQgKgFgZgBIAAgBIBDgFQAagEAAgLQAAgEgEgEQgHgHgTAEIACgHQADgDAAgFIgBgCQAFgCACgEQADgDAAgDQAAgEgDgEQgDgEgGAAIgdAAQgBgFgJgBIgBAAIAdhSQgBgNgLAAQgIAAgPATIgCgCIAGgjQAVhBAAgHQAAgVgOALIgEAFQgHgBgGAGQgEgEgIAHQgPALgUAiIgLATQgLAJgFAHQgFADgCAKIgDANIgRAWQgDAEgDAMQgGAKgaAAQgVAAgdgOQgdgOgTAAIgFABIgFgBIgEgBQgLgBgOANQglAhAAA4QAAA1BBArQAlAYA4AUQAAAIgHAHQgFAFgSALQgtAbgNAMQgSAQAAAWQAAAVAYAUQAVARAvAWQAbANAzAJIAlAGIALAFQAcAKAQAAIAGAAIAAAAgAU/cJIABAAIAOADIgPgDgATlbDIACAAIAVAAIgGAAgAR4WqIAAABIgBAEIABgFg");
	var mask_graphics_16 = new cjs.Graphics().p("EgkaAvPMAAAhedMBI1AAAMAAABedgAuVcoIABASQAEATAMARQAUAcAeAAQAlAAAKgVQAEgIAAgXQAAgggEgMIAAg2IACgLIASANQAGALAWAZQAcAiAWAGQATAMAZAAQBRAAAlhOQAWgvAAguIAAgEQBTgXAQgUIAOgKIASgQQAZgLAKgSQAOgXAAgnQAAgjgEgSQgGgYgUggQhDhtgiAAQgOAAgEABIgIADIgSAAQAcgcArg4QARgHAcgqQAjg2AAgjQAAgTgTgaQgTgZgbgQQgVgNgUgGQghgMgRALQgMAJgLALIgHAHIAAiHQgPhigkg0QgOgUgKgCIgFAAQgbgWgVADIgCAAQgHgGgPADQgDgDgTgGIgSgHIgFgDQgNgKgIAEQgEABgBADQgDgDgFAAIgsAAIAAABQgMACgSAOQg9AhgdBKQgaBGAAB3QgBAFACADQgGAWgIAMQgTAbgSAJIgmAPQgOAFgBAIQgFAIAAAMQAAA6AmBqIANAfIgBAFQAAANAFAgIAHArIAAAHIgJAhQgHAgAABAIAAAWQADATAJACIABAYIgCAUIgDAVIgBBJQgFAjAAAOIAYArQAbArAUAAQAGAAAGgCQAGgCAHAAQAIADADAAQAEAAADgCIABAFgAWfcyIBKAAQARABAHgGQAEgEAAgEQABgGgEgDIAAgBIgDgJQAfgEAIgEQAGgEAAgJQAAgFgBgCQgDgDgKgCIACAAIALgIQABgDAAgEQAAgPgXAEIgBgCQAAgBAPgGQAOgFAAgIQAAgEgDgDQgEgFgIAAIAXgJQAGgEAAgGQAAgGgGgEQAfgLAAgLQAAgMgTAAQgBgIgIgDIgJAAQAIgEAAgEQADgLgWAAQgPAAgUACIgeACIgDgEQgDgEgEgBIgiAAIACgCIAYAAQAMgDAAgJQAAgQgjgBQAHgFAhgGQAZgEAAgMQAAgFgCgBQgEgGgRAAQgMAAgOACIgVACQgDAAgDgBIgFgCIgQAEIAEgJIgBgEQATgHAAgKQAAgIgGgEQgKgFgZgBIAAgBIBDgFQAagEAAgLQAAgEgEgEQgHgHgTAEIACgHQADgDAAgFIgBgCQAFgCACgEQADgDAAgDQAAgEgDgEQgDgEgGAAIgdAAQgBgFgJgBIgBAAIAdhSQgBgNgLAAQgIAAgPATIgCgCIAGgjQAVhBAAgHQAAgVgOALIgEAFQgHgBgGAGQgEgEgIAHQgPALgUAiIgLATQgLAJgFAHQgFADgCAKIgDANIgRAWQgDAEgDAMQgGAKgaAAQgVAAgdgOQgdgOgTAAIgFABIgFgBIgEgBQgLgBgOANQglAhAAA4QAAA1BBArQAlAYA4AUQAAAIgHAHQgFAFgSALQgtAbgNAMQgSAQAAAWQAAAVAYAUQAVARAvAWQAbANAzAJIAlAGIALAFQAcAKAQAAIAGAAIAAAAgAU/cJIABAAIAOADIgPgDgATlbDIACAAIAVAAIgGAAgAR4WqIAAABIgBAEIABgFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-41.1,y:25.7}).wait(1).to({graphics:mask_graphics_1,x:-41.1,y:25.7}).wait(15).to({graphics:mask_graphics_16,x:-41.1,y:25.7}).wait(1));

	// Ebene 1
	this.instance = new lib.hallstatt_01_kirche();
	this.instance.setTransform(-159.6,-204.7,0.953,0.953);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.6,-204.7,282.1,457.4);


(lib.hs_sc1_layer2_pier = function() {
	this.initialize();

	// Ebene 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgsEAZWMAAAgyrMBYJAAAMAAAAyrgAL8AdQAAAYgFATIAAA5QgDAUgEBCIgGArIAAAmIgJAcQgIAZAAAGIgBAWIABAHQADAGAHABIABAFQADAGAGABQACADADACIABAHQADAHAIAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACAAQALAAAEgXIADgeIAAg6IAFhjQADg1AFglQAKgEAEg5QADg5ACgXQAHgRAEgfIARg2QAVhEAAgGQAAgUgMALQgLAKgDAPIgDAKIgGgKIADgfIAEgfIgNAAIACgMIAHhZIAAgmIAKhNIAGg7QAAgQgKgBQgHgBgEAMQgMAGAAANQAAAJgGAdQgDA3gFAWIAAA0QgkEgAAAMQgBAGABAGQABAIADADIAAAFQAAAEACADQADAEAHAAQAEAAADgGIADADIAAAHQgKABgDALIgBAAQgCgFgGgEIgEgBQgIAAAAAWg");
	mask.setTransform(27.8,-29);

	// Ebene 1
	this.instance = new lib.Kopievonhallstatt_schiffsanlage();
	this.instance.setTransform(-112.4,-79.9);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.4,-79.9,225,160);


(lib.hs_sc1_layer2 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.hallstatt_01_02();
	this.instance.setTransform(-277.1,-371.9,1.177,1.177);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-277.1,-371.9,554.5,744);


(lib.hs_sc1_layer1 = function() {
	this.initialize();

	// Ebene 1
	this.instance = new lib.hallstatt_01_01();
	this.instance.setTransform(-294.7,-552.8,1.184,1.184);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-294.7,-552.8,589.6,1105.8);


(lib.hs_sc3_layer2_anim2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.gotoAndStop(0);
	}
	this.frame_35 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(24).call(this.frame_35));

	// Tor offen
	this.instance = new lib.hallstatt_03_tür_offen();
	this.instance.setTransform(18,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},25).wait(11));

	// Tor halb
	this.instance_1 = new lib.hallstatt_03_türhalboffen();
	this.instance_1.setTransform(0,14,1.084,1.084);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},3).to({state:[]},7).to({state:[{t:this.instance_1}]},9).to({state:[]},6).wait(11));

	// Tor zu
	this.instance_2 = new lib.hs_sc3_layer2_anim2_tuerzu();
	this.instance_2.setTransform(195,212.5,1,1,0,0,0,195,212.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:true},2).wait(7).to({_off:false},0).wait(2).to({_off:true},7).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,390,424.9);


(lib.hs_sc3_layer2_anim1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.gotoAndStop(0);
	}
	this.frame_11 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(1).call(this.frame_11));

	// Ebene_2
	this.instance = new lib.hs_sc3_layer2_anim1_bild();
	this.instance.setTransform(82.1,362.3,4.739,4.739,10,0,0,66,88);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(1));

	// Ebene_1
	this.instance_1 = new lib.hs_sc3_layer2_anim1_hammer();
	this.instance_1.setTransform(74,62,1,1,0,0,0,74,62);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:34.6},0).wait(1).to({rotation:69.2,y:62.1},0).wait(1).to({rotation:103.8,y:62},0).wait(1).to({rotation:138.4},0).wait(1).to({rotation:173},0).wait(1).to({rotation:138.4},0).wait(1).to({rotation:103.8},0).wait(1).to({rotation:69.2,y:62.1},0).wait(1).to({rotation:34.6,y:62},0).wait(1).to({rotation:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,148,124);


(lib.hs_sc3_layer2 = function() {
	this.initialize();

	// Ebene_1
	this.tuer = new lib.hs_sc3_layer2_anim2();
	this.tuer.setTransform(1016,785.5,1,1,0,0,0,195,212.5);

	this.photoTrigger = new lib.hs_sc3_layer2_anim1();
	this.photoTrigger.setTransform(1026,227,1,1,0,0,0,74,62);

	this.instance = new lib.hallstatt_03_layer2();
	this.instance.setTransform(0,0,1.042,1.042);

	this.addChild(this.instance,this.photoTrigger,this.tuer);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1999.9,1125);


(lib.gk_sc1_photoX = function() {
	this.initialize();

	// Ebene 1
	this.close = new lib.gk_sc1_photo_closeButton();
	this.close.setTransform(124.6,-217.9,0.796,0.739,7.5);

	this.instance = new lib.foto();
	this.instance.setTransform(-433.7,-254.8);

	this.addChild(this.instance,this.close);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-433.7,-254.8,600,800);


(lib.hs_sc2_layer2_licht_aus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{aus:0,an:2});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.gotoAndPlay("an");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(40).call(this.frame_41));

	// Ebene_1
	this.instance = new lib.hs_sc2_layer2_licht();
	this.instance.setTransform(34.5,47.5);

	this.instance_1 = new lib.hallstatt_laterneein();
	this.instance_1.setTransform(-2,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(40));

	// glow
	this.instance_2 = new lib.glow();
	this.instance_2.setTransform(32.8,58.1,0.899,0.652);
	this.instance_2.shadow = new cjs.Shadow("#FEFE00",0,0,44);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:0.6,scaleX:0.96,scaleY:0.7,x:33.4},0).wait(1).to({scaleX:1.02,scaleY:0.74},0).wait(1).to({scaleX:1.08,scaleY:0.78},0).wait(1).to({scaleX:1.14,scaleY:0.83,x:33.5},0).wait(1).to({scaleX:1.2,scaleY:0.87},0).wait(1).to({scaleX:1.26,scaleY:0.91},0).wait(1).to({scaleX:1.32,scaleY:0.96,x:33.6},0).wait(1).to({scaleX:1.38,scaleY:1},0).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,95);


(lib.hs_sc2_layer2_laterne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":14});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.gotoAndStop(0);
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1).call(this.frame_14));

	// Laterne_aus
	this.instance = new lib.hs_sc2_layer2_licht_aus();
	this.instance.setTransform(27.3,35.4,1,1,0,0,0,34.5,47.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).wait(1));

	// laterne_aus_hover
	this.instance_1 = new lib.hs_sc2_layer2_licht_aus();
	this.instance_1.setTransform(27.5,35.1,1,1,0,0,0,34.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:35.5},0).wait(1).to({regX:34,rotation:-4.8,x:27,y:35.6},0).wait(1).to({rotation:-9.8,x:27.1,y:35.7},0).wait(1).to({rotation:-14.8},0).wait(1).to({rotation:-9.7},0).wait(1).to({rotation:-4.7,y:35.6},0).wait(1).to({rotation:0.2,x:27,y:35.5},0).wait(1).to({rotation:5.1},0).wait(1).to({rotation:10.1,y:35.4},0).wait(1).to({rotation:15},0).wait(1).to({rotation:10},0).wait(1).to({rotation:5,y:35.5},0).wait(1).to({rotation:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-12.3,69,95);


(lib.hs_sc2_layer2_fenster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,"hover":1,"action":25});

	// timeline functions:
	this.frame_24 = function() {
		this.gotoAndStop(0);
	}
	this.frame_50 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(26).call(this.frame_50));

	// Ebene_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiUCSIAGkfIAAgJQETACACABQABABAGCWIABANIAGB/IABAFIgbABQgGgFgMAAQgLAAgHAGIgegFIh9AAQg0AAgcAFIAAgFg");
	mask.setTransform(58.7,64.4);

	// Ebene_5
	this.instance = new lib.hs_sc2_layer2_fenster_mensch();
	this.instance.setTransform(88.5,68,1,1,0,0,0,15.5,21);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).wait(24).to({_off:false},0).wait(1).to({x:87.4},0).wait(1).to({x:86.4,y:67.9},0).wait(1).to({x:85.3},0).wait(1).to({x:84.3,y:67.8},0).wait(1).to({x:83.2},0).wait(1).to({x:82.1,y:67.7},0).wait(1).to({x:81.1,y:67.6},0).wait(1).to({x:80,y:67.5},0).wait(1).to({x:79,y:67.4},0).wait(1).to({x:77.9,y:67.3},0).wait(1).to({x:76.3},0).wait(1).to({x:74.7},0).wait(1).to({x:73.1},0).wait(1).to({x:71.5},0).wait(1).to({x:70},0).wait(1).to({x:68.9,y:67.2},0).wait(1).to({x:67.8,y:67.1},0).wait(1).to({x:66.8,y:67},0).wait(1).to({x:65.7,y:66.9},0).wait(1).to({x:64.7,y:66.8},0).wait(1).to({x:64.1},0).wait(1).to({x:63.6},0).wait(1).to({x:63.1},0).wait(1).to({x:62.5},0).wait(1).to({x:62},0).wait(1));

	// Ebene_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgRCoIk/gDQADAAgBlQIE7AIQABABAACOQgBCNABABIBGAHQABABgBiMIAAiNQERAKACABIAFCbQAECcABAAIkcABg");
	mask_1.setTransform(38.6,26.1);

	// Ebene_1
	this.instance_1 = new lib.hs_sc2_layer2_fenster_lampe();
	this.instance_1.setTransform(22.8,3.7,0.999,0.999,-116.2,0,0,15.1,5.7);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:22.5,regY:24,scaleX:1,scaleY:1,rotation:-103.8,x:38.8,y:-7.8},0).wait(1).to({rotation:-91.4,x:40.9,y:-4.1},0).wait(1).to({rotation:-88.3,x:41.3,y:-3.1},0).wait(1).to({rotation:-85.1,x:41.6,y:-2.1},0).wait(1).to({rotation:-80,x:42.1,y:-0.3},0).wait(1).to({rotation:-71.5,x:42.5,y:2.3},0).wait(1).to({rotation:-56.5,x:42.2,y:7.5},0).wait(1).to({rotation:-26.5,x:37.7,y:16.6},0).wait(1).to({rotation:11.6,x:26.4,y:23.1},0).wait(1).to({rotation:34,x:18.7,y:23},0).wait(1).to({rotation:49,x:13.9,y:21.3},0).wait(1).to({rotation:63.9,x:9.6,y:18.3},0).wait(1).to({rotation:75.7,x:6.9,y:15.4},0).wait(1).to({rotation:90.7,x:4.4,y:10.8},0).wait(1).to({rotation:75.6,x:6.9,y:15.4},0).wait(1).to({rotation:51.5,x:13.1,y:20.8},0).wait(1).to({rotation:11.9,x:26.3,y:23.1},0).wait(1).to({rotation:-3,x:31.2,y:21.5},0).wait(1).to({rotation:-16.8,x:35.3,y:18.9},0).wait(1).to({rotation:-29,x:38.2,y:16},0).wait(1).to({rotation:-25,x:37.3,y:17},0).wait(1).to({rotation:-9.9,x:33.3,y:20.3},0).wait(1).to({rotation:-4.3,x:31.7,y:21.4},0).wait(1).to({rotation:2.7,x:29.3,y:22.2},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.7,-12.3,62.8,61.4);


(lib.hs_sc2_layer2 = function() {
	this.initialize();

	// Ebene_1
	this.fenster = new lib.hs_sc2_layer2_fenster();
	this.fenster.setTransform(104.5,516,1,1,0,0,0,22.5,24);

	this.tuer = new lib.hs_sc2_layer2_tuerzu();
	this.tuer.setTransform(1777,662);

	this.lampe = new lib.hs_sc2_layer2_laterne();
	this.lampe.setTransform(803,663);

	this.instance = new lib.hallstatt_02_layer02();
	this.instance.setTransform(0,0,1.05,1.05);

	this.addChild(this.instance,this.lampe,this.tuer,this.fenster);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2016.1,1134.1);


(lib.hs_sc2 = function(mode,startPosition,loop) {
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

	// Layer01_In
	this.instance = new lib.hs_sc2_layer1();
	this.instance.setTransform(-1077.9,732.9,1,1,0,0,0,1006,565.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-892.3,y:718},0).wait(1).to({x:-706.8,y:703.1},0).wait(1).to({x:-521.6,y:688.2},0).wait(1).to({x:-335.9,y:673.3},0).wait(1).to({x:-150.5,y:658.4},0).wait(1).to({x:34.6,y:643.5},0).wait(1).to({x:220,y:628.6},0).wait(1).to({x:405.7,y:613.6},0).wait(1).to({x:591.1,y:598.7},0).wait(1).to({x:776.6,y:583.8},0).wait(1).to({x:962,y:568.9},0).to({_off:true},1).wait(13));

	// Layer02_In
	this.instance_1 = new lib.hs_sc2_layer2();
	this.instance_1.setTransform(3056.6,450,1,1,0,0,0,1008.1,567);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:1008,scaleX:1,scaleY:1,x:2865.9,y:462},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:2675.3,y:474},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:2484.9,y:486},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:2294.1,y:498},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:2103.4,y:509.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1913,y:521.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1722.4,y:533.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1531.6,y:545.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1341,y:557.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1150.3,y:569.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:959.7,y:581.8},0).to({_off:true},1).wait(13));

	// Layer01_Out
	this.instance_2 = new lib.hs_sc2_layer1();
	this.instance_2.setTransform(962,568.9,1,1,0,0,0,1006,565.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).wait(1).to({x:776.6,y:583.8},0).wait(1).to({x:591.1,y:598.7},0).wait(1).to({x:405.9,y:613.6},0).wait(1).to({x:220.2,y:628.5},0).wait(1).to({x:34.8,y:643.4},0).wait(1).to({x:-150.3,y:658.3},0).wait(1).to({x:-335.7,y:673.2},0).wait(1).to({x:-521.4,y:688.2},0).wait(1).to({x:-706.8,y:703.1},0).wait(1).to({x:-892.3,y:718},0).wait(1).to({x:-1077.8,y:732.9},0).wait(1));

	// Layer02_Out
	this.instance_3 = new lib.hs_sc2_layer2();
	this.instance_3.setTransform(959.9,581.8,0.947,0.947,0,0,0,1007.9,567);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(1).to({regX:1008,x:1149,y:567.3},0).wait(1).to({x:1338.1,y:552.7},0).wait(1).to({x:1527,y:538.2},0).wait(1).to({x:1716.3,y:523.7},0).wait(1).to({x:1905.4,y:509.1},0).wait(1).to({x:2094.3,y:494.6},0).wait(1).to({x:2283.4,y:480},0).wait(1).to({x:2472.7,y:465.5},0).wait(1).to({x:2661.8,y:450.9},0).wait(1).to({x:2850.8,y:436.4},0).wait(1).to({x:3039.9,y:421.8},0).wait(1));

	// Ebene_1
	this.instance_4 = new lib.hs_sc2_hg();
	this.instance_4.setTransform(960,540,1,1,0,0,0,960,540);

	this.l2 = new lib.hs_sc2_layer2();
	this.l2.setTransform(959.9,581.9,0.947,0.947,0,0,0,1008.1,567.1);

	this.l1 = new lib.hs_sc2_layer1();
	this.l1.setTransform(962,568.9,1,1,0,0,0,1006,565.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.l1},{t:this.instance_4},{t:this.l2}]},12).to({state:[{t:this.instance_4}]},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2083.9,-117,6148.6,1415.9);


(lib.hs_sc1_layer3 = function() {
	this.initialize();

	// Ebene 1
	this.pier = new lib.hs_sc1_layer2_pier();
	this.pier.setTransform(-497.6,209.5);

	this.instance = new lib.hallstatt_01_03();
	this.instance.setTransform(-494.9,-391.9);

	this.addChild(this.instance,this.pier);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-610.1,-391.9,1105.2,784);


(lib.hs_sc1_layer4_schiff_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{away:0,"in hafen":287,"drive in":0,"drive out":287});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_287 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(287).call(this.frame_287).wait(276));

	// Ebene 4 Kopie
	this.instance = new lib.hs_sc1_layer4_schiff();
	this.instance.setTransform(-1244,335.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-1238.5,y:333},0).wait(1).to({x:-1233.2,y:330.8},0).wait(1).to({x:-1227.9,y:328.7},0).wait(1).to({x:-1222.6,y:326.5},0).wait(1).to({x:-1217.3,y:324.3},0).wait(1).to({x:-1212,y:322.2},0).wait(1).to({x:-1206.8,y:320},0).wait(1).to({x:-1201.6,y:317.9},0).wait(1).to({x:-1196.3,y:315.7},0).wait(1).to({x:-1191.2,y:313.7},0).wait(1).to({x:-1186.1,y:311.6},0).wait(1).to({x:-1180.9,y:309.4},0).wait(1).to({x:-1175.8,y:307.4},0).wait(1).to({x:-1170.7,y:305.3},0).wait(1).to({x:-1165.7,y:303.2},0).wait(1).to({x:-1160.5,y:301.1},0).wait(1).to({x:-1155.5,y:299.1},0).wait(1).to({x:-1150.5,y:297},0).wait(1).to({x:-1145.5,y:295},0).wait(1).to({x:-1140.5,y:292.9},0).wait(1).to({x:-1135.5,y:290.9},0).wait(1).to({x:-1130.6,y:288.9},0).wait(1).to({x:-1125.7,y:286.9},0).wait(1).to({x:-1120.8,y:284.9},0).wait(1).to({x:-1115.9,y:282.9},0).wait(1).to({x:-1111,y:280.9},0).wait(1).to({x:-1106.1,y:278.9},0).wait(1).to({x:-1101.3,y:276.9},0).wait(1).to({x:-1096.5,y:274.9},0).wait(1).to({x:-1091.7,y:273},0).wait(1).to({x:-1086.9,y:271},0).wait(1).to({x:-1082.2,y:269.1},0).wait(1).to({x:-1077.4,y:267.2},0).wait(1).to({x:-1072.7,y:265.2},0).wait(1).to({x:-1068,y:263.3},0).wait(1).to({x:-1063.3,y:261.4},0).wait(1).to({x:-1058.7,y:259.5},0).wait(1).to({x:-1054,y:257.6},0).wait(1).to({x:-1049.4,y:255.7},0).wait(1).to({x:-1044.8,y:253.8},0).wait(1).to({x:-1040.2,y:251.9},0).wait(1).to({x:-1035.6,y:250.1},0).wait(1).to({x:-1031,y:248.2},0).wait(1).to({x:-1026.5,y:246.3},0).wait(1).to({x:-1022,y:244.5},0).wait(1).to({x:-1017.5,y:242.6},0).wait(1).to({x:-1013,y:240.8},0).wait(1).to({x:-1008.5,y:239},0).wait(1).to({x:-1004.1,y:237.2},0).wait(1).to({x:-999.6,y:235.3},0).wait(1).to({x:-995.2,y:233.5},0).wait(1).to({x:-990.8,y:231.7},0).wait(1).to({x:-986.4,y:229.9},0).wait(1).to({x:-982.1,y:228.2},0).wait(1).to({x:-977.7,y:226.4},0).wait(1).to({x:-973.4,y:224.6},0).wait(1).to({x:-969,y:222.8},0).wait(1).to({x:-964.7,y:221.1},0).wait(1).to({x:-960.4,y:219.3},0).wait(1).to({x:-956.2,y:217.6},0).wait(1).to({x:-951.9,y:215.8},0).wait(1).to({x:-947.7,y:214.1},0).wait(1).to({x:-943.5,y:212.4},0).wait(1).to({x:-939.3,y:210.7},0).wait(1).to({x:-935.1,y:209},0).wait(1).to({x:-930.9,y:207.3},0).wait(1).to({x:-926.7,y:205.6},0).wait(1).to({x:-922.6,y:203.9},0).wait(1).to({x:-918.5,y:202.2},0).wait(1).to({x:-914.4,y:200.5},0).wait(1).to({x:-910.3,y:198.8},0).wait(1).to({x:-906.2,y:197.2},0).wait(1).to({x:-902.1,y:195.5},0).wait(1).to({x:-898.1,y:193.8},0).wait(1).to({x:-894.1,y:192.2},0).wait(1).to({x:-890,y:190.5},0).wait(1).to({x:-886,y:188.9},0).wait(1).to({x:-882,y:187.3},0).wait(1).to({x:-878.1,y:185.7},0).wait(1).to({x:-874.1,y:184},0).wait(1).to({x:-870.2,y:182.4},0).wait(1).to({x:-866.3,y:180.8},0).wait(1).to({x:-862.3,y:179.2},0).wait(1).to({x:-858.4,y:177.6},0).wait(1).to({x:-854.6,y:176},0).wait(1).to({x:-850.7,y:174.5},0).wait(1).to({x:-846.8,y:172.9},0).wait(1).to({x:-843,y:171.3},0).wait(1).to({x:-839.3,y:169.8},0).wait(1).to({x:-835.4,y:168.2},0).wait(1).to({x:-831.6,y:166.6},0).wait(1).to({x:-827.8,y:165.1},0).wait(1).to({x:-824,y:163.6},0).wait(1).to({x:-820.3,y:162},0).wait(1).to({x:-816.5,y:160.5},0).wait(1).to({x:-812.8,y:159},0).wait(1).to({x:-809.1,y:157.5},0).wait(1).to({x:-805.4,y:155.9},0).wait(1).to({x:-801.7,y:154.4},0).wait(1).to({x:-798,y:152.9},0).wait(1).to({x:-794.4,y:151.4},0).wait(1).to({x:-790.7,y:149.9},0).wait(1).to({x:-787.1,y:148.5},0).wait(1).to({x:-783.5,y:147},0).wait(1).to({x:-779.9,y:145.5},0).wait(1).to({x:-776.3,y:144},0).wait(1).to({x:-772.7,y:142.6},0).wait(1).to({x:-769.1,y:141.1},0).wait(1).to({x:-765.6,y:139.7},0).wait(1).to({x:-762,y:138.2},0).wait(1).to({x:-758.5,y:136.8},0).wait(1).to({x:-755,y:135.3},0).wait(1).to({x:-751.5,y:133.9},0).wait(1).to({x:-748,y:132.5},0).wait(1).to({x:-744.5,y:131.1},0).wait(1).to({x:-741,y:129.6},0).wait(1).to({x:-737.6,y:128.2},0).wait(1).to({x:-734.2,y:126.8},0).wait(1).to({x:-730.7,y:125.4},0).wait(1).to({x:-727.3,y:124},0).wait(1).to({x:-723.9,y:122.6},0).wait(1).to({x:-720.5,y:121.2},0).wait(1).to({x:-717.1,y:119.9},0).wait(1).to({x:-713.8,y:118.5},0).wait(1).to({x:-710.4,y:117.1},0).wait(1).to({x:-707.1,y:115.7},0).wait(1).to({x:-703.7,y:114.4},0).wait(1).to({x:-700.4,y:113},0).wait(1).to({x:-697.1,y:111.7},0).wait(1).to({x:-693.8,y:110.3},0).wait(1).to({x:-690.5,y:109},0).wait(1).to({x:-687.2,y:107.6},0).wait(1).to({x:-684,y:106.3},0).wait(1).to({x:-680.7,y:105},0).wait(1).to({x:-677.5,y:103.6},0).wait(1).to({x:-674.2,y:102.3},0).wait(1).to({x:-671,y:101},0).wait(1).to({x:-667.8,y:99.7},0).wait(1).to({x:-664.6,y:98.4},0).wait(1).to({x:-661.4,y:97.1},0).wait(1).to({x:-658.2,y:95.8},0).wait(1).to({x:-655,y:94.5},0).wait(1).to({x:-651.9,y:93.2},0).wait(1).to({x:-648.8,y:91.9},0).wait(1).to({x:-645.6,y:90.6},0).wait(1).to({x:-642.5,y:89.3},0).wait(1).to({x:-639.3,y:88.1},0).wait(1).to({x:-636.2,y:86.8},0).wait(1).to({x:-633.1,y:85.5},0).wait(1).to({x:-630.1,y:84.3},0).wait(1).to({x:-627,y:83},0).wait(1).to({x:-623.9,y:81.8},0).wait(1).to({x:-620.9,y:80.5},0).wait(1).to({x:-617.8,y:79.3},0).wait(1).to({x:-614.8,y:78},0).wait(1).to({x:-611.7,y:76.8},0).wait(1).to({x:-608.7,y:75.5},0).wait(1).to({x:-605.7,y:74.3},0).wait(1).to({x:-602.7,y:73.1},0).wait(1).to({x:-599.7,y:71.9},0).wait(1).to({x:-596.7,y:70.6},0).wait(1).to({x:-593.7,y:69.4},0).wait(1).to({x:-590.8,y:68.2},0).wait(1).to({x:-587.8,y:67},0).wait(1).to({x:-584.9,y:65.8},0).wait(1).to({x:-581.9,y:64.6},0).wait(1).to({x:-579,y:63.4},0).wait(1).to({x:-576.1,y:62.2},0).wait(1).to({x:-573.2,y:61},0).wait(1).to({x:-570.3,y:59.8},0).wait(1).to({x:-567.4,y:58.6},0).wait(1).to({x:-564.5,y:57.5},0).wait(1).to({x:-561.6,y:56.3},0).wait(1).to({x:-558.7,y:55.1},0).wait(1).to({x:-555.9,y:53.9},0).wait(1).to({x:-553,y:52.8},0).wait(1).to({x:-550.2,y:51.6},0).wait(1).to({x:-547.3,y:50.4},0).wait(1).to({x:-544.5,y:49.3},0).wait(1).to({x:-541.7,y:48.1},0).wait(1).to({x:-538.8,y:47},0).wait(1).to({x:-536,y:45.8},0).wait(1).to({x:-533.2,y:44.7},0).wait(1).to({x:-530.4,y:43.5},0).wait(1).to({x:-527.6,y:42.4},0).wait(1).to({x:-524.9,y:41.3},0).wait(1).to({x:-522.1,y:40.1},0).wait(1).to({x:-519.3,y:39},0).wait(1).to({x:-516.6,y:37.9},0).wait(1).to({x:-513.8,y:36.8},0).wait(1).to({x:-511.1,y:35.6},0).wait(1).to({x:-508.3,y:34.5},0).wait(1).to({x:-505.6,y:33.4},0).wait(1).to({x:-502.9,y:32.3},0).wait(1).to({x:-500.2,y:31.2},0).wait(1).to({x:-497.5,y:30.1},0).wait(1).to({x:-494.8,y:29},0).wait(1).to({x:-492.1,y:27.9},0).wait(1).to({x:-489.4,y:26.8},0).wait(1).to({x:-486.7,y:25.7},0).wait(1).to({x:-484,y:24.6},0).wait(1).to({x:-481.3,y:23.5},0).wait(1).to({x:-478.7,y:22.4},0).wait(1).to({x:-476,y:21.3},0).wait(1).to({x:-473.4,y:20.2},0).wait(1).to({x:-470.7,y:19.1},0).wait(1).to({x:-468.1,y:18},0).wait(1).to({x:-465.4,y:17},0).wait(1).to({x:-462.8,y:15.9},0).wait(1).to({x:-460.2,y:14.8},0).wait(1).to({x:-457.5,y:13.7},0).wait(1).to({x:-455,y:12.7},0).wait(1).to({x:-452.3,y:11.6},0).wait(1).to({x:-449.7,y:10.5},0).wait(1).to({x:-447.1,y:9.5},0).wait(1).to({x:-444.5,y:8.4},0).wait(1).to({x:-441.9,y:7.4},0).wait(1).to({x:-439.3,y:6.3},0).wait(1).to({x:-436.8,y:5.3},0).wait(1).to({x:-434.2,y:4.2},0).wait(1).to({x:-431.6,y:3.2},0).wait(1).to({x:-429.1,y:2.1},0).wait(1).to({x:-426.5,y:1.1},0).wait(1).to({x:-423.9,y:0},0).wait(1).to({x:-421.4,y:-0.8},0).wait(1).to({x:-418.8,y:-1.9},0).wait(1).to({x:-416.3,y:-2.9},0).wait(1).to({x:-413.8,y:-3.9},0).wait(1).to({x:-411.2,y:-5},0).wait(1).to({x:-408.7,y:-6},0).wait(1).to({x:-406.2,y:-7},0).wait(1).to({x:-403.7,y:-8.1},0).wait(1).to({x:-401.1,y:-9.1},0).wait(1).to({x:-398.6,y:-10.1},0).wait(1).to({x:-396.1,y:-11.2},0).wait(1).to({x:-393.6,y:-12.2},0).wait(1).to({x:-391.1,y:-13.2},0).wait(1).to({x:-388.6,y:-14.2},0).wait(1).to({x:-386.1,y:-15.3},0).wait(1).to({x:-383.6,y:-16.3},0).wait(1).to({x:-381.1,y:-17.3},0).wait(1).to({x:-378.6,y:-18.3},0).wait(1).to({x:-376.2,y:-19.3},0).wait(1).to({x:-373.7,y:-20.3},0).wait(1).to({x:-371.2,y:-21.3},0).wait(1).to({x:-368.7,y:-22.4},0).wait(1).to({x:-366.3,y:-23.4},0).wait(1).to({x:-363.8,y:-24.4},0).wait(1).to({x:-361.3,y:-25.4},0).wait(1).to({x:-358.9,y:-26.4},0).wait(1).to({x:-356.4,y:-27.4},0).wait(1).to({x:-353.9,y:-28.4},0).wait(1).to({x:-351.5,y:-29.4},0).wait(1).to({x:-349,y:-30.4},0).wait(1).to({x:-346.6,y:-31.4},0).wait(1).to({x:-344.1,y:-32.4},0).wait(1).to({x:-341.7,y:-33.4},0).wait(1).to({x:-339.3,y:-34.4},0).wait(1).to({x:-336.8,y:-35.4},0).wait(1).to({x:-334.4,y:-36.4},0).wait(1).to({x:-331.9,y:-37.4},0).wait(1).to({x:-329.5,y:-38.4},0).wait(1).to({x:-327.1,y:-39.4},0).wait(1).to({x:-324.6,y:-40.4},0).wait(1).to({x:-322.2,y:-41.4},0).wait(1).to({x:-319.8,y:-42.4},0).wait(1).to({x:-317.3,y:-43.4},0).wait(1).to({x:-314.9,y:-44.4},0).wait(1).to({x:-312.5,y:-45.3},0).wait(1).to({x:-310.1,y:-46.3},0).wait(1).to({x:-307.6,y:-47.3},0).wait(1).to({x:-305.2,y:-48.3},0).wait(1).to({x:-302.8,y:-49.3},0).wait(1).to({x:-300.4,y:-50.3},0).wait(1).to({x:-298,y:-51.3},0).wait(1).to({x:-295.5,y:-52.3},0).wait(1).to({x:-293.1,y:-53.3},0).wait(1).to({x:-290.7,y:-54.3},0).wait(1).to({x:-288.4,y:-55.2},0).wait(1).to({x:-285.9,y:-56.2},0).wait(1).to({x:-283.5,y:-57.2},0).wait(1).to({x:-281,y:-58.2},0).wait(1).to({x:-278.6,y:-59.2},0).wait(1).to({x:-276.2,y:-60.2},0).wait(1).to({x:-273.8,y:-61.2},0).wait(1).to({x:-271.4,y:-62.2},0).to({_off:true},1).wait(277));

	// Ebene 4
	this.instance_1 = new lib.hs_sc1_layer4_schiff();
	this.instance_1.setTransform(-271.5,-62.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(287).to({_off:false},0).wait(1).to({x:-274.2,y:-61.4},0).wait(1).to({x:-276.9,y:-60.7},0).wait(1).to({x:-279.7,y:-60},0).wait(1).to({x:-282.5,y:-59.3},0).wait(1).to({x:-285.2,y:-58.6},0).wait(1).to({x:-288,y:-57.9},0).wait(1).to({x:-290.8,y:-57.2},0).wait(1).to({x:-293.6,y:-56.5},0).wait(1).to({x:-296.3,y:-55.8},0).wait(1).to({x:-299.1,y:-55.1},0).wait(1).to({x:-301.9,y:-54.4},0).wait(1).to({x:-304.7,y:-53.7},0).wait(1).to({x:-307.4,y:-53},0).wait(1).to({x:-310.2,y:-52.3},0).wait(1).to({x:-313,y:-51.6},0).wait(1).to({x:-315.8,y:-50.9},0).wait(1).to({x:-318.6,y:-50.2},0).wait(1).to({x:-321.4,y:-49.5},0).wait(1).to({x:-324.1,y:-48.8},0).wait(1).to({x:-326.9,y:-48.1},0).wait(1).to({x:-329.7,y:-47.4},0).wait(1).to({x:-332.5,y:-46.7},0).wait(1).to({x:-335.3,y:-46},0).wait(1).to({x:-338.1,y:-45.3},0).wait(1).to({x:-340.9,y:-44.5},0).wait(1).to({x:-343.7,y:-43.8},0).wait(1).to({x:-346.5,y:-43.1},0).wait(1).to({x:-349.3,y:-42.4},0).wait(1).to({x:-352.1,y:-41.7},0).wait(1).to({x:-354.9,y:-41},0).wait(1).to({x:-357.7,y:-40.3},0).wait(1).to({x:-360.5,y:-39.6},0).wait(1).to({x:-363.3,y:-38.9},0).wait(1).to({x:-366.1,y:-38.1},0).wait(1).to({x:-369,y:-37.4},0).wait(1).to({x:-371.8,y:-36.7},0).wait(1).to({x:-374.6,y:-36},0).wait(1).to({x:-377.4,y:-35.3},0).wait(1).to({x:-380.3,y:-34.6},0).wait(1).to({x:-383.1,y:-33.8},0).wait(1).to({x:-385.9,y:-33.1},0).wait(1).to({x:-388.8,y:-32.4},0).wait(1).to({x:-391.6,y:-31.7},0).wait(1).to({x:-394.5,y:-31},0).wait(1).to({x:-397.3,y:-30.2},0).wait(1).to({x:-400.2,y:-29.5},0).wait(1).to({x:-403.1,y:-28.8},0).wait(1).to({x:-405.9,y:-28.1},0).wait(1).to({x:-408.8,y:-27.3},0).wait(1).to({x:-411.7,y:-26.6},0).wait(1).to({x:-414.5,y:-25.9},0).wait(1).to({x:-417.4,y:-25.1},0).wait(1).to({x:-420.3,y:-24.4},0).wait(1).to({x:-423.2,y:-23.7},0).wait(1).to({x:-426.1,y:-22.9},0).wait(1).to({x:-429,y:-22.2},0).wait(1).to({x:-431.9,y:-21.5},0).wait(1).to({x:-434.8,y:-20.7},0).wait(1).to({x:-437.7,y:-20},0).wait(1).to({x:-440.7,y:-19.3},0).wait(1).to({x:-443.6,y:-18.5},0).wait(1).to({x:-446.5,y:-17.8},0).wait(1).to({x:-449.4,y:-17},0).wait(1).to({x:-452.4,y:-16.3},0).wait(1).to({x:-455.3,y:-15.5},0).wait(1).to({x:-458.3,y:-14.8},0).wait(1).to({x:-461.2,y:-14},0).wait(1).to({x:-464.2,y:-13.3},0).wait(1).to({x:-467.2,y:-12.5},0).wait(1).to({x:-470.1,y:-11.8},0).wait(1).to({x:-473.1,y:-11},0).wait(1).to({x:-476.1,y:-10.3},0).wait(1).to({x:-479.1,y:-9.5},0).wait(1).to({x:-482.1,y:-8.8},0).wait(1).to({x:-485.1,y:-8},0).wait(1).to({x:-488.1,y:-7.2},0).wait(1).to({x:-491.1,y:-6.5},0).wait(1).to({x:-494.2,y:-5.7},0).wait(1).to({x:-497.2,y:-4.9},0).wait(1).to({x:-500.2,y:-4.2},0).wait(1).to({x:-503.3,y:-3.4},0).wait(1).to({x:-506.3,y:-2.6},0).wait(1).to({x:-509.4,y:-1.8},0).wait(1).to({x:-512.5,y:-1.1},0).wait(1).to({x:-515.5,y:-0.3},0).wait(1).to({x:-518.6,y:0.3},0).wait(1).to({x:-521.7,y:1.1},0).wait(1).to({x:-524.8,y:1.9},0).wait(1).to({x:-527.9,y:2.6},0).wait(1).to({x:-531,y:3.4},0).wait(1).to({x:-534.1,y:4.2},0).wait(1).to({x:-537.2,y:5},0).wait(1).to({x:-540.4,y:5.8},0).wait(1).to({x:-543.5,y:6.6},0).wait(1).to({x:-546.7,y:7.4},0).wait(1).to({x:-549.8,y:8.2},0).wait(1).to({x:-553,y:9},0).wait(1).to({x:-556.1,y:9.8},0).wait(1).to({x:-559.3,y:10.6},0).wait(1).to({x:-562.5,y:11.4},0).wait(1).to({x:-565.7,y:12.2},0).wait(1).to({x:-568.9,y:13.1},0).wait(1).to({x:-572.2,y:13.9},0).wait(1).to({x:-575.3,y:14.7},0).wait(1).to({x:-578.6,y:15.5},0).wait(1).to({x:-581.8,y:16.3},0).wait(1).to({x:-585.1,y:17.1},0).wait(1).to({x:-588.4,y:18},0).wait(1).to({x:-591.6,y:18.8},0).wait(1).to({x:-594.9,y:19.6},0).wait(1).to({x:-598.2,y:20.5},0).wait(1).to({x:-601.5,y:21.3},0).wait(1).to({x:-604.8,y:22.1},0).wait(1).to({x:-608.1,y:23},0).wait(1).to({x:-611.4,y:23.8},0).wait(1).to({x:-614.8,y:24.7},0).wait(1).to({x:-618.1,y:25.5},0).wait(1).to({x:-621.5,y:26.4},0).wait(1).to({x:-624.8,y:27.2},0).wait(1).to({x:-628.2,y:28.1},0).wait(1).to({x:-631.6,y:28.9},0).wait(1).to({x:-635,y:29.8},0).wait(1).to({x:-638.4,y:30.7},0).wait(1).to({x:-641.8,y:31.5},0).wait(1).to({x:-645.3,y:32.4},0).wait(1).to({x:-648.7,y:33.3},0).wait(1).to({x:-652.1,y:34.1},0).wait(1).to({x:-655.6,y:35},0).wait(1).to({x:-659.1,y:35.9},0).wait(1).to({x:-662.6,y:36.8},0).wait(1).to({x:-666,y:37.7},0).wait(1).to({x:-669.5,y:38.5},0).wait(1).to({x:-673.1,y:39.4},0).wait(1).to({x:-676.6,y:40.3},0).wait(1).to({x:-680.1,y:41.2},0).wait(1).to({x:-683.7,y:42.1},0).wait(1).to({x:-687.2,y:43},0).wait(1).to({x:-690.7,y:43.9},0).wait(1).to({x:-694.4,y:44.8},0).wait(1).to({x:-698,y:45.8},0).wait(1).to({x:-701.6,y:46.7},0).wait(1).to({x:-705.2,y:47.6},0).wait(1).to({x:-708.8,y:48.5},0).wait(1).to({x:-712.5,y:49.4},0).wait(1).to({x:-716.1,y:50.4},0).wait(1).to({x:-719.8,y:51.3},0).wait(1).to({x:-723.5,y:52.2},0).wait(1).to({x:-727.2,y:53.2},0).wait(1).to({x:-730.9,y:54.1},0).wait(1).to({x:-734.6,y:55},0).wait(1).to({x:-738.3,y:56},0).wait(1).to({x:-742.1,y:56.9},0).wait(1).to({x:-745.8,y:57.9},0).wait(1).to({x:-749.6,y:58.8},0).wait(1).to({x:-753.4,y:59.8},0).wait(1).to({x:-757.2,y:60.8},0).wait(1).to({x:-761,y:61.7},0).wait(1).to({x:-764.8,y:62.7},0).wait(1).to({x:-768.7,y:63.7},0).wait(1).to({x:-772.5,y:64.6},0).wait(1).to({x:-776.4,y:65.6},0).wait(1).to({x:-780.2,y:66.6},0).wait(1).to({x:-784.1,y:67.6},0).wait(1).to({x:-788,y:68.6},0).wait(1).to({x:-792,y:69.6},0).wait(1).to({x:-795.9,y:70.6},0).wait(1).to({x:-799.8,y:71.6},0).wait(1).to({x:-803.8,y:72.6},0).wait(1).to({x:-807.8,y:73.6},0).wait(1).to({x:-811.8,y:74.6},0).wait(1).to({x:-815.8,y:75.6},0).wait(1).to({x:-819.8,y:76.6},0).wait(1).to({x:-823.8,y:77.6},0).wait(1).to({x:-827.9,y:78.7},0).wait(1).to({x:-831.9,y:79.7},0).wait(1).to({x:-836,y:80.7},0).wait(1).to({x:-840.1,y:81.8},0).wait(1).to({x:-844.2,y:82.8},0).wait(1).to({x:-848.3,y:83.9},0).wait(1).to({x:-852.5,y:84.9},0).wait(1).to({x:-856.6,y:86},0).wait(1).to({x:-860.8,y:87},0).wait(1).to({x:-865,y:88.1},0).wait(1).to({x:-869.2,y:89.1},0).wait(1).to({x:-873.4,y:90.2},0).wait(1).to({x:-877.6,y:91.3},0).wait(1).to({x:-881.8,y:92.3},0).wait(1).to({x:-886.1,y:93.4},0).wait(1).to({x:-890.4,y:94.5},0).wait(1).to({x:-894.6,y:95.6},0).wait(1).to({x:-899,y:96.7},0).wait(1).to({x:-903.3,y:97.8},0).wait(1).to({x:-907.6,y:98.9},0).wait(1).to({x:-912,y:100},0).wait(1).to({x:-916.4,y:101.1},0).wait(1).to({x:-920.8,y:102.2},0).wait(1).to({x:-925.2,y:103.3},0).wait(1).to({x:-929.6,y:104.5},0).wait(1).to({x:-934,y:105.6},0).wait(1).to({x:-938.5,y:106.7},0).wait(1).to({x:-943,y:107.8},0).wait(1).to({x:-947.5,y:109},0).wait(1).to({x:-952,y:110.1},0).wait(1).to({x:-956.5,y:111.3},0).wait(1).to({x:-961.1,y:112.4},0).wait(1).to({x:-965.6,y:113.6},0).wait(1).to({x:-970.2,y:114.7},0).wait(1).to({x:-974.8,y:115.9},0).wait(1).to({x:-979.4,y:117.1},0).wait(1).to({x:-984,y:118.2},0).wait(1).to({x:-988.7,y:119.4},0).wait(1).to({x:-993.4,y:120.6},0).wait(1).to({x:-998,y:121.8},0).wait(1).to({x:-1002.7,y:123},0).wait(1).to({x:-1007.5,y:124.2},0).wait(1).to({x:-1012.2,y:125.4},0).wait(1).to({x:-1017,y:126.6},0).wait(1).to({x:-1021.7,y:127.8},0).wait(1).to({x:-1026.5,y:129},0).wait(1).to({x:-1031.3,y:130.2},0).wait(1).to({x:-1036.2,y:131.5},0).wait(1).to({x:-1041,y:132.7},0).wait(1).to({x:-1045.9,y:133.9},0).wait(1).to({x:-1050.8,y:135.2},0).wait(1).to({x:-1055.7,y:136.4},0).wait(1).to({x:-1060.6,y:137.7},0).wait(1).to({x:-1065.6,y:138.9},0).wait(1).to({x:-1070.5,y:140.2},0).wait(1).to({x:-1075.4,y:141.4},0).wait(1).to({x:-1080.5,y:142.7},0).wait(1).to({x:-1085.6,y:144},0).wait(1).to({x:-1090.6,y:145.3},0).wait(1).to({x:-1095.7,y:146.5},0).wait(1).to({x:-1100.7,y:147.8},0).wait(1).to({x:-1105.8,y:149.1},0).wait(1).to({x:-1111,y:150.4},0).wait(1).to({x:-1116.1,y:151.7},0).wait(1).to({x:-1121.3,y:153},0).wait(1).to({x:-1126.5,y:154.3},0).wait(1).to({x:-1131.7,y:155.7},0).wait(1).to({x:-1136.9,y:157},0).wait(1).to({x:-1142.1,y:158.3},0).wait(1).to({x:-1147.4,y:159.6},0).wait(1).to({x:-1152.7,y:161},0).wait(1).to({x:-1158,y:162.3},0).wait(1).to({x:-1163.3,y:163.7},0).wait(1).to({x:-1168.7,y:165},0).wait(1).to({x:-1174,y:166.4},0).wait(1).to({x:-1179.3,y:167.7},0).wait(1).to({x:-1184.8,y:169.1},0).wait(1).to({x:-1190.3,y:170.5},0).wait(1).to({x:-1195.7,y:171.9},0).wait(1).to({x:-1201.2,y:173.3},0).wait(1).to({x:-1206.7,y:174.7},0).wait(1).to({x:-1212.2,y:176.1},0).wait(1).to({x:-1217.8,y:177.5},0).wait(1).to({x:-1223.3,y:178.9},0).wait(1).to({x:-1228.9,y:180.3},0).wait(1).to({x:-1234.5,y:181.7},0).wait(1).to({x:-1240.1,y:183.1},0).wait(1).to({x:-1245.8,y:184.6},0).wait(1).to({x:-1251.4,y:186},0).wait(1).to({x:-1257.1,y:187.5},0).wait(1).to({x:-1262.8,y:188.9},0).wait(1).to({x:-1268.6,y:190.4},0).wait(1).to({x:-1274.3,y:191.8},0).wait(1).to({x:-1280.1,y:193.3},0).wait(1).to({x:-1285.9,y:194.8},0).wait(1).to({x:-1291.8,y:196.2},0).wait(1).to({x:-1297.6,y:197.7},0).wait(1).to({x:-1303.5,y:199.2},0).wait(1).to({x:-1309.4,y:200.7},0).wait(1).to({x:-1315.3,y:202.2},0).wait(1).to({x:-1321.2,y:203.7},0).wait(1).to({x:-1327.2,y:205.2},0).wait(1).to({x:-1333.2,y:206.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1439,191.2,516,236.5);


(lib.gr_sc1_photo = function(mode,startPosition,loop) {
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
	this.pic = new lib.gk_sc1_photoX();
	this.pic.setTransform(-1112.4,386.8);

	this.timeline.addTween(cjs.Tween.get(this.pic).to({_off:true},1).wait(5).to({scaleX:1.3,scaleY:1.3,x:323.1,y:-786.6,_off:false},0).wait(1).to({regX:-133.6,regY:145.1,scaleX:1.28,scaleY:1.28,x:145.1,y:-537},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:141.2,y:-476.4},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:137.3,y:-415.9},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:133.4,y:-355.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:129.4,y:-294.8},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:125.6,y:-234.2},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:121.7,y:-173.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:117.8,y:-113.1},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:113.8,y:-52.5},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:109.9,y:7.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:106.1,y:68.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:102.2,y:129},0).wait(1).to({scaleX:1,scaleY:1,x:98.3,y:189.5},0).wait(1).to({regX:0,regY:0,x:232,y:44.5},0).wait(1).wait(1).to({regX:-133.6,regY:145.1,rotation:-1.9,x:110.3,y:250.9},0).wait(1).to({rotation:-4,x:122.6,y:312},0).wait(1).to({rotation:-6.2,x:135,y:372.9},0).wait(1).to({rotation:-8.3,x:147.6,y:433.6},0).wait(1).to({rotation:-10.4,x:160.3,y:494.1},0).wait(1).to({rotation:-12.5,x:173.2,y:554.3},0).wait(1).to({rotation:-14.7,x:186.1,y:614.3},0).wait(1).to({rotation:-16.8,x:199.3,y:674.1},0).wait(1).to({rotation:-18.9,x:212.5,y:733.6},0).wait(1).to({rotation:-21,x:225.9,y:792.9},0).wait(1).to({x:232.5,y:849.3},0).wait(1).to({x:239.1,y:905.7},0).wait(1).to({x:245.7,y:962.2},0).wait(1).to({x:252.3,y:1018.8},0).wait(1).to({x:258.9,y:1075.2},0).wait(1).to({x:265.5,y:1131.7},0).wait(1).to({x:272.1,y:1188.2},0).wait(1).to({x:278.7,y:1244.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1546.1,131.9,600,800);


(lib.hs_sc1_layer4 = function() {
	this.initialize();

	// Ebene 1
	this.schiff = new lib.hs_sc1_layer4_schiff_anim();
	this.schiff.setTransform(-26.2,25.7);

	this.kirche = new lib.hs_sc1_layer4_kirche();
	this.kirche.setTransform(-339.1,-430.3);

	this.instance = new lib.hallstatt_01_04();
	this.instance.setTransform(-959.9,-396.4);

	this.addChild(this.instance,this.kirche,this.schiff);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1528.3,-635,2488.4,1114.3);


(lib.hs_sc1 = function(mode,startPosition,loop) {
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

	// Ebene 5
	this.instance = new lib.hs_sc1_layer1();
	this.instance.setTransform(2160.2,1126.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:2119.5,y:1081.4},0).wait(1).to({x:2078.8,y:1036.1},0).wait(1).to({x:2038.1,y:990.9},0).wait(1).to({x:1997.3,y:945.6},0).wait(1).to({x:1956.6,y:900.4},0).wait(1).to({x:1916,y:855.2},0).wait(1).to({x:1875.2,y:809.9},0).wait(1).to({x:1834.5,y:764.6},0).wait(1).to({x:1793.8,y:719.4},0).wait(1).to({x:1753.1,y:674.1},0).wait(1).to({x:1712.4,y:628.9},0).to({_off:true},1).wait(13));

	// Ebene 4
	this.instance_1 = new lib.hs_sc1_layer2();
	this.instance_1.setTransform(2336.2,909.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:2263.6,y:891.4},0).wait(1).to({x:2191.1,y:873.1},0).wait(1).to({x:2118.7,y:854.7},0).wait(1).to({x:2046.1,y:836.4},0).wait(1).to({x:1973.6,y:818},0).wait(1).to({x:1901.1,y:799.7},0).wait(1).to({x:1828.6,y:781.4},0).wait(1).to({x:1756,y:763},0).wait(1).to({x:1683.5,y:744.7},0).wait(1).to({x:1611,y:726.3},0).wait(1).to({x:1538.5,y:708},0).to({_off:true},1).wait(13));

	// Ebene 3
	this.instance_2 = new lib.hs_sc1_layer3();
	this.instance_2.setTransform(2727.2,175,1.109,1.109);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-57.4,x:2548.2,y:195},0).wait(1).to({x:2432.9,y:215},0).wait(1).to({x:2317.8,y:234.9},0).wait(1).to({x:2202.5,y:255},0).wait(1).to({x:2087.2,y:275},0).wait(1).to({x:1972.1,y:294.9},0).wait(1).to({x:1856.9,y:314.9},0).wait(1).to({x:1741.5,y:335},0).wait(1).to({x:1626.3,y:355},0).wait(1).to({x:1511.1,y:375},0).wait(1).to({x:1395.9,y:395},0).to({_off:true},1).wait(13));

	// Ebene 2
	this.instance_3 = new lib.hs_sc1_layer4();
	this.instance_3.setTransform(-1060.6,884.6,1.092,1.092);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-328.7,regY:-77.8,x:-1237.2,y:781.7},0).wait(1).to({x:-1055.1,y:763.9},0).wait(1).to({x:-873.1,y:746.2},0).wait(1).to({x:-690.8,y:728.3},0).wait(1).to({x:-508.7,y:710.5},0).wait(1).to({x:-326.8,y:692.7},0).wait(1).to({x:-144.7,y:674.9},0).wait(1).to({x:37.4,y:657.1},0).wait(1).to({x:219.5,y:639.3},0).wait(1).to({x:401.6,y:621.5},0).wait(1).to({x:583.8,y:603.7},0).to({_off:true},1).wait(13));

	// Ebene 9
	this.instance_4 = new lib.hs_sc1_layer1();
	this.instance_4.setTransform(1712.4,628.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).wait(1).to({x:1759.2,y:650.8},0).wait(1).to({x:1806.1,y:672.8},0).wait(1).to({x:1853,y:694.8},0).wait(1).to({x:1899.9,y:716.8},0).wait(1).to({x:1946.8,y:738.8},0).wait(1).to({x:1993.6,y:760.8},0).wait(1).to({x:2040.5,y:782.8},0).wait(1).to({x:2087.5,y:804.8},0).wait(1).to({x:2134.4,y:826.8},0).wait(1).to({x:2181.3,y:848.8},0).wait(1).to({x:2228.2,y:870.8},0).wait(1));

	// Ebene 8
	this.instance_5 = new lib.hs_sc1_layer2();
	this.instance_5.setTransform(1538.5,708);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).wait(1).to({x:1609.5,y:714.4},0).wait(1).to({x:1680.6,y:720.7},0).wait(1).to({x:1751.6,y:727.1},0).wait(1).to({x:1822.7,y:733.5},0).wait(1).to({x:1893.8,y:739.8},0).wait(1).to({x:1964.8,y:746.2},0).wait(1).to({x:2035.9,y:752.5},0).wait(1).to({x:2107,y:758.9},0).wait(1).to({x:2178.1,y:765.3},0).wait(1).to({x:2249.2,y:771.6},0).wait(1).to({x:2320.3,y:778},0).wait(1));

	// Ebene 7
	this.instance_6 = new lib.hs_sc1_layer3();
	this.instance_6.setTransform(1459.6,395,1.109,1.109);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).wait(1).to({regX:-57.4,x:1506.9,y:366.1},0).wait(1).to({x:1618,y:337.3},0).wait(1).to({x:1728.9,y:308.5},0).wait(1).to({x:1840.1,y:279.7},0).wait(1).to({x:1951.1,y:250.9},0).wait(1).to({x:2062,y:222.1},0).wait(1).to({x:2173.1,y:193.3},0).wait(1).to({x:2284.3,y:164.4},0).wait(1).to({x:2395.3,y:135.6},0).wait(1).to({x:2506.4,y:106.8},0).wait(1).to({x:2617.4,y:78},0).wait(1));

	// Ebene 6
	this.instance_7 = new lib.hs_sc1_layer4();
	this.instance_7.setTransform(942.7,688.8,1.092,1.092);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).wait(1).to({regX:-328.7,regY:-77.8,x:400.4,y:619.1},0).wait(1).to({x:217,y:634.6},0).wait(1).to({x:33.8,y:650},0).wait(1).to({x:-149.6,y:665.5},0).wait(1).to({x:-333,y:680.9},0).wait(1).to({x:-516.2,y:696.4},0).wait(1).to({x:-699.6,y:711.8},0).wait(1).to({x:-883.1,y:727.3},0).wait(1).to({x:-1066.5,y:742.7},0).wait(1).to({x:-1249.9,y:758.2},0).wait(1).to({x:-1433.3,y:773.6},0).wait(1));

	// GK_Scene2
	this.l5 = new lib.hs_sc1_layer5();
	this.l5.setTransform(932.7,-286.7,1.104,1.104);

	this.l1 = new lib.hs_sc1_layer1();
	this.l1.setTransform(1712.4,628.9);

	this.l2 = new lib.hs_sc1_layer2();
	this.l2.setTransform(1538.5,708);

	this.l3 = new lib.hs_sc1_layer3();
	this.l3.setTransform(1459.6,395,1.109,1.109);

	this.l4 = new lib.hs_sc1_layer4();
	this.l4.setTransform(942.7,688.8,1.092,1.092);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l5,p:{regX:0,regY:0,x:932.7,y:-286.7}}]}).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:730.3,y:-269}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:731.8,y:-225.9}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:733.2,y:-182.9}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:734.7,y:-139.8}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:736.1,y:-96.7}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:737.6,y:-53.7}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:739,y:-10.7}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:740.5,y:32.3}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:741.9,y:75.4}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:743.4,y:118.4}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:744.9,y:161.5}}]},1).to({state:[{t:this.l5,p:{regX:0,regY:0,x:948.7,y:186.9}},{t:this.l4},{t:this.l3},{t:this.l2},{t:this.l1}]},1).to({state:[{t:this.l5,p:{regX:0,regY:0,x:948.7,y:186.9}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:744.9,y:118.2}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:744.9,y:75}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:744.9,y:31.8}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:744.9,y:-11.4}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:744.9,y:-54.6}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:744.9,y:-97.9}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:744.9,y:-141.1}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:744.9,y:-184.4}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:744.9,y:-227.7}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:744.9,y:-270.9}}]},1).to({state:[{t:this.l5,p:{regX:-184.6,regY:-23,x:744.9,y:-314.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2729,-519,6005.2,2198.7);


(lib.hs_sc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,"action":13,"out":14});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		$(document).trigger("nextScene");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(11).call(this.frame_24));

	// Layer3_In
	this.instance = new lib.hs_sc3_layer3();
	this.instance.setTransform(960,882.6,1,1,0,0,0,1018,572.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1017.9,x:959.9,y:854.3},0).wait(1).to({y:825.9},0).wait(1).to({y:797.6},0).wait(1).to({y:769.3},0).wait(1).to({y:740.9},0).wait(1).to({y:712.6},0).wait(1).to({y:684.3},0).wait(1).to({y:655.9},0).wait(1).to({y:627.6},0).wait(1).to({y:599.3},0).wait(1).to({y:571},0).wait(1).to({y:542.6},0).to({_off:true},1).wait(12));

	// Layer2_In
	this.instance_1 = new lib.hs_sc3_layer2();
	this.instance_1.setTransform(-1179.9,370.5,1,1,0,0,0,1000,562.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:999.9,x:-1001.5,y:385.5},0).wait(1).to({x:-823.2,y:400.5},0).wait(1).to({x:-644.9,y:415.5},0).wait(1).to({x:-466.5,y:430.5},0).wait(1).to({x:-288.2,y:445.5},0).wait(1).to({x:-109.9,y:460.5},0).wait(1).to({x:68.3,y:475.5},0).wait(1).to({x:246.6,y:490.5},0).wait(1).to({x:424.9,y:505.5},0).wait(1).to({x:603.3,y:520.5},0).wait(1).to({x:781.6,y:535.5},0).wait(1).to({x:959.9,y:550.5},0).to({_off:true},1).wait(12));

	// Layer1_In
	this.instance_2 = new lib.hs_sc3_layer1();
	this.instance_2.setTransform(2980,168.6,1,1,0,0,0,986,554.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:2811.7,y:200.3},0).wait(1).to({x:2643.3,y:232},0).wait(1).to({x:2475,y:263.6},0).wait(1).to({x:2306.7,y:295.3},0).wait(1).to({x:2138.3,y:327},0).wait(1).to({x:1970,y:358.6},0).wait(1).to({x:1801.7,y:390.3},0).wait(1).to({x:1633.3,y:422},0).wait(1).to({x:1465,y:453.6},0).wait(1).to({x:1296.7,y:485.3},0).wait(1).to({x:1128.3,y:517},0).wait(1).to({x:960,y:548.6},0).to({_off:true},1).wait(12));

	// Layer3_Out
	this.instance_3 = new lib.hs_sc3_layer3();
	this.instance_3.setTransform(960,542.6,1,1,0,0,0,1018,572.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(1).to({regX:1017.9,x:959.9,y:578.6},0).wait(1).to({y:614.6},0).wait(1).to({y:650.6},0).wait(1).to({y:686.6},0).wait(1).to({y:722.6},0).wait(1).to({y:758.6},0).wait(1).to({y:794.6},0).wait(1).to({y:830.6},0).wait(1).to({y:866.6},0).wait(1).to({y:902.6},0).wait(1));

	// Ebene_7
	this.instance_4 = new lib.hs_sc3_layer2();
	this.instance_4.setTransform(960,550.5,1,1,0,0,0,1000,562.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).wait(1).to({regX:999.9,x:745.9,y:518.5},0).wait(1).to({x:531.9,y:486.5},0).wait(1).to({x:318.2,y:454.6},0).wait(1).to({x:103.9,y:422.5},0).wait(1).to({x:-109.9,y:390.5},0).wait(1).to({x:-323.6,y:358.6},0).wait(1).to({x:-537.6,y:326.6},0).wait(1).to({x:-751.9,y:294.5},0).wait(1).to({x:-965.9,y:262.5},0).wait(1).to({x:-1179.9,y:230.5},0).wait(1));

	// Ebene_8
	this.instance_5 = new lib.hs_sc3_layer1();
	this.instance_5.setTransform(960,548.6,1,1,0,0,0,986,554.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).wait(1).to({x:1170,y:518.6},0).wait(1).to({x:1380,y:488.6},0).wait(1).to({x:1589.8,y:458.7},0).wait(1).to({x:1800,y:428.6},0).wait(1).to({x:2010,y:398.6},0).wait(1).to({x:2219.8,y:368.7},0).wait(1).to({x:2429.8,y:338.7},0).wait(1).to({x:2640,y:308.6},0).wait(1).to({x:2850,y:278.6},0).wait(1).to({x:3060,y:248.6},0).wait(1));

	// Ebene_1
	this.instance_6 = new lib.hs_sc3_hg();
	this.instance_6.setTransform(960,540,1,1,0,0,0,960,540);

	this.photo = new lib.gr_sc1_photo();
	this.photo.setTransform(824.7,378.9,0.999,0.999,9.7);

	this.l1 = new lib.hs_sc3_layer3();
	this.l1.setTransform(960,542.6,1,1,0,0,0,1018,572.6);

	this.l2 = new lib.hs_sc3_layer2();
	this.l2.setTransform(960,550.5,1,1,0,0,0,1000,562.5);

	this.l3 = new lib.hs_sc3_layer1();
	this.l3.setTransform(960,548.6,1,1,0,0,0,986,554.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6},{t:this.l3},{t:this.l2},{t:this.l1},{t:this.photo}]},13).to({state:[{t:this.instance_6}]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.9,-29.9,2035.9,1145.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;