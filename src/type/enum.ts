
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let offDay = Day.Sunday
console.log(Day.Thursday);
console.log(Day.Monday);
console.log(Day.Saturday);

if(offDay === Day.Sunday || offDay === Day.Friday){

}

enum Roles {
    Admin = "Admin",
    Moderator = "Moderator",
    Guest = "Guest"
}

// console.log(Roles.Admin);

const nandu = {
    name : 'nandu',
    role: Roles.Moderator
}

// console.log(nandu);

enum Priority {
    Low,
    Moderate,
    medium,
    High,
    Urgent
}

enum APIstatus {
    Loading = "Loading",
    Pending = "Pending"
}