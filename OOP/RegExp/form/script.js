class FormCheck {
    constructor() {
        this.submitClick();
    }
    checkName() {
        let regExpName = new RegExp(/^[^0-9]{1,20}$/ig);
        let nameValue = document.getElementById("iName").value;
        let checkNameResult = regExpName.test(nameValue);
        console.log(checkNameResult);
        if (!checkNameResult) {
            document.getElementById("iName").classList.remove("redErrorBorder");
            document.getElementById("iName").classList.remove("greenBorder");
            document.getElementById("iName").classList.add("redErrorBorder");
        }
        else {
            document.getElementById("iName").classList.remove("redErrorBorder");
            document.getElementById("iName").classList.remove("greenBorder");
            document.getElementById("iName").classList.add("greenBorder");
        }

    }
    checkPhone() {
        let regExpPhone = new RegExp(/\+7\d{10}$/ig);
        let phoneValue = document.getElementById("iPhone").value;
        let checkPhoneResult = regExpPhone.test(phoneValue);
        if (!checkPhoneResult) {
            document.getElementById("iPhone").classList.remove("redErrorBorder");
            document.getElementById("iPhone").classList.remove("greenBorder");
            document.getElementById("iPhone").classList.add("redErrorBorder");
        }
        else {
            document.getElementById("iPhone").classList.remove("redErrorBorder");
            document.getElementById("iPhone").classList.remove("greenBorder");
            document.getElementById("iPhone").classList.add("greenBorder");
        }
    }
    checkEmail() {
        let regExpEmail = new RegExp(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,'g');
        let emailValue = document.getElementById("iEmail").value;
        let checkEmailResult = regExpEmail.test(emailValue);
        if (!checkEmailResult) {
            document.getElementById("iEmail").classList.remove("redErrorBorder");
            document.getElementById("iEmail").classList.remove("greenBorder");
            document.getElementById("iEmail").classList.add("redErrorBorder");
        }
        else {
            document.getElementById("iEmail").classList.remove("redErrorBorder");
            document.getElementById("iEmail").classList.remove("greenBorder");
            document.getElementById("iEmail").classList.add("greenBorder");
        }
    }

    submitClick() {
        document.querySelector(".inputFieldBotton").addEventListener('click', () => {
            this.checkName();
            this.checkPhone();
            this.checkEmail();
        });
    }
}
let firstCheck = new FormCheck();
