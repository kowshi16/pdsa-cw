package com.pdsa.gameapp.controller;

import java.io.Console;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.PriorityQueue;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pdsa.gameapp.dto.IdentifyShortestPath.ShortestPathDto;

@RestController
@CrossOrigin
@RequestMapping("/shortest-path/v1")
public class IdentifyShortestPathController {
	
	@GetMapping("/get/distances")
	public ShortestPathDto getDistances() {
		try {
			int min = 10;
			int max = 100;
			
			int dis0to1 = (int)Math.floor(Math.random()*(max-min+1)+min);
			int dis1to2 = (int)Math.floor(Math.random()*(max-min+1)+min);
			int dis2to3 = (int)Math.floor(Math.random()*(max-min+1)+min);
			int dis3to4 = (int)Math.floor(Math.random()*(max-min+1)+min);
			int dis3to5 = (int)Math.floor(Math.random()*(max-min+1)+min);
			int dis4to6 = (int)Math.floor(Math.random()*(max-min+1)+min);
			int dis5to6 = (int)Math.floor(Math.random()*(max-min+1)+min);
			int dis6to0 = (int)Math.floor(Math.random()*(max-min+1)+min);
			
			ShortestPathDto shortestPathDto = new ShortestPathDto();
			shortestPathDto.setZeroToOne(dis0to1);
			shortestPathDto.setOneToTwo(dis1to2);
			shortestPathDto.setTwoToThree(dis2to3);
			shortestPathDto.setThreeToFour(dis3to4);
			shortestPathDto.setThreeToFive(dis3to5);
			shortestPathDto.setFourToSix(dis4to6);
			shortestPathDto.setFiveToSix(dis5to6);
			shortestPathDto.setSixToZero(dis6to0);
			
			return shortestPathDto;
		}
		catch(Exception ex) {
			return null;
		}
	}
	
	
	static final int V = 7;
    int minDistance(int dist[], Boolean sptSet[])
    {
        
        int min = Integer.MAX_VALUE, min_index = -1;
  
        for (int v = 0; v < V; v++)
            if (sptSet[v] == false && dist[v] <= min) {
                min = dist[v];
                min_index = v;
            }
  
        return min_index;
    }
    
    void printSolution(int dist[], int n)
    {
        System.out.println("Vertex   Distance from Source");
        int path[] = null;
        int i;
        for (i = 0; i < V; i++) {
        	System.out.println(i + " tt " + dist[i]);
        }
            
    }
	
	@PostMapping("/identify-shortest-path")
	public ResponseEntity IdentifyShortestPath() {
		try {
			
			int dist[] = new int[V];
			int src = 0;
			
			int graph[][] = new int[][] { { 0, 2, 0, 1, 0, 0, 0 },
                { 0, 0, 0, 3, 10, 0, 0 },
                { 4, 8, 0, 0, 0, 5, 0 },
                { 0, 0, 2, 0, 2, 8, 4 },
                { 0, 0, 0, 0, 0, 0, 6 },
                { 0, 0, 0, 0, 0, 0, 0 },
                { 0, 0, 0, 0, 0, 1, 0 } };
	        
	        Boolean sptSet[] = new Boolean[V];
	  
	        for (int i = 0; i < V; i++) {
	            dist[i] = Integer.MAX_VALUE;
	            sptSet[i] = false;
	        }
	  
	        dist[src] = 0;
	  
	        for (int count = 0; count < V - 1; count++) {
	            
	            int u = minDistance(dist, sptSet);
	  
	            sptSet[u] = true;
	  
	            for (int v = 0; v < V; v++)
	  
	                if (!sptSet[v] && graph[u][v] != 0 && 
	                   dist[u] != Integer.MAX_VALUE && dist[u] + graph[u][v] < dist[v])
	                    dist[v] = dist[u] + graph[u][v];
	        }
	        
	        printSolution(dist, V);

	        return null;
		}
		catch(Exception ex) {
			return null;
		}
	}

}
