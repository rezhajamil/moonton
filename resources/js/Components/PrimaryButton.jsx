import React from "react";
import Proptypes from "prop-types";

PrimaryButton.propTypes = {
    type: Proptypes.oneOf(["button", "submit", "reset"]),
    className: Proptypes.string,
    variant: Proptypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: Proptypes.bool,
    children: Proptypes.node,
    onClick: Proptypes.func,
};

export default function PrimaryButton({
    type = "submit",
    className = "",
    variant = "primary",
    processing,
    children,
    onClick,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `rounded-2xl py-[13px] w-full text-center ${
                    processing && "opacity-30"
                } btn-${variant} ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
