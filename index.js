import express from "express";
import ejs from "ejs";

const app=express();
const port =3000;


const d = new Date();
let day = d.getDay();


if(day===0 ||day===6){
    app.get("/",(req,res)=>{
        res.render("index.ejs",
            {dayType:"a weekend",
                advice:"it's time to have fun"
            }
         );
     });
}

else{

    app.get("/",(req,res)=>{
        res.render("index.ejs",
            {dayType:"a weekday",
                advice:"it's time to work hard"
            }
         );
     });
}



app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
})

