function main(number) {

    let completed = '%'.repeat(number / 10);
    let incomplete = '.'.repeat(10 - completed.length);

    if (incomplete.length === 0) {
        console.log('100% Complete!');

    } else {

        console.log(`${number}% [${completed}${incomplete}]`);
        console.log('Still loading...');
    }

    console.log();
}

main(30);