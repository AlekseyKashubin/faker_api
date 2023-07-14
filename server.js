const express = require('express')
const app = express()
const port = 8000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const { faker } = require('@faker-js/faker');


const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.buzzPhrase(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zip: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newCompany;
};




const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
    };
    return newUser;
};



app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany)
});

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser)
});

app.get("/api/company/new", (req, res) => {
    const user = createUser();
    const company = createCompany();
    const both = { user, company };

    res.json(both)
});








app.listen(port, () => console.log(`<<<SERVER ON LINE>>> ${port}`));