//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CryptoOrb {
    string[] private answers = [
        "As I see it, yes", 
        "It is certain", 
        "It is decidedly so", 
        "Most likely", 
        "Outlook good", 
        "Signs point to yes", 
        "Without a doubt", 
        "Yes", 
        "Yes - definitely", 
        "You may rely on it", 
        "Reply hazy, try again", 
        "Ask again later", 
        "Better not tell you now", 
        "Cannot predict now", 
        "Concentrate and ask again", 
        "Don't count on it", 
        "My reply is no", 
        "My sources say no", 
        "Outlook not so good", 
        "Very doubtful"
    ];

    constructor() {
        console.log("Deploying CryptoOrb");
    }

    function random() private view returns (uint) {   
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp))) % (answers.length - 1);
    }

    function getRandom() public view returns (string memory) {
        uint answerIndex = random(); 
        return answers[answerIndex];
    }
}
