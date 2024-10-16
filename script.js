const myHeader = document.getElementById('myHeading')
const myButton = document.getElementById('myButton')
const myTextInput = document.getElementById('myTextInput')
const myResetButton = document.getElementById('myResetButton')

// myHeader.addEventListener('click', ()=>{
//     myHeader.style.color="red";
// })

myButton.addEventListener('click', ()=>{
    myHeader.style.color=myTextInput.value;
})

myResetButton.addEventListener('click', ()=>{
    myHeader.style.color="black";
})