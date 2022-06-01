package codesquad.airbnb.member.repository;

import codesquad.airbnb.member.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

}
