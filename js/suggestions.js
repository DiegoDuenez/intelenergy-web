/*
*
* @JS (Suggestions)
*
*/

let suggestions = [
    "Hola",
    "Adios",
    "Ejemplo",
    "otros"
]

/*
var text = $("#nosotrostext").text()
suggestions.push(text)*/


let sortedSuggestions =  suggestions.sort()

let input = document.getElementById('buscador')

input.addEventListener('keyup', (e) =>{

    removeElements()
   
    for(let i  of sortedSuggestions){
        if(i.toLowerCase().includes(input.value.toLowerCase()) && input.value  != ""){

            var text = $("#nosotrostext").text()
            //$(".list").css('display','flex')

            /*if(text.toLowerCase().includes(input.value.toLowerCase())){
                suggestions.push(text)
            }*/

            let listItem = document.createElement("div")

            listItem.classList.add("list-items")

            listItem.style.cursor = "pointer"

            listItem.setAttribute('onclick', "displayNames('" + i + "')")

           // let word = "<b>" + i.substr(0, input.value.length) + "</b>"
            
           let word = i.substr(0, input.value.length)
            word += i.substr(input.value.length)

            listItem.innerHTML = word
            document.querySelector(".list").appendChild(listItem)

        }
        /*else{
            $(".list").css('display','none')
        }*/
    }
})

function displayNames(value){
    input.value = value
}

function removeElements(){
    
    let items = document.querySelectorAll(".list-items")
    items.forEach((item)=>{
        item.remove()
    })

}
