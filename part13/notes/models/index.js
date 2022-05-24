import User from "./user.js";
import Note from "./note.js";

User.hasMany(Note)
Note.belongsTo(User)

await User.sync({alter: true})
await Note.sync({alter: true})


export {User, Note}
