const CATERGORYPAGE=()=>{
    DISPLAY("",`
        <header>
            <img class="LeftIcon" > 
            <h1 class="RightText">Catergory</h1>
        </header>
        <div class="DataDivHolder">
        
        </div>
        
    `);
    ICONTHEME(".LeftIcon",WHITEBACKICON,BLACKBACKICON);
    CLICKED(".LeftIcon",()=>{
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