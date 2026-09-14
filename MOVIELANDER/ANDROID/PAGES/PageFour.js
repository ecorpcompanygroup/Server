const HOMEPAGE=()=>{

    DISPLAY("",`
        <div class="HomeDesignPage">
        
        </div>

        <footer class="RoundFooter">

            <h1>Catergory</h1>

            <h1>Catergory</h1>

            <h1>Catergory</h1>
        
        </footer>
        
    `);

    const STYLE=`
        .RoundFooter{
            background: red;
            width:90%;
            left: 5%;
            bottom: 5px;
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
            background: blue;
        }

    `;
    INJECTCSS(STYLE);
};