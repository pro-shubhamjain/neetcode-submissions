class Solution {
   
       encode(strs) {
        let result = "";

        for (let s of strs) {
            result += s.length + "#" + s;
        }

        return result;
    }

    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let j = str.indexOf("#", i);

            let length = Number(str.slice(i, j));

            let word = str.slice(j + 1, j + 1 + length);

            result.push(word);

            i = j + 1 + length;
        }

        return result;
    }

 
}
