const PROFILEPAGE=()=>{
    DISPLAY("",`
        <header>
            <img class="LeftIcon" > 
            <h1 class="RightText">Profile</h1>
        </header>
        <div class="DataDivHolder">
            <div class="ProfileDataHolder">
                <div class="ProfileImageHolder">
                    <img class="ProfileIcon" src="${MOVIELANDERNEWLOGO}">
                </div>
                <div class="UserDataHolder">
                </div>
                <div class="AppMovieData">
                    <p>Hours</p>
                    <p>Hours</p>
                    <p>Hours</p>
                </div>
            </div>
            <br><br>
            <h1>PREFERENCES</h1>
            <br>
            <button>Community</button>
            <br><br>
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

        .ProfileDataHolder{
            position: relative;
            background: transparent;
            width: 95%;
            height: 250px;
            margin: auto;
            border-radius: 8px;
            display:inline-flex;
            border:1px solid #cdcdcd50;
        }

        .ProfileIcon{
            width: 50%;
            margin-left: 1%;
            height: 100%;
        }

        .ProfileImageHolder{
            position: relative;
            width: 45%;
            height: 75%;
            margin: auto;
            background: transparent;
            display: inline-flex;
            margin-left: 1%;
            margin-top: 1%;
            border-radius: 10px;
        }

        .UserDataHolder{
            position: relative;
            width: 50%;
            height: 75%;
            margin: auto;
            background: transparent;
            display: inline-flex;
            margin-left: 1%;
            margin-top: 1%;
            border-radius: 10px;
            border:1px solid #cdcdcd50;
        }

        .AppMovieData{
            position: absolute;
            width: 96%;
            height: 50px;
            background: transparent;
            bottom: 2%;
            left: 1.5%;
            border-radius: 10px;
            display: inline-flex;
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