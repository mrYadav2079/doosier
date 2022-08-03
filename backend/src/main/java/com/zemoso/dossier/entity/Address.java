package com.zemoso.dossier.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;
import javax.persistence.*;



@Entity
@Table(name="address")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @ToString
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "line1")
    String street;

    @Column(name = "line2")
    String landmark;

    @Column(name = "city")
    String city;

    @Column(name = "state")
    String state;

    @Column(name = "country")
    String country;

    @ManyToOne
    private User user;

}
