import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './button';
import {IoMdArrowDropdown} from 'react-icons/io'


export default {
    title: 'Button',
    component : Button,
}as ComponentMeta<typeof Button>;

export const Story :ComponentStory<typeof Button> = () => {
    return(
      <div className="bg-blue-300 w-full h-screen flex justify-center items-center space-x-4 flex-wrap">
        <Button variant={'text'} label='text'/>
        <Button variant={'text'} icon={<IoMdArrowDropdown/>} label='text'/>
        <Button variant={'bluecontained'} label='contained1'/>
        <Button variant={'greencontained'} label='contained2'/>
      </div>
    )
} 