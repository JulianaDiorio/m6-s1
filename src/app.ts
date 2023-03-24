import "express-async-errors";
import "reflect-metadata";
import express from "express";
import "dotenv/config";
import { userRoutes } from "./routes/users.routes";
import { loginRoutes } from "./routes/login.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import { handleError } from "./errors/appErrors";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleError);

export default app;
