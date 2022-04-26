const ranNum = (msgArray) => Math.floor(Math.random() * msgArray.length); // Generate random number up to the length of the array inserted

const selectRandomMsg = () => {
    const wordOne = ['man', 'female','secret'];
    const wordTwo = ['Developer', 'Teacher', 'Soccer Player'];
    const wordThree = ['Front End', 'Back End', 'Math', 'English', 'Forward', 'Defender'];
    let gender = wordOne[0];
    let occupation = wordTwo[0];
    let specialisation = wordThree[0];
    
    
    return console.log(`My gender is: ${gender}, working as a ${occupation} and specialised in ${specialisation}`);
};

selectRandomMsg();