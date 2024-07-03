// const contractAddress = "<DEPLOYED_CONTRACT_ADDRESS>";
const contractAddress = "0x234E69968Aa08Cf1848083822500c01eE67A1325";
const contractABI = [ // todo Pasted the ABI here.
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
            }
        ],
        "name": "set",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "get",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
];

let web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
let simpleStorage = new web3.eth.Contract(contractABI, contractAddress);

async function setValue() {
    let accounts = await web3.eth.getAccounts();
    let value = document.getElementById("value").value;
    simpleStorage.methods.set(value).send({ from: accounts[0] });
}

async function getValue() {
    let value = await simpleStorage.methods.get().call();
    document.getElementById("storedValue").innerText = value;
}
