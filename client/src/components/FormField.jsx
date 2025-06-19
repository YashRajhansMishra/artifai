import React from 'react';

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div>
            <div className="flex items-center gap-2 mb-2">
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-[#FFFFFF]"
                >
                    {labelName}
                </label>
                {isSurpriseMe && (
                    <button
                        type="button"
                        onClick={handleSurpriseMe}
                        className="font-semibold text-xs bg-[#BBB6FC] py-1 px-2 rounded-[5px] text-black"
                    >
                        Surprise me
                    </button>
                )}
            </div>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className="bg-transparent caret-[#FFFFFF] border border-gray-300 text-[#FFFFFF] text-sm rounded-lg focus:ring-[#FFFFFF] focus:border-[#FFFFFF] outline-none block w-full p-3"
            />
        </div>
    );
};

export default FormField;