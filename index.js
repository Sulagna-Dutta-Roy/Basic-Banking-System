function sendMoney () {
    'use strict';
    var enterName = document.getElementById("enterName").value,
        enterAmount = parseInt(document.getElementById("enterAmount").value),
        enterSName = document.getElementById("enterSName").value,
        findSenderBankAccount = enterSName + "BankBalance",
        enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (enterAmount > enterSAmount) {
        alert("Insufficient Balance");
        }
    else {
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;

        document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert(`Successful Transaction !! $${enterAmount} is sent to ${enterSName} @email.com`);
       // transaction history
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`Rs ${enterAmount} is sent from the sender with Email-id  ${enterSName}@email.com to recepient with Email-id ${enterName}@email.com on ${Date()}`);
        createPTag.appendChild(textNode),
            element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
 }