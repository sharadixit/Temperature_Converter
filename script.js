const calculateTemp = () => {
  
  const numberTemp = document.getElementById('temp').value;
  // console.log(numberTemp);
  
  const tempSelected = document.getElementById('temp_diff');
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
  
  const celToFah = (cel) => {
       let fahr = Math.round((cel * 9/5) + 32);
       return fahr;
  }

  const ferToCel = (fehr) => {
    let cels = Math.round((fehr - 32) * 5/9);
    return cels;
  }
  let result;
  
  if(valueTemp =='cel'){
    result = celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML = `= ${result}° Fahrenheit`;
  }else{
    result = ferToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML = `= ${result}° Celsius`
  }
  
  
}