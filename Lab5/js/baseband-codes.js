function getManchesterLevelEncoding(bits) {
  var result = [];
  for (var i = 0; i < bits.length; i++) {
    let symbol = "|--|--|";
    if (parseInt(bits[i].value) == 1) symbol = "|__|--|";
    if (
      parseInt(bits[i].value) == 1 &&
      i > 0 &&
      parseInt(bits[i - 1].value) == 1
    )
      symbol = "|__|--|";
    if (parseInt(bits[i].value) == 0) symbol = "|--|__|";
    if (
      parseInt(bits[i].value) == 0 &&
      i > 0 &&
      parseInt(bits[i - 1].value) == 0
    )
      symbol = "|--|__|";
    result.push(symbol);
  }
  return result;
}

function getNRZ(bits) {
  var result = [];
  for (let i = 0; i < bits.length; i++) {
    let symbol = "|____|";
    if (parseInt(bits[i].value) === 1) symbol = "|----|";
    result.push(symbol);
  }
  return result;
}

function getNRZM(bits) {
  var result = [];
  let symbol;
  for (let i = 0; i < bits.length; i++) {
    if (parseInt(bits[i].value) === 1 && i===0) symbol = "|____|";
    if (parseInt(bits[i].value) === 0 && i===0) symbol = "|----|";
    if (parseInt(bits[i].value) === 1 && i>0){
        
        if (symbol === "|____|") symbol = "|----|";
        else if (symbol === "|----|") symbol = "|____|";
    }
    result.push(symbol);
  }
  return result;
}

function getNRZS(bits) {
  var result = [];
  let symbol;
  for (let i = 0; i < bits.length; i++) {
    if (parseInt(bits[i].value) === 0 && i===0) symbol = "|____|";
    if (parseInt(bits[i].value) === 1 && i===0) symbol = "|----|";
    if (parseInt(bits[i].value) === 0 && i>0){
      if (symbol === "|____|") symbol = "|----|";
      else if (symbol === "|----|") symbol = "|____|";
    }
    result.push(symbol);
  }
  return result;
}

function getRZ(bits) {
  var result = [];
  let symbol;
  for (let i = 0; i < bits.length; i++) {
    if (parseInt(bits[i].value) === 1) symbol = "|--|__|";
    if (parseInt(bits[i].value) === 0) symbol = "|____|";
    result.push(symbol);
  }
  return result;
}

function getBiphM(bits) {
  var result = [];
  let symbol;
  for (let i = 0; i < bits.length; i++) {
    if (parseInt(bits[i].value) === 1 && i===0) symbol = "|--|__|";
    if (parseInt(bits[i].value) === 0 && i===0) symbol = "|----|";
    if (parseInt(bits[i].value) === 1 && i>0 && (symbol === "|--|__|" || symbol === "|____|")) symbol = "|--|__|";
    else if (parseInt(bits[i].value) === 1 && i>0 && (symbol === "|__|--|" || symbol === "|----|")) symbol = "|__|--|";
    else if (parseInt(bits[i].value) === 0 && i>0 && (symbol === "|__|--|" || symbol === "|----|")) symbol = "|____|";
    else if (parseInt(bits[i].value) === 0 && i>0 && (symbol === "|--|__|" || symbol === "|____|")) symbol = "|----|";
    result.push(symbol);
  }
  return result;
}

function getBiphS(bits) {
  var result = [];
  let symbol;
  for (let i = 0; i < bits.length; i++) {
    if (parseInt(bits[i].value) === 0 && i===0) symbol = "|--|__|";
    if (parseInt(bits[i].value) === 1 && i===0) symbol = "|----|";
    if (parseInt(bits[i].value) === 0 && i>0 && (symbol === "|--|__|" || symbol === "|____|")) symbol = "|--|__|";
    else if (parseInt(bits[i].value) === 0 && i>0 && (symbol === "|__|--|" || symbol === "|----|")) symbol = "|__|--|";
    else if (parseInt(bits[i].value) === 1 && i>0 && (symbol === "|__|--|" || symbol === "|----|")) symbol = "|____|";
    else if (parseInt(bits[i].value) === 1 && i>0 && (symbol === "|--|__|" || symbol === "|____|")) symbol = "|----|";
    result.push(symbol);
  }
  return result;
}