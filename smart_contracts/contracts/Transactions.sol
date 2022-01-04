// SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

contract Transactions {

    event Transfer(address sender, address receiver, uint timestamp, uint amount, string message);

    struct Transaction {
        address sender; 
        address receiver;
        uint timestamp;
        uint amount;
        string message;
    }

    Transaction[] transactionsArray;

    function Pay(address payable receiver, uint amount, string memory message) public payable {
        transactionsArray.push(Transaction(msg.sender, receiver, block.timestamp, amount, message));

        emit Transfer(msg.sender, receiver, block.timestamp, amount, message);
    }
}