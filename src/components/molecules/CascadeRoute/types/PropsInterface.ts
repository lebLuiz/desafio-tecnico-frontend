import type { RouteLocationMatched, RouteRecordNameGeneric } from "vue-router";
import type RouteInterface from "@/router/types/RouteInterface";

export default interface PropsInterface {
  cascadeRoutes: Array<RouteInterface | RouteLocationMatched>;
  nameRouteActive: RouteRecordNameGeneric;
}
