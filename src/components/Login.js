import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';

class Login extends Component{ 
    constructor(props){ 
        super(props)

    }

    render(){ 
        return( 
         
            <form>
  <label>
    Name:
    <TextField id="standard-basic" label="Standard" />
  </label>
  <input type="submit" value="Submit" />
</form>
        )
    }

}

export default Login