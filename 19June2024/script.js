let btn = document.querySelector(".submit")
const add = document.getElementById("add")



function submit() {
    let i1_name = document.getElementById('i1_name').value
    let i2_name = document.getElementById('i2_name').value

    let i1_qu = document.getElementById('i1_qu').value
    let i2_qu = document.getElementById('i2_qu').value
 
    let out = document.querySelector('.out')



    out.style.display = "flex-column"


    out.style.visibility = "visible"
    out.style.padding = "10px 20px 30px 40px"


    out.innerHTML = `

       <h2>Bill Form</h2>
       <br>

       

       <div>
       Item 1 =>
        <p>Name : ${i1_name}</p>
        <p>Quantity: ${i1_qu}</p>
       </div>

       <br>

       <div>
       Item 2 =>
        <p>Name : ${i2_name}</p>
        <p>Quantity: ${i2_qu}</p>
       </div>

       

       

    `

}
let box = document.querySelector('.mainBox')
let i_num =2

function add6(e){

    e.preventDefault()


    

    let itemBox =`
           <label for="i${i_num}">Item ${i_num} :</label>
            <input type="text" name="i${i_num}" id="i${i_num}" placeholder="Enter the Name of Item">
            <input type="number" name="i${i_num}" id="i${i_num}" placeholder="Enter the Quantity">
    `


    box.innerHTML += itemBox
    i_num=i_num+1
    console.log(i_num)
}



add.addEventListener('click', add6)

btn.addEventListener('click', submit)



