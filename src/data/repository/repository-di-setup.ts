import { GroupRepository } from './group-repository';
import { UserRepository } from './user-repository';
import { Container } from "inversify";
import { IDiSetup } from '../../core';
import { IUserRepository, IGroupRepository } from "../contracts/index";



export class RepositoryDiSetup implements IDiSetup {
    
    setup(container: Container): void {

        container.bind<IUserRepository>("IUserRepository").to(UserRepository);
        container.bind<IGroupRepository>("IGroupRepository").to(GroupRepository);

    }

}