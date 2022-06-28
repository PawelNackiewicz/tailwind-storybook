import { ContactItemProps } from "../../molecules/ContactItem/ContactItem"
import { ContactSection } from "../../organisms/ContactSection/ContactSection"
import { grupByLetter } from "./utils"

interface PhonebookProps {
	contacts: ContactItemProps []
}

export const Phonebook = ({contacts}: PhonebookProps) => {
	return (
		<div className='flex flex-col px-2'>
			{Object.values(grupByLetter(contacts)).map(e => <ContactSection key={e.letter} letter={e.letter} contacts={e.children} />)}
		</div>
	)
}