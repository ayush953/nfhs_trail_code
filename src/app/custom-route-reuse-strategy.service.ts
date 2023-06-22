import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
//   shouldDetach(route: ActivatedRouteSnapshot): boolean {
//     return false;
//   }

//   store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {}

//   shouldAttach(route: ActivatedRouteSnapshot): boolean {
//     return false;
//   }

//   retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
//     return null;
//   }

//   shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
//     // Customize your route reuse logic here
//     return future.routeConfig === curr.routeConfig;
//   }
private handlers: { [key: string]: DetachedRouteHandle } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // this.handlers[route.routeConfig.path || ''] = handle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.handlers[route.routeConfig.path || ''];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (!route.routeConfig || !this.handlers[route.routeConfig.path || '']) {
      return null;
    }
    return this.handlers[route.routeConfig.path || ''];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
