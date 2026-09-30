class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
                // 1. Check every row
        for (let r = 0; r < 9; r++) {
            const seen = new Set();
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                if (val === ".") continue;       // skip empty
                if (seen.has(val)) return false; // duplicate found
                seen.add(val);
            }
        }

        // 2. Check every column
        for (let c = 0; c < 9; c++) {
            const seen = new Set();
            for (let r = 0; r < 9; r++) {
                const val = board[r][c];
                if (val === ".") continue;
                if (seen.has(val)) return false;
                seen.add(val);
            }
        }

        // 3. Check every 3x3 box
        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
            for (let boxCol = 0; boxCol < 9; boxCol += 3) {
                const seen = new Set();
                for (let r = boxRow; r < boxRow + 3; r++) {
                    for (let c = boxCol; c < boxCol + 3; c++) {
                        const val = board[r][c];
                        if (val === ".") continue;
                        if (seen.has(val)) return false;
                        seen.add(val);
                    }
                }
            }
        }

        return true; // no duplicates anywhere
    }
}
