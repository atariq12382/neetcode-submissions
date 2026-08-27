class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (let i = 0; i < strs.length; i++) {
            encoded += `${strs[i].length}#${strs[i]}`;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = [];

        for (let i = 0; i < str.length; i++) {
            const index = str.indexOf("#", i);
            const length = parseInt(str.slice(i, index));
            decoded.push(str.slice(index + 1, index + length + 1));
            i = index + length;
        }

        return decoded;
    }
}
