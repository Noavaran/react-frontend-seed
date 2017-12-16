import React, {Component} from 'react';
import styled from 'styled-components';
import '../../public/css/signin.css';

const StyledDiv = styled.div`

    .signin-container{
        visibility: hidden;
        opacity: 0;
        width: 300px;
        height: 350px;
        top: 200%;
        left: 0;
        transition: top 1s ease-in-out, opacity  1s linear;
        ${props => {
            if(props['data-style']) {
                return `
                    top: ${props['data-style'].sizeTopSignIn};
                    visibility: ${props['data-style'].visibility};
                    opacity: ${props['data-style'].opacitySignIn};
                    animation: ${props['data-style'].animation};

                `
            }
        }}
    }
    
    .signup-container{
        visibility: hidden;
        opacity: 0;
        width: 300px;
        height: 600px;
        top: -200%;
        left: 0;
        transition: top 1s ease-in-out, opacity  1s linear;
        ${props => {
            if(props['data-style']) {
                return `
                    top: ${props['data-style'].sizeTopSignUp};
                    visibility: ${props['data-style'].visibility};
                    opacity: ${props['data-style'].opacitySignUp};
                    animation: ${props['data-style'].animation};
                `
            }
        }}
    }
    
    .forgotpassword-container{
        visibility: hidden;
        opacity: 0;
        width: 300px;
        height: 250px;
        left: -200%;
        top:0;
        transition: left 1s ease-in-out, opacity  1s linear;
        ${props => {
            if(props['data-style']) {
                return `
                    left: ${props['data-style'].sizeLeftForgotPass};
                    visibility: ${props['data-style'].visibility};
                    opacity: ${props['data-style'].opacityForgotPass};
                    animation: ${props['data-style'].animation};
                `
            }
        }}
    }
`;

export default class Login extends Component {

    state = {
        style: {}
    };

    componentDidMount() {
        setTimeout(() => {
            this.signinFunc();
        }, 1)
    }

    signupFunc = () => {
        this.setState({
            style: {
                sizeTopSignIn: '200%',
                sizeTopSignUp: 0,
                sizeLeftForgotPass: '-200%',
                visibility: 'visible',
                opacitySignIn: 0,
                opacitySignUp: .9,
                opacityForgotPass: 0,
                animation: ''
            }
        });
    };

    forgotpasswordFunc = () => {
        this.setState({
            style: {
                sizeTopSignIn: '200%',
                sizeTopSignUp: '-200%',
                sizeLeftForgotPass: 0,
                visibility: 'visible',
                opacitySignIn: 0,
                opacitySignUp: 0,
                opacityForgotPass: .9,
                animation: ''
            }
        });
    };

    signinFunc = () => {
        this.setState({
            style: {
                sizeTopSignIn: 0,
                sizeTopSignUp: '-200%',
                sizeLeftForgotPass: '-200%',
                visibility: 'visible',
                opacitySignIn: .9,
                opacitySignUp: 0,
                opacityForgotPass: 0,
                animation: ''
            }
        });
    };

    shakeFunc = () => {
        this.setState({style: {...this.state.style, animation: 'shake 1s cubic-bezier(.36,.07,.19,.97) both'}}, () => {
            setTimeout(() => {
                this.setState({style: {...this.state.style, animation: ''}});
            }, 1000);
        });
    };

    render() {
        return (
            <StyledDiv data-style={this.state.style}>
                <div className="register-container">
                    <div className="signin-container">
                        <form>
                            <div className="header text-muted text-bold">
                                ورود
                            </div>
                            <div className="form-group">
                                <label>نام کاربری </label>
                                <input type="text" className="error" name="firstname" />
                                    <small  className="form-text text-error">مقدار نمی تواند خالی باشد</small>
                            </div>
                            <div className="form-group">
                                <label>رمز عبور  </label>
                                <input type="password" name="lastname" />
                                    <small  className="form-text text-muted">پسورد را وارد کنید  </small>
                            </div>

                            <div className="form-group">
                                <a onClick={this.signupFunc}>ثبت نام</a>
                                <a onClick={this.forgotpasswordFunc} className="pull-left">بازیابی رمز عبور</a>
                            </div>

                            <div className="form-group text-center">
                                <input readOnly onClick={() => this.shakeFunc()}  className="btn btn-primary text-center" value="ورود" />
                            </div>
                        </form>
                    </div>

                    <div className="signup-container">
                        <form>
                            <div className="header text-muted text-bold">
                                ثبت نام
                            </div>
                            <div className="form-group">
                                <label>نام کاربری </label>
                                <input type="text" className="error" name="usename" />
                                    <small  className="form-text text-error">مقدار نمی تواند خالی باشد</small>
                            </div>
                            <div className="form-group">
                                <label>نام </label>
                                <input type="text"  name="firstname" />
                                    <small className="form-text text-error" />
                            </div>
                            <div className="form-group">
                                <label>نام خانوادگی </label>
                                <input type="text"  name="lastname" />
                                    <small  className="form-text text-error" />
                            </div>
                            <div className="form-group">
                                <label>رمز عبور  </label>
                                <input type="password" name="password" />
                                    <small  className="form-text text-muted">رمز عبور را وارد کنید  </small>
                            </div>
                            <div className="form-group">
                                <label>تکرار رمز عبور  </label>
                                <input type="password" name="confirmPassword" />
                                    <small  className="form-text text-muted">تکرار رمز عبور را وارد کنید  </small>
                            </div>
                            <div className="form-group">
                                <a onClick={this.signinFunc}>ورود</a>
                                <a onClick={this.forgotpasswordFunc} className="pull-left">بازیابی رمز عبور</a>
                            </div>

                            <div className="form-group text-center">
                                <input readOnly onClick={() => this.shakeFunc()} className="btn btn-primary text-center" />
                            </div>
                        </form>
                    </div>

                    <div className="forgotpassword-container">
                        <form>
                            <div className="header text-muted text-bold">
                                بازیابی رمز عبور
                            </div>
                            <div className="form-group">
                                <label>نام کاربری </label>
                                <input type="text" className="error" name="firstname" />
                                    <small  className="form-text text-error">مقدار نمی تواند خالی باشد</small>
                            </div>

                            <div className="form-group">
                                <a onClick={this.signupFunc}>ثبت نام</a>
                                <a onClick={this.signinFunc} className="pull-left">ورود</a>
                            </div>

                            <div className="form-group text-center">
                                <input readOnly onClick={() => this.shakeFunc()}  className="btn btn-primary text-center" />
                            </div>
                        </form>
                    </div>
                </div>
            </StyledDiv>
        )
    }
}