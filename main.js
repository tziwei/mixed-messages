const ranNum = (msgArray) => Math.floor(Math.random() * msgArray.length); // Generate random number up to the length of the array inserted

const selectRandomMsg = () => {
    const wordOne = ['male', 'female','secret'];
    const wordTwo = ['Developer', 'Teacher', 'Soccer Player'];
    const wordThree = ['Front End', 'Back End', 'Math', 'English', 'Forward', 'Defender'];
    let ranWordTwo = ranNum(wordTwo);
    let ranWordThree = 0;
    if (ranWordTwo === 0) {
        ranWordThree = Math.floor(Math.random() * 2);
    } else if (ranWordTwo === 1) {
        ranWordThree = Math.floor(Math.random() * 2) + 2;
    } else {
        ranWordThree = Math.floor(Math.random() * 2) + 4;
    };
    let gender = wordOne[ranNum(wordOne)];
    let occupation = wordTwo[ranWordTwo];
    let specialisation = wordThree[ranWordThree];
    
    return console.log(`My gender is: ${gender}, working as a ${occupation} and specialised in ${specialisation}.`);
};

selectRandomMsg();