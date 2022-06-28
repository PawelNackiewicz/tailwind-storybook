import { ContactItemProps } from "../../molecules/ContactItem/ContactItem";

interface ReduceItem {
  letter: string;
  children: ContactItemProps[];
}

export function grupByLetter(arr: ContactItemProps[]) {
	return sortByLastName(arr).reduce<Record<string, ReduceItem>>((acc, item) => {
		const letter = item.lastName[0]
		if (!acc[letter]) acc[letter] = { letter, children: [item] }
		else acc[letter].children.push(item)
		return acc
	}, {})
}

export function sortByLastName(arr: ContactItemProps[]) {
	return arr.sort((a, b) => {
		const lastNameA = a.lastName.toUpperCase()
		const lastNameB = b.lastName.toUpperCase()
		return (lastNameA < lastNameB) ? -1 : (lastNameA > lastNameB) ? 1 : 0
	})
}