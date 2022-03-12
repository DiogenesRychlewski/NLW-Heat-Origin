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

   function getgitHubProfileInfos(){

        const url = `https://api.github.com/users/${LinksSocialMedia.github}`

        fetch(url)
        .then(responde => responde.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url  
            userPhoto.src = data.avatar_url
            userLogin.textContent = data.login
        })

   }

   getgitHubProfileInfos()