const FORGOTPASSWORDPAGE=()=>{
    DISPLAY("",`
        <h1 class="AppName">Movie Lander</h1>
        <br>
        <p>Your Home Cinema</p>
        <br>
        <input class="Email" type="emai" placeholder="johndoe@gmail.com" >
        <br><br>
        <button class="LoginButton">Recover</button>
        <br><br>
        <p>I Remember My Details?<b class="Special"> LogIn!</b> </p>
    `);
    const LoginButton=document.querySelector(".LoginButton");
    const Email=document.querySelector(".Email");
    const Special=document.querySelector(".Special");
    LoginButton.addEventListener("click",()=>{

    });
    Special.addEventListener("click",()=>{
        ROUTE("",HOMEPAGE,"HOMEPAGE");
    });
    THEMER(Email);
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
            margin-right:10%;
        }
        .Special{
            color:teal
        }
    `;
    INJECTCSS(STYLES);
};
HOMEPAGE();