package com.pdsa.gameapp.dto.MaximumProfit;

import lombok.Data;

@Data
public class KnapsackRequestBody {
	int weightItems[];
	int profitItems[];
	int userTotalProfit;
	String name;
	
	public int[] getWeightItems() {
		return weightItems;
	}
	
	public void setWeightItems(int[] weightItems) {
		this.weightItems = weightItems;
	}
	
	public int[] getProfitItems() {
		return profitItems;
	}
	
	public void setProfitItems(int[] profitItems) {
		this.profitItems = profitItems;
	}
	
	public int getUserTotalProfit() {
		return userTotalProfit;
	}
	
	public void setUserTotalProfit(int userTotalProfit) {
		this.userTotalProfit = userTotalProfit;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
