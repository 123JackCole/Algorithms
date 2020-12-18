// https://leetcode.com/problems/add-two-numbers/

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const addTwoNumbers = (l1, l2) => {

    let num1 = "" + l1.val, 
        num2 = "" + l2.val,
        current;

    current = l1.next;
    while(current.next) {
        num1 += current.val;
        current = current.next;
    }
    num1 += current.val;
    
    current = l2.next;
    while(current.next) {
        num2 += current.val;
        current = current.next;
    }
    num2 += current.val;
    
    sum = parseInt(num1.split("").reverse().join("")) + parseInt(num2.split("").reverse().join(""));
    
    console.log(sum)

    const ll = [];

    // need logic here
    while (sum % 10 && sum %100) {
        ll.push(ListNode(sum % 10, sum % 100));
        sum /= 10;
    }

    return ll;
}

addTwoNumbers([2,4,3], [5,6,4]); // [7,0,8]