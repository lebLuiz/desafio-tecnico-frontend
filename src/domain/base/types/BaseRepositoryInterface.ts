import type { AxiosPromise } from "axios";
import type HttpGetIndexResInterface from "@/domain/base/types/res/HttpGetIndexResInterface";
import type HttpGetIndexParamsInterface from "@/domain/base/types/req/methods/get/index/ParamsInterface";

export default interface BaseRepositoryInterface {
  /**
   * @template T - O tipo da resposta em `data` retornado.
   * @param {string} [options.filter] - Filtro opcional para a requisição.
   * @param {AxiosRequestConfig} [options.config] - Configuração opcional para a requisição Axios.
   * @returns {AxiosPromise<HttpGetIndexResInterface<T>>} - Uma promessa contendo a resposta da requisição.
   */
  index<T>(
    options: HttpGetIndexParamsInterface
  ): AxiosPromise<HttpGetIndexResInterface<T>>;
}
