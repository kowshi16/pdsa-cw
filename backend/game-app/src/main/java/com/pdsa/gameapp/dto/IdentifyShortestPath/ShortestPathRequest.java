package com.pdsa.gameapp.dto.IdentifyShortestPath;

import lombok.Data;

@Data
public class ShortestPathRequest {
	int graph[][];

	public int[][] getGraph() {
		return graph;
	}

	public void setGraph(int[][] graph) {
		this.graph = graph;
	}
	
	
}
