package cn.itcast.invoice.util.listener;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;


public class JdbcConnectionConfig {
	private String url = "jdbc:mysql://localhost:3306/erpdb1";
	private String user = "root";
	private String password = "root";
	
	
	public String getUrl() {
		return this.url;
	}
	
	public String getUser() {
		return this.user;
	}
	
	public String getPass() {
		return this.password;
	}
	
}
