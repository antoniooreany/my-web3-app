if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
}

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
// const contractAddress = '/* Your contract address goes here */';
const contractAddress = '0x010CfaD9324f107AB06851f322C794889c2419C6';

const myFirstContract = new web3.eth.Contract(contractABI, contractAddress);

async function updateMessage() {
    const accounts = await web3.eth.getAccounts();
    const newMessage = document.getElementById('newMessage').value;

    myFirstContract.methods.updateMessage(newMessage).send({ from: accounts[0] })
        .on('receipt', function() {
            console.log('Message updated successfully');
            getMessage();
        });
}

async function getMessage() {
    const message = await myFirstContract.methods.message().call();
    document.getElementById('currentMessage').innerText = `Current message: ${message}`;
}

window.addEventListener('load', function() {
    getMessage();
});
