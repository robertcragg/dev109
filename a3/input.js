//Parent Function
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  rhombUp(pHeight, pColorEven, pColorOdd, pSymbol);
  rhombDown(pHeight, pColorEven, pColorOdd, pSymbol);
}

//Child function 1 - builds top half of the rhombus
function rhombUp(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";
  for (i = 0; i <= pHeight - 1; i++) {
    rLine += "<p>";
    // Create each line on the Rhombus
    for (j = 0; j <= 2 * i; j++) {
      // Is the position even or odd so we change the color
      if (j % 2)
        // even
        rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + ' ' + "</span>";
      else
        // odd
        rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + ' ' + "</span>";
    }
    rLine += "</p>";
  }
  document.getElementById("rhombUp").innerHTML = rLine;
}

//Child function 2 - builds bottom half of the rhombus and subtracts one row
function rhombDown(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine ="";
  for (i = (pHeight - 1); i > -1; i--) {
    rLine +="<p>";
    //Create each line on the Rhombus
    for(j = 0; j < (2 * i) - 1; j++) {
      //Is the position even or odd so we change the color
      if (j % 2)
      //even
      rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol + ' ' + "</span>";
      else
      //odd
      rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol + ' ' + "</span>";
    }
    rLine +="</p>";
    // console.log(rLine);
  }
  document.getElementById("rhombDown").innerHTML = rLine;
}
