class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            let countArr = new Array(26).fill(0);
            strs[i].split("").forEach((c) => {
                countArr[c.charCodeAt(0) - 97]++;
            });
            let count = countArr.join();
            if (!groups.has(count)) {
                groups.set(count, []);
            }
            groups.get(count).push(strs[i]);
        }

        return [...groups.values()];
    }
}
