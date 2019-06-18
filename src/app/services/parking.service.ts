import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from '../models/Entry';
import { ResponseEntry } from '../models/Response';

@Injectable()
export class ParkingService {
  constructor(private http: HttpClient) { }

  async getVehicles(): Promise<Observable<Entry[]>> {
    return await this.http.get<Entry[]>('/entry')
  }

  async saveEntry(entry: Entry): Promise<Observable<ResponseEntry>> {
    return await this.http.post<ResponseEntry>('/entry', entry);
  }

  async dispatchEntry(entry: Entry): Promise<Observable<ResponseEntry>> {
    return await this.http.put<ResponseEntry>('/entry', entry);
  }
}