import * as React from 'react';
import { useState } from "react"
import { Controller } from 'react-hook-form';


export default function Form({ className, placeholder, control, name }) {
    // const [content, setContent] = useState('');

  return (
    <div dir="rtl" class={`self-stretch px-[4px] py-[3px] bg-inner-grey rounded-[10px] shadow justify-end items-start gap-2.5 inline-flex ${className}`} data-te-input-wrapper-init>
        <Controller
            control={control}
            name={name}
            render={({
                field
                }) => (
                    <textarea
                        // onChange={props.onChange}
                        class="w-full h-full resize-none rounded-[10px] bg-transparent pl-[45px] pr-4 pt-4 pb-[34px] outline-none text-right text-neutral-400 text-base placeholder:text-zinc-500 font-semibold leading-[34.40px]"
                        placeholder={placeholder}
                        {...field}
                        >
                    </textarea>
            )}
        /> 
    </div>
  );
}