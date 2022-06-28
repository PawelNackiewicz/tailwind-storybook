import React from 'react';

type ButtonVariants = "PRIMARY" | "SECONDARY" | "OUTLINED"

interface ButtonProps {
    variant?: ButtonVariants,
    text: string,
    onClick?: () => void,
    disabled?: boolean
}

export const Button = ({variant = 'PRIMARY', text, onClick, disabled}: ButtonProps) => {
    const bgColor = getBackgroundColor(variant)
    return (
        <button className={`p-4 rounded-lg ${bgColor}`} onClick={onClick} disabled={disabled}>{text}</button>
    )
};

function getBackgroundColor(variant: ButtonVariants) {
    if(variant === 'PRIMARY') return 'bg-blue-500'
    if(variant === 'SECONDARY') return 'bg-gray-500'
    if(variant === 'OUTLINED') return 'bg-orange-500'
}