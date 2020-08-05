
function calculateFuelToOffLoad() {
  
  var totalDistanceToTravel = prompt('Hány kilométer távolságot kíván megtenni? Adjon meg egy számot!');
  var averageLitersOverHundred = prompt('Mi az űrhajó átlagos fogyasztása literben? Adjon meg egy számot!');
  var tankCapacity = prompt('A harmadik pedig így szóljon: "Mi az űrhajó üzemanyagtartályának űrtartalma literben? Adjon meg egy számot!');
  
  var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
  
  var fuelToOffLoad = tankCapacity - requiredFuel;
  
  alert('Az utazáshoz szükséges üzemanyag-mennyiség: ' + requiredFuel + ' l\n' + 'Leadandó üzemanyag-mennyiség: ' + fuelToOffLoad + ' l');
}

calculateFuelToOffLoad();


