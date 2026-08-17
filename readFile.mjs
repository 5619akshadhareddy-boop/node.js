import fs from'node:fs/promises';
async function readLogs(){
    try{
        const content=await fs.readFile('log.txt','utf8');
            console.log("--------File content--------");
            console.log(content);
    }
    catch(err){
        console.error("Error reading file:",err);
    }
}
readLogs();