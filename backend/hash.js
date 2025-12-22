import bcrypt from "bcryptjs";

const password = "AIifA2@75@5$543"; 
const hashed = await bcrypt.hash(password, 10);
console.log("Hashed password:", hashed);



// admin@gmail.com
// AIifA2@75@5$543