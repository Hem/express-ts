import "reflect-metadata";
import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { Container } from "inversify";


import { IRouteProvider } from './core';
import { HomeRouterProvider, HeroRouteProvider } from "./routes";


// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;


  private container: Container;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.container = new Container();
    this.middleware();
    this.dependencyRegistration();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }


  private dependencyRegistration() : void {
    
        this.container.bind<IRouteProvider>("HomeRouteProvider").to(HomeRouterProvider);
        this.container.bind<IRouteProvider>("HeroRouteProvider").to(HeroRouteProvider);

  }

  // Configure API endpoints.
  private routes(): void {
    
    this.express.use( '/', this.container.get<IRouteProvider>("HomeRouteProvider").getRoutes() );
    this.express.use('/api/v1/heroes', this.container.get<IRouteProvider>("HeroRouteProvider").getRoutes() );

  }

}

export default new App().express;