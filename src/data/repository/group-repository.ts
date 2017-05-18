import { Group } from '../models';
import { IGroupRepository } from '../contracts';
import { AbstractRepository } from './abstract-repository';

export class GroupRepository extends AbstractRepository implements IGroupRepository {
    
    tableName: string = 'groups';

    async getById(id: number): Promise<Group> {
        return await this.getTable()
                    .where({id: id})
                        .first();
    }

    find(filter: string, pageNumber: number, count: number): Promise<Group[]> {
        throw new Error("Method not implemented.");
    }

    create(dto: Group): Promise<Group> {
        throw new Error("Method not implemented.");
    }
    
    update(dto: Group): Promise<Group> {
        throw new Error("Method not implemented.");
    }


}