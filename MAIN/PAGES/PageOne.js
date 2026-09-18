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
const DESPACEDWORDS = (TEXT,CALLBACK) => {
    const originalWord = TEXT.split("%20").join(" ");
    CALLBACK(originalWord);
};
const DEVICE = () => {
    const deviceInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screen: {
            width: screen.width,
            height: screen.height,
            availWidth: screen.availWidth,
            availHeight: screen.availHeight,
            colorDepth: screen.colorDepth,
            pixelDepth: screen.pixelDepth,
        },
        online: navigator.onLine,
        memory: navigator.deviceMemory ?? "Unknown",
        cores: navigator.hardwareConcurrency ?? "Unknown",
    };
    JSONIFICATION(deviceInfo,(Ddata)=>{
        LOCALSTORE("Device", Ddata);
    });
    return deviceInfo;
};
const DEJSONIFICATION=(DATA,CALLBACK)=>{
    const MYDATATA = JSON.parse(DATA);
    CALLBACK(MYDATATA);
};
const SOURCEREF=(HOLDER,SOURCE)=>{
    HOLDER.href=SOURCE||"#";
};
const SOURCED=(HOLDER,SOURCE)=>{
    HOLDER.src=SOURCE||"#";
};
const SESSIONSTORE=(NAME,DATA)=>{
    sessionStorage.setItem(NAME,DATA)
};
const SESSIONGET=(NAME,CALLBACK)=>{
    const DATA = sessionStorage.getItem(NAME);
    CALLBACK(DATA);
};
const SESSIONDELETE=(NAME)=>{
    sessionStorage.removeItem(NAME);
};
const SESSIONCLEAR=()=>{
    sessionStorage.clear();
};
const SCREENWIDTH=(CALLBACK)=>{
    const screenWidth = window.screen.width;
    CALLBACK(screenWidth);
};
const SCREENHEIGHT=(CALLBACK)=>{
    const screenheight = window.screen.height;
    CALLBACK(screenheight);
};
const REPEATER=(TIME,CALLBACK)=>{
    setInterval(() => {
        CALLBACK();
    }, TIME||500);
};
const RELOAD=()=>{
    location.reload();
};
const REDUX=(DATA,CALLBACK)=>{
    DATA.forEach(element => {
        CALLBACK(element);
    });
};
const RANDOMCODE = (CALLBACK) => {
  const code = Math.floor(100000 + Math.random() * 900000);
  if (typeof callback === "function") {
    CALLBACK(code);
  };
};
const PROTECT = () => {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  ["copy", "cut", "paste"].forEach((event) => {
    document.addEventListener(event, (e) => {
      e.preventDefault();
    });
  });
  document.addEventListener("selectstart", (e) => {
    e.preventDefault();
  });
  document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    if (
      (e.ctrlKey || e.metaKey) &&
      ["c", "x", "a", "u", "s", "p"].includes(key)
    ) {
      e.preventDefault();
    }
    if (
      e.key === "F12" ||
      ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c"].includes(key))
    ) {
      e.preventDefault();
    }
  });
  document.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });
  document.body.style.userSelect = "none";
  document.body.style.webkitUserSelect = "none";
  document.body.style.msUserSelect = "none";
};
const PARTISION = (TEXT,CALLBACK) => {
  if (typeof TEXT !== 'number' || !Number.isFinite(TEXT)) {
    console.log("Input must be a valid number.");
    CALLBACK('');
    return;
  };
  const formatted = TEXT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (typeof callback === 'function') {
    CALLBACK(formatted);
  };
};
const OPERATINGSYSTEM = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let os = "Unknown OS";
    let deviceType = "Unknown Device";
    let deviceName = "Unknown Device";
    if (/windows phone/i.test(userAgent)) {
        os = "Windows Phone";
        deviceType = "Mobile";
    } 
    else if (/win/i.test(userAgent)) {
        os = "Windows";
        deviceType = "Desktop";
    } 
    else if (/android/i.test(userAgent)) {
        os = "Android";
        deviceType = /mobile/i.test(userAgent) ? "Mobile" : "Tablet";
        if (/samsung/i.test(userAgent)) deviceName = "Samsung Device";
        else if (/huawei/i.test(userAgent)) deviceName = "Huawei Device";
        else if (/xiaomi/i.test(userAgent)) deviceName = "Xiaomi Device";
        else deviceName = "Android Device";
    } 
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        os = "iOS";
        if (/iPhone/.test(userAgent)) {
            deviceType = "Mobile";
            deviceName = "iPhone";
        } 
        else if (/iPad/.test(userAgent)) {
            deviceType = "Tablet";
            deviceName = "iPad";
        } 
        else {
            deviceType = "Mobile";
            deviceName = "iOS Device";
        }
    } 
    else if (/Macintosh/i.test(userAgent)) {
        os = "MacOS";
        deviceType = "Desktop";
        deviceName = "Mac";
    } 
    else if (/Linux/i.test(userAgent)) {
        os = "Linux";
        deviceType = "Desktop";
        deviceName = "Linux Device";
    }
    const deviceData = {
        os,
        deviceType,
        deviceName,
        userAgent,
        detectedAt: new Date().toISOString()
    };
    localStorage.setItem("OperatingSystem", JSON.stringify(deviceData));
    return deviceData;
};
const MONTHSTIME = (DATE,CALLBACK) => {
    const now = new Date();
    const date = new Date(DATE);
    const oneMonthAgo = new Date(now);
    oneMonthAgo.setMonth(now.getMonth() - 1);
    const isValid = date >= oneMonthAgo && date <= now;
    if (typeof callback === "function") {
        CALLBACK(isValid);
    } else {
        console.log("Provided callback is not a function.");
    };
};
const LOWWERIZED=(TEXTS,CALLBACK)=>{
    const capitalized = TEXTS.toUpprCase();
    CHECK(typeof TEXTS !== 'string',()=>{
        console.log("Input must be a string");
    });
    CONDITION(typeof CALLBACK === 'function',()=>{
        CALLBACK(capitalized);
    },()=>{
        console.log("Callback is not a function");
    });
};
const LOCATOR=(PATH)=>{
    window.location.href = PATH;
};
const LOCALSTORE=(NAME,DATA)=>{
    localStorage.setItem(NAME,DATA);
};
const LOCALGET=(NAME,CALLBACK)=>{
    const DATA = localStorage.getItem(NAME);
    CALLBACK(DATA);
};
const LOCALDELETE=(NAME)=>{
    localStorage.removeItem(NAME);
};
const LOCALCLEAR=()=>{
    localStorage.clear();
};
const LINKTRACKER = (PAGES, CALLBACK) => {
  const query = window.location.search.slice(1).trim();
  const path = window.location.pathname.replace(/^\/+/, "").trim();
  const route = (query || path || "home").toLowerCase();
  if (PAGES[route]) {
    PAGES[route]();
  } else {
    CALLBACK();
  };
};
const JSONREMOVER = (DATA,ITEM,CALLBACK) => {
    try {
        const CurrentData =Array.isArray(DATA)?DATA:[DATA];
        const Result =CurrentData.filter(data => {
            return JSON.stringify(data) !==JSON.stringify(ITEM);
        });
        CALLBACK(Result);
    } catch {
        CALLBACK([]);
    };
};
const JSONIFICATION=(DATA,CALLBACK)=>{
    let DATATA = JSON.stringify(DATA);
    CALLBACK(DATATA);
};
const JSONADDER = (DATA,NEWDATA,CALLBACK) => {
    try {
        let CurrentData =Array.isArray(DATA)?DATA:[DATA];
        let AddedData =Array.isArray(NEWDATA)?NEWDATA:[NEWDATA];
        const Result = [...CurrentData,...AddedData];
        CALLBACK(Result);
    } catch {
        CALLBACK([]);
    };
};
const GROUP = (DATA,CALLBACK) => {
  let parsedData;
  try {
    parsedData = typeof data === "string" ? JSON.parse(DATA) : DATA;
  } catch {
    parsedData = [];
  };
  if (!Array.isArray(parsedData)) {
    CALLBACK([]);
    return;
  };
  const idMap = new Map();
  parsedData.forEach(item => {
    const id = item.ID;
    if (idMap.has(id)) {
      idMap.get(id).quantity += 1;
    } else {
      const newItem = { ...item, quantity: 1 };
      idMap.set(id, newItem);
    };
  });
  const finalArray = Array.from(idMap.values());
  CALLBACK(finalArray);
};
const GETINDEX = (DATABASE, STORE, CALLBACK) => {
    let completed = false;
    const finish = (data) => {
        if (completed) return;
        completed = true;
        CALLBACK(data);
    };
    try {
        const request = indexedDB.open(DATABASE);
        request.onerror = () => {
            finish(null);
        };
        request.onsuccess = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(STORE)) {
                db.close();
                finish(null);
                return;
            }
            const transaction = db.transaction(STORE, "readonly");
            const objectStore = transaction.objectStore(STORE);
            const getRequest = objectStore.getAll();
            getRequest.onsuccess = () => {
                const records = getRequest.result;
                db.close();
                finish(records);
            };
            getRequest.onerror = () => {
                db.close();
                finish(null);
            };
            transaction.onerror = () => {
                db.close();
                finish(null);
            };
        };
    } catch (error) {
        finish(null);
    }
};
const FUNCTIONED=(ELEMENT,ASSIGNMENT,CALLBACK)=>{
    const HOLDER=document.querySelector(ELEMENT);
    HOLDER.addEventListener(ASSIGNMENT,()=>{
        CALLBACK(HOLDER);
    });
};