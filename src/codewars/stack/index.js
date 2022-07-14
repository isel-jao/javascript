class Stack {
  constructor() {
    this.top = -1;
    this.storage = {};
  }
  push() {
    this.top++;
    this.storage[this.top] = arguments[0];
  }
  pop() {
    if (this.top === -1) {
      return null;
    }
    const popped = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return popped;
  }
  get peak() {
    if (this.top === -1) {
      return null;
    }
    return this.storage[this.top];
  }
}

module.exports = Stack;
