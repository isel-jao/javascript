"use strict";

let ft_object = {
	assign : function() {
		if (arguments.length == 0) return;
		let new_obj = {};
		let count = 0;
		for (let i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] === "object") {
				for (let p in arguments[i]) {
					if (+p <= count) new_obj[count++] = arguments[i][p];
					else new_obj[p] = arguments[i][p];
				}
			} else new_obj[count++] = arguments[i];
		}
		return new_obj;
	}
}


let person = { name: "isel", age: 29 };

let arr = ["issam", "el jouhary"];

let clone_person = {};
clone_person = Object.assign(5, "isel", true, person, arr);
console.log(clone_person);
clone_person = ft_object.assign(5, "isel", true, person, arr);
console.log(clone_person);

