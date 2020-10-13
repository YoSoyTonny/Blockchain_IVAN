import Blockchain from './blockchain';
import Block from './block';

describe('Block', () => {
    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date (2010, 0, 1);
        previousBlock = Block.genesis;
        data = 'transaction0';
        hash = 'hash0';
    });


    it('Crear instancia con parametros', () =>{
        const block = new Block(timestamp,previousBlock.hash,hash,data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);

    });
    it ('usando static mine', () =>{
        const block = Block.mine (previousBlock,data);
        
        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
    });

    it ('usando static hash', () =>{
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hasOutput = "1acd315ff99a4e1246c3c845c4df5f5054629f4ce97f33036b075dae3d0de9c8";

        expect(hash).toEqual(hasOutput);

    });

});