package com.motherdairy.milkbank.model;

import jakarta.persistence.*;

@Entity
@Table(name = "signup_users")
public class SignupUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    public SignupUser() {}

    public SignupUser(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "SignupUser [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + "]";
	}

    
}
