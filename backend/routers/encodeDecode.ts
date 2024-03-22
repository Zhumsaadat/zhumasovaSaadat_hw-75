import express, { Request, Response, Router } from 'express';

const Viginere = require("caesar-salad").Vigenere;
const encodeDecode: Router = express.Router();


encodeDecode.post('/encode', (req: Request, res: Response) => {
    try {
        const { password, message } = req.body;
        const encodedMessage = Viginere.Cipher(password).crypt(message);
        res.json({ encoded: encodedMessage });
    } catch (error) {
        res.json(error);
    }
});

encodeDecode.post('/decode', (req: Request, res: Response) => {
    try {
        const { password, message } = req.body;
        const decodedMessage = Viginere.Decipher(password).crypt(message);
        res.json({ decoded: decodedMessage });
    } catch (error) {
        res.json(error);
    }
});


export default encodeDecode;