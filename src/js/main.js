// ES6 tutorial
// introducing Observable 
/* An Observable is just like an array, 
except the difference is with an array, all the data is stored in memory, 
whereas with an Observable, no data is stored in memory, 
and the items arrive over time, asynchronously */

//whatever...this does not work :pppp
//err: Uncaught TypeError: Cannot read property 'defineProperty' of unde

import Rx from 'rxjs-es/Rx';


import {sumTwo} from "./modules/math";

var dod = Rx.Observable;

var button = document.getElementById('button');

var handler = function(e) {
	alert('clicked');
};

button.addEventListener('click', handler);
