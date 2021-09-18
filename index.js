"use strict";

let whoami = function()
{
	console.log(this);
}

let user = {
	name: "John",
	age: 30,
	print: whoami
};

user.print();


whoami();