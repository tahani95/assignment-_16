const select = document.getElementsByTagName('select')[0];
const submit = document.getElementById('submit');
const content = document.getElementById('content');

select.addEventListener('change',checkOptions);
submit.addEventListener('click',changeColor);


function checkOptions(event) {
    event.preventDefault();
    if (event.target.value !=""){
        submit.classList.remove('disabled');
    }
    else {
        content.className= `content `;
        submit.classList.add('disabled');
      function changeColor(event)
{
    const content = document.getElementById('content');
    event.preventDefault();
    
    
    if (select.value !== ""){
        content.className= `content ` + select.value;
    }
    
