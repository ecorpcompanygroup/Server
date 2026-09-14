const PROFILEPAGE=()=>{
    DISPLAY("",`
        <header>
            <img class="LeftIcon" > 
            <h1 class="RightText">Profile</h1>
        </header>
        <div class="DataDivHolder">
        
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
            background: red;
        }
    `;
    INJECTCSS(STYLES);
};