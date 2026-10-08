const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/hello", (req, res) => {
    res.type("text/plain").send("Hello Express JS");
});

app.get("/user", (req, res) => {
    const firstname = req.query.firstname || "Zoë";
    const lastname = req.query.lastname || "Kovac";
    res.json({ firstname, lastname });
});

app.post("/user/:firstname/:lastname", (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

app.post("/users", (req, res) => {
    if (!Array.isArray(req.body)) {
        return res
            .status(400)
            .json({ error: "Request body must be a JSON array of users" });
    }
    const users = req.body.map(({ firstname, lastname }) => ({ firstname, lastname }));
    res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
