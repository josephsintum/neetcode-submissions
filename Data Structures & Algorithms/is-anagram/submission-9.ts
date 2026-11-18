class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // use .charCodeAt to get numeric ascii code
        // create array
        if (s.length != t.length) return false;

        function stringToBitArr(str: string): string {
            let arr = new Array(26).fill(0);
            const offset = "a".codePointAt(0);

            str.split("").forEach((char) => {
                let charCode = char.codePointAt(0) - offset;
                arr[charCode]++;
            });

            return arr.join();
        }

        return stringToBitArr(s) === stringToBitArr(t);
    }
}
