import React from 'react';
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Footer from './components/footer/footer'
import Three from './components/three/three'
import LoginModal from './components/modal/login'
import RegisterModal from './components/modal/register'
import RecoverModal from './components/modal/recover'
import ModalWrapper from './components/modal/modal'
import {useSelector} from 'react-redux'
import './App.css';

function App() {
  
  const modalState = useSelector(state => state.modalReducer)

  function selectModal(modalType){
    switch(modalType) {
        case 'LOGIN':
            // return <LoginModal/>
            return <ModalWrapper key="login_modal"><LoginModal/></ModalWrapper>
    
        case 'REGISTER':
            return <ModalWrapper key="register_modal"><RegisterModal/></ModalWrapper>
        
        case 'RECOVER':
            return <ModalWrapper key="recover_modal"><RecoverModal/></ModalWrapper>

        default:
            return ''
    } 
  }

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Three/>
      <Footer/>
      { modalState.isOpen ? selectModal(modalState.type) : '' }
    </div>
  );
}

export default App;
