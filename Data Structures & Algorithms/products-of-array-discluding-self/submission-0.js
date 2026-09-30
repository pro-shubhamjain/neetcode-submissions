class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
     productExceptSelf(nums) {
        const n = nums.length;
        const output = new Array(n);

        // Pass 1: output[i] = product of everything to the LEFT of i
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            output[i] = prefix;
            prefix *= nums[i];
        }

        // Pass 2: multiply in the product of everything to the RIGHT of i
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            output[i] *= suffix;
            suffix *= nums[i];
        }

        return output;
    }
}
