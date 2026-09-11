const CLOUDUPDATE=(ELEMENT)=>{
    const INFO=["ELINTON",sessionStorage.getItem("FUNCTIONS"),sessionStorage.getItem("FUNCTIONSONE"),sessionStorage.getItem("FUNCTIONSTWO"),sessionStorage.getItem("FUNCTIONSTHREE"),sessionStorage.getItem("FUNCTIONSFOUR"),sessionStorage.getItem("FUNCTIONSFIVE"),sessionStorage.getItem("STYLES"),sessionStorage.getItem("STYLESONE"),sessionStorage.getItem("STYLESTWO"),sessionStorage.getItem("STYLESTHREE"),sessionStorage.getItem("STYLESFOUR"),sessionStorage.getItem("STYLESFIVE"),sessionStorage.getItem("STYLESSIX"),sessionStorage.getItem("COMPONENTS"),sessionStorage.getItem("COMPONENTSONE"),sessionStorage.getItem("COMPONENTSTWO"),sessionStorage.getItem("COMPONENTSTHREE"),sessionStorage.getItem("COMPONENTSFOUR"),sessionStorage.getItem("COMPONENTSFIVE"),sessionStorage.getItem("APIS"),sessionStorage.getItem("CONSTANTS"),Date.now(),"Approved","Elite"];
    UPDATEDATAAPI = "https://script.google.com/macros/s/AKfycbyY9vJAPO1fkxtxWXkVIqdb7qbwDKjMeit8JgE0Dj54KAg6coSCNVVGn9GbyqOLMBv6MA/exec";
    const DATA={
        "action":"update",
        "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/16LFihiUWEqvV5Np064F1MVQiNf9f4d12FPbiRUT73-4/edit?usp=sharing",
        "sheetName":"ELINTON",
        "ID":"Elintonx1",
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
    if (Data.ID !== "Elintonx1") {
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