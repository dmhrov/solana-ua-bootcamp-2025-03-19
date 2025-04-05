import { Keypair } from '@solana/web3.js';

const PREFIX = 'aza';


function generateKeypairWithPrefix(prefix: string) {
    let keypair;
    let publicKeyStr = '';

    do {
        keypair = Keypair.generate();
        publicKeyStr = keypair.publicKey.toBase58();
    } while (!publicKeyStr.startsWith(prefix));

    return keypair;
}


const keypair = generateKeypairWithPrefix(PREFIX);
console.log('Generated public key:', keypair.publicKey.toBase58());
console.log('Generated private key:', keypair.secretKey.toString('hex'));
