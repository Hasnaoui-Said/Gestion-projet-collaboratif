package uninfz.ifrozet.ma.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import uninfz.ifrozet.ma.beans.User;
import uninfz.ifrozet.ma.security.service.Dim_userService;


@RestController
@CrossOrigin( origins = {"http://localhost:4200"} )
@RequestMapping("/news-lettre-app/dim-user")
public class UserWs {

	@Autowired
	private Dim_userService dim_userService;


	@PostMapping("/login")
	public User loginUser(@RequestBody User dim_user){
		return dim_userService.loginUser(dim_user);
	}


	@PutMapping("/putuser")
	public int putuser(@PathVariable Long id,@RequestBody User user){
		return dim_userService.putuser(id,user);
	}
	@PostMapping("update-user/{state}")  
    public boolean updateUser(@RequestBody User user,@PathVariable Boolean state) {   
        return dim_userService.updateUser(user, state);  
    }  

	@GetMapping("/email/{email}/password/{password}")
	public User findByEmailAndPassword(@PathVariable String email,@PathVariable String password) {
		return dim_userService.findByEmailAndPassword(email, password);
	}

	@GetMapping("/email/{email}")
	public User findByEmail(@PathVariable String email) {
		return dim_userService.findByEmail(email);
	}

	
	@GetMapping("/username/{username}")
	//@PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_MODERATOR') or hasRole('ROLE_ADMIN')")
	public User findByUsername(@PathVariable String username) {
		return dim_userService.findByUsername(username);
	}
	
	@GetMapping("/searshUser/{string}")
	//@PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_MODERATOR') or hasRole('ROLE_ADMIN')")
	public List<User> searshUser(@PathVariable String string) {
		return dim_userService.searshUser(string);
	}

	@DeleteMapping("/email/{email}")
	public int deleteByEmail(@PathVariable String email) {
		return dim_userService.deleteByEmail(email);
	}

	@PostMapping("/")
	public int save(@RequestBody User dim_user) {
		return dim_userService.save(dim_user);
	}

	@GetMapping("/")
	public List<User> findAll() {
		return dim_userService.findAll();
	}

	public int hashCode() {
		return dim_userService.hashCode();
	}

	public boolean equals(Object obj) {
		return dim_userService.equals(obj);
	}

	public String toString() {
		return dim_userService.toString();
	}
}
