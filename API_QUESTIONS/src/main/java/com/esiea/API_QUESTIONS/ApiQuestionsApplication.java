package com.esiea.API_QUESTIONS;

import com.esiea.API_QUESTIONS.service.QuestionsService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ApiQuestionsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiQuestionsApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(QuestionsService questionsService) {
		return (args) -> {
			// save a few customers
			questionsService.loadDataQuestions();


		};
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/questions").allowedOrigins("http://localhost:4100");
				registry.addMapping("/questions/random").allowedOrigins("http://localhost:4100");
			}
		};
	}

}
