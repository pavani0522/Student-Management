package com.pavs.service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pavs.dto.StudentDto;
import com.pavs.exception.ResourceNotFound;
import com.pavs.mapper.StudentMapper;
import com.pavs.model.Student;
import com.pavs.repository.StudentRepository;

@Service
public  class StudentServiceImpl implements StudentService{
	
	@Autowired
	private StudentRepository repo;
	
	public StudentDto addStudent(StudentDto studentDto) {
		
		Student student=StudentMapper.mapToStudent(studentDto);
		Student savedStudent= repo.save(student);
		return StudentMapper.mapToStudentDto(savedStudent) ;
		
	}
	
	 public StudentDto getStudent(int id) { // TODO Auto-generated method stub return
		  Student student=repo.findById(id).orElseThrow(() -> new ResourceNotFound("Student dosen't exist with the given id: "+ id )); 
		  
		  return StudentMapper.mapToStudentDto(student);
		  }

	@Override
	public List<StudentDto> getAllStudents() {
	List<Student> students= repo.findAll();
		return students.stream().map((student)-> StudentMapper.mapToStudentDto(student)).collect(Collectors.toList());
	}

	@Override
	public StudentDto updateStudent(int id, StudentDto updatedStudent) {
		Student student= repo.findById(id).orElseThrow(
				()->new ResourceNotFound("Student dosen't exist with given id: "+ id)
				);
		
		student.setFirstname(updatedStudent.getFirstname());
		student.setLastname(updatedStudent.getLastname());
		student.setEmail(updatedStudent.getEmail());
		
	Student updatedStudentObj	=repo.save(student);
		return StudentMapper.mapToStudentDto(updatedStudentObj);
	}

	@Override
	public void deleteStudent(int id) {
		Student student= repo.findById(id).orElseThrow(
				()->new ResourceNotFound("Student dosen't exist with given id: "+ id)
				);
		repo.deleteById(id);
		
	}
	 
	 

}
