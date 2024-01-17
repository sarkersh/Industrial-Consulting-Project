import { Phone } from "../models/phone";

const getPhoneNumbers = async (): Promise<Phone[]> => {
    // mock data, you can replace this with your database query
    const phoneNumbers = [
        { id: 1, number: "+44 1234 567890", type: "home" },
        { id: 2, number: "+44 9876 543210", type: "mobile" },
        { id: 3, number: "+44 1111 222233", type: "work" },
    ];
    return phoneNumbers;
};

export { getPhoneNumbers };