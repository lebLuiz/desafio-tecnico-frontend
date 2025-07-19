import type { RouteNameType } from "@/router/types/RouteNameType";
import type RouteInterface from "@/router/types/RouteInterface";

export default {
  name: "HOME" as RouteNameType,
  path: "/",
  redirect: { name: "FLOW" as RouteNameType },
  meta: {
    label: "Início",
  },
} as RouteInterface;
