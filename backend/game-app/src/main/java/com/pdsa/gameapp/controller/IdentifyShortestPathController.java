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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pdsa.gameapp.dto.IdentifyShortestPath.ShortestPathDto;
import com.pdsa.gameapp.dto.IdentifyShortestPath.ShortestPathRequest;
import com.pdsa.gameapp.dto.MinimumConnector.MinimumConnectorRequest;

@RestController
@CrossOrigin
@RequestMapping("/shortest-path/v1")
public class IdentifyShortestPathController {

	@GetMapping("/get/distances")
	public ShortestPathDto getDistances() {
		try {
			int min = 10;
			int max = 100;

			int dis0to1 = (int) Math.floor(Math.random() * (max - min + 1) + min);
			int dis1to2 = (int) Math.floor(Math.random() * (max - min + 1) + min);
			int dis2to3 = (int) Math.floor(Math.random() * (max - min + 1) + min);
			int dis3to4 = (int) Math.floor(Math.random() * (max - min + 1) + min);
			int dis3to5 = (int) Math.floor(Math.random() * (max - min + 1) + min);
			int dis4to6 = (int) Math.floor(Math.random() * (max - min + 1) + min);
			int dis5to6 = (int) Math.floor(Math.random() * (max - min + 1) + min);
			int dis6to0 = (int) Math.floor(Math.random() * (max - min + 1) + min);

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
		} catch (Exception ex) {
			return null;
		}
	}

	private static final int NO_PARENT = -1;

	private static void dijkstra(int[][] adjacencyMatrix, int startVertex) {
		int nVertices = adjacencyMatrix[0].length;

		int[] shortestDistances = new int[nVertices];

		boolean[] added = new boolean[nVertices];

		for (int vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
			shortestDistances[vertexIndex] = Integer.MAX_VALUE;
			added[vertexIndex] = false;
		}

		shortestDistances[startVertex] = 0;

		int[] parents = new int[nVertices];

		parents[startVertex] = NO_PARENT;

		for (int i = 1; i < nVertices; i++) {

			int nearestVertex = -1;
			int shortestDistance = Integer.MAX_VALUE;
			for (int vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
				if (!added[vertexIndex] && shortestDistances[vertexIndex] < shortestDistance) {
					nearestVertex = vertexIndex;
					shortestDistance = shortestDistances[vertexIndex];
				}
			}

			added[nearestVertex] = true;

			for (int vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
				int edgeDistance = adjacencyMatrix[nearestVertex][vertexIndex];

				if (edgeDistance > 0 && ((shortestDistance + edgeDistance) < shortestDistances[vertexIndex])) {
					parents[vertexIndex] = nearestVertex;
					shortestDistances[vertexIndex] = shortestDistance + edgeDistance;
				}
			}
		}

		printSolution(startVertex, shortestDistances, parents);
	}

	private static void printSolution(int startVertex, int[] distances, int[] parents) {
		int nVertices = distances.length;
		System.out.print("Vertex\t Distance\tPath");

		for (int vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
			if (vertexIndex != startVertex) {
				System.out.print("\n" + startVertex + " -> ");
				System.out.print(vertexIndex + " \t\t ");
				System.out.print(distances[vertexIndex] + "\t\t");
				printPath(vertexIndex, parents);
			}
		}
	}

	private static void printPath(int currentVertex, int[] parents) {

		if (currentVertex == NO_PARENT) {
			return;
		}
		printPath(parents[currentVertex], parents);
		System.out.print(currentVertex + " ");
	}

	@PostMapping("/find/shortest-path")
	public ResponseEntity findMinimumConnector(@RequestBody ShortestPathRequest shortestPathRequest) {
		try {
//			int[][] adjacencyMatrix = { { 0, 4, 0, 0, 0, 0, 0, 8, 0 }, { 4, 0, 8, 0, 0, 0, 0, 11, 0 },
//					{ 0, 8, 0, 7, 0, 4, 0, 0, 2 }, { 0, 0, 7, 0, 9, 14, 0, 0, 0 }, { 0, 0, 0, 9, 0, 10, 0, 0, 0 },
//					{ 0, 0, 4, 0, 10, 0, 2, 0, 0 }, { 0, 0, 0, 14, 0, 2, 0, 1, 6 }, { 8, 11, 0, 0, 0, 0, 1, 0, 7 },
//					{ 0, 0, 2, 0, 0, 0, 6, 7, 0 } };
			int[][] adjacencyMatrix = shortestPathRequest.getGraph();
			dijkstra(adjacencyMatrix, 0);
			return ResponseEntity.ok().body("Congratulations! Your answer is correct!");
		}

		catch (Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}

}
