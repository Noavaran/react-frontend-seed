import React, {Component} from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const StyledDiv = styled.div`
    box-sizing:border-box;
    
    .container{
        margin:30px auto 0;
    }
    
    h2 {
        text-align:center;
        margin-bottom:50px;
    }
    
    h2 small {
        font-weight:normal;
        color:#888;
        display:block;
    }
    
    .footer { text-align:center; }
    
    .footer a  { color:#53B2C8; }
    
    .group {
        position:relative;
        margin-bottom:45px;
    }
    
    .group .hint{
        font-size: 80%;
        font-weight: 400;
        height: 15px;
        margin-top: 2px;
    }
    
    .text-muted{
        color: #868e96;
    }
    
    .text-error{
        color: #a61702;
    }
    
    input{
        font-size:18px;
        padding:10px 10px 10px 5px;
        display:block;
        width:100%;
        border:none;
        border-bottom:1px solid #757575;
    }
    
    input.error{
        border-bottom:1px solid #ae1922;
    }
    
    input:focus { outline:none; }
    
    label{
        color:#999;
        font-size:18px;
        font-weight:normal;
        position:absolute;
        pointer-events:none;
        left:5px;
        top:10px;
        transition:0.2s ease all;
        -moz-transition:0.2s ease all;
        -webkit-transition:0.2s ease all;
    }
    
    input:focus ~ label, input:valid ~ label{
        top:-20px;
        font-size:14px;
        color:#5264AE;
    }
    
    input:focus ~ label.error, input:valid ~ label.error{
        color:#ae1922;
    }
    
    /* BOTTOM BARS ================================= */
    .bar{ position:relative; display:block; width:100%; }
    
    .bar:before, .bar:after 	{
        content:'';
        height:2px;
        width:0;
        bottom:1px;
        position:absolute;
        background:#5264AE;
        transition:0.2s ease all;
        -moz-transition:0.2s ease all;
        -webkit-transition:0.2s ease all;
    }
    
    .bar.error:before, .bar.error:after 	{
        background: #ae1922;
    }
    
    .bar:before {
        left:50%;
    }
    
    .bar:after {
        right:50%;
    }
    
    /* active state */
    input:focus ~ .bar:before, input:focus ~ .bar:after {
        width:50%;
    }
    
    /* HIGHLIGHTER ================================== */
    .highlight {
        position:absolute;
        height:60%;
        width:100px;
        top:25%;
        left:0;
        pointer-events:none;
        opacity:0.5;
    }
    
    /* active state */
    input:focus ~ .highlight {
        -webkit-animation:inputHighlighter 0.3s ease;
        -moz-animation:inputHighlighter 0.3s ease;
        animation:inputHighlighter 0.3s ease;
    }
    
    /* ANIMATIONS ================ */
    @-webkit-keyframes inputHighlighter {
        from { background:#5264AE; }
        to 	{ width:0; background:transparent; }
    }
    @-moz-keyframes inputHighlighter {
        from { background:#5264AE; }
        to 	{ width:0; background:transparent; }
    }
    @keyframes inputHighlighter {
        from { background:#5264AE; }
        to 	{ width:0; background:transparent; }
    }
`;

export default class InputMaterial extends Component {

    // static propTypes = {
    //
    // };
    //
    // static defaultProps = {
    //
    // };

    render() {
        return (
            <StyledDiv>
                <div className="container">
                    <form>

                    <div className="group">
                        <input type="text" />
                        <span className="highlight" ></span>
                        <span className="bar" ></span>
                            <label>password</label>
                            <div className="hint text-muted">پسورد را وارد کنید.</div>
                    </div>
                    </form>

                </div>
            </StyledDiv>
        )
    }
}