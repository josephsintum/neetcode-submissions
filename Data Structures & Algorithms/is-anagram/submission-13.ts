class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;

        let arr = new Array(26).fill(0);
        const offset = "a".codePointAt(0);

        for (let i = 0; i < s.length; i++) {
            arr[s.charCodeAt(i) - offset]++;
            arr[t.charCodeAt(i) - offset]--;
        }

        return arr.every((c) => c === 0);
    }
}
