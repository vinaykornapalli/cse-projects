var tab = document.getElementById('tab');
var btn = document.getElementById('btn');
btn.addEventListener('click',function(){

    var req = new XMLHttpRequest();
    req.open('GET' , 'file.json');
    req.onload = function(){
        var data = JSON.parse(req.responseText);
        console.log(data);
        renderHTML(data);
    };
    req.send();

});
var i=0;
function renderHTML(data)
{
    var htmlString = "";
    
    if(i<data.length)
    {
        htmlString+= "<tr><td>" +data[i].name+ "</td><td>" + data[i].email+ "</td></tr>";
      i++;
    }
    else
    {
        htmlString+="<p>No more Data left</p>"
    }
  
     
    tab.insertAdjacentHTML('beforeend' , htmlString);



}


