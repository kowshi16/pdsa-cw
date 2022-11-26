package com.pdsa.gameapp.controller;

import java.util.Arrays;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pdsa.gameapp.dto.MinimumConnector.MinimumConnectorDto;
import com.pdsa.gameapp.dto.MinimumConnector.MinimumConnectorRequest;

@RestController
@CrossOrigin
@RequestMapping("/minimum-connector/v1")
public class MinimumConnectorController {
	
	@GetMapping("/get/distances")
	public MinimumConnectorDto getDistances() {
		try {
			int min = 10;
			int max = 100;
			
			int disAtoB = (int)Math.floor(Math.random()*(max-min+1)+min);
			int disAtoD = (int)Math.floor(Math.random()*(max-min+1)+min);
			int disAtoE = (int)Math.floor(Math.random()*(max-min+1)+min);
			
			int disBtoC = (int)Math.floor(Math.random()*(max-min+1)+min);
			int disCtoG = (int)Math.floor(Math.random()*(max-min+1)+min);
			int disDtoF = (int)Math.floor(Math.random()*(max-min+1)+min);
			int disEtoG = (int)Math.floor(Math.random()*(max-min+1)+min);
			int disFtoG = (int)Math.floor(Math.random()*(max-min+1)+min);
			
			MinimumConnectorDto minimumConnectorDto = new MinimumConnectorDto();
			minimumConnectorDto.setAtoB(disAtoB);
			minimumConnectorDto.setAtoD(disAtoD);
			minimumConnectorDto.setAtoE(disAtoE);
			minimumConnectorDto.setBtoC(disBtoC);
			minimumConnectorDto.setCtoG(disCtoG);
			minimumConnectorDto.setDtoF(disDtoF);
			minimumConnectorDto.setEtoG(disEtoG);
			minimumConnectorDto.setFtoG(disFtoG);
			
			return minimumConnectorDto;
		}
		catch(Exception ex) {
			return null;
		}
	}
	
	@PostMapping("/find/minimum-connector")
	public ResponseEntity findMinimumConnector(@RequestBody MinimumConnectorRequest minimumConnectorRequest) {
		try {
			int V = 7;
//			int[][] G = { { 0, 9, 75, 0, 0 }, { 9, 0, 95, 19, 42 }, { 75, 95, 0, 51, 66 }, { 0, 19, 51, 0, 31 },
//			        { 0, 42, 66, 31, 0 } };
			
			int[][] G = minimumConnectorRequest.getGraph();
			
			int INF = 9999999;
			int no_edge;
			boolean[] selected = new boolean[V];
			Arrays.fill(selected, false);
			no_edge = 0;
			selected[0] = true;
			System.out.println("Edge : Weight");
			
			while (no_edge < V - 1) {
				int min = INF;
				int x = 0;
				int y = 0;
				
				for (int i = 0; i < V; i++) {
					if (selected[i] == true) {
						for (int j = 0; j < V; j++) {
							if (!selected[j] && G[i][j] != 0) {
								if (min > G[i][j]) {
									min = G[i][j];
									x = i;
									y = j;
								}
							}
						}
					}
				}
				System.out.println(x + " - " + y + " :  " + G[x][y]);
				selected[y] = true;
				no_edge++;
			}
			return ResponseEntity.ok().body("Congratulations! Your answer is correct!");
		}
		
		catch(Exception ex) {
			ex.printStackTrace();
			return null;
		}
	}

}
