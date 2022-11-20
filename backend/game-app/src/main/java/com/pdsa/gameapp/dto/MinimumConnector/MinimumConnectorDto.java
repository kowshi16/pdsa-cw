package com.pdsa.gameapp.dto.MinimumConnector;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MinimumConnectorDto {
	private int AtoB;
	private int AtoE;
	private int AtoD;
	private int BtoC;
	private int CtoG;
	private int DtoF;
	private int EtoG;
	private int FtoG;
	
	public int getAtoB() {
		return AtoB;
	}
	
	public void setAtoB(int atoB) {
		AtoB = atoB;
	}
	
	public int getAtoE() {
		return AtoE;
	}
	
	public void setAtoE(int atoE) {
		AtoE = atoE;
	}
	
	public int getAtoD() {
		return AtoD;
	}
	
	public void setAtoD(int atoD) {
		AtoD = atoD;
	}
	
	public int getBtoC() {
		return BtoC;
	}
	
	public void setBtoC(int btoC) {
		BtoC = btoC;
	}
	
	public int getCtoG() {
		return CtoG;
	}
	
	public void setCtoG(int ctoG) {
		CtoG = ctoG;
	}
	
	public int getDtoF() {
		return DtoF;
	}
	
	public void setDtoF(int dtoF) {
		DtoF = dtoF;
	}
	
	public int getEtoG() {
		return EtoG;
	}
	
	public void setEtoG(int etoG) {
		EtoG = etoG;
	}
	
	public int getFtoG() {
		return FtoG;
	}
	
	public void setFtoG(int ftoG) {
		FtoG = ftoG;
	}
	
}
