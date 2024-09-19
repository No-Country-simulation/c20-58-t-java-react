package com.notaplus.domain.repositories;

import com.notaplus.domain.entities.SubjectInstance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectInstanceRepository extends JpaRepository<SubjectInstance, Integer> {
}
