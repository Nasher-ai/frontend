import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'
import { Controller } from 'react-hook-form'

const TONES = [
    'رسمي',
    'عفوي',
    'فني',
    'كوميدي',
]

export default function Dropdown({ control, selected, name }) {
    // const [selected, setSelected] = useState(null)

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field
                }) => (
                    <Listbox {...field}>
                        <div className="relative inline-block text-right">

                        {/* Dropdown Button */}
                        <Listbox.Button className="w-[192px] h-[40px] p-2 bg-inner-grey rounded-xl shadow justify-between items-center gap-[22px] inline-flex"
                                    onClick={() => console.log('selected: ', field.value)}>
                            {/* Text */}
                            <div className={`text-right 
                                ${field.value == null? 'text-zinc-500': 'text-white'} 
                                text-[12px] font-bold leading-tight`}
                                >
                                    {field.value == null ? "نـــبرة الخطاب" : field.value}
                            </div>
                            
                            {/* Down Icon */}
                            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />

                        </Listbox.Button>

                        {/* Animation */}
                        <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >

                            {/* Dropdown Menu */}
                            <Listbox.Options className="absolute right-0 z-10 mt-2 w-[192px] origin-top-right rounded-xl bg-inner-grey shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="p-2">
                                    {TONES.map((tone, index) => (
                                        <Listbox.Option
                                        key={index}
                                        className={({ active }) =>
                                            `relative block px-4 py-2 text-md text ${
                                            active 
                                                ? 'bg-outer-grey bg-opacity-80 text-accent-foreground rounded-lg' 
                                                : 'text-white'
                                            }`
                                        }
                                        value={tone}
                                        >
                                            {({ selected }) => (
                                                <>

                                                {/* Text */}
                                                <span
                                                    className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'}`}>{tone}
                                                </span>

                                                {/* Check Icon */}
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </div>
                            </Listbox.Options>

                        </Transition>
                        </div>
                    </Listbox>
        )}
        />
            
        
  )
}
