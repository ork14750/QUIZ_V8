package com.esiea.API_RANKS;

import com.esiea.API_RANKS.service.PlayerService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ApiRanksApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiRanksApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(PlayerService playerService) {
		return (args) -> {
			// save a few customers
			playerService.loadDataUsers();


		};
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/players").allowedOrigins("http://localhost:4100");
			}
		};
	}

}
