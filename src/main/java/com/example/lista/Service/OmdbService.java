package com.example.lista.Service;

import com.example.lista.model.Movie;
import com.example.lista.model.OmdbResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class OmdbService {

    private static final String API_KEY = "d8c1a254";
    private static final String BASE_URL = "http://www.omdbapi.com/";

    private final WebClient webClient;

    public OmdbService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(BASE_URL).build();
    }

    public Mono<OmdbResponse> getMovieData(String title) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .queryParam("s", title)
                        .queryParam("apikey", API_KEY)
                        .build())
                .retrieve()
                .bodyToMono(OmdbResponse.class);
               }
    public Mono<Movie> getMovieById(String id) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .queryParam("i", id)
                        .queryParam("apikey", API_KEY)
                        .build())
                .retrieve()
                .bodyToMono(Movie.class);
    }
    }

