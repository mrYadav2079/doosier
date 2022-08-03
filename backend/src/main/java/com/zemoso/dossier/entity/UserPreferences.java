package com.zemoso.dossier.entity;


import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "user_preferences")
@Getter@Setter@NoArgsConstructor@AllArgsConstructor@ToString
public class UserPreferences implements Serializable {

    @Id
    @ManyToOne
    private User user;
    @Column(name = "industry")
    String industry;

    @Column(name = "portfolio_type")
    String portfolioType;

    @Column(name = "experience")
    String experience;

    @Column(name = "color")
    String color;

    @Column(name = "designation")
    String designation;

    @Override
    public String toString() {
        return "UserPreferences{" +
                ", industry='" + industry + '\'' +
                ", portfolioType='" + portfolioType + '\'' +
                ", experience='" + experience + '\'' +
                ", color='" + color + '\'' +
                ", designation='" + designation + '\'' +
                '}';
    }
}
