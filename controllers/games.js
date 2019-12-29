function getGame(req, res) {
  res.send({
    gameId: req.params.id,
    creatorId: 100,
    name: "Game 10",
    endingPoints: 500,
    pointsAreGood: true,
  });
}

function createGame (req, res) {
  const { name, endingPoints, pointsAreGood } = req.body;
  res.send({
    gameId: 1,
    creatorId: 100,
    name,
    endingPoints,
    pointsAreGood,
  });
}

function updateGame(req, res) {
  const { params: { id }, body: { name, endingPoints, pointsAreGood } } = req;
  res.send({
    gameId: parseInt(id),
    creatorId: 100,
    name,
    endingPoints,
    pointsAreGood,
  });
}

function joinGame(req, res) {
  const { name } = req.body;
  res.send({
    gameId: 1,
    name
  });
}

function deleteGame(req, res) {
  res.status(204);
  res.send();
}

module.exports = {
  getGame,
  createGame,
  updateGame,
  joinGame,
  deleteGame,
};