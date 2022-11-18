package com.pdsa.gameapp.dto.MaximumProfit;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MaximumProfitDto {
	private int sugar;
	private int milk;
	private int flour;
	private int rice;
	private int fruits;
	
	public int getSugar() {
		return sugar;
	}
	public void setSugar(int sugar) {
		this.sugar = sugar;
	}
	public int getMilk() {
		return milk;
	}
	public void setMilk(int milk) {
		this.milk = milk;
	}
	public int getFlour() {
		return flour;
	}
	public void setFlour(int flour) {
		this.flour = flour;
	}
	public int getRice() {
		return rice;
	}
	public void setRice(int rice) {
		this.rice = rice;
	}
	public int getFruits() {
		return fruits;
	}
	public void setFruits(int fruits) {
		this.fruits = fruits;
	}
}
