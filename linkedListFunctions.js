export const hashedLinkedListFunctions = {
    append(node, newNode) {
        let lastNode = node;
        while (lastNode.nextNode) {
            lastNode = lastNode.nextNode;
        }
        lastNode.nextNode = newNode;
    },
    getAt(headNode, key) {
        let currentNode = headNode;
        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }

            currentNode = currentNode.nextNode;
        }

        return null;
    },
    remove(headNode, key) {
        let currentNode = headNode;

        while (currentNode) {
            if (currentNode.nextNode.key === key) {
                const nodeToRemove = currentNode.nextNode;
                currentNode.nextNode = nodeToRemove.nextNode;
                nodeToRemove.nextNode = null;
                return true;
            }

            currentNode = currentNode.nextNode;
        }

        return false;
    },
    findAndReplace(headNode, key, newValue) {
        let currentNode = headNode;

        while (currentNode) {
            if (currentNode.key === key) {
                currentNode.value = newValue;
                return true;
            }

            currentNode = currentNode.nextNode;
        }

        return false;
    },
    getKeys(headNode) {
        let keysArr = [];
        let currentNode = headNode;

        while (currentNode) {
            keysArr.push(currentNode.key);
            currentNode = currentNode.nextNode;
        }

        return keysArr;
    },
    getValues(headNode) {
        let valuesArr = [];
        let currentNode = headNode;

        while (currentNode) {
            valuesArr.push(currentNode.value);
            currentNode = currentNode.nextNode;
        }

        return valuesArr;
    },
    getEntries(headNode) {
        let entriesArr = [];
        let currentNode = headNode;

        while (currentNode) {
            let entry = [currentNode.key, currentNode.value];
            entriesArr.push(entry);
            currentNode = currentNode.nextNode;
        }

        return entriesArr;
    }
}