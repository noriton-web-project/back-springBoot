package com.noriton.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    private String name;

    private Boolean isLogined;

    @OneToMany(mappedBy = "member")
    @JsonIgnore(value = false)
    private List<Post> posts = new ArrayList<>();
}

