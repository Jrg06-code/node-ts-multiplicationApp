import fs from 'fs';

export interface SaveFileUseCase {

    execute: (options: Options )=> boolean;
}

export interface Options {
    fileContent: string;
    destination?: string;
    fileName?: string;
    base?:number;

}

export class SaveFile implements SaveFileUseCase{

    constructor(/**Repository */){
        
    }

    execute({fileContent,destination='outputs',fileName='table',base}: Options): boolean{
        
try {
    fs.mkdirSync(destination, {recursive:true})
fs.writeFileSync(`${destination}/${fileName+base}.txt`, fileContent)
console.log('guardado correctamente');
return true;
} catch (error) {
    console.log(error);
    return false;
}
    }

}