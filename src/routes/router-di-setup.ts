import { Container } from "inversify";
import { IDiSetup, IRouteProvider } from '../core';
import { HomeRouterProvider, HeroRouteProvider } from './';


export class RouterDiSetup implements IDiSetup {

    public setup(container: Container): void {
        
        container.bind<IRouteProvider>("HomeRouteProvider").to(HomeRouterProvider);
        container.bind<IRouteProvider>("HeroRouteProvider").to(HeroRouteProvider);

    }
}