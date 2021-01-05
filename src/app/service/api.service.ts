import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '../model/Item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'api';

  constructor(private httpClient: HttpClient) {
  }

  public getItems() {
    return this.httpClient.get<Item[]>(`${this.apiURL}/bank`);
  }

  public createItem(item: Item) {
    return this.httpClient.post(`${this.apiURL}/bank/`, item);
  }

  public updateItem(item: Item) {
    return this.httpClient.put(`${this.apiURL}/bank/${item._id}`, item);
  }

  public deleteItem(id: string) {
    return this.httpClient.delete(`${this.apiURL}/bank/${id}`);
  }
}
