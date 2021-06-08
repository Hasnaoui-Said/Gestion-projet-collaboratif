package uninfz.ifrozet.ma.util.request;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import uninfz.ifrozet.ma.beans.User;

@Repository
public interface UserRepoVo extends JpaRepository<User, Long> {
	public User findByUsername(String ref);
}
