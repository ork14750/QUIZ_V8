package com.esiea.API_RANKS;

import com.esiea.API_RANKS.service.PlayerService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

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

}
