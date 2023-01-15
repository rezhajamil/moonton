import React from 'react';

export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block mb-2 text-base ` + className}>
            {value ? value : children}
        </label>
    );
}
