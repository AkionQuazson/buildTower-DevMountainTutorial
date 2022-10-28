const towerBuilder = (floors) => {
    let tower = [];
    let blocks = (floors * 2) - 1;
    let spaces = 0;

    while (blocks > 0) {
        let space = '';
        for (let i = 0; i < spaces; i++) {
            space += ' ';
        }
        let block = '';
        for (let i = 0; i < blocks; i++) {
            block += '*';
        }
        tower.unshift(`${space}${block}${space}`);
        spaces += 1;
        blocks -= 2;
    }

    return tower;
}

console.log(towerBuilder(4));
console.log(towerBuilder(7));
console.log(towerBuilder(3));