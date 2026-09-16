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
const THEMER=(NAME)=>{
    const ELEMENT=document.querySelector(NAME);
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
const CLICKED=(NAME,CALLBACK)=>{
    const ELEMENT=document.querySelector(NAME); 
    ELEMENT.addEventListener("click",()=>{
        CALLBACK(ELEMENT);
    });
};
const HIDER=(TIME,CALLBACK)=>{
    setTimeout(() => {
        CALLBACK();
    }, TIME||500);
};
const WEBKIT=()=>{
    const style = document.createElement('style');
    style.textContent = `
        ::-webkit-scrollbar{
            display:none;
            width: 10px;
            background: transparent;
        }
        ::-webkit-scrollbar-thumb{
            display:block;
            width: 10px;
            height:10px;
            border:1px solid transparent;
            border-radius:50px;
            background: transparent;
        }
        audio::-webkit-media-controls-enclosure {
            border: none ;
            border-radius: 0 ;
            box-shadow: none ;
            outline: none;
        }
    `;
    document.head.appendChild(style);
};
const ZOOM = () => {
    window.addEventListener(
        "wheel",
        (e) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        },
        { passive: false }
    );
    window.addEventListener("keydown", (e) => {
        if (
            (e.ctrlKey || e.metaKey) &&
            (
                e.key === "+" ||
                e.key === "-" ||
                e.key === "=" ||
                e.key === "0"
            )
        ) {
            e.preventDefault();
        };
    });
    document.addEventListener(
        "touchmove",
        (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        },
        { passive: false }
    );
    let lastTouchEnd = 0;
    document.addEventListener(
        "touchend",
        (e) => {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        },
        false
    );
    ["gesturestart", "gesturechange", "gestureend"].forEach((event) => {
        document.addEventListener(
            event,
            (e) => {
                e.preventDefault();
            },
            { passive: false }
        );
    });
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
        viewport = document.createElement("meta");
        viewport.name = "viewport";
        document.head.appendChild(viewport);
    };
    viewport.content ="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no";
};
const TIMEZONE = () => {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offsetMinutes = new Date().getTimezoneOffset();
    const offsetHours = -offsetMinutes / 60;
    const data = {
      timeZone,
      offsetHours,
      offsetMinutes: -offsetMinutes,
      detectedAt: new Date().toISOString()
    };
    localStorage.setItem("USER_TIMEZONE", JSON.stringify(data));
    localStorage.setItem("TIMEZONE", JSON.stringify(data.timeZone));
    return data;
  } catch (error) {
    console.error("Timezone detection failed:", error);
  };
};
const STYLED=(NAME,PROPERTY,VALUE)=>{
    const ELEMENT=document.querySelector(NAME);
   ELEMENT.style[PROPERTY] = VALUE;
};
const STOREINDEX = (DATABASE, STORE, DATA, CALLBACK) => {
    try {
        const request = indexedDB.open(DATABASE, 1);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE)) {
                db.createObjectStore(STORE, {
                    keyPath: "id",
                    autoIncrement: true
                });
            };
        };
        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(STORE, "readwrite");
            const objectStore = transaction.objectStore(STORE);
            if (DATA.id !== undefined) {
                const putRequest = objectStore.put(DATA);
                putRequest.onsuccess = () => {
                    CALLBACK(DATA);
                    db.close();
                };
                putRequest.onerror = () => {
                    CALLBACK(putRequest.error.message);
                    db.close();
                };
                return;
            };
            const getAllRequest = objectStore.getAll();
            getAllRequest.onsuccess = () => {
                const existing = getAllRequest.result.find(item => {
                    const a = { ...item };
                    const b = { ...DATA };
                    delete a.id;
                    delete b.id;
                    return JSON.stringify(a) === JSON.stringify(b);
                });
                let saveRequest;
                if (existing) {
                    DATA.id = existing.id;
                    saveRequest = objectStore.put(DATA);
                } else {
                    saveRequest = objectStore.add(DATA);
                };
                saveRequest.onsuccess = () => {
                    CALLBACK(DATA);
                    db.close();
                };
                saveRequest.onerror = () => {
                    CALLBACK(saveRequest.error.message);
                    db.close();
                };
            };
            getAllRequest.onerror = () => {
                CALLBACK(getAllRequest.error.message);
                db.close();
            };
        };
        request.onerror = () => {
            CALLBACK(request.error.message);
        };
    } catch (error) {
        CALLBACK(error.message);
    };
};
const SPACEDWORDS=(TEXT,CALLBACK)=>{
    const newWord = TEXT.split(" ").join("%20");
    CALLBACK(newWord);
};