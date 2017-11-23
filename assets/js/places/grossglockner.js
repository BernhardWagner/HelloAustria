(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"grossglockner_atlas_", frames: [[0,2164,2055,558],[1922,0,1920,1080],[0,1082,1920,1080],[1922,1082,1920,1080],[0,0,1920,1080]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["grossglockner_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.großglockner_layer01_02 = function() {
	this.spriteSheet = ss["grossglockner_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.großglockner_layer01_03 = function() {
	this.spriteSheet = ss["grossglockner_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.großglockner_layer01_04 = function() {
	this.spriteSheet = ss["grossglockner_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.großglockner_layer01_05 = function() {
	this.spriteSheet = ss["grossglockner_atlas_"];
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


(lib.gr_sc1_himmel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.instance = new lib.großglockner_layer01_05();
	this.instance.parent = this;
	this.instance.setTransform(-1056,-594,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gr_sc1_himmel, new cjs.Rectangle(-1056,-594,2112,1188), null);


(lib.gk_sc1_wiese_vorne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["grossglockner_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-1027.5,-279.1)).s().p("EigiArlMAAAg/5QDegaEWgdIAAAAQA8gFA8AAQAAgFACgBIAQgIQACgBAAgFQKDgiKbAdIAAAAQBGAFBGAAQAAAFACABIAQAIQACABAAAFQECAQDyAdIADgDQACgCAFAAQASgXAfgMQABAAAAgFIAAgKIAAhuQAAgFACgDQADgCAFAAQAagZA1AKIADABQAIAEAKAAQAKAKAMAFIAbAJQABABAAAFQABAdARAOQACACAAAFIAAAKQC+AaDRgfIABgFIAAgKQAAgeAFgdIACgEQADgCAAgFQBKgXAzAkQAKAHANAEQACABAAAFQALCeAJCiIAAAKIAAAKQBJAfBVAXQACABAAAFIAAAKQBDAMA+AWIACABQATAFAUAAQCKA0B8BAIAQAIQACABAAAFQAiABAYANIAEACQAIAEAKAAQALATAcAGIADABQAIAEAKAAQAPAZAtAAIADACQACADAFAAQAiAQAcAVIAFAFQADADAAAFQAUAFASAJIADABQAOAFAPAAQAOhcgEhsIAAgKIAAgKQilhVjYggQgTgDgTgFQgBAAAAgFIAAgeIAAgKIAAgKQgdgLgYgPIgPgIQgCgBAAgFQgygKgSgpIgEgHQgDgCgFAAQBIjWBgi7IAEgHQADgCAFAAIAAgUIAAgKIAAgKQAshRAohXIAEgFQACgCAAgFQAhgMAvAHIACABQAIAEAKAAQBGAeA/AjIAPAJQACABAAAFIAoAAQAKAKAMAFQANAFAOgFQABAAAAgFIAAhGQAAgFACgDQADgCAFAAQAWgOBDASIADADQADADAFAAIAABuQAAAFACACQADADAFAAQOUE1SqiQIAAAFIAAAKQAjG0gFGyIAAAKIAAAKQgmAOhSgJIgDACQgCADgFAAQAAFFgKE7IAAAKIAAAJQKnCSMXAJUAjAAAcAcagHxQAAAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgIgEgKAAQh5g2iJgpQgBAAAAAAQAAAAAAgBQAAAAABgBQAAAAABgBQACgCAFAAQBegFB0gKIACgBQAIgEAKAAQA+gmAbhPQABgDAIgEQACgBAAgFQgHggAOgLQADgCAAgFIAAgKQgPgKgRgHIgQgHQgCgBAAgFQgKgFgKgDQgKgCgIgEQgCgBAAgFQgdgBgPgOQgGgFgIgEQgCgBAAgFQgNgMgbgDIgCgBQgIgEgKAAQgZgUgcgQIgPgIQgCgBAAgFQBMgEByAJIADgDQACgCAFAAQFOjLAGnnIAAgKIAAgKQAwDZApDfIABAKIAAAKQAcA5AeA2QACAEAAAFIAAAKQAeAKAWARIAFAFQADADAAAFQBSANBXgSQABAAAAgFIAAgKQAvkIAqkKIABgKIAAgKQAFgFADgGIAEgHQADgCAFAAQAvlTA+lBIABgKIAAgKQAUgFAUAAIAAAFIAAAKQAUAyATAyQABAFACACQADADAFAAIAAAUIAAAKIAAAKQAfAxARA9QACAFADACQACADAFAAIAAAUIAAAKIAAAKQC/G7CyHJQABAFACABQAIAEAKAAQAfhPAqhFIAFgFQACgCAAgFQAFAAADgDIAEgDQAIgEAKAAQBQkOA8kqQAAgCAIgEQACgBAAgFQArjPBVikQACgEAAgFIAAgKQAQgPALgRIAFgGQADgCAFAAQCulkE2jcQAGgEAIAEQACABAAAFQhNBJgzBiIgEAGQgDADgFAAQgyDeBrCVQADAEAAAFIAAAKQAKAAAIAEIAEADQADADAFAAQCFEGCqDhIAEAFQADADAAAFQBElRA9lXQABgFACgDQADgCAFAAQAKh4AdhsQABgCAIAEQACABAAAFQApBPAbBbQACAFACACQADADAFAAIAAAUIAAAKIAAAKQAKAFAHAHIAGAFQACADAFAAQC9IDDIH5QABAFACACQADADAFAAQCGjTAukrQAAgFACgBQAIgEAKAAQAPh4AFiCIAAgKIAAgKQBCIMDyFbIAEAFQAIAEAKAAQBQiSBEibQACgEAAgFIAAgKQgRhYAMhwIADgDQACgCAAgFQAhA5gDBdQAAAFACACQADADAFAAQAUi5AnimQABgEACgDQADgCAFAAQAolKBFksQABgFADgDQACgCAFAAQAOAUAFAeIABAKIAAAKQAKAFAIAHIAEAFQADADAFAAQCkIEDWHRIAEAGQADADAFAAIAAAUIAAAKIAAAKQAPAKAEAUIABAKIAAAKQAdAVAKAnQABAFACACQADADAFAAIAAAUIAAAKIAAAKQDoFRD/E7QADADAAAFIAAAKQLVgRLfg6IABAAQBAgFBBAAQAAgFACgBIAQgIQACgBAAgFQMYg1MAhSIAAgEMAAAA3mgEBCcgqFQAhgqAogjIAFAAQgaBNg6ADQAEgBACgCgECeDgriICggCIAAADIiggBgEigigrkIB4ABIAoABIigABg");
	this.shape.setTransform(0.1,299.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gk_sc1_wiese_vorne, new cjs.Rectangle(-1027.4,20.6,2055,557.8), null);


(lib.gk_sc1_wiese_hinten = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["grossglockner_atlas_"],1), null, new cjs.Matrix2D(1.067,0,0,1.067,-1023.9,-623.4)).s().p("Eif+BSlMAAAilJQI4IIIkIcQIiIZD2NDIABAKIAAALQAKARAUAJIAFACQAIAEALAAQALAVAeAGIAEABQAIAEAKAAQAlAhA6APIAEABQAIAEALAAQAKALAOAGIARAJQACABAAAFQAfALAfAPIADACQAJAEALAAQAWAQAWAMIARAJQADABAAAFQAgALAdAPIAFACQAJAEAKAAQAiAZAqAPQAKADAIAEQACABAAAFQALAGALADQAKACAIAEQADABAAAGQAgAKAdAPIAFACQAIAFALAAQAVAQAYALIARAJQACABAAAFQAgALAeAPIAEACQAJAEAKAAQAvAdAzAVIARAIQACABAAAFQAhALAdAPIAFACQAJAEAKAAQALAVAeAGIAEABQAJAEAKAAQCgDGCPDbQGmKFGkKNIAFAFQACADAAAFQAJASAVAIIAEACQAJAEALAAQAeAcAqATIAEACQAJAFALAAQAKAKANAHIARAIQACABAAAGQAzAHAdAeQAGAFAIAFQACABAAAFQAKAFAMADQAKADAIAEQADABAAAFQAyATArAcIAFACQAIAFALAAQALAKAMAHIARAIQACABAAAGQAzAHAdAeQAGAFAJAEQABACAAAFQALAFAMADQAJADAJAEQACABAAAFQAzATArAcIAFACQAIAFALAAQALAKAMAHIARAIQACABAAAGQAzAHAeAeQAEAFAJAEQACACAAAFQALAFALADQAKADAJAEQACABAAAFQAyATArAbIAFACQAJAFAKAAQALAKANAHIARAIQACABAAAGQAzAHAdAeQAFAFAIAEQADACAAAFQALAFALADQAKADAIAEQACABAAAFQAzATArAcIAEACQAJAFALAAQE8F/EuGMQHPJgHZJWIAGAGQADADAEAAQJjCJLoAIQE7AEEzgrQH/hII+gLUA/DgBQA4GgIwQAKgCAJgEQACgBAAgFQAfgBARgPQAFgGAJgEQACgBAAgFQA8gaA3ggIAFgCQAIgEALAAQAggRAZgVIAQgJQABgBAAgGQALgFAMgDQAJgCAJgFQACgBAAgFQA8gaA3gfIAEgDQAJgEAKAAQAogjA3gXIAEgCQAIgEALAAQAfgQAbgVQAGgGAIgEQACgBABgFQAKgGALgCQAKgDAJgEQACgBAAgGQA8gZA3ggIAFgCQAIgFALAAIBNgwIARgJQACgBAAgGQAfAAARgQQAFgFAJgEQACgBAAgGQAzgSArgcIAEgDQAJgEALAAQAKgFAIgIIAFgEQAIgEALAAQAVgQAYgMIARgIQACgCAAgFQA7gPApghQAGgFAJgEQACgCAAgFQAWgFATgKIAEgCQAIgEAMAAQAUgQAYgMIARgIQADgCAAgFQAfgLAegOIAEgDQAJgEAKAAQAWgQAXgMIASgIQABgBAAgGQAhgKAdgPIAFgCQAIgFALAAQAVgQAYgLIARgJQACgBAAgFQAggLAegPIAEgCQAJgEAKAAQAYgdAygIIADgCQAIgEALAAQALgFAIgIIAFgEQAIgEALAAQAigaApgOQALgDAIgEQACgBAAgFQAmgLAigPIAFgCQAJgEAKAAQAXgUAfgKQAKgCAIgFQACgBAAgFQDChKDIhGQABAAAAgFMAAABOqg");
	this.shape.setTransform(0,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gk_sc1_wiese_hinten, new cjs.Rectangle(-1023.9,-481,2047.8,1057), null);


(lib.gk_sc1_großglockner_vorne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["grossglockner_atlas_"],2), null, new cjs.Matrix2D(1.073,0,0,1.073,-1030,-579.4)).s().p("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XALIgSAJQgCABAAAFQgzAIgdAeQgGAFgJAFQgBABAAAFQgLAFgLADQgKADgJAEQgCABgBAGQgfAKgfAPIgEACQgIAFgLAAQgWAQgXAMIgRAIQgCABAAAGQg0AHgdAeQgGAGgIAEQgCABAAAFQgLAGgLADQgLACgIAEQgCABAAAGQggALgfAPIgDACQgJAEgLAAQgWAQgXAMIgRAIQgCACAAAFQg0AIgdAdQgFAGgIAEQgDABAAAGQgLAFgLADQgKACgJAFQgBABAAAFQghALgeAPIgEACQgJAEgLAAQgVAQgYAMIgRAJQgCABAAAFQgzAIgeAeQgFAFgIAEQgDABAAAGQgKAFgMADQgJACgJAFQgCABAAAFQghALgdAPIgFACQgJAEgKAAQgWAQgYAMIgRAJQgBABAAAFQg0AIgdAeQgFAFgJAFQgCABAAAFQgLAFgLADQgKADgJAEQgCABAAAFQggALgeAPIgFACQgIAFgLAAQgVAQgYALIgRAJQgDABABAGQgzAHgeAeQgFAFgJAFQgCABAAAFQgKAGgMACQgKADgIAEQgDABAAAGQggAKgeAPIgEADQgJAEgKAAQgXAQgWAMIgSAIQgCABAAAGQg8AZg3AgIgFADQgJAEgLAAQgLAVgfAGIgDABQgIAEgLAAUg9ZACFg+KAAcQgKAAgJgEgEig7haWQChAAChACQihADihAAgEig7hahMAkDAAAIAAAFMgkDAABg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gk_sc1_großglockner_vorne, new cjs.Rectangle(-1030,-579.3,2060,1158.8), null);


(lib.gk_sc1_großglockner_hinten = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["grossglockner_atlas_"],3), null, new cjs.Matrix2D(1.081,0,0,1.081,-1038.1,-617.5)).s().p("EiiMBWAIAAgFUBXMAAFBXLgAFIAAgGUhWMgAehV+gA4QgWAAgUgFQgBAAAAgGIAAz8MAAAghdQAAwvgEwtQgEw2ASwdIAAgKIAAgLQFLglFKgdQGLgjFphdQQukVOumzQE8iSE0iqQNsnkSzEgQAFABADgDQADgCAAgGQAdgNAWgWIAFgFQADgDAGAAQAQgbAcgOIAHgFQADgDAAgFQAVgWAfgPIAEgDQADgDAGAAQAKgQAOgOIAFgFQADgDAAgFQAjgEANgbIADgFQADgCAAgGQAZgSAbgSIAFgEQADgDAFAAQAQgbAcgOQAFgCACgDQADgDAAgFQAVgWAfgPQACgBADgDQACgCAGAAQADgTAQgHIAFgEQADgDAFAAQAWgVAYgTIAGgGQACgCAAgGQAhgPAYgZIAGgGQACgCAAgGQAWgWAegPIAFgDQADgDAFAAQALgQANgOIAGgFQADgDAAgFQAagGAOgSIAGgGQACgDAGAAQAVgcAegTIAFgEQADgDAGAAQAQgbAcgOIAHgFQADgDAAgFQAVgWAfgPIAEgEQADgCAFAAQALgRAOgNIAFgFQADgDAAgFQAjgEANgbIADgFQADgCAAgGQAZgSAbgSIAFgEQACgDAGAAQAQgbAcgOQAFgCACgDQADgDAAgFQAVgWAfgPQACgBADgDQACgCAGAAQADgTAQgHIAFgEQADgDAFAAQAWgVAYgTIAGgGQACgCAAgGQAZgTAbgRIAFgEQADgDAFAAQAQgbAdgOIAHgFQACgDAAgFQAYgJANgVIAEgFQADgDAAgFQAagGAOgSIAGgGQACgDAGAAQAVgVAYgTIAGgGQADgDAAgFQAhgQAYgYIAFgGQADgDAAgFQAVgWAfgPIAEgEQADgCAFAAQALgRAOgNIAFgFQADgDAAgFQAigEAOgbIADgFQADgCAAgGQAZgSAbgSIAFgEQACgDAGAAQAQgbAcgOQAFgCACgDQADgDAAgFQAVgWAfgPQACgBADgDQACgCAGAAQADgTAQgHIAFgEQADgDAFAAQAWgVAYgTIAGgGQACgCAAgGQARgQAZgKIAEgCQAIgEALAAQADASARAIIAFADQACADAGAAQAQAWATATIAFAFQADADAAAFQAWARASASIAGAGQADACAFAAQAQAWATATIAGAFQACADAAAGQAWAQATATIAFAFQADADAFAAQARAWASASIAGAGQADACAAAGQAVAQATATIAGAFQACADAGAAQAQAWATATIAFAFQADADAAAFQAWARASASIAGAGQADACAFAAQAQAhAZAYIAFAGQADACAFAAQAJAYAVANIAFAEQADADAFAAQARAVASATIAGAGQADACAAAGQHRh3HmiSIADACQADADAFAAQAFALAJAIIAFAFQADADAAAGQAcATAcAVIAGAGQACACAAAGQAYAJANAVIAEAFQADACAAAGQAiADANAbIAEAFQADADAAAFQAhAQAYAZIAFAFQADADAAAFQAVAWAfAPIAEAEQADACAGAAQAKARAOANIAFAGQADACAAAGQAhAPAYAZIAFAGQADACAAAGQAVAWAfAPIAFADQACADAGAAQADATAPAHIAFAEQADADAFAAQAVAbAfAUIAFAEQADADAFAAQAOAiAmAOIAFADQADADAFAAQADASARAIIAEADQADADAFAAQAVAcAfATIAFAEQADADAFAAQAQAbAdAOIAHAFQACADAAAFQARALANAOIAGAFQACADAGAAQAVAbAeAUIAFAEQADADAGAAQAQAbAcAOQAEACADADQADACAAAGQAXAJANAVIAEAFQADADAAAFQAiADANAbIAEAFQADADAAAFQAhAQAYAZIAFAFQADADAAAFQAXAJANAVIAEAGQADACAAAGQAjADANAbIADAFQADACAAAGQAhAPAYAZIAFAGQADADAAAFQAVAWAfAPQACABADADQACACAGAAQALAQANAOIAGAFQACADAAAFQAhAQAYAZIAGAFQACADAAAGQAVAWAfAOIAFAEQADADAFAAQADASARAIIAEAEQADACAGAAQAVAcAeATIAFAFQADACAFAAQAPAjAmANQACABACADQADACAFAAQADATARAHIAFAEQACADAGAAQAVAbAeAUIAGAEQACADAGAAQAQAbAcAOIAHAFQADADAAAFQAXAJANAVIAEAFQADADAAAFQAiAEAOAbIADAEQADADAAAFIA4ApIAGAFQADADAAAGQAXAJANAVIAEAFQADACAAAGQAjADANAbIAEAFQACADAAAFQAhAQAYAZIAFAFQADADAAAFQAXAJANAVIAFAFQACADAAAFQAjAEANAbIAEAFQACACAAAGQAZASAbASIAFAEQADADAFAAQK6hyLJjuQRFluTQDAUAiEAFVAntgAqQALAAAIAEQACABAAAGQgCQsgLQmQgKQigJQkIAAALIAAALQAQALASAGIAdAKQACAAAAAGQASCfgBC7QgFQtANQaQANQqAFQoQAAAGADADQACACAFAAg");
	this.shape.setTransform(0,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.gk_sc1_großglockner_hinten, new cjs.Rectangle(-1038.1,-516.9,2076.2,1100.9), null);


(lib.gk_sc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{In:1,action:12});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// Layer1
	this.instance = new lib.gk_sc1_wiese_vorne();
	this.instance.parent = this;
	this.instance.setTransform(-30.4,580.8,0.96,0.96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:299.5,x:-29.5,y:816.4},0).wait(1).to({x:-28.6,y:764.3},0).wait(1).to({x:-27.8,y:712.3},0).wait(1).to({x:-26.9,y:660.2},0).wait(1).to({x:-26.1,y:608.1},0).wait(1).to({x:-25.2,y:556.1},0).wait(1).to({x:-24.4,y:504.1},0).wait(1).to({x:-23.5,y:451.9},0).wait(1).to({x:-22.7,y:399.9},0).wait(1).to({x:-21.8,y:347.8},0).wait(1).to({x:-21,y:295.8},0).to({_off:true},1).wait(1));

	// Layer2
	this.instance_1 = new lib.gk_sc1_wiese_hinten();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-522.8,526.8,0.96,0.96);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:47.5,x:-476.3,y:526.5},0).wait(1).to({x:-429.7,y:480.5},0).wait(1).to({x:-383.3,y:434.7},0).wait(1).to({x:-336.7,y:388.7},0).wait(1).to({x:-290.2,y:342.7},0).wait(1).to({x:-243.7,y:296.9},0).wait(1).to({x:-197.2,y:250.9},0).wait(1).to({x:-150.6,y:204.9},0).wait(1).to({x:-104.1,y:159},0).wait(1).to({x:-57.5,y:113.1},0).wait(1).to({x:-11,y:67.2},0).to({_off:true},1).wait(1));

	// Layer3
	this.instance_2 = new lib.gk_sc1_großglockner_vorne();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1017.7,455.4,0.96,0.96);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:925.1,y:419.6},0).wait(1).to({x:832.6,y:383.9},0).wait(1).to({x:740.1,y:348.2},0).wait(1).to({x:647.5,y:312.5},0).wait(1).to({x:554.9,y:276.8},0).wait(1).to({x:462.5,y:241.1},0).wait(1).to({x:369.9,y:205.4},0).wait(1).to({x:277.3,y:169.6},0).wait(1).to({x:184.7,y:133.9},0).wait(1).to({x:92.2,y:98.2},0).wait(1).to({x:-0.4,y:62.5},0).to({_off:true},1).wait(1));

	// Ebene 10
	this.l4 = new lib.gk_sc1_großglockner_hinten();
	this.l4.name = "l4";
	this.l4.parent = this;
	this.l4.setTransform(-55.1,1054,0.96,0.96);

	this.timeline.addTween(cjs.Tween.get(this.l4).wait(1).to({regY:33.5,x:-53.3,y:994.8},0).wait(1).to({x:-51.5,y:903.4},0).wait(1).to({x:-49.7,y:812},0).wait(1).to({x:-47.8,y:720.5},0).wait(1).to({x:-46,y:629.1},0).wait(1).to({x:-44.2,y:537.8},0).wait(1).to({x:-42.4,y:446.3},0).wait(1).to({x:-40.6,y:354.8},0).wait(1).to({x:-38.8,y:263.4},0).wait(1).to({x:-37,y:172},0).wait(1).to({x:-35.2,y:80.6},0).to({_off:true},1).wait(1));

	// MainScene
	this.l5 = new lib.gr_sc1_himmel();
	this.l5.name = "l5";
	this.l5.parent = this;
	this.l5.setTransform(-31.1,23.6,0.96,0.96);

	this.l1 = new lib.gk_sc1_wiese_vorne();
	this.l1.name = "l1";
	this.l1.parent = this;
	this.l1.setTransform(-21,8.1,0.96,0.96);

	this.l2 = new lib.gk_sc1_wiese_hinten();
	this.l2.name = "l2";
	this.l2.parent = this;
	this.l2.setTransform(-11,21.6,0.96,0.96);

	this.l3 = new lib.gk_sc1_großglockner_vorne();
	this.l3.name = "l3";
	this.l3.parent = this;
	this.l3.setTransform(-0.4,62.5,0.96,0.96);

	this.l4_1 = new lib.gk_sc1_großglockner_hinten();
	this.l4_1.name = "l4_1";
	this.l4_1.parent = this;
	this.l4_1.setTransform(-35.2,48.4,0.96,0.96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l5}]}).to({state:[{t:this.l5},{t:this.l4_1},{t:this.l3},{t:this.l2},{t:this.l1}]},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1506.2,-546.9,3513.2,2161.8);


// stage content:
(lib.grossglockner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Ebene 1
	this.sc1 = new lib.gk_sc1();
	this.sc1.name = "sc1";
	this.sc1.parent = this;
	this.sc1.setTransform(972.8,539);

	this.timeline.addTween(cjs.Tween.get(this.sc1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(426.6,532.1,3513.2,2161.8);
// library properties:
lib.properties = {
	id: '8EA88BD02AF24BA0A920912FF3D5C8DA',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/grossglockner_atlas_.png", id:"grossglockner_atlas_"}
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
an.compositions['8EA88BD02AF24BA0A920912FF3D5C8DA'] = {
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