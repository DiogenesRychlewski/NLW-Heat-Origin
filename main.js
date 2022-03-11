const LinksSocialMedia = {

    github: "DiogenesRychlewski",
    youtube: "UCUbXtN8_lqCOi_hos-wnSGw",
    facebook: "diogenes.rychlewski",
    instagram: "dih_rychlewski",
    twitter: "dih_rychlewski"

   }

   function changeSocialMediaLinks(){

       for (let li of socialLinks.children){
       const social = li.getAttribute("class")
       li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

       
       }
   }
   
   changeSocialMediaLinks()