const excelRead = require('./ReadExcel');
const cJson = require('./CreateJson');
start();

async function start () {
    const data = await excelRead.getContent('./data/sample.xlsx');
    cJson.create(data);
}
