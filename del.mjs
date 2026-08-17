import fs from 'node:fs/promises';
async function deleteFile(filePath){
    try{
        await fs.unlink(filePath);
        console.log(`Succesfully deleted file: ${filePath}`);

    }
    catch(err){
        if(err.code==='ENOENT'){
            console.error(`Error: File "${filePath}" does not exist.`);

        }
        else{
            console.error(`Error deleting file: ${err.message}`);
        }
    }
}
deleteFile('log.txt');