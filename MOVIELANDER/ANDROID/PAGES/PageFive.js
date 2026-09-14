const PROFILEPAGE=()=>{
    DISPLAY("",`
        <header>
            <img class="LeftIcon" > 
            <h1 class="RightText">Profile</h1>
        </header>
        <div class="DataDivHolder">
            <div class="ProfileDataHolder" ></div>
            <br>
            <h1>PREFERENCES</h1>
            <br>
            <button>Settings</button>
            <br><br>
            <button>Notifications</button>
            <br><br>
            <button>Premium</button>
            <br><br>
            <button>Contact Us</button>
            <br><br>
        </div>
        
    `);
    ICONTHEME(".LeftIcon",WHITEBACKICON,BLACKBACKICON);

    const LeftIcon=document.querySelector(".LeftIcon");
    LeftIcon.addEventListener("click",()=>{
        ROUTE("",HOMEPAGE,"HOMEPAGE");
    });

    const STYLES=`

        .RightText{
            margin-right: 2%;
        }

        .LeftIcon{
            width: 20px;
            height: 20px;
            margin: auto;
            margin-left: 2%;
        }

        header{
            background: transparent;
        }

        .DataDivHolder{
            position: absolute;
            width: 100%;
            height: auto;
            top: 50px;
            bottom: 0;
            overflow: hidden;
            overflow-y: auto;
            background: transparent;
        }
    `;
    INJECTCSS(STYLES);
};