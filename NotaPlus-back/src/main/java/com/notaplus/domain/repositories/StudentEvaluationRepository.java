package com.notaplus.domain.repositories;

import com.notaplus.domain.entities.StudentEvaluation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentEvaluationRepository extends JpaRepository<StudentEvaluation, Integer> {
}
