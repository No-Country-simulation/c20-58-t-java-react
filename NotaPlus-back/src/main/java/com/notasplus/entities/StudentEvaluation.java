package com.notasplus.entities;

import com.notasplus.utils.Status;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "student_evaluations")
public class StudentEvaluation {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "student_evaluation_id", nullable = false)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "evaluation_id", nullable = false)
    private Evaluation evaluation;

    @Column(name = "grade", nullable = false)
    private Byte grade;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private Status status;


    @Column(name = "feedback")
    private String feedback;

    @ColumnDefault("0")
    @Column(name = "is_deleted")
    private Boolean isDeleted;

}