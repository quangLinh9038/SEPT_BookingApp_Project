package test;


import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import model.Admin;
import org.junit.Assert;
import org.junit.Test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

public class MyTest {

    @Test
    public void test1() throws IOException {

        try{
	        URL url = new URL(TestConfig.URL+"admin");
	        HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
	        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
	        String line = "";
	        StringBuilder stringBuilder = new StringBuilder();
	
	        while((line = bufferedReader.readLine()) !=null){
	            stringBuilder.append(line);
	        }
	
//	        Gson gson = new Gson();
//	        String json = stringBuilder.toString();
//	        List<Admin> admins = gson.fromJson(json, new TypeToken<List<Admin>>(){}.getType());
////	        String s = stringBuilder.toString();
//	        Assert.assertEquals(admins.get(0).getName(), "Thanh");
	        
	    } catch (MalformedURLException e) {
	        e.printStackTrace();
	    } catch (IOException e) {
	        e.printStackTrace();
    }
}

}
