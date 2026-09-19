const INSERTDATA=(LINK,NAME,HEADERS,INFO,CALLBACK)=>{
    CAPITALIZED(NAME,(NAMEDATA)=>{
        const DATA={
            "spreadsheetUrl":LINK,
            "sheetName":NAMEDATA,
            "Headers":HEADERS,
            "Data":INFO
        };
        FETCH(INSERTDATAAPI,DATA,(Data)=>{
            CALLBACK(Data);
        });
    });
};
const GETDATA=(LINK,NAME,CALLBACK)=>{
    CAPITALIZED(NAME,(NAMEDATA)=>{
        const DATA={
            "spreadsheetUrl":LINK,
            "sheetName":NAMEDATA,
        };
        FETCH(GETDATAAPI,DATA,(Data)=>{
            REDUX(Data,(Element)=>{
                CALLBACK(Element);
            });
        });
    });
}; 
const UPDATEDATA=(LINK,NAME,ID,INFO,CALLBACK)=>{
    CAPITALIZED(NAME,(NAMEDATA)=>{
        const DATA={
            "action":"update",
            "spreadsheetUrl":LINK,
            "sheetName":NAMEDATA,
            "ID":ID,
            "Data":INFO
        };
        FETCH(UPDATEDATAAPI,DATA,(Data)=>{
            CALLBACK(Data);
        });
    });
}; 
const PAYTOTA=(EMAIL,NAME,NUMBER,AMOUNT,CALLBACK)=>{
    const DATA={
        "email":EMAIL,
        "phone":NUMBER,
        "name":NAME,
        "price":AMOUNT
    };
    FETCH(PAYTOTAONEAPI,DATA,(Data)=>{
        SESSIONSTORE("PaymentLink",Data.checkout_url);
        CALLBACK(Data.checkout_url);
    });
};
const SENDEMAIL=(LINK,EMAIL,SUBJECT,MESSAGE,CALLBACK)=>{
    const DATA={
        "recipientEmail":EMAIL,
        "subject":SUBJECT,
        "body":MESSAGE        
    };
    FETCH(LINK,DATA,(Data)=>{
        CHECK(Data.status === "success",()=>{
            CALLBACK(Data);
        });
    });
};
