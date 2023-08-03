import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'
})
export class NasaApiService{
    private apiKey = 'ocsOvffR7U4abwkawm1ga2EQU2WId17SXCGUgwXe';

    constructor(private http: HttpClient) {}

    getAstronomyPictureOfTheDay(date?:string): Observable<any> {
        const url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&date=${date}`;
        return this.http.get(url);
    }
}