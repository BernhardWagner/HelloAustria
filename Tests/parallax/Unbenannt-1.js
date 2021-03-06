(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Unbenannt1 = function() {
	this.initialize();

	// Ebene 1
	this.layer1 = new lib.Ebene1();
	this.layer1.setTransform(330,198.4);

	this.layer2 = new lib.Ebene2();
	this.layer2.setTransform(351,330.5);

	this.layer3 = new lib.Ebene3();
	this.layer3.setTransform(317.5,182.5);

	this.addChild(this.layer3,this.layer2,this.layer1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-255.9,-93.9,1146.9,572);


// symbols:
(lib.Ebene1 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("AGhAAQChAACigDQCRgCCRgCQB4gDB4gDQBfgCBfgBQC+gEC+AAA3ZAUQAJAAAJAAQCbgCCbAAQCCAACCAAQCbAACbgCQC+gDC+gFQDDgFDCgDQBkAABkAAQAXAAAYAAA3ZAUQisABiqgN");
	this.shape.setTransform(0,168.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#660000").ss(1,1,1).p("AG4vHQAAACAAACQAADHAADIQAAA3AEA3QAGBRAIBPQACAUAEATQAGAaACAaQAKBmAkBiQAbBIAbBKQANAkALAkQA4C6BXCuQBXCsBbCdAG4wkQAAAuAAAvAQkRkQglhXhDhOQgVgZgRgdQgBAAAAgBAABuBQgBhdAAhdQAAgWAKgSAG4wkQAAgRAAgQAvlOeQAlgSAegjQAhglAugSQAWgJAUgPQCVh3CBiPQB/iMBligQAggyAggwQArhCAshCQAIgLAIgOQArhUAehYQAlh6AOhhQARiFgDiJQgBhqAAhrAwjOwQAhgEAdgO");
	this.shape_1.setTransform(-49.9,77.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#33FF00").ss(1,1,1).p("AnNNPQgLgVgOgaQAAgYgPgQQgUgWgJgcQgEgLgDgLQgXgWgVgaQgpgygrguQhChHg2hQQgqg/g0g1Qg2g4gwg9QgagigMguQgUgvACgzQAFhaAFhaQACg1AegxQAng/AugqQA9glAlgFQA8gJAOA5QAdAjACAuQAkgGAGgsQADgeAGgdQAEgVAHgVQANgrAHgtQADgVAHgVQAIgYABgZQACg8Adg0QAXgqARgvQANgdAIgLQATgeAYgFQATgEAUABQB/ADB8gJQA7gFA8AEQAPABAPAHQBFAgAsA/QAjAuANAkQAUAqAOAfQAIA1AOAgQApgLAYgVQAQgPASgNQBDg0BJgnQBpg4Bjg4QAjgUAfgRQAggRAKAAQAUAAAMgFQBxgRAxBGQASAZAMAZQAeA9AKAoQASBJAPBPQADAOABAPQAFBVgZBIQgGASgMARQg/BchPA6QgfAXgdARQgHAmAXAQQANAJAJAQQAkA9ALA5QAEATAAAUQAAA3gIA2QgRAugMAUQgNAUgRASQgiAkgfAnQhgB6hwBkQgyAtg6AUQgRAFgPALQgoAchGgFQgegCgdAAQgjAkgwAdQgNAIgPABQg8AEg7gEQgNgBgQABADtK+QAFgFAFgGQAYgfAFgKADtK+QgjAAgjADQgzAVgygDQgtgDgbgZQgJgGgHgFQgIgHgEgEQgjgQgJgMAooJsQAGAjAJAhQAaAYAdASAnNNPQATAjAKASQAKASAIASQAWgBALgEQAOgGAMgJQAcgVAQgBQAngDAegfQAngoAzgMQBDgeA/gC");
	this.shape_2.setTransform(-3.6,-96.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#330000").s().p("At5N+QAhglAtgSQAXgJATgPQCWh3CBiPQB+iMBmigIA/hiIBXiEQAJgNAHgMQArhUAehYQAkh6ANhhQATiFgCiJIgCjVIAdA2IASAkQAWgBAKgEQAPgGAMgJQAcgVAPgCQAngDAegfQAngoAzgMQBEgdA/gCIAAAEIAAGPQAAA3AEA3QAGBRAIBPQACAUAEATQAGAaACAaQAKBmAkBgIA2CUQANAkALAkQA4C6BXCuQBXCsBbCdIgvAAQhkAAhkACQjDADjDAFQi+AFi8ADQibACibAAIkEAAQibAAibACIgSAAQAkgSAfgjg");
	this.shape_3.setTransform(-53.9,75.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66CC00").s().p("AmwOEIgdg1IAAi7QAAgWAJgSQgJASAAAWIAAC7IgZgvQAAgYgPgQQgUgWgJgcIgHgWQAaAYAdASQgdgSgagYQgJghgGgjQAGAjAJAhQgXgWgVgaQgpgygrguQhChHg2hQQgqg/g0g1Qg2g4gwg9QgagigMguQgUgvACgzIAKi0QACg1AegxQAng/AugqQA9glAlgFQA8gJAOA5QAdAjACAuQAkgGAGgsQADgeAGgdQAEgVAHgVQANgrAHgtQADgVAHgVQAIgYABgZQACg8Adg0QAXgqARgvQANgdAIgLQATgeAYgFQATgEAUABQB/ADB8gJQA7gFA8AEQAPABAPAHQBFAgAsA/QAjAuANAkIAiBJQAIA1AOAgQApgLAYgVQAQgPASgNQBDg0BJgnQBpg4Bjg4IBCglQAggRAKAAQAUAAAMgFQBxgRAxBGQASAZAMAZQAeA9AKAoQASBJAPBPQADAOABAPQAFBVgZBIQgGASgMARQg/BchPA6QgfAXgdARQgHAmAXAQQANAJAJAQQAkA9ALA5QAEATAAAUQAAA3gIA2QgRAugMAUQgNAUgRASQgiAkgfAnQhgB6hwBkQgyAtg6AUQgRAFgPALQgoAchGgFQgegCgdAAIAKgLQAYgfAFgKQgFAKgYAfIgKALQgjAAgjADQgzAVgygDQgtgDgbgZIgQgLIAAgiIAAAiIgMgLQgjgQgJgMQAJAMAjAQIAMALIAABcQg/AChDAeQgzAMgnAoQgeAfgnADQgQABgcAVQgMAJgOAGQgLAEgWABIgSgkg");
	this.shape_4.setTransform(-3.6,-96.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-183.9,-190.3,368,380.8);


(lib.Ebene3 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009933").ss(1,1,1).p("EBZmArMMizLAAAMAAAhWXMCzLAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("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");
	this.shape_1.setTransform(-46.8,-103.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A46QsQgUgBgTgEQg3gMhTgKQhdgyhjgcIgqgLQhagUhagiQgOgGglgTQgUgGgRgVQg4hCgphVQgwhlgVhsQARgMAYgeQANgPANgIQAVgNAbgVQgbAVgVANQgNAIgNAPQgYAegRAMQgQhOAAhRQgBhLAWhBQDDgKDLgEQAPgIAbABQAZABAjgFQBugFBuAAQDDAADDADQAyABAxAJIBbAQQAKABAgAPIAuATQARAGAQAEQBUATBOBHQArAXAlA8QBFA+AgBaQAGAQACAQQAIBFgBBGQAAAmgoAeQhZAshcAiIgvATQg8AXgpAhQgFAEgWAKQgkAcg6APQg+AShDAQQh+AfiGAAQgeAAgegCgA1UMwIARgBIABAAIABgBQBnghBsgsQBGgdBGgUQAUgGARgJQBIgpBHgtQgPgKgLgNQgQgVgSgaQhXh+ghiQQgLAQgdAGQgjAIggARQipBcjPARQgmg/gpg+QgfguhZg5IgBAAIgFgBIAAAAQgcgGgcAAIAAAAIgBAAQgaAAgbAFIgBABIgCAAQgtAKgtAMQgYAGgWALQhQAmhSAeQgfALgcATQhSA2haAWIALgIQAVgOASgSIAAAAIABAAIAAgBQAVgVAiAAIABAAIAAAAQALAAAMACQgMgCgLAAIAAAAIgBAAQgiAAgVAVIAAABIgBAAIAAAAQgSASgVAOIgLAIQBagWBSg2QAcgTAfgLQBSgeBQgmQAWgLAYgGQAtgMAtgKIACAAIABgBQAbgFAaAAIABAAIAAAAQAcAAAcAGIAAAAIAFABIABAAQBZA5AfAuQApA+AmA/QDPgRCphcQAggRAjgIQAdgGALgQQAhCQBXB+QASAaAQAVQALANAPAKQhHAthIApQgRAJgUAGQhGAUhGAdQhsAshnAhIgBABIgBAAIgRABIAAAAIAAAAQgpgBgHgYIAAgCQhGgWgsgbQgNgIgPgEQgxgOgzgDQgbgCgbAAIAAAAIgBAAQhiAAhcAbIgFABIgCABIgDABIAAAAQgdAHgfAAIAAAAIAAAAQgYAAgZgEIgDgBIgCAAQgQgEgQgJQhLgrhJgxQg4gbgkgpIgcggQgWgZgLgXQgcgRAAgdIAAgFIA8AAIAeAAIgeAAIg8AAIAAAFQAAAdAcARQALAXAWAZIAcAgQAkApA4AbQBJAxBLArQAQAJAQAEIACAAIADABQAZAEAYAAIAAAAIAAAAQAfAAAdgHIAAAAIADgBIACgBIAFgBQBcgbBiAAIABAAIAAAAQAbAAAbACQAzADAxAOQAPAEANAIQAsAbBGAWIAAACQAHAYApABIAAAAIAAAAgEAxSACXQjDgEjfgOQgTgJghgBQgUgBgUgFQgPgFgQgCQgzgKgwgNQgPgFgQgBQgqgDgmgKQhcgXh8giQhzg+hOhkQgPgUgTgQQhWhOg8hgQgPgZgJgbIgZhSIAGAFQALAjAYAWQAYAWAPAdQAJAQAEARQAIAeAQAAIABAAIAAAAQAJAAANgKQAOgMAQgEIAEAAQAXgFAVAAIABAAIAAAAQBGAAA5A0IAAAAIAEADQAYAGAOATQARAZAWARQBFAzAwBlQAeAZAlAbQAhAXAjASQAtAZAwASQA+AWBAATIAGACIAEABQBgAZBlAAIAAAAIAAAAIAYAAIAFAAIAFAAIAGAAIARgBIAAAAIABAAQAeAAAfACIAFAAIACABIADAAIABAAIApABIAAAAIAAAAQBrAABkgfIADgCIADgBIBjggQCFgsBihdQAZgZAUgcIAdgsQAbgrAGgyQAEgeAAgeQAAg+gQg/Ig4g9QgqgNg3grQgMgNgOgJQhMgyhRhWIgIAAIgBAAIAAAAQgZAAgcAIIgBABIgEABIgBAAIgBAAIgeALQh0AphnA8IgCABIAAABIgCAAQg2AfhAAAIAAAAIgBAAIgdgCQh1gMhvgiIgqgNQi4g2ikhlIgcgOQgUgPgXgEIgDAAQg3gJg3AAIAAAAIgBAAQg5AAg5AJIgDABQgTADgRAHQgeAMghAFQg4AIg0AhIADhVQgCgjAjguQAWgfAygYIBGgHIAygEQAjgDAhgIQAygNA0AAIEsABIAyAJQAlAHAfASIApATQAtAOAvAVQATAHAoAMQC8AiDAAvQAeAHAdAJIBGAUQBwAiB2AtQA/AZBPBGQA4ApAmB3QAPAgATAfQArBEAwBRQAKAPACAQQAIA7gFBMQggAoghAPQgUAJgfAOQgbACgXAMQgsAWguAOIhtAiQgPAFgOAIQgfATgzAEQhmAShuAAIgbAAgEAvhACEIgpgBIgBAAIgDAAIgCgBIgFAAQgfgCgeAAIgBAAIAAAAIgRABIgGAAIgFAAIgFAAIgYAAIAAAAIAAAAQhlAAhggZIgEgBIgGgCQhAgTg+gWQgwgSgtgZQgjgSghgXQglgbgegZQgwhlhFgzQgWgRgRgZQgOgTgYgGIgEgDIAAAAQg5g0hGAAIAAAAIgBAAQgVAAgXAFIgEAAQgQAEgOAMQgNAKgJAAIAAAAIgBAAQgQAAgIgeQgEgRgJgQQgPgdgYgWQgYgWgLgjIgGgFIgMgkQgEgPgCgPQgDgeAAgeQAAg8AChBQA0ghA4gIQAhgFAegMQARgHATgDIADgBQA5gJA5AAIABAAIAAAAQA3AAA3AJIADAAQAXAEAUAPIAcAOQCkBlC4A2IAqANQBvAiB1AMIAdACIABAAIAAAAQBAAAA2gfIACAAIAAgBIACgBQBng8B0gpIAegLIABAAIABAAIAEgBIABgBQAcgIAZAAIAAAAIABAAIAIAAQBRBWBMAyQAOAJAMANQA3ArAqANIA4A9QAQA/AAA+QAAAegEAeQgGAygbArIgdAsQgUAcgZAZQhiBdiFAsIhjAgIgDABIgDACQhkAfhrAAIAAAAIAAAAgA9vjfQg9gdg9gcQg6gbg1gfQgfgSgjgTQhDgihfAEQhDACg4AmQhBAWgjAQIgmANQgdAIgLABQgiAEgjABQhwAEhjghQhugkhtgmQgcgKghgGIgegIIg7gHQhdgLhEAUQhxAihzANQg9AIgegfIhMiYQABg5AageQAkgqAQgwQAwgtAlgvQAlgiAbgLQAIgEAKgUQBQhRBcg2QBngFBVAFQA8A2AXBGQAfAbAugFQAZgLAGgIQA9hPA4hBQAigiAnAKQAYAGAZAAQBuAABuAFQAPAAAOAGQAlAQAkATIBWAvQAWAMAUAPQBUA+BWAwQA0AeAxAQQCDAJBhgRQAygJAygLQAdgHAggDQBZgKgDBcQgBAZAFAZQAdCDgICLQgBAegFAeQgFAlgYAeQgVAbgQAaQgOAWgjADQgrANgnAAQgwAAgngUgEg4MgNwIAKgBIACgBQAYgIAGgVQgGAVgYAIIgCABIgKABIAAAAIgBAAQgNAAgMgKIAAAAIgBAAIgBgBIABABIABAAIAAAAQAMAKANAAIABAAIAAAAgAblnvIAAAAg");
	this.shape_2.setTransform(-46.8,-103.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003399").s().p("EhZlArMMAAAhWXMCzLAAAMAAABWXgEgsXgFPQApBUA3BDQASAUATAHQAlATAPAFQBZAjBbAUIAqALQBjAcBdAwQBTAKA2AMQAUAEAUABQClAICbgmQBCgOA/gRQA6gQAkgbQAWgKAFgFQApggA8gYIAvgSQBcgjBYgrQApgfAAglQAAhGgIhFQgBgQgHgRQgfhZhGg+Qgkg9gsgWQhOhHhTgUQgRgDgQgHIgvgSQgfgPgKgCIhbgQQgxgJgygBQjDgCjEAAQhuAAhtAFQgkAFgZgBQgagBgQAIQjKAEjEAKIgdAAIAdAAQgVBBABBLQAABRAQBOIgFACIAFgCQAUBrAxBmgAT751QgBAeAEAdQACAQAEAPIALAjIAaBTQAJAbAPAZQA8BgBWBNQATARAPATQBOBkBzBAQB8AiBcAYQAmAJAqAEQAPABAPAEQAxAOAzAJQAQADAPAEQAUAGATAAQAiABATAKQDeAODDADQB9ADBzgUQAzgFAfgSQAOgIAOgFIBtgiQAvgPAsgWQAXgLAbgDQAfgPAUgJQAhgPAggoQAEhMgIg7QgCgQgJgQQgxhQgrhFQgSgegPghQgmh3g4goQhQhHg/gYQh1guhxghIhFgVQgdgIgegHQjAgvi8giQgogMgUgIQgugVgugNIgogUQgggRgkgHIgzgJQgagPgrAAIAAAAIAAAAIgKAAQgfgFgTAAQATAAAfAFIAKAAIAAAAIAAAAQArAAAaAPIksgBQg0gBgxANQgiAJgjADIgxAEIhGAHQgyAYgWAeQgjAvABAjIgCBVIgLAHQg5Ang3AxQA3gxA5gnIALgHQgCBAAAA9gEgpwgV/QAkASAfASQA1AfA6AbQA9AcA8AeQBJAjBhgdQAigCAOgXQARgZAVgbQAYgeAFgmQAFgdABgeQAIiLgdiDQgGgZACgZQADhchaAKQgfADgdAGQgyALgyAJQhhASiDgKQgxgQg0gdQhXgwhTg+QgVgPgVgMIhWgvQgkgUglgPQgPgGgPgBQhugEhtAAQgZAAgYgGQgngLgjAjQg3BAg9BPQgHAJgYALQguAEgggaQgWhHg9g2QhVgEhmAEQhdA2hPBSQgKAUgJADQgaAMglAhQglAwgwAtQgQAvgkAqQgbAeAAA6IBMCYQAeAeA8gHQB0gOBxgiQBEgUBdALIA7AIIAeAIQAgAGAdAKQBtAlBuAlQBjAhBwgEQAjgBAigEQALgBAcgIIAmgNQAkgQBAgXQA5glBCgDIAUAAQBTAAA7AfgAUP34QgYgXAAgnQAAgLACgMQACgLAAgLQAAgVgHgTIgRgvIARAvQAHATAAAVQAAALgCALQgCAMAAALQAAAnAYAXg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-573.4,-276.4,1146.9,553);


(lib.Ebene2 = function() {
	this.initialize();

	// Ebene 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009933").ss(1,1,1).p("AIcpTQg1gCgvgSQgmgPgqgCQgZgCgagHQh5ghh2gTQgbgFgZgKQh9gRhcgOQhWgOhTgWQgfgJgfgFQgdgFgdgFQgVgEgVgHQgdgIgdgIQiRgliSgVQgZgEgYgHQh5ggiBgdQhJgTg6ABQgtABgsAHQgQADgPAJQijBfiwBEQg+AYg8AUQgmAOgygEQgUgCgOAJQjAAGilAAQjcAAjcAAQjhAAjhgDQgtgBgtgHQhIgLhFgZQgngRgUgEQhbgPhZgQQgWgEgUgNQgfgSgkgIQg+gagqgkQgVgKgGgEQgigTguAEQgsAEgtAAQhaAAhaAAQgLAAgKAAQgGCrAaCoQAZCiAdCeQAjC+AgC8QAZCXAfCWQATBeAPBfQAYCUAoCQQALAmAJAnQAGAaAHAaQANAxAIAzQAHAygRAcQg0AegbApQgSAcgVAgQgRAZAVAPQAkAZAyAFQCRAPCRALQC9AOC+AKQBaAFBaAGQCCAJCCAHQClAIClADQCCACCCAAQCCAACCAAQCCAACCADQCRACCRADQClACClAAQCMAACMAAQCWAACWAAQCMAACMAAQCHAACHAAQCBAACCAAQCMAACMAAQCCAACCAAQBuAABuAAQDDAADDgCQCggDCfgKQCXgKCVgRQCSgSCRgSQC5gYC4geQBvgSBtgYQC0gnC0gfQBCgLBBgMQC+glC+gbQC3gZC7gNQCQgLCRAAQgOgwgbgoQhsiihCi8QgOgqgRgpQgihSgohIQgTgjgNgnQgMgkgRgiQgghAgbhCQghhQgehNQg4iZgqiKQgIgdgNgZQgHgRgFgTQgUhNgQhUQgEgUgDgUQgGg+gUgyQgGgSgDgTQgIhDgTg/QgIgdgFgfQgHgZAAgFQgFgZgDgGQgHgdgEgLQgBgigCgEQgIgagCgEQgIgagCgEQgIgVAAgKQgFgZgBgGQgEgTAAgUQAAgZAAgZQAAgZAAgZQAAgyAAgyQAAgUAAgUQgtAeguAnQgkAegpAYQgbARgXAWQhOBJhbAyQgSAKgQANQghAcgjAZQgpAYgRAKQgSAKgRAMQg/AthDAiQgSAJgTAIQgaAMgbAKQhRAbgwAOQhyAKhVAFQiaAKiSgfQgZgFgZgGQgqgJgogRQgSgIgVgEQgdgGgJgGQgagTgRgHQgXgIgGgDQgYgMgFAAQgZAAgFAAQgZAAgFAAQgtAKgQAJQgTALgVAIQgTAHgTAHQgjANgkAQQgYALgcAOQgSAJgUAGQg0ASgwAWQhcAqhaArQgoATgmAZQhnBBhsAeQg4APgPAFQhUAGg3AEQhFAEhGgBgEhDzgO5QgUAAgTAAEhDygPXQgBAPAAAP");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("ALQXCIkEAAIkYAAIkCAAIkOAAIkYAAIksAAIkYAAQilAAilgCIkigFQiCgDiCAAIkEAAQiCAAiCgCQilgDilgIQiCgHiCgJIi0gLQi+gKi9gOQiRgLiRgPQgygFgkgZQgVgPARgZIAng8QAbgpA0geQARgcgHgyQgIgzgNgxIgNg0QgJgngLgmQgoiQgYiUQgPhfgTheQgfiWgZiXQggi8gji+QgdiegZiiQgaioAGirIAVAAIC0AAQAtAAAsgEQAugEAiATIAbAOQAqAkA+AaQAkAIAfASQAUANAWAEIC0AfQAUAEAnARQBFAZBIALQAtAHAtABQDhADDhAAIG4AAQClAADAgGQAOgJAUACQAyAEAmgOQA8gUA+gYQCwhECjhfQAPgJAQgDQAsgHAtgBQA6gBBJATQCBAdB5AgQAYAHAZAEQCSAVCRAlIA6AQQAVAHAVAEIA6AKQAfAFAfAJQBTAWBWAOQBcAOB+ARQAYAKAaAFQB3ATB4AhQAaAHAaACQApACAnAPQAuASA1ACQBGABBGgEICLgKIBGgUQBsgeBohBQAmgZAogTQBagrBcgqQAwgWA0gSQATgGASgJQAcgOAZgLQAkgQAigNIAmgOQAVgIAUgLQAPgJAtgKIAeAAIAeAAQAFAAAYAMIAeALQAQAHAaATQAJAGAeAGQAUAEATAIQAoARApAJIAyALQCSAfCagKQBWgFBxgKQAxgOBQgbQAbgKAbgMIAkgRQBDgiA/gtQARgMASgKIA6giQAjgZAhgcQAQgNASgKQBcgyBNhJQAXgWAbgRQAqgYAjgeQAugnAtgeIAAAoIAABkIAAAyIAAAyQAAAUAEATIAGAfQAAAKAIAVIAKAeIAKAeQACAEACAiIAKAoQADAGAFAZQAAAFAHAZQAFAfAJAdQASA/AJBDQACATAHASQATAyAHA+QACAUAEAUQAQBUAUBNQAFATAIARQAMAZAJAdQApCKA5CZQAdBNAhBQQAbBCAgBAQARAiAMAkQANAnATAjQAoBIAiBSQARApAPAqQBBC8BsCiQAbAoAPAwQiRAAiRALQi6ANi4AZQi+Abi9AlIiDAXQi1Afi0AnQhtAYhuASQi4Aei6AYIkiAkQiWARiWAKQigAKigADQjDACjDAAIjcAAg");
	this.shape_1.setTransform(1.9,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-437.9,-147.4,875.9,295);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;