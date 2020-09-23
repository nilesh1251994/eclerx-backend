
const userRoutes = (app, fs) => {
    // variables
    const dataPath = "./data/people.json";
  
    // READ
    app.get("/getInfo", (req, res) => {
      fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });

    app.get("/isCarRegistered", (req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                  res.status(404).send({
                    message: `Not found car Registered`
                  });
                } else {
                  res.status(500).send({
                    message: "Error retrieving car registered  " 
                  });
                }
              } else res.send(data);
          });
      });

      app.get("/isPersonRegistered", (req, res) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                if (err.kind === "not_found" ) {
                  res.status(404).send({
                    message: `Not found  Person Registered`
                  });
                } else {
                  res.status(500).send({
                    message: "Error retrieving Person registered  " 
                  });
                }
              } else res.send(data);
          });
      });
  };
  
  module.exports = userRoutes;