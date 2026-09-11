const INJECTCSS = (STYLES) => {
  const style = document.createElement("style");
  style.type = "text/css";
  style.textContent = STYLES;
  document.head.appendChild(style);
};
const ROUTE = (NEWPAGE, FUNCTION, FUNCTIONBACK) => {
    sessionStorage.setItem(
        "PreviousPage",
        FUNCTIONBACK.toString()
    );
    const data = FUNCTION();
    if (NEWPAGE) {
        history.pushState(
            { data },
            "",
            ""
        );
    } else {
        history.replaceState(
            { data },
            "",
            ""
        );
    }
    window.addEventListener("popstate", () => {
        const previousPageFunction =
            sessionStorage.getItem("PreviousPage");
        if (!previousPageFunction) {
            return;
        }
        try {
            const func =
                new Function(
                    "return " + previousPageFunction
                )();
            if (typeof func === "function") {
                func();
            }
        } catch (error) {
            console.error(
                "Failed to execute PreviousPage:",
                error
            );
        }
    });
};
const DISPLAY=(ELEMENT,DATA)=>{
    const BODY=document.querySelector("body");
    if (ELEMENT) {
        ELEMENT.innerHTML=DATA;
    } else {
        BODY.innerHTML=DATA;
    };
};
const THEMER=(ELEMENT)=>{
    if (sessionStorage.getItem("theme") === "dark" ) {
        ELEMENT.style.color="#FFFFFF";
    } else {
        ELEMENT.style.color="#000000";
    };
};
const CONDITION=(TERMS,CALLBACK,CALLBACKONE)=>{
    if (TERMS) {
        CALLBACK();
    } else {
        CALLBACKONE();
    };
};
const CHECK=(TERMS,CALLBACK)=>{
    if (TERMS) {
        CALLBACK();
    };
};
const ICONTHEME=(NAME,LIGHT,DARK)=>{
    const ELEMENT=document.querySelector(NAME);
    if (sessionStorage.getItem("theme") === "dark" ) {
        ELEMENT.src=LIGHT;
    } else {
        ELEMENT.src=DARK;
    };
};