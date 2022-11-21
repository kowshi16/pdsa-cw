package com.pdsa.gameapp.dto.MinimumConnector;

import lombok.Data;

@Data
public class MinimumConnectorRequest {
	int graph[][];
	String edgeWeight;
	
	public int[][] getGraph() {
		return graph;
	}
	
	public void setGraph(int[][] graph) {
		this.graph = graph;
	}
	
	public String getEdgeWeight() {
		return edgeWeight;
	}
	
	public void setEdgeWeight(String edgeWeight) {
		this.edgeWeight = edgeWeight;
	}
	
	
}
