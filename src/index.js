module.exports = function check(str, bracketsConfig) {
    // your solution
    let bracketsSequenceArr = str.split("");
    let bracketsStack = [];

    for (let i = 0; i < bracketsSequenceArr.length; i++) {
        if (checkIfOpenBracket(bracketsSequenceArr[i])) {
            bracketsStack.push(bracketsSequenceArr[i]);
        } else {
            bracketsStack.pop();
            if (bracketsStack.length === 0) {
                return true;
            } else {
                return false;
            }
        }
    }

    function checkIfOpenBracket (bracket) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j][0] === bracket) {
                return true;
            } else {
                return false;
            }
        }
    };
};
