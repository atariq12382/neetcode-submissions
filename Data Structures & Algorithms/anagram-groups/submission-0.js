class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (let i = 0; i < strs.length; i++) {
            const key = strs[i].split("").sort().join("");

            if (Object.hasOwn(map, key)) {
                map[key].push(strs[i]);
            } else {
                map[key] = [strs[i]];
            }
        }

        return Object.keys(map).map(key => map[key]).sort((a, b) => a.length - b.length);
    }
}
