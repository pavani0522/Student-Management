package com.pavs;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.OkHttp3ClientHttpRequestFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pavs.dto.StudentDto;
import com.pavs.model.Student;
import com.pavs.service.StudentService;

@CrossOrigin("*")
@RestController
public class StudentController {
	
	@Autowired
	StudentService service;
	
	//for getting a student with particular id
	@GetMapping("/students/{id}")
	public ResponseEntity<StudentDto> getStudent(@PathVariable("id") int id) {
		StudentDto studentDto= service.getStudent(id);
		return ResponseEntity.ok(studentDto);
		 
	}
	// for adding students
	@PostMapping("/students")
	public ResponseEntity<StudentDto> addStudent(@RequestBody StudentDto studentdto ) {
		StudentDto savedStudent=service.addStudent(studentdto);
		return new  ResponseEntity<>(savedStudent, HttpStatus.CREATED);
		
	}
	
	//for getting list of Students
	@GetMapping("/students")
	public ResponseEntity<List<StudentDto>> getAllStudents(){
		
		List<StudentDto> students=service.getAllStudents();
		return ResponseEntity.ok(students);
	}
	
	//Build update student RestAPI and updating the student info with particular id
	
	@PutMapping("/students/{id}")
	public ResponseEntity<StudentDto> updateStudent(@PathVariable("id") int id, @RequestBody StudentDto updatedStudent){
		
		StudentDto studentDto=service.updateStudent(id, updatedStudent);
		
		return ResponseEntity.ok(studentDto);
	}
	
	//Build a delete Student REST API
	@DeleteMapping("/students/{id}")
	public ResponseEntity<String> deleteStudent(@PathVariable("id")int id){
		service.deleteStudent(id);
		return ResponseEntity.ok("Student deleted successfully");
		
	}
	

}
