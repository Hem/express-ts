import { User } from '../models';
import { AbstractRepository } from './abstract-repository';
import { IUserRepository } from '../contracts';
import { injectable } from "inversify";


@injectable()
export class UserRepository extends AbstractRepository implements IUserRepository {

    // Set the table name to users
    tableName: string = "users";


    async getById(id: number): Promise<User> {
        
        return await this.getTable()
                            .where({id: id})
                                .first();
    }

    async find(filter: string, pageNumber: number, count: number): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    async create(dto: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
    async update(dto: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

}