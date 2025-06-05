


var checkIfInstanceOf = function(obj, classFunction) {
    var match = false;
    if (typeof classFunction === "object") {
        return false;
    }
    if (obj === null || classFunction === null || classFunction === undefined || obj === undefined) {
        return false;
    }
    if (classFunction.name === "Object") {
        return true;
    }
    var objProto = Object.getPrototypeOf(obj);
    while(true) {
        if (objProto.constructor.name === classFunction.name) {
            if (objProto.constructor.name === "Object") {
                break;
            }
            match = true;
            break;
        }
        if (Object.getPrototypeOf(objProto) === null) {
            break;
        }
        objProto = Object.getPrototypeOf(objProto)
    }
    return match;
};

class Animal {};
class Dog extends Animal {};

console.log(checkIfInstanceOf(Error(), Error()))
