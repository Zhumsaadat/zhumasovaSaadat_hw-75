import express, { Router, Response, Request } from 'express';
import { Echo } from '../types';

const echo: Router = express.Router();

echo.get('/:value', (req, res) => {
    try{
        const newEcho: Echo = {
            echo: req.params.value
        };
        res.send(newEcho);
        }catch (e){
        res.send(e);
    }
});

export default echo;