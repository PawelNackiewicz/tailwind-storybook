import React from 'react';
import { Avatar } from '../../atoms/Avatar/Avatar';

export interface ContactItemProps {
	id: string,
	firstName: string,
	lastName: string,
	img?: string,
	phone?: string,
}

export const ContactItem = ({img, firstName, lastName = '', phone}: ContactItemProps) => {
	return (
		<div className='flex justify-between px-6 items-center my-2 border border-gray-200 rounded-lg max-w-lg'>
			<Avatar img={img} alt={`photo_${lastName}`} text={`${firstName[0]}${lastName[0]}`} />
			<div className='flex-grow ml-10'>
				<p>{firstName} {lastName}</p>
				<p>{phone}</p>
			</div>
            <Star />
		</div>
	)
}

const Star = () => {
	return (
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M15.9405 6.2785C15.802 5.879 15.4465 5.5865 15.0185 5.523L10.8555 4.904L9.046 1.147C8.8555 0.7525 8.448 0.5 8 0.5C7.552 0.5 7.1445 0.7525 6.954 1.147L5.1445 4.904L0.981004 5.523C0.553504 5.5865 0.198004 5.879 0.0600035 6.2785C-0.0774965 6.679 0.0265035 7.12 0.328504 7.421L3.3795 10.467L2.672 14.6925C2.6 15.118 2.7845 15.545 3.146 15.794C3.3445 15.9305 3.578 16 3.8115 16C4.0035 16 4.196 15.953 4.3705 15.8595L8 13.9055L11.63 15.8595C11.8045 15.953 11.997 16 12.1885 16C12.422 16 12.6555 15.9305 12.8545 15.794C13.216 15.545 13.3995 15.118 13.328 14.6925L12.62 10.467L15.672 7.421C15.9735 7.1195 16.077 6.6785 15.9405 6.2785ZM11.794 9.6815C11.538 9.9365 11.422 10.296 11.4805 10.6485L12.1885 14.874L8.55851 12.921C8.38451 12.827 8.1925 12.7805 7.9995 12.7805C7.8075 12.7805 7.615 12.8275 7.441 12.921L3.811 14.874L4.519 10.6485C4.578 10.296 4.462 9.9365 4.206 9.6815L1.155 6.6355L5.318 6.0155C5.6985 5.959 6.026 5.721 6.1895 5.3815L8 1.6255L9.81001 5.382C9.97401 5.7215 10.301 5.959 10.681 6.016L14.845 6.636L11.794 9.6815Z" fill="#8C9DB8"/>
		</svg>
	)
}