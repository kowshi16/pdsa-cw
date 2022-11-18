package com.pdsa.gameapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pdsa.gameapp.dto.MaximumProfit.MaximumProfitDto;


@RestController
@CrossOrigin
@RequestMapping("/maximum-profit/v1")
public class MaximumProfitController {
	
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
}
