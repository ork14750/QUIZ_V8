package com.esiea.API_RANKS.service;

import com.esiea.API_RANKS.model.Player;

import java.util.Collection;
import java.util.Optional;

public interface PlayerService {
    void save(Player player);

    Optional<Player> findByUsername(String username);

    void loadDataUsers();

    Collection<Player> getAllUsers();

}
