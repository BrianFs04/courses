// Composition

const getName = (info) => ({
    showName() {
        console.log(`Name: ${info.name}`);
    },
});

const saveEmail = (info) => ({
    addEmail(email) {
        console.log(`Save email for: ${info.name}`);
        info.email = email;
    },
});

const getEmail = (info) => ({
    showEmail() {
        console.log(`Email: ${info.email}`);
    },
});

const getEnterprise = (info) => ({
    showEnterprise() {
        console.log(`Enterprise: ${info.enterprise}`);
    },
});

const getJob = (info) => ({
    showJob() {
        console.log(`Job: ${info.job}`);
    },
});

function Client(name, email, enterprise) {
    let info = {
        name,
        email,
        enterprise,
    };

    return Object.assign(
        info,
        getName(info),
        saveEmail(info),
        getEmail(info),
        getEnterprise(info)
    );
}

function Employee(name, email, job) {
    let info = {
        name,
        email,
        job,
    };

    return Object.assign(
        info,
        getName(info),
        saveEmail(info),
        getEmail(info),
        getJob(info)
    );
}

const client = Client("Brian", null, "Code");
client.showName();
client.addEmail("email@email.com");
client.showEmail();
client.showEnterprise();

console.log("===========================");

const employee = Employee("Jesus", null, "Programmer");
employee.showName();
employee.addEmail("email@email.com");
employee.showEmail();
employee.showJob();
