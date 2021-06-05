package uninfz.ifrozet.ma.util;

import org.springframework.data.jpa.repository.JpaRepository;
import uninfz.ifrozet.ma.beans.User;


public interface UserRepoVo extends JpaRepository<User, Long> {
	public User findByUsername(String ref);
}
