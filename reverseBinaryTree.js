const bt = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: {
        value: 8,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      },
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

//                   1
//       2                       3
//   4        5            6            7
// 8    9
//

const reverse = (head) => {
  swap(head);
  const [left, right] = [head.left, head.right];

  if (left) {
    reverse(left);
  }

  if (right) {
    reverse(right);
  }

  return head;
};

const swap = (node) => {
  [node.left, node.right] = [node.right, node.left];
};

console.log(reverse(bt));
