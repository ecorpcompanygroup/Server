const SIGNINPAGE=()=>{
    DISPLAY("",`
        <div class="appLogo"><img id="movielanderLogo" src="${MOVIELANDERNEWLOGO}"/></div>
        <br>
        <input id="designInput" class="Email" type="email" placeholder="johndoe@gmail.com" >
        <br><br>
        <input id="designInput" class="Password" type="password" placeholder="********" >
        <br><br>
        <h1 class="ForgotPassword">Forgot Password?</h1>
        <br>
        <button class="LoginButton">Sign In</button>
        <br><br>
        <p id="createOne">Don't Have Account?<b class="Special"> Create One!</b> </p>
    `);
    const LoginButton=document.querySelector(".LoginButton");
    const Email=document.querySelector(".Email");
    const Password=document.querySelector(".Password");
    const Special=document.querySelector(".Special");
    const ForgotPassword=document.querySelector(".ForgotPassword");
    LoginButton.addEventListener("click",()=>{

    });
    Special.addEventListener("click",()=>{
        ROUTE(" ",CREATEACCOUNTPAGE,"SIGNINPAGE");
    });
    ForgotPassword.addEventListener("click",()=>{
        ROUTE(" ",FORGOTPASSWORDPAGE,"SIGNINPAGE");
    });
    THEMER(Email);THEMER(Password);
    const STYLES=`
        .appLogo{
            width: 140px;
            height: 140px;
            background-color: transparent;
            margin-left: auto;
            margin-right: auto;
            margin-top: 25%;
        }
        #movielanderLogo{
            position: relative;
            width: 150px;
            height: auto;
        }
        input{
            width:75%;
            background:transparent;
            border:1px solid #23bee7;
            height:32px;
            border-radius:5px;
            outline: none;
        }
        #designInput{
            border-left: 5px solid #23bee7;
        }
        .LoginButton{
            width:50%;
            border-radius:10px;
            height:45px;
            background: #23bee7;
            color:white;
        }
        .LoginButton:active{
            background: #336699;
        }
        .ForgotPassword{
            font-size: 17px;
            text-align:right;
            margin-right:8%;
        }
        #createOne{
            font-size: 17px;
        }
        .Special{
            font-size: 17px;
            color: forestgreen;
        }
    `;
    INJECTCSS(STYLES);
};
SIGNINPAGE();HOMEPAGE();