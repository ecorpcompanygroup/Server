const HOMEPAGE=()=>{

    DISPLAY("",`
        <div class="HomeDesignPage">

            <h1>Movies</h1>
        
        </div>

        <footer class="RoundFooter">

            <img id="CatergoryPage" class="Icon" src="${WHITEGRIDICON}">

            <img id="SavedMovies" class="Icon" src="${WHITEMOVIEICON}">

            <img id="UserProfile" class="Icon" src="${WHITEPROFILEICON}">
        
        </footer>
        
    `);

    const UserProfile=document.querySelector("#UserProfile");
    const CatergoryPage=document.querySelector("#CatergoryPage");
    const SavedMovies=document.querySelector("#SavedMovies");

    UserProfile.addEventListener("click",()=>{

        ROUTE(" ",PROFILEPAGE,"HOMEPAGE");

    });

    CatergoryPage.addEventListener("click",()=>{

        ROUTE(" ",CATERGORYPAGE,"HOMEPAGE");

    });

    SavedMovies.addEventListener("click",()=>{

        ROUTE(" ",SAVEDMOVIESPAGE,"HOMEPAGE");

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
PROFILEPAGE();