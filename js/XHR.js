/* API functions of doom */
const totalCasesG = document.getElementById("statsCasesG");
const totalRecovG = document.getElementById("statsRecoveriesG");
const totalDeathG = document.getElementById("statsDeathsG");

const newCasesG = document.getElementById("statsCasesGN");
const newRecovG = document.getElementById("statsRecoveriesGN");
const newDeathG = document.getElementById("statsDeathsGN");

let xhrGlobal = new XMLHttpRequest();


xhrGlobal.onreadystatechange = e =>{  
    if(xhrGlobal.readyState == 4){
    if(xhrGlobal.status == 200){
        const data = JSON.parse(xhrGlobal.response);
        console.log(data);
        totalCasesG.innerHTML = data.Global.TotalConfirmed;
        totalRecovG.innerHTML = data.Global.TotalRecovered;
        totalDeathG.innerHTML = data.Global.TotalDeaths;

        newCasesG.innerHTML = data.Global.NewConfirmed;
        newRecovG.innerHTML = data.Global.NewRecovered;
        newDeathG.innerHTML = data.Global.NewDeaths;
    }
    else if(xhrGlobal.status == 404)
    {
        alert('Cannot find the indicated data');
    }
    else if(xhrGlobal.status == 500)
    {
        alert('The server had a fatal error')
    }
}
};

xhrGlobal.open('GET','https://api.covid19api.com/summary')
xhrGlobal.send();

/* regional functions */

/* creating the dropdown list with a for loop instead */


const totalCasesR = document.getElementById("statsCasesR");
const totalRecovR = document.getElementById("statsRecoveriesR");
const totalDeathR = document.getElementById("statsDeathsR");

const newCasesR = document.getElementById("statsCasesRN");
const newRecovR = document.getElementById("statsRecoveriesRN");
const newDeathR = document.getElementById("statsDeathsRN");

var data
var x

let xhrRegion = new XMLHttpRequest();

    xhrRegion.onreadystatechange = e =>{  
        if(xhrRegion.readyState == 4){
        if(xhrRegion.status == 200){
            data = JSON.parse(xhrRegion.response);
            console.log(data);

            var drop = document.getElementById("country");
            for (var i = 0; i < data.Countries.length; i++)
            {
                let newOption = document.createElement("option");
                newOption.setAttribute('value', i);
                let newText = document.createTextNode(data.Countries[i].Country);
                newOption.appendChild(newText);
                drop.appendChild(newOption);
                //console.log(i);
                //console.log(newOption);
            }
                }
                else if(xhrRegion.status == 404)
                {
                    alert('Cannot find the indicated data');
                }
                else if(xhrRegion.status == 500)
                {
                    alert('The server had a fatal error')
                }
            }

            };
        
        xhrRegion.open('GET','https://api.covid19api.com/summary')
        xhrRegion.send();

        function getCountry()
        {
            x = document.getElementById("country").value;
            totalCasesR.innerHTML = data.Countries[x].TotalConfirmed;
            totalRecovR.innerHTML = data.Countries[x].TotalRecovered;
            totalDeathR.innerHTML = data.Countries[x].TotalDeaths;

            newCasesR.innerHTML = data.Countries[x].NewConfirmed;
            newRecovR.innerHTML = data.Countries[x].NewRecovered;
            newDeathR.innerHTML = data.Countries[x].NewDeaths;
            console.log(data.Countries[x]);
        }
