import React, {Component} from 'react';
import styled from 'styled-components';
import imgBackGround from './img/signin.jpg';
import {Button} from '../../components/common';
import Input from '../../components/Input';
import Form from '../../components/Form';
import {hasIn, isEmpty} from 'ramda';
import LinearDeterminate from '../../components/LinearDeterminate';

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
    .header{
        text-align: center;
        font-size: 20px;
        margin-bottom: 1rem;
        margin-top: 1rem;
        margin-left: .5rem;
        margin-right: .5rem;
    
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
    .text-bold{
        font-weight: bold;
    }
    .text-center{
        text-align: center;
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

export default class Login extends Component {

    state = {
        style: {},
        loginError: ''
    };

    componentDidMount() {
        setTimeout(() => {
            this.signInFunc();
        }, 1)
    }

    componentWillReceiveProps(nextProps) {
        if(hasIn('error', nextProps.user) && !isEmpty(nextProps.user.error)) {
            this.shakeFunc();
        }
    }

    componentWillUnmount(){
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null
        }
    }

    forgotPasswordFunc = () => {
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

    signInFunc = () => {
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

    timeout = null;

    shakeFunc = () => {
        this.setState({style: {...this.state.style, animation: 'shake 1s cubic-bezier(.36,.07,.19,.97) both'}}, () => {
            this.timeout = setTimeout(() => {
                this.setState({style: {...this.state.style, animation: ''}});
            }, 1000);
        });
    };

    submit = data => {
        if(hasIn('username', data) && hasIn('password', data)) {
            this.props.login(data);
            this.props.startLinear()
        }
    };

    submitFormForgotPass = data => {
        console.log(data);
    };

    render() {
        return (
            <StyledDiv data-style={this.state.style} data-direction={this.props.layout.direction}>
                <LinearDeterminate />
                <div className="register-container">
                    <div className="signin-container">
                        <div className="header text-muted text-bold text-center">
                            ورود
                        </div>
                        <Form onSubmit={this.submit} name="formLogin">
                            <Input label='نام کاربری' type='text' name='username' required />
                            <Input label='رمز عبور' type='password' name='password' required style={{marginTop: 10}}/>
                            <div className="form-group text-center">
                                <div style={{display: 'inline-flex', marginBottom: 70}}>
                                    <Button text="بازیابی رمز عبور" onClick={this.forgotPasswordFunc} raised={false} style={{position: 'absolute', right: 3}}/>
                                </div>
                                <Button type="submit" text="ورود"/>
                            </div>
                        </Form>
                    </div>

                    <div className="forgotpassword-container">
                        <div className="header text-muted text-bold text-center">
                            بازیابی رمز عبور
                        </div>

                        <Form onSubmit={this.submitFormForgotPass} name="formForgotPass">
                            <Input label='نام کاربری' type='text' name='username' required />
                            <div className="form-group text-center">
                                <div style={{display: 'inline-flex', marginBottom: 70}}>
                                    <Button text="ورود" onClick={this.signInFunc} raised={false} style={{position: 'absolute', right: 3}}/>
                                </div>
                                <Button type="submit" text="ارسال"/>
                            </div>
                        </Form>
                    </div>
                </div>
            </StyledDiv>
        )
    }
}