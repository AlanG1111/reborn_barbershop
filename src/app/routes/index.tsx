import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { Home } from '@/app/views/Home';

/**
 * ComponentRoutes holds all needed information to fill up routes config.
 */
export class ComponentRoutes implements RouteObject {
    /** data route config*/
    constructor(
        public path: string,
        public element: React.ReactNode,
        public children?: ComponentRoutes[]
    ) { }
    /** Method for creating child sub-routes path */
    public with(
        child: ComponentRoutes,
    ): string {
        return `${this.path}/${child.path}`;
    }
    /** Call with method for each child */
    public addChildren(children: ComponentRoutes[]): ComponentRoutes {
        this.children = children;

        return this;
    }
}

/** Route config implementation */
export class RouteConfig {

    public static Home = new ComponentRoutes(
        '/',
        <Home />
    );



    /** Routes is an array of logical router components */
    public static routes: ComponentRoutes[] = [
        RouteConfig.Home,
    ];
}

export const Routes = () => useRoutes(RouteConfig.routes);
