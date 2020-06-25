// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0;
pragma experimental ABIEncoderV2;

contract Actions{

    struct Action{
        address payable user_id;
        address payable provider_id;
        string name;
        string location;
        string time;
        uint payment_amount;
    }

    struct Users{
        Action[] actionsList;
    }

    Action public action;
    mapping (address => Users) allUsers;
    mapping (address => uint) balance;

    modifier checkBalance(uint amount){
        require(amount <= balance[msg.sender], "amount exceeds balance");
        _;
    }

    modifier checkAmount(uint amount){
        require(amount >= 0, "amount lower then zero");
        _;
    }

    constructor() public payable{
        balance[msg.sender] = msg.sender.balance;
    }

    function setAction( address payable _provider,
                        string memory _name,
                        string memory _locations,
                        string memory _time)
                        public checkAmount(msg.value) checkBalance(msg.value) payable{

            balance[_provider] = _provider.balance;
            balance[msg.sender] = msg.sender.balance;

            action.user_id = msg.sender;
            action.provider_id = _provider;
            action.name = _name;
            action.location = _locations;
            action.time = _time;
            action.payment_amount = msg.value;

            allUsers[msg.sender].actionsList.push(action);

            balance[msg.sender] -= msg.value;
            msg.sender.transfer(msg.value);
            balance[_provider] += msg.value;
        }
        function getUserActions() public view returns(Users memory){
            return allUsers[msg.sender];
        }

        function getBalance() public payable returns(uint){
            balance[msg.sender] = msg.sender.balance;
            return balance[msg.sender];
        }

}