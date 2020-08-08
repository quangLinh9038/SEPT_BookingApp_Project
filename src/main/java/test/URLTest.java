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

/**
 * Created by Lam Doan on 07 Aug 2020
 * Testing class
 * Unit test URL
 */

public class URLTest {
    private HttpURLConnection httpURLConnection;
    private BufferedReader bufferedReader;
    private StringBuilder stringBuilder;

    // Admin URL
    @Test
    public void adminURLTest(){

        try{
            URL adminURLTest = new URL(TestConfig.URL+"admin");
            httpURLConnection = (HttpURLConnection) adminURLTest.openConnection();
            bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
            String line = "";
            stringBuilder = new StringBuilder();

            while((line = bufferedReader.readLine()) !=null){
                stringBuilder.append(line);
            }

            Gson gson = new Gson();
            String json = stringBuilder.toString();
            List<Admin> admins = gson.fromJson(json, new TypeToken<List<Admin>>(){}.getType());
            String s = stringBuilder.toString();
            Assert.assertEquals(admins.get(0).getName(), "Thanh");

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Employee's URL
    @Test
    public void  EmployeeURLTest(){
        try {
            URL EmployeeURLTest = new URL(TestConfig.URL+"employees");
            httpURLConnection = (HttpURLConnection) EmployeeURLTest.openConnection();
            bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
            String line = "";
            stringBuilder = new StringBuilder();

            while((line = bufferedReader.readLine()) !=null){
                stringBuilder.append(line);
            }
        }  catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //CustomerURL
    @Test
    public void  CustomerURLTest(){
        try {
            URL CustomerURLTest = new URL(TestConfig.URL+"customers");
            httpURLConnection = (HttpURLConnection) CustomerURLTest.openConnection();
            bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
            String line = "";
            stringBuilder = new StringBuilder();

            while((line = bufferedReader.readLine()) !=null){
                stringBuilder.append(line);
            }
        }  catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //Service URL
    @Test
    public void  ServiceURLTest(){
        try {
            URL ServiceURLTest = new URL(TestConfig.URL+"services");
            httpURLConnection = (HttpURLConnection) ServiceURLTest.openConnection();
            bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
            String line = "";
            stringBuilder = new StringBuilder();

            while((line = bufferedReader.readLine()) !=null){
                stringBuilder.append(line);
            }
        }  catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    //Booking URL
    @Test
    public void  BookingURLTest(){
        try {
            URL BookingURLTest = new URL(TestConfig.URL+"booking");
            httpURLConnection = (HttpURLConnection) BookingURLTest.openConnection();
            bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
            String line = "";
            stringBuilder = new StringBuilder();

            while((line = bufferedReader.readLine()) !=null){
                stringBuilder.append(line);
            }
        }  catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}