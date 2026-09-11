const CREATEACCOUNTPAGE=()=>{
    DISPLAY("",`
        <div class="appLogo"></div>
        <h1 class="AppName">Movie Lander</h1>
        <p id="slogan">Your Home Cinema</p>
        <br>
        <input id="designInput" class="Name" type="text" placeholder="John Doe" >
        <br><br>
        <input id="designInput" class="Email" type="emai" placeholder="johndoe@gmail.com" >
        <br><br>
        <input id="designInput" class="Password" type="password" placeholder="********" >
        <br><br>
        <button class="LoginButton">Sign Up</button>
        <br><br>
        <p id="createOne">Already Have Account?<b class="Special">Login!</b></p>
    `);
    const Name=document.querySelector(".Name");
    const Email=document.querySelector(".Email");
    const Password=document.querySelector(".Password");
    const Special=document.querySelector(".Special");
    THEMER(Email);THEMER(Password);THEMER(Name);
    Special.addEventListener("click",()=>{
        ROUTE("",SIGNINPAGE,"CREATEACCOUNTPAGE");
    });
    const STYLES=`
        .AppName{
            margin-top:5%;
            font-size:20px;
        }
        #slogan{
            margin-top:1%;
            font-size: 15px;
            font-style: italic;
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
        .ForgotPassword{
            font-size: 17px;
            text-align:right;
            margin-right:10%;
        }
        .Special{
            font-size: 17px;
            color: forestgreen;
        }
    `;
    INJECTCSS(STYLES);
};