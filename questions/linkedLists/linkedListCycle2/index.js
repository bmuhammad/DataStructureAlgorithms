/** Linked List Cycle **
 * 
 * Return true if there is a cycle in the given linked list.
 * Otherwise return false.  
 *  
 * @example
 * listCycle(1 -> 2 -> 3 -> 1) -> true
 * listCycle(10 -> 20 -> 30) -> false
 * listCycle(100 -> 200 -> 300 -> 100) -> true
 * 
 */

 const listCycle = (head) => {
    let fast = head
    let slow  = head
  
    while (fast && fast.next){
      slow = slow.next
      fast = fast.next.next
  
      if (slow === fast){
        return true
      }
    }
  
    return false
  

}


module.exports = listCycle;