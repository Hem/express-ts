import { ApiMethodDefinition } from '../core';
import { IRouteProvider } from '../core/i-route-provider';
import { Router, Request, Response, NextFunction} from 'express';
import { apiMethod } from '../core/api-abstraction';
import { inject, injectable } from "inversify";

@injectable()
export class HeroRouteProvider implements IRouteProvider {

    Heroes:any;

    constructor() {
      this.Heroes = require('../hero-data');
    }
    
    public getRoutes(): Router {

          const router:Router = Router();

          router.get('/', this.getAll);
          router.get('/test', this.wrappedObject);
          router.get('/:id', this.getOne);

          return router;
    }



    public getOne:any = apiMethod( async req => {
        const query = parseInt(req.params.id);
        const hero = this.Heroes.find(hero => hero.id === query);
        return await Promise.resolve({
          statusCode: (hero ? 200 : 404),
          data:hero
        });  
    });
    
    public getAll:any = apiMethod(async req => {
        return await Promise.resolve({
          statusCode: 200,
          data: this.Heroes
        });
    });

    public wrappedObject:any = apiMethod(async req => {
        return await Promise.resolve({ 
          statusCode:200,
          data: new Hero(1, 'Hero')
        });
    });

}


export class Hero {
  constructor(public id: number, public name: string) {}
}
