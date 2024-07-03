Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\Users\anton\IdeaProjects\my-web3-app> npx truffle init
contracts already exists in this directory...
? Overwrite contracts? (y/N)
Starting init...
================
? Overwrite contracts? Yes

> Copying project files to C:\Users\anton\IdeaProjects\my-web3-app

Init successful, sweet!

Try our scaffold commands to get started:
$ truffle create contract YourContractName # scaffold a contract
$ truffle create test YourTestName         # scaffold a test

http://trufflesuite.com/docs

PS C:\Users\anton\IdeaProjects\my-web3-app> npx truffle compile

Compiling your contracts...
===========================
> Compiling .\contracts\SimpleStorage.sol
> Artifacts written to C:\Users\anton\IdeaProjects\my-web3-app\build\contracts
> Compiled successfully using:
- solc: 0.8.0+commit.c7dfd78e.Emscripten.clang
  PS C:\Users\anton\IdeaProjects\my-web3-app> npx truffle migrate

Compiling your contracts...
===========================
> Compiling .\contracts\SimpleStorage.sol
> Artifacts written to C:\Users\anton\IdeaProjects\my-web3-app\build\contracts
> Compiled successfully using:
- solc: 0.8.0+commit.c7dfd78e.Emscripten.clang


Starting migrations...
======================
> Network name:    'development'
> Network id:      1719963994656
> Block gas limit: 6721975 (0x6691b7)


2_deploy_contracts.js
=====================

Deploying 'SimpleStorage'
-------------------------
> transaction hash:    0x22f6fad40a974aecc12efe99a5de3491bf68fcf61bb6fa60376157a8861b011c
> Blocks: 0            Seconds: 0
> contract address:    0x234E69968Aa08Cf1848083822500c01eE67A1325
> block number:        1
> block timestamp:     1719964211
> account:             0x46538bd01e998BBF27972F521d088cb47A630530
> balance:             99.99762386
> gas used:            118807 (0x1d017)
> gas price:           20 gwei
> value sent:          0 ETH
> total cost:          0.00237614 ETH

> Saving artifacts
   -------------------------------------
> Total cost:          0.00237614 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.00237614 ETH



PS C:\Users\anton\IdeaProjects\my-web3-app>
