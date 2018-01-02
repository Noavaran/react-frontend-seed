import React, {Component} from 'react';
import styled from 'styled-components';
import imgBackGround from './img/signin.jpg';
import {Button} from '../../components/common';
import Input from '../../components/Input';
import Form from '../../components/Form';
import {hasIn, isEmpty} from 'ramda';
import LinearDeterminate from '../../components/LinearDeterminate';
import telegramPic from './img/telegram.png';
import instagramPic from './img/instagram.png';
import aparatPic from './img/aparat.png';
import emailPic from './img/email.png';
import chakilehFooterPic from './img/chakileh-footer.png';
import Avatar from '../../components/Avatar';

const StyledDiv = styled.div`
    
    .signin-container{
        visibility: hidden;
        opacity: 0;
        width: 300px;
        height: 275px;
        left: 100%;
        top: 0;
        transition: left 1s ease-in-out, opacity  1s linear;
        ${props => {
    if(props['data-style']) {
        return `
                    left: ${props['data-style'].sizeTopSignIn};
                    visibility: ${props['data-style'].visibility};
                    opacity: ${props['data-style'].opacitySignIn};
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
        margin-top: 0px;
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
    div.about-chakideh{
        position: absolute;
        width: 21%;
        text-align: justify;
        font-size: 10px;
        direction: rtl;
        // height: 300px;
        top: 100px;
        bottom: 0;
        margin: auto;
        left: 10%;
        font-family: BKoodakBold,Arial,Helvetica,sans-serif !important;
    }
    
    .avatarClassHeader{
        width: 150px;
        height: 67px;
    }
    
    .footerLoginPage{
        position: absolute;
        bottom: 0px;
        background-color: #f8f7f7;
        width: 100%;
        height: 45px;
        opacity: 0.5;
    }
    
    .subFooterLoginPage{
        text-align: center;
        margin-top: 12px;
        font-family: BKoodakBold,Arial,Helvetica,sans-serif !important;
    }
    
    div.inputMaterial input{
        direction: initial;
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

    signInFunc = () => {
        this.setState({
            style: {
                sizeTopSignIn: '60%',
                sizeTopSignUp: '-200%',
                sizeLeftForgotPass: '100%',
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
        if(hasIn('rePassword', data) && hasIn('password', data)) {
            if(data.password !== data.rePassword) {
                this.props.showSnackBars('کلمه عبور با تکرار کلمه عبور مطابقت ندارد.')
            } else {
                //REST for reset pass
            }
            // this.props.login(data);
            // this.props.startLinear()
        }
    };

    render() {
        return (
            <StyledDiv data-style={this.state.style} data-direction={this.props.layout.direction}>
                <LinearDeterminate />
                <div className="about-chakideh">
                    <img src={chakilehFooterPic} style={{width: '100%'}} alt=""/>
                    <h1>چکیده استارت آپی فرهنگی و اجتماعی است.</h1>
                    <h1>جامعه مجازی متشکل از ناشران, نویسندگان, متخصصان و علاقمندان کتاب است.</h1>
                    <h1>هدف آن آشنایی و گفتگو پیرامون کتاب, امکان خرید کتاب فیزیکی و الکترونیکی, خلاصه کتاب به فرمت های متنی, صوتی و ویدیویی می باشد.</h1>
                    <h1>خلاصه کتاب ها در فاصله ای بین ۱۰ تا ۶۰ دقیقه به شیوه های جذاب کل مفاهیم اصلی یک کتاب را به مخاطب انتقال می دهند.</h1>
                    <h1>کسب و ارتقا دانش, ارتقا مهارت های فردی و تخصصی در کمترین زمان برای افراد, سازمان ها و کسب و کارها از اهداف اصلی می باشد.</h1>
                    <div style={{display: 'inline-flex'}}>
                        <Avatar pic={telegramPic} alt={this.props.translate.telegram} style={{marginLeft: 40, marginRight: 10, cursor: 'pointer'}} />
                        <Avatar pic={instagramPic} alt={this.props.translate.instagram} style={{marginLeft: 40, cursor: 'pointer'}}/>
                        <Avatar pic={aparatPic} alt={this.props.translate.aparat} style={{marginLeft: 40, cursor: 'pointer'}}/>
                        <Avatar pic={emailPic} alt={this.props.translate.email} style={{cursor: 'pointer'}}/>
                    </div>
                </div>
                <div className="register-container">
                    <div className="signin-container">
                        <div className="header text-muted text-bold text-center">
                            {this.props.translate.resetPassword}
                        </div>
                        <Form onSubmit={this.submit} name="formLogin">
                            <Input label={this.props.translate.password} type='password' name='password' required/>
                            <Input label={this.props.translate.rePassword} type='password' name='rePassword' required style={{marginTop: 10}}/>
                            <div className="form-group text-center" style={{marginTop: 20}}>
                                <Button type="submit" text={this.props.translate.entry}/>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="footerLoginPage">
                    <div className="subFooterLoginPage">
                        کلیه مطالب موجود در پروژه چکیده دارای حق کپی رایت بوده و به هیچ وجه حق پخش و نشر برای دیگران مجاز نمی باشد و پیگرد قانونی دارد

                    </div>
                </div>
            </StyledDiv>
        )
    }
}