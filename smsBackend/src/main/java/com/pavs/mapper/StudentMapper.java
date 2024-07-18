package com.pavs.mapper;

import com.pavs.dto.StudentDto;
import com.pavs.model.Student;

public class StudentMapper {
	
public static  StudentDto mapToStudentDto(Student student) {
		
		return new StudentDto(
				student.getId(),
				student.getFirstname(),
				student.getLastname(),
				student.getEmail()
				
				
				);
	}
	
	public static Student mapToStudent(StudentDto studentDto) {
		return new Student(
				studentDto.getId(),
				studentDto.getFirstname(),
				studentDto.getLastname(),
				studentDto.getEmail()
				);
		
	}


}
