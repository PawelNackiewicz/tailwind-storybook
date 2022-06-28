import { ContactItem, ContactItemProps } from "../../molecules/ContactItem/ContactItem"

interface ContactSectionProps {
	letter: string,
	contacts: ContactItemProps []
}

export const ContactSection = ({letter, contacts}: ContactSectionProps) => {
	return (
		<div>
			<p className='mb-2 mt-6 ml-8'>{letter}</p>
			{contacts.map(e => <ContactItem key={e.id} id={e.id} img={e.img} firstName={e.firstName} lastName={e.lastName}  phone={e.phone}/>)}
		</div>
	)
}
