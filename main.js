function pyramid()
{
var input=document.getElementById("rowno").value;
if(input.length>=1)
{
document.write("<center>");
for(var i=1;i<=input;i++)
{
for(var j=1;j<=i*2-1;j++)
{
document.write(i);
}
document.write("<br/>");
}
document.write("</center>");
}
else {
  {
    alert('Please input correct value');
  }
}
}
