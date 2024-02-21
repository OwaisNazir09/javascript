function getadd()
{
    let val1=Number(document.getElementById("v1").value);
    let val2 =Number(document.getElementById("v2").value);
    let val3 = val1+val2;
    document.getElementById("result").innerHTML = "Addition : " + val3;
}

function getsub()
{
    let val1=Number(document.getElementById("v1").value);
    let val2 =Number(document.getElementById("v2").value);
    let val3 = val1-val2;
    document.getElementById("result").innerHTML = "substraction :" + val3;
}
function getmul()
{
    let val1=Number(document.getElementById("v1").value);
    let val2 =Number(document.getElementById("v2").value);
    let val3 = val1*val2;
    document.getElementById("result").innerHTML = "multiplication : " + val3;
}
function getdiv()
{
    let val1=Number(document.getElementById("v1").value);
    let val2 =Number(document.getElementById("v2").value);
    let val3 = val1/val2;
    document.getElementById("result").innerHTML = "division: " + val3;
}

