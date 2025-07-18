import type RouteInterface from "@/router/types/RouteInterface";

export default interface TabInterface {
  id: string | number;
  label: string;
  route?: RouteInterface;
}
