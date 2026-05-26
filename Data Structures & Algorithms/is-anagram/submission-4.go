func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	var count [26]int
	diff := 0
	for i := 0; i < len(s); i++ {
		a, b := s[i]-'a', t[i]-'a'

		if count[a] == 0 { diff++ } else if count[a] == -1 { diff-- }
		count[a]++

		if count[b] == 0 { diff++ } else if count[b] == 1 { diff-- }
		count[b]--
	}
	return diff == 0
}
