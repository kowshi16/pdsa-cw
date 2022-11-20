package com.pdsa.gameapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class MinimumConnector {

	@Id
	@GeneratedValue()
	private Long player_id;
	private String name;
	private int totalDistance;
	
	
	public Long getPlayer_id() {
		return player_id;
	}

	public void setPlayer_id(Long player_id) {
		this.player_id = player_id;
	}

	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public int getTotalDistance() {
		return totalDistance;
	}
	
	public void setTotalDistance(int totalDistance) {
		this.totalDistance = totalDistance;
	}
	

}
