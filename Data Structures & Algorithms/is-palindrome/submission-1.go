
func isAlphanumeric(b byte) bool {
	return (b >= 'a' && b <= 'z') || (b >= 'A' && b <= 'Z') || (b >= '0' && b <= '9')
}

func toLower(b byte) byte {
	if b >= 'A' && b <= 'Z' {
		return b + 32
	}
	return b
}

func isPalindrome(s string) bool {
	left := 0
	right := len(s) - 1

	for left < right {
		if !isAlphanumeric(s[left]) {
			left++
			continue
		} else if !isAlphanumeric(s[right]) {
			right--
			continue
		}

		if toLower(s[left]) != toLower(s[right]) {
			return false
		} else {
			left++
			right--
		}
	}

	return true
}