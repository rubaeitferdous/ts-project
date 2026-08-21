type UserRole2 = "Admin" | "User" | "Guest" |"Moderator";


interface User2 {
    name: string;
    role: string;
    email: string;
}

interface Admin extends User2 {
    permissions: string[];
}

interface Moderator extends User2 {
    moderatedSections: string[];
}


const bigBoss: Admin = {
    name: "Big Boss",
    role: "Admin",
    email: "rubaeitferdous",
    permissions: ["manage_users", "edit_content", "view_reports"]
}

type Book = {
    title: string;
    author: string;
    publishedYear: number;
}

interface Gift{
    price: number;
}

interface Gift {
    name:string;
}

const bdayGift: Gift = {
    name: "Watch",
    price: 100
}