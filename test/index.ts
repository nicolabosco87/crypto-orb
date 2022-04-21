import { ethers } from "hardhat";
import { expect } from "chai";

describe("CryptoOrb", function () {
  it("Should get prices", async function () {
    const CryptoOrbFactory = await ethers.getContractFactory("CryptoOrb");
    const CryptoOrb = await CryptoOrbFactory.deploy();
    await CryptoOrb.deployed();

    const result: string = await CryptoOrb.getRandom();

    console.log("Result:", result);

    expect([
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
      "Very doubtful",
    ]).to.include(result);

    // assert.isAbove(Number(result), 0, "Random is above 0");
    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
    // wait until the transaction is mined
    // await setGreetingTx.wait();
    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
