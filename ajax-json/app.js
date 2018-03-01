var tab = document.getElementById('tab');
var btn = document.getElementById('btn');
var inp = document.getElementById('myinput');
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

function renderHTML(data)
{
    var htmlString = "";
    var i ; 
    for(i = 0 ; i<data.length ; i++)
    {
        htmlString+= "<tr><td>" +data[i].name+ "</td><td>" + data[i].email+ "</td></tr>";
    }
   
  
     
    tab.insertAdjacentHTML('beforeend' , htmlString);

}

//filter

inp.addEventListener('keyup' , function(){
    var tab = document.getElementById('tab');
  var row = tab.getElementsByTagName('tr');
  var inp = document.getElementById('myinput');

  
  var i;
  
  for(i =0 ; i< row.length ; i++)
  {
      var td = row[i].getElementsByTagName('td')[0];
      if(td)
      {
          if(td.innerHTML.indexOf(inp.value)!= -1)
          {
              row[i].style.display = "";
          }
          else
          {
            row[i].style.display = "none";
          }
      } 
  }

});

