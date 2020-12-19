package com.esiea.API_QUESTIONS;

import com.esiea.API_QUESTIONS.model.Questions;
import com.esiea.API_QUESTIONS.service.QuestionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Collection;
import java.util.List;


@Controller
public class ApiController {
    @Autowired
    private QuestionsService questionsService;

    @CrossOrigin(origins = "http://localhost:4100")
    @GetMapping(value = "/questions")
    public ResponseEntity<Collection<Questions>> getAllQuestions() {
        Collection<Questions> questions = questionsService.getAllQuestions();
        return new ResponseEntity<Collection<Questions>>(questions, HttpStatus.FOUND);
    }

    @CrossOrigin(origins = "http://localhost:4100")
    @GetMapping(value = "/questions/random")
    public ResponseEntity<List> getRandomQuestions() {
        List questions = questionsService.getRandomQuestions();
        return new ResponseEntity<List>(questions, HttpStatus.FOUND);
    }
}
