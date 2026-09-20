const PROFILEPAGE=(PROFILEDIV)=>{
    DISPLAY(PROFILEDIV,`
        <header class="profileBar">
            <div class="profile-image">

            </div>

            <div class="profileBar-info">
                <p class="Bar-info">Your Username</p>
                <p class="Bar-info">Followers: 43</p>
                <p class="Bar-info">Following: 22</p>
            </div>

            <button class="edit-profile-btn">
                Edit
            </button>

            <div class="watching-details">
                <div class="watched-display" id="watched-movies">
                    <p>Watched</p>
                    <p>33</p>
                </div>
                <div class="watched-display" id="watched-hours">
                    <p>Hours</p>
                    <p>512</p>
                </div>
                <div class="watched-display" id="premium-days">
                    <P>Premium</P>
                    <p>12</p>
                </div>
            </div>
        </header>

        <div class="profile-more">
            <div class="more-items">
                <img class="LeftIcon" id="streak" />
                <p class="Text-Left">Streak</p>
                <p class="Text-Right">14</p>
            </div>
             
        </div>
    `);

   ICONTHEME("#streak",WHITESHOPPINGCART,BLACKSHOPPINCARTICON);  
   
    const STYLES=`
        .profileBar{
            background: #0762b2;
            top: 0;
            width: 100%;
            height: 27%;
            position: relative;
        }
        .profile-image{
            width: 100px;
            height: 100px;
            background: red;
            border-radius: 50px;
            left: 7%;
            top:7%;
            position: relative;
        }
        .profileBar-info{
            background: transparent;
            width: auto;
            position: absolute;
            height: auto;
            left: 40%;
            top: 15%;
        }
        .Bar-info{
            text-align: left;
            margin-bottom: 4%;
            font-size: 16px;
        }
        .watching-details{
            position: absolute;
            background-color: transparent;
            width: 95%;
            left: 2.5%;
            height: 50px;
            bottom: 0;
            display: inline-flex;
            border-bottom: 1.5px solid white;
        }
        .watched-display{
            margin: auto;
        }
        .edit-profile-btn{
            position: absolute;
            width: 15%;
            height: 25px;
            font-size: 15px;
            border-radius: 7px;
            top: 17%;
            right: 5%;
        }
        .profile-more{
            width: 95%;
            height: auto;
            background: purple;
            margin-top: 4%;
            margin-left: 2.5%;
            display: block;
        }
        .more-items{
            width: 100%;
            background: pink;
            height: 50px;
            border-radius: 5px;
            margin-bottom: 4%;
            display: inline-flex;
            text-algn: left;
        }
        .Text-Left{
            margin-right: 50%;
        }
    `;
    INJECTCSS(STYLES);
};               
PROFILEPAGE()