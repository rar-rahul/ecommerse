import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Navigation extends Component{ 
    constructor(props){ 
        super(props)
    }

    render(){ 
        return( 

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <Link to="/" className="nav-link">
                  Ecommerse
                </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/login" className="nav-link">
                  Login
                </Link>
      </li>
      {/* <li class="nav-item active">
      <Link to="/register" className="nav-link">
                  Register
                </Link>
      </li> */}
   
    </ul>
  </div>
</nav>

        )
    }


}

export default Navigation