import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { closeModal } from '../../store/modal/action'
import x from './img/x.png'


function RecoverModal(){    
    
    const dispatch = useDispatch()

    return(
       <div>
           <header>¿Olvidaste tu contraseá? <img src={x} className="x"  onClick={() => dispatch(closeModal()) } /> </header>
           <section>
            
            <p className="mensaje">Te enviaremos un código a tu e-mail para que puedas resetear tu contraseña</p>
                
            <div className="input_continer">
                    <div className="input_wrapper recover_wrapper">
                            <label>E-MAIL</label>
                            <input type="text" placeholder="Escribe tu e-mail"/>
                    </div>
            </div>

            <button className="button_orange">Enviar código</button>
            
           </section>
       </div>
        
    );
}

export default connect()(RecoverModal);


 