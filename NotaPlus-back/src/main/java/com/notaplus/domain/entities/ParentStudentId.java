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
public class ParentStudentId implements Serializable {
    private static final long serialVersionUID = -6461697017242633498L;
    @Column(name = "parent_id", nullable = false)
    private UUID parentId;

    @Column(name = "student_id", nullable = false)
    private UUID studentId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ParentStudentId entity = (ParentStudentId) o;
        return Objects.equals(this.studentId, entity.studentId) &&
                Objects.equals(this.parentId, entity.parentId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(studentId, parentId);
    }

}