package com.notasplus.model.entity;

import java.util.Date;
import java.util.UUID;

public class Evaluation {

    private UUID evaluation_id;
    private EvaluationType evaluation_type;
    private Date date;
    private SubjectInstance subject_instance;
    private boolean is_deleted;

}
