class Support {
    name;
    designation = 'Support web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    supportSession() {
        console.log(this.name, 'Start a session')
    }
}
const amir = new Support('Amir khan', 'BD');
const sahrukh = new Support('Shahrukh khan', 'USA');
// amir.supportSession();
// sahrukh.supportSession()
console.log(amir, sahrukh)