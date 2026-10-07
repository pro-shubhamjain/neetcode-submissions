class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       
        const clean = s.toLowerCase().replace(/[^a-z0-9]/g,'');
         const sortString = clean.trim()
         const revStr = clean.trim().split('').reverse().join('');
        return sortString === revStr 
    }
}
