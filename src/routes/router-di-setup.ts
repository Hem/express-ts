import { GroupRouteProvider } from './group-router';
import { Container } from "inversify";
import { IDiSetup, IRouteProvider } from '../core';
import { HomeRouterProvider,  UserRouteProvider } from './';


export class RouterDiSetup implements IDiSetup {

    public setup(container: Container): void {
        
        container.bind<IRouteProvider>("HomeRouteProvider").to(HomeRouterProvider);
        container.bind<IRouteProvider>("UserRouteProvider").to(UserRouteProvider);
        container.bind<IRouteProvider>("GroupRouteProvider").to(GroupRouteProvider);
    }
}