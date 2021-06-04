package uninfz.ifrozet.ma.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import uninfz.ifrozet.ma.enumeration.ERole;
import uninfz.ifrozet.ma.beans.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
