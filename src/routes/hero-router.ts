import { IRouteProvider } from '../core/i-route-provider';
import {Router, Request, Response, NextFunction} from 'express';
import { apiMethod } from '../core/api-abstraction';

const Heroes = require('../data');


class Hero {
  constructor(public id: number, public name: string) {}
}



/**
 * get one based on id
 */
const getOne = apiMethod( async req => {
    const query = parseInt(req.params.id);
    const hero = Heroes.find(hero => hero.id === query);
    return await Promise.resolve({
      statusCode: (hero ? 200 : 404),
      data:hero
    });  
});



/**
 * 
 */
const getAll = apiMethod(async req => {
    return await Promise.resolve({
      statusCode: 200,
      data: Heroes
    });
});



/**
 * 
 */
const wrappedHeroObject = apiMethod(async req => {
    return await Promise.resolve({ 
      statusCode:200,
      data: new Hero(1, 'Hero')
    });
});


/**
 * 
 */
export class HeroRouteProvider implements IRouteProvider {
    
    public getRoutes(): Router {
      const router:Router = Router();

      router.get('/', getAll);
      router.get('/test', wrappedHeroObject);
      router.get('/:id', getOne);

        return router;
    }
}

