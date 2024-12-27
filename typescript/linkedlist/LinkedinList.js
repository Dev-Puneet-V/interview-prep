var ListNode = /** @class */ (function () {
  function ListNode(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
  return ListNode;
})();
var LinkedList = /** @class */ (function () {
  function LinkedList() {
    //when defining class properties with an initial value, there's no need to use var, let, or const because the property is implicitly declared as a class field.
    this.head = null;
  }
  LinkedList.prototype.insertInBegin = function (data) {
    var temp = new ListNode(data);
    if (!this.head) {
      this.head = temp;
    } else {
      this.head.prev = temp;
      temp.next = this.head;
      this.head = temp;
    }
    return this.head;
  };
  LinkedList.prototype.insertAtEnd = function (data) {
    var temp = new ListNode(data);
    if (!this.head) {
      this.head = temp;
    } else {
      var headT = this.head;
      while (headT.next) {
        headT = headT.next;
      }
      headT.next = temp;
      temp.prev = headT;
    }
    return this.head;
  };
  LinkedList.prototype.deleteNode = function (node) {
    if (!this.head || !node) {
      return;
    }
    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;
  };
  LinkedList.prototype.traverse = function () {
    var array = [];
    if (!this.head) return array;
    var node = this.head;
    while (node) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  };
  LinkedList.prototype.size = function () {
    return this.traverse().length;
  };
  LinkedList.prototype.search = function (comparator) {
    var checkNext = function (node) {
      if (comparator(node.value)) {
        return node;
      }
      return node.next ? checkNext(node.next) : null;
    };
    return this.head ? checkNext(this.head) : null;
  };
  return LinkedList;
})();
var linkedList = new LinkedList();
linkedList.traverse(); // [];
linkedList.insertAtEnd({ title: "Post A" });
linkedList.insertAtEnd({ title: "Post B" });
linkedList.insertInBegin({ title: "Post C" });
linkedList.insertInBegin({ title: "Post D" });
console.log(linkedList.traverse()); // [{ title : "Post D" }, { title : "Post C" }, { title : "Post A" }, { title : "Post B" }];
console.log(
  linkedList.search(function (_a) {
    var title = _a.title;
    return title === "Post A";
  }).value
); // Node { data: { title: "Post A" }, prev: Node, next: Node};
