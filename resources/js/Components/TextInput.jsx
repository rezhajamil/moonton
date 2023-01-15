import React, { forwardRef, useEffect, useRef } from 'react';
import PropTypes from "prop-types";

forwardRef.propTypes={
    type:PropTypes.oneOf(["text","email","password","number","file"]),
    name:PropTypes.string,
    value:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    defaultValue:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    className:PropTypes.string,
    autoComplete:PropTypes.string,
    required:PropTypes.bool,
    isFocused:PropTypes.bool,
    handleChange:PropTypes.func,
    placeholder:PropTypes.string,
    isError:PropTypes.bool,
}

export default forwardRef(function TextInput(
    { type = 'text', name, value,defaultValue,variant="primary", className, autoComplete, required, isFocused, handleChange,placeholder,isError },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            TextInput.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={
                    `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
});
