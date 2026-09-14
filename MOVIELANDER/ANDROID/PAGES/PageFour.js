const HOMEPAGE=()=>{

    DISPLAY("",`
        <div class="HomeDesignPage">
        
        </div>

        <footer class="RoundFooter">

            <img class="Icon" src="${WHITEGRIDICON}">

            <img class="Icon" src="${WHITEMOVIEICON}">

            <img id="UserProfile" class="Icon" src="${WHITEPROFILEICON}">
        
        </footer>
        
    `);

    const UserProfile=document.querySelector("#UserProfile");

    UserProfile.addEventListener("click",()=>{

        ROUTE(" ",PROFILEPAGE,"HOMEPAGE");

    });

    const STYLE=`
        .RoundFooter{
            background: transparent;
            border:1px solid #FFFFFF30;
            width:90%;
            left: 5%;
            bottom: 20px;
            border-radius: 10px;
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

    `;
    INJECTCSS(STYLE);
};