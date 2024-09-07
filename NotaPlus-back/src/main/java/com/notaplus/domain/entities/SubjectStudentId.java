package com.notaplus.domain.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

@Getter
@Setter
@Embeddable
public class SubjectStudentId implements Serializable {
    private static final long serialVersionUID = -3503769384928709177L;
    @Column(name = "subject_instance_id", nullable = false)
    private UUID subjectInstanceId;

    @Column(name = "student_id", nullable = false)
    private UUID studentId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        SubjectStudentId entity = (SubjectStudentId) o;
        return Objects.equals(this.studentId, entity.studentId) &&
                Objects.equals(this.subjectInstanceId, entity.subjectInstanceId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(studentId, subjectInstanceId);
    }

}