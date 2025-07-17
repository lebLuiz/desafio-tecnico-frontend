import type { AxiosPromise } from "axios";
import type HttpGetIndexResInterface from "@/entities/interfaces/http/res/base/methods/HttpGetIndexResInterface";
import type HttpGetIndexParamsInterface from "@/entities/interfaces/http/res/base/methods/get/index/ParamsInterface";

export default interface BaseRepositoryInterface {
  /**
   * @template T - O tipo da resposta em `data` retornado.
   * @param {string} path - O path-URL podendo conter os filtros.
   * @returns {AxiosPromise<HttpGetIndexResInterface<T>>} - Uma promessa contendo a resposta da requisição.
   */
  index<T>(
    options: HttpGetIndexParamsInterface
  ): AxiosPromise<HttpGetIndexResInterface<T>>;
}
