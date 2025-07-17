import type { AxiosPromise, AxiosRequestConfig } from "axios";
import type BaseRepositoryInterface from "@/entities/domain/base/interfaces/BaseRepositoryInterface";
import BaseModel from "@/entities/domain/base/BaseModel";
import BaseHttpClientService from "@/entities/domain/base/BaseHttpClientService";
import type HttpGetIndexResInterface from "@/entities/interfaces/http/res/base/methods/HttpGetIndexResInterface";
import type HttpGetIndexParamsInterface from "@/entities/interfaces/http/res/base/methods/get/index/ParamsInterface";

export default abstract class BaseRepository
  implements BaseRepositoryInterface
{
  protected abstract _model: BaseModel;
  protected _httpClient: BaseHttpClientService;

  public constructor() {
    this._httpClient = new BaseHttpClientService();
  }

  index<T>({
    filter,
    config,
  }: HttpGetIndexParamsInterface): AxiosPromise<HttpGetIndexResInterface<T>> {
    const url = filter
      ? `${this._model.name}/${filter}`
      : `${this._model.name}`;
    return this._httpClient.getBackClient().get(url, config);
  }
}
