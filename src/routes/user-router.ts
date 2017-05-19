import { UserRepository } from '../data/repository';
import { IUserRepository, User } from '../data/contracts';
import { apiMethod, IDiSetup, IRouteProvider } from '../core';
import { inject, injectable } from "inversify";
import { Router } from "express";
import { Container } from "inversify";

@injectable()
export class UserRouteProvider implements IRouteProvider {
    
    @inject(Container)
    public container:Container;
        

    // @inject("IUserRepository")
    // public userRepository:IUserRepository;
    
    
    /**
     * get Routes
     */
    public getRoutes(): Router {
        const router:Router = Router();

        router.get( '/', this.getAll );
        router.get( '/:id', this.getById );

        // router...
        return router;
    }


    
    /**
     * Return all users
     */
    public getAll:any = apiMethod( async req => {

        const repository:IUserRepository = this.container.get<IUserRepository>("IUserRepository");
    
        const data:any = await repository.find(null, 1, 20);

        return {data};
    });

    

    /**
     * Get user by id...
     */
    public getById:any = apiMethod(async req => {

        const repository:IUserRepository = this.container.get<IUserRepository>("IUserRepository");
        
        const id:number = parseInt( req.param('id') );

        const data:User = await repository.getById(id);

        return {data};
    });

}