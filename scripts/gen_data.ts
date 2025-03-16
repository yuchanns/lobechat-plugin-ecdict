import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';
import { stemmer } from 'stemmer';

function escapeSQLString(str: string): string {
  if (!str) return 'NULL';
  return `'${str.replace(/'/g, "''")}'`;
}

function formatNumber(val: string): string {
  if (!val || val.trim() === '') return 'NULL';
  return val;
}

async function processCSV() {
  const outputDir = path.resolve('./assets');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const inputFile = path.resolve('./ECDICT/ecdict.csv');
  const outputFile = path.resolve(outputDir, 'data.sql');
  const writeStream = fs.createWriteStream(outputFile);

  const columns = 'word,sw,phonetic,definition,translation,pos,collins,oxford,tag,bnc,frq,exchange,detail,audio';

  const parser = fs.createReadStream(inputFile)
    .pipe(parse({
      skip_empty_lines: true,
      columns: true
    }));

  for await (const record of parser) {
    const word = record.word.trim();
    const sw = stemmer(word);

    const values = [
      escapeSQLString(word),
      escapeSQLString(sw),
      escapeSQLString(record.phonetic),
      escapeSQLString(record.definition),
      escapeSQLString(record.translation),
      escapeSQLString(record.pos),
      formatNumber(record.collins),
      formatNumber(record.oxford),
      escapeSQLString(record.tag),
      formatNumber(record.bnc),
      formatNumber(record.frq),
      escapeSQLString(record.exchange),
      escapeSQLString(record.detail),
      escapeSQLString(record.audio)
    ];

    const sql = `REPLACE INTO stardict (${columns}) VALUES (${values.join(',')});\n`;
    writeStream.write(sql);
  }

  writeStream.end();
  console.log('Data import completed!');
}

processCSV().catch(console.error);
