func hasDuplicate(nums []int) bool {
	set := make(map[int]bool, len(nums))

	for _, num := range nums {
		if _, exists := set[num]; exists {
			return true
		}
		set[num] = true
	}

	return false
}