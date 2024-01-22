function calculateTrigFunction(func) {
    var angle = parseFloat(document.getElementById("angle").value);
  
    if (!isNaN(angle)) {
      var radians = angle * (Math.PI / 180);
      var result;
  
      switch (func) {
        case 'sin':
          result = Math.sin(radians);
          break;
        case 'cos':
          result = Math.cos(radians);
          break;
        case 'tan':
          result = Math.tan(radians);
          break;
        case 'csc':
          result = 1 / Math.sin(radians);
          break;
        case 'sec':
          result = 1 / Math.cos(radians);
          break;
        case 'cot':
          result = 1 / Math.tan(radians);
          break;
        default:
          break;
      }
  
      var resultMessage = `${func.toUpperCase()}(${angle}°) = ${result.toFixed(4)}`;
      document.getElementById("result").innerHTML = resultMessage;
    } else {
      document.getElementById("result").innerHTML = "Please enter a valid angle.";
    }
  }
  