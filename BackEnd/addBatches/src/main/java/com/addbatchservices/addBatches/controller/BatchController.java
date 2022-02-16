package com.addbatchservices.addBatches.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.addbatchservices.addBatches.model.Batch;
import com.addbatchservices.addBatches.services.BatchService;

@RestController
@CrossOrigin("*")
public class BatchController {
	

	@Autowired
	BatchService batchService;
	
	@Autowired
	private RestTemplate restTemplate;
	
	
	@GetMapping("/getAllBatch")
	public List<Batch> getAll(){
		return batchService.getAllBatches();
	}
	
	@GetMapping("/getBatchById/{Id}")
	public Batch getBatchById(@PathVariable("Id") String Id) {
		Batch batch =this.batchService.getBatches(Id);
		List employee = this.restTemplate.getForObject("http://Add-Employee-Service/getAllEmployee/",List.class);
		batch.setEmployee(employee);
		return batch;
	}
	
	@PostMapping("/addbatch")
	public Batch  addBatch(@RequestBody Batch batch){
		return batchService.addBatch(batch);
	}
	
	@DeleteMapping("/delete/{Id}")
	public ResponseEntity<String> delById(@PathVariable("Id") String Id){
		return batchService.delete(Id);
	}
	
	
}	

