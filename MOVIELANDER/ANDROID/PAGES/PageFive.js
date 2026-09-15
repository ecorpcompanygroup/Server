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

            <div class="watching-details">
                <p>hiii</p>
            </div>

        </header>
    `);
   
   
    const STYLES=`
        .profileBar{
            background: #0762b2;
            top: 0;
            width: 100%;
            height: 30%;
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
            width: 200px;
            position: absolute;
            height: auto;
            right: 1%;
            top: 13%;
        }
        .Bar-info{
            text-align: left;
            margin-bottom: 4%;
            font-size: 16px;
        }
        .watching-details{
            position: absolute;
            background-color: red;
            width: 90%;
            left: 5%;
            height: 50px;
            bottom: 3%;
        }
    `;
    INJECTCSS(STYLES);
};