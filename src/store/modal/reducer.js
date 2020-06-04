const inistalState = {
    isOpen : false,
    type:''
}

export default (state = inistalState, action) => {
    switch (action.type) {
        case 'CLOSE_MODAL':
            return {
                ...state,
                isOpen: false,
                type:''
            }

        case 'OPEN_LOGIN_MODAL':
            return {
                ...state,
                isOpen: true,
                type:'LOGIN'
            }
        
        case 'OPEN_REGISTER_MODAL':
            return {
                ...state,
                isOpen: true,
                type:'REGISTER'
            }
        
        case 'OPEN_RECOVER_MODAL':
            return {
                ...state,
                isOpen: true,
                type:'RECOVER'
            }
        
        default:
            return state
    }
}
