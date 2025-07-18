import type { RouteMeta, RouteRecordRaw } from "vue-router";
import type MetaRouteInterface from "@/router/shared/types/MetaRouteInterface";

export default interface RouteInterface
  extends Omit<RouteRecordRaw, "meta" | "children"> {
  meta?: RouteMeta & MetaRouteInterface;
  children?: RouteInterface[];
}
