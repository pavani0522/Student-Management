package com.pavs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;

import com.pavs.dto.StudentDto;
import com.pavs.exception.ResourceNotFound;
import com.pavs.mapper.StudentMapper;
import com.pavs.model.Student;
import com.pavs.repository.StudentRepository;

@Service
public interface StudentService {

	
	
	public StudentDto addStudent(StudentDto studentDto);
	
	 public StudentDto getStudent(int id);
	 
	 public List<StudentDto> getAllStudents();
	 
	 public StudentDto updateStudent(int id, StudentDto updatedStudent);
	 
	 public void  deleteStudent(int id);
	 
	
}
