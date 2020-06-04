import React from 'react'
import facebook_login from './img/facebook_login.png'
import google_login from './img/google_login.png'
import x from './img/x.png'

import { connect, useDispatch } from 'react-redux';
import { closeModal } from '../../store/modal/action'

function RegisterModal(){

        const dispatch = useDispatch()

    return(
       <div className="">
           <header>Registrate <img src={x} className="close" onClick={() => dispatch(closeModal()) } /> </header>
           <section>
            
            <div className="social_login_container">
                <img src={google_login} className="social_login" />
                <img src={facebook_login} className="social_login" />
            </div>
                
            <div className="input_continer">
                    <div className="input_wrapper">
                            <label>Nombre</label>
                            <input type="text" placeholder="Escribe tu nombre"/>
                    </div>
                    <div className="input_wrapper">
                            <label>Apellido</label>
                            <input type="password" placeholder="Escribe tu apellido"/>
                    </div>
                </div>
                <div className="input_continer">
                    <div className="input_wrapper">
                            <label>E-MAIL</label>
                            <input type="text" placeholder="Escribe tu e-mail"/>
                    </div>
                    <div className="input_wrapper">
                            <label>CONTRASEÑA</label>
                            <input type="password" placeholder="Escribe tu contraseña"/>
                    </div>

            </div>

            <button className="button_orange">Registrarme</button>
            
            
           </section>
       </div>
        
    );
}
export default connect()(RegisterModal);


 