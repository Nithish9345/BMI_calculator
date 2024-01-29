
const bmiCal = () => {


    let height = document.getElementById("val1")
    let weight = document.getElementById("val2")
    height = height.value
    weight = weight.value

    const popUpBox = document.getElementById("memebox")
    const box = document.getElementById("meme")
    const results = document.getElementById("result")
    const pic =  document.getElementById("mimg")
    
    console.log(height,weight)
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    
    if((height === '') || (height < 1) || (isNaN(height))){
        //NaN !== NaN
        alert("Please provide a valid height")
        
    } else if (weight === '' || weight < 1 || isNaN(weight)){
        alert("Please provide a valid Weight")
    } else {
    //calculate BMI
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //display the results
    
    const catagorie = ["under weigth", "over weight", "Normal weight"]
    const imgList = ["images/john-dance.gif", "images/over_weight.gif", "images/normal_weight.gif"]
    const choose = bmi < 18.6 ? catagorie[0] : bmi > 24.9 ? catagorie[1] : catagorie[2]
    const imgchoose = bmi < 18.6 ? imgList[0] : bmi > 24.9 ? imgList[1] : imgList[2]
    popUpBox.style.display = "flex"
    box.style.display = "flex"
    pic.style.display = "flex"
    const innerBox = document.getElementById("inner")
    innerBox.style.display = "flex"

    pic.src = imgchoose

    results.textContent = `${bmi} kg/m2 You are ${choose}`
    }   

    
}




function back()
{
    location.reload()
}
