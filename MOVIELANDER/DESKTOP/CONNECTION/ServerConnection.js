const CLOUDUPDATE=(ELEMENT)=>{
    const INFO=[sessionStorage.getItem("PAGE"),sessionStorage.getItem("PAGETWO"),sessionStorage.getItem("PAGETHREE"),sessionStorage.getItem("PAGEFOUR"),sessionStorage.getItem("PAGEFIVE"),sessionStorage.getItem("PAGESIX"),sessionStorage.getItem("PAGESEVEN"),sessionStorage.getItem("PAGEEIGHT"),sessionStorage.getItem("PAGENINE"),sessionStorage.getItem("PAGETEN"),sessionStorage.getItem("PAGEELEVEN"),sessionStorage.getItem("PAGETWELVE"),sessionStorage.getItem("PAGETHIRTEEN"),sessionStorage.getItem("PAGEFOURTEEN"),sessionStorage.getItem("PAGEFIFTEEN"),sessionStorage.getItem("PAGESIXTEEN"),sessionStorage.getItem("PAGESEVENTEEN"),sessionStorage.getItem("PAGEEIGHTEEN"),sessionStorage.getItem("PAGENINETEEN"),sessionStorage.getItem("PAGETWENTY"),sessionStorage.getItem("PAGETWENTYONE"),sessionStorage.getItem("PAGETWENTYTWO"),sessionStorage.getItem("PAGETWENTYTHREE")];
    UPDATEDATAAPI = "https://script.google.com/macros/s/AKfycbyY9vJAPO1fkxtxWXkVIqdb7qbwDKjMeit8JgE0Dj54KAg6coSCNVVGn9GbyqOLMBv6MA/exec";
    const DATA={
        "action":"update",
        "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/16LFihiUWEqvV5Np064F1MVQiNf9f4d12FPbiRUT73-4/edit?usp=sharing",
        "sheetName":"DESKTOP",
        "ID":"kDY6B7G8C3I8VO6MSJ05EICDLZMS7G3JG",
        "Data":INFO
    };
    fetch(UPDATEDATAAPI,{
        mode:"cors",
        method:"POST",
        body: JSON.stringify(DATA)
    })
    .then(res =>res.json())
    .then(Data =>{
        ELEMENT.innerHTML="Project Updated.";
        setTimeout(() => {
            location.reload();
        }, 2000);
    })
    .catch(Error =>{console.log(Error)})
};
fetch("./CONNECTION/Pages.json")
  .then(res => {
    if (!res.ok) {
      throw new Error(`Failed to load Pages.json: ${res.status}`);
    }
    return res.json();
  })
  .then(Data => {
    if (Data.ID !== "kDY6B7G8C3I8VO6MSJ05EICDLZMS7G3JG") {
      console.log("Invalid ID");
      return;
    }
    Data.Data.forEach(element => {
      fetch(element.PATH)
        .then(res => {
          if (!res.ok) {
            throw new Error(
              `Failed to fetch ${element.PATH}: ${res.status}`
            );
          }
          return res.text();
        })
        .then(content => {
          sessionStorage.setItem(element.NAME, content);
        })
        .catch(error => {
          console.error(`Error loading ${element.NAME}:`, error);
        });
    });
  })
.catch(error => {
  console.error("Error loading Pages.json:", error);
});