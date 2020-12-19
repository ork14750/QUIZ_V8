package com.esiea.API_RANKS;

import com.esiea.API_RANKS.model.Player;
import com.esiea.API_RANKS.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

//@CrossOrigin(origins = "http://localhost:4200/players")
@RestController
@RequestMapping("/")
public class ApiController {
    @Autowired
    private PlayerService playerService;

    @CrossOrigin(origins = "http://localhost:4100")
    @GetMapping(value = "/players")
    public Collection<Player> getAllUsers() {
        Collection<Player> players = playerService.getAllUsers();
        return players;
    }


}
