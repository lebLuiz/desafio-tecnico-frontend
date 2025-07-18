import type HttpResPaginateInterface from "@/domain/base/types/res/methods/get/index/HttpResPaginateInterface";

export default interface HttpGetIndexResInterface<T = any>
  extends HttpResPaginateInterface {
  data: Array<T>;
}
