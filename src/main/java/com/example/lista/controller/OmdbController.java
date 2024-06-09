package com.example.lista.controller;

import com.example.lista.model.Movie;
import com.example.lista.model.OmdbResponse;
import com.example.lista.Service.OmdbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class OmdbController {

    private final OmdbService omdbService;

    @Autowired
    public OmdbController(OmdbService omdbService) {
        this.omdbService = omdbService;
    }

    @GetMapping("/allmovies")
    public Mono<OmdbResponse> getAllMovies(@RequestParam String title) {
        return omdbService.getMovieData(title);
    }

    @GetMapping("/movie")
    public Mono<Movie> getMovie(@RequestParam String title) {return omdbService.getMovie(title);}
}
