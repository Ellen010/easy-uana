import React from "react";

const Button = ({
                    title,
                    loading = false,
                    disabled = false,
                    type = "button",
                    onClick,
                    href,
                }) => {

    const baseClasses =  "px-20 py-5 rounded-3xl m-5 backdrop-blur flex-center text-white text-2xl transition-all duration-300";

    const stateClasses = disabled || loading
        ? "bg-green-300 cursor-not-allowed"
        : "bg-green-500 hover:bg-green-200 hover:scale-110";

    const content = loading ? "Sending email..." : title;

    if (href) {
        return (
            <div className="flex flex-col items-center opacity-100 translate-y-10 mt-3 mb-3">
                <a
                    href={href}
                    className={`${baseClasses} ${stateClasses}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {title}
                </a>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center opacity-100 translate-y-10 mt-3 mb-3">
            <button
                type={type}
                onClick={onClick}
                disabled={disabled || loading}
                className={`${baseClasses} ${stateClasses}`}
            >
                {content}
            </button>
        </div>
    );
};

export default Button;