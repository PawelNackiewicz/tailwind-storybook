import React from 'react';

interface AvatarProps {
    img?: string,
	alt: string,
	text: string
}

export const Avatar = ({img, alt, text}: AvatarProps) => {
    return (
		<div className='rounded-full bg-gradient-to-tr from-blue-500 to-blue-200 w-[35px] h-[35px] flex items-center justify-center shadow-inner'>
			{
				img ?
					<img src={img} alt={alt} className='rounded-full object-fill' />
					:
					<p className='text-white'>
						{text}
					</p>
			}
		</div>
	)
};