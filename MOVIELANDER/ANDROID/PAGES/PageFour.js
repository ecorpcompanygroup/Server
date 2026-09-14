const HOMEPAGE=()=>{
    DISPLAY("",`
        <div class="HomeDesignPage">

            <div class="HomeDiv" id="homeholder"></div>
            <div class="CategoriesDiv" id="categoriesholder"></div>
            <div class="ProfileDiv" id="profileholder"></div>
        
        </div>

        <footer class="RoundFooter">

            <a href="#homeholder" class="Icon"><img id="Homepage"></a>
            <a href="#categoriesholder" class="Icon"><img id="Categoriespage"></a>
            <a href="#profileholder" class="Icon"><img id="UserProfile"></a>
        
        </footer>
        
    `);
    ICONTHEME("#Homepage",WHITEHOMEICON,BLACKHOMEICON);
    ICONTHEME("#Categoriespage",WHITEGRIDICON,BLACKGRIDICON);
    ICONTHEME("#UserProfile",WHITEUSERICON,BLACKUSERICON);

    const PROFILEDIV=document.querySelector(".ProfileDiv")
    CLICKED("#UserProfile",()=>{
        PROFILEPAGE(PROFILEDIV);
    })
    
    const STYLE=`
        .RoundFooter{
            background: #ffffff30;
            border:1px solid #ffffff30;
            width:90%;
            left: 5%;
            bottom: 20px;
            border-radius: 50px;
        }

        .HomeDesignPage{
            position: absolute;
            width: 100%;
            height: auto;
            top: 0;
            bottom: 0;
            overflow: hidden;
            overflow-y: auto;
            background: transparent;
        }

        .HomeDiv{
            width: 100%;
            position: absolute;
            height: 100%;
            top: 0px;
            background-color: #576490;
            left: 0;
        }
        .CategoriesDiv{
            width: 100%;
            position: absolute;
            height: 100%;
            top: 0px;
            background-color: #076c2a;
            left: 100%;
        }
        .ProfileDiv{
             width: 100%;
            position: absolute;
            height: 100%;
            top: 0px;
            background-color: transparent;
            left: 200%;
        }
    `;
    INJECTCSS(STYLE);
};
HOMEPAGE();