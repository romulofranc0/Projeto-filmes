package com.example.lista.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Data
public class OmdbResponse {
    @JsonProperty("Search")
    private List<Movie> search;
    @JsonProperty("totalResults")
    private String totalResults;
    @JsonProperty("Response")
    private String response;

    public void setSearch(List<Movie> search) {
        this.search = search;
    }

    public void setTotalResults(String totalResults) {
        this.totalResults = totalResults;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}
