package com.notasplus.model.entity;

import java.util.UUID;

public class StudentEvaluation {

    private UUID student_evaluation_id;
    private byte grade;
    private Status status;
    private String feedback;
    private Student student_id;
    private Evaluation evaluation_id;
    private boolean id_deleted;

}
