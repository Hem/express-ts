import { IGroupRepository, Group } from '../data';
import { Router } from 'express';
import { apiMethod,  IRouteProvider } from '../core';
import { Container } from "inversify";
import { inject, injectable } from "inversify";


@injectable()
export class GroupRouteProvider implements IRouteProvider {

    @inject(Container)
    public container:Container;

    public getRoutes(): Router {
        
        const router:Router = Router();

        router.get('/', this.getAll);
        router.get('/:id', this.getById);

        return router;
    }


    /**
     * Return all users
     */
    public getAll:any = apiMethod( async req => {

        const repository:IGroupRepository = this.container.get<IGroupRepository>("IGroupRepository");

        const data:any = await repository.find(null, 1, 20);

        return {data};
    });

    

    /**
     * Get user by id...
     */
    public getById:any = apiMethod(async req => {

        const repository:IGroupRepository = this.container.get<IGroupRepository>("IGroupRepository");
        
        const id:number = parseInt( req.params.id );

        const data:Group = await repository.getById(id);

        return {data};
    });


}