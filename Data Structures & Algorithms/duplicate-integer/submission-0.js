class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
            
         for(let i = 0; i < nums?.length; i++) {
            let el = nums[i]
               for(let j = i+1; j < nums?.length; j++) {
                  if(el == nums[j]) {
                       return true;
                  }
               }                   
         }   
  
        return false;
    }
}
