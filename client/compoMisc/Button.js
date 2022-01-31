import React from 'react';
import { Transition } from '@headlessui/react'
import { useState } from 'react'


export const Button = ({ color, size, children }) => {
    const sizes = {
        md: 'px-4 py-2 rounded-md text-base',
        lg: 'px-5 py-3 rounded-lg text-lg',
    };
    const colors = {
        indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
        cyan: 'bg-cyan-600 hover:bg-cyan-700 text-white',
    };
    let colorClasses = colors[color];
    let sizeClasses = sizes[size];
    return (
    <button
        type="button" 
        className={`font-bold ${sizeClasses} ${colorClasses}`}>
        {children}
    </button>
    )
}

export function MyButton() {
const [isShowing, setIsShowing] = useState(false)

return (
    <>
        <button 
        onClick={() => setIsShowing((isShowing) => !isShowing)}>
            Toggle
        </button>
        <Transition
            show={isShowing}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            I will fade in and out
        </Transition>
    </>
)
}

