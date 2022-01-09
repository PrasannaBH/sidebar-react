import React, { useState } from 'react';
import 'boxicons';
import './Sidebar.css';

function Sidebar() {


    const [switchToggled, setswitchToggled] = useState(false)

    const ToggleSwitch = () => {
        switchToggled ? setswitchToggled(false) : setswitchToggled(true);
    }

    return (
        <>
            <body>
                <div className={switchToggled ? "sidebar active" : "sidebar"}>
                    <div className="logo_content">
                        <div className="logo">
                            <box-icon type='logo' name='react'></box-icon>
                            <div className="logo_name">The App</div>
                        </div>
                        <box-icon name='menu' id="btn" onClick={ToggleSwitch}></box-icon>
                    </div>
                    <ul className="nav_list">
                        <li>
                            <box-icon className='bx-search' name='search'></box-icon>
                            <input type="text" placeholder="Search..." />
                            <span className="tooltip">Search</span>
                        </li>
                        <li>
                            <a href="#">
                                <box-icon name='rocket' ></box-icon>
                                <span className="links-name">Performance</span>
                            </a>
                            <span className="tooltip">Performance</span>
                        </li>
                        <li>
                            <a href="#">
                                <box-icon name='target-lock' ></box-icon>
                                <span className="links-name">Target</span>
                            </a>
                            <span className="tooltip">Target</span>
                        </li>
                        <li>
                            <a href="#">
                                <box-icon name='edit-alt'></box-icon>
                                <span className="links-name">Edit</span>
                            </a>
                            <span className="tooltip">Edit</span>
                        </li>
                        <li>
                            <a href="#">
                                <box-icon name='buildings' ></box-icon>
                                <span className="links-name">Build</span>
                            </a>
                            <span className="tooltip">Build</span>
                        </li>
                    </ul>
                    {/* <!-- <br><br><br><br><br><br><br> --> */}
                    <div className="bottom">
                        <ul>
                            <li id="bottom-nav">
                                <a href="#">
                                    <box-icon name='target-lock' ></box-icon>
                                    <span className="links-name">Cloud</span>
                                </a>
                                <span className="tooltip">Cloud</span>
                            </li>
                            <li id="bottom-nav">
                                <a href="#">
                                    <box-icon name='bell' ></box-icon>
                                    <span className="links-name">Notification</span>
                                </a>
                                <span className="tooltip">Notification</span>
                            </li>
                            <li id="bottom-nav">
                                <a href="#">
                                    <box-icon name='help-circle' ></box-icon>
                                    <span className="links-name">Help</span>
                                </a>
                                <span className="tooltip">Help</span>
                            </li>
                        </ul>
                    </div>
                    <div className="profile_content">
                        <div className="profile">
                            <div className="profile_details">
                                <box-icon name='user-circle' ></box-icon>
                                {/* <img src="" alt="pic" /> */}
                                <div className="job_name">
                                    <div className="name">ABC XYZ</div>
                                    <div className="job">SDE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="home-section">
                    <div className="text">Content</div>
                </section>
            </body>        
        </>
    )
}

export default Sidebar
