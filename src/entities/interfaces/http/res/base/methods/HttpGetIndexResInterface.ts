import type HttpResPaginateInterface from "@/entities/interfaces/http/res/base/methods/get/index/HttpResPaginateInterface";

export default interface HttpGetIndexResInterface<T = any>
  extends HttpResPaginateInterface {
  data: Array<T>;
}
