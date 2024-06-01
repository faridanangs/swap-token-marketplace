// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CustomToken is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 1000000 * 10**18);
    }
}


contract CustomDex {
    string[] public tokens = [
        "Tether USD",
        "BNB",
        "USD Coin",
        "stETH",
        "TRON",
        "Matic Token",
        "SHIBA INU",
        "Uniswap"
    ];

    mapping(string => ERC20) public tokenInstanceMap;
    uint256 ethValue = 100000000000000;

    struct History {
        uint256 historyId;
        string tokenA;
        string tokenB;
        uint256 inputValue;
        uint256 outputValue;
        address userAddress;
    }

    uint256 public _historyIndex;
    mapping(uint256 => History) private histories;

    constructor() {
        for (uint256 i = 0; i < tokens.length; i++) {
            CustomToken token = new CustomToken(tokens[i], tokens[i]);
            tokenInstanceMap[tokens[i]] = token;
        }
    }

    function getBalance(string memory _tokenName, address _address) public view returns (uint256) {
        return tokenInstanceMap[_tokenName].balanceOf(_address);
    }

    function getTotalSupply(string memory _tokenName) public view returns (uint256) {
        return tokenInstanceMap[_tokenName].totalSupply();
    }

    function getName(string memory _tokenName) public view returns (string memory) {
        return tokenInstanceMap[_tokenName].name();
    }

    function getTokenAddress(string memory _tokenName) public view returns (address) {
        return address(tokenInstanceMap[_tokenName]);
    }

    function getEthBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function _transactionHistory(string memory _tokenName, string memory _etherToken, uint256 _inputValue, uint256 _outputValue) internal {
        _historyIndex++;
        uint256 _historyId = _historyIndex;
        History storage history = histories[_historyId];

        history.historyId = _historyId;
        history.tokenA = _tokenName;
        history.tokenB = _etherToken;
        history.outputValue = _outputValue;
        history.inputValue = _inputValue;
        history.userAddress = msg.sender;
    }

    function swapEthToToken(string memory _tokenName) public payable returns (uint256) {
        uint256 inputValue = msg.value;
        uint256 outputValue = (inputValue / ethValue) * 10**18;

        require(tokenInstanceMap[_tokenName].transfer(msg.sender, outputValue));

        string memory etherToken = "Ether";
        _transactionHistory(_tokenName, etherToken, inputValue, outputValue);
        return outputValue;
    }

    function swapTokenToEth(string memory _tokenName, uint256 _amount) public returns (uint256) {
        uint256 exactAmount = _amount / 10**18;
        uint256 ethToBeTransferred = exactAmount * ethValue;
       
        require(address(this).balance >= ethToBeTransferred, "Dex is running low on balance"); 

        payable(msg.sender).transfer(ethToBeTransferred);
        require(tokenInstanceMap[_tokenName].transferFrom(msg.sender, address(this), _amount));

        string memory etherToken = "Ether";
        _transactionHistory(_tokenName, etherToken, exactAmount, ethToBeTransferred);

        return ethToBeTransferred;
    }

    function swapTokenToToken(string memory _srcTokenName, string memory _destTokenName, uint256 _amount) public {
        require(tokenInstanceMap[_srcTokenName].transferFrom(msg.sender, address(this), _amount));
        require(tokenInstanceMap[_destTokenName].transfer(msg.sender, _amount));
       
        _transactionHistory(_srcTokenName, _destTokenName, _amount, _amount);
    }

    function getAllHistory() public view returns (History[] memory) {
        uint256 itemCount = _historyIndex;
        uint256 currentIndex = 0;

        History[] memory items = new History[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            uint256 currentId = i + 1;

            History memory history = histories[currentId];
            items[currentIndex] = history;
            currentIndex++;
        }

        return items;
    }
}

