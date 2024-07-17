let slider=document.querySelector("#slider")
let nextButton=document.querySelector("#nextBtn")
let provButton=document.querySelector("#prevBtn")
let end=document.querySelector("#end")

let images =["https://img.freepik.com/free-photo/tiger-looking-with-open-mouth_1150-18083.jpg?t=st=1721128879~exp=1721132479~hmac=810fb54b28dca5e8eefbc5099d4338066c20fdee6cc7abeafff1c518ef4f6279&w=360" ,
    "https://img.freepik.com/free-photo/free-kangaroo-wild_23-2151639059.jpg?t=st=1721129008~exp=1721132608~hmac=5e27e3e0995ad3ece6f088a917084fe4d5b4ed2e11592f14851d1f16a6c96154&w=360" ,
    "https://img.freepik.com/free-psd/close-up-horse-isolated_23-2151388163.jpg?t=st=1721129072~exp=1721132672~hmac=7bf9b9674cd08471ed59c687da9c0ec46443301f9f5856198df67db327160ea1&w=360" ,
    "https://img.freepik.com/free-photo/lion-pride-dry-forest_23-2151661720.jpg?t=st=1721130443~exp=1721134043~hmac=df26fbd635700930cd541d1c568857c59d02c4faed7b86c93ac6c85c0e23bd4c&w=900"

]

let indexNumber=0

slider.src = images[indexNumber]

nextButton.addEventListener("click" , function(){
    if(indexNumber < images.length -1){

        indexNumber++
        slider.src=images[indexNumber]
    }

    if(indexNumber == images.length -1){
        // alert("dhamaadka aya la gaaray")
        end.innerHTML = "Dhamaadka aya la gaaray"
        end.style.backgroundColor = "white"
        end.style.color="red"

    }
})
provButton.addEventListener("click" , function(){
    if(indexNumber >0){

        indexNumber--
        slider.src=images[indexNumber]
        end.innerHTML= "Explore difference a lion"
        end.style.backgroundColor = ""
        end.style.color=""

        
    }

})