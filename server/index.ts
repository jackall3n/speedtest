import express from 'express';
import fs from 'fs-extra';
import path from 'path';
import Database from "./database";

const { PORT = 3000, OUTPUT = './db' } = process.env;

let database: Database;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.post('/dump', async (request, res) => {

  const { body } = request;

  console.log(body);

  const date = Date.now();

  await database.dump({
    [date]: {
      date,
      ...body
    }
  });

  res.send(body)
});

async function start() {
  await setup();

  await app.listen(PORT, () => {
    console.log('started at', PORT);
  });
}

async function setup() {
  const outputPath = path.resolve(OUTPUT);
  await fs.ensureDir(outputPath);

  const dbPath = path.join(outputPath, 'db.json');
  database = new Database(dbPath);
  await database.initialize();
}

start().then(() => {
  console.log('Done.')
});
