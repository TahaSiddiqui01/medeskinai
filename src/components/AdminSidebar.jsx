import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function AdminSidebar() {
    const navigate = useNavigate()
    const [mobileMenu, setMobileMenu] = useState(false)

    const Logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div>
            <nav className="sidebar md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-900 flex flex-wrap items-center justify-between relative md:w-64 z-10 transition-all duration-300">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    <button className="cursor-pointer md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button" onClick={() => { setMobileMenu(true) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="inline-block" viewBox="0 0 50 50" style={{ fill: '#ffffff' }}>
                            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                        </svg>
                    </button>
                    <p className="md:block title font-semibold text-left text-white mr-0 inline-block whitespace-nowrap text-lg capitalize p-4">
                        Admin Dashboard
                    </p>
                    <div className="md:hidden lg:hidden items-center grow-0 shrink-0 relative cursor-pointer text-black flex p-0 lg:py-2 lg:px-3 lg:border-r border-gray-100 lg:dark:border-gray-800 dropdown">
                        <button className="flex items-center py-2 px-3 rounded lg:bg-transparent hover:text-primary lg:dark:bg-transparent bg-gray-100 whitespace-nowrap" type="button" data-dropdown-toggle="notification-menu" onClick={Logout}>
                            <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                                <path fill="currentColor" d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden bg-gray-800" id="mobile-toggle-menu">
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">

                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button type="button" className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#000000' }}>
                                            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Heading --> */}
                        <h6 className="md:min-w-full title text-gray-300 text-xs uppercase block p-4 px-6 no-underline">
                            Navigation
                        </h6>
                        {/* <!-- Navigation --> */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            {/* <li className="items-center hover:bg-primary">
                                <NavLink to="/admin/dashboard" className={(props) => { return props.isActive ? 'capitalize py-2.5 px-6 block text-white whitespace-nowrap bg-primary' : 'capitalize py-2.5 px-6 block text-white whitespace-nowrap' }}>
                                    <i className="fas fa-home text-sm opacity-75 w-8 h-8 leading-8"></i>
                                    <span className="title">Dashboard</span>
                                </NavLink>
                            </li> */}

                            {/* <li className="items-center hover:bg-primary">
                                <NavLink to="/admin/users" className={(props) => { return props.isActive ? 'capitalize py-2.5 px-6 block text-white whitespace-nowrap bg-primary' : 'capitalize py-2.5 px-6 block text-white whitespace-nowrap' }}>
                                    <i className="fas fa-users text-sm opacity-75 w-8 h-8 leading-8"></i>
                                    <span className="title">Users</span>
                                </NavLink>
                            </li> */}

                            <li className="items-center hover:bg-primary">
                                <NavLink to="/admin/blogs" className={(props) => { return props.isActive ? 'capitalize py-2.5 px-6 block text-white whitespace-nowrap bg-primary' : 'capitalize py-2.5 px-6 block text-white whitespace-nowrap' }}>
                                    <i className="fas fa-table text-sm opacity-75 w-8 h-8 leading-8"></i>
                                    <span className="title">Blogs</span>
                                    {/* <span className="title">Blogs</span> */}
                                </NavLink>
                            </li>

                            {/* <li className="items-center hover:bg-primary">
                                <NavLink to="/admin/meta" className={(props) => { return props.isActive ? 'capitalize py-2.5 px-6 block text-white whitespace-nowrap bg-primary' : 'capitalize py-2.5 px-6 block text-white whitespace-nowrap' }}>
                                    <i className="fas fa-pencil-alt text-sm opacity-75 w-8 h-8 leading-8"></i>
                                    <span className="title">Meta</span>
                                </NavLink>
                            </li>

                            <li className="items-center hover:bg-primary">
                                <NavLink to="/admin/contacts" className={(props) => { return props.isActive ? 'capitalize py-2.5 px-6 block text-white whitespace-nowrap bg-primary' : 'capitalize py-2.5 px-6 block text-white whitespace-nowrap' }}>
                                    <i className="fas fa-phone text-sm opacity-75 w-8 h-8 leading-8"></i>
                                    <span className="title">Contacts</span>
                                </NavLink>
                            </li> */}

                            {/* <li className="items-center hover:bg-primary">
                                <NavLink to="/admin/comments" className={(props) => { return props.isActive ? 'capitalize py-2.5 px-6 block text-white whitespace-nowrap bg-primary' : 'capitalize py-2.5 px-6 block text-white whitespace-nowrap' }}>
                                    <i className="fas fa-comments text-sm opacity-75 w-8 h-8 leading-8"></i>
                                    <span className="title">Comments</span>
                                </NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>

                {/* mobile admin menu */}
                {mobileMenu ? <>
                    <div className="navbar-menu fixed top-0 left-0 z-50 w-full h-full bg-opacity-50 shadow-lg">
                        <div className="fixed top-0 left-0 bottom-0 w-full max-w-xs">
                            <nav className="relative h-full overflow-y-auto">
                                <div className="flex flex-col h-full bg-gray-800">
                                    <div className="flex items-center justify-between py-6 px-6 bg-gray-900">
                                        <p className="md:block title font-semibold text-left text-white mr-0 inline-block whitespace-nowrap text-lg capitalize">
                                            Admin Dashboard
                                        </p>
                                        <button className="text-white" onClick={() => { setMobileMenu(!mobileMenu) }}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z" fill="#556987"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="bg-gray-800">
                                        {/* <!-- Heading --> */}
                                        <h6 className="md:min-w-full title text-gray-300 text-xs block p-4 px-6 no-underline">
                                            Navigation
                                        </h6>
                                        <ul className="md:flex-col md:min-w-full flex flex-col list-none" onClick={() => { setMobileMenu(!mobileMenu) }}>
                                            {/* <li className="items-center hover:bg-primary">
                                                <NavLink to="/admin/dashboard" className={(props) => { return props.isActive ? 'capitalize py-2.5 px-6 block text-white whitespace-nowrap bg-primary' : 'capitalize py-2.5 px-6 block text-white whitespace-nowrap' }}>
                                                    <i className="fas fa-home text-sm opacity-75 w-8 h-8 leading-8"></i>
                                                    <span className="title">Dashboard</span>
                                                </NavLink>
                                            </li>

                                            <li className="items-center hover:bg-primary">
                                                <NavLink to="/admin/users" className={(props) => { return props.isActive ? 'capitalize py-2.5 px-6 block text-white whitespace-nowrap bg-primary' : 'capitalize py-2.5 px-6 block text-white whitespace-nowrap' }}>
                                                    <i className="fas fa-users text-sm opacity-75 w-8 h-8 leading-8"></i>
                                                    <span className="title">Users</span>
                                                </NavLink>
                                            </li> */}

                                            <li className="items-center hover:bg-primary">
                                                <NavLink to="/admin/blogs" className={(props) => { return props.isActive ? 'capitalize py-2.5 px-6 block text-white whitespace-nowrap bg-primary' : 'capitalize py-2.5 px-6 block text-white whitespace-nowrap' }}>
                                                    <i className="fas fa-table text-sm opacity-75 w-8 h-8 leading-8"></i>
                                                    <span className="title">Blogs</span>
                                                    {/* <span className="title">Blogs</span> */}
                                                </NavLink>
                                            </li>

                                            {/* <li className="items-center hover:bg-primary">
                                                <NavLink to="/admin/meta" className={(props) => { return props.isActive ? 'capitalize py-2.5 px-6 block text-white whitespace-nowrap bg-primary' : 'capitalize py-2.5 px-6 block text-white whitespace-nowrap' }}>
                                                    <i className="fas fa-pencil-alt text-sm opacity-75 w-8 h-8 leading-8"></i>
                                                    <span className="title">Meta</span>
                                                </NavLink>
                                            </li>

                                            <li className="items-center hover:bg-primary">
                                                <NavLink to="/admin/contacts" className={(props) => { return props.isActive ? 'capitalize py-2.5 px-6 block text-white whitespace-nowrap bg-primary' : 'capitalize py-2.5 px-6 block text-white whitespace-nowrap' }}>
                                                    <i className="fas fa-phone text-sm opacity-75 w-8 h-8 leading-8"></i>
                                                    <span className="title">Contacts</span>
                                                </NavLink>
                                            </li>

                                            <li className="items-center hover:bg-primary">
                                                <NavLink to="/admin/comments" className={(props) => { return props.isActive ? 'capitalize py-2.5 px-6 block text-white whitespace-nowrap bg-primary' : 'capitalize py-2.5 px-6 block text-white whitespace-nowrap' }}>
                                                    <i className="fas fa-comments text-sm opacity-75 w-8 h-8 leading-8"></i>
                                                    <span className="title">Comments</span>
                                                </NavLink>
                                            </li> */}
                                        </ul>
                                    </div>

                                </div>
                            </nav>

                        </div>
                    </div>
                </> : ''}
            </nav>
        </div>
    )
}
