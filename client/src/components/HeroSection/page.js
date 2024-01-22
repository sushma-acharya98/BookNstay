'use client'
import React from 'react';
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem, Button } from '@nextui-org/react';
import {Input} from "@nextui-org/react";
import { IoBedOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
const Page = () => {
                const [value, setValue] = useState({ 
                    startDate: null,
                    endDate: null 
                    }); 

                    const handleValueChange = (newValue) => {console.log("newValue:", newValue); 
                    setValue(newValue); 
                    } 
  return (
    <div style={{ background: '#fff' }}>
      <section>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Find your next stay</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Search deals on hotels, homes, and much more...</h1>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Input
                    isReadOnly
                    type="email"
                    placeholder="location"
                    className="max-w-xs"
                    startContent={
                                    <IoBedOutline className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                }
                                endContent={
                                                <RiArrowDropDownLine />
                                            }
                    />
                <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Open Menu</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Link Actions">
                  <DropdownItem key="home" href="/home">
                    Home
                  </DropdownItem>
                  <DropdownItem key="about" href="/about">
                    About
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
        </div>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2">
                <Datepicker 
                value={value} 
                onChange={handleValueChange} 
                />
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2"></div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
