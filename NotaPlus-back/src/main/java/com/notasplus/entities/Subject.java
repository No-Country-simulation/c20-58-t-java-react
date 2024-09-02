package com.notasplus.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "subjects")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "subject_id", nullable = false)
    private UUID id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "course", nullable = false)
    private Integer course;

    @ColumnDefault("0")
    @Column(name = "is_deleted")
    private Boolean isDeleted;

}