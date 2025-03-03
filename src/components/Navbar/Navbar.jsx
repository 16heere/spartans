import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaGraduationCap } from "react-icons/fa";
import { RiArrowDropDownFill } from "react-icons/ri";
import { GiClothes } from "react-icons/gi";
import { FaXTwitter, FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";

const navbarMenuData = [
    {
        label: "Home",
        submenu: [
            { label: "Home Page", path: "/" },
            { label: "Coaches", path: "/coaches" },
            { label: "Facilities", path: "/facilities" },
            { label: "Documents", path: "/documents" },
        ],
    },
    {
        label: "News",
        path: "/news",
    },
    {
        label: "Camps",
        path: "/camps",
    },
    {
        label: "Academy",
        submenu: [
            {
                label: "The Academy",
                path: "/academy",
            },
            {
                label: "Recruitment",
                path: "/recruitment",
            },
            {
                label: "Alumni",
                path: "/alumni",
            },
        ],
    },
    {
        label: "Teams",
        submenu: [
            {
                label: "Mens",
                submenu: [
                    {
                        label: "Roster",
                        path: "/teams/mens/roster",
                    },
                    {
                        label: "Team",
                        path: "/teams/mens/team",
                    },
                    {
                        label: "Schedule",
                        path: "/teams/mens/schedule",
                    },
                ],
            },
            {
                label: "U19",
                submenu: [
                    {
                        label: "Roster",
                        path: "/teams/u19/roster",
                    },
                    {
                        label: "Team",
                        path: "/teams/u19/team",
                    },
                    {
                        label: "U19-I Schedule",
                        path: "/teams/u19-I/schedule",
                    },
                    {
                        label: "U19-II Schedule",
                        path: "/teams/u19-II/schedule",
                    },
                ],
            },
            {
                label: "U16",
                submenu: [
                    {
                        label: "Roster",
                        path: "/teams/u16/roster",
                    },
                    {
                        label: "Team",
                        path: "/teams/u16/team",
                    },
                    {
                        label: "Schedule",
                        path: "/teams/u16/schedule",
                    },
                ],
            },
            {
                label: "U14",
                submenu: [
                    {
                        label: "Roster",
                        path: "/teams/u14/roster",
                    },
                    {
                        label: "Team",
                        path: "/teams/u14/team",
                    },
                    {
                        label: "Schedule",
                        path: "/teams/u14/schedule",
                    },
                ],
            },
        ],
    },
    {
        label: "SBL",
        path: "/sbl",
    },
    {
        label: "Junior Hoops",
        path: "/junior-hoops",
    },
];

const Navbar = () => {
    const [openDropdownLevel, setOpenDropdownLevel] = useState({});
    const [resetDropdowns, setResetDropdowns] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = (isLogoClicked) => {
        if (isLogoClicked && !menuOpen) return;
        setMenuOpen(!menuOpen);
    };

    const handleDropdownToggle = (label, level, e) => {
        e.stopPropagation();
        setOpenDropdownLevel((prevState) => {
            const newState = { ...prevState };
            for (let i = level + 1; i < Object.keys(prevState).length; i++) {
                newState[i] = null;
            }
            newState[level] = newState[level] === label ? null : label;
            for (let i = level + 1; i < 3; i++) {
                newState[i] = null;
            }
            return newState;
        });
    };

    useEffect(() => {
        setOpenDropdownLevel([]);
        setResetDropdowns(false);
    }, [resetDropdowns]);

    const closeAllDropdowns = () => {
        handleMenuToggle(false);
        setResetDropdowns(true);
    };

    const closeDropdownsAfterLogoClick = () => {
        handleMenuToggle(true);
        setResetDropdowns(true);
    };

    const renderSubMenu = (subMenu, parentLabel, level) => {
        return (
            <ul
                className={level === 1 ? "submenu-2" : "submenu"}
                style={{
                    display:
                        openDropdownLevel[level] === parentLabel
                            ? "block"
                            : "none",
                }}
            >
                {subMenu.map((subItem, index) => (
                    <li
                        key={index}
                        onClick={(e) =>
                            subItem.submenu
                                ? handleDropdownToggle(
                                      subItem.label,
                                      level + 1,
                                      e
                                  )
                                : closeAllDropdowns()
                        }
                    >
                        {subItem.path ? (
                            <span className="submenu-link-span">
                                <Link
                                    to={subItem.path}
                                    onClick={closeAllDropdowns}
                                >
                                    {subItem.label}
                                </Link>
                            </span>
                        ) : (
                            <span className="submenu-no-link-span">
                                {subItem.label}
                                {openDropdownLevel[level + 1] !==
                                subItem.label ? (
                                    <RiArrowDropDownFill
                                        size={50}
                                        className="navbar-dropdown-icon"
                                    />
                                ) : (
                                    <RiArrowDropDownFill
                                        size={50}
                                        style={{
                                            transform: "rotate(180deg)",
                                            transition: "transform 0s",
                                        }}
                                    />
                                )}
                            </span>
                        )}
                        {subItem.submenu &&
                            renderSubMenu(
                                subItem.submenu,
                                subItem.label,
                                level + 1
                            )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <nav className="navbar">
            <Link
                to="/"
                className="navbar-logo"
                onClick={closeDropdownsAfterLogoClick}
            >
                <img
                    src="/assets/Spartans Logo Close.png"
                    alt="Spartans Logo"
                />
            </Link>
            <div className="navbar-top">
                <p className="navbar-title">
                    The Official Website of Gravesend Spartans
                </p>
                <div className="navbar-icons">
                    <a
                        href="https://www.instagram.com/gravesendspartansbb/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram size={30} className="icons" />
                    </a>
                    <a
                        href="https://x.com/GGS_Spartans"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaXTwitter size={30} className="icons" />
                    </a>
                    <a
                        href="https://www.youtube.com/@GGSHoops"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaYoutube size={30} className="icons" />
                    </a>
                    <a
                        href="https://www.gravesendgrammar.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGraduationCap size={30} className="icons" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                        <GiClothes size={30} className="icons" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                        <FaCartShopping size={30} className="icons" />
                    </a>
                </div>
            </div>
            <div className="navbar-bottom" onClick={(e) => e.stopPropagation()}>
                <div
                    className="hamburger"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleMenuToggle();
                    }}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
                    {navbarMenuData.map((item, index) => (
                        <li
                            key={index}
                            className="navbar-menu-items"
                            onClick={(e) =>
                                item.submenu &&
                                handleDropdownToggle(item.label, 0, e)
                            }
                        >
                            {item.path ? (
                                <span className="link-span">
                                    <Link
                                        to={item.path}
                                        onClick={closeAllDropdowns}
                                    >
                                        {item.label}
                                    </Link>
                                </span>
                            ) : (
                                <span className="no-link-span">
                                    {item.label}
                                    {openDropdownLevel[0] !== item.label ? (
                                        <RiArrowDropDownFill size={50} />
                                    ) : (
                                        <RiArrowDropDownFill
                                            size={50}
                                            style={{
                                                transform: "rotate(180deg)",
                                                transition: "transform 0s",
                                            }}
                                        />
                                    )}
                                </span>
                            )}
                            {item.submenu &&
                                renderSubMenu(item.submenu, item.label, 0)}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
