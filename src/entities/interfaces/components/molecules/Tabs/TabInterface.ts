import type RouteInterface from "@/entities/interfaces/router/RouteInterface";

export default interface TabInterface {
  id: string | number;
  label: string;
  route?: RouteInterface;
}
