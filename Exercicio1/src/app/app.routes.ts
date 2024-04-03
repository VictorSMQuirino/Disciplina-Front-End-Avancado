import { Routes } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';

export const routes: Routes = [
    {
        path: 'primeiro',
        component: Component1Component
    },
    {
        path: 'segundo',
        loadComponent: () => import('./components/component2/component2.component').then(comp => comp.Component2Component)
    },
    {
        path: 'terceiro',
        loadComponent: () => import('./components/component3/component3.component').then(comp => comp.Component3Component)
    }
];
