function manipulateStudentRecord(obj, operation, prop, newValue) {
    const result = { ...obj };
    
    if (operation === "delete") {
        if (prop in result) {
            delete result[prop];
        }
    } else if (operation === "edit") {
        if (prop in result) {
            result[prop] = newValue;
        }
    }
    
    return result;
}
// Sample Case 0
const obj0 = {
    name: "John",
    lastName: "Bliss",
    city: "Florida"
};
console.log(manipulateStudentRecord(obj0, "edit", "city", "Seattle"));

// Sample Case 1
const obj1 = {
    name: "John",
    lastName: "Bliss",
    city: "Florida"
};
console.log(manipulateStudentRecord(obj1, "delete", "city"));

// Sample Case 2
const obj2 = {
    name: "John",
    lastName: "Bliss",
    city: "Florida"
};
console.log(manipulateStudentRecord(obj2, "edit", "abc", "Tor"));