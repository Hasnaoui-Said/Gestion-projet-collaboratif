package uninfz.ifrozet.ma.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import uninfz.ifrozet.ma.beans.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
	

	public User findByEmail(String ref);
	public User findByEmailAndPassword(String email,String password);
	public int deleteByEmail(String ref);

	public User findByLastname(String ref);

	public User findByFirstname(String ref);
}
