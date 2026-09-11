const HOMEPAGE=()=>{
    DISPLAY("",`
        <h1 class="AppName">Movie Lander</h1>
        <br>
        <p>Your Home Cinema</p>
        <br>
        <input class="Email" type="emai" placeholder="johndoe@gmail.com" >
        <br><br>
        <input class="Password" type="password" placeholder="******" >
        <br><br>
        <h1 class="ForgotPassword">Forgot Password?</h1>
        <br>
        <button class="LoginButton">Sign In</button>
        <br><br>
        <p>Don't Have Account?<b class="Special"> Create One!</b> </p>
    `);
    const LoginButton=document.querySelector(".LoginButton");
    const Email=document.querySelector(".Email");
    const Password=document.querySelector(".Password");
    const Special=document.querySelector(".Special");
    const ForgotPassword=document.querySelector(".ForgotPassword");
    LoginButton.addEventListener("click",()=>{

    });
    Special.addEventListener("click",()=>{
        ROUTE(" ",CREATEACCOUNTPAGE,"HOMEPAGE");
    });
    ForgotPassword.addEventListener("click",()=>{
        ROUTE(" ",FORGOTPASSWORDPAGE,"HOMEPAGE");
    });
    THEMER(Email);THEMER(Password);
    const STYLES=`
        .AppName{
            margin-top:20%;
            font-size:30px;
        }
        input{
            width:90%;
            background:transparent;
            border:1px solid #cdcdcd;
            height:32px;
            border-radius:5px;
        }
        .LoginButton{
            width:90%;
            border-radius:10px;
            height:50px;
            background:forestgreen;
            color:white;
        }
        .ForgotPassword{
            text-align:right;
            margin-right:8%;
        }
        .Special{
            color:teal
        }
    `;
    INJECTCSS(STYLES);
};
HOMEPAGE();