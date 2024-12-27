class ListNode<T> {
  public next: ListNode<T> | null = null;
  public prev: ListNode<T> | null = null;
  public value: T;

  constructor(value: T) {
    this.value = value;
  }
}

interface ILinkedList<T> {
  insertInBegin(data: T): ListNode<T>;
  insertAtEnd(data: T): ListNode<T>;
  deleteNode(node: ListNode<T>): void;
  traverse(): T[];
  size(): number;
  search(comparator: (data: T) => boolean): ListNode<T> | null;
}

class LinkedList<T> implements ILinkedList<T> {
  //when defining class properties with an initial value, there's no need to use var, let, or const because the property is implicitly declared as a class field.
  private head: ListNode<T> | null = null;
  insertInBegin(data: T): ListNode<T> {
    const temp: ListNode<T> = new ListNode<T>(data);
    if (!this.head) {
      this.head = temp;
    } else {
      this.head.prev = temp;
      temp.next = this.head;
      this.head = temp;
    }
    return this.head;
  }
  insertAtEnd(data: T): ListNode<T> {
    const temp: ListNode<T> = new ListNode<T>(data);
    if (!this.head) {
      this.head = temp;
    } else {
      let headT: ListNode<T> = this.head;
      while (headT.next) {
        headT = headT.next;
      }
      headT.next = temp;
      temp.prev = headT;
    }
    return this.head;
  }
  deleteNode(node: ListNode<T>): void {
    if (!this.head || !node) {
      return;
    }
    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;
  }
  traverse(): T[] {
    const array: T[] = [];
    if (!this.head) return array;
    let node: ListNode<T> | null = this.head;
    while (node) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
  size(): number {
    return this.traverse().length;
  }
  search(comparator: (data: T) => boolean): ListNode<T> | null {
    const checkNext = (node: ListNode<T>): ListNode<T> | null => {
      if (comparator(node.value)) {
        return node;
      }
      return node.next ? checkNext(node.next) : null;
    };
    return this.head ? checkNext(this.head) : null;
  }
}


interface Post {
  title: string;
}
const linkedList = new LinkedList<Post>();

linkedList.traverse() // [];

linkedList.insertAtEnd({ title: "Post A" });
linkedList.insertAtEnd({ title: "Post B" });
linkedList.insertInBegin({ title: "Post C" });
linkedList.insertInBegin({ title: "Post D" });

linkedList.traverse() // [{ title : "Post D" }, { title : "Post C" }, { title : "Post A" }, { title : "Post B" }];
linkedList.search(({ title }) => title === "Post A") // Node { data: { title: "Post A" }, prev: Node, next: Node};