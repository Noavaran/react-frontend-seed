import React, {Component} from 'react';
import styled from 'styled-components';
import imgBackGround from './img/signin.jpg';
import {Button, Icon} from '../../components/common';
import {reduxForm } from 'redux-form';
import Input from '../../components/Input';
import Form from '../../components/Form';

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
    
    .register-container{
        background: url(${imgBackGround}) no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 100vh;
        ${props => {
            if(props['data-direction']) {
                return `
                    direction: ${props['data-direction']}
                `
            }
        }}
    }
    
    .register-container > div{
        background-color: #fff;
        position: absolute;
        right: 0;
        bottom: 0;
        border-radius: 5px;
        border: 1px solid gray;
        margin: auto;
        -webkit-box-shadow: 0 0 14px 0 rgba(0,0,0,.3);
        box-shadow: 0 0 14px 0 rgba(0,0,0,.3);
        overflow: hidden;
        padding: 10px;
    }
    
    a{
        text-decoration: none;
    }
    
    form{
        padding: 10px;
    }
    form .header{
        text-align: center;
        font-size: 20px;
        margin-bottom: 1rem;
        margin-top: 1rem;
        margin-left: .5rem;
        margin-right: .5rem;
    
    }
    input[type="text"] , input[type=password]{
        height: 25px;
        border-top : 0px;
        border-left : 0px;
        border-right : 0px;
        width: 100%;
        border-color: #4eb1ff;
    }
    input[type="text"] , input[type=password]:focus{
        outline: none !important;
    }
    input[type="text"].error , input[type=password].error{
        border-color: #a61702;
    }
    
    .form-group{
        margin-bottom: 1rem;
        width: 100%;
    }
    .form-group>label{
        display: inline-block;
        margin-bottom: .5rem;
        font-weight: bold;
        font-size:12px
    }
    .form-group>small{
        font-size: 80%;
        font-weight: 400;
    }
    .text-muted{
        color: #868e96;
    }
    .text-error{
        color: #a61702;
    }
    .text-bold{
        font-weight: bold;
    }
    
    .text-right{
        text-align: right;
    }
    .text-left{
        text-align: left;
    }
    .text-center{
        text-align: center;
    }
    
    .pull-left{
        float: left;
    }
    
    .pull-right{
        float: right;
    }
    
    
    .btn{
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        cursor: pointer;
        border-radius: .25rem;
        transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    
    .btn-primary {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }
    
    
    @keyframes shake {
        10%, 90% {
            transform: translate3d(-1px, 0, 0);
        }
    
        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }
    
        30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
        }
    
        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }
`;

class Login extends Component {

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

    submit = data => {
        // data.preventDefault();
        console.log('data form', data);
    };

    render() {

        return (
            <StyledDiv data-style={this.state.style} data-direction={this.props.layout.direction}>
                <div className="register-container">
                    <div className="signin-container">
                        {/*<form>*/}
                        <div className="header text-muted text-bold">
                            ورود
                        </div>
                        <Form onSubmit={this.submit} name="formLogin">
                            <Input label='نام کاربری' type='text' name='firstName' required />
                            <div className="form-group text-center">
                                <Button type="submit" text="ورود" onClick={this.shakeFunc}>
                                    <Icon name='star'/>
                                </Button>
                            </div>
                            {/*<button type="submit">وردو</button>*/}
                        </Form>
                            {/*<div className="form-group">*/}
                                {/*<label>نام کاربری </label>*/}
                                {/*<input type="text" className="error" name="firstname" />*/}
                                    {/*<small  className="form-text text-error">مقدار نمی تواند خالی باشد</small>*/}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                                {/*<label>رمز عبور  </label>*/}
                                {/*<input type="password" name="lastname" />*/}
                                    {/*<small  className="form-text text-muted">پسورد را وارد کنید  </small>*/}
                            {/*</div>*/}

                            {/*<div className="form-group">*/}
                                {/*<a onClick={this.signupFunc}>ثبت نام</a>*/}
                                {/*<a onClick={this.forgotpasswordFunc} className="pull-left">بازیابی رمز عبور</a>*/}
                            {/*</div>*/}


                        {/*</form>*/}
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

export default reduxForm({
    form: 'loginForm'
})(Login)