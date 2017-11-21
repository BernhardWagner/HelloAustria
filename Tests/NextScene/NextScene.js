(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.NextScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{specialScene:2});

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

	// Ebene 1
	this.subscene1 = new lib.sc1();
	this.subscene1.setTransform(270.1,210.5);

	this.subscene2 = new lib.sc2();
	this.subscene2.setTransform(243.5,223.2);

	this.specialScene = new lib.specialScene();
	this.specialScene.setTransform(234.8,188.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subscene1}]}).to({state:[{t:this.subscene2}]},1).to({state:[{t:this.specialScene}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-323.9,-35.9,1379.4,921.2);


// symbols:



(lib.sc1_2_ebene2 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgjcgmAQCjAACiAAQA3AAA1AJQA5ALA4ARQCiAxCMBaQBDAsBCAuQA2AnAxAuQCAB6CDB4QBEA+A5BIQAqA1AoA1QAjAvAhAwQBuCkBwClQAZAmAgAiQA6A/A3BAQAPATASARQAMANAOAKQALAKAPAGQCiA/CnBAQBVAhBXAhQAqAQAtAMQC6AzDDAWQAnAFAoAAQBSAABOAMQA6AJA2AZQA9AbBDAIQAbADAaAIQAWAIAYAFQBuAWBuAUQAQADARAHQAcAMAdAHQAQAEARAHQASAIATAHQAyAdAZAvQAzBLAmAsQAbAhAOARQAaAhAcAgQBDBNA+AiQAqAoAmAdQA4ApAtAcQA+AmBPAoQBoA0BgBOQAmAgAoAeQAqAnAdAVQAVAPAPATQAxA9A3A/QAtA1A3AwQAjAgAfA1QApBFAWBKQAeBqgDBxQgEBugEBuQgBAegFAeQgiC9hdCtQhbCqhcCoQgdA1gcAnQgNASgOARQgLANgMANQg1A4gWAeQghAtg5AgQgSAJgUAGQhvAghsApQgfALgeAPQg+AehEAHQgaADgYgJQgjgNgcgXQglgegogZQhAgng6gwQgkgcgogSQgbgMgagMQiCg/h+hBQgmgUglgUQg6geg7gbQikhLimhKQihhHiqgvQiIgmiGgWQhPgNhRgDQhzgFhxAEQgZABgZADQgoAMgMAFQhwAahWAFQhLAEhLACQhbABhZAOQgZADgZACQgtAEguAJQgYAFgZgCQikgLicAeQgUADgUACQhLAFhLAIQitATixgBQi1gBizgVQgygGgxgJQiMgZh4gsQhAgUgxgtQgNgMgOgKQiXhsiSh1QgTgPgSgQQgbgYgcgWQhBgyg8g3QhBg8gghJQgTgsAEg4QAFhBAAhBQAAgUAEgTQAGgaAGgaQAOhBAbhBQAXg2AUg3QAuiCAyiDQArhvA1hrQASgkAVgiQBkimA/i1QAnhyAPh2QACgTAGgTQAEgQAGgRQAehcAThhQAFgYADgZQACgPAEgQQAOg4ACg/QAKhRAMg8QADgOABgPQAEgtADgtQADg4gGg3QgFgsgBgtQgChSAPhOQAOhCAhhBQAvhcAmhWQAehGAog7QAng6AChKQAFg3ABgtQABgzgTgpQgSgmgKgqQgZAcgbAbQg3A5hEAeEgkdgmAQAhAAAgAAQAEgEADgFQA0g+A4gVQAugSAcg6QAQggADgKEgkOglGQgDgJgCgJEgkOglGQAagdAYgd");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339900").s().p("EAhDAnjQgjgNgcgXQglgdgogZQhAgog6gvQgkgdgogSIg1gYQiCg/h+hBIhLgnQg6geg7gbQikhMimhJQihhHiqgwQiIgliGgWQhPgNhRgEQhzgEhxAEQgZABgZADQgoAMgMAFQhwAZhWAFQhLAFhLABQhbAChZANQgZAEgZACQgtADguAKQgYAFgZgCQikgMicAeQgUAEgUABQhLAGhLAIQitASixAAQi1gBizgVQgygGgxgJQiMgZh4gsQhAgVgxgsQgNgMgOgLQiXhsiSh0IglggQgbgXgcgWQhBgzg8g2QhBg8gghJQgTgsAEg5QAFhAAAhBQAAgUAEgTIAMg0QAOhBAbhBQAXg2AUg3QAuiCAyiEQArhuA1hrQASgkAVgjQBkilA/i1QAnhzAPh1QACgUAGgSIAKghQAehdAThhQAFgYADgYQACgQAEgPQAOg4AChAQAKhQAMg8QADgPABgPIAHhaQADg4gGg2QgFgtgBgtQgChSAPhNQAOhDAhhAQAvhcAmhWQAehHAog6QAng6AChLQAFg3ABgtQABgygTgpQgSgngKgpIAyg7IFFAAQA3AAA1AKQA5AKA4ARQCiAyCMBaQBDArBCAvQA2AmAxAvQCAB5CDB4QBEA+A5BJQAqA0AoA2QAjAuAhAxIDeFIQAZAmAgAiQA6A/A3BBQAPASASASQAMAMAOALQALAJAPAGQCiBACnBAICsBBQAqAQAtAMQC6A0DDAWQAnAEAoAAQBSABBOAMQA6AIA2AZQA9AcBDAHQAbADAaAJQAWAHAYAFQBuAWBuAUQAQADARAHQAcANAdAGQAQAEARAHIAlAQQAyAcAZAvQAzBMAmArIApAyQAaAhAcAgQBDBNA+AlQAqAoAmAcQA4AnAtAcQA+AmBPAoQBoA1BgBOQAmAgAoAeQAqAmAdAVQAVAPAPATQAxA9A3BAQAtA0A3AxQAjAfAfA2QApBFAWBKQAeBqgDBxIgIDcQgBAegFAeQgiC9hdCsQhbCrhcCoQgdA0gcAoIgbAjIgXAZQg1A4gWAeQghAug5AfQgSAKgUAFQhvAhhsAoQgfAMgeAOQg+AehEAHIgNABQgTAAgSgHg");
	this.shape_1.setTransform(0,10.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320.9,-264.2,642,528.6);


(lib.sc1_2_ebene1 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgvegFSQAigaAjgZQCLhiCGhsQA4gtA6grQA0glAygoQB7hiCUgxQAiAHALANQAbAgAnAVQAcAOAbAPQAwAZAvAbQCYBWCkA9QBhAkBgAjQA2AUA3APQBkAbBlAbQAYAGAZACQAyAFAigZQAQgMAKgUQBWitBUixQAKgUAJgUQA5h2BphHQBMgUA1gHQAegEAeAAQC0AAC0AEQAjABAiAJQBnAZBpAPQA/AcAQAxQAtCJBQCCQARAbAUAYQBYBoCEANQAoAEAnAEQAvAFAjgcQBThEBsgwQBDgMApgBQCEgEB/AbQAVAFAVAEQAYAGAYADQC9AZCtA7QAnANAoAKQBCAQAvAdQA3AZArAQQBUAEBBgDQAzgCAygXQBjgsBugFQBGgDBEALQAWAEAWALQBDAkA/AiQBgA1BGA/QAqAlAWAyQAiAwAUAsQAXAyAYAlQAlA5AQBAQAEBUgbAvQgNAXgNAXQhdCthdCqQg5BphIBVQgvA3g6AnQgWAPgZAKQhkAnhlATQhtAUhuAgQhUAZhXATQgYAGgZACQizANi1AMQgoADgoAAQjDAAjDAAQi+AAi+ADQiPACiJgSQgUgCgTgIQh5gyiCgNQgtgEgugHQivgcisgbQgygIgzgFQg7gFg8gGQgygEgzgJQi5gfi4gqQhmgYhsABQgZAAgZgFQhngThrgFQgZgBgZgEQiFgRiJADQi5ADi5AAQjDAAjDAAQilAAilAEQgoABgoABQhaAEhZgJQiBg5hugwQgogRgWgUQgQgPgCgXQgCgVgGgVQgOgxgGgVQgEgTgCgUQgQiYAFieQADhQAEhOQADhaAygjQAlgpAtgHQAogoAXgZQANgNgCgTQAAgJABgGQgcAWgaAXEgv6gE7QAOgMAOgLQgYgBgEAYg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AJ+Q9QgUgCgTgIQh5gyiCgNQgtgEgugHIlbg3QgygIgzgFIh3gLQgygEgzgJQi5gfi4gqQhmgYhsABQgZAAgZgFQhngThrgFQgZgBgZgEQiFgRiJADQi5ADi5AAImGAAQilAAilAEIhQACQhaAEhZgJIjvhpQgogRgWgUQgQgPgCgXQgCgVgGgVIgUhGQgEgTgCgUQgQiYAFieQADhQAEhOQADhaAygjQAlgpAtgHIA/hBQANgNgCgTQAAgJABgGIAcgXIBFgzQCLhiCGhsQA4gtA6grQA0glAygoQB7hiCUgxQAiAHALANQAbAgAnAVIA3AdIBfA0QCYBWCkA9IDBBHQA2AUA3APIDJA2QAYAGAZACQAyAFAigZQAQgMAKgUQBWitBUixIATgoQA5h2BphHQBMgUA1gHQAegEAeAAQC0AAC0AEQAjABAiAJQBnAZBpAPQA/AcAQAxQAtCJBQCCQARAbAUAYQBYBoCEANIBPAIQAvAFAjgcQBThEBsgwQBDgMApgBQCEgEB/AbIAqAJQAYAGAYADQC9AZCtA7QAnANAoAKQBCAQAvAdQA3AZArAQQBUAEBBgDQAzgCAygXQBjgsBugFQBGgDBEALQAWAEAWALICCBGQBgA1BGA/QAqAlAWAyQAiAwAUAsQAXAyAYAlQAlA5AQBAQAEBUgbAvIgaAuIi6FXQg5BphIBVQgvA3g6AnQgWAPgZAKQhkAnhlATQhtAUhuAgQhUAZhXATQgYAGgZACIloAZQgoADgoAAImGAAQi+AAi+ADIgjAAQh8AAh5gQg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-328.4,-110.1,657.1,220.3);


(lib.Layer2sop = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFOvnQjDAAjBAAQjDAAjDAAQi+AAi+gFQgPAAgPgDQhagQhRghQghgOgkgKQhUgXhVgcQi2g9jHAKQhQADhQAAQi+AAi+ACQhsABhmgNQhdgNhhABQigACigAAQgYAAgUAPQh0AhhPBJQgoAlgxAaQheAwhFAiQgSAJgSAJQhDAug1AYQgsATgpAXQhOArhQAdQg1AUgxAbQgoAXgsAbQgXAPgXARQgRANgUALQh9BGhYB0QgRAXgPAXQgKARgIASQgMAbgPAZQgzBVgXBgQgGAdAAAeQAABdADBfQACBOAyBBQAZAgAXAhQA9BYBUBCQCJBpCOBhQChBtC1BFQBWAhBWAgQC1BDC8ApQByAZBzAUQCpAfCrAMQClANCmAJQBZAFBaAAQC0AAC0ADQChADCfgZQCxgbCsgvQCMgnCOgYQC8ghC/gFQBWgCBWgPQAwgJAwgFQAygFAygMQC0gtC0gtQAygNAzgKQAxgKAxgKQC4glC8gaQAxgHAygIQBpgRBogRQAzgIAzgNQC7gxC2hAQBwgoB2gGQBGgDBHgFQBFgFBGAAQDDAADDADQDAAEC7gXQAfgEAfgGQBmgSBXgvQA8ghA7gmQAVgNAVgNQCfhhB3iSQAagfAhgWQARgLAQgOQBmhXB/gXQAugJAogTQAOgVAKgLQAugzAShDQAGgVAIgVQBEizAqi1QANg3AEg3QAFg7AAg8QAAg5gagkQgJgMgIgMQgYghgugjQhQgkhNAHQgjADgkAFQgTACgUAEQiwgCitAYQhgANhfAMQi9AYi/ANQhfAGhfAJQjDASjDAWQhfALheAOQi8AdiqBSQg1AZgzAcQhtA7hXBWQgPAPgkgNQgggKgfgNQgTgHgTgHQing9ijhFQizhMi3hFQgggMgdgSQgNgIgPgCQgZgDgYgEQjJgGi+AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#336600").s().p("A4wSyQi0gDi0AAQhaAAhZgFQimgJilgNQirgMipgfQhzgUhygZQi8gpi1hDIishBQi1hFihhtQiOhhiJhpQhUhCg9hYQgXghgZggQgyhBgChOQgDhfAAhdQAAgeAGgdQAXhgAzhVQAPgZAMgbQAIgSAKgRQAPgXARgXQBYh0B9hGQAUgLARgNQAXgRAXgPIBUgyQAxgbA1gUQBQgdBOgrQApgXAsgTQA1gYBDguIAkgSQBFgiBegwQAxgaAoglQBPhJB0ghQAUgPAYAAQCgAACggCQBhgBBdANQBmANBsgBQC+gCC+AAQBQAABQgDQDHgKC2A9QBVAcBUAXQAkAKAhAOQBRAhBaAQQAPADAPAAQC+AFC+AAIGGAAIGEAAQC+AADJAGIAxAHQAPACANAIQAdASAgAMQC3BFCzBMQCjBFCnA9IAmAOQAfANAgAKQAkANAPgPQBXhWBtg7QAzgcA1gZQCqhSC8gdQBegOBfgLQDDgWDDgSQBfgJBfgGQC/gNC9gYIC/gZQCtgYCwACIAngGQAkgFAjgDQBNgHBQAkQAuAjAYAhIARAYQAaAkAAA5QAAA8gFA7QgEA3gNA3QgqC1hECzQgIAVgGAVQgSBDguAzQgKALgOAVQgoATguAJQh/AXhmBXQgQAOgRALQghAWgaAfQh3CSifBhIgqAaQg7Amg8AhQhXAvhmASIg+AKQi7AXjAgEQjDgDjDAAQhGAAhFAFQhHAFhGADQh2AGhwAoQi2BAi7AxQgzANgzAIIjRAiIhjAPQi8Aai4AlIhiAUQgzAKgyANIloBaQgyAMgyAFQgwAFgwAJQhWAPhWACQi/AFi8AhQiOAYiMAnQisAvixAbQiNAWiQAAIgjAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-443.4,-120.2,887,240.5);


(lib.Layer1 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ACNx8QhLADhIgEQhCgGgtgBQgcAAgGgmQgTgegOgWQiggwitAAQivgBivgBQizgCirA1Qi6A6iBCTQgjAogcAuQhbCWgzCpQgrCTgECZQgDCCASCAQAHA0AbAvQBVCfCPBwQBGA3BHA2QCdB3C2BIQCvBGC5ApQCNAgCLAkQBQAVBRARQAiAIAEAGQAqBBBNAmQAqAVAmAZQChBnCqBVQCzBbC1A7QA5ASA+gEQAegCAcgIQAbgHAagOQCthgCah/QBQhCBPhCQAmgfAjgkQBshuBSiBQBkigAEi+QAChpgQhpQgRhsgyhlQgmhPgshLQgphGgxhBQh2ifithlQhNgthRgeQhCgjg3gfQhUguhggbQg7gQg2gaQgSgJgTgGQg4gQgwgbQgbgQgdgLQiDgzh5g4QgjgQgsABgAiTzTQgSgGgTgFQgJgQgGgMQgVgngRgM");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0066").s().p("AK+URQi1g7izhbQiqhVihhnQgmgZgqgVQhNgmgqhBQgEgGgigIQhRgRhQgVQiLgkiNggQi5gpivhGQi2hIidh3QhHg2hGg3QiPhwhVifQgbgvgHg0QgSiAADiCQAEiZAriTQAzipBbiWQAcguAjgoQCBiTC6g6QCrg1CzACIFeACQCtAACgAwIAhA0QAGAmAcAAQAtABBCAGQBIAEBLgDQAsgBAjAQQB5A4CDAzQAdALAbAQQAwAbA4AQQATAGASAJQA2AaA7AQQBgAbBUAuIB5BCQBRAeBNAtQCtBlB2CfQAxBBApBGQAsBLAmBPQAyBlARBsQAQBpgCBpQgEC+hkCgQhSCBhsBuQgjAkgmAfIifCEQiaB/itBgQgaAOgbAHQgcAIgeACIgYAAQgxAAgugOg");
	this.shape_1.setTransform(0,1.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-178.5,-132.5,357.1,265.3);


(lib.Himmel = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg2mgnHMBtNAAAMAAABOPMhtNAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("Eg2lAnIMAAAhOPMBtLAAAMAAABOPg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-349.4,-250.4,699,501);


(lib.Ebene3 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgAtggVQgDAnAQAlQAPAgAdAAQAUAAAMAFQAmgFAKgLQAhgjAagaQAcgaAVgYQAUgkAMgCQAAAGgBAYQgCBEAQA9QAHBEAGArQAEAjAAAjQAAAjAAAjQAfg7Atg3QAJgLAIgOQAqhGAugzQAJAtAEA2QACAbAHAaQgFAvAgACQCYAOCCg9QA+gdAkgjQAlBKATBVQAEAVAHAVQALAhAIAiQAEARAGAQQAJBAAJAiQAGAfACAUQACAaAEAYQAJAwAJAhQAEBMAQApQAOAgAFAHQALAUAMARQCEBHBvA1QAOAHAPAEQA8ARA6AUQAdAMAKAEQgJgJgCgNQgGgUAAgKAv7zpQgEADgDAEQAACuAFCvQAxgSAxgcQARgJATgIQA7gaA9gIQAVgDAVgGQATgEAUAAQAoAAAogBQAKAzAAAeQAlgDAfgeQAMgMASgJQB+g/CJgfQAdgGgFAiQgFAeAAAeQAAA3AAA3QAkADAcgRQAXARgEAlQgDAZAAAZQAoAAAXgRQArgfABAwQADCHgFCHQARgaAagHQA2gOA3AHQAGAUACAKQADAUAHARQAzAQAegaQAigeAugOQAbgIAZgQQA8gnA9gTQAagIgDAbQgEAjADAjQACAbAPAAQAegBAWgNQApgaAugeQAUgNAVgOQAZgRAjABQA0gTAVgXQBLhHA3glQAkAyAegaQAagXAcgWQAegXAlgDQAZgCAZgBQBagEBaAAQA2AAAwAPQAmAKAIgCQAdgTANgPQgBgMgBgMQgCgEgCgDQgJgTgMgLQgRgGgJgKQABAAABABQANAEALALQAIACAKACQAEAQADARQAEAJAEAHQADgGABgFAYas/QAAgGAAgFQADgEADgEQAGANABAFQAfAnAKApQAIAlAPAJQAfA1ASAZQAEEagEEJQgBAZAAAZQgFCjAFCkQACA6gNA1QgEDbAAC+QAAAUAGASQAOAlADAPQALA1ADAvQADBBAEBBQABAZAFAZQAQBXAKBUQAEAigBAjQgDBPAKBIQAEAiAAAjQAAClAAClQAAAUgDAUQgHAygJAbQhnAjhsgHQhGgFhGAAQhpAAhpgCQgegBgggLQghgLgjgGQh3gVh5gGQgegCgdgDQgzgHgegBQg/gBg6gNQgTgFgTgEQgVgGgVgHQjiADjLgSQgigDgagIQgXgHgZgCQhGgGhGgIQgjgEgjAAQjIgEi/g1QgdgIgegEQiKgSiFgmQgigKgjgEQjZgejfAGQiCADh9gYQAEh9AahcQAFgTAEgTQANhMAKhLQADgeAGgdQAEgaAGgaQAWhdAQhfQAnjgAujhQALg0AQgzQAOgsAOgsQAGgVAKgUQA3hrASiEQALhYgBhaQAAg4AEg3QAIhzg5g+QgbgdgogiQgmghgSgdQgFgHgUgKQgFhxAPhtQAAgdAAgdQAAgUAEgTEgAtggVQABgBAAgBQAIgeAAgKQgHAVgCAVgAv7zpQCIASCJAGQAtACAqgMQANgDANgNQCHiIBDiuQAKgbANgaQAMgYAGgaQAKgnAJgnQAFgVAHgVQAHgZAIgYQA3h0ArhUQgGA4ArAlQANAMAVADQAkAFAPggQA7g2AUg3A4yqrQAKhLAUhJQAniQBFiEQAWgsAbgqQAXgmAZglQAUgcAXgbQAWgSAJACQAlALAlAXQApAaAuAHQAxAIAwAHQASgOAkAIQAvATA0gHAwMzFQACgSAIgLA48nNQAIhyAChs");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AX8bCQhGgFhGAAQhpAAhpgCQgegBgggLQghgLgjgGQh3gVh5gGQgegCgdgDQgzgHgegBQg/gBg6gNIgmgJIgqgNQjiADjLgSQgigDgagIQgXgHgZgCQhGgGhGgIQgjgEgjAAQjIgEi/g1QgdgIgegEQiKgSiFgmQgigKgjgEQjZgejfAGQiCADh9gYQAEh9AahcQAFgTAEgTQANhMAKhLQADgeAGgdIAKg0QAWhdAQhfQAnjgAujhQALg0AQgzIAchYQAGgVAKgSQA3hrASiEQALhYgBhcQAAg4AEg3QAIhzg5g+QgbgdgogiQgmghgSgdQgFgHgUgKQAIhyAChsQAKhLAUhJQAniQBFiEQAWgsAbgqQAXgmAZglQAUgcAXgbQAWgSAJACQAlALAlAXQApAaAuAHIBhAPIgHAHQAACuAFCvQAxgSAxgcQARgJATgIQA7gaA9gIQAVgDAVgGQATgEAUAAIBQgBQAKAzAAAeQAlgDAfgeQAMgMASgJQB+g/CJgfQAdgGgFAiQgFAeAAAeIAABuQAkADAcgRQAXARgEAlQgDAZAAAZQAoAAAXgRQArgfABAwQADCHgFCHQARgaAagHQA2gOA3AHIAIAeQADAUAHARQAzAQAegaQAigeAugOQAbgIAZgQQA8gnA9gTQAagIgDAbQgEAjADAjQACAbAPAAQAegBAWgNIBXg4IApgbQAZgRAjABQA0gTAVgXQBLhHA3glQAkAyAegaQAagXAcgWQAegXAlgDIAygDQBagEBaAAQA2AAAwAPQAmAKAIgCQAdgTANgPIgCgYIAIAQIgGAIIAAALIAAgLIAGgIIAHASQAfAnAKApQAIAlAPAJQAfA1ASAZQAEEagEEJIgBAyQgFClAFCkQACA6gNAzQgEDbAAC+QAAAUAGASQAOAlADAPQALA1ADAvIAHCCQABAZAFAZQAQBXAKBUQAEAigBAjQgDBPAKBIQAEAiAAAjIAAFKQAAAUgDAUQgHAygJAbQhVAdhYAAIgmgBgAwM5MQACgSAIgLQgIALgCASgAXl0eIACABQANAEALALQgRgGgJgKg");
	this.shape_1.setTransform(0,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah+MqQgHgRgEgUIgHgeQg4gHg2AOQgbAHgSAaQAFiHgDiHQgBgwgrAfQgWARgoAAQAAgZACgZQAEglgXgRQgcARgjgDIAAhuQAAgeAEgeQAFgigdAGQiJAfh9A/QgTAJgMAMQgfAegkADQgBgegJgzIhQABQgUAAgUAEQgVAGgUADQg+AIg7AaQgTAIgRAJQgxAcgxASQgEivAAiuIAHgHQCHASCJAGQAtACArgMQANgDAMgNQCHiGBDiuQALgbANgaQALgYAHgaIAThOIALgqIAPgxQA3h0AshUQgHA4AsAlQAMAMAVADQAlAFAOggQA7g2AVg3QgEAnAQAlQAPAgAfAAQAUAAAMAFQAngFAJgLQAhgjAbgaQAbgaAVgYQAVgkAMgCIgBAeQgCBEAPA9IANBvQAFAjgBAjIAABGQAeg7Asg3QAKgLAIgOQAphGAugzQAJAtAFA2QABAbAIAaQgGAvAhACQCXAOCCg9QA+gdAkgjQAlBKATBVQAFAVAGAVQALAhAJAiIAJAhQAJBAAJAiQAHAfABAUQACAaAEAYQAJAwAJAfQAFBMAPApQAPAgAEAHQAMAUALARQCEBHBvA1QAOAHAPAEQA8ARA6AUIAoAQQAIAKARAGQAMALAJATIAEAHIADAYQgOAPgdATQgIACgmgKQgwgPg1AAQhbAAhZAEIgzADQglADgdAXQgdAWgaAXQgdAaglgyQg3AlhKBHQgWAXgzATQgkgBgZARIgpAbIhWA4QgXANgeABQgPAAgCgbQgDgjAEgjQADgbgaAIQg8ATg9AnQgZAQgbAIQgrAOgjAeQgSAQgaAAQgRAAgTgGg");
	this.shape_2.setTransform(26.8,-130.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-176.2,-212.2,352.6,424.6);


(lib.Ebene2 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EghagACQCAiPCWh4QCah6CzhTQA7gbA8gZQB2gwB6gQQA9gJA8gMQAYgFAZgBQBvgDBjAhQAyARA8gIQAUgDAVgDQBUgLBFg5QALgJAMgJQAcgVAbgYQAXgVATgZQAagjAVgnQBDh7BKh1QBOguBHghQBsg0BuglQB/gBBmAeQArANAvAIQAPACAQADQBVAMBDguQAMgJAOgHQBMgqBVgTQA2gMA5gWQATgIAUgFQB0ggB8gBQBhgBBdAPQAXADAUAMQBuA0BiAoQBeAlBABMQAwA5A/A0QBJA9A1BIQAJAMAGAPQAfBQgHBaQgQDCAhC5QARBgAbBWQAOAsAPArQA7CygQDAQgDAegHAdQgsCxgoCvQgSBKgSBKQgIAjgJAkQgMAxgQA0QgRAmgCAVQgCAqgIAmQgGAbgTAJQgTAJgUAFQhlAahtgBQgjAAgjACQilAKilAIQhfAFheAGQhCAEhBAHQi+AUi+APQi3AOi7gDQi5gDi3AAQi5AAi5AAQi+AAi+gFQhngChhAMQgjAFgjACQgeADgeABQhkAEhkAEQgPABgPAAQi5AFi5AAQiqAAiqgFQgZgPgHgIQhSgygUhRQgGgVgIgVQgth2gXhwQgEgTgBgUQgGhxAVhqQAGgfAGgfQAMhKAAhLQAAgbAIgPQARhRATg5QAShGAOgxQAiglgFgtQgHg7AEgmQAWgmAXgb");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#336633").s().p("EggKAVbQgZgPgHgIQhSgygUhRQgGgVgIgVQgth2gXhwQgEgTgBgUQgGhxAVhqIAMg+QAMhKAAhLQAAgbAIgPQARhRATg5IAgh3QAiglgFgtQgHg7AEgmQCAiPCWh4QCah6CzhTQA7gbA8gZQB2gwB6gQQA9gJA8gMQAYgFAZgBQBvgDBjAhQAyARA8gIIApgGQBUgLBFg5IAXgSQAcgVAbgYQAXgVATgZQAagjAVgnQBDh7BKh1QBOguBHghQBsg0BuglQB/gBBmAeQArANAvAIIAfAFQBVAMBDguIAagQQBMgqBVgTQA2gMA5gWQATgIAUgFQB0ggB8gBQBhgBBdAPQAXADAUAMQBuA0BiAoQBeAlBABMQAwA5A/A0QBJA9A1BIQAJAMAGAPQAfBQgHBaQgQDCAhC5QARBgAbBWIAdBXQA7CygQDAQgDAegHAdQgsCxgoCvIgkCUIgRBHQgMAxgQA0QgRAmgCAVQgCAqgIAmQgGAbgTAJQgTAJgUAFQhlAahtgBQgjAAgjACQilAKilAIQhfAFheAGQhCAEhBAHQi+AUi+APQi3AOi7gDQi5gDi3AAIlyAAQi+AAi+gFQhngChhAMQgjAFgjACQgeADgeABIjIAIIgeABQi5AFi5AAQiqAAiqgFg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-228.1,-137.5,456.4,275.3);


(lib.Blume = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"static":0,hover:1,action:9});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.gotoAndStop(0);
	}
	this.frame_19 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(11).call(this.frame_19));

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AshymQAMgmAWgkQASgfAOghQAQglAUgjQAvhTAvhKQAVgXAIgFQA/gKAIAsQAGAfAIAfQAmCEBEBzQALARAMARQAfAvA0AKQAmAHAZgXQApgmAngpQAbgdAbgbQAXgXASgaQA0hPBChIIAbgXQAKAPAFAUQAWBPA7A8QBXBaBxAmQCZACBhhhQA0g0A5goQAegFgDAkQgCAdABAeQAGB6AcB2QAWBhANBeQAFAiAAAjQAABQgJBPQgBAQgGARQgBBSgLAvQgRA2gFA3QgHBDgZA+QgdBJgxAmQhBAKg3gDQgygDgiArQh5BlhDBZQhCBKhdAtQhAAehLgEQh1gFhog3QgbgOgdgOQiahKiehGQgsgSgsgPQhnghgihCQACidggiEQgEgTgEgTQgKg5gCg2QgEhaABhaQABgfADgdQADgcAIgXQAJgYADgGQAZgvgDhIQgFgrgOgSQgZgiAigFQAEgpAOgngAErsWQgFgUgJgSQgfgRgEgGQgPgXgjgbQgOgLgbABQg0ABg0AAQgLAUgMAWQgQAfgVAeQgJAMgIANQg5BZgQBoQgEAdgEAeQgGA0AcAeQAyA4ApASQAuASA1gCQBsgEBGg8QAfgagKg0QgEgTAIgPQAIgtAEgMQAQhngcg6QgIgSgFgUgAA3uOQgIAAgIAAABPu2QgMASgMAWAmIuqQgFALgIAKQgOBGgcAnQgMASgIAVQgKAegNAdQgjBhAFBnQAJA+AqgBQAjgLAGgJQAKgMAKgSQAegyAQg0QAIgYAFgFQAhggAIg6QAOhggEhoQgBgZgJgVQg6gEgaAggAl7vUQgDAWgKAUAmVuVQglAJACARAszxWQAKg0AIgcAizHoQgugvhKgZQgZgIgYgNQhog4h0gcQgpgSgUgFQhPgQg9gsAiBDaQgCAugFAsQgDAjgCAjQgEAygFAyQAcgEAYgOQAqgZAvgRQBZggAthAQAignAZgVQAPgdAAgFAjHOqQABAWAIASQABABAAACQAEAIAGAIQgEisAPinQAHhLAIhMQACgPABgOAC9X4QAGgegVgoQAAgZgVgaQgHgggRgbQgVgfgLgnQgXhXhKg1QgdgUgagYQgjgggogWQgggSgRgZQAAAFAAAGAi9PVQALA2gkAmQgfAygUAMQgTANgPAUQg0BHhBA+QgcAbgbAcQhZBdhbBhQgSASAAAY");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3333FF").s().p("ABqEfQgrgRgyg4QgageAGg1IAHg7QAPhlA5hZIARgZQAXgeAQggIAXgpQA0AAA0gCQAbAAAOAKQAjAcAPAXQAEAGAfARQAJASAFAUQAFAUAIASQAcA6gQBkQgEANgIAtQgIAPAEATQAKA0gfAaQhGA7hsAFIgLAAQguAAgqgRgAmoCYQgFhnAjhfQANgdAKgeQAIgVAMgSQAcgnAOhGQAIgKAFgLQAaggA6ADQAJAWABAZQAEBogOBgQgIA4ghAgQgFAFgIAYQgQA0geAyQgKARgKANQgGAJgjAKIgCAAQgoAAgJg8g");
	this.shape_1.setTransform(-9.5,-66.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF66").s().p("AAJOOQh1gGhog2Ig4gcQiahKiehHQgsgUgsgOQhnghgihDQACidggiDIgIgnQgKg4gCg2QgEhaABhYQABgfADgeQADgbAIgYIAMgdQAZgwgDhHQgFgsgOgRQgZgiAigFQAKg1AIgcQAMgmAWgkQASgeAOghQAQglAUgjQAvhUAvhJQAVgXAIgGQA/gKAIAtQAGAfAIAeQAmCEBEBzQALASAMARQAfAuA0AKQAmAIAZgXQApgmAngqIA2g4QAXgWASgbQA0hPBChHIAbgXQAKAPAFAUQAWBOA7A9QBXBaBxAmQCZACBhhiQA0gzA5goQAegGgDAkQgCAeABAeQAGB5AcB3QAWBgANBeQAFAjAAAjQAABQgJBNQgBAQgGAQQgBBSgLAvQgRA2gFA3QgHBEgZA+QgdBJgxAmQhBAJg3gDQgygDgiArQh5BmhDBaQhCBLhdAsQg4AbhCAAIgRAAgAAgi/QgQAggVAeIgRAZQg5BZgQBlIgIA7QgGA1AcAeQAyA4ApARQAuATA1gCQBsgFBGg7QAfgagKg0QgEgTAIgPQAIgtAEgNQAQhkgcg6QgIgSgFgUQgFgUgJgSQgfgRgEgGQgPgXgjgcQgOgKgbAAQg0ACg0AAIAYgoIgYAoIgQAAIAQAAIgXApgAm/iCQgMASgIAVQgKAegNAdQgjBfAFBnQAJA9AqgBQAjgKAGgJQAKgNAKgRQAegyAQg0QAIgYAFgFQAhggAIg4QAOhggEhoQgBgZgJgWQg6gDgaAgQAKgUADgWQgDAWgKAUQgFALgIAKQgjAIAAAPIAAACIAAgCQAAgPAjgIQgOBGgcAngAA3joIAAAAgAA3joIAAAAgAmVjvIAAAAg");
	this.shape_2.setTransform(0,-67.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AshymQAMgmAWgkQASgfAOghQAQglAUgjQAvhTAvhKQAVgXAIgFQA/gKAIAsQAGAfAIAfQAmCEBEBzQALARAMARQAfAvA0AKQAmAHAZgXQApgmAngpQAbgdAbgbQAXgXASgaQA0hPBChIIAbgXQAKAPAFAUQAWBPA7A8QBXBaBxAmQCZACBhhhQA0g0A5goQAegFgDAkQgCAdABAeQAGB6AcB2QAWBhANBeQAFAiAAAjQAABQgJBPQgBAQgGARQgBBSgLAvQgRA2gFA3QgHBDgZA+QgdBJgxAmQhBAKg3gDQgygDgiArQh5BlhDBZQhCBKhdAtQhAAehLgEQh1gFhog3QgbgOgdgOQiahKiehGQgsgSgsgPQhnghgihCQACidggiEQgEgTgEgTQgKg5gCg2QgEhaABhaQABgfADgdQADgcAIgXQAJgYADgGQAZgvgDhIQgFgrgOgSQgZgiAigFQAEgpAOgngAErsWQgFgUgJgSQgfgRgEgGQgPgXgjgbQgOgLgbABQg0ABg0AAQgLAUgMAWQgQAfgVAeQgJAMgIANQg5BZgQBoQgEAdgEAeQgGA0AcAeQAyA4ApASQAuASA1gCQBsgEBGg8QAfgagKg0QgEgTAIgPQAIgtAEgMQAQhngcg6QgIgSgFgUgABPu2QgMASgMAWQgIAAgIAAAk0vGQg6gEgaAgQgFALgIAKQgOBGgcAnQgMASgIAVQgKAegNAdQgjBhAFBnQAJA+AqgBQAjgLAGgJQAKgMAKgSQAegyAQg0QAIgYAFgFQAhggAIg6QAOhggEhoQgBgZgJgVgAl7vUQgDAWgKAUAmVuVQglAJACARAszxWQAKg0AIgcAizHoQgugvhKgZQgZgIgYgNQhog4h0gcQgpgSgUgFQhPgQg9gsAiBDaQgCAugFAsQgDAjgCAjQgEAygFAyQAcgEAYgOQAqgZAvgRQBZggAthAQAignAZgVQAPgdAAgFAjHOqQABAWAIASQABABAAACQAEAIAGAIQgEisAPinQAHhLAIhMQACgPABgOAC9X4QAGgegVgoQAAgZgVgaQgHgggRgbQgVgfgLgnQgXhXhKg1QgdgUgagYQgjgggogWQgggSgRgZQAAAFAAAGAi9PVQALA2gkAmQgfAygUAMQgTANgPAUQg0BHhBA+QgcAbgbAcQhZBdhbBhQgSASAAAY");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF66").s().p("AAJOOQh1gGhog2Ig4gcQiahKiehHQgsgUgsgOQhnghgihDQACidggiDIgIgnQgKg4gCg2QgEhaABhYQABgfADgeQADgbAIgYIAMgdQAZgwgDhHQgFgsgOgRQgZgiAigFQAKg1AIgcQAMgmAWgkQASgeAOghQAQglAUgjQAvhUAvhJQAVgXAIgGQA/gKAIAtQAGAfAIAeQAmCEBEBzQALASAMARQAfAuA0AKQAmAIAZgXQApgmAngqIA2g4QAXgWASgbQA0hPBChHIAbgXQAKAPAFAUQAWBOA7A9QBXBaBxAmQCZACBhhiQA0gzA5goQAegGgDAkQgCAeABAeQAGB5AcB3QAWBgANBeQAFAjAAAjQAABQgJBNQgBAQgGAQQgBBSgLAvQgRA2gFA3QgHBEgZA+QgdBJgxAmQhBAJg3gDQgygDgiArQh5BmhDBaQhCBLhdAsQg4AbhCAAIgRAAgAAgi/QgQAggVAeIgRAZQg5BZgQBlIgIA7QgGA1AcAeQAyA4ApARQAuATA1gCQBsgFBGg7QAfgagKg0QgEgTAIgPQAIgtAEgNQAQhkgcg6QgIgSgFgUQgFgUgJgSQgfgRgEgGQgPgXgjgcQgOgKgbAAQg0ACg0AAIAYgoIgYAoIgQAAIAQAAIgXApgAm/iCQgMASgIAVQgKAegNAdQgjBfAFBnQAJA9AqgBQAjgKAGgJQAKgNAKgRQAegyAQg0QAIgYAFgFQAhggAIg4QAOhggEhoQgBgZgJgWQg6gDgaAgQAKgUADgWQgDAWgKAUQgFALgIAKQgjAIAAAPIAAACIAAgCQAAgPAjgIQgOBGgcAngAA3joIAAAAgAA3joIAAAAgAmVjvIAAAAgAmIkEIAAAAg");
	this.shape_4.setTransform(0,-67.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AshymQAMgmAWgkQASgfAOghQAQglAUgjQAvhTAvhKQAVgXAIgFQA/gKAIAsQAGAfAIAfQAmCEBEBzQALARAMARQAfAvA0AKQAmAHAZgXQApgmAngpQAbgdAbgbQAXgXASgaQA0hPBChIIAbgXQAKAPAFAUQAWBPA7A8QBXBaBxAmQCZACBhhhQA0g0A5goQAegFgDAkQgCAdABAeQAGB6AcB2QAWBhANBeQAFAiAAAjQAABQgJBPQgBAQgGARQgBBSgLAvQgRA2gFA3QgHBDgZA+QgdBJgxAmQhBAKg3gDQgygDgiArQh5BlhDBZQhCBKhdAtQhAAehLgEQh1gFhog3QgbgOgdgOQiahKiehGQgsgSgsgPQhnghgihCQACidggiEQgEgTgEgTQgKg5gCg2QgEhaABhaQABgfADgdQADgcAIgXQAJgYADgGQAZgvgDhIQgFgrgOgSQgZgiAigFQAEgpAOgngACAuAQgLATgLAWQgRAggXAeQgJAMgIANQg3BZgPBnQgFAegDAdQgGA1AbAeQAwA4AsARQAEACAEABQArAQAvgCQBsgFBGg7QAfgagKg0QgEgTAJgPQAHgtAFgNQAQhmgcg6QgJgSgFgUQgFgUgJgSQgfgRgEgGQgPgXgjgcQgOgKgbAAQgNABgOAAQgmABgnAAgAA3uOQgIAAgIAAACYuoQgHAMgIANQgEAHgFAIAlLuHQgPBGgbAnQgNASgHAVQgLAegMAdQgjBhAEBnQAEAVAGANQAOAbAbgBQAjgKAHgJQAJgNALgRQAegyAPg0QAIgYAFgFQAhggAJg6QAOhggFhoQgBgZgIgWQgpgCgZAPQgLAGgIAKAkyvCQgBgCAAgBAlLuHQgmAJADAQAkyvCQgDAUgKASAmIuqQgFALgIAKAszxWQAKg0AIgcAizHoQgugvhKgZQgZgIgYgNQhog4h0gcQgpgSgUgFQhPgQg9gsAiBDaQgCAugFAsQgDAjgCAjQgEAygFAyQAcgEAYgOQAqgZAvgRQBZggAthAQAignAZgVQAPgdAAgFAjHOqQABAWAIASQABABAAACQAEAIAGAIQgEisAPinQAHhLAIhMQACgPABgOAi9PVQALA2gkAmQgfAygUAMQgTANgPAUQg0BHhBA+QgcAbgbAcQhZBdhbBhQgSASAAAYAC9X4QAGgegVgoQAAgZgVgaQgHgggRgbQgVgfgLgnQgXhXhKg1QgdgUgagYQgjgggogWQgggSgRgZQAAAFAAAG");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3333FF").s().p("AByEiIgIgDQgrgRgyg4QgageAGg1IAHg7QAPhlA5hZIARgZQAXgeAQggIAXgpIBMgBIAcgBQAbAAAOAKQAjAcAPAXQAEAGAfARQAJASAFAUQAFAUAIASQAcA6gQBkQgEANgIAtQgIAPAEATQAKA0gfAaQhGA7hsAFIgLAAQgqAAgmgOgAmeC6QgHgNgDgVQgFhnAjhfQANgdAKgeQAIgVAMgSQAcgnAOhGQAIgKAFgLQAHgKALgGQAZgPApACQAJAWABAZQAEBogOBgQgIA4ghAgQgFAFgIAYQgQA0geAyQgKARgKANQgGAJgjAKIgCAAQgaAAgNgag");
	this.shape_6.setTransform(-2.1,-64.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF66").s().p("AAJOOQh1gGhog2Ig4gcQiahKiehHQgsgUgsgOQhnghgihDQACidggiDIgIgnQgKg4gCg2QgEhaABhYQABgfADgeQADgbAIgYIAMgdQAZgwgDhHQgFgsgOgRQgZgiAigFQAKg1AIgcQAMgmAWgkQASgeAOghQAQglAUgjQAvhUAvhJQAVgXAIgGQA/gKAIAtQAGAfAIAeQAmCEBEBzQALASAMARQAfAuA0AKQAmAIAZgXQApgmAngqIA2g4QAXgWASgbQA0hPBChHIAbgXQAKAPAFAUQAWBOA7A9QBXBaBxAmQCZACBhhiQA0gzA5goQAegGgDAkQgCAeABAeQAGB5AcB3QAWBgANBeQAFAjAAAjQAABQgJBNQgBAQgGAQQgBBSgLAvQgRA2gFA3QgHBEgZA+QgdBJgxAmQhBAJg3gDQgygDgiArQh5BmhDBaQhCBLhdAsQg4AbhCAAIgRAAgACJjpIgJAOIgWAqQgRAfgXAeIgRAZQg3BZgPBmIgIA7QgGA0AbAeQAwA4AsASIAIADQArAPAvgCQBsgEBGg8QAfgagKg0QgEgTAJgPQAHgtAFgMQAQhlgcg6QgJgSgFgUQgFgUgJgSQgfgRgEgGQgPgXgjgbQgOgLgbABIgbABIgFgFQgOgKgbAAIgWABIAPgaIgPAaIAAAAgAl1h1QgNASgHAVQgLAegMAdQgjBfAEBnQAEAVAGAOQAOAbAbgBQAjgLAHgJQAJgMALgSQAegyAPg0QAIgYAFgFQAhggAJg4QAOhggFhoQgBgZgIgVQgpgDgZAQQgCgMgEgLIgBgDIABADQgDAUgKASQgFALgHAKQgjAJAAAPIAAACIAAgCQAAgPAjgJQgPBGgbAngAA3joIgQAAIAQAAgAmVjvQAIgKAFgLQgFALgIAKgAlLjiIAAAAg");
	this.shape_7.setTransform(0,-67.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AshymQAMgmAWgkQASgfAOghQAQglAUgjQAvhTAvhKQAVgXAIgFQA/gKAIAsQAGAfAIAfQAmCEBEBzQALARAMARQAfAvA0AKQAmAHAZgXQApgmAngpQAbgdAbgbQAXgXASgaQA0hPBChIIAbgXQAKAPAFAUQAWBPA7A8QBXBaBxAmQCZACBhhhQA0g0A5goQAegFgDAkQgCAdABAeQAGB6AcB2QAWBhANBeQAFAiAAAjQAABQgJBPQgBAQgGARQgBBSgLAvQgRA2gFA3QgHBDgZA+QgdBJgxAmQhBAKg3gDQgygDgiArQh5BlhDBZQhCBKhdAtQhAAehLgEQh1gFhog3QgbgOgdgOQiahKiehGQgsgSgsgPQhnghgihCQACidggiEQgEgTgEgTQgKg5gCg2QgEhaABhaQABgfADgdQADgcAIgXQAJgYADgGQAZgvgDhIQgFgrgOgSQgZgiAigFQAEgpAOgngADbpAQBlAABmAAAjCpAQBZAABaAAAszxWQAKg0AIgcAizHoQgugvhKgZQgZgIgYgNQhog4h0gcQgpgSgUgFQhPgQg9gsAiBDaQgCAugFAsQgDAjgCAjQgEAygFAyQAcgEAYgOQAqgZAvgRQBZggAthAQAignAZgVQAPgdAAgFAjHOqQABAWAIASQABABAAACQAEAIAGAIQgEisAPinQAHhLAIhMQACgPABgOAi9PVQALA2gkAmQgfAygUAMQgTANgPAUQg0BHhBA+QgcAbgbAcQhZBdhbBhQgSASAAAYAC9X4QAGgegVgoQAAgZgVgaQgHgggRgbQgVgfgLgnQgXhXhKg1QgdgUgagYQgjgggogWQgggSgRgZQAAAFAAAG");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF66").s().p("AAJOOQh1gGhog2Ig4gcQiahKiehHQgsgUgsgOQhnghgihDQACidggiDIgIgnQgKg4gCg2QgEhaABhYQABgfADgeQADgbAIgYIAMgdQAZgwgDhHQgFgsgOgRQgZgiAigFQAKg1AIgcQAMgmAWgkQASgeAOghQAQglAUgjQAvhUAvhJQAVgXAIgGQA/gKAIAtQAGAfAIAeQAmCEBEBzQALASAMARQAfAuA0AKQAmAIAZgXQApgmAngqIA2g4QAXgWASgbQA0hPBChHIAbgXQAKAPAFAUQAWBOA7A9QBXBaBxAmQCZACBhhiQA0gzA5goQAegGgDAkQgCAeABAeQAGB5AcB3QAWBgANBeQAFAjAAAjQAABQgJBNQgBAQgGAQQgBBSgLAvQgRA2gFA3QgHBEgZA+QgdBJgxAmQhBAJg3gDQgygDgiArQh5BmhDBaQhCBLhdAsQg4AbhCAAIgRAAgAGmBjIjLAAIDLAAgAgPBjIizAAICzAAg");
	this.shape_9.setTransform(0,-67.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AshymQAMgmAWgkQASgfAOghQAQglAUgjQAvhTAvhKQAVgXAIgFQA/gKAIAsQAGAfAIAfQAmCEBEBzQALARAMARQAfAvA0AKQAmAHAZgXQApgmAngpQAbgdAbgbQAXgXASgaQA0hPBChIIAbgXQAKAPAFAUQAWBPA7A8QBXBaBxAmQCZACBhhhQA0g0A5goQAegFgDAkQgCAdABAeQAGB6AcB2QAWBhANBeQAFAiAAAjQAABQgJBPQgBAQgGARQgBBSgLAvQgRA2gFA3QgHBDgZA+QgdBJgxAmQhBAKg3gDQgygDgiArQh5BlhDBZQhCBKhdAtQhAAehLgEQh1gFhog3QgbgOgdgOQiahKiehGQgsgSgsgPQhnghgihCQACidggiEQgEgTgEgTQgKg5gCg2QgEhaABhaQABgfADgdQADgcAIgXQAJgYADgGQAZgvgDhIQgFgrgOgSQgZgiAigFQAEgpAOgngACaqJQBlAABmAAAk8qJQBZAABaAAAszxWQAKg0AIgcAizHoQgugvhKgZQgZgIgYgNQhog4h0gcQgpgSgUgFQhPgQg9gsAiBDaQgCAugFAsQgDAjgCAjQgEAygFAyQAcgEAYgOQAqgZAvgRQBZggAthAQAignAZgVQAPgdAAgFAjHOqQABAWAIASQABABAAACQAEAIAGAIQgEisAPinQAHhLAIhMQACgPABgOAi9PVQALA2gkAmQgfAygUAMQgTANgPAUQg0BHhBA+QgcAbgbAcQhZBdhbBhQgSASAAAYAC9X4QAGgegVgoQAAgZgVgaQgHgggRgbQgVgfgLgnQgXhXhKg1QgdgUgagYQgjgggogWQgggSgRgZQAAAFAAAG");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF66").s().p("AAJOOQh1gGhog2Ig4gcQiahKiehHQgsgUgsgOQhnghgihDQACidggiDIgIgnQgKg4gCg2QgEhaABhYQABgfADgeQADgbAIgYIAMgdQAZgwgDhHQgFgsgOgRQgZgiAigFQAKg1AIgcQAMgmAWgkQASgeAOghQAQglAUgjQAvhUAvhJQAVgXAIgGQA/gKAIAtQAGAfAIAeQAmCEBEBzQALASAMARQAfAuA0AKQAmAIAZgXQApgmAngqIA2g4QAXgWASgbQA0hPBChHIAbgXQAKAPAFAUQAWBOA7A9QBXBaBxAmQCZACBhhiQA0gzA5goQAegGgDAkQgCAeABAeQAGB5AcB3QAWBgANBeQAFAjAAAjQAABQgJBNQgBAQgGAQQgBBSgLAvQgRA2gFA3QgHBEgZA+QgdBJgxAmQhBAJg3gDQgygDgiArQh5BmhDBaQhCBLhdAsQg4AbhCAAIgRAAgAFlAaIjLAAIDLAAgAiJAaIizAAICzAAg");
	this.shape_11.setTransform(0,-67.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AshymQAMgmAWgkQASgfAOghQAQglAUgjQAvhTAvhKQAVgXAIgFQA/gKAIAsQAGAfAIAfQAmCEBEBzQALARAMARQAfAvA0AKQAmAHAZgXQApgmAngpQAbgdAbgbQAXgXASgaQA0hPBChIIAbgXQAKAPAFAUQAWBPA7A8QBXBaBxAmQCZACBhhhQA0g0A5goQAegFgDAkQgCAdABAeQAGB6AcB2QAWBhANBeQAFAiAAAjQAABQgJBPQgBAQgGARQgBBSgLAvQgRA2gFA3QgHBDgZA+QgdBJgxAmQhBAKg3gDQgygDgiArQh5BlhDBZQhCBKhdAtQhAAehLgEQh1gFhog3QgbgOgdgOQiahKiehGQgsgSgsgPQhnghgihCQACidggiEQgEgTgEgTQgKg5gCg2QgEhaABhaQABgfADgdQADgcAIgXQAJgYADgGQAZgvgDhIQgFgrgOgSQgZgiAigFQAEgpAOgngACaqJQBlAABmAAAk8qJQBZAABaAAAszxWQAKg0AIgcAizHoQgugvhKgZQgZgIgYgNQhog4h0gcQgpgSgUgFQhPgQg9gsAizHJQAPAGAQACQAEgsADgrQACgjADgjQAFgsACguAiUHRQALABAMgBQAxgDAxAGQBeANBFgjQAwgUAggHQAbgUACgEAiUHRQgBAGgBAHQgBAOgCAPQgIBMgHBLQgPCnAECsQARAZAgASQAoAWAjAgQAaAYAdAUQBKA1AXBXQALAnAVAfQARAbAHAgQAVAaAAAZQAVAogGAeAjHOqQABAWAIASQABABAAACQAEAIAGAIQAAAFAAAGAi9PVQALA2gkAmQgfAygUAMQgTANgPAUQg0BHhBA+QgcAbgbAcQhZBdhbBhQgSASAAAY");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AshymQAMgmAWgkQASgfAOghQAQglAUgjQAvhTAvhKQAVgXAIgFQA/gKAIAsQAGAfAIAfQAmCEBEBzQALARAMARQAfAvA0AKQAmAHAZgXQApgmAngpQAbgdAbgbQAXgXASgaQA0hPBChIIAbgXQAKAPAFAUQAWBPA7A8QBXBaBxAmQCZACBhhhQA0g0A5goQAegFgDAkQgCAdABAeQAGB6AcB2QAWBhANBeQAFAiAAAjQAABQgJBPQgBAQgGARQgBBSgLAvQgRA2gFA3QgHBDgZA+QgdBJgxAmQhBAKg3gDQgygDgiArQh5BlhDBZQhCBKhdAtQhAAehLgEQh1gFhog3QgbgOgdgOQiahKiehGQgsgSgsgPQhnghgihCQACidggiEQgEgTgEgTQgKg5gCg2QgEhaABhaQABgfADgdQADgcAIgXQAJgYADgGQAZgvgDhIQgFgrgOgSQgZgiAigFQAEgpAOgngACaqJQBlAABmAAAszxWQAKg0AIgcAk8qJQBZAABaAAAizHoQgugvhKgZQgZgIgYgNQhog4h0gcQgpgSgUgFQhPgQg9gsAiBDaQgCAugFAsQgDAjgCAjQgDAugFAuQAKAEAJACQAwALAtAUQBXAoBNgPAiVHWQAAAEgBAEQgBAOgCAPQgIBMgHBLQgPCnAECsQARAZAgASQAoAWAjAgQAaAYAdAUQBKA1AXBXQALAnAVAfQARAbAHAgQAVAaAAAZQAVAogGAeAizHFQAOALAQAGAjHOqQABAWAIASQABABAAACQAEAIAGAIQAAAFAAAGAi9PVQALA2gkAmQgfAygUAMQgTANgPAUQg0BHhBA+QgcAbgbAcQhZBdhbBhQgSASAAAY");
	this.shape_13.setTransform(2.6,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AshymQAMgmAWgkQASgfAOghQAQglAUgjQAvhTAvhKQAVgXAIgFQA/gKAIAsQAGAfAIAfQAmCEBEBzQALARAMARQAfAvA0AKQAmAHAZgXQApgmAngpQAbgdAbgbQAXgXASgaQA0hPBChIIAbgXQAKAPAFAUQAWBPA7A8QBXBaBxAmQCZACBhhhQA0g0A5goQAegFgDAkQgCAdABAeQAGB6AcB2QAWBhANBeQAFAiAAAjQAABQgJBPQgBAQgGARQgBBSgLAvQgRA2gFA3QgHBDgZA+QgdBJgxAmQhBAKg3gDQgygDgiArQh5BlhDBZQhCBKhdAtQhAAehLgEQh1gFhog3QgbgOgdgOQiahKiehGQgsgSgsgPQhnghgihCQACidggiEQgEgTgEgTQgKg5gCg2QgEhaABhaQABgfADgdQADgcAIgXQAJgYADgGQAZgvgDhIQgFgrgOgSQgZgiAigFQAEgpAOgngACaqJQBlAABmAAAszxWQAKg0AIgcAk8qJQBZAABaAAAizHoQgugvhKgZQgZgIgYgNQhog4h0gcQgpgSgUgFQhPgQg9gsAiBDaQgCAugFAsQgDAjgCAjQgEAygFAyQAcgEAYgOQAqgZAvgRQBZggAthAQAignAZgVQAPgdAAgFAjHOqQABAWAIASQABABAAACQAEAIAGAIQgEisAPinQAHhLAIhMQACgPABgOAi9PVQALA2gkAmQgfAygUAMQgTANgPAUQg0BHhBA+QgcAbgbAcQhZBdhbBhQgSASAAAYAC9X4QAGgegVgoQAAgZgVgaQgHgggRgbQgVgfgLgnQgXhXhKg1QgdgUgagYQgjgggogWQgggSgRgZQAAAFAAAG");
	this.shape_14.setTransform(5.2,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC0000").s().p("AAJOOQh1gGhog2Ig4gcQiahKiehHQgsgUgsgOQhnghgihDQACidggiDIgIgnQgKg4gCg2QgEhaABhYQABgfADgeQADgbAIgYIAMgdQAZgwgDhHQgFgsgOgRQgZgiAigFQAKg1AIgcQAMgmAWgkQASgeAOghQAQglAUgjQAvhUAvhJQAVgXAIgGQA/gKAIAtQAGAfAIAeQAmCEBEBzQALASAMARQAfAuA0AKQAmAIAZgXQApgmAngqIA2g4QAXgWASgbQA0hPBChHIAbgXQAKAPAFAUQAWBOA7A9QBXBaBxAmQCZACBhhiQA0gzA5goQAegGgDAkQgCAeABAeQAGB5AcB3QAWBgANBeQAFAjAAAjQAABQgJBNQgBAQgGAQQgBBSgLAvQgRA2gFA3QgHBEgZA+QgdBJgxAmQhBAJg3gDQgygDgiArQh5BmhDBaQhCBLhdAsQg4AbhCAAIgRAAgAFlAaIjLAAIDLAAgAiJAaIizAAICzAAg");
	this.shape_15.setTransform(5.2,-67.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AshymQAMgmAWgkQASgfAOghQAQglAUgjQAvhTAvhKQAVgXAIgFQA/gKAIAsQAGAfAIAfQAmCEBEBzQALARAMARQAfAvA0AKQAmAHAZgXQApgmAngpQAbgdAbgbQAXgXASgaQA0hPBChIIAbgXQAKAPAFAUQAWBPA7A8QBXBaBxAmQCZACBhhhQA0g0A5goQAegFgDAkQgCAdABAeQAGB6AcB2QAWBhANBeQAFAiAAAjQAABQgJBPQgBAQgGARQgBBSgLAvQgRA2gFA3QgHBDgZA+QgdBJgxAmQhBAKg3gDQgygDgiArQh5BlhDBZQhCBKhdAtQhAAehLgEQh1gFhog3QgbgOgdgOQiahKiehGQgsgSgsgPQhnghgihCQACidggiEQgEgTgEgTQgKg5gCg2QgEhaABhaQABgfADgdQADgcAIgXQAJgYADgGQAZgvgDhIQgFgrgOgSQgZgiAigFQAEgpAOgngAIIreQgWgRgMgGQgpgSgVgZQglgFgYgDQgYgEgYAAQgZAAgYAEQgVAQgcAVQgKgOgfADQgYADgYADQgUAEgKANQgPAMgGAHQglApgJAzQAAAHABAIQACAigFAgQACAoACAoQABARAGAPQAqByBlBEQATANAWAMQBCAlA5ADQBYAFA5hBQANgPAIgPQBXiWgIihQgEhPhEgugAhqsYQgpgEgYADQgYACgSgMQgTgNglAGQgRADgNgGQgYAQgUAZQgaAigdAgQgWAXgRAbQgLASgCAdQgGBGAqA0QA5BHBOA2QAdAUAeASQArAbA2gJQAqglAXgPQBMgzAAheQAAgMADgMQAGgUACgUQAAgRgBgRQgBgYAEgXQgBgRgCgQQgCgNgGgLQgPgZgFgaQgDgRgVgCQgqgRgoAAgAszxWQAKg0AIgcAj0tEQgeAGgZARQgFgDgFgEAizHoQgugvhKgZQgZgIgYgNQhog4h0gcQgpgSgUgFQhPgQg9gsAjHOqQABAWAIASQABABAAACQAEAIAGAIQgEisAPinQAHhLAIhMQACgPABgOQAFgyAEgyQACgjADgjQAFgsACguAi9PVQALA2gkAmQgfAygUAMQgTANgPAUQg0BHhBA+QgcAbgbAcQhZBdhbBhQgSASAAAYAC9X4QAGgegVgoQAAgZgVgaQgHgggRgbQgVgfgLgnQgXhXhKg1QgdgUgagYQgjgggogWQgggSgRgZQAAAFAAAGAiWHeQAcgEAYgOQAqgZAvgRQBZggAthAQAignAZgVQAPgdAAgF");
	this.shape_16.setTransform(15.6,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#663333").s().p("AEVEuQg6gDhCglQgVgMgTgNQhmhEgnhyQgGgPgBgRIgEhOQAEgggCgiIgBgPQAKgzAigpIAWgTQAJgNAVgEIAvgGQAfgDALAOIAxglQAYgEAYAAQAZAAAYAEIA8AIQAWAZAoASQAMAGAXARQBDAuAEBPQAJCfhXCWQgIAPgNAPQg1A8hQAAIgMAAgAkjC6QgdgSgdgUQhPg2g5hHQgpgyAFhGQACgdAMgSQARgbAVgXQAeggAagiQATgZAYgQQAOAGARgDQAkgGAUANQARAMAZgCQAYgDAoAEQApAAApARQAVACAFARQAGAaAOAZQAHALABANIADAhQgEAXABAYIACAiQgDAUgFAUQgDAMgBAKQAABehNAzQgYAPgqAlQgNACgNAAQgmAAghgUg");
	this.shape_17.setTransform(22.7,-51.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3399CC").s().p("AAJOOQh1gGhog2Ig4gcQiahKiehHQgsgUgsgOQhnghgihDQACidggiDIgIgnQgKg4gCg2QgEhaABhYQABgfADgeQADgbAIgYIAMgdQAZgwgDhHQgFgsgOgRQgZgiAigFQAKg1AIgcQAMgmAWgkQASgeAOghQAQglAUgjQAvhUAvhJQAVgXAIgGQA/gKAIAtQAGAfAIAeQAmCEBEBzQALASAMARQAfAuA0AKQAmAIAZgXQApgmAngqIA2g4QAXgWASgbQA0hPBChHIAbgXQAKAPAFAUQAWBOA7A9QBXBaBxAmQCZACBhhiQA0gzA5goQAegGgDAkQgCAeABAeQAGB5AcB3QAWBgANBeQAFAjAAAjQAABQgJBNQgBAQgGAQQgBBSgLAvQgRA2gFA3QgHBEgZA+QgdBJgxAmQhBAJg3gDQgygDgiArQh5BmhDBaQhCBLhdAsQg4AbhCAAIgRAAgACwhoIgwAGQgUADgKANIgVATQglApgJAxIABAPQACAigFAgIAEBRQABAQAGAQQAqBxBlBFQATAMAWAMQBCAlA5ADQBYAFA5hBQANgPAIgPQBXiWgIigQgEhNhEgvQgWgRgMgFQgpgSgVgZIg9gJQgYgDgYAAQgZAAgYADIgxAlQgIgLgVAAIgMABgAlXheQgaAigdAgQgWAXgRAZQgLASgCAdQgGBFAqA0QA5BHBOA2QAdAUAeATQArAaA2gJQAqgkAXgPQBMg0AAhdQAAgMADgNQAGgTACgVIgBghQgBgZAEgXIgDgfQgCgMgGgLQgPgagFgZQgDgRgVgCQgqgSgoABQgpgEgYACQgYADgSgMQgTgNglAFQgRADgNgGQAZgQAegHQgeAHgZAQQgFgCgFgFQAFAFAFACQgYAQgUAagAkriIIAAAAgAkriIIAAAAg");
	this.shape_18.setTransform(15.6,-67.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AshymQAMgmAWgkQASgfAOghQAQglAUgjQAvhTAvhKQAVgXAIgFQA/gKAIAsQAGAfAIAfQAmCEBEBzQALARAMARQAfAvA0AKQAmAHAZgXQApgmAngpQAbgdAbgbQAXgXASgaQA0hPBChIIAbgXQAKAPAFAUQAWBPA7A8QBXBaBxAmQCZACBhhhQA0g0A5goQAegFgDAkQgCAdABAeQAGB6AcB2QAWBhANBeQAFAiAAAjQAABQgJBPQgBAQgGARQgBBSgLAvQgRA2gFA3QgHBDgZA+QgdBJgxAmQhBAKg3gDQgygDgiArQh5BlhDBZQhCBKhdAtQhAAehLgEQh1gFhog3QgbgOgdgOQiahKiehGQgsgSgsgPQhnghgihCQACidggiEQgEgTgEgTQgKg5gCg2QgEhaABhaQABgfADgdQADgcAIgXQAJgYADgGQAZgvgDhIQgFgrgOgSQgZgiAigFQAEgpAOgngACaqJQBlAABmAAAszxWQAKg0AIgcAizHoQgugvhKgZQgZgIgYgNQhog4h0gcQgpgSgUgFQhPgQg9gsAizPwQAAgGAAgFQgGgIgEgIQALA2gkAmQgfAygUAMQgTANgPAUQg0BHhBA+QgcAbgbAcQhZBdhbBhQgSASAAAYAiBDaQgCAugFAsQgDAjgCAjQgEAygFAyQAcgEAYgOQAqgZAvgRQBZggAthAQAignAZgVQAPgdAAgFAizPlQgEisAPinQAHhLAIhMQACgPABgOAjHOqQABAWAIASQABABAAACAC9X4QAGgegVgoQAAgZgVgaQgHgggRgbQgVgfgLgnQgXhXhKg1QgdgUgagYQgjgggogWQgggSgRgZAk8qJQBZAABaAA");
	this.shape_19.setTransform(23.4,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3399CC").s().p("AAJOOQh1gGhog2Ig4gcQiahKiehHQgsgUgsgOQhnghgihDQACidggiDIgIgnQgKg4gCg2QgEhaABhYQABgfADgeQADgbAIgYIAMgdQAZgwgDhHQgFgsgOgRQgZgiAigFQAKg1AIgcQAMgmAWgkQASgeAOghQAQglAUgjQAvhUAvhJQAVgXAIgGQA/gKAIAtQAGAfAIAeQAmCEBEBzQALASAMARQAfAuA0AKQAmAIAZgXQApgmAngqIA2g4QAXgWASgbQA0hPBChHIAbgXQAKAPAFAUQAWBOA7A9QBXBaBxAmQCZACBhhiQA0gzA5goQAegGgDAkQgCAeABAeQAGB5AcB3QAWBgANBeQAFAjAAAjQAABQgJBNQgBAQgGAQQgBBSgLAvQgRA2gFA3QgHBEgZA+QgdBJgxAmQhBAJg3gDQgygDgiArQh5BmhDBaQhCBLhdAsQg4AbhCAAIgRAAgAFlAaIjLAAIDLAAgAiJAaIizAAICzAAg");
	this.shape_20.setTransform(23.4,-67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_11,p:{x:0}},{t:this.shape_10}]},3).to({state:[{t:this.shape_11,p:{x:0}},{t:this.shape_12}]},1).to({state:[{t:this.shape_11,p:{x:2.6}},{t:this.shape_13}]},1).to({state:[{t:this.shape_15,p:{x:5.2}},{t:this.shape_14,p:{x:5.2}}]},1).to({state:[{t:this.shape_15,p:{x:7.8}},{t:this.shape_14,p:{x:7.8}}]},1).to({state:[{t:this.shape_15,p:{x:10.4}},{t:this.shape_14,p:{x:10.4}}]},1).to({state:[{t:this.shape_15,p:{x:13}},{t:this.shape_14,p:{x:13}}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,-158.8,171.9,317.7);


(lib.specialScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,"action":19,out:20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_42 = function() {
		$(document).trigger("nextScene");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(23).call(this.frame_42));

	// Ebene 3
	this.instance = new lib.Layer2sop();
	this.instance.setTransform(13.6,400.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:14,y:387.4},0).wait(1).to({x:14.5,y:374.7},0).wait(1).to({x:14.9,y:362.1},0).wait(1).to({x:15.4,y:349.4},0).wait(1).to({x:15.8,y:336.7},0).wait(1).to({x:16.2,y:324.1},0).wait(1).to({x:16.7,y:311.4},0).wait(1).to({x:17.1,y:298.7},0).wait(1).to({x:17.6,y:286.1},0).wait(1).to({x:18,y:273.4},0).wait(1).to({x:18.4,y:260.7},0).wait(1).to({x:18.9,y:248.1},0).wait(1).to({x:19.3,y:235.4},0).wait(1).to({x:19.7,y:222.7},0).wait(1).to({x:20.2,y:210.1},0).wait(1).to({x:20.6,y:197.4},0).wait(1).to({x:21.1,y:184.7},0).wait(1).to({x:21.5,y:172.1},0).to({_off:true},1).wait(24));

	// Ebene 4
	this.instance_1 = new lib.Layer2sop();
	this.instance_1.setTransform(21.5,172.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(1).to({x:21.4,y:180.9},0).wait(1).to({x:21.3,y:189.8},0).wait(1).to({x:21.2,y:198.6},0).wait(1).to({x:21.1,y:207.5},0).wait(1).to({x:21,y:216.4},0).wait(1).to({y:225.2},0).wait(1).to({x:20.9,y:234.1},0).wait(1).to({x:20.8,y:243},0).wait(1).to({x:20.7,y:251.8},0).wait(1).to({x:20.6,y:260.7},0).wait(1).to({x:20.5,y:269.6},0).wait(1).to({x:20.4,y:278.4},0).wait(1).to({x:20.3,y:287.3},0).wait(1).to({x:20.2,y:296.1},0).wait(1).to({x:20.1,y:305},0).wait(1).to({x:20,y:313.9},0).wait(1).to({y:322.7},0).wait(1).to({x:19.9,y:331.6},0).wait(1).to({x:19.8,y:340.5},0).wait(1).to({x:19.7,y:349.3},0).wait(1).to({x:19.6,y:358.2},0).wait(1).to({x:19.5,y:367.1},0).wait(1));

	// Ebene 1
	this.instance_2 = new lib.Layer1();
	this.instance_2.setTransform(-449.9,-10.9);

	this.l2 = new lib.Layer2sop();
	this.l2.setTransform(21.5,172.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:-449.9,y:-10.9}}]}).to({state:[{t:this.instance_2,p:{x:-425.9,y:-10.8}}]},1).to({state:[{t:this.instance_2,p:{x:-402,y:-10.8}}]},1).to({state:[{t:this.instance_2,p:{x:-378,y:-10.7}}]},1).to({state:[{t:this.instance_2,p:{x:-354.1,y:-10.7}}]},1).to({state:[{t:this.instance_2,p:{x:-330.1,y:-10.6}}]},1).to({state:[{t:this.instance_2,p:{x:-306.2,y:-10.6}}]},1).to({state:[{t:this.instance_2,p:{x:-282.3,y:-10.5}}]},1).to({state:[{t:this.instance_2,p:{x:-258.3,y:-10.5}}]},1).to({state:[{t:this.instance_2,p:{x:-234.4,y:-10.4}}]},1).to({state:[{t:this.instance_2,p:{x:-210.4,y:-10.3}}]},1).to({state:[{t:this.instance_2,p:{x:-186.5,y:-10.3}}]},1).to({state:[{t:this.instance_2,p:{x:-162.6,y:-10.2}}]},1).to({state:[{t:this.instance_2,p:{x:-138.6,y:-10.2}}]},1).to({state:[{t:this.instance_2,p:{x:-114.7,y:-10.1}}]},1).to({state:[{t:this.instance_2,p:{x:-90.7,y:-10.1}}]},1).to({state:[{t:this.instance_2,p:{x:-66.8,y:-10}}]},1).to({state:[{t:this.instance_2,p:{x:-42.8,y:-10}}]},1).to({state:[{t:this.instance_2,p:{x:-18.9,y:-9.9}}]},1).to({state:[{t:this.instance_2,p:{x:10,y:-5.9}},{t:this.l2}]},1).to({state:[{t:this.instance_2,p:{x:32.5,y:26}}]},1).to({state:[{t:this.instance_2,p:{x:56.2,y:38.5}}]},1).to({state:[{t:this.instance_2,p:{x:79.9,y:51.1}}]},1).to({state:[{t:this.instance_2,p:{x:103.5,y:63.7}}]},1).to({state:[{t:this.instance_2,p:{x:127.2,y:76.3}}]},1).to({state:[{t:this.instance_2,p:{x:150.9,y:88.9}}]},1).to({state:[{t:this.instance_2,p:{x:174.6,y:101.5}}]},1).to({state:[{t:this.instance_2,p:{x:198.2,y:114.1}}]},1).to({state:[{t:this.instance_2,p:{x:221.9,y:126.7}}]},1).to({state:[{t:this.instance_2,p:{x:245.6,y:139.2}}]},1).to({state:[{t:this.instance_2,p:{x:269.3,y:151.8}}]},1).to({state:[{t:this.instance_2,p:{x:293,y:164.4}}]},1).to({state:[{t:this.instance_2,p:{x:316.6,y:177}}]},1).to({state:[{t:this.instance_2,p:{x:340.3,y:189.6}}]},1).to({state:[{t:this.instance_2,p:{x:364,y:202.2}}]},1).to({state:[{t:this.instance_2,p:{x:387.7,y:214.8}}]},1).to({state:[{t:this.instance_2,p:{x:411.4,y:227.4}}]},1).to({state:[{t:this.instance_2,p:{x:435.1,y:240}}]},1).to({state:[{t:this.instance_2,p:{x:458.7,y:252.5}}]},1).to({state:[{t:this.instance_2,p:{x:482.4,y:265.1}}]},1).to({state:[{t:this.instance_2,p:{x:506.1,y:277.7}}]},1).to({state:[{t:this.instance_2,p:{x:529.8,y:290.3}}]},1).to({state:[{t:this.instance_2,p:{x:553.5,y:302.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-628.4,-143.5,1085.6,663.9);


(lib.sc2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"in":1,"action":14,"out":15});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		$(document).trigger("nextScene");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16).call(this.frame_30));

	// Ebene 4
	this.instance = new lib.sc1_2_ebene1();
	this.instance.setTransform(678.6,107.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:629.3,y:106.5},0).wait(1).to({x:580.1,y:106},0).wait(1).to({x:530.9,y:105.4},0).wait(1).to({x:481.6,y:104.9},0).wait(1).to({x:432.4,y:104.4},0).wait(1).to({x:383.2,y:103.8},0).wait(1).to({x:334,y:103.3},0).wait(1).to({x:284.7,y:102.7},0).wait(1).to({x:235.6,y:102.2},0).wait(1).to({x:186.3,y:101.7},0).wait(1).to({x:137.1,y:101.1},0).wait(1).to({x:87.8,y:100.6},0).wait(1).to({x:38.6,y:100.1},0).to({_off:true},1).wait(17));

	// Ebene 3
	this.instance_1 = new lib.sc1_2_ebene2();
	this.instance_1.setTransform(-610.8,12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:-567.3,y:12},0).wait(1).to({x:-523.8,y:11.8},0).wait(1).to({x:-480.4,y:11.6},0).wait(1).to({x:-436.9,y:11.3},0).wait(1).to({x:-393.5,y:11.1},0).wait(1).to({x:-350,y:10.9},0).wait(1).to({x:-306.6,y:10.6},0).wait(1).to({x:-263.2,y:10.4},0).wait(1).to({x:-219.8,y:10.2},0).wait(1).to({x:-176.3,y:9.9},0).wait(1).to({x:-132.8,y:9.7},0).wait(1).to({x:-89.4,y:9.5},0).wait(1).to({x:-46,y:9.3},0).to({_off:true},1).wait(17));

	// Ebene 5
	this.instance_2 = new lib.sc1_2_ebene1();
	this.instance_2.setTransform(38.6,100.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).wait(1).to({x:85.1,y:99.7},0).wait(1).to({x:131.7,y:99.4},0).wait(1).to({x:178.2,y:99.1},0).wait(1).to({x:224.7,y:98.7},0).wait(1).to({x:271.3,y:98.4},0).wait(1).to({x:317.8,y:98.1},0).wait(1).to({x:364.3,y:97.7},0).wait(1).to({x:410.8,y:97.4},0).wait(1).to({x:457.4,y:97.1},0).wait(1).to({x:503.9,y:96.7},0).wait(1).to({x:550.4,y:96.4},0).wait(1).to({x:597,y:96.1},0).wait(1).to({x:643.5,y:95.7},0).wait(1).to({x:690,y:95.4},0).wait(1).to({x:736.6,y:95.1},0).wait(1));

	// Ebene 6
	this.instance_3 = new lib.sc1_2_ebene2();
	this.instance_3.setTransform(-46.1,9.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).wait(1).to({x:-84.3,y:8.4},0).wait(1).to({x:-122.7,y:7.5},0).wait(1).to({x:-161.1,y:6.7},0).wait(1).to({x:-199.5,y:5.8},0).wait(1).to({x:-237.9,y:4.9},0).wait(1).to({x:-276.3,y:4.1},0).wait(1).to({x:-314.7,y:3.2},0).wait(1).to({x:-353.1,y:2.3},0).wait(1).to({x:-391.5,y:1.5},0).wait(1).to({x:-429.9,y:0.6},0).wait(1).to({x:-468.3,y:-0.1},0).wait(1).to({x:-506.7,y:-1},0).wait(1).to({x:-545.1,y:-1.8},0).wait(1).to({x:-583.5,y:-2.7},0).wait(1).to({x:-621.9,y:-3.6},0).wait(1));

	// Ebene 1
	this.instance_4 = new lib.Himmel();
	this.instance_4.setTransform(17.7,-23);

	this.l1 = new lib.sc1_2_ebene1();
	this.l1.setTransform(38.6,100.1);

	this.l2 = new lib.sc1_2_ebene2();
	this.l2.setTransform(-46.1,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4},{t:this.l2},{t:this.l1}]},14).to({state:[{t:this.instance_4}]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-931.8,-273.5,1939,550.1);


(lib.Ebene1 = function() {
	this.initialize();

	// Ebene 1
	this.flower = new lib.Blume();
	this.flower.setTransform(-15,54.9,0.308,0.308);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A1u4WQAogFApAAQAtgFAXAGQAlAnAjAEQAyAGAzAJQAdAGAegBQB6gBBpAoQANA+AFAyQAFAyAAAyQAAA3AFA2QAFAfAEATQASA1AUAbQAfAmAZAJQBLAkA5ALQAyAXAogBQBKAPAuAfQAcATAfAMQAlA0AVAcQAVAcAPAxQANAqAsALQAzAOA6gBQAjAFAYgDQAwgFAKAkQAlA6ApAnQAPAUAHAHQAjAwAIAxQAHAqAOAwQAIAdARAYQALAOALAYQAfBGA+A6QAXAVAmAZQApAeA5gDQAlgCAPAlQAUAugBA3QgBAjAEAjQAeBPBEAlQA8AeAdAXQAOALAFAUQARA/AmAqQAuBUAgA8QAYAtAeAdQAkAdANAeQAEA1gFAjQgTAvACA1QABAYAfAHQAoAJAnAMQAfAIAFAFQA6AtAhASQAOARAFAIQAKAWAFAFQAPALADAUQAPA0AbAHQAxAOA3gBQgBgCAAgCQgKgbgWgNQgGgEgPgcQgpgGgJgpA2V4MQAAACAAADQAXgCAQgNQgeAEgdAGA2V4HQgFAAgFAAQgtAPACAoQADBBAFBAQAPAVAEATAz/4qQgoAAgnAEQgaALgFAEQgBABAAAAA2V4HQAAC7AAC8QAAC5AAC5QAACbAACbQAADHAADIQAACtAACvQAADDAADDQAAAogFAnQgFAfgIAfQgkCBgfCBQgEARgEAQQAIAUAKAMQADA/AgAhQANAOANANQAVAEAXADQAtAGAuAIQC0AgC0AkQBeATBfASQDEAkDCAqQC+ApC+AfQBtARBuAKQC9ARC/gDQC5gEC5AAQBkAABkgFQAqgvBEACQA5gZAogcQAfgVAVgQQARgNAVgdQAMgQANgIQAPgHALgHQgBgNgDgOQAWAAAYgDA4hONQAAAeAEAeQAEAlATAJQAJAoALAaQgCAFgBAEQgQAzACA6QABAYAcADQAaADAaAFQAHABAIABQAbAfAVAdQAVASAFAFAYSUZQgJAMgRAMQACAhgSATQgwBKgnAwQgKAVgEAGQgQAYgPAZ");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339900").s().p("ADjYKQhugKhtgSQi9gfi+gpQjCgqjEgkQhfgRhegTQi0gki0ggQgugIgtgGIgsgHIgagbQgggigDg+QgKgMgIgVIAIggQAfiBAkiCQAIgeAFgfQAFgnAAgoIAAmGIAAlcIAAmQIAAk2IAAlyIAAl3QAXgBAQgNQAogFApgBQAtgFAXAHQAlAnAjAEQAyAGAzAJQAdAFAeAAQB6gCBpApQANA9AFAzQAFAxAAAyQAAA3AFA3IAJAxQASA2AUAaQAfAmAZAJQBLAlA5AKQAyAYAogBQBKAPAuAeQAcAUAfAMIA6BQQAVAcAPAwQANAqAsAMQAzANA5gBQAjAFAZgCQAwgFAJAjQAlA7ApAmQAPAUAIAIQAjAvAIAyQAGApAOAxQAJAdARAXQAKAOALAZQAgBFA+A6QAWAWAmAZQApAdA5gCQAmgCAPAlQATAugBA3QgBAjAFAiQAdBPBFAmQA8AdAcAYQAOALAFAUQASA/AlApIBOCQQAZAuAeAdQAjAcAOAeQADA2gEAiQgTAvACA2QABAYAeAHQAoAJAoAMQAeAIAFAFQA6AtAhASIAUAZQAJAWAGAEQAOALAEAUQAPA1AaAHQAxANA3AAQAEAOAAAMIgZAPQgOAHgMARQgVAdgQAMQgWARgeAUQgpAcg5AZQhEgBgqAvQhkAFhkAAQi5AAi5ADIg6ABQihAAihgOg");
	this.shape_1.setTransform(0.2,-0.5);

	this.addChild(this.shape_1,this.shape,this.flower);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-156.9,-157.9,314,316);


(lib.sc1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"in":1,"action":19,"out":20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		$(document).trigger("nextScene");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(15).call(this.frame_34));

	// Ebene 4
	this.instance = new lib.Ebene1();
	this.instance.setTransform(-437,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-422,y:60.7},0).wait(1).to({x:-407.2,y:60.8},0).wait(1).to({x:-392.4,y:61},0).wait(1).to({x:-377.5,y:61.2},0).wait(1).to({x:-362.7,y:61.3},0).wait(1).to({x:-347.9,y:61.5},0).wait(1).to({x:-333,y:61.7},0).wait(1).to({x:-318.2,y:61.8},0).wait(1).to({x:-303.4,y:62},0).wait(1).to({x:-288.5,y:62.2},0).wait(1).to({x:-273.7,y:62.3},0).wait(1).to({x:-258.9,y:62.5},0).wait(1).to({x:-244.1,y:62.7},0).wait(1).to({x:-229.2,y:62.8},0).wait(1).to({x:-214.4,y:63},0).wait(1).to({x:-199.6,y:63.2},0).wait(1).to({x:-184.7,y:63.3},0).wait(1).to({x:-169.9,y:63.5},0).to({_off:true},1).wait(16));

	// Ebene 5
	this.instance_1 = new lib.Ebene2();
	this.instance_1.setTransform(557.2,77.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:532},0).wait(1).to({x:506.8},0).wait(1).to({x:481.6},0).wait(1).to({x:456.4},0).wait(1).to({x:431.2},0).wait(1).to({x:406},0).wait(1).to({x:380.8},0).wait(1).to({x:355.7},0).wait(1).to({x:330.5},0).wait(1).to({x:305.3},0).wait(1).to({x:280.1},0).wait(1).to({x:254.9},0).wait(1).to({x:229.7},0).wait(1).to({x:204.5},0).wait(1).to({x:179.4},0).wait(1).to({x:154.2},0).wait(1).to({x:129},0).wait(1).to({x:103.8},0).to({_off:true},1).wait(16));

	// Ebene 6
	this.instance_2 = new lib.Ebene3();
	this.instance_2.setTransform(-47.4,462.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:458.7},0).wait(1).to({y:454.9},0).wait(1).to({y:451.2},0).wait(1).to({y:447.4},0).wait(1).to({x:-47.5,y:416.9},0).wait(1).to({x:-47.7,y:386.3},0).wait(1).to({x:-47.9,y:355.8},0).wait(1).to({x:-48.1,y:325.2},0).wait(1).to({x:-48.3,y:294.7},0).wait(1).to({x:-48.5,y:264.1},0).wait(1).to({x:-48.8,y:233.6},0).wait(1).to({x:-49,y:203.1},0).wait(1).to({x:-49.2,y:172.5},0).wait(1).to({x:-49.4,y:142},0).wait(1).to({x:-49.6,y:111.4},0).wait(1).to({x:-49.8,y:80.9},0).wait(1).to({x:-50,y:50.3},0).wait(1).to({x:-50.2,y:19.8},0).to({_off:true},1).wait(16));

	// Ebene 7
	this.instance_3 = new lib.Ebene1();
	this.instance_3.setTransform(-170,63.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).wait(1).to({x:-196.1},0).wait(1).to({x:-222.3},0).wait(1).to({x:-248.5},0).wait(1).to({x:-274.7},0).wait(1).to({x:-301},0).wait(1).to({x:-327.2},0).wait(1).to({x:-353.4},0).wait(1).to({x:-379.6},0).wait(1).to({x:-405.8},0).wait(1).to({x:-432},0).wait(1).to({x:-458.2},0).wait(1).to({x:-484.4},0).wait(1).to({x:-510.6},0).wait(1).to({x:-536.9},0).wait(1));

	// Ebene 8
	this.instance_4 = new lib.Ebene2();
	this.instance_4.setTransform(103.8,77.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).wait(1).to({x:137.7},0).wait(1).to({x:171.7},0).wait(1).to({x:205.6},0).wait(1).to({x:239.5},0).wait(1).to({x:273.4},0).wait(1).to({x:307.4},0).wait(1).to({x:341.3},0).wait(1).to({x:375.2},0).wait(1).to({x:409.1},0).wait(1).to({x:443.1},0).wait(1).to({x:477},0).wait(1).to({x:510.9},0).wait(1).to({x:544.8},0).wait(1).to({x:578.8},0).wait(1));

	// Ebene 9
	this.instance_5 = new lib.Ebene3();
	this.instance_5.setTransform(-50.3,19.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).wait(1).to({y:50.1},0).wait(1).to({x:-50.3,y:80.5},0).wait(1).to({y:110.8},0).wait(1).to({y:141.2},0).wait(1).to({y:171.5},0).wait(1).to({x:-50.4,y:201.9},0).wait(1).to({y:232.2},0).wait(1).to({y:262.6},0).wait(1).to({y:292.9},0).wait(1).to({x:-50.5,y:323.3},0).wait(1).to({y:353.6},0).wait(1).to({y:384},0).wait(1).to({y:414.3},0).wait(1).to({x:-50.6,y:444.7},0).wait(1));

	// Ebene 1
	this.instance_6 = new lib.Himmel();
	this.instance_6.setTransform(-20.4,4);

	this.l1 = new lib.Ebene1();
	this.l1.setTransform(-170,63.5);

	this.l2 = new lib.Ebene2();
	this.l2.setTransform(103.8,77.9);

	this.l3 = new lib.Ebene3();
	this.l3.setTransform(-50.3,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6},{t:this.l3},{t:this.l2},{t:this.l1}]},19).to({state:[{t:this.instance_6}]},1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-594,-246.4,1379.4,921.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;