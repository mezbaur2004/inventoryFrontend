import { Fragment, useRef } from 'react';
import { Accordion, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AiOutlineBank, AiOutlineLogout, AiOutlineMenu, AiOutlineUser} from 'react-icons/ai';
import { BsBagPlus, BsBagX, BsBox, BsCartPlus, BsCircle, BsGraphUp, BsPeople } from 'react-icons/bs';
import { RiDashboardLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import logo from '../../assets/images/Logo.svg';
import { getUserDetails, removeSessions } from '../../helper/SessionHelper';

const MasterLayout = ({ children }) => {
    const contentRef = useRef(null);
    const sideNavRef = useRef(null);
    const topNavRef = useRef(null);

    const MenuBarClickHandler = () => {
        sideNavRef.current.classList.toggle('side-nav-open');
        sideNavRef.current.classList.toggle('side-nav-close');
        contentRef.current.classList.toggle('content-expand');
        contentRef.current.classList.toggle('content');
        topNavRef.current.classList.toggle('top-nav-open');
        topNavRef.current.classList.toggle('top-nav-close');
    };

    const sidebarItems = [
        {
            title: "Dashboard",
            icon: <RiDashboardLine className="side-bar-item-icon" />,
            url: "/",
            subMenu: [],
        },
        {
            title: "Customer",
            icon: <BsPeople className="side-bar-item-icon" />,
            url: "/Customer",
            subMenu: [
                {
                    title: "New Customer",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/CustomerCreateUpdatePage",
                },
                {
                    title: "Customer List",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/CustomerListPage",
                },
            ],
        },
        {
            title: "Supplier",
            icon: <TbTruckDelivery className="side-bar-item-icon" />,
            url: "/Supplier",
            subMenu: [
                {
                    title: "New Supplier",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/SupplierCreateUpdatePage",
                },
                {
                    title: "Supplier List",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/SupplierListPage",
                },
            ],
        },
        {
            title: "Expense",
            icon: <AiOutlineBank className="side-bar-item-icon" />,
            url: "/Expense",
            subMenu: [
                {
                    title: "New Expense Type",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/ExpenseTypeCreateUpdatePage",
                },
                {
                    title: "Expense Type List",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/ExpenseTypeListPage",
                },
                {
                    title: "New Expense",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/ExpenseCreateUpdatePage",
                },
                {
                    title: "Expense List",
                    icon: (
                        <BsCircle
                            size={16}
                            className="side-bar-subitem-icon"
                        />
                    ),
                    url: "/ExpenseListPage",
                },
            ],
        },
        {
            title: "Product",
            icon: <BsBox className="side-bar-item-icon" />,
            url: "/Product",
            subMenu: [
                {
                    title: "New Brand",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/BrandCreateUpdatePage",
                },
                {
                    title: "Brand List",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/BrandListPage",
                },
                {
                    title: "New Category",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/CategoryCreateUpdatePage",
                },
                {
                    title: "Category List",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/CategoryListPage",
                },
                {
                    title: "New Product",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/ProductCreateUpdatePage",
                },
                {
                    title: "Product List",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/ProductListPage",
                },
            ],
        },
        {
            title: "Purchase",
            icon: <BsBagPlus className="side-bar-item-icon" />,
            url: "/Purchase",
            subMenu: [
                {
                    title: "New Purchase",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/PurchaseCreateUpdatePage",
                },
                {
                    title: "Purchase List",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/PurchaseListPage",
                },
            ],
        },
        {
            title: "Sale",
            icon: <BsCartPlus className="side-bar-item-icon" />,
            url: "/Sale",
            subMenu: [
                {
                    title: "New Sale",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/SaleCreateUpdatePage",
                },
                {
                    title: "Sale List",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/SaleListPage",
                },
            ],
        },
        {
            title: "Return",
            icon: <BsBagX className="side-bar-item-icon" />,
            url: "/Return",
            subMenu: [
                {
                    title: "New Return",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/ReturnCreateUpdatePage",
                },
                {
                    title: "Return List",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/ReturnListPage",
                },
            ],
        },
        {
            title: "Report",
            icon: <BsGraphUp className="side-bar-item-icon" />,
            url: "/Report",
            subMenu: [
                {
                    title: "Sale Report",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/SaleReportPage",
                },
                {
                    title: "Return Report",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/ReturnReportPage",
                },
                {
                    title: "Purchase Report",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/PurchaseReportPage",
                },
                {
                    title: "Expense Report",
                    icon: <BsCircle size={16} className="side-bar-subitem-icon" />,
                    url: "/ExpenseReportPage",
                },
            ],
        },
    ];


    const onLogout = () => {
        removeSessions();
    };

    let userDetails = {};
    try {
        userDetails = getUserDetails() || {};
    } catch (error) {
        console.error("Error parsing user details:", error);
        userDetails = {};
    }

    return (
        <Fragment>
            <Navbar className="fixed-top px-0">
                <Container fluid>
                    <Navbar.Brand>
                        <div ref={topNavRef} className="top-nav-open">
                            <h4 className="text-white m-0 p-0">
                                <a onClick={MenuBarClickHandler}><AiOutlineMenu /></a>
                            </h4>
                        </div>
                    </Navbar.Brand>
                    <div className="float-right h-auto d-flex align-items-center">
                        <div className="user-dropdown">
                            {userDetails.photo && <img className="icon-nav-img" src={userDetails.photo} alt="User" />}
                            <div className="user-dropdown-content">
                                <div className="mt-4 text-center">
                                    {userDetails.photo && <img className="icon-nav-img" src={userDetails.photo} alt="User" />}
                                    <h6>{userDetails.firstName || 'Guest'}</h6>
                                    <hr className="user-dropdown-divider" />
                                </div>
                                <NavLink to="/Profile" className="side-bar-item">
                                    <AiOutlineUser /> Profile
                                </NavLink>
                                <a onClick={onLogout} className="side-bar-item">
                                    <AiOutlineLogout /> Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>

            <div ref={sideNavRef} className="side-nav-open">
                <NavLink to="/" className="d-flex justify-content-center sticky-top bg-white">
                    <img src={logo} className="logo" alt="Logo" />
                </NavLink>
                <Accordion>
                    {sidebarItems.map((item, index) => (
                        item.subMenu && item.subMenu.length > 0 ? (
                            <Accordion.Item key={index} eventKey={`${index}`}>
                                <Accordion.Header>
                                    <div className="side-bar-item">
                                        {item.icon} {item.title}
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    {item.subMenu.map((subItem, subIndex) => (
                                        <NavLink
                                            key={subIndex}
                                            to={subItem.url}
                                            className={({ isActive }) =>
                                                isActive ? "side-bar-subitem active" : "side-bar-subitem"
                                            }
                                        >
                                            {subItem.icon} {subItem.title}
                                        </NavLink>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        ) : (
                            <NavLink key={index} to={item.url} className="side-bar-item dashb">
                                {item.icon} {item.title}
                            </NavLink>
                        )
                    ))}

                </Accordion>
            </div>

            <div ref={contentRef} className="content">
                {children}
            </div>
        </Fragment>
    );
};

export default MasterLayout;
