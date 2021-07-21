import express, { Request, Response } from "express";
import { test } from "./models/test";
const app = express();
const port = 3005; // default port to listen

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
    res.send("Hello world!");
});


const funting = (props: test):any => {
    console.log(props.test1)
    console.log(props.test2)
    return 'dd'
}
// funting({ test1: 1, test2: '1' })
const f = {test1:1,test2:'d'} as test
console.log(funting({ test1: 1, test2: '1' }));

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});