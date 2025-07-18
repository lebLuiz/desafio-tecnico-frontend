import type { AxiosPromise } from "axios";
import type BaseRepositoryInterface from "@/domain/base/types/BaseRepositoryInterface";
import BaseModel from "@/domain/base/BaseModel";
import BaseHttpClientService from "@/domain/base/BaseHttpClientService";
import type HttpGetIndexResInterface from "@/domain/base/types/res/HttpGetIndexResInterface";
import type HttpGetIndexParamsInterface from "@/domain/base/types/req/methods/get/index/ParamsInterface";

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
