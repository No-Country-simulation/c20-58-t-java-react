package com.notasplus.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "user_id", nullable = false)
    private UUID id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "dni", nullable = false)
    private Integer dni;

    @Column(name = "password", nullable = false)
    private String password;

    @Lob
    @Column(name = "role", nullable = false)
    private String role;

    @ColumnDefault("0")
    @Column(name = "is_deleted")
    private Boolean isDeleted;

}