import { Container } from "inversify";
import { IDiSetup } from '../core';
import { IGroupRepository, IUserRepository } from "./contracts";
import { GroupRepository, UserRepository } from './repository';



export class RepositoryDiSetup implements IDiSetup {
    
    setup( container: Container): void {

        container.bind<IUserRepository>("IUserRepository").to(UserRepository);
        container.bind<IGroupRepository>("IGroupRepository").to(GroupRepository);

    }

}