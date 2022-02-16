package com.addbatchservices.addBatches;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.addbatchservices.addBatches.model.Batch;
import com.addbatchservices.addBatches.repository.BatchRepository;
import com.addbatchservices.addBatches.services.BatchService;


@SpringBootTest
class AddBatchesApplicationTests {
	BatchRepository mock = Mockito.mock(BatchRepository.class);

	@Autowired
	public BatchService batchService;

	@MockBean
	public BatchRepository batchRepository;
	
	@Test
	public void getBatchTest() {
		when(batchRepository.findAll()).thenReturn(Stream
				.of(new Batch("199","jfs_dec-21","22-10-21","22-12-21","10-pm","12pm","Sasi","this is jfs batch"),
						new Batch("199","jfs_dec-21","22-10-21","22-12-21","10-pm","12pm","Sasi","this is jfs batch"))
				.collect(Collectors.toList()));
		assertEquals(2,batchService.getAllBatches().size());
		
	}
	@Test
	public void saveBatchTest() {
		Batch batch= new Batch("199","jfs_dec-21","22-10-21","22-12-21","10-pm","12pm","Sasi","this is jfs batch");
		when(batchRepository.save(batch)).thenReturn(batch);
		assertEquals(batch, batchService.addBatch(batch));
	}
	
	@Test
	public void deleteBatchTest() {
		Batch batch= new Batch("199","jfs_dec-21","22-10-21","22-12-21","10-pm","12pm","Sasi","this is jfs batch");
		batchService.delete("199");
		verify(batchRepository,times(1)).deleteById(batch.getBatchId());
		
	}
}
	
	

