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

	b := []byte(s)

	left := 0
	right := len(b) - 1

	for left < right {
		if !isAlphanumeric(b[left]) {
			left++
			continue
		} else if !isAlphanumeric(b[right]) {
			right--
			continue
		}

		if toLower(b[left]) != toLower(b[right]) {
			return false
		} else {
			left++
			right--
		}
	}

	return true
}
