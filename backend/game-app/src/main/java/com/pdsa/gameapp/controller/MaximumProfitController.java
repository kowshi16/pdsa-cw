package com.pdsa.gameapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pdsa.gameapp.dto.MaximumProfit.KnapsackRequestBody;
import com.pdsa.gameapp.dto.MaximumProfit.MaximumProfitDto;
import com.pdsa.gameapp.model.MaximumProfitKnapsack;
import com.pdsa.gameapp.repository.MaximumProfitRepository;


@RestController
@CrossOrigin
@RequestMapping("/maximum-profit/v1")
public class MaximumProfitController {
	
	@Autowired
	MaximumProfitRepository maximumProfitRepository;
	
	@GetMapping("/get/weights")
	public MaximumProfitDto getWeights() {
		try {
			int min = 1;
			int max = 5;
			
			int randomWeightSugar = (int)Math.floor(Math.random()*(max-min+1)+min);
			int randomWeightMilk = (int)Math.floor(Math.random()*(max-min+1)+min);
			int randomWeightRice = (int)Math.floor(Math.random()*(max-min+1)+min);
			int randomWeightFlour = (int)Math.floor(Math.random()*(max-min+1)+min);
			int randomWeightFruits = (int)Math.floor(Math.random()*(max-min+1)+min);
			
			MaximumProfitDto maximumProfitDto = new MaximumProfitDto();
			maximumProfitDto.setSugar(randomWeightSugar);
			maximumProfitDto.setMilk(randomWeightMilk);
			maximumProfitDto.setRice(randomWeightRice);
			maximumProfitDto.setFlour(randomWeightFlour);
			maximumProfitDto.setFruits(randomWeightFruits);
			
			return maximumProfitDto;
		}
		catch(Exception ex) {
			return null;
		}
	}
	
	@GetMapping("/get/profit")
	public MaximumProfitDto getProfit() {
		try {
			int min = 5;
			int max = 10;
			
			int randomProfitSugar = (int)Math.floor(Math.random()*(max-min+1)+min);
			int randomProfitMilk = (int)Math.floor(Math.random()*(max-min+1)+min);
			int randomProfitRice = (int)Math.floor(Math.random()*(max-min+1)+min);
			int randomProfitFlour = (int)Math.floor(Math.random()*(max-min+1)+min);
			int randomProfitFruits = (int)Math.floor(Math.random()*(max-min+1)+min);
			
			MaximumProfitDto maximumProfitDto = new MaximumProfitDto();
			maximumProfitDto.setSugar(randomProfitSugar);
			maximumProfitDto.setMilk(randomProfitMilk);
			maximumProfitDto.setRice(randomProfitRice);
			maximumProfitDto.setFlour(randomProfitFlour);
			maximumProfitDto.setFruits(randomProfitFruits);
			
			return maximumProfitDto;
		}
		catch(Exception ex) {
			return null;
		}
	}
	
	static int max(int a, int b) {
        return (a > b) ? a : b;
    }
	
	@PostMapping("/knapsack")
	public ResponseEntity knapsackProblem(@RequestBody KnapsackRequestBody knapsackRequestBody){
		try {
			int n = 5;
			int W = 10;
			int i, w;
	        int M[][] = new int[n + 1][W + 1];
	        int totalProfit;

	        for (i = 0; i <= n; i++) {
	            for (w = 0; w <= W; w++) {
	                if (i == 0 || w == 0)
	                    M[i][w] = 0;
	                else if (knapsackRequestBody.getWeightItems()[i - 1] <= w)
	                    M[i][w] = max(knapsackRequestBody.getProfitItems()[i - 1] + M[i - 1][w - knapsackRequestBody.getWeightItems()[i - 1]], M[i - 1][w]);
	                else
	                    M[i][w] = M[i - 1][w];
	            }
	        }
	        totalProfit = M[n][W];
	        System.out.println("Maximum Value:\t" + totalProfit);

	        System.out.println("Selected Packs: ");

	        while (n != 0) {
	            if (M[n][W] != M[n - 1][W]) {
	                System.out.println("Pack " + n + " with weight = " + knapsackRequestBody.getWeightItems()[n - 1] + " and value = " + knapsackRequestBody.getProfitItems()[n - 1]);

	                W = W - knapsackRequestBody.getWeightItems()[n - 1];
	            }
	            n--;
	        }
	        
	        if(knapsackRequestBody.getUserTotalProfit() == totalProfit) {
	        	MaximumProfitKnapsack maximumProfitKnapsack = new MaximumProfitKnapsack();
	        	maximumProfitKnapsack.setName("Kasun");
	        	maximumProfitKnapsack.setTotalProfit(knapsackRequestBody.getUserTotalProfit());
	        	maximumProfitRepository.save(maximumProfitKnapsack);
	        	
	        	return ResponseEntity.ok().body("Congratulations! Your answer is correct!");
	        }
	        else {
	        	return ResponseEntity.ok().body("Sorry your answer is incorect. Please try again!");
	        }
		}
		catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}
}
