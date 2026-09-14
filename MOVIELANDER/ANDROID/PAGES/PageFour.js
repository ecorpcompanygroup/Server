const HOMEPAGE=()=>{
    DISPLAY("",`
        <div class="HomeDesignPage">

            <h1>Movies</h1>
        
        </div>

        <footer class="RoundFooter">

            <a href="#homeholder" class="Icon"><img id="CatergoryPage"  src="${WHITEGRIDICON}"></a>
            <a href="#categoriesholder" class="Icon"><img id="SavedMovies" src="${WHITEMOVIEICON}"></a>
            <a href="#profileholder" class="Icon"><img id="UserProfile" src="${WHITEPROFILEICON}"></a>
        
        </footer>
        
    `);
    
    
    const STYLE=`
        .RoundFooter{
            background: #FFFFFF30;
            border:1px solid #FFFFFF30;
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

    `;
    INJECTCSS(STYLE);
};
HOMEPAGE();