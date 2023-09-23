function getInputFieldValueById(InputFieldId)
{
    const inputField =document.getElementById(InputFieldId);
    const inputFieldValueString =inputField.value;
    const inputFieldValue =parseFloat(inputFieldValueString);
     inputField.value="";
    return inputFieldValue;
 
}

function getTextFieldValueById(elementId)
{
    const textElement =document.getElementById(elementId);
    const textElementValueString=textElement.innerText;
    const textElementValue =parseFloat(textElementValueString);
    return textElementValue;


}

function setTextElementvalueById(elementId ,newValue)
{
  const textElement =document.getElementById(elementId)
  textElement.innerText =newValue;

}