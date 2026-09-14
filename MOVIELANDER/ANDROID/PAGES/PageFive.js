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

    const STYLES=`

        .RightText{
            margin-right: 2%;
        }

        .LeftIcon{
            width: 30px;
            height: 30px;
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