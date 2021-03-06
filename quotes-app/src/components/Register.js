import React, { Component } from 'react';
import { login } from '../services/auth';
import { Link } from 'react-router-dom';
import { isLoggedIn, logout, } from '../services/auth';
import '../css/registercss.css';

class Register extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            username:'',
            email: '',
            password: '',
            confirmpassword:''
        };
        this.username = React.createRef();
        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
        this.confirmpasswordInputRef = React.createRef();
    }

    login = ( event ) => {
        event.preventDefault();
        login( this.state )
            .then( data => this.props.history.push( '/' ) )
            .catch( error => alert( 'Invalid credentials' ) );
    }

    updateCredentials = () => {
        this.setState({
            username: this.usernameInputRef.current.value,
            email: this.emailInputRef.current.value,
            password: this.passwordInputRef.current.value,
            confirmpassword: this.confirmpasswordInputRef.current.value
        });
    }

    render() {
        return (
            <div className=" ">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className=" offset-md-2 registerbrand" to="/" >FAVQS</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse offset-md-5" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            {
                                isLoggedIn ? <button onClick={this.logout} className="btn btn-primary" to="/">LOGOUT</button> : 
                                <Link className=" btnloginhome btn btn-primary" to="/login"><i className="fa fa-sign-in" aria-hidden="true"></i> LOGIN</Link>
                            }
                        </li>
                        <li className="nav-item">
                            <Link className=" btnregisterhome btn btn-primary" to="/register"><i className="fa fa-users" aria-hidden="true"></i> REGISTER</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
                <div className="row no-gutters">
                    <div className=" registercontent offset-md-3 col-md-3 col-sm-3" >
                        <div className="row no-gutters">
                            <div className="col-md-12 col-sm-12 regcontent1">
                                <p className="fafaumbrella"><i className="fa fa-umbrella" aria-hidden="true"></i>
                                <span id="reghead1">George Carlin</span></p>
                                <p id="regpara1">Let a smile be your umbrella, and you'll end up with a face full of rain.</p>
                                <p className="fafamap"><i className="fa fa-map-signs"></i>
                                <span id="reghead2">Bob Marley</span></p>
                                <p id="regpara2">Life is one big road with lots of sign, So when you riding through the ruts, 
                                    Don't you complicate your mind Flee from hate, mischief jealousy Don't bury 
                                    your thoughts; put your vision to reality.
                                </p>
                                
                                <p className="fafauser"><i className="fa fa-user-secret"></i>
                                <span id="reghead3">Sherlock Holmes</span></p>
                                <p id="regpara3">Education never ends, Watson. It is a series of lessions with the greatest for last</p>
                            </div>
                            {/* <div className="col-md-8 registertext col-sm-8">
                                <p id ="reghead1">George Carlin</p>
                                <p id="reg">Let a smile be your umbrella, and you'll end up with a face full of rain.</p>
                                <p>Bob Marley</p>
                                <p>Life is one big road with lots of sign, So when you riding through the ruts, 
                                    Don't you complicate your mind Flee from hate, mischief jealousy Don't bury 
                                    your thoughts; put your vision to reality.
                                </p>
                                <p>Sherlock Holmes</p>
                                <p>Education never ends, Watson. It is a series of lessions with the greatest for last</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="card registerCard " >
                        <p className="regregister">Register</p>
                        <div className="text-center regwith">
                            <span className="fa-stack fa-sm" style={{width:'1.75em'}}>
                                <i className="fa fa-circle fa-stack-2x icon-background1"></i>
                                <i className="fa fa-facebook fa-stack-1x"></i>
                            </span>
                            <span className="fa-stack fa-sm "style={{width:'1.75em'}}>
                                <i className="fa fa-circle fa-stack-2x icon-background1"></i>
                                <i className="fa fa-google fa-stack-1x"></i>
                            </span>
                            <span className="fa-stack fa-sm"style={{width:'1.75em'}}>
                                <i className="fa fa-circle fa-stack-2x icon-background1"></i>
                                <i className="fa fa-twitter fa-stack-1x"></i>
                            </span>
                        </div>
                        <div className="row no-gutters regline">
                            <div className="col-md-5">
                            <hr/>
                            </div>
                            <div className="col-md-2 text-center">
                            <p id="orreg">or</p>
                            </div>
                            <div className="col-md-5">
                            <hr/>
                            </div>
                        </div>
                        <form className="registerForm" onSubmit={this.login}>
                             <div className="form-group">
                                <input type="text" className="form-control regformcontrol" id="username" name="username" placeholder={'Username'} ref={this.emailInputRef} onChange={this.updateCredentials} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control regformcontrol" id="email" name="email"placeholder={'Email'} ref={this.emailInputRef} onChange={this.updateCredentials} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control regformcontrol" id="password" name="password"placeholder={'Password'} ref={this.passwordInputRef} onChange={this.updateCredentials} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control regformcontrol" id="confirmpassword" name="confirmpassword"placeholder={'Confirm Password'} ref={this.passwordInputRef} onChange={this.updateCredentials} />
                            </div>
                            <div className="form-group">
                                <button className="btn btnregister btn-primary">REGISTER</button>
                            </div>
                            <p id="forgetpassreg">Already have an account? Login</p>
                        </form>
                    </div>
                </div>
                <p id="regcopy"><i className="fa fa-copyright"></i>2018</p>
            </div>
        );
    }
}

export default Register;