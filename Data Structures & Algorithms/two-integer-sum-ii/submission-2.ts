class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        if (numbers.length === 2) {
            return [1, 2];
        }

        const numMap: Record<number, number[]> = {};
        numbers.forEach((n, index) => {
            if (n in numMap) {
                numMap[n].push(index);
            } else {
                numMap[n] = [index];
            }
        });

        for (let i = 0; i <= numbers.length; i++) {
            let val = target - numbers[i];

            if (val in numMap) {
                for (let j = 0; j <= numMap[val].length; j++) {
                    let valIndex = numMap[val][j];
                    if (valIndex === i) {
                        continue;
                    }

                    return [i + 1, valIndex + 1];
                }
            }
        }
    }
}
