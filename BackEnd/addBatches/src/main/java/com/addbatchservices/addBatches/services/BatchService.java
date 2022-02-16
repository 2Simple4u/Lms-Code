package com.addbatchservices.addBatches.services;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.addbatchservices.addBatches.model.Batch;
import com.addbatchservices.addBatches.repository.BatchRepository;

@Service
public class BatchService {

	@Autowired
	BatchRepository batchRepository;
	
	public List<Batch> getAllBatches() {
		List<Batch> list =new ArrayList<>();
		batchRepository.findAll().forEach(list::add);
		return list;	
	}
	
	public Batch getBatches(String id) {
		return batchRepository.findBybatchId(id);
	}
	
	public Batch addBatch(Batch batch) {
		return batchRepository.save(batch);
	}
	
	public ResponseEntity<String> delete(String id){
		batchRepository.deleteById(id);
		return ResponseEntity.ok("Succesfully Deleted");
	}
}
