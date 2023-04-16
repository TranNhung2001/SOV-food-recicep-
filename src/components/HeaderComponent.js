import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import logo from '../assets/images/logo.png'
import user from '../assets/images/user-default.png'

const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menu = [
        {
            id: 1,
            name: "Trang chủ",
            href: "/home"
        },
        {
            id: 2,
            name: "Xu hướng",
            href: "/trending"
        }
    ]
    const menuItem = menu.map((item) => {
        return (
            <Col key={item.id} xs={12} sm={12} lg={12} xl={8} xxl={5} >
                <Link className={`${window.location.pathname.includes(item.href) || (window.location.pathname === "/" && item.href === "/home") ? "header__menu-item active" : "header__menu-item"}  `} to={item.href}>{item.name}</Link>
            </Col >
        )
    })
    return (<>
        <header className='header'>
            <Row className='header__menu' gutter={[{}, { sm: '20px' }]} justify={'space-around'} align={'middle'}>
                <Col xs={24} sm={24} lg={2} xl={1} style={{ textAlign: "center", borderBottom: "1px soild #000" }}>
                    <img src={logo} className="header__menu-img" />
                </Col>
                <Col style={{ marginLeft: "30px" }} xs={14} sm={14} lg={8} xl={10} xxl={12}>
                    <Row gutter={[{ lg: "30" }, { lg: "24" }]}>
                        {menuItem}
                    </Row>
                </Col>
                <Col xs={22} sm={22} lg={10} xl={8} xxl={6} style={{ display: 'flex' }} >
                    <div className="header__menu-search">
                        <input placeholder='Tìm kiếm trên website...' />
                        <AiOutlineSearch className="header__menu-search--icon" />
                    </div>
                    <div className="header__menu-noti">
                        <BsBell className="header__menu-noti--icon" />
                    </div>
                    <div className="header__menu-user">
                        <img src={user} className="header__menu-user--img" onClick={() => setIsOpen(!isOpen)} />
                        {isOpen ?
                            <ul className='header__menu-user--options'>
                                <li className='header__menu-user--option'>Thêm bài viết</li>
                                <li className='header__menu-user--option'>Trang cá nhân</li>
                                <li className='header__menu-user--option'>Thiết lập tài khoản</li>
                                <li className='header__menu-user--option'>Đăng xuất</li>
                            </ul> : ""
                        }




                    </div>

                </Col>
            </Row>
        </header>
    </>
    );
}

export default HeaderComponent;