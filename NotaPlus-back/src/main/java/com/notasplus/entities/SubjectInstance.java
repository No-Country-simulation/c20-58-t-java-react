package com.notasplus.entities;

import com.notasplus.utils.Section;
import com.notasplus.utils.Shift;
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
@Table(name = "subject_instances")
public class SubjectInstance {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "subject_instance_id", nullable = false)
    private UUID id;

    @Column(name = "academic_period", nullable = false, length = 10)
    private String academicPeriod;

    @Enumerated(EnumType.STRING)
    @Column(name = "section", nullable = false)
    private Section section;

    @Enumerated(EnumType.STRING)
    @Column(name = "shift", nullable = false)
    private Shift shift;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.SET_NULL)
    @JoinColumn(name = "subject_id")
    private Subject subject;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.SET_NULL)
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @ColumnDefault("0")
    @Column(name = "is_deleted")
    private Boolean isDeleted;

}