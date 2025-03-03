function condense(head) {
    if (!head) return null;
    
    
    const seen = new Set();
    seen.add(head.data);
    
    let current = head;
    
    // Traverse it
    while (current.next) {
        if (seen.has(current.next.data)) {
            current.next = current.next.next;
        } else {
            // If it's a new value
            seen.add(current.next.data);
            current = current.next;
        }
    }
    
    return head;
}