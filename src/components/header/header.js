import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { openLoginModal, openRegisterModal } from '../../store/modal/action'

function Header(){
    
    const dispatch = useDispatch()

    return(
        <header id="header">
            <div className="inner">
                <div className="logo"><strong>Free Code Camp</strong>  Banners en React</div>
                <nav id="nav">
                    <div className="modal_link" onClick={() => dispatch(openLoginModal()) }>Login</div>
                    <div className="modal_link" onClick={() => dispatch(openRegisterModal()) }>Register</div>
                </nav>
            </div>
        </header>
        
    );
}

export default connect(null,{openLoginModal,openRegisterModal})(Header);


 