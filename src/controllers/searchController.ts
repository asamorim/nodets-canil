import { Request, Response } from "express";

import { Pet } from "../models/pet";

import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response)=>{
    //pegando o q foi digitado na busca (esta na url)
    let query : string = req.query.q as string;
    let list = Pet.getFromName(query);

    //verificando se foi digitado algo no pesquisa
    if(!query){
        res.redirect('/');
        return ///para parar a execucao do codigo
    }

    res.render('pages/page',{
        menu: createMenuObject(''),
        list,
        query

    });
}