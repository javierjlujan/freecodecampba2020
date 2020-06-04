import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { closeModal,openRecoverModal } from '../../store/modal/action'
import facebook_login from './img/facebook_login.png'
import google_login from './img/google_login.png'
import x from './img/x.png'



function LoginModal(){
    
    const dispatch = useDispatch()

    return(
       <div className="login_modal">
           <header> <img src={x} alt="x" className="x" onClick={() => dispatch(closeModal()) } /> </header>
           <section>
            
            <div className="social_login_container">
                <img src={google_login} alt="google" className="social_login" />
                <img src={facebook_login}  alt="fb" className="social_login" />
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

            <div className="recover_password" onClick={() => dispatch(openRecoverModal())}>
                ¿Olvidaste tu contraseña?
            </div>

            <button className="button_orange">Ingresar</button>
            
            
           </section>
       </div>
        
    );
}

export default connect()(LoginModal);


 