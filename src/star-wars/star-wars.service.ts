import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, map } from 'rxjs';

@Injectable()
export class StarWarsService {
    constructor(
     private readonly httpService: HttpService,
     private readonly configService: ConfigService,
    ) {}
    url = this.configService.get<string>('STARWARS_URL');
    async getPlanets() {
        return this.httpService.get(`${this.url}planets`).pipe(
          map((response) => response.data.results),
          catchError((error) => {
            throw new HttpException(
              `Error when called api: ${error.response?.data?.message || error.message}`,
              HttpStatus.BAD_REQUEST,
            );
          }),
        );
      }
    
      async getPlanet(id: string) {
        return this.httpService.get(`${this.url}planets/${id}`).pipe(
          map((response) => response.data),
          catchError((error) => {
            throw new HttpException(
                `Error when called api: ${error.response?.data?.message || error.message}`,
              HttpStatus.BAD_REQUEST,
            );
          }),
        );
      }

      async getFilms() {
        return this.httpService.get(`${this.url}films`).pipe(
          map((response) => response.data.results),
          catchError((error) => {
            throw new HttpException(
                `Error when called api: ${error.response?.data?.message || error.message}`,
              HttpStatus.BAD_REQUEST,
            );
          }),
        );
      }
    
      async getFilm(id: string) {
        return this.httpService.get(`${this.url}films/${id}`).pipe(
          map((response) => response.data),
          catchError((error) => {
            throw new HttpException(
                `Error when called api: ${error.response?.data?.message || error.message}`,
              HttpStatus.BAD_REQUEST,
            );
          }),
        );
      }
    
}
