 
//logic(functional)
 
function main(sources) {
	const mouseover$ = sources.DOM.selectEvents('span','mouseover');
    const sinks ={
	    DOM: mouseover$
	    	.startWith(null)
		    .flatMapLatest(() =>
		    	Rx.Observable.timer(0, 1000)
	                .map(i => {
	                	return {
	                		tagName: 'H1',
	                		children: [
	                			{
	                				tagName: 'SPAN',
	                				children: [
	                					`Seconds ellapsed: ${i}`
	                				]	
	                			}	
	                		]
	                	}
	                })
	        ),
	    Log: RX.Observable.timer(0, 2000).map(i => 2*i),
    };
    return sinks;
}

//source: input (read) effect
//sink: output (write) effect
 
//Effects (imperative)
 
function DOMDriver(obj$) {
	function createElement(obj) {
		const element = document.createElement(obj.tagName);
		obj.children
			.filter(c => typeof c === 'object')
			.map(createElement)
			.forEach(c => element.appendChild(c));
		obj.children
			.filter(c => typeof c === 'string')
			.forEach(c => element.innerHTML += c);
		return element;
	}

    obj$.subscribe (obj => {
        const container = document.querySelector('#app');
        container.innerHTML = '';
        const element = createElement(obj);
        container.appendChild(element);
    });
    const DOMSource = {
    	selectEvents: function(tagName, eventType) {
    		return RX.Observable.fromEvent(document, evenType)
    			.filter(ev => ev.target.tagName === tagName.toUpperCase());
    	}
    }
    return DOMSource;
}

function consoleLogDriver(msg$) {
	msg$.subscibe(msg => console.log(msg));
}

// bProxy = ...
// a = f(bProxy)
// b = g(a)
// bProxy.imitate(b)
 
function run(mainFn, drivers) {
	const proxySources = {};
	Object.keys(drivers).forEach(key => {
		proxySources[key] = new Rx.Subject();
	});
    const sinks = mainFn(proxySources);
	Object.keys(drivers).forEach(key => {
		const source = drivers[key](sinks[key]);
		source.subscribe(x => proxySources[key].onNext(x));
	});
}

const drivers = {
	DOM: DOMEffect,
	Log: consoleLogEffect
}

run(main, drivers);
