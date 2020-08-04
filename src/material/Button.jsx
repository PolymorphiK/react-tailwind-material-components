import React from 'react';

const Theme = {
    normal: "text-purple-800 bg-transparent outline-none",
    hover: "bg-purple-100",
    focus: "bg-purple-300",
    active: "bg-purple-500",

    text: {
        normal: "text-purple-800 bg-transparent"
    },
    outline: {
        normal: "border border-purple-800"
    },
    contained: {
        normal: "bg-purple-500"
    }
}

export default function Button(props) {
    const {
        icon:Icon = undefined,
        className = undefined,
        onClick = undefined
    } = props;
    let { theme = undefined } = props;

    theme = theme ?? Theme;

    return (
        <button className={`${className} ${theme.normal}`} onClick={onClick}>
            {Icon && <Icon className=" h-5 w-5" />}
            <span>{props.text}</span>
        </button>
    );
}

Button.Theme = Theme;