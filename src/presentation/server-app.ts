import { createTable } from "../domain/use-cases/create-table.use-cases";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions{
    base:number;
    limit:number;
    showTable: boolean;
    name: string;
    destination:string;
}

export class serverApp  {
static run({base, limit, showTable, name, destination}: RunOptions){
    console.log('Server running...');

    const table = new createTable().execute({base,limit})
    const wasCreated = new SaveFile().execute({fileContent:table, destination: destination, fileName:name, base:base })
   if(showTable)  console.log(table);

    (wasCreated) ? console.log('File created')
    : console.error('file not created');
}


}