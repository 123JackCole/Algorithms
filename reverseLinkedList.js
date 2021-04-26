const ll = {
  head: {
    value: 5,
    next: {
      value: 6,
      next: {
        value: 2,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

// a -> b -> c -> d -> null

const reverse = (head) => {
  let prev = null;
  let next;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
};

console.log(reverse(ll.head));
