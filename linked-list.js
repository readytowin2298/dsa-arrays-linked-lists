/** Node: node for a singly linked list. */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);
    if(!this.head){
      this.head = node;
    }
    if(this.tail){
    this.tail.next = node;
    } else {
      this.tail = node;
    }
    this.tail = node;
    this.length++;
    return undefined;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val, this.head);
    this.head = node;
    if(!this.tail){
      this.tail = node;
    }
    this.length++;
    return undefined;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.length === 0){
      throw new Error;
    };
    if(this.length === 1){
      let tail = this.tail.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return tail;
    }
    let node = this.head;
    let tail = this.tail.val;
    for(let i = 0; i < this.length - 2; i++){
      node = node.next;
    };
    node.next = null;
    this.tail = node;
    this.length--
    return tail;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.length === 0){
      throw new Error;
    }
    let head = this.head.val;
    
    this.head = this.head.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return head;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
