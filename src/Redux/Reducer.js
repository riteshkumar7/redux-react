let Books=
{
ds:20,
js:40,
html:20,
css:20
}
const Reducer=(State=Books,Action)=>
{

      switch(Action.type)
      {
        case "ADD_DS_1":
            return {State,ds:State.ds+1}
        
        case "SUB_DS_1":
            return {State,ds:State.ds-1}
        
        case  "ADD_DS_U":
            return {State, ds:State.ds+Action.payload}

            case  "SUB_DS_U":
                return {State, ds:State.ds-Action.payload}
    
        default: 
        return State;


      }






}
export default Reducer;