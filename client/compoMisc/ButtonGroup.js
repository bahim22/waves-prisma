import {Transition} from '@headlessui/react'
import React from 'react'

import {Button, MyButton} from './Button'

const ButtonGroup = ({children}) => {
    return (
    <div 
        className="flex items-center flex-none pl-5 pr-4 sm:pl-6 absolute z-10 top-0 left-0 -mb-px antialiased">
        <Button size='md' color='cyan'>
            {children}
        </Button>
        <button 
            onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
        </button>
        {/* <Transition show={true}>
            I will appear and disappear.
        </Transition> */}
    </div>
    )
}

export default ButtonGroup
