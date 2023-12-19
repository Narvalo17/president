import {time} from "./date.js"
document.addEventListener("DOMContentLoaded", e =>{
  
    time.printout();

    let xml, xmlhttp, xmlDoc, vliste;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "president.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML; 
    console.log(xmlDoc);
    vliste=String("");
    xml = xmlDoc.getElementsByTagName("president");
    
     console.log(xml[0].childNodes[1]);
    for (let i = 0; i < xml.length; i++) {
    
        //variables pour les noeuds
                const  image = xml[i].getElementsByTagName("image")[0].getAttribute("path");
                const  nom = xml[i].getElementsByTagName("nom")[0].childNodes[0].nodeValue;
                const  mandat = xml[i].getElementsByTagName("mandat")[0].childNodes[0].nodeValue;
                const  naissance = xml[i].getElementsByTagName("naissance")[0].childNodes[0].nodeValue;
                const  status = xml[i].getElementsByTagName("status")[0].childNodes[0].nodeValue;
    
        //ajout de chaque propriété dans boucle
                console.log(nom+" "+mandat+" "+naissance+" "+status);

                    vliste +=`
                    <li>
                    <figure>
                       <li><image src="${image}" alt="${nom}"></li>
                    <figcaption>
                       <ul>
                           <li><strong>nom</strong> : ${nom}</li>
                           <li><strong>mandat</strong> : ${mandat}</li>
                           <li><strong>naissance</strong> : ${naissance}</li>
                           <li><strong>status</strong> :${status}</li>
                       </ul>
                       
                   </figcaption>
                </figure>
               </li>`
                    
                       
                    
                    
                   
                //stockage dans un tableau
                   let  myStock=[];
                    myStock.push(nom,mandat,naissance,status);
                    console.log(JSON.stringify(myStock));
                    localStorage.setItem("stock", myStock)
           
         } 
  
  
    document.querySelector("ul").innerHTML = vliste; 
    
})