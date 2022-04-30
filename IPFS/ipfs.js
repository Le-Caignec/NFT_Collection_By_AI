const IPFS = require('ipfs-http-client')
const fs = require("fs");

async function AddFile(directoryName){
    try{
        const node = await IPFS.create("http://127.0.0.1:5001")
        await node.files.mkdir('/NFT-Collection')
        fs.readdir(directoryName, async (err, files) => {
            if (err)
                console.log(err);
            else {
                for (const file of files) {
                    if((file.substr(0, 1)) !== ".") {
                        console.log(directoryName+"/"+file);
                        let File = fs.readFileSync(directoryName + "/" + file);
                        let fileBuffer = new Buffer(File);
                        await node.files.write('/NFT-Collection/'+file, fileBuffer, {create: true})
                    }
                }
            }
        })
    }catch(e){
        console.log(e)
    }
}

AddFile("../NFT-Collection");

