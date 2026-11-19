class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let seen = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            let j = target - nums[i];
            if (seen.has(j)) {
                return [i, seen.get(j)];
            }
            seen.set(nums[i], i);
        }
    }
}
