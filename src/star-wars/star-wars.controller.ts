import { Controller, Get, Param } from '@nestjs/common';
import { StarWarsService } from './star-wars.service';

@Controller('star-wars')
export class StarWarsController {
    constructor(private readonly starWarsService: StarWarsService) {}
    @Get('planets')
    planets() {
        return this.starWarsService.getPlanets();
    }

    @Get('planets/:id')
    planet(@Param('id') id: string) {
        return this.starWarsService.getPlanet(id);
    }

    @Get('films')
    films() {
        return this.starWarsService.getFilms();
    }

    @Get('films/:id')
    film(@Param('id') id: string) {
        return this.starWarsService.getFilm(id);
    }
}
