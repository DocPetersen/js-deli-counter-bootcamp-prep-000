var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing (katzDeliLine) {
  var next = katzDeliLine.shift();
  return next ? `Currently serving number ${katzDeliLine.length};
}