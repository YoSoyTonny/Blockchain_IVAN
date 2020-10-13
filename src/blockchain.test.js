import Blockchain from './Blockchain';
import Block from './block';

describe('Blockchain', () => {
    let Blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    it('todos contienen un block genesis', () => {
        const [genesisBlock] = blockchain.blocks;

        expect(genesisBlock).toEqual(Block.genesis);
        expect(blockchain.blocks.length).toEqual(1);
    });

    it('addBlock esta en uso', () => {
        const data = "d4ta";
        blockchain.addBlock(data);

        const [, lastBlock] = blockchain.blocks;
        expect(lastblock.data).toEqual(data);
        expect(blockchain.blocks.length).toEqual(2);
    });

});