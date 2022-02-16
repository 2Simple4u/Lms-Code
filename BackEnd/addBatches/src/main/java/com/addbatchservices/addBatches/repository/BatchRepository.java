package com.addbatchservices.addBatches.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.addbatchservices.addBatches.model.Batch;

@EnableMongoRepositories
public interface BatchRepository extends MongoRepository<Batch, String>{
	public Batch findBybatchId(String batchId);
	public void deleteBybatchId(String batchId);

}
