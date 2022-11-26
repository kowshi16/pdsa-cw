package com.pdsa.gameapp.dto.MinimumConnector;

import lombok.Data;

@Data
public class MinimumConnectorRequest {
	int graph[][];
	String edgeWeight[];
	String name;
	
	public int[][] getGraph() {
		return graph;
	}
	
	public void setGraph(int[][] graph) {
		this.graph = graph;
	}

	public String[] getEdgeWeight() {
		return edgeWeight;
	}

	public void setEdgeWeight(String[] edgeWeight) {
		this.edgeWeight = edgeWeight;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	
	
}
