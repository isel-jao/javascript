const alert = (...args) => {
  console.log(...args);
};

// A Proxy object wraps another object and intercepts operations, like reading/writing properties and others, optionally handling them on its own, or transparently allowing the object to handle them.

// syntax: let proxy = new Proxy(target, handler)

let numbers = [];

numbers = new Proxy(numbers, {
  // (*)
  set(target, prop, val) {
    // to intercept property writing
    if (typeof val == "number") {
      target[prop] = val;
      // return true;
    } else {
      throw new TypeError("hello world");
    }
  },
});

numbers.push(1); // added successfully
numbers.push(2); // added successfully
alert("Length is: " + numbers.length); // 2

// try {
//   numbers.push("test"); // TypeError ('set' on proxy returned false)
// } catch (e) {
//   console.log(e);
// }

alert("This line is never reached (error in the line above)");
