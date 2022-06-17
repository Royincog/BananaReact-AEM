package com.banana.core.entity;

public class BananaCard {

    private String cardTitle;
    private String cardDescription;

    public BananaCard(String cardTitle, String cardDescription) {
        this.cardTitle = cardTitle;
        this.cardDescription = cardDescription;
    }

    public BananaCard() {
    }

    public String getCardTitle() {
        return cardTitle;
    }

    public void setCardTitle(String cardTitle) {
        this.cardTitle = cardTitle;
    }

    public String getCardDescription() {
        return cardDescription;
    }

    public void setCardDescription(String cardDescription) {
        this.cardDescription = cardDescription;
    }

    @Override
    public String toString() {
        return String.format("CardTitle : %s and CardDescription : %s",this.cardTitle,this.cardDescription);
    }
}
