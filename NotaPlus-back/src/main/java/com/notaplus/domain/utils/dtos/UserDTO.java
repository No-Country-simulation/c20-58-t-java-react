package com.notaplus.domain.utils.dtos;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import java.util.UUID;

@Data
@AllArgsConstructor(access = AccessLevel.PUBLIC)
public class UserDTO {

    @NonNull
    private UUID id;

    private String firstName;

    private String lastName;

    private String email;

    private Integer dni;

    private String password;

    private String role;

    private Boolean isDeleted;


}
