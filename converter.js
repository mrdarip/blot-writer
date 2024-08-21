Object.keys(font).forEach(function(char, index) {
    font[char].forEach(function(line, i) {
      line.forEach(function(point, j) {
        font[char][i][j] = point.map(function(coord) {
          return Math.round(coord * 1000) / 1000;
        });
      });
    });
  });
  console.log(font);