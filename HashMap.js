import hashNode from "./hashNode.js";
import { hashedLinkedListFunctions } from "./linkedListFunctions.js";


class HashMap {
    
    #map = [];
    #numKeys = 0;
    #loadFactor = 0.75;
    #capacity = 16;
    
    #hash(key) {
        let hashcode = 0;

        for (let i = 0; i < key.length; i++) {
            hashcode = hashcode + key.charCodeAt(i) * 31 ** (key.length - (i + 1));
            hashcode %= this.#capacity;
        }
        
        return hashcode;
    }

    #mapLength() {
        let l = 0;
        for (const entry of this.#map) {
            if (entry) {
                l++;
            }
        }
        return l;
    }

    set(key, value, map = this.#map) {
        const index = this.#hash(key);

        if (hashedLinkedListFunctions.findAndReplace(map[index], key, value)) {
            return;
        }

        this.#numKeys++;

        const newNode = new hashNode();
        newNode.key = key;
        newNode.value = value;

        if (map[index]) {
            hashedLinkedListFunctions.append(map[index], newNode);
        } else {
            map[index] = newNode;
        }

        if (this.#mapLength() > (this.#capacity * this.#loadFactor) || this.length() > (this.#capacity * this.#loadFactor * 2) - 2) {
            const newMap = [];
            this.#capacity *= 2;
            this.#numKeys = 0;
            for (const entry of this.entries()) {
                this.set(entry[0], entry[1], newMap);
            }
            this.#map = newMap;
            console.log("----map has grown----");
        }
    }

    get(key) {
        const index = this.#hash(key);
        return hashedLinkedListFunctions.getAt(this.#map[index], key);
    }

    has(key) {
        const index = this.#hash(key);
        return !!hashedLinkedListFunctions.getAt(this.#map[index], key);
    }

    remove(key) {
        const index = this.#hash(key);
        if (!index) {
            return false;
        }

        if (this.#map[index].key === key) {
            this.#map[index] = this.#map[index].nextNode;
            this.#numKeys--;
            return true;
        }

        if (hashedLinkedListFunctions.remove(this.#map[index], key)) {
            this.#numKeys--;
            return true;
        }
    }

    length() {
        return this.#numKeys;
    }

    keys() {
        let keysArr = [];
        this.#map.forEach((e) => {
            keysArr.push(...hashedLinkedListFunctions.getKeys(e));
        });
        return keysArr;
    }

    values() {
        let valuesArr = [];
        this.#map.forEach((e) => {
            valuesArr.push(...hashedLinkedListFunctions.getValues(e));
        });
        return valuesArr;
    }

    entries() {
        let entriesArr = [];
        this.#map.forEach((e) => {
            entriesArr.push(...hashedLinkedListFunctions.getEntries(e));
        });
        return entriesArr;
    }
}
