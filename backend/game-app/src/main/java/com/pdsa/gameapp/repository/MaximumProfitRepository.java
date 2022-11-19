package com.pdsa.gameapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pdsa.gameapp.model.MaximumProfitKnapsack;

@Repository
public interface MaximumProfitRepository extends JpaRepository<MaximumProfitKnapsack, Long> {

}
