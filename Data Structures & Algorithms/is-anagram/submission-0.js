class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) 
    {          
        if(this.sortString(s) === this.sortString(t)) {
            return true
        }
        return false
    
    
    }

    sortString(str) {
        return str.split('').sort().join('');
    }
}
