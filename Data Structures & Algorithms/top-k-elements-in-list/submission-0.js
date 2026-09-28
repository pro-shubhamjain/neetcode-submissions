class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
     topKFrequent(nums, k) {
        // Count frequency of each number
          const frequence = nums.reduce((prv, curr) => {
             prv[curr] = (prv[curr] || 0) +1
             return prv
          }, {})

          const sort = Object.keys(frequence)
                             .sort((a,b)=> frequence[b] - frequence[a])
                             .slice(0,k).map(Number)
          return sort 
    }
}
