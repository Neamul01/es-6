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