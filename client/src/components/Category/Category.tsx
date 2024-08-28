import React, { useState } from "react";
import { VerticalSplitIcon } from "../../Icons/Icons";
import { category_data, category_data_socials } from "../../data/Category";

const Category = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: any) => {
        if (
        !event.target.closest("#dropdownButton") &&
        !event.target.closest("#dropdownMenu")
        ) {
        setIsOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
        document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left">
        <div>
            <button
                id="dropdownButton"
                onClick={toggleDropdown}
                className="inline-flex justify-center ml-5 shadow border-2 rounded-lg p-2 rounded-lg hover:bg-violet-200 bg-violet-100 hover:text-violet-800 toolShape_icon "
                aria-expanded={isOpen}
            >
                <VerticalSplitIcon />
            </button>
        </div>

        {isOpen && (
            <div
                id="dropdownMenu"
                className="origin-top-left absolute mt-2 ml-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-[calc(90vh-4rem)] overflow-y-auto"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
            >   
            {
                category_data.map((categories,index) => {
                return (
                    <div className="p-1.5 " role="none" key={index}>
                        <a
                            href="#"
                            className="flex rounded justify-between block px-2 py-1 text-sm flex items-center hover:bg-violet-100 hover:text-violet-800"
                            role="menuitem"
                        >   
                            <span>
                                <categories.icon sx={{ fontSize: 18 }}/>
                                <span className="mx-2 text-sm">{categories.label}</span>
                            </span>
                            <span>
                                <code style={{"fontSize":"10px"}}>{categories.shortCut ? categories.shortCut : ""}</code>
                            </span>
                        </a>
                    </div>
                    )
                })
            }
            <hr style={{ width: "80%", marginLeft: "10%", marginRight: "10%" }} />
            {
                category_data_socials.map((social, index) => {
                    return (
                        <div className="p-1.5 " role="none" key={index}>
                            <a
                                href="#"
                                className="rounded block px-2 py-1 text-sm flex items-center hover:bg-violet-100 hover:text-violet-800"
                                role="menuitem"
                            >   
                                <social.icon sx={{ fontSize: 18 }}/>
                                <span className="mx-2 text-sm">{social.label}</span>
                            </a>
                        </div>
                    )
                })
            }
            </div>
        )}
        </div>
    );
};

export default Category;
