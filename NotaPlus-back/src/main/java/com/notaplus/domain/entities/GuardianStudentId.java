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
public class GuardianStudentId implements Serializable {
    private static final long serialVersionUID = -6461697017242633498L;
    @Column(name = "guardian_id", nullable = false)
    private UUID guardianId;

    @Column(name = "student_id", nullable = false)
    private UUID studentId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        GuardianStudentId entity = (GuardianStudentId) o;
        return Objects.equals(this.studentId, entity.studentId) &&
                Objects.equals(this.guardianId, entity.guardianId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(studentId, guardianId);
    }

}