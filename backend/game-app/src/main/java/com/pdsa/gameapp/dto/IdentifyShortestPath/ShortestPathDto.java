package com.pdsa.gameapp.dto.IdentifyShortestPath;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ShortestPathDto {
	private int ZeroToOne;
	private int OneToTwo;
	private int TwoToThree;
	private int ThreeToFour;
	private int ThreeToFive;
	private int FourToSix;
	private int FiveToSix;
	private int SixToZero;
	
	public int getZeroToOne() {
		return ZeroToOne;
	}
	
	public void setZeroToOne(int zeroToOne) {
		ZeroToOne = zeroToOne;
	}
	
	public int getOneToTwo() {
		return OneToTwo;
	}
	
	public void setOneToTwo(int oneToTwo) {
		OneToTwo = oneToTwo;
	}
	
	public int getTwoToThree() {
		return TwoToThree;
	}
	
	public void setTwoToThree(int twoToThree) {
		TwoToThree = twoToThree;
	}
	
	public int getThreeToFour() {
		return ThreeToFour;
	}
	
	public void setThreeToFour(int threeToFour) {
		ThreeToFour = threeToFour;
	}
	
	public int getThreeToFive() {
		return ThreeToFive;
	}
	
	public void setThreeToFive(int threeToFive) {
		ThreeToFive = threeToFive;
	}
	
	public int getFourToSix() {
		return FourToSix;
	}
	
	public void setFourToSix(int fourToSix) {
		FourToSix = fourToSix;
	}
	
	public int getFiveToSix() {
		return FiveToSix;
	}
	
	public void setFiveToSix(int fiveToSix) {
		FiveToSix = fiveToSix;
	}
	
	public int getSixToZero() {
		return SixToZero;
	}
	
	public void setSixToZero(int sixToZero) {
		SixToZero = sixToZero;
	}
	
	
}
