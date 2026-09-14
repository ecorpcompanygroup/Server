const FORGOTPASSWORDPAGE=()=>{
    DISPLAY("",`
        <div class="appLogo"><img id="movielanderLogo" src="${MOVIELANDERNEWLOGO}"/></div>
        <br>
        <input id="designInput" class="Email" type="emai" placeholder="johndoe@gmail.com" >
        <br><br><br>
        <button class="LoginButton">Recover</button>
        <br><br>
        <p id="createOne">I Remember My Details?<b class="Special"> Login!</b> </p>
    `);
    CLICKED(".Special",()=>{
        ROUTE("",SIGNINPAGE,"FORGOTPASSWORDPAGE");
    });
    THEMER(".Email");
    const STYLES=`
        .appLogo{
            width: 140px;
            height: 140px;
            background-color: transparent;
            margin-left: auto;
            margin-right: auto;
            margin-top: 30%;
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
            text-align:right;
            margin-right:10%;
        }
        .Special{
            color: forestgreen;
        }
    `;
    INJECTCSS(STYLES);
};