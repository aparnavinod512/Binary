export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return true;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) {
        return false;
      }

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return true;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return true;
        }

        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) {
        return current;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }
}