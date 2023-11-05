export function getUniqueSortedValues(list, key) {
	return [...new Set(list.map((item) => item[key]))].sort();
}