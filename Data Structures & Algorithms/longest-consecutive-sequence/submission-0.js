class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
     longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        nums.sort((a, b) => a - b);

        let longest = 1;
        let count = 1;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                continue;               // same number, ignore it
            }
            if (nums[i] === nums[i - 1] + 1) {
                count++;                // chain continues
            } else {
                count = 1;              // chain broken, start over
            }
            longest = Math.max(longest, count);
        }

        return longest;
    }
}
