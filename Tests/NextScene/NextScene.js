(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.NextScene = function(mode,startPosition,loop) {
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
	this.subscene1 = new lib.sc1();
	this.subscene1.setTransform(270.1,210.5);

	this.subscene2 = new lib.sc2();
	this.subscene2.setTransform(243.5,223.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.subscene1}]}).to({state:[{t:this.subscene2}]},1).wait(1));

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


(lib.Ebene1 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A1u4WQAogFApAAQAtgFAXAGQAlAnAjAEQAyAGAzAJQAdAGAegBQB6gBBpAoQANA+AFAyQAFAyAAAyQAAA3AFA2QAFAfAEATQASA1AUAbQAfAmAZAJQBLAkA5ALQAyAXAogBQBKAPAuAfQAcATAfAMQAlA0AVAcQAVAcAPAxQANAqAsALQAzAOA6gBQAjAFAYgDQAwgFAKAkQAlA6ApAnQAPAUAHAHQAjAwAIAxQAHAqAOAwQAIAdARAYQALAOALAYQAfBGA+A6QAXAVAmAZQApAeA5gDQAlgCAPAlQAUAugBA3QgBAjAEAjQAeBPBEAlQA8AeAdAXQAOALAFAUQARA/AmAqQAuBUAgA8QAYAtAeAdQAkAdANAeQAEA1gFAjQgTAvACA1QABAYAfAHQAoAJAnAMQAfAIAFAFQA6AtAhASQAOARAFAIQAKAWAFAFQAPALADAUQAPA0AbAHQAxAOA3gBQgBgCAAgCQgKgbgWgNQgGgEgPgcQgpgGgJgpA2V4MQAAACAAADQAXgCAQgNQgeAEgdAGA2V4HQgFAAgFAAQgtAPACAoQADBBAFBAQAPAVAEATAz/4qQgoAAgnAEQgaALgFAEQgBABAAAAA2V4HQAAC7AAC8QAAC5AAC5QAACbAACbQAADHAADIQAACtAACvQAADDAADDQAAAogFAnQgFAfgIAfQgkCBgfCBQgEARgEAQQAIAUAKAMQADA/AgAhQANAOANANQAVAEAXADQAtAGAuAIQC0AgC0AkQBeATBfASQDEAkDCAqQC+ApC+AfQBtARBuAKQC9ARC/gDQC5gEC5AAQBkAABkgFQAqgvBEACQA5gZAogcQAfgVAVgQQARgNAVgdQAMgQANgIQAPgHALgHQgBgNgDgOQAWAAAYgDA4hONQAAAeAEAeQAEAlATAJQAJAoALAaQgCAFgBAEQgQAzACA6QABAYAcADQAaADAaAFQAHABAIABQAbAfAVAdQAVASAFAFAYSUZQgJAMgRAMQACAhgSATQgwBKgnAwQgKAVgEAGQgQAYgPAZ");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339900").s().p("ADjYKQhugKhtgSQi9gfi+gpQjCgqjEgkQhfgRhegTQi0gki0ggQgugIgtgGIgsgHIgagbQgggigDg+QgKgMgIgVIAIggQAfiBAkiCQAIgeAFgfQAFgnAAgoIAAmGIAAlcIAAmQIAAk2IAAlyIAAl3QAXgBAQgNQAogFApgBQAtgFAXAHQAlAnAjAEQAyAGAzAJQAdAFAeAAQB6gCBpApQANA9AFAzQAFAxAAAyQAAA3AFA3IAJAxQASA2AUAaQAfAmAZAJQBLAlA5AKQAyAYAogBQBKAPAuAeQAcAUAfAMIA6BQQAVAcAPAwQANAqAsAMQAzANA5gBQAjAFAZgCQAwgFAJAjQAlA7ApAmQAPAUAIAIQAjAvAIAyQAGApAOAxQAJAdARAXQAKAOALAZQAgBFA+A6QAWAWAmAZQApAdA5gCQAmgCAPAlQATAugBA3QgBAjAFAiQAdBPBFAmQA8AdAcAYQAOALAFAUQASA/AlApIBOCQQAZAuAeAdQAjAcAOAeQADA2gEAiQgTAvACA2QABAYAeAHQAoAJAoAMQAeAIAFAFQA6AtAhASIAUAZQAJAWAGAEQAOALAEAUQAPA1AaAHQAxANA3AAQAEAOAAAMIgZAPQgOAHgMARQgVAdgQAMQgWARgeAUQgpAcg5AZQhEgBgqAvQhkAFhkAAQi5AAi5ADIg6ABQihAAihgOg");
	this.shape_1.setTransform(0.2,-0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-156.9,-157.9,314,316);


(lib.sc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":0,action:14,out:15});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		$(document).trigger("nextScene");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(16).call(this.frame_30));

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


(lib.sc1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"in":0,"action":19,"out":20});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		$(document).trigger("nextScene");
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(15).call(this.frame_34));

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
p.nominalBounds = new cjs.Rectangle(-386.4,-246.4,819.2,600.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;