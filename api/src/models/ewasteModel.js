import { v4 as uuidv4 } from 'uuid';

class RecyclingPoint {
    constructor(name, city, type, street_address, contact) {
        this.id = uuidv4();
        this.name = name;
        this.city = city;
        this.type = type;
        this.street_address = street_address;
        this.contact = contact;
    }
}

export default RecyclingPoint;
