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