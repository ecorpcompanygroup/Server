const HOMEPAGE=()=>{

    DISPLAY("",`
        <div class="H">
        
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
    `;
    INJECTCSS(STYLE);
};