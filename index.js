// select all the input tags 
const amount = document.querySelector("#loan-amount")
const peroid = document.querySelector("#loan-tenure")
const interest = document.querySelector("#loan-interest")
const btn = document.querySelector(".claculator-btn")
const tenure = document.querySelector("#tenure")

const emi = document.querySelector("#loan-emi")
const loaninterest = document.querySelector(".loan-interestRate")
const total = document.querySelector(".total-amountPaid")
const yearbtn = document.querySelector("#year")
const monthbtn = document.querySelector("#month")


const button = document.querySelectorAll("button")

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {
        if (e.target.matches("#month")) {
            let m = peroid.value * 12
            peroid.value = m

        }
        else if (e.target.matches("#year")) {
            let y = peroid.value
            if (y > 1) {
                let m = peroid.value / 12
                peroid.value = m

            }

        }

    })
}

yearbtn.addEventListener("click", () => {
    yearbtn.classList.add("acc")
    monthbtn.classList.remove("acc")
})

monthbtn.addEventListener("click", () => {
    monthbtn.classList.add("acc")
    yearbtn.classList.remove("acc")
})



btn.addEventListener("click", () => {

    if (amount.value !="" && peroid.value !="" && interest.value !="") {
        
        if (yearbtn.classList.contains("acc")) {
            let p = amount.value;
            //how many monthh or year you can payable 
            let n = peroid.value * 12;
            //how many interest payable 
            let r = interest.value / 1200
            let condtionone = p * r
            let condtiontwo = Math.pow((1 + r), n)
            let condtiontree = condtiontwo - 1
            let mutipleoneandtwo = condtionone * condtiontwo
            let dividetwoandthree = mutipleoneandtwo / condtiontree
    
            emi.innerText ="₹"+ Math.round(dividetwoandthree).toLocaleString()
    
            let final = dividetwoandthree
    
            let totalamount = final * Number(n)
            total.innerText = "₹"+Math.round(totalamount).toLocaleString()
    
            let totalinterest = totalamount - p
            loaninterest.innerText = "₹"+Math.round(totalinterest).toLocaleString()
    
            
        }

        else{
            let p = amount.value;
            //how many monthh or year you can payable 
            let n = peroid.value;
            //how many interest payable 
            let r = interest.value / 1200
            let condtionone = p * r
            let condtiontwo = Math.pow((1 + r), n)
            let condtiontree = condtiontwo - 1
            let mutipleoneandtwo = condtionone * condtiontwo
            let dividetwoandthree = mutipleoneandtwo / condtiontree
    
            emi.innerText = "₹" + Math.round(dividetwoandthree).toLocaleString()
    
            let final = dividetwoandthree
    
            let totalamount = final * Number(n)
            total.innerText = "₹" + Math.round(totalamount).toLocaleString()
    
            let totalinterest = totalamount - p
            loaninterest.innerText = "₹" + Math.round(totalinterest).toLocaleString()
        }
    }
})


