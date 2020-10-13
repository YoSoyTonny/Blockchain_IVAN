import Block from './block';

class Blockchain {
    constructor() {
        this.Block = [Block.genesis];
    }

    addBlock(data) {
        const previousBlock = this.blocks[this.block.length - 1];
        const block = Block.mine(previousBlock, data);

        this.Blocks.push(block);

        return block;
    }
}

export default Blockchain;