export interface createTableUseCase{
    execute: (options: createTableOptions)=> string;

}

export interface createTableOptions{
    base:number;
    limit?:number;
}

export class createTable implements createTableUseCase{
    constructor(
        /**
         * Dependency injection
         */
    ){}

    execute({base, limit=10}:createTableOptions){
        let outputMessage = '';
        for(let i=1; i<=limit; i++){
            outputMessage+=`${base} x ${i} = ${base * i} \n` 
            
         }
         return outputMessage;
    }
}