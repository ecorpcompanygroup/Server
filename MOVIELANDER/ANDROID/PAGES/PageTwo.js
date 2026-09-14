const CREATEACCOUNTPAGE=()=>{
    DISPLAY("",`
        <div class="appLogo"><img id="movielanderLogo" src="${MOVIELANDERNEWLOGO}"/></div>
        <br>
        <input id="designInput" class="Name" type="text" placeholder="John Doe" >
        <br><br>
        <input id="designInput" class="Email" type="emai" placeholder="johndoe@gmail.com" >
        <br><br>
        <input id="designInput" class="Password" type="password" placeholder="********" >
        <br><br>
        <button class="LoginButton">Sign Up</button>
        <br><br>
        <p id="createOne">Already Have Account?<b class="Special"> Login!</b></p>
    `);
    THEMER(".Email");THEMER(".Password");THEMER(".Name");
    CLICKED(".Special",()=>{
        ROUTE("",SIGNINPAGE,"CREATEACCOUNTPAGE");
    });
    const STYLES=`
        input{
            width:75%;
            background:transparent;
            border:1px solid #23bee7;
            height:32px;
            border-radius:5px;
            outline: none;
            font-size: 16px;
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
            font-size: 16px;
        }
        .ForgotPassword{
            font-size: 16px;
            text-align:right;
            margin-right:10%;
        }
        .Special{
            font-size: 16px;
            color: forestgreen;
        }
    `;
    INJECTCSS(STYLES);
};