import type { RouteRecordNameGeneric } from "vue-router";
import type RouteInterface from "@/entities/interfaces/components/atoms/cascadeRoute/Route/RouteInterface";

export default interface PropsInterface {
  route: RouteInterface;
  nameRouteActive: RouteRecordNameGeneric;
  lastRoute?: boolean;
}
