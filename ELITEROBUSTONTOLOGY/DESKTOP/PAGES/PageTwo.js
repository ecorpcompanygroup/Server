const CREATEACCOUNTPAGE=()=>{
    DISPLAY("",`
        <h1 class="AppName">Movie Lander</h1>
        <br>
        <p>Your Home Cinema</p>
        <br>
        <input class="Name" type="text" placeholder="John Doe" >
        <br><br>
        <input class="Email" type="emai" placeholder="johndoe@gmail.com" >
        <br><br>
        <input class="Password" type="password" placeholder="******" >
        <br><br>
        <button class="LoginButton">Sign Up</button>
        <br><br>
        <p>Already Have Account?<b class="Special"> LogIn!</b> </p>
    `);
    const Name=document.querySelector(".Name");
    const Email=document.querySelector(".Email");
    const Password=document.querySelector(".Password");
    const Special=document.querySelector(".Special");
    THEMER(Email);THEMER(Password);THEMER(Name);
    Special.addEventListener("click",()=>{
        ROUTE("",HOMEPAGE,"HOMEPAGE");
    });
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