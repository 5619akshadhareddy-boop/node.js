import fs from 'node:fs/promises';
async function createLog(){
    try{
        await fs.writeFile('Log.txt','System started successfully!\n');
        console.log("File created successfully");
    }
    catch(err){
        console.error("Error writing file",err);
    }
}
console.log("File creation using writeFile");
createLog();