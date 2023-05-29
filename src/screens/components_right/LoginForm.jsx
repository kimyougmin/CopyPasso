import React from 'react';
import "./LoginForm.css"

function LoginForm(props) {

    return (
        <div className={"loginForm"}>
            <img src={"./Body/contents/login/main_login_bike.gif"}/>
            <ul className={"loginUl"}>
                <li>회원가입</li>
                <li>|</li>
                <li>아이디/비밀번호 찾기</li>
                <li>|</li>
                <li>비회원 로그인</li>
            </ul>
        </div>
    );
}

export default LoginForm;