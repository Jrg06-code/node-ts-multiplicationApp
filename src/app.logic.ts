import fs from 'fs';
import { yarg } from './plugins/yargs.plugins';
yarg


let outputMessage = '';
const base = yarg.b;
const limit = yarg.l
const showTable = yarg.s;
const headerMessage = `
=================================
           Tabla del ${base}
================================= \n`;

for(let i=1; i<=limit; i++){
    outputMessage+=`${base} x ${i} = ${base * i} \n` 
    
 }

if (showTable) { 
    outputMessage= headerMessage +outputMessage;
    console.log(outputMessage)
    ;}

const outputpath = 'outputs'
fs.mkdirSync(outputpath, {recursive:true})
fs.writeFileSync(`${outputpath}/tabla-${base}.txt`, outputMessage)
console.log('guardado correctamente');