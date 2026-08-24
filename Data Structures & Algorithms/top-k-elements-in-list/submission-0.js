class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const dict = {};

        for (let i = 0; i < nums.length; i++) {
            if (Object.hasOwn(dict, nums[i])) {
                dict[nums[i]] = dict[nums[i]] + 1;
            } else {
                dict[nums[i]] = 1;
            }
        }

        return Object.keys(dict)
            .sort((a, b) => dict[b] - dict[a])
            .slice(0, k);
    }
}
