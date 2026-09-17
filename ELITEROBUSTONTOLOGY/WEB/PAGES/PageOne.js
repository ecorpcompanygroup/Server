const HOMEPAGE=()=>{
    DISPLAY("",`
        <br>
        <header>

            <img class="LeftIcon" src="${ELITEROBUSTONTOLOGYLOGO}" /> 

            <h1>Elite Robust Ontology</h1>

            <img id="ContactUS" class="RightIcon" src="${WHITEHOMEICON}" /> 
        
        </header>
        
        
    `);

    ICONTHEME("#ContactUS",WHITEPHONEICON,BLACKPHONEICON);

    const STYLES=`
        
        header{
            background:transparent;
        }
    
    `;

    INJECTCSS(STYLES);

}
HOMEPAGE();