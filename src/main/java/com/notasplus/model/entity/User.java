package com.notasplus.model.entity;

import java.util.List;
import java.util.UUID;

public class User {

    private UUID user_id;
    private String first_name;
    private String last_name;
    private String email;
    private int dni;
    private String password;
    private Role role;
    private List<Teacher> teachers;
    private List<Student> students;
    private List<Parent> parents;
    private boolean is_deleted;

}
