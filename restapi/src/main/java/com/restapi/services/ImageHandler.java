package com.restapi.services;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;


@Component
public class ImageHandler {
	
	private final String url ="E:\\projects\\react\\rest\\public\\image";
	
    public String saveImage(MultipartFile file) {
    	try {
    		Path path = Paths.get(url+File.separator+file.getOriginalFilename());
        	Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
        	//return path.toString();
        	return file.getOriginalFilename();
        	
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			return null;
		}
    	
    }

}
