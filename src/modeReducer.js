const modeReducer=(state,action)=>{
    switch (action.type) {
    
      case 'light' :
        {
          return 'light'
        }
      case 'dark' :
        {
          return 'dark'
        }
      case 'toggle' :
        {
          return state==='light'? 'dark' : 'light'
        }
    
        default:
          return state
        
    }
    }

    export default modeReducer