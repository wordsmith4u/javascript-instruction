let tiles = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ];

  function maximumScore(hand) {
      let total = 0;

      for (let tile of hand) {
          total += tile.score;
      }
      return total;
  }

 let total =  maximumScore(tiles);
 console.log(total);