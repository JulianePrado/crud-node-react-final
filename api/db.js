import mysql from "mysql"

export const db = mysql.createConnection({
    host: "44DE194177",
    user: "root",
    password: "",
    database: "lista"
});