let tablinks=document.querySelectorAll(".tablinks");
let tabcontents=document.querySelectorAll(".tabcontents");
 const opentab=(tabname)=>{
    for(tablink of tablinks)
        {
            tablink.classList.remove("activelink");
        }
        for(tabcontent of tabcontents)
            {
                tabcontent.classList.remove("activetab");
            }
           
                event.currentTarget.classList.add("activelink");
                document.getElementById(tabname).classList.add("activetab");
            
}