import type { RouteLocationMatched, RouteRecordNameGeneric } from "vue-router";
import type RouteInterface from "@/entities/interfaces/router/RouteInterface";

export default interface PropsInterface {
  cascadeRoutes: Array<RouteInterface | RouteLocationMatched>;
  nameRouteActive: RouteRecordNameGeneric;
}
