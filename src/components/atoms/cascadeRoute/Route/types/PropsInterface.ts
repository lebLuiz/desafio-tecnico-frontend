import type { RouteRecordNameGeneric } from "vue-router";
import type RouteInterface from "@/components/atoms/cascadeRoute/Route/types/RouteInterface";

export default interface PropsInterface {
  route: RouteInterface;
  nameRouteActive: RouteRecordNameGeneric;
  lastRoute?: boolean;
}
