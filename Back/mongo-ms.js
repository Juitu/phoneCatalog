const { MongoClient } = require('mongodb');

const COLLNAME = 'PhoneCatalog';

const MSMongo = class MSMongo {
  constructor(rootPath, app) {
    this.rootPath = rootPath;
    this.app = app;
    this.initMicroservices();
  }

  initMicroservices() {
    const MONGODB_NAME = "DCSL";
    const MONGODB_URL = "mongodb://localhost:27017";

    MongoClient.connect(MONGODB_URL, async (err, client) => {
      this.app.get(`${this.rootPath}/phonecatalog`, async (req, res, next) => {
        try {
          const db = client.db(MONGODB_NAME);
          const collection = db.collection(COLLNAME);
          const cursor = collection.find({});
          const phoneCatalog = await cursor.toArray();
          res.json(phoneCatalog);
          next();
        } catch (error) {
          res.send(error);
        }
      });
    });
  }
};

module.exports = MSMongo;